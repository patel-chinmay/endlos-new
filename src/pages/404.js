import Link from "next/link";

export default function Custom404() {
  return (
    <div
      className=""
      style={{
        height: "61vh",
        display: "flex",
        flexDirection: "column",
        border: "2px black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-color fs-1">404</h1>
      <h2>Page Not Found</h2>
      <p>We're sorry, but the page you were looking for doesn't exist.</p>
      <p>
        Go back to the{" "}
        <Link href={"/"} className="backlinks">
          {" "}
          Home page.
        </Link>
      </p>
    </div>
  );
}
