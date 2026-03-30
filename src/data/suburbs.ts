export interface Suburb {
  slug: string;
  name: string;
  postcode: string;
  region: string;
  description: string;
  popularServices: string[];
  seoTitle: string;
  seoDescription: string;
}

export const suburbs: Suburb[] = [
  // ── Inner East ──────────────────────────────────────────────────────
  {
    slug: "toorak",
    name: "Toorak",
    postcode: "3142",
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
    postcode: "3141",
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
    postcode: "3143",
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
    postcode: "3144",
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
    postcode: "3122",
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
    postcode: "3101",
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
    postcode: "3124",
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
    postcode: "3126",
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
    postcode: "3103",
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
    slug: "prahran",
    name: "Prahran",
    postcode: "3181",
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
    postcode: "3181",
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
    postcode: "3121",
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
    slug: "glen-iris",
    name: "Glen Iris",
    postcode: "3146",
    region: "Inner East",
    description:
      "Glen Iris is a leafy family suburb featuring a mix of Californian Bungalows, Edwardian homes, and modern townhouses. Homeowners regularly invest in kitchen and bathroom upgrades and rear extensions to suit growing families.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "bathroom-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Glen Iris | MEK Homes Melbourne",
    seoDescription:
      "Professional renovation and carpentry services in Glen Iris. Kitchen and bathroom upgrades, structural extensions, and full home renovations by MEK Homes.",
  },
  {
    slug: "ashburton",
    name: "Ashburton",
    postcode: "3147",
    region: "Inner East",
    description:
      "Ashburton is a quiet, family-oriented suburb with a charming mix of Californian Bungalows, 1950s brick homes, and modern renovations. Many properties benefit from updated kitchens, bathroom modernisations, and new decking.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "decking-pergolas",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Ashburton | MEK Homes Melbourne",
    seoDescription:
      "Quality carpentry and renovations in Ashburton. Kitchen and bathroom upgrades, timber decking, and complete home transformations by MEK Homes Melbourne.",
  },
  {
    slug: "surrey-hills",
    name: "Surrey Hills",
    postcode: "3127",
    region: "Inner East",
    description:
      "Surrey Hills is prized for its tree-lined streets and beautiful Federation and Edwardian homes. Renovation work often centres on heritage-sympathetic extensions, bespoke joinery, and modernising interiors while retaining period charm.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "kitchen-renovations",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Surrey Hills | MEK Homes Melbourne",
    seoDescription:
      "Expert renovations and custom carpentry in Surrey Hills. Heritage extensions, bespoke joinery, kitchen upgrades, and period home restorations by MEK Homes.",
  },
  {
    slug: "mont-albert",
    name: "Mont Albert",
    postcode: "3127",
    region: "Inner East",
    description:
      "Mont Albert features grand Edwardian and Federation residences on generous blocks with established gardens. High-end renovation projects here include heritage-sensitive extensions, custom cabinetry, and premium kitchen fitouts.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "kitchen-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Mont Albert | MEK Homes Melbourne",
    seoDescription:
      "Premium renovations and carpentry in Mont Albert. Heritage extensions, custom cabinetry, structural work, and kitchen renovations by MEK Homes Melbourne.",
  },
  {
    slug: "box-hill",
    name: "Box Hill",
    postcode: "3128",
    region: "Inner East",
    description:
      "Box Hill offers a vibrant mix of post-war brick homes, Californian Bungalows, and modern developments. Homeowners frequently invest in full renovations to update older layouts with open-plan living and contemporary kitchens.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "structural-carpentry",
      "bathroom-renovations",
    ],
    seoTitle: "Carpentry & Renovations Box Hill | MEK Homes Melbourne",
    seoDescription:
      "Complete renovation and carpentry services in Box Hill. Kitchen and bathroom upgrades, structural modifications, and full home makeovers by MEK Homes Melbourne.",
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    postcode: "3108",
    region: "Inner East",
    description:
      "Doncaster is a well-established suburb with 1960s and 1970s brick homes on generous blocks, many being renovated or rebuilt. Kitchen and bathroom renovations, decking, and structural updates are highly sought after.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "decking-pergolas",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Doncaster | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Doncaster. Kitchen and bathroom upgrades, timber decking, and structural improvements by MEK Homes Melbourne.",
  },
  {
    slug: "templestowe",
    name: "Templestowe",
    postcode: "3106",
    region: "Inner East",
    description:
      "Templestowe is a leafy, family-friendly suburb with large blocks featuring 1970s and 1980s homes as well as newer luxury builds. Renovations typically focus on modernising kitchens and bathrooms, adding decking, and updating fencing.",
    popularServices: [
      "kitchen-renovations",
      "decking-pergolas",
      "fencing-gates",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Templestowe | MEK Homes Melbourne",
    seoDescription:
      "Quality renovations and carpentry in Templestowe. Kitchen upgrades, timber decking, fencing, and complete home renovations by MEK Homes Melbourne.",
  },
  {
    slug: "balwyn-north",
    name: "Balwyn North",
    postcode: "3104",
    region: "Inner East",
    description:
      "Balwyn North is a sought-after family suburb with a mix of post-war brick residences and contemporary new builds on spacious blocks. Kitchen and bathroom modernisations and structural extensions are popular renovation projects.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "bathroom-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Balwyn North | MEK Homes Melbourne",
    seoDescription:
      "Professional renovation and carpentry in Balwyn North. Kitchen and bathroom upgrades, structural extensions, and full home transformations by MEK Homes.",
  },
  {
    slug: "deepdene",
    name: "Deepdene",
    postcode: "3103",
    region: "Inner East",
    description:
      "Deepdene is an exclusive pocket suburb with stately Edwardian and interwar homes on wide, tree-lined streets. Renovations here are typically high-end, featuring heritage-sensitive updates, custom joinery, and premium kitchen fitouts.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "kitchen-renovations",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Deepdene | MEK Homes Melbourne",
    seoDescription:
      "Luxury renovations and bespoke carpentry in Deepdene. Heritage home updates, custom joinery, kitchen upgrades, and door and window work by MEK Homes.",
  },
  {
    slug: "ivanhoe",
    name: "Ivanhoe",
    postcode: "3079",
    region: "Inner East",
    description:
      "Ivanhoe is a family-friendly suburb along the Yarra with a lovely mix of Californian Bungalows, interwar homes, and modern builds. Popular projects include kitchen renovations, outdoor decking, and bathroom upgrades.",
    popularServices: [
      "kitchen-renovations",
      "decking-pergolas",
      "bathroom-renovations",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Ivanhoe | MEK Homes Melbourne",
    seoDescription:
      "Expert carpentry and renovations in Ivanhoe. Kitchen and bathroom upgrades, timber decking, and full home renovation services by MEK Homes Melbourne.",
  },
  {
    slug: "malvern-east",
    name: "Malvern East",
    postcode: "3145",
    region: "Inner East",
    description:
      "Malvern East features a diverse housing stock from interwar Californian Bungalows to post-war brick homes and modern townhouses. Homeowners regularly update kitchens and bathrooms and add rear extensions for open-plan living.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "bathroom-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Malvern East | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Malvern East. Kitchen and bathroom upgrades, structural extensions, and full home renovations by MEK Homes.",
  },

  // ── Bayside ─────────────────────────────────────────────────────────
  {
    slug: "brighton",
    name: "Brighton",
    postcode: "3186",
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
    postcode: "3188",
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
    postcode: "3191",
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
    slug: "beaumaris",
    name: "Beaumaris",
    postcode: "3193",
    region: "Bayside",
    description:
      "Beaumaris is renowned for its mid-century modern homes and bayside living, with many architecturally significant 1950s and 1960s residences. Renovations often involve sympathetic updates to modernist designs alongside new decking and outdoor areas.",
    popularServices: [
      "home-renovations",
      "decking-pergolas",
      "kitchen-renovations",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Beaumaris | MEK Homes Melbourne",
    seoDescription:
      "Specialist renovations and carpentry in Beaumaris. Mid-century home updates, timber decking, kitchen renovations, and window upgrades by MEK Homes Melbourne.",
  },
  {
    slug: "black-rock",
    name: "Black Rock",
    postcode: "3193",
    region: "Bayside",
    description:
      "Black Rock is a tightly held bayside suburb with a mix of mid-century homes and contemporary coastal residences. Homeowners invest in decking, outdoor living spaces, and premium kitchen and bathroom renovations.",
    popularServices: [
      "decking-pergolas",
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
    ],
    seoTitle: "Carpentry & Renovations Black Rock | MEK Homes Melbourne",
    seoDescription:
      "Quality carpentry and renovations in Black Rock. Timber decking, kitchen and bathroom upgrades, and coastal-style fencing by MEK Homes Melbourne.",
  },
  {
    slug: "mentone",
    name: "Mentone",
    postcode: "3194",
    region: "Bayside",
    description:
      "Mentone is a popular bayside suburb with Edwardian weatherboards, post-war brick homes, and modern family residences. Kitchen and bathroom modernisations, fencing, and outdoor living upgrades are in strong demand.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
      "decking-pergolas",
    ],
    seoTitle: "Carpentry & Renovations Mentone | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in Mentone. Kitchen and bathroom upgrades, timber fencing, and decking for bayside homes by MEK Homes Melbourne.",
  },
  {
    slug: "cheltenham",
    name: "Cheltenham",
    postcode: "3192",
    region: "Bayside",
    description:
      "Cheltenham offers a diverse mix of post-war brick homes, Californian Bungalows, and newer townhouse developments. Homeowners regularly invest in kitchen renovations, bathroom upgrades, and new fencing and decking.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Cheltenham | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Cheltenham. Kitchen and bathroom upgrades, timber fencing, and full home renovations by MEK Homes Melbourne.",
  },
  {
    slug: "bentleigh",
    name: "Bentleigh",
    postcode: "3204",
    region: "Bayside",
    description:
      "Bentleigh is a family-friendly suburb with a blend of post-war brick homes, Californian Bungalows, and modern renovations. Popular projects include opening up floor plans, kitchen and bathroom updates, and adding outdoor decking.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "bathroom-renovations",
      "decking-pergolas",
    ],
    seoTitle: "Carpentry & Renovations Bentleigh | MEK Homes Melbourne",
    seoDescription:
      "Expert renovation and carpentry services in Bentleigh. Kitchen and bathroom upgrades, decking, and complete home transformations by MEK Homes Melbourne.",
  },
  {
    slug: "ormond",
    name: "Ormond",
    postcode: "3204",
    region: "Bayside",
    description:
      "Ormond is a well-connected bayside suburb with interwar weatherboards, post-war brick homes, and modern townhouses. Homeowners frequently update kitchens and bathrooms and add fencing and decking to improve outdoor spaces.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
      "decking-pergolas",
    ],
    seoTitle: "Carpentry & Renovations Ormond | MEK Homes Melbourne",
    seoDescription:
      "Quality renovations and carpentry in Ormond. Kitchen and bathroom upgrades, timber fencing, and decking for family homes by MEK Homes Melbourne.",
  },
  {
    slug: "mckinnon",
    name: "McKinnon",
    postcode: "3204",
    region: "Bayside",
    description:
      "McKinnon is a highly sought-after family suburb known for its school zone, featuring interwar weatherboards, Californian Bungalows, and renovated period homes. Kitchen and bathroom upgrades and rear extensions are popular projects.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "home-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations McKinnon | MEK Homes Melbourne",
    seoDescription:
      "Professional carpentry and renovations in McKinnon. Kitchen and bathroom upgrades, structural extensions, and full home renovations by MEK Homes Melbourne.",
  },

  // ── Inner South ─────────────────────────────────────────────────────
  {
    slug: "albert-park",
    name: "Albert Park",
    postcode: "3206",
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
    postcode: "3206",
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
    postcode: "3205",
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
    postcode: "3184",
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
    postcode: "3182",
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
    slug: "carnegie",
    name: "Carnegie",
    postcode: "3163",
    region: "Inner South",
    description:
      "Carnegie is a vibrant, well-connected suburb with Edwardian weatherboards, interwar bungalows, and modern apartment developments. Kitchen and bathroom renovations, custom storage solutions, and lockup-and-fix work are in strong demand.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "custom-carpentry",
      "lockup-and-fix",
    ],
    seoTitle: "Carpentry & Renovations Carnegie | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Carnegie. Kitchen and bathroom upgrades, custom cabinetry, and lockup and fix by MEK Homes Melbourne.",
  },
  {
    slug: "caulfield",
    name: "Caulfield",
    postcode: "3162",
    region: "Inner South",
    description:
      "Caulfield features a distinguished mix of Edwardian homes, interwar residences, and Art Deco apartments across its well-established streets. Homeowners seek kitchen and bathroom modernisations and heritage-sensitive structural updates.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "structural-carpentry",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Caulfield | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in Caulfield. Kitchen and bathroom upgrades, structural work, and full home renovations by MEK Homes Melbourne.",
  },
  {
    slug: "elsternwick",
    name: "Elsternwick",
    postcode: "3185",
    region: "Inner South",
    description:
      "Elsternwick is a charming inner suburb with a strong collection of Edwardian and Federation homes, Art Deco flats, and heritage streetscapes. Popular projects include kitchen renovations, custom joinery, and door and window restoration.",
    popularServices: [
      "kitchen-renovations",
      "custom-carpentry",
      "doors-windows",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Elsternwick | MEK Homes Melbourne",
    seoDescription:
      "Expert carpentry and renovations in Elsternwick. Kitchen upgrades, custom joinery, door and window restoration, and home renovations by MEK Homes Melbourne.",
  },

  // ── Inner North ─────────────────────────────────────────────────────
  {
    slug: "fitzroy",
    name: "Fitzroy",
    postcode: "3065",
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
    postcode: "3053",
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
    postcode: "3070",
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
    postcode: "3071",
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
    slug: "brunswick",
    name: "Brunswick",
    postcode: "3056",
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
    postcode: "3058",
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
  {
    slug: "clifton-hill",
    name: "Clifton Hill",
    postcode: "3068",
    region: "Inner North",
    description:
      "Clifton Hill is a compact inner-north suburb with charming Victorian terraces, Edwardian cottages, and converted warehouses. Heritage renovations, custom joinery, and kitchen upgrades are the most sought-after projects.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "kitchen-renovations",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Clifton Hill | MEK Homes Melbourne",
    seoDescription:
      "Specialist renovations and carpentry in Clifton Hill. Heritage home restorations, custom joinery, kitchen upgrades, and window work by MEK Homes Melbourne.",
  },
  {
    slug: "fairfield",
    name: "Fairfield",
    postcode: "3078",
    region: "Inner North",
    description:
      "Fairfield is a leafy suburb along the Yarra with a mix of Edwardian weatherboards, interwar bungalows, and post-war homes. Homeowners invest in kitchen and bathroom renovations, decking, and opening up traditional floor plans.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "decking-pergolas",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Fairfield | MEK Homes Melbourne",
    seoDescription:
      "Quality carpentry and renovations in Fairfield. Kitchen and bathroom upgrades, timber decking, and structural modifications by MEK Homes Melbourne.",
  },
  {
    slug: "alphington",
    name: "Alphington",
    postcode: "3078",
    region: "Inner North",
    description:
      "Alphington is a quiet, family-oriented suburb with Edwardian and interwar homes alongside newer developments near the Yarra. Renovation work often involves bathroom and kitchen updates, custom cabinetry, and outdoor living improvements.",
    popularServices: [
      "bathroom-renovations",
      "kitchen-renovations",
      "custom-carpentry",
      "decking-pergolas",
    ],
    seoTitle: "Carpentry & Renovations Alphington | MEK Homes Melbourne",
    seoDescription:
      "Professional renovation and carpentry services in Alphington. Bathroom and kitchen upgrades, custom cabinetry, and decking by MEK Homes Melbourne.",
  },
  {
    slug: "preston",
    name: "Preston",
    postcode: "3072",
    region: "Inner North",
    description:
      "Preston is a rapidly gentrifying suburb with Edwardian weatherboards, interwar bungalows, and post-war homes being renovated at pace. Full home renovations, structural modifications, and modern kitchen fitouts are in high demand.",
    popularServices: [
      "home-renovations",
      "structural-carpentry",
      "kitchen-renovations",
      "lockup-and-fix",
    ],
    seoTitle: "Carpentry & Renovations Preston | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Preston. Full home renovations, structural upgrades, kitchen fitouts, and lockup and fix by MEK Homes Melbourne.",
  },
  {
    slug: "reservoir",
    name: "Reservoir",
    postcode: "3073",
    region: "Inner North",
    description:
      "Reservoir offers a broad mix of post-war brick homes, weatherboard cottages, and newer developments on spacious blocks. Kitchen and bathroom renovations, fencing, and structural updates to modernise older homes are popular projects.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Reservoir | MEK Homes Melbourne",
    seoDescription:
      "Expert renovation and carpentry services in Reservoir. Kitchen and bathroom upgrades, timber fencing, and structural improvements by MEK Homes Melbourne.",
  },
  {
    slug: "pascoe-vale",
    name: "Pascoe Vale",
    postcode: "3044",
    region: "Inner North",
    description:
      "Pascoe Vale is a well-connected suburb with interwar bungalows, post-war brick homes, and an increasing number of contemporary townhouses. Homeowners frequently update kitchens and bathrooms and add decking and fencing.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "decking-pergolas",
      "fencing-gates",
    ],
    seoTitle: "Carpentry & Renovations Pascoe Vale | MEK Homes Melbourne",
    seoDescription:
      "Quality renovations and carpentry in Pascoe Vale. Kitchen and bathroom upgrades, timber decking, and fencing for family homes by MEK Homes Melbourne.",
  },

  // ── South East ──────────────────────────────────────────────────────
  {
    slug: "glen-waverley",
    name: "Glen Waverley",
    postcode: "3150",
    region: "South East",
    description:
      "Glen Waverley is a thriving family suburb with 1960s and 1970s brick homes on generous blocks, many being fully renovated or rebuilt. Kitchen and bathroom modernisations, structural extensions, and outdoor decking are highly popular.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "structural-carpentry",
      "decking-pergolas",
    ],
    seoTitle: "Carpentry & Renovations Glen Waverley | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in Glen Waverley. Kitchen and bathroom upgrades, structural extensions, and timber decking by MEK Homes Melbourne.",
  },
  {
    slug: "mount-waverley",
    name: "Mount Waverley",
    postcode: "3149",
    region: "South East",
    description:
      "Mount Waverley is a well-established family suburb with post-war brick homes and Californian Bungalows on leafy streets. Popular renovation projects include kitchen and bathroom updates, decking, and opening up traditional layouts.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "decking-pergolas",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Mount Waverley | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Mount Waverley. Kitchen and bathroom upgrades, decking, and full home renovations by MEK Homes Melbourne.",
  },
  {
    slug: "chadstone",
    name: "Chadstone",
    postcode: "3148",
    region: "South East",
    description:
      "Chadstone is a family-oriented suburb with a mix of 1950s and 1960s brick homes and modern renovations. Homeowners regularly invest in kitchen and bathroom updates, new fencing, and structural modifications to open up living areas.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Chadstone | MEK Homes Melbourne",
    seoDescription:
      "Expert renovation and carpentry services in Chadstone. Kitchen and bathroom upgrades, timber fencing, and structural improvements by MEK Homes Melbourne.",
  },

  // ── Western ─────────────────────────────────────────────────────────
  {
    slug: "williamstown",
    name: "Williamstown",
    postcode: "3016",
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
    postcode: "3013",
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
    postcode: "3040",
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
    postcode: "3039",
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
    slug: "seddon",
    name: "Seddon",
    postcode: "3011",
    region: "Western",
    description:
      "Seddon is a charming inner-west village with rows of Victorian and Edwardian weatherboard cottages and terraces. Compact homes benefit from clever kitchen renovations, custom storage solutions, and heritage-sympathetic updates.",
    popularServices: [
      "kitchen-renovations",
      "custom-carpentry",
      "home-renovations",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Seddon | MEK Homes Melbourne",
    seoDescription:
      "Specialist renovations and carpentry in Seddon. Kitchen upgrades, custom joinery, heritage home restorations, and window work by MEK Homes Melbourne.",
  },
  {
    slug: "footscray",
    name: "Footscray",
    postcode: "3011",
    region: "Western",
    description:
      "Footscray is a rapidly transforming inner-west suburb with Victorian weatherboards, Edwardian cottages, and converted industrial spaces. Renovation projects range from heritage restorations to modern lockup-and-fix work on new builds.",
    popularServices: [
      "home-renovations",
      "lockup-and-fix",
      "kitchen-renovations",
      "structural-carpentry",
    ],
    seoTitle: "Carpentry & Renovations Footscray | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in Footscray. Heritage restorations, lockup and fix, kitchen upgrades, and structural work by MEK Homes Melbourne.",
  },
  {
    slug: "altona",
    name: "Altona",
    postcode: "3018",
    region: "Western",
    description:
      "Altona is a bayside western suburb with a mix of post-war weatherboard cottages, 1960s brick homes, and contemporary coastal builds. Decking, outdoor living areas, and kitchen and bathroom renovations are popular projects.",
    popularServices: [
      "decking-pergolas",
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
    ],
    seoTitle: "Carpentry & Renovations Altona | MEK Homes Melbourne",
    seoDescription:
      "Quality carpentry and renovations in Altona. Timber decking, kitchen and bathroom upgrades, and coastal fencing for western bayside homes by MEK Homes.",
  },
  {
    slug: "newport",
    name: "Newport",
    postcode: "3015",
    region: "Western",
    description:
      "Newport is an up-and-coming inner-west suburb with Edwardian weatherboards, Victorian cottages, and modern townhouse developments. Homeowners invest in kitchen renovations, bathroom updates, and fencing for period properties.",
    popularServices: [
      "kitchen-renovations",
      "bathroom-renovations",
      "fencing-gates",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Newport | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Newport. Kitchen and bathroom upgrades, timber fencing, and full home renovations by MEK Homes Melbourne.",
  },
  {
    slug: "spotswood",
    name: "Spotswood",
    postcode: "3015",
    region: "Western",
    description:
      "Spotswood is a small inner-west suburb with charming Edwardian and Victorian weatherboard homes and a growing number of modern townhouses. Kitchen renovations, custom carpentry, and lockup-and-fix work are in demand.",
    popularServices: [
      "kitchen-renovations",
      "custom-carpentry",
      "lockup-and-fix",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations Spotswood | MEK Homes Melbourne",
    seoDescription:
      "Expert renovations and carpentry in Spotswood. Kitchen upgrades, custom joinery, lockup and fix, and home renovations by MEK Homes Melbourne.",
  },

  // ── Additional suburbs for broader Melbourne coverage ───────────────
  {
    slug: "abbotsford",
    name: "Abbotsford",
    postcode: "3067",
    region: "Inner East",
    description:
      "Abbotsford is an inner-city suburb with converted warehouses, Victorian workers' cottages, and modern apartment developments along the Yarra. Renovation work ranges from heritage cottage restorations to contemporary kitchen and bathroom fitouts.",
    popularServices: [
      "home-renovations",
      "kitchen-renovations",
      "lockup-and-fix",
      "bathroom-renovations",
    ],
    seoTitle: "Carpentry & Renovations Abbotsford | MEK Homes Melbourne",
    seoDescription:
      "Professional renovations and carpentry in Abbotsford. Heritage cottage restorations, kitchen and bathroom upgrades, and lockup and fix by MEK Homes.",
  },
  {
    slug: "collingwood",
    name: "Collingwood",
    postcode: "3066",
    region: "Inner North",
    description:
      "Collingwood features heritage Victorian terraces, converted industrial buildings, and modern infill housing. Renovations demand skilled carpentry to preserve period details while creating functional contemporary living spaces.",
    popularServices: [
      "home-renovations",
      "custom-carpentry",
      "structural-carpentry",
      "doors-windows",
    ],
    seoTitle: "Carpentry & Renovations Collingwood | MEK Homes Melbourne",
    seoDescription:
      "Heritage renovation specialists in Collingwood. Victorian terrace restorations, custom carpentry, structural work, and door fitting by MEK Homes Melbourne.",
  },
  {
    slug: "south-morang",
    name: "South Morang",
    postcode: "3752",
    region: "Outer North",
    description:
      "South Morang is a fast-growing outer suburb with contemporary family homes and newer estates. Homeowners invest in decking, pergolas, fencing, and lockup-and-fix carpentry for new-build completions.",
    popularServices: [
      "decking-pergolas",
      "fencing-gates",
      "lockup-and-fix",
      "home-renovations",
    ],
    seoTitle: "Carpentry & Renovations South Morang | MEK Homes Melbourne",
    seoDescription:
      "Trusted carpentry and renovation services in South Morang. Decking, pergolas, fencing, and lockup and fix for new homes by MEK Homes Melbourne.",
  },
  {
    slug: "craigieburn",
    name: "Craigieburn",
    postcode: "3064",
    region: "Outer North",
    description:
      "Craigieburn is a thriving northern growth corridor with modern family homes and new housing estates. Fencing, decking, pergola builds, and lockup-and-fix carpentry for new constructions are the most common projects.",
    popularServices: [
      "fencing-gates",
      "decking-pergolas",
      "lockup-and-fix",
      "kitchen-renovations",
    ],
    seoTitle: "Carpentry & Renovations Craigieburn | MEK Homes Melbourne",
    seoDescription:
      "Quality carpentry and renovation services in Craigieburn. Fencing, decking, lockup and fix, and kitchen upgrades for new homes by MEK Homes Melbourne.",
  },
  {
    slug: "point-cook",
    name: "Point Cook",
    postcode: "3030",
    region: "Western",
    description:
      "Point Cook is one of Melbourne's fastest-growing western suburbs with modern family estates. Popular projects include decking, pergolas, fencing, and kitchen renovations to personalise builder-grade homes.",
    popularServices: [
      "decking-pergolas",
      "fencing-gates",
      "kitchen-renovations",
      "lockup-and-fix",
    ],
    seoTitle: "Carpentry & Renovations Point Cook | MEK Homes Melbourne",
    seoDescription:
      "Professional carpentry and renovations in Point Cook. Timber decking, fencing, kitchen upgrades, and lockup and fix for modern homes by MEK Homes Melbourne.",
  },
  {
    slug: "werribee",
    name: "Werribee",
    postcode: "3030",
    region: "Western",
    description:
      "Werribee is a major western growth hub with a mix of older weatherboard homes and modern housing estates. Kitchen and bathroom renovations, fencing, and decking are popular upgrades for families in this expanding suburb.",
    popularServices: [
      "kitchen-renovations",
      "fencing-gates",
      "decking-pergolas",
      "bathroom-renovations",
    ],
    seoTitle: "Carpentry & Renovations Werribee | MEK Homes Melbourne",
    seoDescription:
      "Trusted renovation and carpentry services in Werribee. Kitchen and bathroom upgrades, fencing, and decking for western suburbs homes by MEK Homes Melbourne.",
  },
  {
    slug: "berwick",
    name: "Berwick",
    postcode: "3806",
    region: "South East",
    description:
      "Berwick is a well-established south-eastern suburb with a mix of older character homes and newer family estates. Homeowners invest in decking, fencing, kitchen renovations, and lockup-and-fix carpentry for new builds.",
    popularServices: [
      "decking-pergolas",
      "fencing-gates",
      "kitchen-renovations",
      "lockup-and-fix",
    ],
    seoTitle: "Carpentry & Renovations Berwick | MEK Homes Melbourne",
    seoDescription:
      "Expert carpentry and renovation services in Berwick. Decking, fencing, kitchen upgrades, and lockup and fix for family homes by MEK Homes Melbourne.",
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

export function searchSuburbs(query: string): Suburb[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return suburbs.filter(
    (s) =>
      s.name.toLowerCase().includes(q) || s.postcode.includes(q)
  );
}
