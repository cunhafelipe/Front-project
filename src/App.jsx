import ButtonComponent from "./components/button";
import SectionComponent from "./components/section";
import FormComponent from "./components/section";
import HeaderComponent from "./components/header";
import LinkComponent from "./components/link";
import MainComponent from "./components/main";
import ParagraphComponent from "./components/paragraph";
import TittleComponent from "./components/tittle";
import UlComponent from "./components/ul";
import "./css/style.css";
import imgLogo from "./images/logo.svg";
import DivName from "./components/divName";

function App() {
  return (
    <>
      <HeaderComponent>
        <img src={imgLogo} width="125rem" />
        <nav className="nav-header">
          <UlComponent>
            <li>
              <LinkComponent href="#">Home</LinkComponent>
            </li>
            <li>
              <LinkComponent href="#">Cursos</LinkComponent>
            </li>
            <li>
              <LinkComponent href="#">Contato</LinkComponent>
            </li>
          </UlComponent>
        </nav>
      </HeaderComponent>

      <MainComponent>
        <section className="info">
          <TittleComponent>
            EMBAQUE CONOSCO NESSA VIAJEM, APRENDA TUDO SOBRE AS TECNOLOGIAS MAIS
            USADAS!
          </TittleComponent>
          <ParagraphComponent>
            Aprenda do zero a construir aplicações completas Front-end &
            Back-end. E tudo que o mercado da tecnologia pode lhe oferecer
          </ParagraphComponent>
          <ButtonComponent>Saiba mais</ButtonComponent>
        </section>

        {/* <SectionComponent>
          <form>
            <DivName>
              <label htmlFor="Name" required>
                Nome:
              </label>
              <inputNameComponent />
            </DivName>
            <divEmail>
              <label htmlFor="Email">E-mail</label>
              <inputEmail />
            </divEmail>
          </form>
        </SectionComponent> */}
      </MainComponent>
    </>
  );
}

export default App;
