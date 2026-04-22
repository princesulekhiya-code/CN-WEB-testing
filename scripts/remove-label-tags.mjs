import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const files = [
  "app/(main)/services/ai-ml-data-science/page.tsx",
  "app/(main)/services/cloud-services/page.tsx",
  "app/(main)/services/cybersecurity-compliance/page.tsx",
  "app/(main)/services/devops-cloud-automation/page.tsx",
  "app/(main)/services/digital-marketing/page.tsx",
  "app/(main)/services/digital-transformation/page.tsx",
  "app/(main)/services/ecommerce-development/page.tsx",
  "app/(main)/services/hire-dedicated-developers/page.tsx",
  "app/(main)/services/it-consulting/page.tsx",
  "app/(main)/services/mobile-app-development/page.tsx",
];

const spanRe =
  /<span[^>]*uppercase tracking-\[0\.2em\][^>]*>[\s\S]*?<\/span>\n?/g;
const pRe = /<p[^>]*uppercase tracking-\[0\.2em\][^>]*>[\s\S]*?<\/p>\n?/g;

for (const rel of files) {
  const fp = path.join(root, rel);
  let s = fs.readFileSync(fp, "utf8");
  const before = s;
  s = s.replace(spanRe, "");
  s = s.replace(pRe, "");
  // Collapse 3+ consecutive newlines to 2 (at most one blank line)
  s = s.replace(/\n{3,}/g, "\n\n");
  if (s !== before) {
    fs.writeFileSync(fp, s);
    console.log("updated", rel);
  } else {
    console.log("no change", rel);
  }
}
