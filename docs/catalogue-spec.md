# Æther Stitches — Catalogue Domain and Data Specification

**Status:** Draft for owner review; specification only
**Prepared:** 20 November 2026
**Scope:** Catalogue domain, product data contract, presentation rules, and a staged implementation roadmap. This document does not add catalogue data or functionality.

## 1. Purpose and current state

The catalogue must let shoppers discover real Æther Stitches products, compare verified details and market prices, and understand whether an item can be purchased or needs an enquiry. It must also keep product and inventory data ready for later order, quote, and administration systems.

The current project is a static HTML/CSS/JavaScript prototype. The homepage has category controls and an empty-catalogue message; there are no product records, product detail pages, cart, checkout, payment integration, inventory service, or admin dashboard. The selected market controls delivery guidance and display currency context. The eventual commerce/admin platform has not been selected.

This spec is the source for a future catalogue implementation. Its recommendations are proposals until approved; confirmed business rules remain distinct from unresolved details.

## 2. Evidence and decision labels

- **Confirmed** — supplied as a business requirement or visible in the current project.
- **Proposed** — a product or technical decision recommended here for owner approval.
- **Assumed for planning** — the simplest useful interpretation where a build sequence needs a working boundary.
- **Unresolved** — requires owner input before affected data or behavior can be finalized.

No product names, SKUs, prices, quantities, imagery, dimensions, material composition, or customization choices are supplied. The catalogue must stay empty until verified records are provided. Do not use competitor content or imagery as catalogue data.

## 3. Catalogue domain

### 3.1 Concepts and ownership

| Concept | Meaning | Owner / boundary |
| --- | --- | --- |
| Product | A customer-facing bag or accessory model with verified descriptive information. | Catalogue content owner maintains approved facts. |
| Variant | A purchasable or selectable configuration of a product, such as a real size or color choice. | Create only where Æther confirms options and whether they affect SKU, price, or stock. |
| Category | Shopper-facing product grouping. | Use the confirmed categories below; do not silently create new taxonomy. |
| Market price | Explicit price for a product or variant in one supported market/currency. | Owner supplies amounts; no automatic conversion is defined. |
| Stock quantity | Count of ready-made units available for sale for a stock-tracked product or variant. | Ownership depends on whether the product has separately stocked variants; future admin/inventory capability only. |
| Availability | Customer-facing purchase or enquiry state derived from publication, product type, and stock/status. | Catalogue owns display eligibility; order system later revalidates before accepting an order. |
| Custom enquiry | Request for an individually scoped and quoted piece. | Separate from direct product checkout; quote and deposit process is later commerce scope. |
| Collection | A curated set for merchandising (for example, a seasonal edit). | Proposed future capability; no collection names or campaigns are approved. |

### 3.2 Confirmed product categories

Confirmed categories: Backpacks, Travel Duffel Bags, Sling Bags, Tote Bags, Wallets, Caps, Crossbody Bags, Purses, and Handbags.

The following taxonomy decisions are owner-controlled and unresolved; retain the supplied category information and do not merge, remove, or add taxonomy on the owner's behalf:

- Whether **Handbags** and **Purses** remain separate categories or become one browse group.
- Whether **Sling Bags** and **Crossbody Bags** are distinct categories.
- Whether a **Men/Women/Kids** taxonomy should be used.
- Whether **Chest Bags** should be added as a category.

A product's primary category and any secondary collection/tag relationships must follow the owner's approved taxonomy. Secondary grouping should not duplicate a product record.

### 3.3 Materials

Confirmed material vocabulary: PU leather, genuine leather, canvas, and kitenge. Record only materials actually verified for that specific product or variant. Do not imply source, grade, composition, care performance, or durability beyond facts supplied by the owner.

## 4. Product lifecycle and availability rules

Publication status and sellability are separate concerns. **Proposed lifecycle:** `draft` (not public), `published` (eligible for public listing), `coming_soon` (public teaser, no purchase), and `discontinued` (not offered; whether it remains publicly visible is an owner decision). A published product also has a fulfilment mode and, where applicable, stock quantity.

