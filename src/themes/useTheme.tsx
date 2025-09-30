import { useEffect, useState } from "react";
import type { EditorTheme, ThemeType } from "../types";
import { themes } from "./themes";

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const useTheme = (theme: ThemeType, isGlassmorph?: boolean) => {
  const [finalTheme, setFinalTheme] = useState<EditorTheme>(themes.oneDark);

  useEffect(() => {
    const styleId = "custom-theme";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    let themeObj: EditorTheme;

    if (typeof theme === "object") {
      themeObj = theme;
    } else if (theme in themes) {
      themeObj = themes[theme as keyof typeof themes];
    } else {
      themeObj = themes.oneDark;
    }

    const bg = themeObj.editorStyle?.backgroundColor ?? "#282c34";
    const enhancedTheme: EditorTheme = isGlassmorph
      ? {
          ...themeObj,
          editorStyle: {
            ...themeObj.editorStyle,
            backgroundColor: hexToRgba(bg, 0.1),
          },
        }
      : themeObj;

    setFinalTheme(enhancedTheme);

    const cssString = Object.entries(themeObj.tokenStyles || {})
      .map(([token, style]) => `.token.${token} { color: ${style}; }`)
      .join("\n");

    styleEl.innerHTML = cssString;
  }, [theme, isGlassmorph]);

  return { finalTheme };
};
