This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Colour Theme

The website uses three colour families defined as Tailwind CSS custom theme tokens in `src/app/globals.css`:

### Gold (Primary / Accent)

Warm gold tones used for buttons, interactive elements, brand highlights, and call-to-action components.

| Token       | Hex       | Usage                              |
| ----------- | --------- | ---------------------------------- |
| `gold-50`   | `#faf8f0` | Light icon backgrounds             |
| `gold-100`  | `#f5efd6` | Subtle highlights                  |
| `gold-200`  | `#ecddb0` | Hover borders on cards             |
| `gold-300`  | `#e0c67c` | —                                  |
| `gold-400`  | `#d4a843` | Accent text, footer link hovers    |
| `gold-500`  | `#c49a35` | Icon colour in footer              |
| `gold-600`  | `#b08528` | Primary buttons, logo badge        |
| `gold-700`  | `#926921` | Button hover state                 |
| `gold-800`  | `#7a5620` | —                                  |
| `gold-900`  | `#674820` | —                                  |

### Navy (Secondary / Dark)

Cool navy tones used for dark sections such as the hero area and footer.

| Token       | Hex       | Usage                              |
| ----------- | --------- | ---------------------------------- |
| `navy-50`   | `#f0f4f8` | —                                  |
| `navy-100`  | `#d9e2ec` | —                                  |
| `navy-200`  | `#bcccdc` | —                                  |
| `navy-300`  | `#9fb3c8` | —                                  |
| `navy-400`  | `#7b96ad` | —                                  |
| `navy-500`  | `#5f7d95` | —                                  |
| `navy-600`  | `#486581` | —                                  |
| `navy-700`  | `#334e68` | —                                  |
| `navy-800`  | `#243b53` | —                                  |
| `navy-900`  | `#1e3a5f` | Hero background, footer background |
| `navy-950`  | `#0f1f33` | —                                  |

### Slate (Neutral / Text)

Neutral slate tones used for body text, headings, borders, and subtle backgrounds.

| Token       | Hex       | Usage                              |
| ----------- | --------- | ---------------------------------- |
| `slate-50`  | `#f8fafc` | Light backgrounds                  |
| `slate-100` | `#f1f5f9` | —                                  |
| `slate-200` | `#e2e8f0` | Card borders                       |
| `slate-300` | `#cbd5e1` | Footer body text                   |
| `slate-400` | `#94a3b8` | —                                  |
| `slate-500` | `#64748b` | Muted body text                    |
| `slate-600` | `#475569` | Navigation links                   |
| `slate-700` | `#334155` | —                                  |
| `slate-800` | `#1e293b` | —                                  |
| `slate-900` | `#0f172a` | Headings, primary text             |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
