import Link from "next/link";

export default function Home() {
  return (
    <Link href="/about">
      <div className="home">
        <h1>Michael Lloyd Morris</h1>
        <p>Senior Web Developer</p>
      </div>
    </Link>
  );
}
