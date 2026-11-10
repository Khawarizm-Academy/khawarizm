export type DocSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDoc = {
  /** The `# ` heading at the top — hero/switcher title. */
  title: string;
  /** The `> ` blockquote under it — hero lead. */
  lead: string;
  /** The first `## ` group: intro heading + its paragraphs. */
  introTitle: string;
  introParagraphs: string[];
  /** One-line italicised paragraphs `*…*` — small brand-ink flags under the intro. */
  notes: string[];
  /** The remaining `## ` groups, in document order. */
  sections: DocSection[];
};

/**
 * Dependency-free markdown → data parser for the legal documents
 * (`content/terms.md`, `content/privacy.md`). Renders **data** into
 * React elements (never `dangerouslySetInnerHTML`), keeps paragraphs
 * plain, staying RTL-safe. Supported syntax:
 *
 * - `# Title` (once) — document/hero title
 * - `> Lead` (once)  — document/hero lead
 * - `## Heading`     — group separator (first = intro, rest = numbered sections)
 * - blank lines      — separate paragraphs
 * - `*Note*`         — single line → the small note flags
 * - `### Heading`    — demoted to a plain paragraph inside its group
 */
export function parseLegalDoc(raw: string): LegalDoc {
  const lines = raw.split(/\r?\n/);
  const titleLine = lines.find((line) => /^#(?!#)\s+\S/.test(line));
  const leadLine = lines.find((line) => /^>\s?\S/.test(line));
  const title = titleLine?.replace(/^#\s+/, "").trim() ?? "";
  const lead = leadLine?.replace(/^>\s?/, "").trim() ?? "";

  const groups: DocSection[] = [];
  const notes: string[] = [];
  let current: DocSection | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (buffer.length === 0) return;
    const text = buffer.join(" ").trim();
    buffer = [];
    if (
      text.length > 2 &&
      text.startsWith("*") &&
      text.endsWith("*")
    ) {
      notes.push(text.slice(1, -1).trim());
      return;
    }
    if (current) current.paragraphs.push(text);
  };

  const open = (heading: string) => {
    flush();
    current = { title: heading, paragraphs: [] };
    groups.push(current);
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
      continue;
    }
    if (trimmed.startsWith("## ")) {
      open(trimmed.slice(3).trim());
      continue;
    }
    if (trimmed.startsWith("### ")) {
      open(trimmed.slice(4).trim());
      continue;
    }
    if (trimmed.startsWith("# ") || trimmed.startsWith("> ")) {
      continue; // hero material — read at the top
    }
    if (!current) open("");
    buffer.push(trimmed);
  }
  flush();

  const named = groups.filter((group) => group.title && group.paragraphs.length > 0);
  const [intro, ...body] = named;

  return {
    title,
    lead,
    introTitle: intro?.title ?? "",
    introParagraphs: intro?.paragraphs ?? [],
    notes,
    sections: body,
  };
}
