# Recon map: Sandstorm Kenya storefront (web)

Scope: Public customer-facing storefront loop: homepage → collections → product detail → cart, with supporting story, shipping, and guarantee content. This is a pattern study for Æther Stitches, not a request to reproduce Sandstorm's brand or content.
For: Everyday consumers shopping for personal use on the Æther Stitches storefront in Kenya, Uganda, and Tanzania.
Date: 2026-11-20

## Sources

| # | source | URL | notes |
| --- | --- | --- | --- |
| 1 | Home | https://sandstormkenya.com/ | Public marketing/storefront page, navigation taxonomy, featured products and service promises. |
| 2 | Collections index | https://sandstormkenya.com/collections | Public collection directory and category labels. |
| 3 | Product detail (Weekender) | https://sandstormkenya.com/products/weekender-large-1 | Public product gallery, currency/price, color choice, add-to-cart, specifications. |
| 4 | Story | https://sandstormkenya.com/pages/about | Brand story and origin content. |
| 5 | Lifetime guarantee | https://sandstormkenya.com/pages/sandstorm-guarantee | Repair and guarantee conditions. Use only as a structural example; Aether has its own approved repair promise. |
| 6 | Worldwide shipping | https://sandstormkenya.com/pages/%F0%9F%8C%8D-we-ship-worldwide | Public international shipping explanation. Aether's regional freight is manually quoted. |
| 7 | Corporate sales | https://sandstormkenya.com/pages/corporate-sales | Business order pathway; useful only as a reference for a separate collaboration/custom intake. |

## Core loop

A shopper discovers a featured product or browses a collection, opens a product detail page to review photos, price, options and specifications, adds an available item to cart, then proceeds through the store's checkout.

## Screens

| ID | screen | route / how to reach | purpose | key components | states seen |
| --- | --- | --- | --- | --- | --- |
| S01 | Home | `/` | Introduce the brand, promotions, collections and featured products. | Shipping/repair notices, product navigation, search, cart, editorial hero panels, featured product rows, brand story links. | Empty cart; featured items and service content visible. |
| S02 | Collections index | `/collections` | Browse groupings by product type, material, occasion and campaign. | Collection links, country/currency selector, shared navigation and footer. | Collection directory; selected region displayed as Kenya/KES in retrieved page. |
| S03 | Product detail | `/products/weekender-large-1` | Evaluate and purchase a specific bag. | Image gallery, title, price, color options, add-to-cart, description, specification tabs/sections, delivery/support links. | Multiple colors; product information; add-to-cart action. Inventory errors and unavailable states not observed. |
| S04 | Cart drawer/page | Shared cart control from S01/S03 | Review selected items and continue shopping or checkout. | Cart item list, quantity controls, order note, start-shopping action. | Empty cart observed; populated cart not verified. |
| S05 | Brand story | `/pages/about` | Establish maker background and local identity. | Brand narrative, imagery, links to products and service pages. | Public editorial content. |
| S06 | Guarantee and repairs | `/pages/sandstorm-guarantee` | Explain product guarantee, repair request expectations and exclusions. | Guarantee scope, exclusions, assessment and contact guidance. | Public policy text; actual repair submission flow not observed. |
| S07 | Shipping information | `/pages/%F0%9F%8C%8D-we-ship-worldwide` | Explain domestic and international shipping. | Kenya delivery notice, international shipping information, customs caveat. | Public information page; rates and checkout behavior not verified. |
| S08 | Corporate sales | `/pages/corporate-sales` | Route business/corporate buyers into a distinct sales path. | Business sales content and enquiry route. | Public business page; form handling not verified. |

## Flows

