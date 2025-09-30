import type { LangRules } from "./highlighter";

export const markupRules: LangRules = [
  { type: "tag", regex: /<\/?[A-Za-z][^>]*>/g },
  { type: "attrName", regex: /\b[A-Za-z-]+(?==)/g },
  { type: "string", regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g },
  { type: "comment", regex: /<!--[\s\S]*?-->/g },
];

//C-family
const commentCStyle = { type: "comment", regex: /\/\/.*|\/\*[\s\S]*?\*\//g };
const stringRule = { type: "string", regex: /(["'`])(?:\\.|(?!\1).)*\1/g };
const numberRule = { type: "number", regex: /\b\d+(\.\d+)?\b/g };
const operatorRule = { type: "operator", regex: /[+\-*/=<>%|&!^~?:]+/g };
const identifierRule = { type: "identifier", regex: /\b[A-Za-z_]\w*\b/g };

export const cRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:int|char|float|double|void|return|if|else|for|while|struct|typedef|switch|case|break|continue)\b/g,
  },
  identifierRule,
];

export const cppRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:class|namespace|template|typename|operator|new|delete|virtual|override|public|private|protected|friend|inline|constexpr|try|catch|throw|using|this)\b/g,
  },
  identifierRule,
];

export const csharpRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:namespace|using|class|struct|interface|enum|public|private|protected|internal|static|readonly|sealed|virtual|override|abstract|async|await|var|dynamic|new|return|if|else|for|foreach|while|do|switch|case|break|continue|try|catch|finally|throw|this|base|null|true|false)\b/g,
  },
  identifierRule,
];

export const javaRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:package|import|class|interface|extends|implements|public|private|protected|static|final|abstract|synchronized|volatile|native|strictfp|transient|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|throws|this|super|new|null|true|false)\b/g,
  },
  identifierRule,
];

export const kotlinRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:package|import|class|interface|object|fun|val|var|typealias|is|as|in|out|override|public|private|protected|internal|companion|return|if|else|for|while|do|when|break|continue|try|catch|finally|throw|this|super|null|true|false)\b/g,
  },
  identifierRule,
];

export const swiftRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:import|class|struct|enum|protocol|extension|func|let|var|typealias|associatedtype|inout|return|if|else|for|while|repeat|do|catch|try|throw|guard|defer|where|as|is|in|self|super|nil|true|false)\b/g,
  },
  identifierRule,
];

export const goRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:package|import|func|var|const|type|struct|interface|map|chan|go|defer|return|if|else|for|switch|case|select|break|continue|fallthrough|goto|default|range|nil|true|false)\b/g,
  },
  identifierRule,
];

export const rustRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:fn|let|mut|struct|enum|impl|trait|type|const|static|pub|use|crate|super|mod|ref|as|match|if|else|for|while|loop|break|continue|return|move|async|await|unsafe|dyn|self|Self|true|false)\b/g,
  },
  identifierRule,
];

//javascript family
export const jsRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:const|let|var|function|return|if|else|for|while|class|extends|import|export|new|try|catch|finally|throw|typeof|instanceof|await|async)\b/g,
  },
  identifierRule,
];

export const tsRules = [
  ...jsRules,
  {
    type: "keyword",
    regex:
      /\b(?:interface|type|enum|implements|namespace|declare|public|private|protected|readonly)\b/g,
  },
];

export const jsxRules = [
  ...jsRules,
  { type: "tag", regex: /<\/?[A-Za-z][^>]*>/g },
  { type: "attrName", regex: /\b[A-Za-z-]+(?==)/g },
];
export const tsxRules = [...tsRules, ...jsxRules];

const commentHash = { type: "comment", regex: /#.*/g };

export const pythonRules = [
  commentHash,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:def|class|return|if|elif|else|for|while|try|except|finally|import|from|as|pass|break|continue|with|lambda|yield|global|nonlocal|assert|del|in|is|not|and|or)\b/g,
  },
  identifierRule,
];

//scripting
export const phpRules = [
  commentCStyle,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:function|class|echo|print|if|else|elseif|foreach|while|do|for|switch|case|break|continue|return|new|try|catch|finally|throw|use|namespace)\b/g,
  },
  identifierRule,
];

export const rubyRules = [
  commentHash,
  stringRule,
  numberRule,
  operatorRule,
  {
    type: "keyword",
    regex:
      /\b(?:def|class|module|end|if|elsif|else|unless|case|when|while|until|for|break|next|redo|retry|return|yield|self|super|begin|rescue|ensure)\b/g,
  },
  identifierRule,
];

export const bashRules = [
  commentHash,
  stringRule,
  numberRule,
  {
    type: "keyword",
    regex:
      /\b(?:if|then|else|elif|fi|for|while|do|done|case|esac|function|select|in)\b/g,
  },
  { type: "variable", regex: /\$\w+/g },
  identifierRule,
];

const cssComment = { type: "comment", regex: /\/\*[\s\S]*?\*\//g };

export const cssRules = [
  cssComment,
  { type: "selector", regex: /[.#]?[A-Za-z_][\w-]*/g },
  { type: "property", regex: /\b[a-z-]+(?=\s*:)/g },
  stringRule,
  numberRule,
];

export const jsonRules = [
  stringRule,
  numberRule,
  { type: "boolean", regex: /\b(?:true|false|null)\b/g },
  { type: "punctuation", regex: /[{}[\]:,]/g },
];

export const yamlRules = [
  commentHash,
  { type: "key", regex: /^[\t ]*[A-Za-z_][\w-]*(?=:)/gm },
  stringRule,
  numberRule,
  { type: "boolean", regex: /\b(?:true|false|null)\b/g },
];

export const dockerRules = [
  commentHash,
  {
    type: "keyword",
    regex:
      /\b(?:FROM|RUN|CMD|COPY|ADD|WORKDIR|ENV|ARG|ENTRYPOINT|VOLUME|EXPOSE|USER|LABEL|ONBUILD|STOPSIGNAL|HEALTHCHECK)\b/g,
  },
  stringRule,
  identifierRule,
];
