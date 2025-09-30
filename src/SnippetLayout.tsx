import type { CSSProperties } from "react";
import { CodeEditor } from "./CodeEditor";
import type { CodeEditorProps } from "./types";
import { useTheme } from "./themes/useTheme";
import { Header } from "./Header";
import { useSnippetContext } from "./Context/UseSnippetContext";

export type LayoutType = CodeEditorProps & {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  fontSize?: CSSProperties["fontSize"];
  fontFamily?: CSSProperties["fontFamily"];
  glassEffect?: boolean;
  backgroundImage?: string;
  transparentBackground?: boolean;
};

export const SnippetLayout = ({
  width = "fit-content",
  height = "fit-content",
  padding = "32px",
  fontSize = "16px",
  fontFamily = "monospace",
  theme = "VSCode Dark+",
  glassEffect,
  backgroundImage,
  transparentBackground,
  ...rest
}: LayoutType) => {
  const { finalTheme } = useTheme(theme, glassEffect);

  const baseBackground = transparentBackground
    ? {
        backgroundImage: `
        linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.05) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.05) 75%)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
      }
    : { background: finalTheme?.background };

  const imageBackground = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }
    : {};

  const { editorRef } = useSnippetContext();
  return (
    <div
      ref={!transparentBackground ? editorRef : null}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: "500px",
        minHeight: "fit-content",
        padding,
        width,
        height,
        fontSize: fontSize,
        fontFamily,
        ...baseBackground,
        ...imageBackground,
      }}
    >
      <div
        ref={transparentBackground ? editorRef : null}
        style={{
          position: "relative",
          fontFamily: "inherit",
          background: finalTheme?.editorStyle?.backgroundColor,
          borderRadius: "16px",
          ...(glassEffect && {
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(202, 178, 178, 0.3)",
            backdropFilter: "blur(5px)",
          }),
        }}
      >
        <Header />
        <CodeEditor theme={finalTheme} {...rest} />
      </div>
    </div>
  );
};
