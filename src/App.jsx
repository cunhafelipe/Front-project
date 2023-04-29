import "./css/style.css";
import imgLogo from "./images/logo.svg";

function App() {
  return (
    <>
      <header>
        <img src={imgLogo} width="125rem" />
        <nav className="nav-header">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Cursos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="info">
          <h1>
            EMBAQUE CONOSCO NESSA VIAJEM, APRENDA TUDO SOBRE AS TECNOLOGIAS MAIS
            USADAS ATUALMENTE
          </h1>
          <p>
            Aprenda do zero a construir aplicações completas Front-end &
            Back-end. E tudo que o mercado da tecnologia pode lhe oferecer
          </p>
          <button>Saiba mais</button>
        </section>

        <section className="form">
          <form className="form-section">
            <div className="name">
              <label htmlFor="Name" required>
                Nome:
              </label>
              <input type="text" />
            </div>
            <div className="email">
              <label htmlFor="Email">E-mail</label>
              <input type="email" required />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
