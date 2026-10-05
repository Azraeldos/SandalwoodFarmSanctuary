/** Public folder asset, respecting Vite `base` for GitHub Pages. */
export function asset(file: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${file.replace(/^\//, "")}`
}

export const site = {
  name: "Sandalwood Farm & Sanctuary",
  tagline: "A working farm and a forever home.",
  quote: "Rooted in Reciprocity",
  description:
    "Sandalwood Farm & Sanctuary is a small working farm and refuge where rescued animals, kitchen gardens, and community gatherings share the same home.",
}

export const whatWeDo = {
  mission:
    "Sandalwood Farm & Sanctuary cares for rescued animals, tends the land we share, and invites neighbors to learn through visits, volunteer days, and advocacy for kinder farming.",
  pillars: [
    {
      title: "Rescue",
      icon: "heart" as const,
      blurb:
        "Rescued farm animals live out their days here room to wander, a steady routine, and people who know them by name.",
    },
    {
      title: "Educate",
      icon: "book" as const,
      blurb:
        "Visits, volunteer mornings, and time in the gardens so neighbors can see how a small farm cares for its residents and its soil.",
    },
    {
      title: "Advocate",
      icon: "megaphone" as const,
      blurb:
        "We speak up for kinder farming and keep the farm open. A place neighbors can gather, learn, and belong.",
    },
  ],
}

export const animals = [
  {
    id: "alpaca-2",
    name: "Alpaca",
    species: "Alpaca",
    image: asset("alpca2.jpg"),
    story:
      "The mother of our other alpacas — they were rescued together and now share a forever home here.",
  },
  {
    id: "alpaca-3",
    name: "Alpaca",
    species: "Alpaca",
    image: asset("alpca3.jpg"),
    story:
      "Rescued with her mother and sister — now settled into life at the sanctuary.",
  },
  {
    id: "alpaca-4",
    name: "Alpaca",
    species: "Alpaca",
    image: asset("alpca4.jpg"),
    story:
      "Rescued with her mother and sister — now settled into life at the sanctuary.",
  },
  {
    id: "tortoise",
    name: "Tortoise",
    species: "Tortoise",
    image: asset("TortiseGarden.jpg"),
    story: "Placeholder — swap in this tortoise’s name and story when ready.",
  },
  {
    id: "goat",
    name: "Goat",
    species: "Goat",
    image: asset("goat1.jpg"),
    story:
      "One of our goat residents — curious, bold, and always ready for a closer look.",
  },
]

export const bounty = {
  kicker: "From the beds",
  title: "Our bounty",
  lede: "Raised beds and garden rows grown beside the animals. What ripens goes to share tables, the compost, and the daily work of the farm greens, fruit, and herbs tended by the same hands that care for our residents.",
}

export const crops = [
  {
    id: "vegetables",
    name: "Vegetables",
    image: asset("Crops.jpg"),
    imageAlt: "Raised beds full of leafy greens and garden vegetables",
    blurb:
      "Greens, roots, and kitchen staples fill the wooden beds through the growing season. Volunteers weed, water, and harvest so share tables stay stocked and the compost pile never goes hungry.",
  },
  {
    id: "fruit",
    name: "Fruit",
    image: asset("pumpkins.jpg"),
    imageAlt: "Bright orange pumpkins lined up on log borders in the garden",
    blurb:
      "Seasonal fruit ripens in its own time picked warm from the plant and carried in by the armful. What we gather that week becomes snacks for visitors, gifts for neighbors, and color on the kitchen table.",
  },
  {
    id: "medicinal",
    name: "Medicinal",
    image: asset("CubanOregano.jpg"),
    imageAlt: "Lush Cuban oregano leaves growing in the herb garden",
    blurb:
      "Herbs and healing plants for our community. Lemon balm, teas, and quiet remedies grow to serve as a reminder that the garden feeds more than hunger alone.",
  },
]

export const farmHappenings = {
  kicker: "On the farm",
  title: "Farm Happenings",
  lede: "Recent work around the farm and a quick way to get seasonal notes in your inbox.",
}

export const updates = [
  {
    id: "harvest-carry",
    date: "Recent",
    title: "Harvest Day Haul",
    image: asset("CarryingBounty.png"),
    blurb:
      "Arms full of greens from the rows, neighbors carrying crates together after a morning in the beds.",
  },
  {
    id: "meet-the-animals",
    date: "Recent",
    title: "Meet The Animals Morning",
    image: asset("TeachingGroupKids.png"),
    blurb:
      "Kids and families gather on the mulch to meet our residents up close. Soft voices, curious hands, and a calm black rabbit at the center.",
  },
  {
    id: "compost-day",
    date: "Recent",
    title: "Compost Work Day",
    image: asset("CompostDay.png"),
    blurb:
      "Bins rinsed, piles turned, and wood chips moved. The unglamorous work that keeps next season’s soil rich.",
  },
]

export const contact = {
  title: "Get in touch",
  kicker: "Say hello",
  lede: "Whether you want to visit, volunteer, book the land, or simply say hello we would love to hear from you. Reach out by email or use the links below to find the right door in.",
  emailNote: "For general inquiries and item donations please email",
  emailPlaceholder: "sandalwoodfarmandsanctuary@gmail.com",
  groups: [
    {
      title: "Book With Us",
      links: [
        {
          label: "Peerspace",
          href: "https://www.peerspace.com/ca/pages/listings/69dfdae640b6b658e1f0a60d",
        },
        {
          label: "Healing Gardens",
          href: "https://www.healinggardens.co/gardens/sandalwood-farm-and-sanctuary",
        },
        {
          label: "Hipcamp",
          href: "https://www.hipcamp.com/en-US/land/california-sandalwood-farm-and-sanctuary-xryh5768?adults=1&children=0",
        },
      ],
    },
    {
      title: "Volunteer",
      links: [
        {
          label: "VolunteerSignup",
          href: "https://volunteersignup.org/P3TH3?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
        },
        {
          label: "Google Form",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSfM7YSL2Upzr8AecRgXA50XBTxVU4ske50CoqIMa-977X7ynA/viewform",
        },
      ],
    },
    {
      title: "Follow Our Socials",
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/sandalwoodfarm_ie/?hl=en",
        },
        {
          label: "Linktree",
          href: "https://linktr.ee/sandalwoodfarm_ie?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/profile.php?id=61564082693703",
        },
      ],
    },
  ],
} as const

