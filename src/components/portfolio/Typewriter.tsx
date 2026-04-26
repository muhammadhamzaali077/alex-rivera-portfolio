import { useEffect, useState } from "react";

const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const HOLD = 1400;

export const Typewriter = ({ words, className }: { words: string[]; className?: string }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), HOLD);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.substring(0, t.length - 1) : current.substring(0, t.length + 1)
          );
        },
        deleting ? DELETE_SPEED : TYPE_SPEED
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="inline-block w-[2px] h-[0.9em] -mb-[0.05em] ml-1 bg-secondary animate-pulse align-middle" />
    </span>
  );
};
