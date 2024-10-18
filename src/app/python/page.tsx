import Navbar from "@/components/Navbar";
import Highlighter from "@/components/Highlighter";

const Page = () => {
  const code = `
def hello():
    for i in range(10):
        if i % 2 == 0:
            print("Hello, World!")

    `.trim();
  return (
    <main>
      <Navbar />
      <section className="container mx-auto max-w-screen-xl px-0.5 py-3 md:px-1 md:py-4">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">Python</h1>

        <Highlighter
          code={code}
          language="python"
          className="my-4 rounded-xl px-2 md:my-6 py-4 md:py-5 min-h-20 text-xs md:text-sm"
        />
      </section>
    </main>
  );
};

export default Page;