```
F01 Shopper browses and buys a ready-made item
    S01 -> S02 or featured product -> S03 -> S04 -> checkout (checkout not inspected)
    observed happy path: 2–3 screens before checkout depending on whether the shopper opens the collections index
    edge: product availability, quantity limits, payment failure, shipping quote and populated cart behavior were not verified publicly

F02 Shopper investigates service confidence
    S01 -> S06 or S07 -> S02/S03
    edge: Aether needs its own approved repair, returns and regional freight terms; never reuse Sandstorm's terms

F03 Business buyer explores a bulk/custom sales path
    S01 -> S08 -> enquiry (submission behavior not verified)
    edge: Aether's collaboration intake and custom-order quotation are distinct needs and should use Aether's own language and workflow
```

## Components

| component | variants | states | used on |
| --- | --- | --- | --- |
| Announcement/service notice | shipping threshold, Kenya delivery, worldwide shipping, lifetime guarantee | visible, expandable/link-out | shared pages |
| Product navigation | product types, collections, collaborations, about | open/closed behavior not inspected | shared header |
| Search | query input and results action | idle; result behavior not inspected | shared header |
| Product tile | image, title, price/from-price, quick view | normal, sold out seen on homepage | home/collections |
| Product gallery | primary image and thumbnails | selected image behavior not verified | product detail |
| Variant selector | color choice; size/variant selector on product details | option selection | product detail |
| Cart | item lines, quantity, order note, checkout path | empty observed; populated not verified | shared cart |
| Product information sections | craftsmanship, features, weight, dimensions | content sections | product detail |
| Service/editorial page | story, shipping, repairs, corporate sales | static content and outgoing links | supporting pages |

## Inferred data model

```
Product  id, title, description, category, materials, images, price, currency, options, availability
         evidence: S01 product listings and S03 detail
         confidence: high for displayed fields; stock representation details are a guess

Collection  id, name, product references, collection type (category/material/occasion/campaign)
            evidence: S02 collection directory and S01 navigation
            confidence: high

Cart  id/session, items(product, option, quantity), order_note
      evidence: S04 empty-cart controls and S03 purchase action
      confidence: medium; populated behavior was not inspected

ServicePolicy  type (shipping/guarantee/repair), market scope, terms, contact path
               evidence: S01, S06, S07
               confidence: high that policy content is presented; backend workflow is unknown
```

Relationships: Collection many-to-many Product; Cart one-to-many CartItem; CartItem references a Product and selected option. These are inferred storefront concepts, not confirmed backend schema.

## Feature matrix

See `features.csv`. Must: 13, should: 1, could: 2, skip: 4.

## Aether adaptation notes

- Keep the familiar shopping path: clear product categories, product detail pages with real photos and material/size details, visible price, option selection, and availability.
- Organize Aether's agreed categories around shopper language; don't inherit Sandstorm's long overlapping category tree.
- Preserve Aether's two purchase intents: ready-made checkout and custom enquiry/quotation with deposit and balance tracking.
- Show Aether-specific availability states: out of stock disables purchase, made to order routes to enquiry, and coming soon has no checkout.
- Show regional pricing and delivery before payment: Kenya/KSh with complimentary delivery and M-Pesa; Uganda/UGX and Tanzania/TSh with manual freight quotes and payment method marked pending selection.
- Keep the distinct collaboration page requested for Aether; a corporate-sales page is only a structural cue.
- Use Aether's own brand story, logo, visual system, photos, product names, descriptions, policies and copy. Do not copy Sandstorm's photography, page text, product designs, names, marks, or layout verbatim.

## Out of scope (cannot or should not be cloned)

- Sandstorm's brand, logo, photography, product names, product designs, editorial copy and collaborations.
- Their warranty, shipping, customs, delivery-provider, discount and payment promises; Aether has separate confirmed rules.
- Private commerce data, customer accounts, order records, payment implementation and backend behavior.
- Exact storefront source, scripts, private APIs or network behavior.

## Size

Screens 8, flows 3, inferred entities 4. Hard parts for an Aether production implementation: catalogue and market-specific pricing/inventory; ready-made checkout vs custom quotation/deposit workflow; regional freight and payment integration; admin management of stock, prices, orders and returns. Recon size: M for this focused storefront slice; production commerce scope depends on the selected platform and integrations.