| Product state / mode | Listing behavior | Customer action |
| --- | --- | --- |
| Draft | Hidden from public catalogue and search. | None. |
| Coming soon | May be shown with a clear “Coming soon” state; omit purchase controls. | No checkout. Enquiry/waitlist is not confirmed. |
| Ready-made, available stock | Show verified current price and details. | Purchase may be offered only when a future checkout can revalidate availability. |
| Ready-made, out of stock | Remain visible with out-of-stock status if published. | Disable purchasing. Do not imply restock timing or allow backorder. |
| Made to order | Show verified information and explain that the customer must enquire. | Accept a custom-order enquiry/quote request; no direct checkout. |
| Discontinued | Proposed default is hidden from active browsing, with any historical order references retained by the future commerce system. | No new order. Confirm whether a public archive is wanted. |

**Confirmed business rule:** “Out of stock” disables purchasing; “Made to order” accepts a custom order/enquiry; “Coming soon” is displayed without checkout. These states must not be conflated. “Made to order” is not the same as a customer-designed custom commission.

**Proposed invariants:**

1. A product must be published and have a supported availability state to appear publicly.
2. A ready-made purchase action is enabled only for an orderable product/variant with a valid market price and positive available quantity.
3. An out-of-stock item has no purchase action; a future waitlist or backorder requires owner approval.
4. Made-to-order products route to enquiry/quotation and do not enter a ready-made cart.
5. Coming-soon products have no checkout action, regardless of stock or price fields.
6. A future order line snapshots the selected product/variant identity, displayed unit price, currency, and descriptive name at order time; later catalogue edits must not rewrite historical orders.
7. The order system must recheck price and stock at order submission. A static browser catalogue cannot guarantee inventory consistency.

**Stock ownership rule (proposed):** a product without separately purchasable or separately stocked variants owns its applicable stock quantity. If variants are separately purchasable or separately stocked, each such variant owns its own stock quantity; do not also maintain a conflicting parent quantity as an independent source of truth. A parent may expose an aggregate derived from its variants for display/reporting, but it is not separately editable stock.

**Stock allocation across markets (proposed default, requires owner approval):** use one shared stock pool across Kenya, Uganda, and Tanzania unless the owner confirms that inventory is physically or operationally market-specific. This is a planning recommendation, not an approved business rule. If the owner approves market-specific stock, define its ownership and update process before implementation.

**Unresolved:** whether stock is tracked at product or variant level for each product, whether inventory is shared across markets, whether units can be reserved, how simultaneous orders and manual stock corrections are handled, whether stock may go negative, and whether a customer can request notification for restock. A static catalogue cannot authoritatively reserve stock or guarantee transactional inventory.

## 5. Regional pricing and market display

| Market | Currency label | Delivery context confirmed | Payment state |
| --- | --- | --- | --- |
| Kenya | KSh / KES | Complimentary delivery | M-Pesa is the intended payment method; integration is not connected in the current site. |
| Uganda | UGX | Freight quoted manually / freight charge applies | Payment options to be confirmed. |
| Tanzania | TSh / TZS | Freight quoted manually / freight charge applies | Payment options to be confirmed. |

**Proposed pricing ownership:** a product without separately purchasable or separately stocked variants owns its applicable market prices. If variants are separately purchasable or separately stocked, each variant owns its applicable market price(s), even when the amounts match; do not maintain a conflicting parent price as a second source of truth. A parent-level display value may be derived from its variants, but is not separately editable pricing.

Store explicit owner-approved prices for each market/currency in which the product or variant is offered. Use a currency code internally (`KES`, `UGX`, `TZS`) and the approved display label in the UI. Do not derive UGX or TZS prices from KSh, or substitute another market's price, when the selected market has no approved price.

