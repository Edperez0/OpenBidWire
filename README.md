# OpenBidWire website

The marketing site for OpenBidWire, a weekly email of open public bids for contractors. Plain HTML, CSS and a little JavaScript. No build step, no backend, no database. Payments go through a Stripe Payment Link.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The single page: hero, problem, how it works, example bid, editions, pricing, free sample form, FAQ |
| `styles.css` | All styling. Colors and fonts are in the `BRAND CONFIG` block at the top |
| `script.js` | Footer year and the free sample form submit |
| `privacy.html`, `terms.html` | Legal pages (plain language drafts, have them reviewed) |
| `favicon.svg`, `apple-touch-icon.png`, `og.png` | Icons and the link preview image |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

All links between files are relative, so the site works at `https://edperez0.github.io/OpenBidWire/` and at a custom domain with no changes.

## Before the form works: connect Formspree

The free sample form posts to Formspree.

1. Create a free Formspree form and copy its endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
2. In `index.html`, replace `YOUR_FORM_ID` in the form `action` with the ID from that endpoint.
3. Push, submit the form once with real values, and confirm it appears in the Formspree dashboard. Formspree may email you to confirm the first submission.

The free Formspree plan has a monthly submission limit, so check their pricing page if volume grows.

## Publish on GitHub Pages

1. In the repo, open Settings, then Pages.
2. Under Build and deployment, set Source to Deploy from a branch.
3. Choose branch `main` and folder `/ (root)`, then Save.
4. After a minute or two the site is live at `https://edperez0.github.io/OpenBidWire/`.

Pages from a private repo needs a paid GitHub plan. On a free account, keep the repo public.

## Add openbidwire.com (Namecheap)

Do this after you buy the domain.

**1. DNS records at Namecheap**

Open Domain List, click Manage next to openbidwire.com, then the Advanced DNS tab. Delete the default parking page and URL redirect records, then add:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `edperez0.github.io` |

Optional, for IPv6, add four AAAA records with host `@`:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

Do not add `https://` or the repo name to any value. Check GitHub's current docs (search "GitHub Pages custom domain apex") in case these addresses ever change.

**2. Tell GitHub the domain**

In the repo, open Settings, then Pages, then Custom domain. Enter `openbidwire.com` and Save. GitHub adds a `CNAME` file to the repo for you. Do not create one before you own the domain, because a `CNAME` pointing at a domain with no DNS will break the github.io address.

**3. Turn on HTTPS**

DNS can take from a few minutes to a few hours. When GitHub finishes its check, tick Enforce HTTPS in the same Pages settings.

**4. Update the absolute URLs**

Link previews need full addresses. In `index.html`, replace every `https://edperez0.github.io/OpenBidWire/` with `https://openbidwire.com/`. That covers the `canonical`, `og:url`, `og:image` and `twitter:image` tags. Then use the same domain in your email template footer.

## Change the brand

Open `styles.css` and edit the variables under `BRAND CONFIG`. They match the email template, so changing one place updates the whole site.

## Things to keep current by hand

- **Example bid card.** It shows a real bid from Issue 001. Its dates will pass, so swap in a newer one now and then. It is labeled as an example.
- **Founding plan limit.** The page says the first 10 companies per edition. Nothing enforces it. Deactivate the Stripe Payment Link, or set a payment limit on it, when the seats are gone.
