# Ugmul's D&D website

Static campaign and Foundry module pages. The complete website lives in `dist/`; no build step or package installation is needed.

## Module pages

- `dist/foundry.html`: v1.0.0 overview, tabletop workflow, and installation information.
- `dist/foundry-how-to.html`: class features and the entry point for the Detailed Summary.
- `dist/foundry-feats-spells.html`: feats, weapon masteries, spells, and supported item features.
- `dist/foundry-gm-automation.html`: Regions, Automated Effects, rolls, reactions, application controls, and legendary-action reminders.
- `dist/foundry-misc-automation.html`: character creation, equipment choices, spell tools, settings, and chat controls.
- `dist/foundry-resources.html`: installation, dependencies, compatibility, and project resources.
- `dist/foundry-release-*.html`: historical release notes. The former latest-features URL redirects to the Detailed Summary.

The campaign remains in `dist/index.html`. Module website updates should preserve its content.

## Local review

Run `node preview.mjs` from this directory and open http://127.0.0.1:4173/foundry.html in the Codex preview or a local browser. Edits appear after refreshing.

Run `node .sites-local/validate-site.cjs` when the local validation helper is available to check links, anchors, and duplicate IDs.

## Publication

Edit this GitHub checkout directly and review locally. The owner publishes with a GitHub push; the connected Cloudflare project automatically deploys the website from `dist/`.

No Cloudflare connection or API operation is needed for content edits. The existing `.openai/hosting.json` records an older Sites preview identity and is not the publication workflow.
