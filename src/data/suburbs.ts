export interface Suburb {
  slug: string;
  name: string;
  region: string;
  description: string;
  popularServices: string[];
  seoTitle: string;
  seoDescription: string;
}

export const suburbs: Suburb[] = [
  {
    slug: "toorak",
    name: "Toorak",
    region: "Inner East",
    description:
      "Melbourne's most prestigious suburb, Toorak features grand Victorian and Edwardian mansions alongside contemporary luxury homes. Many properties require sensitive heritage renovations and high-end interior upgrades.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "kitchen-renovations",
      "bathroom-renovations",
    ],
    seoTitle: "Carpentry & Renovations Toorak | MEK Homes Melbourne",
    seoDescription:
      "Expert carpentry and renovation services in Toorak. Heritage home restorations, luxury kitchen and bathroom renovations, and custom carpentry by MEK Homes Melbourne.",
  },
  {
    slug: "south-yarra",
    name: "South Yarra",
    region: "Inner East",
    description:
      "South Yarra blends elegant Victorian terraces with modern apartment living. Period homes along tree-lined streets often call for sympathetic renovations that preserve original character while adding contemporary comforts.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "bathroom-renovations",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations South Yarra | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in South Yarra. Victorian terrace restorations, kitchen and bathroom upgrades, and door and window fitting by MEK Homes.",
  },
  {
    slug: "armadale",
    name: "Armadale",
    region: "Inner East",
    description:
      "Armadale is known for its stately Victorian and Edwardian homes set on generous blocks. Renovation work here typically involves restoring ornate period details, updating kitchens and bathrooms, and building outdoor entertaining areas.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "decking-pergolas",
      "custom-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Armadale | MEK Homes Melbourne",
    seoDescription:
      "Quality home renovations and carpentry in Armadale. Period home restorations, custom cabinetry, kitchen renovations, and decking by MEK Homes Melbourne.",
  },
  {
    slug: "malvern",
    name: "Malvern",
    region: "Inner East",
    description:
      "Malvern showcases a rich mix of Federation, Edwardian, and interwar homes with established gardens. Homeowners frequently seek kitchen and bathroom modernisations along with structural updates to open up traditional floor plans.",
    popularServices: [
      "home-renovations",
      "structural-carpentry",
      "kitchen-renovations",
      "bathroom-renovations",
    ],
    seoTitle: "Carpentry & Renovations Malvern | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Malvern. Structural carpentry, kitchen and bathroom renovations, and full home upgrades by MEK Homes Melbourne.",
  },
  {
    slug: "hawthorn",
    name: "Hawthorn",
    region: "Inner East",
    description:
      "Hawthorn is one of Melbourne's oldest suburbs, featuring grand Victorian mansions, Edwardian villas, and some striking Art Deco residences. Heritage overlays mean renovations require careful attention to period authenticity.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "doors-windows",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Hawthorn | MEK Homes Melbourne",
    seoDescription:
      "Specialist carpentry and renovations in Hawthorn. Heritage home restorations, custom joinery, structural carpentry, and door and window fitting by MEK Homes.",
  },
  {
    slug: "kew",
    name: "Kew",
    region: "Inner East",
    description:
      "Kew is defined by its leafy streets lined with Federation and Edwardian homes, many on large blocks with mature gardens. Extensions, deck builds, and period-sympathetic kitchen renovations are in high demand.",
    popularServices: [
      "home-renovations",
      "decking-pergolas",
      "kitchen-renovations",
      "custom-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Kew | MEK Homes Melbourne",
    seoDescription:
      "Premium renovation and carpentry services in Kew. Home extensions, decking, kitchen renovations, and custom carpentry for period homes by MEK Homes Melbourne.",
  },
  {
    slug: "camberwell",
    name: "Camberwell",
    region: "Inner East",
    description:
      "Camberwell features a diverse mix of Edwardian, Californian Bungalow, and Art Deco homes across its hilly terrain. Renovations often focus on modernising interiors while preserving the craftsmanship of original timber features.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "kitchen-renovations",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Camberwell | MEK Homes Melbourne",
    seoDescription:
      "Expert home renovations and carpentry in Camberwell. Period home updates, custom timber work, kitchen renovations, and window replacements by MEK Homes.",
  },
  {
    slug: "canterbury",
    name: "Canterbury",
    region: "Inner East",
    description:
      "Canterbury is one of Melbourne's most exclusive enclaves, with grand Edwardian and Federation homes on sweeping blocks. Renovation projects here are typically high-end, involving heritage-sensitive extensions and bespoke joinery.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "structural-carpentry",
      "kitchen-renovations",
    ],
    seoTitle: "Carpentry & Renovations Canterbury | MEK Homes Melbourne",
    seoDescription:
      "Luxury renovations and bespoke carpentry in Canterbury. Heritage extensions, custom joinery, structural work, and kitchen upgrades by MEK Homes Melbourne.",
  },
  {
    slug: "balwyn",
    name: "Balwyn",
    region: "Inner East",
    description:
      "Balwyn is home to a mix of interwar Californian Bungalows, 1950s brick homes, and newer contemporary builds. Many homeowners undertake full renovations to update post-war layouts with open-plan living and modern kitchens.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "bathroom-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Balwyn | MEK Homes Melbourne",
    seoDescription:
      "Complete renovation and carpentry services in Balwyn. Kitchen and bathroom renovations, structural updates, and full home transformations by MEK Homes Melbourne.",
  },
  {
    slug: "brighton",
    name: "Brighton",
    region: "Bayside",
    description:
      "Brighton's bayside location makes it one of Melbourne's most desirable suburbs, with a mix of grand Edwardian homes and modern architecturally designed residences. Outdoor living spaces, decking, and premium fencing are popular upgrades.",
    popularServices: [
      "home-renovations",
      "decking-pergolas",
      "fencing-gates",
      "kitchen-renovations",
    ],
    seoTitle: "Carpentry & Renovations Brighton | MEK Homes Melbourne",
    seoDescription:
      "Premium carpentry and renovations in Brighton. Decking, pergolas, timber fencing, kitchen renovations, and full home upgrades by MEK Homes Melbourne.",
  },
  {
    slug: "hampton",
    name: "Hampton",
    region: "Bayside",
    description:
      "Hampton offers a relaxed coastal village feel with charming Edwardian cottages, Californian Bungalows, and contemporary family homes. Decking, outdoor entertaining areas, and bathroom renovations are common projects here.",
    popularServices: [
      "decking-pergolas",
      "bathroom-renovations",
      "home-renovations",
      "fencing-gates",
    ],
    seoTitle: "Carpentry & Renovations Hampton | MEK Homes Melbourne",
    seoDescription:
      "Quality renovations and carpentry in Hampton. Timber decking, bathroom renovations, fencing, and full home upgrades for bayside living by MEK Homes Melbourne.",
  },
  {
    slug: "sandringham",
    name: "Sandringham",
    region: "Bayside",
    description:
      "Sandringham is a family-friendly bayside suburb with a mix of post-war homes, renovated period cottages, and new builds. Homeowners often invest in decking, pergolas, and kitchen renovations to make the most of the coastal lifestyle.",
    popularServices: [
      "decking-pergolas",
      "kitchen-renovations",
      "home-renovations",
      "fencing-gates",
    ],
    seoTitle: "Carpentry & Renovations Sandringham | MEK Homes Melbourne",
    seoDescription:
      "Expert renovations and carpentry in Sandringham. Decking, pergolas, kitchen upgrades, and timber fencing for bayside homes by MEK Homes Melbourne.",
  },
  {
    slug: "albert-park",
    name: "Albert Park",
    region: "Inner South",
    description:
      "Albert Park is characterised by its tightly held Victorian terraces and cottages along heritage streetscapes. Renovations typically involve rear extensions, heritage-compliant updates, and modernising compact period kitchens and bathrooms.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "bathroom-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Albert Park | MEK Homes Melbourne",
    seoDescription:
      "Specialist renovations and carpentry in Albert Park. Victorian terrace extensions, kitchen and bathroom upgrades, and structural work by MEK Homes Melbourne.",
  },
  {
    slug: "middle-park",
    name: "Middle Park",
    region: "Inner South",
    description:
      "Middle Park features beautifully preserved Victorian and Edwardian homes on quiet, leafy streets near the beach. Heritage overlay requirements make sympathetic renovations with quality carpentry essential in this suburb.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "doors-windows",
      "bathroom-renovations",
    ],
    seoTitle: "Carpentry & Renovations Middle Park | MEK Homes Melbourne",
    seoDescription:
      "Heritage-sensitive renovations and carpentry in Middle Park. Custom joinery, door and window fitting, bathroom upgrades, and home restorations by MEK Homes.",
  },
  {
    slug: "south-melbourne",
    name: "South Melbourne",
    region: "Inner South",
    description:
      "South Melbourne combines Victorian workers' cottages and terraces with converted warehouse apartments and modern townhouses. Renovation work ranges from heritage cottage restorations to contemporary fitouts for converted spaces.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "custom-carpentry",
      "lockup-and-fix",
    ],
    seoTitle: "Carpentry & Renovations South Melbourne | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in South Melbourne. Heritage cottage restorations, kitchen upgrades, custom cabinetry, and lockup and fix by MEK Homes.",
  },
  {
    slug: "elwood",
    name: "Elwood",
    region: "Inner South",
    description:
      "Elwood is a vibrant bayside suburb known for its Art Deco apartment blocks, Edwardian homes, and Californian Bungalows. Homeowners frequently renovate kitchens and bathrooms and add outdoor decking to enjoy the coastal setting.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "decking-pergolas",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Elwood | MEK Homes Melbourne",
    seoDescription:
      "Quality renovations and carpentry in Elwood. Kitchen and bathroom upgrades, timber decking, and full home renovations for bayside living by MEK Homes Melbourne.",
  },
  {
    slug: "st-kilda",
    name: "St Kilda",
    region: "Inner South",
    description:
      "St Kilda's eclectic streetscapes feature grand Victorian mansions, Edwardian terraces, and iconic Art Deco flats. Renovation work often involves restoring period features, updating aging kitchens, and replacing original doors and windows.",
    popularServices: [
      "home-renovations",
      "doors-windows",
      "kitchen-renovations",
      "custom-carpentry",
    ],
    seoTitle: "Carpentry & Renovations St Kilda | MEK Homes Melbourne",
    seoDescription:
      "Expert renovations and carpentry in St Kilda. Period home restorations, door and window fitting, kitchen upgrades, and custom joinery by MEK Homes Melbourne.",
  },
  {
    slug: "prahran",
    name: "Prahran",
    region: "Inner East",
    description:
      "Prahran offers a mix of Victorian terraces, Edwardian cottages, and modern infill developments in a bustling inner-city location. Compact homes benefit from clever custom carpentry, kitchen redesigns, and structural modifications.",
    popularServices: [
      "kitchen-renovations",
      "custom-carpentry",
      "structural-carpentry",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Prahran | MEK Homes Melbourne",
    seoDescription:
      "Skilled renovations and carpentry in Prahran. Kitchen redesigns, custom storage solutions, structural modifications, and full home upgrades by MEK Homes Melbourne.",
  },
  {
    slug: "windsor",
    name: "Windsor",
    region: "Inner East",
    description:
      "Windsor is a characterful inner-city suburb with rows of Victorian and Edwardian terraces and weatherboard cottages. Many homes need bathroom and kitchen modernisations along with careful restoration of original timber joinery.",
    popularServices: [
      "bathroom-renovations",
      "kitchen-renovations",
      "custom-carpentry",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Windsor | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in Windsor. Bathroom and kitchen upgrades, custom timber joinery, and door and window repairs by MEK Homes Melbourne.",
  },
  {
    slug: "richmond",
    name: "Richmond",
    region: "Inner East",
    description:
      "Richmond's housing ranges from rows of narrow Victorian terraces and workers' cottages to converted warehouses and modern townhouses. Rear extensions, open-plan conversions, and kitchen renovations are the most common projects.",
    popularServices: [
      "home-renovations",
      "structural-carpentry",
      "kitchen-renovations",
      "lockup-and-fix",
    ],
    seoTitle: "Carpentry & Renovations Richmond | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovations and carpentry in Richmond. Terrace extensions, structural carpentry, kitchen renovations, and lockup and fix services by MEK Homes Melbourne.",
  },
  {
    slug: "fitzroy",
    name: "Fitzroy",
    region: "Inner North",
    description:
      "Fitzroy is Melbourne's oldest suburb, renowned for its heritage Victorian terraces, ornate iron lacework, and vibrant laneway culture. Renovations demand a high level of craftsmanship to preserve heritage fabric while delivering modern livability.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "doors-windows",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Fitzroy | MEK Homes Melbourne",
    seoDescription:
      "Heritage renovation specialists in Fitzroy. Victorian terrace restorations, custom carpentry, door and window work, and structural upgrades by MEK Homes.",
  },
  {
    slug: "carlton",
    name: "Carlton",
    region: "Inner North",
    description:
      "Carlton is famous for its intact rows of Victorian terraces and heritage streetscapes. Renovation projects here typically involve sensitive rear additions, bathroom and kitchen updates, and restoring original timber floors and joinery.",
    popularServices: [
      "home-renovations",
      "bathroom-renovations",
      "kitchen-renovations",
      "custom-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Carlton | MEK Homes Melbourne",
    seoDescription:
      "Expert renovations and carpentry in Carlton. Heritage terrace restorations, bathroom and kitchen upgrades, and custom timber joinery by MEK Homes Melbourne.",
  },
  {
    slug: "northcote",
    name: "Northcote",
    region: "Inner North",
    description:
      "Northcote features a sought-after mix of Edwardian weatherboards, Victorian cottages, and Californian Bungalows on leafy streets. Popular renovation projects include rear extensions, decking, and modernising original kitchens and bathrooms.",
    popularServices: [
      "home-renovations",
      "decking-pergolas",
      "kitchen-renovations",
      "bathroom-renovations",
    ],
    seoTitle: "Carpentry & Renovations Northcote | MEK Homes Melbourne",
    seoDescription:
      "Quality renovations and carpentry in Northcote. Home extensions, timber decking, kitchen and bathroom upgrades for period homes by MEK Homes Melbourne.",
  },
  {
    slug: "thornbury",
    name: "Thornbury",
    region: "Inner North",
    description:
      "Thornbury offers excellent value with its Edwardian weatherboards, interwar bungalows, and Art Deco gems. Many homeowners are investing in full renovations, opening up floor plans, and adding modern outdoor living spaces.",
    popularServices: [
      "home-renovations",
      "structural-carpentry",
      "decking-pergolas",
      "kitchen-renovations",
    ],
    seoTitle: "Carpentry & Renovations Thornbury | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in Thornbury. Full home renovations, structural upgrades, decking, and kitchen makeovers by MEK Homes Melbourne.",
  },
  {
    slug: "williamstown",
    name: "Williamstown",
    region: "Western",
    description:
      "Williamstown is a historic seaside village with beautifully maintained Victorian and Edwardian homes and heritage-listed streetscapes. Renovations require heritage sensitivity, with strong demand for period-accurate carpentry and outdoor living upgrades.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "decking-pergolas",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Williamstown | MEK Homes Melbourne",
    seoDescription:
      "Heritage renovations and carpentry in Williamstown. Period home restorations, custom joinery, decking, and door and window work by MEK Homes Melbourne.",
  },
  {
    slug: "yarraville",
    name: "Yarraville",
    region: "Western",
    description:
      "Yarraville has become one of Melbourne's most popular inner-west suburbs, with charming Edwardian and Victorian weatherboard homes. Homeowners frequently invest in kitchen and bathroom renovations, fencing, and rear extensions.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "fencing-gates",
      "bathroom-renovations",
    ],
    seoTitle: "Carpentry & Renovations Yarraville | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovations and carpentry in Yarraville. Kitchen and bathroom upgrades, timber fencing, and full home renovations by MEK Homes Melbourne.",
  },
  {
    slug: "essendon",
    name: "Essendon",
    region: "Western",
    description:
      "Essendon features a strong concentration of Californian Bungalows, Edwardian homes, and interwar Art Deco residences. Common renovation projects include opening up bungalow floor plans, adding decking, and upgrading kitchens.",
    popularServices: [
      "home-renovations",
      "decking-pergolas",
      "kitchen-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Essendon | MEK Homes Melbourne",
    seoDescription:
      "Expert renovations and carpentry in Essendon. Bungalow renovations, decking, kitchen upgrades, and structural carpentry for period homes by MEK Homes Melbourne.",
  },
  {
    slug: "moonee-ponds",
    name: "Moonee Ponds",
    region: "Western",
    description:
      "Moonee Ponds is a well-established suburb with elegant Victorian and Edwardian homes, Federation villas, and Californian Bungalows. Homeowners regularly undertake renovations to add modern extensions and update period interiors.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "bathroom-renovations",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Moonee Ponds | MEK Homes Melbourne",
    seoDescription:
      "Quality renovations and carpentry in Moonee Ponds. Home extensions, custom cabinetry, bathroom upgrades, and door and window fitting by MEK Homes Melbourne.",
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    region: "Inner North",
    description:
      "Brunswick is a diverse inner-north suburb with Victorian weatherboards, Edwardian cottages, and an increasing number of modern townhouses. Renovations range from full heritage restorations to contemporary kitchen and bathroom fitouts.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
    ],
    seoTitle: "Carpentry & Renovations Brunswick | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in Brunswick. Kitchen and bathroom upgrades, heritage restorations, and timber fencing by MEK Homes Melbourne.",
  },
  {
    slug: "coburg",
    name: "Coburg",
    region: "Inner North",
    description:
      "Coburg offers a mix of Edwardian weatherboards, interwar bungalows, and post-war brick homes on generous blocks. Popular projects include full home renovations, opening up floor plans with structural work, and adding outdoor decking.",
    popularServices: [
      "home-renovations",
      "structural-carpentry",
      "decking-pergolas",
      "lockup-and-fix",
    ],
    seoTitle: "Carpentry & Renovations Coburg | MEK Homes Melbourne",
    seoDescription:
      "Complete renovation and carpentry services in Coburg. Structural upgrades, timber decking, full home transformations, and lockup and fix by MEK Homes Melbourne.",
  },
];

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}

export function getAllSuburbSlugs(): string[] {
  return suburbs.map((s) => s.slug);
}

export function getSuburbsByRegion(region: string): Suburb[] {
  return suburbs.filter((s) => s.region === region);
}
