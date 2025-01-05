# Multilingual Astro Blog Template

A modern, performant and SEO-friendly blog template built with Astro and Tailwind CSS, featuring multilingual support.

## 🚀 Features

- ⚡️ Built with Astro 4.0 for maximum performance
- 🎨 Styled with Tailwind CSS
- 🌐 Multilingual support with i18n routing
- 📱 Fully responsive design
- 🔍 SEO optimized
- 📝 Markdown/MDX support for blog posts
- 🔄 Static site generation (SSG)
- 🎯 Zero JavaScript by default
- 🎨 Dark mode support

## 🛠️ Quick Start

1. Clone this repository:

```bash
git clone [your-repo-url]
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Build for production:

```bash
pnpm build
```

## 📁 Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   └── [lang]/
│   └── styles/
├── astro.config.mjs
└── tailwind.config.cjs
```

## 🌍 Adding New Languages

1. Add your language in `src/pages/[lang]/`
2. Create corresponding translation files
3. Update language switcher component

## 📝 Creating Blog Posts

Add your Markdown/MDX files in `src/content/blog/[lang]/` following the format:

```markdown
---
title: Your Post Title
description: Post description
date: 2024-03-21
---

Your content here...
```

## 🎨 Customization

- Modify `tailwind.config.cjs` for theme customization
- Update `astro.config.mjs` for Astro configuration
- Customize components in `src/components/`

## 📄 License

MIT License - feel free to use this template for your own projects!

## 🙏 Credits

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
