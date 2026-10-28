# Ugmul's D&D website

Static campaign and Foundry module pages with shared styles and an illustrated fantasy identity.

- `dist/index.html`: Fragments of the Fallen player-facing introduction, Elaris's invitation/request, and the exact prophecy shared before the Silent Coin journey. Based on the Session 1 recap.
- `dist/foundry.html`: Ugmuls 5.5e Automation overview, quick start, starter-recipe examples, and resources, retains the top-level feature pitch with v0.8.2 release references.
- `dist/assets/`: original SVG illustrations; no image licensing dependency.
- `dist/foundry-how-to.html`: Class Features, the default Detailed Summary page, expanded for v0.8.2 Rogue, Fighter, Barbarian, Monk and Ranger coverage.
- `dist/foundry-latest.html`: v0.8.2 highlights; previous v0.8.1 highlights are preserved in `dist/foundry-release-0.8.1.html`.
- `dist/foundry-gm-automation.html`: Regions, targeting, rolls/saves, NPC damage/healing, and combat tracking.
- `dist/foundry-misc-automation.html`: Settings menus, chat scrolling, compendium/sheet navigation, and token HUD conveniences.
- `dist/foundry.js`: illustrative token/Region interaction, not actual Foundry automation.

## Preview locally

Run `node preview.mjs` from this directory, then open http://127.0.0.1:4173.

## Deployment

The complete publishable website is in `dist/`. No framework, package installation, or build command is needed. The site uses Google Fonts with local font fallbacks.

For a future Cloudflare Pages deployment, upload `dist/` directly, or connect a GitHub repository and use `dist` as the output directory with no build step. Domain registration alone does not connect the site. Connect `ugmul-dnd.com` to the selected hosting project when the copy and hosting choice are ready.

The `.openai/hosting.json` file records the private Sites preview identity. It is separate from your future Cloudflare Pages deployment.

## Content to finish

1. Confirm the campaign name: the existing project uses **Fragments of the Fallen**; the original website request used **A Fragment of the Fallen**.
2. Review the campaign introduction and invitation adaptation. The prophecy follows the Session 1 recap verbatim; later campaign reveals are excluded.
3. Verify the module repository is public and release assets are available before presenting an installation link. Resource URLs currently come from the local module manifest/docs.
4. Add actual module screenshots or gameplay footage to complement the conceptual illustration.

Campaign and Foundry source projects were read for reference only. Their files were not modified or bundled.

Elaris's invitation letter on the campaign page is newly reconstructed website copy based on his established voice and the DM's requested invitation details; it is not recovered original campaign text.
