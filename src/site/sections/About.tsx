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
        text={"At the intersection of music and audio, software engineering, and immersive environments and applications, I aim to leverage my creativity, work ethic, and passion to innovate and support musical and audio spaces in industry, open-source, and academia."}
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
      <Text text={<>
      <p>I am Sam Williams - a musician, software engineer, and passionate advocate for learning and accessibility, specifically in the world of audio. I've always seen programming as a means to an end, a tool in the human arsenal for acheiving goals. My goal is to leverage my unique blend of perspective, passions, and skills to help contribute to and improve the music and audio space for musicians, audio software developers, and everyone in between.</p>
      <p>I started playing on a small drumset when I was 5 years old, picked up acoustic and electric guitar in third grade, played the alto and tenor saxophone and french horn in concert bands in school, played saxophone and bass guitar in a few jazz bands, and performed in marching band throughout high school, serving as drum major my senior year. I have also been producing, mixing and mastering music (mostly electronic) for over 10 years.</p>
      <p>I created my first website in third grade (gamesterguy.com - a repository of flash games I liked), a flash game for a math project in sixth grade (which I received an A on), and built numerous games in Unity3D in highschool. I started audio programming in college (mostly VSTs like phase vocoders exploring auto-tuning, pitch mapping, and timbre shifting) in addition to others like compression and transient shaping. View my projects to explore more of my prior work.</p>
      <p>I attended Virginia Tech for both my B.S. (Fall 2022) and M.S. (Winter 2023) in computer science. I was a member of the <a href="https://wordpress.cs.vt.edu/dvelab/" target="_blank">Distributed Virtul Environments (D.V.E.) lab</a> under the supervision of Denis Gracanin.</p>
      <p>I also taught as an adjunct instructor for an introductory course to GUI, computer graphics and full-stack development.</p>
      </>} />
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
