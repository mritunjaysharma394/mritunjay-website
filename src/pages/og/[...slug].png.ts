import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { title: post.data.title, excerpt: post.data.excerpt },
  }));
};

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function escapeXml(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export const GET: APIRoute = async ({ props }) => {
  const { title, excerpt } = props as { title: string; excerpt?: string };

  const titleLines = wrapText(title, 32);
  const lineHeight = 68;
  const titleStartY = excerpt ? 220 : 270;

  const titleSvgLines = titleLines
    .map((line, i) => `<text x="60" y="${titleStartY + i * lineHeight}" font-family="sans-serif" font-size="56" font-weight="400" fill="#EAE6DF" letter-spacing="-1">${escapeXml(line)}</text>`)
    .join('\n');

  const excerptY = titleStartY + titleLines.length * lineHeight + 28;
  const excerptLines = excerpt ? wrapText(excerpt, 72) : [];
  const excerptSvg = excerptLines
    .slice(0, 2)
    .map((line, i) => `<text x="60" y="${excerptY + i * 32}" font-family="sans-serif" font-size="22" fill="#7D7870">${escapeXml(line)}</text>`)
    .join('\n');

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0C0B0F"/>
  <rect y="0" width="1200" height="4" fill="#5B7FFF"/>
  <text x="60" y="100" font-family="sans-serif" font-size="14" fill="#5B7FFF" letter-spacing="4" font-weight="400">MRITUNJAYSHARMA.IN</text>
  ${titleSvgLines}
  ${excerptSvg}
  <text x="60" y="580" font-family="sans-serif" font-size="15" fill="#4E4940" letter-spacing="1">Mritunjay Sharma  ·  Software Engineer</text>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
