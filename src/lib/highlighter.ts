export type Rule = { type: string; regex: RegExp };
export type LangRules = Rule[];

export const escapeHtml = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export function highlightWithRules(code: string, rules: LangRules) {
  const matches: {
    start: number;
    end: number;
    text: string;
    type: string;
    priority: number;
  }[] = [];

  for (let i = 0; i < rules.length; i++) {
    const r = rules[i];
    const re = new RegExp(
      r.regex.source,
      r.regex.flags.includes("g") ? r.regex.flags : r.regex.flags + "g"
    );
    let m: RegExpExecArray | null;
    while ((m = re.exec(code)) !== null) {
      matches.push({
        start: m.index,
        end: m.index + m[0].length,
        text: m[0],
        type: r.type,
        priority: i,
      });
      if (m[0].length === 0) break;
    }
  }

  matches.sort(
    (a, b) =>
      a.start - b.start ||
      a.priority - b.priority ||
      b.end - b.start - (a.end - a.start)
  );

  const accepted: typeof matches = [];
  for (const m of matches) {
    const overlaps = accepted.some(
      (a) => !(m.end <= a.start || m.start >= a.end)
    );
    if (!overlaps) accepted.push(m);
  }

  accepted.sort((a, b) => a.start - b.start);
  let out = "";
  let pos = 0;
  for (const m of accepted) {
    if (pos < m.start) out += escapeHtml(code.slice(pos, m.start));
    out += `<span class="token ${m.type}">${escapeHtml(m.text)}</span>`;
    pos = m.end;
  }
  if (pos < code.length) out += escapeHtml(code.slice(pos));
  return out;
}
