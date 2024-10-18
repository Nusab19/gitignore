"use client";
import { useState, useRef } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const App = ({
  code,
  language,
  className,
}: {
  code: string;
  language: string;
  className?: string;
}) => {
  const copyRef = useRef<HTMLButtonElement>(null);
  const [disabled, setDisabled] = useState(false);

  return (
    <Highlight theme={themes.oneDark} code={code} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div className="relative">
          <Button
            disabled={disabled}
            ref={copyRef}
            className="absolute right-2 top-2 z-10 rounded-md bg-ring px-2 font-mono text-sm text-white active:scale-90 md:text-base"
            onClick={() => {
              navigator.clipboard.writeText(code);
              if (copyRef.current) {
                copyRef.current.innerText = "Copied!";
                setDisabled(true);
              }

              setTimeout(() => {
                if (copyRef.current) {
                  copyRef.current.innerText = "Copy";
                  setDisabled(false);
                }
              }, 1000);
            }}
          >
            Copy
          </Button>
          <pre className={cn(className, "relative")} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {/* <span className="mr-1.5 md:mr-2">{i + 1}</span> */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default App;
