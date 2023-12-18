import About from "./components/About";
import Button from "./components/Button";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Title from "./components/Title";

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
      <About
        text="Experience with"
      />
    </>
  );
}

export default App;