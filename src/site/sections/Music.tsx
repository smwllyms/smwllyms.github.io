import * as React from "react";
import soundcloud from "../../img/soundcloud.png";
import { Section } from "../../lib/components/Section/Section";
import { Image } from "../../lib/components/Image/Image";
import { Text } from "../../lib/components/Text/Text";
import { Embed } from "../../lib/components/Embed/Embed";
import { BaseElement } from "../../lib/components/Base/BaseElement";
import { MUSIC_SECTION_ID } from "../App";

export const Music = (): React.JSX.Element => {
  return (
    <Section
      id={MUSIC_SECTION_ID}
      title="Music & Audio"
      style={{
        background: "linear-gradient(to right, rgba(100,80,0,0.7), rgba(177,141,0,0.7))",
        color: "#fff"
      }}
    >
      <BaseElement
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          src={soundcloud}
          alt="soundcloud"
          imgStyle={{
            width: "100%",
            maxWidth: 250,
            minWidth: 100,
            filter: "invert(100%)"
          }} />
      </BaseElement>
      <Text text={"I grew up playing guitar, the saxaphone, and french horn. Although I love many different types of genres of music, I have a special love for electronic dance music (EDM). It inspired me to begin producing music, a hobby I continue today. I first started using FL studio, my digital audio workstation (DAW), back when I was just 13 years old. Over a decade later, I'm still at it. Additionally, this love for music helped aim me in the direction of audio programming such as for my thesis (non-verbal vocal interaction) and coding audio plugins!"} />
      <BaseElement
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <Embed src="https://open.spotify.com/embed/artist/2BmAeGaSrzNsxhqfoS6PKr?utm_source=generator&theme=0" height={352} />
      </BaseElement>
    </Section>
  );
};

