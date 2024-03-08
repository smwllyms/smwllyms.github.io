function random()
{
  let r = Number("."+Math.random().toFixed(20).substring(5,20));
  console.log(r)
  return r;
}

function get(worh)
{
  if (worh === "h")
  {
    return document.body.clientHeight;
  }
  else
  {
    return document.body.clientWidth;
  }
}

function start()
{

    const canvas = document.getElementById("fun");
    const ctx = canvas.getContext("2d");

    const balls = [];

    function fitCanvas() {
        canvas.width = get("w");
        canvas.height = get("h");
        // resize();
    }
    window.addEventListener("resize", fitCanvas);
    fitCanvas();

    const numBalls = 40;
    let w = get("w");
    let h = get("h");
    for (let i = 0; i < numBalls; i++)
    {
        let rx = random();
        let ry = random();
        balls.push({
            fx: rx,
            fy: ry,
            x: rx*w,
            y: ry*h,
            vx: 0.5,
            vy: 0.5,
            radius: 12 * ry,
            color: "grey",
            draw() {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
              ctx.closePath();
              ctx.fillStyle = this.color;
              ctx.fill();
            },
          })
    }

    function draw()
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle="rgb(255,213,230)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      balls.forEach(ball=>{
          ball.draw();
          ball.x += ball.vx * ball.fx;
          ball.y += ball.vy * ball.fy;

          if (ball.y + ball.vy >= canvas.height || ball.y + ball.vy < 0) {
              ball.vy = -ball.vy;
            }
          if (ball.x + ball.vx >= canvas.width || ball.x + ball.vx < 0) {
              ball.vx = -ball.vx;
          }
      })

      window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
}

window.addEventListener("load", ()=>start());