import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TechStack from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Header
        logoImg={""}
        socialIcons={[]}
      />
        <Main
          title={""}
          avatar={""}
        />
        <TechStack
          title={""}
          description={""}
          imgStack={[]}
        />
        <Footer />
    </div>
  );
}

export default App;
