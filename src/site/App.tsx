import * as React from "react";
import { NavigationEntry, useNavigation } from "./hooks/useNavigation";
import { Header } from "../lib/components/Header/Header";
import { Footer } from "../lib/components/Footer/Footer";
import { About } from "./sections/About";
import { Image } from "../lib/components/Image/Image";
import { Projects } from "./sections/Projects";
import { Music } from "./sections/Music";
import { BaseElement } from "../lib/components/Base/BaseElement";
import { FooterStyles, HeaderStyles, HeaderTitleStyles } from "./App.css";
import ico from "../img/ico.png";
import { useObserverEffect } from "./hooks/useObserverEffect";

export const HEADER_HEIGHT = 64;

export const ABOUT_ME_SECTION_ID = "about-me";
export const PROJECTS_SECTION_ID = "projects";
export const MUSIC_SECTION_ID = "music";
const RESUME_ID = "resume";

const navigationEntries: Array<NavigationEntry> = [
  { sectionId: ABOUT_ME_SECTION_ID },
  { sectionId: PROJECTS_SECTION_ID },
  { sectionId: MUSIC_SECTION_ID }
]

export const App = (): React.JSX.Element => {

  const [offsetY, setOffsetY] = React.useState(HEADER_HEIGHT + 5);

  const {
    navigate,
    currentSectionIdInView
  } = useNavigation({
    navigationEntries,
    offsetY
  });

  useObserverEffect({
    elementId: "header",
    callback: element => {
      if (!element) return;
      const height = element.getBoundingClientRect().height;
      if (height > 0) {
        setOffsetY(height);
      }
    },
    dependencyArray: []
  });

  const navItems = [
    { id: ABOUT_ME_SECTION_ID, label: "About Me" },
    { id: PROJECTS_SECTION_ID, label: "Projects" },
    { id: MUSIC_SECTION_ID, label: "Music & Audio" },
    { id: RESUME_ID, label: "Resume" }
  ];

  const handleNavigate = (sectionId: string) => {
    if (sectionId === RESUME_ID) {
      window.open("./resume.pdf", "_blank");
      return;
    }
    navigate(sectionId);
  };

  return (
    <BaseElement>
      <Header
        id="header"
        logoElement={<>
          <Image
            src={ico}
            imgStyle={{ height: 48, marginRight: 12, display: "inline-block" }}
          />
          <span style={HeaderTitleStyles}>Sam Williams</span>
        </>}
        navigationItems={navItems}
        onNavigate={handleNavigate}
        style={HeaderStyles}
        currentSectionIdInView={currentSectionIdInView}
      />
      <About />
      <Projects />
      <Music />
      <Footer style={FooterStyles}>
        <span>Sam Williams. See resume for contact information.</span>
      </Footer>
    </BaseElement>
  )
}