**Missing-market-price behavior:** a product/variant without an owner-approved price for the selected market is non-purchasable in that market. Do not show a different market's price or offer checkout. Whether an enquiry/contact action is shown in that case requires owner approval; it is not implied by this rule.

For a parent product card with differently priced variants, show a price range only when it can be calculated from real, applicable, owner-approved variant prices for the selected market and currency. A single price or “from” price must likewise correspond to a real applicable configuration and follow a rule approved by the owner. Do not combine prices across markets, unavailable configurations, or unapproved options. No price or range may be invented to fill empty catalogue content.

**Unresolved:** actual price lists; whether market prices differ; tax inclusion/display; discount handling; currency formatting/precision rules; the owner-approved parent-card rule when variants differ; whether enquiry is allowed when a market price is missing; and whether market selection represents delivery destination or merely display preference. Cross-border delivery is a manual quote and is not part of product price unless an approved rule says otherwise.

## 6. Customization and product options

Customization is a capability separate from stock status. The confirmed business model includes customer-led customization and made-to-order enquiries, but no specific selectable option set has been supplied.

**Proposed distinctions:**

- **Fixed variant option:** a predefined choice that Æther actually offers (for example, a confirmed color or size). It can be selected on a product page; if it is stocked or differently priced, it needs its own variant identity and market price/quantity.
- **Custom request:** a freeform or guided brief that needs feasibility review and quotation. Submit it through the custom enquiry path, not as a ready-made cart line.
- **Customization availability:** record whether enquiries are accepted for that product. Do not infer that all products can be customized.

**Unresolved owner input:** which products can be customized; available colors, sizes, materials, hardware, linings, dimensions, monograms, or other options; whether embroidery is offered; quantity limits; added costs; lead-time effects; and what reference files customers may submit. Do not advertise embroidery or any unconfirmed option.

## 7. Product information contract

Field requirements below apply to a future catalogue record; they do not authorize filling in sample or fictional products.

| Field | Requirement | Notes |
| --- | --- | --- |
| `id` | Required, stable, internal identifier | Never reuse after discontinuation. |
| `slug` | Required once published | Unique public URL token; avoid embedding mutable prices or availability. Localized URL strategy is deferred. |
| `name` | Required to publish | Proposed/required standard: English and Swahili values before publication; Swahili must be owner-reviewed. Owner must confirm whether English-only listings may temporarily be published. |
| `summary` | Required to publish | Short, factual, bilingual customer-facing description under the proposed bilingual publication standard. English-only temporary publication requires owner approval. |
| `description` | Recommended | Bilingual, grounded in approved product facts; do not invent translations. |
| `primaryCategoryId` | Required to publish | One of the confirmed categories, subject to the handbag/purse decision. |
| `materials` | Required when known; otherwise block publish pending owner decision | Values must reflect actual product construction. |
| `fulfilmentMode` | Required | `ready_made` or `made_to_order`; custom enquiry capability is a separate boolean/relationship. |
| `publicationStatus` | Required | `draft`, `published`, `coming_soon`, or `discontinued` as proposed above. |
| `marketPrices[]` | Required for market-specific purchase | Product-owned if there are no separately purchasable/stocked variants; otherwise variant-owned. Do not duplicate parent and variant prices as competing sources. One explicit owner-approved amount/currency per offer; no fabricated conversions. |
| `variants[]` | Conditional | Only for owner-confirmed selectable configurations. Stable variant ID; variant owns its prices and/or stock when separately purchasable or separately stocked. |
| `stockQuantity` | Required for stock-tracked ready-made inventory | Owned by product when no separately stocked variants exist; otherwise by each separately stocked variant. Non-negative integer is a proposed validation rule; no stock mechanism exists yet. |
| `customEnquiryAvailable` | Required boolean | Must be explicitly maintained; does not imply options or quote acceptance for every product. |
| `images[]` | Required before a photo-led product can publish | Stable asset path/reference, order, and meaningful English/Swahili alt text. No supplied images today. |
| `dimensions` / `capacity` / `weight` | Conditional, recommended | Include only when measured and approved, with units. |
| `careInstructions` | Conditional | Publish only owner-approved care information. |
| `processingTime` | Derived from documented business requirements, subject to final owner confirmation | Documented durations: ready-made processing is 3 working days; custom production is 7 working days after production begins. Confirm these remain final before implementation. Show custom timing only with the start condition. Transit time is unresolved and must not be inferred. |
| `createdAt` / `updatedAt` | Optional for interim static data; required if a future admin/audit workflow needs history | Exact operational need and retention are deferred. |

