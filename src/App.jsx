import About from "./components/About";
import Button from "@components/Button";
import Header from "@components/Header";
import Profile from "@components/Profile";
import Title from "@components/Title";
import Tags from "@components/Tags";
import Projects from "@components/Projects";
import ContainerText from "@components/ContainerText";


function App() {
  return (
    <>
      <Header />
      <Profile />
      <Title />
      <About
        text="I am a seasoned full-stack software engineer with over 8 years of
      professional experience, specializing in backend development. My expertise
      lies in crafting robust and scalable SaaS-based architectures on the
      Amazon AWS platform."
      />
      <Button />
      <About text="EXPERIENCE WITH" />
      <Tags />
      <About 
       text="PROJECTS"
       special="PROJECTS" />
       <Projects />
       <About 
         text="EXPERIENCE"
         special="EXPERIENCE"
       />
       <ContainerText />
    </>
  );
}

export default App;
