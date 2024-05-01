import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header class="container">
        <h1 class="logo">
          <Link to={"/"}>__</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main class="container">
        <section>
          <Outlet />
        </section>
      </main>
      <footer class="container">
        <p>Copyright &copy; Ellie Roy (2024)</p>
      </footer>
    </>
  );
}
