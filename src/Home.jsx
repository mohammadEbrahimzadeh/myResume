import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import MyPriject from "./Components/MyPriject/MyPriject";
import CallMe from "./Components/CallMe/CallMe";
export default function Home() {
  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <MyPriject></MyPriject>
      <CallMe></CallMe>
    </>
  );
}