**Suggested logical shape (illustrative contract only; no file/data is being created):**

```text
Product
  id, slug, localized name/summary/description
  primaryCategoryId, materials[]
  fulfilmentMode, publicationStatus, customEnquiryAvailable
  product-owned marketPrices[] and stockQuantity when there are no separately purchasable/stocked variants
  variants[]? (each with id, SKU?, options; variant-owned marketPrices and/or stockQuantity when separately purchasable/stocked)
  images[] (asset reference, sort order, localized alt text)
  verified specifications? (dimensions, capacity, weight, care)
```

This is a conceptual model, not a committed database schema. A future backend may normalize categories, translations, price records, and inventory into separate tables/collections.

## 8. Catalogue presentation requirements

### 8.1 Category collection

- Show category name, a useful product count only when derived from actual published records, and product cards based on real records.
- Support category browsing and market selection. Filters for material, price, availability, and fulfilment mode are proposed once the catalogue size and data quality justify them.
- Empty categories should have a truthful empty state; do not show invented products, prices, ratings, sales, or stock.
- The category presentation and all customer-visible labels must support English and Swahili.

### 8.2 Product card

Display, when available: real image, name, applicable selected-market price or honest range, and a clear availability label/action. Hide or disable purchase controls for out-of-stock and coming-soon products. Made-to-order cards should lead to the enquiry route. Avoid an unqualified “Add to bag” action for enquiry-only products.

### 8.3 Product detail

Present verified product photos, name, selected-market price, materials, available options, dimensions/specifications where supplied, availability, and appropriate next action. Before a future payment step, show the confirmed ready-made processing time (3 working days), Kenya complimentary delivery, or Uganda/Tanzania manual freight quotation as applicable. State that custom production takes 7 working days after production starts; do not present this as total turnaround. Transit and quote timing remain unresolved.

Product detail must distinguish:

- Ready-made item available to order.
- Ready-made item currently out of stock.
- Made-to-order item requiring an enquiry and quote.
- Coming-soon item with no checkout.
- Custom commission, which has its own quote/deposit flow.

## 9. Data management and future-commerce boundaries

### 9.1 Recommendation for the first catalogue implementation

**Proposed interim source:** a separate, schema-checked static JSON catalogue loaded by the current HTML/JS site. Keep product records out of page markup and rendering logic; use stable product/variant IDs and asset references. This fits the existing static architecture and is easy to replace or import when a commerce platform is selected.

This interim method requires manual file editing and does **not** satisfy the confirmed future requirement for no-code admin price and stock updates. It provides no transactional inventory guarantees and no authoritative stock reservation. Catalogue quantities in such a file are display data only; they cannot prevent simultaneous orders or stale quantities from overselling. Do not represent this proposal as an admin or inventory-control solution. If a live catalogue is required before platform selection, decide whether to wait for the commerce platform or explicitly accept this temporary manual workflow.

### 9.2 Future compatibility interface

The customer-facing catalogue should expose a narrow read model to future purchase/enquiry flows:

```text
getProduct(productId, market) -> published product details + applicable price + availability
listProducts(filters, market) -> published product summaries
checkOrderability(productId, variantId, market, quantity) -> eligible / unavailable + reason
```

These are conceptual operations, not implemented endpoints. Later checkout must independently validate current price, market, quantity, and orderability on the trusted commerce side. The catalogue must not own payment credentials, payment authorization, customer accounts, orders, deposits, balances, freight quotes, returns, or notifications. Those belong to later commerce/operations domains and must reference stable product/variant IDs. An order line stores a snapshot so catalogue edits do not alter completed or pending order records.

