# Ugmul's D&D website

Two static pages with shared styles and an illustrated fantasy identity.

- `dist/index.html`: Fragments of the Fallen campaign introduction. The primer and proposed themes are explicitly draft content.
- `dist/foundry.html`: Region and Spell Automation overview, quick start, starter-recipe examples, and resources, based on the local v0.5.7 documentation.
- `dist/assets/`: original SVG illustrations; no image licensing dependency.
- `dist/foundry.js`: illustrative token/Region interaction, not actual Foundry automation.

## Preview locally

Run `node preview.mjs` from this directory, then open http://127.0.0.1:4173.

## Deployment

The complete publishable website is in `dist/`. No framework, package installation, or build command is needed. The site uses Google Fonts with local font fallbacks.

For a future Cloudflare Pages deployment, upload `dist/` directly, or connect a GitHub repository and use `dist` as the output directory with no build step. Domain registration alone does not connect the site. Connect `ugmul-dnd.com` to the selected hosting project when the copy and hosting choice are ready.

The `.openai/hosting.json` file records the private Sites preview identity. It is separate from your future Cloudflare Pages deployment.

## Content to finish

1. Confirm the campaign name: the existing project uses **Fragments of the Fallen**; the original website request used **A Fragment of the Fallen**.
2. Write and approve the spoiler-free campaign pitch, themes, setting overview, character hooks, and table details.
3. Verify the module repository is public and release assets are available before presenting an installation link. Resource URLs currently come from the local module manifest/docs.
4. Add actual module screenshots or gameplay footage to complement the conceptual illustration.

Campaign and Foundry source projects were read for reference only. Their files were not modified or bundled.
