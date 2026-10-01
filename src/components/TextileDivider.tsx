import { asset } from "../data/content"

export const textiles = {
  spirals: asset("africanPictures/african20129.jpg"),
  stripes: asset("africanPictures/tt25_2.jpg"),
  rug: asset("africanPictures/AfricanRugimages.jpg"),
  scarf: asset(
    "africanPictures/modern_tribal_african_giraffe_pattern_animal_print_scarf-r8926c2f24d3148fcacf67bd9da15b1d3_eqr7z_644.jpg",
  ),
  woven: asset("africanPictures/istockphoto-869822094-612x612.jpg"),
  kilim: asset("africanPictures/images.jpg"),
  hearts: asset(
    "africanPictures/black-history-month-banner-decorative-260nw-2573518031.jpg",
  ),
  lion: asset("africanPictures/75096-A.jpg"),
  outline: asset(
    "africanPictures/africa-continent-outline-heart-symbol-black-line-art-transparent-background-vector-illustration-africa-continent-outline-401909529.webp",
  ),
  abstract: asset(
    "africanPictures/abstract-tribal-elements-traditional-african-stylife-africa-ethnic-seamless-pattern-modern-art-print-mounir-khalfouf.jpg",
  ),
  masks: asset("africanPictures/360_F_957771251_aXP6WbnUhC6rXk3aK4xKMYplXT3vZXWK.jpg"),
  maskSeamless: asset(
    "africanPictures/seamless-pattern-tribal-african-masks-vector-illustration-73159983.webp",
  ),
  patchwork: asset(
    "africanPictures/colorful-patchwork-map-africa-with-vibrant-geometric-patterns_53876-2152090336.avif",
  ),
  maskPattern: asset(
    "africanPictures/african-ethnic-tribal-masks-seamless-pattern_1284-16716.avif",
  ),
  tribal: asset("africanPictures/1151b568-38ab-4f10-8cf5-e91344a72a8f.avif"),
} as const

export const squiggleDivider = asset("squiggle-divider.svg")

/** Stroke colors for the wavy section borders. */
export const squigglePalette = {
  mustard: "#e8c45a",
  brown: "#7a5a38",
  turquoise: "#1aa39a",
  rust: "#c45c2a",
  ochre: "#c4962a",
  teal: "#0e7c78",
  clay: "#8d5a32",
  saffron: "#f3d060",
} as const

export type SquiggleColor = keyof typeof squigglePalette

type PatternFillProps = {
  src: string
  /** How the image sits in the frame. Default shows the full picture (no zoom crop). */
  fit?: "cover" | "contain"
  /** Translucent color over the cloth so type stays readable. Pass "" to show the pattern untinted. */
  scrim?: string
  /** Clip the backdrop to a mustard squiggle along this edge. */
  squiggle?: "top" | "bottom" | "both"
}

export function PatternFill({
  src,
  fit = "cover",
  scrim = "bg-cream/78",
  squiggle,
}: PatternFillProps) {
  const maskClass =
    squiggle === "top"
      ? "squiggle-mask-top"
      : squiggle === "bottom"
        ? "squiggle-mask-bottom"
        : squiggle === "both"
          ? "squiggle-mask-both"
          : ""

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${maskClass}`}
      aria-hidden="true"
    >
      <img
        src={src}
        alt=""
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"} object-center`}
      />
      {scrim ? <div className={`absolute inset-0 ${scrim}`} /> : null}
    </div>
  )
}

type SquiggleEdgeProps = {
  /** Which edge of the section gets the wave. */
  edge?: "top" | "bottom"
  /** Stroke color. Each section can use a different one. */
  color?: SquiggleColor
  className?: string
}

/** Colored squiggle stroke that rides the wavy section border (keep outside the mask). */
export function SquiggleEdge({
  edge = "top",
  color = "mustard",
  className = "",
}: SquiggleEdgeProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-x-0 z-20 h-[1.75rem]",
        edge === "top" ? "top-0" : "bottom-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundColor: squigglePalette[color],
        WebkitMaskImage: `url("${squiggleDivider}")`,
        maskImage: `url("${squiggleDivider}")`,
        WebkitMaskRepeat: "repeat-x",
        maskRepeat: "repeat-x",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
        WebkitMaskSize: "4.5rem 100%",
        maskSize: "4.5rem 100%",
        WebkitMaskMode: "alpha",
        maskMode: "alpha",
        transform: edge === "bottom" ? "scaleY(-1)" : undefined,
      }}
    />
  )
}
