import Link from "next/link";

export default function Banner() {
  return (
    <div className="main">
      <div className="main-content">
        <h3 className="font-light">Special moment</h3>
        <h1 className="font-light font-title">Time to create your </h1>
        <h1 className="font-light font-title" style={{ marginTop: "-30px" }}>
          own style
        </h1>
        <p>
          <Link href="/#categories" className="button button-browse">
            Browse
          </Link>{" "}
          <button className="button button-customize">Customize</button>
        </p>
      </div>
    </div>
  );
}
