import type { SiteConfig } from "@/lib/types";

const g = (n: number, width: number, height: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width, height, alt, caption, href });

export const site: SiteConfig = {
  name: "Alluneed Delights",
  tagline: "Homemade Filipino dishes and desserts in Brampton, made with love for your weekend table.",
  category: "Filipino home cooking",
  schemaType: "FoodEstablishment",
  area: "Brampton, ON",
  siteUrl: "https://alluneed-delights.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#7b3fa0" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Now collecting weekend orders",
    headline: "Bringing the taste of home to your table",
    subhead: "Fresh lumpia, kaldereta, chicken afritada and Filipino desserts, homemade in Brampton. Send a message to place your weekend order.",
    images: [
      { src: "/images/post-4.jpg", alt: "Fresh lumpia tray" },
      { src: "/images/post-3.jpg", alt: "Chicken afritada" },
      { src: "/images/post-6.jpg", alt: "Silvanas" },
    ],
    secondaryCta: { label: "See the menu", href: "#menu" },
  },

  highlights: ["Homemade Filipino dishes", "Weekend orders", "Pickup or delivery", "Brampton"],

  about: {
    title: "Homemade with love, served with delight",
    body: [
      "Alluneed Delights is Maricris's Brampton home kitchen, bringing the taste of home to your table with homemade Filipino dishes and desserts.",
      "We are growing our menu one dish at a time, from silvanas to fresh lumpia, kaldereta and chicken afritada. Thank you to everyone who orders and supports our small business.",
    ],
    image: { src: "/images/post-2.jpg", alt: "A weekend of orders" },
  },

  menu: {
    label: "Menu",
    title: "On the menu",
    variant: "list",
    groups: [
      {
        title: "Dishes",
        items: [
          { name: "Fresh lumpia", description: "3 large pieces", price: "$12" },
          { name: "Fresh lumpia party tray", description: "18 pieces", price: "$70" },
          { name: "Kaldereta party tray", price: "$70", dietary: ["nonveg"] },
          { name: "Chicken afritada", description: "Chicken, potatoes, carrots and peas in a savoury tomato sauce. Single $15, small $55, medium $75, large $115", price: "From $15", dietary: ["nonveg"] },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Silvanas", description: "Crunchy, creamy and coated with buttery crumbs", price: "$15" },
        ],
      },
    ],
    footnote: "Our homemade food may contain common allergens. Please tell us about any allergies before ordering.",
  },

  gallery: {
    title: "From our kitchen",
    items: [
      g(4, 1080, 1080, "Fresh lumpia tray", "This weekend's orders", "https://www.instagram.com/p/Deo-M9Ilqhn/"),
      g(2, 1080, 1426, "Weekend orders", "Another successful weekend", "https://www.instagram.com/p/De9U-teFmZR/"),
      g(3, 1080, 1080, "Chicken afritada", "New: chicken afritada", "https://www.instagram.com/p/De63x2xqCQ1/"),
      g(5, 1080, 1080, "Fresh lumpia", "New: fresh lumpia", "https://www.instagram.com/p/Deo-Ci4Ft21/"),
      g(6, 1080, 1080, "Silvanas", "New: silvanas", "https://www.instagram.com/p/DemSKIlK8Gt/"),
      g(1, 1024, 1360, "Menu", "Our menu", "https://www.instagram.com/p/De9WNlEKnYY/"),
      g(7, 1024, 1360, "Dessert menu", "Sweet treats", "https://www.instagram.com/p/DemSByvq3mg/"),
      g(9, 1080, 1080, "How to order", "Pickup and delivery", "https://www.instagram.com/p/DeX68LtK6sa/"),
    ],
  },

  instagram: { handle: "alluneed.delights5", embeds: [] },

  order: {
    label: "How to order",
    title: "Place your weekend order",
    intro: "We collect orders for the weekend by message, with pickup or delivery in Brampton. Tap the DM button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Alluneed Delights! I would like to place a weekend order.\nDate:\nDishes and tray sizes:\nDesserts:\nPickup or delivery (area):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send us a message on Instagram with your dishes, sizes and date. We collect orders for the weekend." },
    { q: "Do you deliver?", a: "Pickup or delivery is available in Brampton. Ask us about your area when you order." },
    { q: "Can you handle allergies?", a: "Our food is made in a home kitchen and may contain common allergens, so please tell us about any allergies before ordering." },
  ],

  contact: {
    title: "Contact and orders",
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "Alluneed Delights | Filipino home cooking in Brampton",
    description: "Homemade Filipino dishes and desserts in Brampton: fresh lumpia, kaldereta, chicken afritada and silvanas. Weekend orders by message, pickup or delivery.",
    keywords: ["Filipino food Brampton", "lumpia Brampton", "Filipino party trays Brampton", "Filipino desserts Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
