import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="my-5 text-center md:text-5xl text-2xl">
        Find your <code>.gitignore</code>
      </h1>

      <SearchBox />
    </main>
  );
}

