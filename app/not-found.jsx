import Link from "next/link";
import React from "react";

const fetchData = async () => {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await results.json();
  return data;
};

const NotFound = async () => {
  return (
    <section>
      <h1>Not Found</h1>

      <Link href="/"> volver</Link>
    </section>
  );
};

export default NotFound;
