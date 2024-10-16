import os
import json

if os.getcwd().split('\\')[-1] == "public":
    os.chdir("../")

os.chdir("app")


def getFiles():
    for file in os.listdir("../public/data"):
        with open(f"../public/data/{file}", 'r', encoding="utf-8") as f:
            content = f.read()
            name = file.lower()[:-10].replace('.', '_')
            yield [name, content]


template = """
"use client";
import { useEffect } from "react";
import Link from "next/link";
import Prism from "prismjs";
import "@styles/highlight.css";

const Page = () => {
  const content = `
😀
`.trim();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  function copyCode2Clipboard(event) {
    // Copies the code to clipboard
    const text = event.target.parentNode.querySelector("code").innerText.trim();
    navigator.clipboard.writeText(text);
    event.target.innerText = "Copied!";
    setTimeout(() => {
      event.target.innerText = "Copy";
    }, 1300);
  }
  return (
    <main>
      <pre className="text-gray-300" id="box">
        <button
          className="fixed right-5 top-3 rounded-md bg-indigo-700 px-3 py-1 text-base hover:bg-opacity-80"
          onClick={copyCode2Clipboard}
        >
          Copy
        </button>
        <code className="lang-js">{content}</code>
      </pre>
    </main>
  );
};

export default Page;
"""


def createFile(name, content):
    if not os.path.exists(name):
        os.mkdir(name)
    content = content.replace('`', '\\`')
    content = template.replace("😀", content)
    with open(f"{name}/page.jsx", 'w', encoding="utf-8") as f:
        f.write(content)


def createJsonFile(name, content):
    content = content.replace('`', '\\`')
    return content


data = {}

for x, i in enumerate(getFiles()):
    name = i[0]
    code = createJsonFile(*i)
    data[name] = code
    print(x+1, name)

with open("../public/names.json", 'w', encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=0)