## 10. Blank product intake template

Complete one record per product; add a separate variant sheet/list only for owner-confirmed configurations. Assign prices and stock to either the product or its separately purchasable/stocked variants according to the ownership rules above; do not create competing parent and variant values.

| Intake field | Owner-provided value |
| --- | --- |
| Product name (English) |  |
| Product name (Swahili, reviewed) |  |
| Proposed slug |  |
| Product ID / SKU |  |
| Primary category |  |
| Product type: ready-made or made-to-order |  |
| Publication/availability state |  |
| Product summary and factual description (EN/SW) |  |
| Materials actually used |  |
| Options and variant definitions, if any |  |
| Price by market and currency (KES / UGX / TZS), with owner-selected product or variant owner |  |
| Stock quantity by product/variant; shared or market-specific allocation pending owner decision |  |
| Custom enquiries accepted? For which requests? |  |
| Product images and display order |  |
| Alt text (EN/SW) |  |
| Dimensions/capacity/weight with units, if verified |  |
| Approved care instructions, if any |  |
| Any product-specific processing information |  |
| Fact owner and date verified |  |

## 11. Owner decisions required

Resolve these before the affected behavior or records are built:

1. Supply the real product inventory: names, IDs/SKUs, categories, verified material/specification facts, market prices, stock quantities, statuses, options, and images.
2. Resolve the owner-controlled taxonomy decisions: Handbags versus Purses; Sling Bags versus Crossbody Bags; whether to use Men/Women/Kids; and whether to add Chest Bags.
3. Decide whether market price lists are maintained independently or converted; if converted, specify source, frequency, rounding, and display policy. Also clarify if selected market means delivery destination.
4. Confirm the proposed shared stock pool across markets or approve market-specific stock. Decide product-vs-variant stock ownership per product, how adjustments/reservations work, and whether any waitlist/backorder is desired.
5. Define actual customization options and which products accept custom requests; explicitly confirm whether embroidery is available. Supply any option price and lead-time rules.
6. Confirm the parent-card display rule when variant prices differ. Missing a price for the selected market means non-purchasable with no price substitution; confirm whether an enquiry/contact action is allowed in that case.
7. Confirm whether English-only listings may temporarily be published under the proposed bilingual publication standard. Supply owner-reviewed Swahili product names/descriptions and confirm the translation review owner.
8. Confirm that the documented processing durations remain final: 3 working days for ready-made processing, and 7 working days for custom production after production begins. No transit duration is specified.
9. Confirm whether discontinued products are hidden or retained in a public archive.
10. Confirm which verified specifications (dimensions, capacity, weight, care) are expected for each product.
11. Later platform gate: choose how the no-code admin edits, live stock, checkout validation, payment integrations, and order/quote workflows will be delivered. No platform is selected by this specification.

Related business-policy questions such as taxes, delivery transit, return eligibility, repair shipping, and deposit percentages remain governed by their own future decisions; this spec does not create new policy.

## 12. Sequential implementation roadmap (future work)

Every step below is proposed future work and requires its own authorization. This document is the only artifact in the current Stage 3A scope.

