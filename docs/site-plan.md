# Æther Stitches Website — Discovery Brief

**Status:** Draft for review  
**Prepared:** 17 November 2026  
**Brand:** Æther Stitches — “You dream it, we stitch it!”

**Primary audience:** Everyday consumers buying for personal use.  
**Prototype stack:** Static HTML/CSS/JS, code-first.  
**Visual choice:** Familiar storefront/category standard, judged against the craft of the three supplied references.

## 1. Project goal

Create a bilingual online storefront and custom-order channel for Æther Stitches, a bag brand serving Kenya, Uganda, and Tanzania. The website should let customers buy ready-made bags, understand customization possibilities, submit a custom brief, request a quote, and continue the conversation on WhatsApp. It should communicate thoughtful craftsmanship, honest product representation, dependable service, repair support, and opportunities to collaborate with like-minded creators and brands.

## 2. Confirmed requirements

| Area | Confirmed direction |
| --- | --- |
| Sales model | Sell ready-made bags and accept custom orders |
| Markets | Kenya, Uganda, Tanzania |
| Languages | English and Swahili |
| Display currencies | KSh as primary; UGX and TSh also available |
| Delivery | Complimentary in Kenya; Uganda and Tanzania freight is quoted manually (or a calculated rate can be evaluated later) |
| Payments | Kenya: M-Pesa. Uganda/Tanzania: regional payment gateway to be confirmed |
| Product families | Backpacks, travel duffels, sling bags, tote bags, wallets, caps, crossbody bags, purses, handbags |
| Materials | PU leather, genuine leather, canvas, kitenge |
| Product pricing | Show product price ranges and customization options |
| Custom sales channels | Enquiry form, quote, and WhatsApp conversation |
| Ready-made timing | 3 working days processing |
| Custom timing | Quotation and deposit; production takes 7 working days after production begins |
| Returns | Request period: 7 calendar days |
| Repairs | Lifetime repair promise, excluding intentionally inflicted damage |
| Admin operations | Admin can edit product prices and stock quantities without code; live stock management |
| Order operations | Separate ready-made/custom flows; deposit/balance tracking; manual Uganda/Tanzania freight quotes; returns submission/management; order status tracking; admin notices for new orders, quotes, and returns |
| Brand palette | Gold from the logo, off-white, black |
| Brand assets | Logo exists at `Assets/Æther Stitches Logo.png`; product and workshop photos will be supplied later |
| Collaboration | Dedicated collaboration page for like-minded creators and brands |

## 3. Brand and messaging direction

Use the supplied “Why Choose Æther Stitches?” copy as the source of truth for the brand story. Core themes:

- More than a purchase: lasting value and a dependable promise.
- Thoughtful craftsmanship and functional, distinctive design.
- Honest product descriptions and transparent prices.
- Customer-centred communication and a straightforward buying experience.
- Personal expression through customization.
- Trust earned through fulfilled promises and customer service.

The site should retain the tagline **“ÆTHER STITCHES — YOU DREAM IT, WE STITCH IT!”** A concise homepage version can lead with the custom-made proposition, with the full commitment statement on the About page.

## 4. Reference-site recon

This is a clean-room pattern audit for Aether’s own site. It records public information architecture and commerce patterns, not copy or assets to reproduce. Notes below are based on accessible page text/navigation; exact visual styling has not been verified from screenshots.

