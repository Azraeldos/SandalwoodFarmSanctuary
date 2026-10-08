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
        "We speak up for kinder ethical farming and keep the farm open. A place neighbors can gather, learn, and belong.",
    },
  ],
}

export const animals = [
  {
    id: "alpaca-2",
    name: "Marigold",
    species: "Alpaca",
    image: asset("alpca2.jpg"),
    story:
      "The gentle matriarch of our alpaca family. Marigold arrived with her daughters and now leads them through quiet days of grazing, grooming, and keeping watch over the pasture.",
  },
  {
    id: "alpaca-3",
    name: "Clover",
    species: "Alpaca",
    image: asset("alpca3.jpg"),
    story:
      "Curious and soft-spoken, Clover loves to linger near visitors and stay close to her mother and sister. She is settling into sanctuary life with a calm, friendly heart.",
  },
  {
    id: "alpaca-4",
    name: "Willow",
    species: "Alpaca",
    image: asset("alpca4.jpg"),
    story:
      "Playful and a little bold, Willow is often the first to investigate a new sound or snack. She shares a forever home here with Marigold and Clover.",
  },
  {
    id: "tortoise",
    name: "Glendora",
    species: "Tortoise",
    image: asset("TortiseBelowDeck.jpg"),
    story:
      "Glendora came to us from an owner who could no longer care for her. She now spends her days exploring shady spots under the deck and soaking up the garden at her own unhurried pace.",
  },
  {
    id: "goat",
    name: "Scout",
    species: "Goat",
    image: asset("goat1.jpg"),
    story:
      "Scout was rescued from a slaughterhouse and found a second chance here. Curious, bold, and full of personality, he is always ready for a closer look and a kind word.",
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
    name: "Fruits",
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

export const stayWithUs = {
  kicker: "Come rest",
  title: "Stay with us",
  lede: "Overnight on the land among shared tables, fire circles, hot tub, sauna, and quiet corners for gathering. Wake up beside the gardens and animals, and take on the day.",
  featured: {
    id: "pool",
    label: "Pool",
    image: asset("pool.jpg"),
    imageAlt:
      "Swimming pool framed by garden plants, with lounge chairs and a house beyond",
    objectPosition: "center 42%",
  },
  spaces: [
    {
      id: "communal-tables",
      label: "Communal tables",
      image: asset("benches.jpg"),
      imageAlt:
        "Long outdoor dining tables with benches, chairs, and patio umbrellas on wood chips",
    },
    {
      id: "carved-fireside",
      label: "Fireside seating",
      image: asset("chairs.jpg.jpg"),
      imageAlt:
        "Carved wooden chairs and a bench around a round fire pit under a shade tree",
    },
    {
      id: "pergola-table",
      label: "Shaded dining",
      image: asset("OutsideTable.jpg"),
      imageAlt:
        "Weathered wood table under a metal pergola with string lights beside the pool",
    },
    {
      id: "chiminea",
      label: "Garden fireplace",
      image: asset("fireplace.jpg"),
      imageAlt:
        "Terracotta chiminea with a carved sun face on a sunny patio among plants",
    },
    {
      id: "fire-circle",
      label: "Fire circle",
      image: asset("fireCircle.jpg"),
      imageAlt:
        "Circular fire pit surrounded by natural wood stump seats in the garden",
    },
    {
      id: "hot-tub",
      label: "Hot tub & sauna",
      image: asset("hotTub.jpg"),
      imageAlt:
        "Octagonal hot tub and wooden barrel sauna on a patio with a red umbrella",
    },
  ],
  bookings: [
    {
      id: "hipcamp",
      label: "Book on Hipcamp",
      href: "https://www.hipcamp.com/en-US/land/california-sandalwood-farm-and-sanctuary-xryh5768?adults=1&children=0",
    },
    {
      id: "peerspace",
      label: "Book on Peerspace",
      href: "https://www.peerspace.com/ca/pages/listings/69dfdae640b6b658e1f0a60d",
    },
    {
      id: "healing-gardens",
      label: "Book on Healing Gardens",
      href: "https://www.healinggardens.co/gardens/sandalwood-farm-and-sanctuary",
    },
  ],
}

export const farmHappenings = {
  kicker: "On the farm",
  title: "Farm Happenings",
  lede: "Upcoming mornings on the land — lend a hand, learn from the soil, or stretch with the sunrise. Sign up where noted, then drop your email below for seasonal updates.",
}

export const updates = [
  {
    id: "alpaca-shelter",
    date: "8:00 AM",
    title: "Build Our Alpaca Shelter",
    image: asset("Alpca1.jpg"),
    blurb:
      "Come help us build a shelter for Marigold, Clover, and Willow. We will share the plan on site and work together through the morning. Please bring closed-toe shoes, water, sun protection, and work gloves if you have them. Sign up through Volunteer Signup for details and the next build day.",
    cta: {
      label: "Sign up to volunteer",
      href: "https://volunteersignup.org/RAPWM",
    },
  },
  {
    id: "cultivating-restoration",
    date: "8:00 AM",
    title: "Cultivating Restoration Workshop",
    image: asset("CompostDay.png"),
    blurb:
      "Join our Cultivating Restoration workshop and learn the fundamentals of composting, soil management, and tending living ground. A practiced professional will guide the morning with hands-on tips you can take home to your own garden beds.",
  },
  {
    id: "morning-yoga",
    date: "8:00 AM",
    title: "Morning Yoga",
    image: asset("CircleGroupMeeting.jpg"),
    blurb:
      "Rise and shine with mother earth. Join us for a gentle morning yoga seminar led by a licensed professional breath, stretch, and settle into the quiet of the farm before the day unfolds.",
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
          href: "https://volunteersignup.org/RAPWM",
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
        href: "https://volunteersignup.org/RAPWM",
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
