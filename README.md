# Snippet Layout

This component provides a layout wrapper for displaying code snippets with optional themes, glass effect, background images, and export options.

## ⚠️ Next.js Note

If you’re using Next.js (App Router), you **must** include `"use client"` at the top of your file.

## Basic Usage

Make sure to wrap the `SnippetLayout` inside the `SnippetContextProvider`. This enables the context needed for the snippet editor.

```tsx
"use client";

import { SnippetLayout } from "react-snippet-ui";

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <SnippetContextProvider>
      <div ref={editorRef}>
        <SnippetLayout value={value} onChange={setValue} />
      </div>
    </SnippetContextProvider>
  );
}
```

## Themes 🎨

You can use a built-in theme by name:

```tsx
<SnippetContextProvider>
  <SnippetLayout value={value} onChange={setValue} theme="Dracula" />
</SnippetContextProvider>
```

Or pass a custom theme object:

```tsx
const myTheme = {
  background: "linear-gradient(135deg, #faf3dd, #fdf6e3)",
  editorStyle: { backgroundColor: "#fdf6e3e6" },
  tokenStyles: {
    comment: "#93a1a1",
    keyword: "#859900",
    string: "#2aa198",
  },
};

<SnippetContextProvider>
  <SnippetLayout value={value} onChange={setValue} theme={myTheme} />
</SnippetContextProvider>;
```

## Languages 🌐

The editor comes with built-in syntax rules for popular languages.
Each language is defined as an array of regex-based rules.

```tsx
<SnippetContextProvider>
  <SnippetLayout value={value} onChange={setValue} language="javascript" />
</SnippetContextProvider>
```

You can also extend the editor with your own language:

```tsx
const todoRules = [
  { type: "keyword", regex: /\b(TODO|DONE|FIXME)\b/g },
  { type: "comment", regex: /#.*/g },
];

<SnippetLayout
  value={`# TODO: Finish this feature\n# DONE: Write docs`}
  language="todo"
  customLanguages={{ todo: todoRules }}
/>;
```

## Background 🖼️

You can set the background to transparent via this prop:

```tsx
<SnippetContextProvider>
  <SnippetLayout value={value} onChange={setValue} transparentBackground />
</SnippetContextProvider>
```

set an image:

```tsx
<SnippetContextProvider>
  <SnippetLayout
    value={value}
    onChange={setValue}
    backgroundImage="/my-background.jpg"
  />
</SnippetContextProvider>
```

or set a custom background using the theme object.

## Export Features 📤

You can easily export your snippet as PNG 📸 or SVG 🖊️:

```bash
export default function App() {
  <SnippetContextProvider>
    <ExportSnippet />
  </SnippetContextProvider>
}

function ExportSnippet() {
const { editorRef, exportAsPng, exportAsSvg } = useSnippetContext();
const [value, setValue] = useState("");

  return (
    <div>
      <div ref={editorRef}>
        <SnippetLayout theme="VSCode Dark+" />
      </div>
      <button onClick={exportAsPng}>Export as PNG 📸</button>
      <button onClick={exportAsSvg}>Export as SVG 🖊️</button>
   </div>
  );
}
```

## Props

`SnippetLayout` accepts the following props:

- `width` – container width (default: `fit-content`)
- `height` – container height (default: `fit-content`)
- `padding` – padding around snippet (default: `32px`)
- `fontSize` – code font size (default: `16px`)
- `fontFamily` – font family (default: `monospace`)
- `theme` – theme name (options: `light` | `seti` | `oneDark` | `GitHub Light` | `VSCode Dark+` | `Monokai` | `Dracula` or theme object )
- `language` – programming language for syntax highlighting 💻 (options: `javascript` | `js` | `typescript` | `ts` | `jsx` | `tsx` | `python` | `py` | `java` | `kotlin` | `kt` | `c` | `cpp` | `cplusplus` | `csharp` | `cs` | `swift` | `go` | `golang` | `rust` | `rs` | `php` | `ruby` | `rb` | `bash` | `sh` | `html` | `xml` | `yaml` | `yml` | `json` | `css` | `docker` )
- `customLanguages` – object of custom languages
- `glassEffect` – adds frosted glass styling ✨
- `backgroundImage` – sets a background image for the snippet container 🖼️
- `transparentBackground` – enables checkerboard-style background

#### Note: For more details on how to use the snippet, check out the demo GitHub repository.

## Links 🔗

- **NPM:** [react-snippet-ui](https://www.npmjs.com/package/react-snippet-ui)
- **Demo:** [Code Snippet Demo](https://code-snippet-eta.vercel.app/)
- **Guide:** [How to use snippet features](https://github.com/MasoomehMokhtari78/code-snippet)