export const donate = {
  lede: "Every gift helps feed residents, tend the gardens, and keep the farm open to neighbors.",
  background: asset("GroupComposting.jpg"),
  volunteer: {
    title: "Volunteer",
    blurb:
      "Come for a morning or stay for the season! Typical days involve weeding beds, turning compost, enriching animal spaces, and learning the rhythm of a working sanctuary. All ages and skill levels are welcome! We pair you with a task that fits and show you the ropes. Bring closed-toe shoes, water, and a willingness to get a little muddy. Sign up with either option below and we will be in touch with the next open day.",
    signups: [
      {
        id: "google-form",
        label: "Sign up with Google Form",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfM7YSL2Upzr8AecRgXA50XBTxVU4ske50CoqIMa-977X7ynA/viewform",
      },
      {
        id: "volunteer-signup-org",
        label: "Sign up with VolunteerSignup.org",
        href: "https://volunteersignup.org/P3TH3?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      },
    ],
  },
  images: [
    {
      src: asset("groupPicture1.png"),
      alt: "Four volunteers smiling together on the farm",
      objectPosition: "center 20%",
    },
    {
      src: asset("GroupPicture2.png"),
      alt: "A group of volunteers gathered outdoors at the sanctuary",
    },
    {
      src: asset("GroupPicture3.png"),
      alt: "Volunteers and neighbors together at Sandalwood Farm",
    },
    {
      src: asset("GroupPicture4.jpg"),
      alt: "Volunteers smiling together outdoors at the farm",
    },
  ],
  ways: [
    {
      id: "amazon-wishlist",
      title: "Amazon Wishlist",
      blurb: "Shop our wishlist for everyday supplies the sanctuary needs most.",
      href: "#",
      cta: "View wishlist",
    },
    {
      id: "in-kind",
      title: "Equipment, Tools & Feed",
      blurb:
        "Donate equipment, tools, feed, bedding, and other in-kind goods. Contact us to arrange a drop-off.",
      href: "#contact",
      cta: "Offer a donation",
    },
    {
      id: "quick-donate",
      title: "Monitary Donation",
      blurb: "Whether you make a one-time gift or choose to give monthly, your donation directly funds the preservation of our sanctuary.",
      href: "#",
      cta: "Donate now",
    },
  ],
}

export const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sandalwoodfarm_ie/?hl=en",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61564082693703",
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/sandalwoodfarm_ie?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  },
]

export const newsletter = {
  title: "Stay in the loop",
  lede: "Get seasonal notes from the barns, gardens, and residents drop your email below.",
}

export const heroImages = [
  asset("Soil.jpg"),
  asset("Produce.jpg"),
  asset("CircleGroupMeeting.jpg"),
  asset("Seeds.jpg"),
]
export const bountyBackground = asset("plantsdirtlot.png")
export const contactBackground = asset("Rooted in ReciprocityRock.png")
