import * as React from "react";
import nvvi from "../../img/projects/nvvi-1.png";
import youtube from "../../img/projects/youtube.png";
import fourier from "../../img/projects/fourier.png";
import audioplugindev from "../../img/projects/audioplugindev.png";
import asmimg from "../../img/projects/asm.png";
import { Section } from "../../lib/components/Section/Section";
import { Text } from "../../lib/components/Text/Text";
import { HeroSlider } from "../../lib/components/HeroSlider/HeroSlider";
import { PROJECTS_SECTION_ID } from "../App";

export const Projects = (): React.JSX.Element => {
  return (
    <Section
      id={PROJECTS_SECTION_ID}
      title="Projects"
      style={{ background: "linear-gradient(to right, rgb(244,63,94), rgb(136,19,55))", color: "#fff" }}
    >
      <Text text={"I am very motivated to spread my knowledge accross the world! I put much of my work on GitHub as open source educational material. I love developing in JavaScript and HTML because it's how I prototype most of my projects. I then use GitHub pages to host them. Here are some of my favorites that you can check out for yourself by clicking them:"} />
      <HeroSlider
        items={[
          {
            title: "NVVI overview, demo, and mock study",
            description: "An overview of the pitch-based NVVI tool implementation used in my thesis work. See how well you can control a slider with the pitch of your humming and whistling!",
            image: nvvi,
            link: "https://smwllyms.github.io/nvvi-pitch-based-1"
          },
          {
            title: "Fourier and audio processing tools",
            description: "Check out some of my work with the famous audio-processing Discrete and Fast Fourier Transform (DFT and FFT) algorithms! Explore an online calculator that showcases a variety of optomized algorithms for calculating FT and IFTs of input values, and visit the live fourier analysis where you can watch the algorithm at work as it guesses the pitch of oscillators or audio input from your microphone!",
            image: fourier,
            link: "https://smwllyms.github.io/FourierStuff"
          },
          {
            title: "Audio plugin development sandbox",
            description: "Explore audio processing in my plug-and-play web browser-based audio plugin GUI development sandbox! This work-in-progress is part of a larger project where I hope to exponentially improve VST development time by allowing prototyping in this sandbox. If you've ever tried developing VSTs using Steinberg's SDK, you know how time consuming and redundant much of it is.",
            image: audioplugindev,
            link: "https://smwllyms.github.io/program-browser-v2"
          },
          {
            title: "x86 ASM sandbox/debugger",
            description: "This online x86 assembly sandbox and debugger allows you to visualize and manipulate an x86 program's memory and stack during runtime. There is also a console that supports some functional operations including breakpoints (line and conditional), custom labelling, and more. Assembly from Ghidra can be directly imported (so long as the instructions are functional and label references are resolvable).",
            image: asmimg,
            link: "https://smwllyms.github.io/OnlineAsmDebugger/"
          },
          {
            title: "YouTube series on the Fourier Transform",
            description: "I created a YouTube series on the Fourier Transform, code-wise as well as visually (in Desmos). I also explain how the algorithm is progressively optimized (eg, into the FFT).",
            image: youtube,
            link: "https://www.youtube.com/@sqfx744/playlists"
          }
        ]}
        auto={true}
        intervalMs={10000}
      />
    </Section>
  );
};

