export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  location: string;
  serviceType: string;
  duration: string;
  completedDate: string;
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
  image: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    slug: "richmond-kitchen-renovation",
    title: "Modern Kitchen Renovation",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80",
    ],
    description:
      "Complete kitchen transformation featuring custom cabinetry, stone benchtops, and a large island bench in this Richmond family home.",
    longDescription:
      "This Richmond property received a complete kitchen overhaul, transforming a dated galley kitchen into a spacious modern hub for the family. We removed a non-load-bearing wall to open up the space, installed custom soft-close cabinetry in a two-tone finish, fitted Caesarstone benchtops, and built a large island bench with breakfast bar seating. The project included coordination of plumbing, electrical, and tiling trades, delivered on time in 6 weeks.",
    location: "Richmond, VIC",
    serviceType: "kitchen-renovations",
    duration: "6 weeks",
    completedDate: "2024",
    featured: true,
    metaTitle: "Modern Kitchen Renovation Richmond | MEK Homes Projects",
    metaDescription:
      "See our modern kitchen renovation project in Richmond, VIC. Custom cabinetry, stone benchtops, and island bench by MEK Homes.",
  },
  {
    slug: "south-yarra-full-renovation",
    title: "Heritage Home Renovation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    ],
    description:
      "Full renovation of a period home in South Yarra, blending heritage character with modern living across two levels.",
    longDescription:
      "This beautiful South Yarra period home underwent a comprehensive renovation that respected its heritage character while introducing modern comforts. Our work included restoring original timber flooring, building new built-in cabinetry throughout, converting the ground floor to open-plan living by removing a load-bearing wall, and constructing a rear extension to add a new family room. All heritage details including cornices, architraves, and skirting boards were carefully matched and restored.",
    location: "South Yarra, VIC",
    serviceType: "home-renovations",
    duration: "14 weeks",
    completedDate: "2024",
    featured: true,
    metaTitle: "Heritage Home Renovation South Yarra | MEK Homes Projects",
    metaDescription:
      "Heritage home renovation in South Yarra by MEK Homes. Full restoration and modern extension blending period character with contemporary living.",
  },
  {
    slug: "brighton-deck-pergola",
    title: "Merbau Deck & Pergola",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
    description:
      "Expansive Merbau hardwood deck with an attached insulated pergola, creating a year-round outdoor entertaining area.",
    longDescription:
      "We designed and built a stunning outdoor entertaining area for this Brighton home featuring a 60sqm Merbau hardwood deck with integrated bench seating and a covered pergola with insulated roofing panels. The deck was built on a sloping block requiring engineered substructure and steel posts. The pergola includes integrated LED downlights, ceiling fans, and screens on one side for wind protection. This space has become the heart of the home for year-round entertaining.",
    location: "Brighton, VIC",
    serviceType: "decking-pergolas",
    duration: "4 weeks",
    completedDate: "2023",
    featured: true,
    metaTitle: "Merbau Deck & Pergola Brighton | MEK Homes Projects",
    metaDescription:
      "Merbau deck and insulated pergola project in Brighton by MEK Homes. Outdoor entertaining area with integrated seating and weather protection.",
  },
  {
    slug: "hawthorn-bathroom-reno",
    title: "Luxury Bathroom Renovation",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=600&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    ],
    description:
      "Complete renovation of a main bathroom and ensuite in Hawthorn, featuring custom vanities and floor-to-ceiling tiling.",
    longDescription:
      "This Hawthorn project involved the complete renovation of both the main bathroom and master ensuite. We built custom floating vanities with timber fronts and stone tops, constructed new stud walls to reconfigure the layout, installed frameless shower screens with custom framing, and coordinated all waterproofing, plumbing, and tiling. The result is two beautifully finished bathrooms that feel like a high-end hotel, all completed with minimal disruption to the family.",
    location: "Hawthorn, VIC",
    serviceType: "bathroom-renovations",
    duration: "5 weeks",
    completedDate: "2024",
    featured: false,
    metaTitle: "Luxury Bathroom Renovation Hawthorn | MEK Homes Projects",
    metaDescription:
      "Luxury bathroom renovation in Hawthorn by MEK Homes. Custom vanities, floor-to-ceiling tiling, and frameless shower screens.",
  },
  {
    slug: "malvern-built-in-wardrobes",
    title: "Custom Built-In Wardrobes",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
    ],
    description:
      "Floor-to-ceiling built-in wardrobes with custom internal fitouts across three bedrooms in a Malvern home.",
    longDescription:
      "We designed and built custom floor-to-ceiling built-in wardrobes for three bedrooms in this Malvern home. Each wardrobe was tailored to the room and the owner's storage needs, featuring a mix of hanging space, adjustable shelving, drawers with soft-close runners, and pull-out accessories. The wardrobes were finished in a two-pack paint to match the existing door and trim colour, creating a seamless built-in look.",
    location: "Malvern, VIC",
    serviceType: "custom-carpentry",
    duration: "2 weeks",
    completedDate: "2023",
    featured: false,
    metaTitle: "Custom Built-In Wardrobes Malvern | MEK Homes Projects",
    metaDescription:
      "Custom built-in wardrobes in Malvern by MEK Homes. Floor-to-ceiling design with tailored internal fitouts across three bedrooms.",
  },
  {
    slug: "kew-open-plan-conversion",
    title: "Open Plan Living Conversion",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
    description:
      "Structural wall removal and open plan conversion connecting kitchen, dining, and living areas in a Kew family home.",
    longDescription:
      "This Kew family home was transformed by removing a load-bearing wall between the kitchen, dining, and living areas to create a spacious open-plan living zone. We installed an engineered steel beam with timber cladding to support the structure, refinished the flooring throughout to create a seamless surface, and built new custom shelving and a window seat in the living area. The result is a light-filled, connected space perfect for family living and entertaining.",
    location: "Kew, VIC",
    serviceType: "structural-carpentry",
    duration: "3 weeks",
    completedDate: "2024",
    featured: true,
    metaTitle: "Open Plan Conversion Kew | MEK Homes Projects",
    metaDescription:
      "Open plan living conversion in Kew by MEK Homes. Structural wall removal and beam installation creating a spacious family living area.",
  },
  {
    slug: "toorak-bifold-doors",
    title: "Bifold Door Installation",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    description:
      "Installation of large timber bifold doors connecting the living room to a new alfresco area in a Toorak home.",
    longDescription:
      "We installed a set of four-panel timber bifold doors in this Toorak residence, creating a stunning connection between the interior living room and the newly built alfresco area. The project involved widening the existing opening with structural support, precise fitting of the door frame and hardware, and finishing with matching architrave and skirting. The doors open to create a 4-metre wide opening that transforms the indoor-outdoor flow of the home.",
    location: "Toorak, VIC",
    serviceType: "doors-windows",
    duration: "1 week",
    completedDate: "2023",
    featured: false,
    metaTitle: "Bifold Door Installation Toorak | MEK Homes Projects",
    metaDescription:
      "Timber bifold door installation in Toorak by MEK Homes. Four-panel doors creating seamless indoor-outdoor living.",
  },
  {
    slug: "camberwell-merbau-fence",
    title: "Merbau Horizontal Slat Fence",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
    description:
      "Full front and side boundary Merbau horizontal slat fence with automated driveway gate in Camberwell.",
    longDescription:
      "We built a complete boundary fence for this Camberwell property using premium Merbau hardwood in a modern horizontal slat design. The project included the front fence with a pedestrian gate, full side boundary fencing, and a large automated sliding driveway gate. All posts were set in concrete footings, and the horizontal slats were precision-spaced for a clean, contemporary look. The Merbau was left to weather naturally for a silver-grey finish that complements the home's modern architecture.",
    location: "Camberwell, VIC",
    serviceType: "fencing-gates",
    duration: "2 weeks",
    completedDate: "2024",
    featured: false,
    metaTitle: "Merbau Horizontal Slat Fence Camberwell | MEK Homes Projects",
    metaDescription:
      "Merbau horizontal slat fence and automated gate in Camberwell by MEK Homes. Premium hardwood fencing with modern design.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectsByServiceType(serviceSlug: string): Project[] {
  return projects.filter((p) => p.serviceType === serviceSlug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
