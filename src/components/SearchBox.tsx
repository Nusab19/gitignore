import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 rounded-md border border-t-0 rounded-t-none">
      <div className="p-4">
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm md:text-base">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

const SearchBox = () => {
  return (
    <div className="mx-auto max-w-md px-2">
      <Input
        placeholder="Search for a .gitignore file"
        className="h-11 rounded-b-none"
      />
      <ScrollAreaDemo />
    </div>
  );
};

export default SearchBox;
