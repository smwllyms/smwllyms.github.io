import * as React from "react";
import meImg from "../../img/me_fr.jpg";
import gradImg from "../../img/grad.jpg";
import teachImg from "../../img/teach.jpg";
import { Section } from "../../lib/components/Section/Section";
import { Image } from "../../lib/components/Image/Image";
import { Text } from "../../lib/components/Text/Text";
import { BaseElement } from "../../lib/components/Base/BaseElement";
import { ABOUT_ME_SECTION_ID } from "../App";
import linkedin from "../../img/linkedin2.png";
import github from "../../img/nav/github.svg";
import { Icon } from "../../lib/components/Icon/Icon";

export const About = (): React.JSX.Element => {
  return (
    <Section
      id={ABOUT_ME_SECTION_ID}
      title="About Me"
      style={{
        background: "linear-gradient(to right, rgba(255,255,255,1), rgba(230,237,244,0.7))",
        color: "#000"
      }}
    >
      <Text
        text={"Software Engineer specializing in immersive applications, with a strong background in audio programming and GUI development. Committed to enhancing web accessibility and creating interactive and educational web applications. Blending creativity with technical prowess to deliver impactful digital experiences."}
        style={{
          borderLeft: "4px solid rgba(0,0,255,0.4)",
          background: "rgba(0,0,0,0.1)",
          paddingLeft: "16px"
        }}
      />
      <BaseElement style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        gap: "12px",
        paddingTop: "24px"
      }}>
        <Icon
          iconUrl={linkedin}
          alt="linkedin"
          onClick={() => {
            window.open("https://www.linkedin.com/in/shwilliams-vt/", "_blank");
          }}
        />
        <Icon
          iconUrl={github}
          alt="github"
          onClick={() => {
            window.open("https://github.com/smwllyms", "_blank");
          }}
        />
      </BaseElement>
      <Text text={"I am Sam Williams, a computer scientist and engineer specializing in web applications and design, programming education, and audio programming. My driving force in this world is to help create a knowledgeable community of programmers that contribute to open-source and educational programs and applications to help others learn about programming and computer science! Specifically, I'd like to improve general knowledge on the development of audio plugins like VSTs."} />
      <Text text={"I also taught as an adjunct instructor for an introductory course to GUI, computer graphics and full-stack development."} />
      <BaseElement
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image src={meImg}
          alt="me"
          imgStyle={{ width: 320, height: 450 }}
        />
        <Image src={gradImg}
          alt="graduation"
          imgStyle={{ width: 320, height: 450 }}
        />
        <Image src={teachImg}
          alt="teaching"
          imgStyle={{ width: 320, height: 450 }}
        />
      </BaseElement>
    </Section>
  );
};
