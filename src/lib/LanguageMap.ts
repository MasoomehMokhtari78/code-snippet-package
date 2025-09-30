import {
  bashRules,
  cppRules,
  cRules,
  csharpRules,
  cssRules,
  dockerRules,
  goRules,
  javaRules,
  jsonRules,
  jsRules,
  jsxRules,
  kotlinRules,
  markupRules,
  phpRules,
  pythonRules,
  rubyRules,
  rustRules,
  swiftRules,
  tsRules,
  tsxRules,
  yamlRules,
} from "./lang-rules";

export const languageMap = {
  javascript: jsRules,
  js: jsRules,
  typescript: tsRules,
  ts: tsRules,
  jsx: jsxRules,
  tsx: tsxRules,

  python: pythonRules,
  py: pythonRules,

  java: javaRules,
  kotlin: kotlinRules,
  kt: kotlinRules,

  c: cRules,
  cpp: cppRules,
  cplusplus: cppRules,
  csharp: csharpRules,
  cs: csharpRules,

  swift: swiftRules,

  go: goRules,
  golang: goRules,

  rust: rustRules,
  rs: rustRules,

  php: phpRules,
  ruby: rubyRules,
  rb: rubyRules,
  bash: bashRules,
  sh: bashRules,

  html: markupRules,
  xml: markupRules,
  yaml: yamlRules,
  yml: yamlRules,
  json: jsonRules,
  css: cssRules,

  docker: dockerRules,
};
