import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        height: "100vh",
        alignContent: "center",
        display: "grid",
        justifyContent: "center",
      }}
    >
      <h1 class="xl text-center">Oops!</h1>
      <p class="text-center">Sorry, an unexpected error has occurred.</p>
      <p class="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <img
        src={"src/assets/undraw_fixing_bugs_w7gi.svg"}
        alt="error"
        style={{ width: "450px", height: "400px" }}
      />
    </div>
  );
}