| Reference | Observed structure and useful patterns | Aether application |
| --- | --- | --- |
| [Urban Ranch Kenya](https://urbanranchkenya.com/) | Homepage foregrounds Kenyan handmade production, featured/new products, customer reviews, collections, global delivery, pickup, gift cards, and a maker story. A separate shipping page explains processing/dispatch timing, delivery, pickup, and returns. | Use a clear craft-and-value story, an editorial featured-products area, real customer proof when available, and plainly written delivery/repair/returns information. Keep Aether’s actual 3-day and 7-day timelines distinct. |
| [Home 254](https://homeapparel254.com/) | Large category navigation, country/currency selector, customer-care links, FAQ, shipping/returns policy, and a dedicated “Wanna Collab?” page. The collaboration page invites a clear submission path. | Use a simple bag-first category menu, market/currency selector, visible support links, and a collaboration intake form. Do not copy its apparel taxonomy or wording. |
| [Denri](https://denriafricastores.com/) | Bag categories grouped by use, direct product add-to-cart and variant discovery, plus custom bags, corporate gifts, FAQ, tracking, and store information. Its custom-order page lays out a journey from enquiry/consultation and quote through approval, making, and delivery. | Organize Aether products by bag type and use; make product/material/variant details easy to scan; show a separate custom-order process with clear steps and a guided brief. Include tracking only if the fulfillment setup supports it. |

### Reference sources checked

- Urban Ranch homepage and [shipping policy](https://urbanranchkenya.com/policies/shipping-policy)
- Home 254 homepage, [collaboration page](https://homeapparel254.com/pages/collab), [shipping policy](https://homeapparel254.com/pages/shipping-policy), and [returns policy](https://homeapparel254.com/pages/return-policy)
- Denri homepage, [customization page](https://denriafricastores.com/pages/bag-customization), and [FAQ](https://denriafricastores.com/pages/pushdaddy-faq-1)

## 5. Proposed sitemap

### Primary navigation

1. **Home** — brand promise, ready-made and custom entry points, featured categories/products, material/craft story, trust signals, collaboration teaser.
2. **Shop** — all products with filters for category, material, price, availability, and ready-made/customizable status.
   - Backpacks
   - Travel Duffels
   - Sling Bags
   - Tote Bags
   - Crossbody Bags
   - Handbags & Purses
   - Wallets
   - Caps
3. **Custom Made** — what can be customized, materials/options, how quoting works, lead times, enquiry form, WhatsApp CTA.
4. **Our Story** — Aether’s story, the full “Why Choose Æther Stitches?” commitment, workshop/maker photos when available.
5. **Collaborate** — creator/brand collaboration introduction and enquiry form.

### Supporting pages and utilities

- Product detail pages: photos, current price, price range/variant pricing where applicable, material, dimensions/capacity, colors, availability, customization, dispatch timing, delivery note, care, repair promise, add-to-cart, WhatsApp question.
- Cart and checkout: delivery country, currency, delivery charge disclosure, M-Pesa payment handoff/integration, order confirmation.
- Custom order form: contact details, country, bag type/use, material, size, colors/pattern, quantity, budget band, target date, inspiration upload/link, notes, and preferred response channel.
- **Materials & Care** — explain PU leather, genuine leather, canvas, and kitenge; care guidance and repair request path.
- **Repairs** — lifetime repair promise, coverage boundary, assessment and shipping process.
- **Delivery, Returns & Exchanges** — country-specific delivery terms, time estimates, charges, eligibility, and how to get help.
- **FAQ** — ordering, custom quotes, materials, M-Pesa, currency, delivery, returns, repairs, and collaborations.
- **Contact / WhatsApp** — direct customer support.
- Privacy policy and terms.
- Optional later: journal/updates, customer gallery, gift cards, order tracking, wholesale/corporate orders.

## 6. Main customer journeys

### Ready-made purchase

Home or category → product detail → choose available options → add to cart → choose destination → see delivery charge and currency → Kenya M-Pesa or regionally configured payment → confirmation with processing and delivery timeline. Out-of-stock items cannot be purchased; coming-soon items are visible without checkout; made-to-order items route to enquiry/quote.

### Custom order

Home/custom page → review customization and timing → submit brief with photos or inspiration → Aether reviews feasibility/schedule → quote and deposit terms sent → customer approves and pays deposit → production start confirmed → 7 working day production window → balance tracked → dispatch/delivery update.

Production begins only after the design, quote, deposit, and schedule are confirmed. Track deposit and balance separately.

### Collaboration

Collaboration page → see the kinds of partnership welcomed → submit creator/brand details, idea, audience/links, and timing → Aether follows up by email or WhatsApp.

### Repair request

Repair page/FAQ → submit order/contact details and issue photos → Aether assesses whether it falls within the lifetime repair promise → confirm repair plan and any delivery costs → status update.

## 7. Content and design direction

- Use the existing gold logo with off-white and black as the base palette. The logo is visually detailed, so surrounding typography and layouts should stay clean and give it room.
- Build a mobile-first storefront with clear category browsing, product photography, visible prices, and strong WhatsApp access.
- Use product and workshop photography when supplied; until then, keep image slots replaceable and do not invent product photos or reviews.
- Give custom work its own visual pathway, separate from standard checkout, so customers understand that quotes and schedules are confirmed by the team.
- English is the initial content source; provide a complete Swahili version of all navigation, product, checkout, policy, and form text before launch.
- Preserve the brand’s honest, dependable tone. Avoid unsupported claims about leather origin, sustainability, durability testing, artisan employment, or production capacity.

## 8. Remaining decisions before production checkout

1. **Catalog data:** provide real product names, SKUs, statuses, price ranges per market/currency, options, photos, dimensions, and stock quantities. Decide which items are in stock, out of stock, made to order, or coming soon.
2. **Regional pricing:** provide KSh, UGX, and TSh prices or confirm that the latter currencies should be calculated from KSh with a specified exchange-rate policy.
3. **Regional payments:** choose the Uganda/Tanzania gateway and confirm which local options to offer.
4. **Delivery detail:** define shipping coverage and expected transit times by country/region, and how international freight quotes are obtained and accepted. Processing remains 3 working days for ready-made items.
5. **Returns:** the request window is 7 calendar days; confirm condition requirements, exclusions, remedies, and return-shipping responsibility.
6. **Lifetime repairs:** clarify whether labor is covered, which parts/materials are excluded, assessment turnaround, and who pays shipping. Keep the intentional-damage exclusion explicit.
7. **Custom terms:** confirm quote validity, deposit amount, balance due date, revisions, cancellation rules, and how the 7 working days are counted.
8. **Contact details:** WhatsApp number, email, social accounts, business address/pickup availability, and support hours.
9. **Collaboration intake:** partnership types you want (co-designed collections, creator features, corporate gifting, wholesale, other) and preferred contact route.
10. **Production platform:** the approved first stage is a static HTML/CSS/JS prototype. Select an ecommerce platform or custom stack later for live checkout, payment integrations, and no-code admin.

## 9. Refined build prompt

> Build a mobile-first, bilingual (English and Swahili) storefront for Æther Stitches, a bag brand serving Kenya, Uganda, and Tanzania. The site must support both ready-made bag sales and custom-order enquiries. Use the supplied logo and a gold, off-white, and black palette. Organize products into backpacks, travel duffels, sling bags, tote bags, wallets, caps, crossbody bags, purses, and handbags. Product pages should show clear prices or price ranges, materials (PU leather, genuine leather, canvas, kitenge), available options, lead time, and a purchase or enquiry action.
>
> Provide separate ready-made and custom-order journeys. Ready-made processing takes 3 working days. Custom orders require a quotation and deposit; production takes 7 working days after it begins. Kenya delivery is complimentary. Uganda and Tanzania delivery uses a manual freight quotation. Display KSh as primary, with UGX and TSh available. Use M-Pesa in Kenya; regional payment options for Uganda and Tanzania remain to be selected. Provide an admin dashboard for no-code price and stock updates, live inventory states, deposit/balance tracking, manual international freight quotes, return request management, order status tracking, and admin notifications for orders, quotes, and returns. Show delivery and production timelines before payment. These requirements do not imply that payment or freight integrations are already connected.
>
> Include Home, Shop/category pages, product details, Custom Made, Our Story, Collaborate, Materials & Care, Repairs, Delivery/Returns, FAQ, Contact/WhatsApp, Privacy, and Terms. Explain the lifetime repair promise with the exclusion for intentionally inflicted damage, using final policy details supplied by Aether. Use the provided “Why Choose Æther Stitches?” message and tagline “You dream it, we stitch it!” Preserve its themes of thoughtful craftsmanship, honest representation, customer-centred service, dependability, and personal expression. Product and workshop photography will be provided later; use replaceable image placeholders and do not fabricate products, testimonials, or claims. Reference Urban Ranch for maker-story and trust presentation, Home 254 for currency and collaboration patterns, and Denri for bag taxonomy and a clear customization path. Do not copy their text, identity, images, or exact layouts.
>
> Before production checkout, resolve the remaining decisions in section 8 and define observable behavior for checkout, quote approval, regional delivery, repairs, and returns. The approved first stage is a static homepage and catalog prototype; checkout and admin systems follow.

## 10. Next step

The homepage and catalog prototype is built. Before production checkout, resolve catalog data and regional prices, payment handling, transit timing, and the precise repair/returns terms.
