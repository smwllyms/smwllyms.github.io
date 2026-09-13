// Traverse all DOM nodes in body and apply macros
// Array.from(document.styleSheets).forEach((styleSheet)=>{
//     console.log(styleSheet.cssRules);
// });
var staticMacros = false;

// Our environment
window.CSSMacrosEnvironment = {};
window.CSSMacrosEnvironment.staticMacros = staticMacros;
window.CSSMacrosEnvironment.macros = new Map();
window.CSSMacrosEnvironment.keyRef = new Map();
window.CSSMacrosEnvironment.numKeys = 0;

// Set function
window.CSSMacrosEnvironment.setMacro = function (key, value) 
{
    if (window.CSSMacrosEnvironment.staticMacros) return;
    // return;
    let val = window.CSSMacrosEnvironment.macros.get(key);
    if (val) 
    {
        Array.from(document.head.getElementsByTagName("style")).forEach(styleSheet=>
        {
            let text = styleSheet.innerHTML;
            let keyRef = window.CSSMacrosEnvironment.keyRef.get(key);
            // let offset = 3 + keyRef.toString().length;
            let ogLines = window.CSSMacrosEnvironment.macroLines.get(key);
            let i = 0;
            let match = new RegExp("\;\/\/"+keyRef+"\.0", "g").exec(text);
            while (match != null && i < ogLines.length)
            {
                let endIndex = match.index;
                let startIndex = endIndex - 1;
                while (text[startIndex] != ';' && text[startIndex] != '{') startIndex--;
                startIndex++;
                let start = text.substring(0, startIndex);
                let end = text.substring(endIndex, text.length);
                let newLine = ogLines[i].replace(key, value);
                text = start + newLine + end;
                i++;
                match = new RegExp("\;\/\/"+keyRef+"\."+i.toString(), "g").exec(text);
            }
            styleSheet.innerHTML = text;
        });
    }
}

if (!staticMacros)
{
    window.CSSMacrosEnvironment.macroLines = new Map();
}

window.addEventListener('DOMContentLoaded', (event) => {
    var styleSheets = Array.from(document.head.getElementsByTagName("link")).filter(ss=>ss.rel === "stylesheet");
    styleSheets.forEach(styleSheet=>{
        // Remove from DOM
        let parent = styleSheet.parentElement;
        parent.removeChild(styleSheet);

        // Get data
        fetch(styleSheet.href).then(e=>e.text().then(text=>
        {

            // Replace all macros
            let space = "\\s\t\r\n";
            var macroRegex = new RegExp("\@macros["+space+"]*\{[a-zA-Z0-9\-\(\)\"\'\;\,\:\%\/"+space+"]*\}").exec(text)[0];
            let macroList = macroRegex.substring(macroRegex.indexOf('{')+1).replace(new RegExp("["+space+"\}]*", "g"),"");
            let macroPairs = macroList.split(";");
            let macros = window.CSSMacrosEnvironment.macros;
            let keyRef = window.CSSMacrosEnvironment.keyRef;
            let numKeys = window.CSSMacrosEnvironment.numKeys;
            let macroLines = window.CSSMacrosEnvironment.macroLines;
            let keys = []
            macroPairs.forEach(pair=>{
                let s = pair.split(":");
                if (s.length == 2) {
                    macros.set(s[0], s[1]);
                    keys.push(s[0]);
                    keyRef.set(s[0], numKeys++);
                }
            });

            // new css text
            let newText = text.replace(macroRegex, "");
            // Replace all variables
            keys.forEach(key=>{
                let i = 0, startIndex = 0, ref = keyRef.get(key), value = macros.get(key);
                let lines = [];
                let match = new RegExp(key).exec(newText);
                while (match != null && i < 500)
                {
                    startIndex = match.index;
                    let endOfLineIndex = Math.min(newText.indexOf(';', startIndex), newText.indexOf('}', startIndex));
                    while (newText[startIndex] != ';' && newText[startIndex] != '{') startIndex--;
                    startIndex++;
                    let line = newText.substring(startIndex, endOfLineIndex);
                    if (!staticMacros)
                    {
                        lines.push(line);
                    }
                    line += ";"
                    let start = newText.slice(0, startIndex);
                    let end = newText.slice(endOfLineIndex, newText.length);
                    let hint = "";
                    if (!staticMacros)
                    {
                        hint += "//" + ref+ "." + i;
                    }
                    let newLine = line.replace(new RegExp(key), value);
                    newText = start + newLine + hint + end;
                    i++;
                    match = new RegExp(key, "g").exec(newText);
                }
                if (!staticMacros)
                {
                    macroLines.set(key, lines);
                }
            });

            if (!staticMacros)
            {
                // TODO add dynamic macros
                let newCSS = document.createElement("style");
                newCSS.innerHTML = newText
                document.head.appendChild(newCSS);
            }
            else
            {
                // ADD new back to DOM
                var blob = new Blob([newText], {type: "text/css"});
                var url  = window.URL.createObjectURL(blob);
                
                let newCSS = document.createElement("link");
                newCSS.setAttribute("rel", "stylesheet");
                newCSS.setAttribute("href", url);
                parent.appendChild(newCSS);
            }
        }
    ))})
});