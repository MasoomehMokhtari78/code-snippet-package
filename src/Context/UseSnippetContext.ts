import { useContext } from "react";
import SnippetContext from "./SnippetContext";

export const useSnippetContext = () => {
  const ctx = useContext(SnippetContext);
  if (!ctx)
    throw new Error(
      "useSnippetExport must be used inside SnippetExportProvider"
    );
  return ctx;
};
