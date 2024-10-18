"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useHotkeys } from "react-hotkeys-hook";

const languages = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "C-sharp",
  "Ruby",
  "Go",
];

function Results({ query, routerObj }: { query?: string; routerObj: any }) {
  return languages.map((name, i) => (
    <CommandItem
      key={i}
      onSelect={(e) => {
        // change the route to /{language}
        console.log(e);
        routerObj.push(`/${e.toLowerCase()}`);
      }}
    >
      <span>{name}</span>
    </CommandItem>
  ));
}

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [showRes, setShowRes] = useState(query ? true : false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // esc to unfocus
  useHotkeys(
    "esc",
    () => {
      inputRef.current?.blur();
    },
    {
      enableOnFormTags: true,
    },
  );

  return (
    <Command loop className="mx-auto max-w-md rounded-lg border px-2 shadow-md">
      <CommandInput
        typeof="search"
        ref={inputRef}
        placeholder="Search here..."
        value={query}
        onValueChange={(e) => {
          setQuery(e);
          setShowRes(e ? true : false);
        }}
      />

      <CommandList className={showRes ? "block" : "hidden"}>
        {/* <CommandEmpty>No results found.</CommandEmpty> */}
        <CommandGroup>
          <Results routerObj={router} />
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
