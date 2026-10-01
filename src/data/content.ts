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
  placeholderNote:
    "Placeholder details — replace this copy, hours, address, and social links when you are ready.",
}

export const whatWeDo = {
  mission:
    "Sandalwood Farm & Sanctuary cares for rescued animals, tends the land we share, and invites neighbors to learn through visits, volunteer days, and advocacy for kinder farming.",
  pillars: [
    {
      title: "Rescue",
      icon: "heart" as const,
      blurb:
        "Rescued farm animals live out their days here — room to wander, a steady routine, and people who know them by name.",
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
        "We speak up for kinder farming and keep the farm open — a place neighbors can gather, learn, and belong.",
    },
  ],
}

export const animals = [
  {
    id: "alpaca-1",
    name: "Alpaca 1",
    species: "Alpaca",
    image: asset("Alpca1.jpg"),
    story: "Placeholder — swap in this alpaca’s name and story when ready.",
  },
  {
    id: "alpaca-2",
    name: "Alpaca 2",
    species: "Alpaca",
    image: asset("Alpca1.jpg"),
    story: "Placeholder — swap in this alpaca’s name and story when ready.",
  },
  {
    id: "alpaca-3",
    name: "Alpaca 3",
    species: "Alpaca",
    image: asset("Alpca1.jpg"),
    story: "Placeholder — swap in this alpaca’s name and story when ready.",
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
    image: asset("EarlyPicture.jpg"),
    story: "Placeholder — swap in this goat’s photo, name, and story when ready.",
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
    image: asset("greenCabage.png"),
    blurb:
      "Peak-season color from the beds: greens, blooms, and whatever the garden decided to ripen that week.",
  },
]

export const updates = [
  {
    id: "harvest-carry",
    date: "Recent",
    title: "Harvest day haul",
    image: asset("CarryingBounty.png"),
    blurb:
      "Arms full of greens from the rows — neighbors carrying crates together after a morning in the beds.",
  },
  {
    id: "meet-the-animals",
    date: "Recent",
    title: "Meet the animals morning",
    image: asset("TeachingGroupKids.png"),
    blurb:
      "Kids and families gather on the mulch to meet our residents up close — soft voices, curious hands, and a calm black rabbit at the center.",
  },
  {
    id: "compost-day",
    date: "Recent",
    title: "Compost work day",
    image: asset("CompostDay.png"),
    blurb:
      "Bins rinsed, piles turned, and wood chips moved — the unglamorous work that keeps next season’s soil rich.",
  },
]

export const events = [
  {
    id: "harvest-potluck",
    name: "Harvest potluck",
    when: "Saturday, October 12 · 12:00–3:00 PM",
    where: "Orchard lawn",
    blurb:
      "A casual afternoon at the farm. Bring a dish if you can; tours of the barns start on the hour.",
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
      "Curriculum-friendly walks covering animal care and soil. Reach out via Get in touch to reserve a date.",
  },
]

export const contact = {
  title: "Get in touch",
  kicker: "Say hello",
  emailNote: "For general inquiries and item donations please email",
  emailPlaceholder: "sandalwoodfarmandsanctuary@gmail.com",
  groups: [
    {
      title: "Book with us",
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
      title: "Follow us on socials",
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
  lede: "Every gift helps feed residents, tend the gardens, and keep the farm open to neighbors. Links below are placeholders — swap in your real URLs when ready.",
  background: asset("GroupComposting.jpg"),
  volunteer: {
    title: "Volunteer",
    blurb:
      "Come for a morning or stay for the season — weeding beds, turning compost, mucking stalls, enriching animal spaces, and learning the rhythm of a working sanctuary. All ages and skill levels are welcome; we pair you with a task that fits and show you the ropes. Bring closed-toe shoes, water, and a willingness to get a little muddy. Sign up with either option below and we will be in touch with the next open day.",
    signups: [
      {
        id: "google-form",
        label: "Sign up via Google Form",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfM7YSL2Upzr8AecRgXA50XBTxVU4ske50CoqIMa-977X7ynA/viewform",
      },
      {
        id: "volunteer-signup-org",
        label: "Sign up on VolunteerSignup.org",
        href: "https://volunteersignup.org/P3TH3?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      },
    ],
  },
  images: [
    {
      src: asset("groupPicture1.png"),
      alt: "Four volunteers smiling together on the farm",
    },
    {
      src: asset("GroupPicture2.png"),
      alt: "A group of volunteers gathered outdoors at the sanctuary",
    },
    {
      src: asset("GroupPicture3.png"),
      alt: "Volunteers and neighbors together at Sandalwood Farm",
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
      id: "quick-donate",
      title: "Quick money donation",
      blurb: "Make a one-time or recurring gift. This button is a placeholder for your payment link.",
      href: "#",
      cta: "Donate now",
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

export const contactInfo = {
  email: "hello@placeholder.email",
  phone: "(555) 014-1842",
}

export const newsletter = {
  lede: "Get seasonal notes from the barns, gardens, and residents — drop your email below.",
}

export const heroImages = [
  asset("Soil.jpg"),
  asset("Produce.jpg"),
  asset("CircleGroupMeeting.jpg"),
  asset("Seeds.jpg"),
]
export const scenicImage = asset("SenicPictures2.jpg")
export const bountyBackground = asset("plantsdirtlot.png")
export const contactBackground = asset("Rooted in ReciprocityRock.png")
