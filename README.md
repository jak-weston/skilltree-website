# Skilltree Landing Page

Welcome to the Skilltree landing page site! This project is built with NextJS 15, React 19, TailwindCSS v4, and ShadCN UI for themeing and components.

## Getting Started

First, run the development server. Note! This a `pnpm` project. It makes everything a bit faster when downloading packages, and it's a bit smoother all around. To run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Layout

### Content

All content for pre-built pages are set in `content` folder. Doing so allows us to really quickly develop the site around a schema, building all components at once. This also has the _massive_ benefit of being able to easily change the JSON schema to automatically rebuild the website.

As a result, if we want to add new features to the site for example, all we have to do is add new features to the JSON `content/home/copy.ts` file, and the features section will re-build accordingly.

### Components

Components are small pieces that are often reused. We're using ShadCN UI which builds on Radix primitives. Essentially that just means they're high-quality and accessible. They're stored in `components/ui`, and what you see is what you get. Edit the components there and the UI will update.

Themes are set in the `src/app/globals.css` file. It's pretty beautiful because we can add themes at any time and the UI will look great, assuming you use tailwind colors accordingly throughout the UI. For example, you should do `bg-background` instead of something like `bg-white`. That way, the background will automatically update throughout when we change the theme. For more examples, explore the ShadCN UI components located in `components/ui`

### Sections

Sections are a collection of components. Usually they also include content. They're located in `src/sections`.

### Pages

Pages are built of sections! Ezpz.

## Building & Deploying

Right now, there's no Husky pre-commits or anything. Run `pnpm build` before pushing to see if there are any lint errors or whatever. The `main` branch is the live environment, so beware!
