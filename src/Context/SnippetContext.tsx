import { createContext, useRef, type ReactNode } from "react";
import { toPng, toSvg } from "html-to-image";

type SnippetContextType = {
  editorRef: React.RefObject<HTMLDivElement | null>;
  exportAsPng: () => Promise<void>;
  exportAsSvg: () => Promise<void>;
};

const SnippetContext = createContext<SnippetContextType | null>(null);

export const SnippetContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  const exportAsPng = async () => {
    if (!editorRef.current) return;

    const dataUrl = await toPng(editorRef.current);
    const link = document.createElement("a");
    link.download = "snippet.png";
    link.href = dataUrl;
    link.click();
  };

  const exportAsSvg = async () => {
    if (!editorRef.current) return;

    const textarea = editorRef.current.querySelector("textarea");
    let previousDisplay: string | null = null;
    //remove textarea during svg export
    if (textarea) {
      previousDisplay = textarea.style.display;
      textarea.style.display = "none";
    }

    const dataUrl = await toSvg(editorRef.current);

    if (textarea && previousDisplay !== null) {
      textarea.style.display = previousDisplay;
    }

    const link = document.createElement("a");
    link.download = "snippet.svg";
    link.href = dataUrl;
    link.click();
  };

  return (
    <SnippetContext.Provider value={{ editorRef, exportAsPng, exportAsSvg }}>
      {children}
    </SnippetContext.Provider>
  );
};

export default SnippetContext;