| Stage | Outcome and dependency | Likely files/systems | Acceptance evidence |
| --- | --- | --- | --- |
| 1. Approve catalogue inputs | Owner resolves taxonomy, prices, states, options, translations and supplies genuine product records/photos. | Intake workbook/source materials; no code required. | Every publishable record has required fields and owner verification; unresolved fields stay out of public presentation. |
| 2. Agree interim data contract | Confirm static JSON suitability vs waiting for commerce platform; define schema and validation rules. | Future `data/catalogue.json`, a schema/validation utility, and a short technical decision if needed. | Invalid states, duplicate IDs/slugs, unsupported currencies, missing locale fields, and orderable records missing price/stock are detected. |
| 3. Implement catalogue browsing | Render real cards and category collections in current static architecture; preserve bilingual and market behavior. | Likely `index.html`, `JS/script.js` or a focused catalogue module, CSS, data file, supplied assets. | Empty state remains truthful; records render by category and selected market; no unsupported facts appear. |
| 4. Implement product details and option states | Present verified product facts and route ready-made vs enquiry-only states correctly. | Product-detail template/route, catalogue rendering, styles, accessibility labels. | Acceptance cases cover in-stock, out-of-stock, made-to-order, coming-soon, variants, missing market price, keyboard access, English/Swahili. |
| 5. Select commerce/admin platform | Choose platform/integration path that supports no-code price/stock changes, order workflows, market pricing, and the approved regional payment/shipping plan. | Platform decision and migration/integration plan. | Owner verifies operational fit, total cost, integration availability, data export, and admin permissions before commitment. |
| 6. Build trusted checkout and operations | Implement ready-made purchase validation and separate custom quote/deposit flow, then inventory/order/shipping/return admin in approved platform. | Selected platform/backend and integrations; not predetermined here. | Payments are verified by trusted integration; stale stock/price is handled; timelines and freight shown before payment; admin workflows match approved policies. |

**Critical path:** owner-approved product data → agreed source/data contract → catalogue browse/detail → platform decision → checkout/admin integration. Regional payment methods, manual freight operations, and policy gaps can block production commerce even after catalogue pages are complete.

## 13. Acceptance criteria for this specification

This Stage 3A specification is ready for owner review when:

- Current project state and limitations are accurately recorded.
- Confirmed categories, materials, markets, currencies, and availability rules match the supplied requirements.
- Ready-made availability, made-to-order enquiry, custom commission, and coming-soon behavior are distinct and testable.
- Market pricing avoids invented conversions and unsupported prices; missing-market-price behavior is explicitly non-purchasable.
- Product- vs variant-level price and stock ownership is unambiguous, including parent-card price presentation.
- Proposed shared stock allocation across markets is clearly subject to owner approval.
- Bilingual publication is identified as the proposed/required standard, with English-only publication awaiting owner approval.
- The product data contract covers bilingual descriptions, verified attributes, price, variants, stock, images, and lifecycle state.
- Later checkout and admin needs have stable catalogue-reference boundaries without implying they exist now.
- Intake is possible without fictional sample products.
- Roadmap steps have prerequisites and observable acceptance evidence.
- Owner decisions, assumptions, and risks are visible before implementation.
- Only this specification document is created for Stage 3A.

## 14. Risks and safeguards

| Risk | Safeguard |
| --- | --- |
| Missing or inconsistent product facts create misleading listings. | Require owner verification and block publication for missing essential information. |
| Currency conversion or stale prices mislead shoppers. | Use explicit owner-approved market prices; do not silently convert; checkout revalidates price. |
| Static stock data becomes stale or oversells. | Treat static inventory as display-only; it has no transactional guarantees or authoritative reservation. Production order acceptance requires trusted server/platform validation. |
| Status terms become confused across ready-made/custom paths. | Use separate fulfilment mode, publication status, stock and enquiry capability; test every state. |
| Custom options imply services the maker does not offer. | Publish only confirmed per-product options; route bespoke requests to a quote. |
| External reference patterns are copied too literally. | Use Aether’s own verified records, copy, brand assets, and taxonomy. |
| Interim JSON is mistaken for the requested no-code admin. | Label it temporary and require a later platform decision for admin-managed prices and stock. |
| Bilingual catalogue is incomplete or inconsistent. | Require reviewed English and Swahili values before bilingual publication. |

## 15. Scope boundary

This specification does not create catalogue data, product images, prices, a product listing, product detail pages, cart, checkout, payment processing, stock management, admin dashboard, database/backend, new dependencies, platform migration, or policy terms. It does not change the current homepage or other documentation. Any implementation requires a separate approved stage.
