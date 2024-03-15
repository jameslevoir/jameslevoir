import NavBar from "./components/NavBar";
import Body from "./components/Body";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import FooterNav from "./components/FooterNav";


function App() {
  return (
  <>
    <NavBar />
    <Body>
      <MainContent
        h1="Hi, I’m James LeVoir."
        h2="Designer/Developer | Audio/Visual Specialist"
        p="As a designer and developer, I think the most important part of my work
        is making things that are useful and accessible. Good design is not only
        visually satisfying, but takes the work out of interacting, reading, or
        processing visual information. When design is good, it can often go
        unnoticed. When it’s bad, it can be a wall preventing you from achieving
        your goals. I seek to make design that can be both bold and subtle,
        useful or provocative. The simplicity and usefulness of modern design
        inspires me, and I seek to incorporate equity and inclusion in all of
        my work."
        buttonText="View My Résumé"
        buttonLink="src/assets/Résumé.pdf"
      />
      <SideContent page="home" />
    </Body>
    <FooterNav />
    
  </>
  )
};

export default App;