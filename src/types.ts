import type { LangRules } from "./lib/highlighter";
import { languageMap } from "./lib/LanguageMap";
import type { themes } from "./themes/themes";

export type TokenStyles = {
  [token: string]: string;
};

export type EditorTheme = {
  background?: React.CSSProperties["background"];
  editorStyle?: React.CSSProperties;
  tokenStyles?: TokenStyles;
};

export type ThemeType = keyof typeof themes | EditorTheme;

export type LanguageType = keyof typeof languageMap;

export type CodeEditorProps = {
  theme?: ThemeType;
  value?: string;
  onChange?: (v: string) => void;
  language?: keyof typeof languageMap | (string & {});
  customLanguages?: Record<string, LangRules>;
};
