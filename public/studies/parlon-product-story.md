# The Parlon Story

Parlon is a B2B2C eCommerce platform built for the beauty and wellness industry. It connects two sides of the same market on a single system:

- **Consumers** can discover, book, and pay for beauty and wellness services online — no phone calls, no guesswork, no waiting.
- **Merchants** — salons, spas, clinics, and wellness providers — get a cloud-based system to manage bookings, payments, day-to-day operations, and their full service catalog, whether they run a single branch or dozens.

Under the hood, Parlon was built to handle the messy realities of the industry at scale: multi-branch operations, complex scheduling and service workflows, and secure transactions running through it all.

Parlon is our company's flagship product, and its two Product Owners are our founders — this platform has always carried outsized weight and attention as the thing the whole company is ultimately building toward.

---

## Origins: 2019

Parlon was conceptualized in 2019, and from the start it was never a "one team's project." It grew out of an org-wide collaboration — developers, designers, operations, and leadership all feeding into what the product should be, trading ideas back and forth on how consumers should book a service and how merchants should be able to run their business on top of it.

A **soft-launch** followed in late 2019, built on Angular, meant to get the core experience in front of real users and start learning.

Then 2020 happened. The pandemic hit right as the team was gearing up for a major public launch, and it pushed those plans back significantly. The industry Parlon was built for — beauty and wellness, fundamentally in-person and hands-on — was among the hardest hit. Instead of launching into headwinds, the team used the delay to regroup, rethink, and rebuild toward a stronger relaunch.

The soft-launch had only covered half the equation: it let consumers see a salon's menu of services, but gave salon owners no way to manage any of it themselves — merchants just had to ask the team directly for updates. During this year-long hiatus, as businesses shut their doors, we used the time to ideate and iterate on what became the **Merchant Partner Hub**, and to connect it to the main website — building toward a system where current and future partners could onboard their own salon businesses onto Parlon directly. With that connection in place, customers could now book their services online straight through the Parlon website, while merchants managed those bookings and payments on their end through the Partner Hub.

---

## The 2021 Relaunch

Parlon relaunched in 2021, and this became the real starting point for the platform as more people know it today.

**On the main website**, I was tasked with going through the original 2019 Angular build and cleaning up the inconsistencies that had accumulated — in UI, in behavior, in the overall experience — to get it ready to represent the brand properly for relaunch.

**On the merchant side**, part of the relaunch effort was building out the **Merchant Partner Hub**, the cloud-based system merchants would use to manage their bookings, payments, and service catalogs. My role there was to take the Figma designs the design team had produced and convert them into a static, functioning prototype. Working that closely with the designs, I ended up doing more than just building to spec — I suggested a handful of ideas and alternative UX flows for parts of the merchant experience, based on what felt fastest or clearest once it was actually clickable rather than a flat mockup.

---

## The Rewrite: Migrating to Next.js

Over the three years following the 2021 relaunch, the main website kept growing — new features, new sections, new capabilities layered on one after another. That growth came at a cost: the Angular site got progressively slower, and the accumulated weight of everything bolted onto the original 2019 foundation started to really show. As developers, it got harder and harder to add anything new without breaking something else. And visually, the site had become inconsistent across the board — the design language kept evolving over those three years as the mobile app counterpart was built out, but the original Angular build had no base styles system to update in step with it. Without that foundation, the design drifted further from cohesive with every change.

Together with a co-workmate, we initiated and co-led the effort to rewrite the Parlon main website from the ground up, migrating it off Angular and onto **Next.js** — a more modern, robust framework better suited to where the product needed to go next.

This wasn't just a technical lift-and-shift. During the rewrite, I also redesigned a number of pages directly — skipping the usual Figma-first process and applying design improvements straight into the live build. The goal was to bring the website closer in line with the Parlon mobile app, so the experience felt consistent whether someone was booking on their phone or browsing on the web.

---

## Where This Leaves Things

Parlon today is the product of a founding vision from two owners, an org-wide effort to shape it, a pandemic that forced a stronger relaunch instead of a rushed one, and an ongoing willingness to rebuild the foundation when it stops serving the product — from Angular to Next.js, from static Figma handoffs to live, in-browser redesign.

It's a platform that's been rebuilt more than once, by design, in order to keep working for the people who book services on it and the merchants who run their businesses through it.
