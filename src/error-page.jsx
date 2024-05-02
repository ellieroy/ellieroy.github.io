import { useRouteError } from "react-router-dom";
import svg from "./assets/undraw_fixing_bugs_w7gi.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        height: "100vh",
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <h1 class="xl text-center">Oops!</h1>
      <p class="text-center">Sorry, an unexpected error has occurred.</p>
      <p class="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={svg} alt="error" style={{ width: "450px", height: "400px" }} />
    </div>
  );
}
