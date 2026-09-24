/** Public folder asset, respecting Vite `base` for GitHub Pages. */
export function asset(file: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${file.replace(/^\//, "")}`
}

export const site = {
  name: "Sandalwood Farm & Sanctuary",
  tagline: "A working farm and a forever home.",
  quote: "Where rescued animals rest, gardens grow, and neighbors belong.",
  description:
    "Sandalwood Farm & Sanctuary is a small working farm and refuge where rescued animals, kitchen gardens, and community gatherings share the same hillside.",
  placeholderNote:
    "Placeholder details — replace this copy, hours, address, and social links when you are ready.",
}

export const whatWeDo = {
  mission:
    "Sandalwood Farm & Sanctuary cares for rescued farm animals, tends the hillside we share, and invites neighbors to learn through visits, volunteer days, and advocacy for kinder farming.",
  pillars: [
    { title: "Rescue", icon: "heart" as const },
    { title: "Educate", icon: "book" as const },
    { title: "Advocate", icon: "megaphone" as const },
  ],
}

export const animals = [
  {
    id: "shelly",
    name: "Shelly",
    species: "Tortoise",
    image: asset("TortiseGarden.jpg"),
    story:
      "Shelly patrols the mulch paths and garden beds at her own pace. Guests often find her near the fennel and poppies on warm afternoons.",
  },
  {
    id: "deck-tortoise",
    name: "Sunny",
    species: "Tortoise",
    image: asset("TortiseBelowDeck.jpg"),
    story:
      "Sunny prefers the cool shade under the deck. On hot days you will find her resting in the mulch while the garden hums outside.",
  },
  {
    id: "alpaca",
    name: "Clover",
    species: "Alpaca",
    image: asset("Alpca1.jpg"),
    story:
      "Clover is curious, soft-spoken, and first to the fence when visitors arrive with a friendly hello.",
  },
]

export const crops = [
  {
    id: "raised-beds",
    name: "Raised beds",
    season: "Spring–fall",
    image: asset("Crops.jpg"),
    blurb:
      "Wooden beds overflowing with greens, herbs, and flowers that feed the kitchen and the compost pile.",
  },
  {
    id: "garden-rows",
    name: "Garden rows",
    season: "Growing season",
    image: asset("Crops2.jpg"),
    blurb:
      "Rows of produce tended by volunteers — the heart of what we grow for share tables and residents.",
  },
  {
    id: "harvest-bounty",
    name: "Harvest bounty",
    season: "Late summer",
    image: asset("Crops3.jpg"),
    blurb:
      "Peak-season color from the beds: greens, blooms, and whatever the hillside decided to ripen that week.",
  },
  {
    id: "produce",
    name: "Fresh produce",
    season: "Harvest days",
    image: asset("Produce.jpg"),
    blurb:
      "Baskets of produce headed for neighbors, farm meals, and enrichment treats for the animals.",
  },
  {
    id: "late-beds",
    name: "Late-season beds",
    season: "Fall",
    image: asset("Crops4.jpg"),
    blurb:
      "Cooler-weather plantings and lingering summer crops sharing the same beds into autumn.",
  },
]

export const updates = [
  {
    id: "circle-friends",
    date: "Recent",
    title: "Circle of friends",
    image: asset("CircleGroupMeeting.jpg"),
    blurb:
      "Weekly circles on the lawn keep the sanctuary connected — stories, plans, and plenty of muddy boots.",
  },
  {
    id: "evening-gatherings",
    date: "Recent",
    title: "Evening gatherings",
    image: asset("YogaByPool.jpg"),
    blurb:
      "Neighbors stretch and breathe beside the pool while string lights warm the dusk — a quiet hour shared with the hillside.",
  },
  {
    id: "composting",
    date: "Recent",
    title: "Group composting day",
    image: asset("GroupComposting.jpg"),
    blurb:
      "Neighbors turned piles together and talked through the next season’s soil plan.",
  },
]

export const events = [
  {
    id: "harvest-potluck",
    name: "Harvest potluck",
    when: "Saturday, October 12 · 12:00–3:00 PM",
    where: "Orchard lawn",
    blurb:
      "A casual afternoon on the hillside. Bring a dish if you can; tours of the barns start on the hour.",
  },
  {
    id: "yoga-dusk",
    name: "Dusk yoga by the pool",
    when: "Select evenings · sunset",
    where: "Pool lawn",
    blurb:
      "Gentle movement under the string lights. Bring a mat; all levels welcome.",
  },
  {
    id: "volunteer-mornings",
    name: "Volunteer mornings",
    when: "Saturdays · 9:00 AM",
    where: "Meet at the barn gate",
    blurb:
      "Mucking, weeding, fence checks, and animal enrichment. No experience needed — we will put you to work gently.",
  },
  {
    id: "school-visits",
    name: "School & group visits",
    when: "Weekdays, by appointment",
    where: "Whole farm loop",
    blurb:
      "Curriculum-friendly walks covering animal care and soil. Use the contact form to reserve a date.",
  },
]

export const contactTopics = [
  { value: "general", label: "General" },
  { value: "donations", label: "Donations" },
  { value: "host-event", label: "Host event" },
  { value: "reserve-space", label: "Reserve space" },
] as const

export const donate = {
  lede: "Every gift helps feed residents, tend the gardens, and keep the hillside open to neighbors. Links below are placeholders — swap in your real URLs when ready.",
  images: [
    {
      src: asset("DonationBasket.jpg"),
      alt: "Donation basket with garden supplies on the grass",
    },
    {
      src: asset("Seeds.jpg"),
      alt: "Seed packets and garden starts ready for planting",
    },
    {
      src: asset("Chicken2.jpg"),
      alt: "A chicken on the sanctuary grounds",
    },
  ],
  ways: [
    {
      id: "amazon-wishlist",
      title: "Amazon wishlist",
      blurb: "Shop our placeholder wishlist for everyday supplies the sanctuary needs most.",
      href: "#",
      cta: "View wishlist",
    },
    {
      id: "in-kind",
      title: "Equipment, tools & feed",
      blurb:
        "Donate equipment, tools, feed, bedding, and other in-kind goods. Contact us to arrange a drop-off.",
      href: "#contact",
      cta: "Offer a donation",
    },
    {
      id: "volunteer",
      title: "Volunteer",
      blurb: "Give your time on volunteer mornings — weeding, mucking, enrichment, and more.",
      href: "#events",
      cta: "See volunteer days",
    },
    {
      id: "quick-donate",
      title: "Quick money donation",
      blurb: "Make a one-time or recurring gift. This button is a placeholder for your payment link.",
      href: "#",
      cta: "Donate now",
    },
    {
      id: "rewards",
      title: "Rewards",
      blurb:
        "Placeholder for donor rewards, membership perks, or thank-you gifts. Details coming soon.",
      href: "#",
      cta: "Learn about rewards",
    },
  ],
}

export const visit = {
  hours: [
    { days: "Saturday – Sunday", time: "10:00 AM – 4:00 PM" },
    { days: "Monday – Friday", time: "By appointment" },
    { days: "Major holidays", time: "Closed" },
  ],
  addressLines: [
    "1842 Sandalwood Ridge Road",
    "Placeholder County, OR 97000",
  ],
  notes:
    "This address is a placeholder. Replace it with your real location, parking notes, and accessibility details.",
}

export const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X", href: "#" },
  { name: "YouTube", href: "#" },
]

export const contactInfo = {
  email: "hello@sandalwoodfarmsanctuary.org",
  phone: "(555) 014-1842",
}

export const newsletter = {
  lede: "Get seasonal notes from the barns, gardens, and residents — drop your email below.",
}

export const heroImage = asset("ScenicPictures1.jpg")
export const scenicImage = asset("SenicPictures2.jpg")
