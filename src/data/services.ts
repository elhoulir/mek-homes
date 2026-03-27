export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  faqs: ServiceFAQ[];
  contactFormValue: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  galleryImages: string[];
}

export const services: Service[] = [
  {
    slug: "new-homes",
    title: "New Homes",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
    description:
      "Build your dream home from the ground up. MEK Homes delivers complete new home builds with quality craftsmanship, transparent pricing, and full project management from foundations to handover.",
    longDescription:
      "MEK Homes brings your vision to life with complete new home construction across Melbourne. From initial site assessment and planning through to final handover, our experienced team manages every stage of your build. We work closely with you and your architect or designer to ensure every detail is executed to the highest standard. Our hands-on approach means you always know where your project stands, and our commitment to quality means you'll love the finished result for decades to come.",
    features: [
      "Complete new home builds",
      "Custom home construction",
      "Site preparation & foundations",
      "Framing & structural work",
      "Full project management",
      "Quality finishes throughout",
    ],
    faqs: [
      {
        question: "How long does it take to build a new home?",
        answer:
          "A typical new home build takes between 6 to 12 months depending on the size and complexity of the design. We provide a detailed construction timeline during the planning phase so you know exactly what to expect at every stage.",
      },
      {
        question: "Do you handle council permits and approvals?",
        answer:
          "Yes, we manage all required building permits and council approvals as part of our project management service. We'll guide you through the process and ensure all documentation is in order before construction begins.",
      },
      {
        question: "Can you work with my architect's plans?",
        answer:
          "Absolutely. We regularly work with architects and designers to bring their plans to life. We can also recommend trusted architects if you need one, or assist with design refinements to optimise buildability and cost.",
      },
      {
        question: "What areas of Melbourne do you build in?",
        answer:
          "We build new homes across the greater Melbourne metropolitan area and surrounding regions, from the CBD to outer suburbs including the Mornington Peninsula, Yarra Ranges, and Geelong region.",
      },
    ],
    contactFormValue: "new-homes",
    metaTitle: "New Home Builds Melbourne | MEK Homes",
    metaDescription:
      "Quality new home construction across Melbourne. Complete builds from foundations to handover with full project management. Get a free quote from MEK Homes.",
  },
  {
    slug: "renovations",
    title: "Renovations",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
    description:
      "Transform your existing home with a full renovation. From kitchen and bathroom upgrades to complete interior overhauls, MEK Homes manages every aspect of the project with quality craftsmanship and attention to detail.",
    longDescription:
      "At MEK Homes, we specialise in home renovations across Melbourne. Whether you're modernising an outdated property, reconfiguring your layout for better flow, or giving your home a complete refresh, our experienced team manages every detail from start to finish. We coordinate all trades, handle permits, and keep you informed throughout the process. Our renovation projects range from single-room updates to full-scale transformations including kitchens, bathrooms, living areas, and more.",
    features: [
      "Full home renovations",
      "Kitchen & bathroom renovations",
      "Open plan conversions",
      "Heritage home restorations",
      "Interior fit-outs",
      "Project management included",
    ],
    faqs: [
      {
        question: "How long does a typical renovation take?",
        answer:
          "A typical renovation takes between 4 to 16 weeks depending on the scope of the project. A single room update might take 2-4 weeks, while a full home renovation can take 8-16 weeks. We provide a detailed timeline during the quoting process.",
      },
      {
        question: "Can I live in my home during the renovation?",
        answer:
          "In many cases, yes. We plan the work in stages to minimise disruption. For major renovations involving kitchens or bathrooms, we'll discuss the best approach to keep your daily routine as normal as possible.",
      },
      {
        question: "Do you provide a written quote before starting?",
        answer:
          "Absolutely. We provide a detailed written quote that breaks down all costs including materials, labour, and any associated fees. There are no hidden charges — what we quote is what you pay.",
      },
      {
        question: "Do you handle council permits and approvals?",
        answer:
          "Yes, we manage all required building permits and council approvals as part of our service. We'll guide you through the process and ensure everything is in order before work begins.",
      },
    ],
    contactFormValue: "renovations",
    metaTitle: "Home Renovations Melbourne | MEK Homes",
    metaDescription:
      "Expert home renovations across Melbourne. Full project management, quality craftsmanship, and transparent pricing. Get a free quote from MEK Homes today.",
  },
  {
    slug: "extensions",
    title: "Extensions",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
    ],
    description:
      "Add more space to your home with a professionally built extension. Whether it's an extra bedroom, expanded living area, or a second storey, MEK Homes delivers seamless extensions that blend with your existing home.",
    longDescription:
      "Need more room? MEK Homes designs and builds home extensions that seamlessly integrate with your existing property. Whether you're adding a ground floor extension for more living space, building up with a second storey, or extending out the back for a larger kitchen and family area, our team ensures the new build matches and enhances your existing home. We handle everything from architectural coordination and engineering through to construction and finishing, delivering extra space that feels like it was always part of the home.",
    features: [
      "Ground floor extensions",
      "Second storey additions",
      "Rear extensions",
      "Side extensions",
      "Seamless integration with existing home",
      "Full structural engineering",
    ],
    faqs: [
      {
        question: "How long does a home extension take?",
        answer:
          "Most home extensions take between 8 to 20 weeks depending on size and complexity. A single room extension may take 8-12 weeks, while a second storey addition can take 16-20 weeks. We provide a clear timeline before work begins.",
      },
      {
        question: "Will the extension match my existing home?",
        answer:
          "Absolutely. We take great care to match materials, rooflines, and finishes so the extension blends seamlessly with your existing home. The goal is for it to look like it was always part of the original build.",
      },
      {
        question: "Do I need a permit for a home extension?",
        answer:
          "Yes, home extensions require a building permit in Victoria. We manage the full permit application process and work with building surveyors to ensure compliance with all regulations.",
      },
      {
        question: "Can I stay in my home during the extension?",
        answer:
          "In most cases, yes. We plan construction to minimise disruption and maintain safe access to your home throughout the build. We'll discuss the best approach during the planning stage.",
      },
    ],
    contactFormValue: "extensions",
    metaTitle: "Home Extensions Melbourne | MEK Homes",
    metaDescription:
      "Quality home extensions across Melbourne. Ground floor, second storey, and rear extensions that seamlessly integrate with your existing home. MEK Homes.",
  },
  {
    slug: "renovations-and-extensions",
    title: "Renovations & Extensions",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    ],
    description:
      "Combine a renovation and extension into one streamlined project. MEK Homes manages the entire scope — renovating your existing spaces while adding new ones — saving you time, money, and the hassle of dealing with multiple builders.",
    longDescription:
      "Why renovate and extend separately when you can do both at once? MEK Homes specialises in combined renovation and extension projects that transform your entire home in a single build. By managing both scopes together, we deliver a cohesive result where new and old spaces flow together perfectly. This approach also saves time and reduces costs compared to running two separate projects. From updating your kitchen and bathrooms to adding new bedrooms or living areas, we handle every detail under one roof.",
    features: [
      "Combined renovation & extension projects",
      "Single project management",
      "Cohesive design across old & new",
      "Cost savings vs. separate projects",
      "Full trade coordination",
      "Minimal disruption approach",
    ],
    faqs: [
      {
        question: "Is it cheaper to renovate and extend at the same time?",
        answer:
          "Yes, combining a renovation and extension into one project is typically more cost-effective than doing them separately. You save on setup costs, project management, and the efficiency of having one team handle everything.",
      },
      {
        question: "How do you ensure the new extension matches the renovated areas?",
        answer:
          "We plan the entire project as a unified design, selecting materials and finishes that work across both the renovated and new sections. This ensures a seamless, cohesive result throughout your home.",
      },
      {
        question: "How long does a combined renovation and extension take?",
        answer:
          "A combined project typically takes 12 to 24 weeks depending on the scope. While longer than a standalone renovation, it's significantly faster than doing both projects separately.",
      },
      {
        question: "Can you handle the full scope or do I need separate tradespeople?",
        answer:
          "We manage everything. MEK Homes coordinates all trades — carpentry, plumbing, electrical, plastering, tiling, and painting — so you have a single point of contact throughout the entire project.",
      },
    ],
    contactFormValue: "renovations-extensions",
    metaTitle: "Renovations & Extensions Melbourne | MEK Homes",
    metaDescription:
      "Combined home renovations and extensions in Melbourne. One team, one project, seamless results. Get a free quote from MEK Homes.",
  },
  {
    slug: "pergolas",
    title: "Pergolas",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    description:
      "Create a stunning outdoor entertaining area with a custom-built pergola. MEK Homes designs and constructs pergolas using premium timber and materials, built to withstand Melbourne's climate while enhancing your outdoor living.",
    longDescription:
      "Extend your living space outdoors with a beautifully crafted pergola by MEK Homes. Whether you want a shaded entertaining area, a covered alfresco dining space, or a sheltered outdoor room, our team designs and builds pergolas that suit your home and lifestyle. We work with premium hardwoods, treated timber, and steel to create structures that look great and stand up to Melbourne's weather year after year. Every pergola is custom designed to complement your home's architecture and maximise your outdoor enjoyment.",
    features: [
      "Custom pergola design",
      "Timber & steel construction",
      "Attached & freestanding options",
      "Insulated roofing options",
      "Outdoor entertaining areas",
      "Permit management included",
    ],
    faqs: [
      {
        question: "Do I need a permit to build a pergola?",
        answer:
          "Most pergolas in Victoria require a building permit. We handle all permit applications and ensure your pergola complies with local building regulations and Australian standards.",
      },
      {
        question: "What materials do you use for pergolas?",
        answer:
          "We build pergolas using a range of materials including Merbau, treated pine, Victorian Ash, and steel. We'll recommend the best option based on your design preference, budget, and the structural requirements of the project.",
      },
      {
        question: "How long does it take to build a pergola?",
        answer:
          "A standard pergola takes 1 to 3 weeks to build depending on size and complexity. More elaborate designs with insulated roofing or integrated lighting may take slightly longer.",
      },
      {
        question: "Can you add a pergola to an existing deck?",
        answer:
          "Yes, we regularly add pergolas to existing decks and patios. We'll assess the existing structure to ensure it can support the pergola and make any necessary reinforcements.",
      },
    ],
    contactFormValue: "pergolas",
    metaTitle: "Pergolas Melbourne | MEK Homes",
    metaDescription:
      "Custom pergola design and construction in Melbourne. Premium timber and steel pergolas for outdoor entertaining. Get a free quote from MEK Homes.",
  },
  {
    slug: "decking",
    title: "Decking",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    description:
      "Enhance your outdoor living with beautifully crafted timber or composite decking. MEK Homes builds decks that are stunning, durable, and designed to complement your home and lifestyle.",
    longDescription:
      "Create the perfect outdoor space with quality decking by MEK Homes. We design and build timber and composite decks that enhance your home's indoor-outdoor connection and provide the perfect space for entertaining, relaxing, or simply enjoying Melbourne's outdoors. Whether you want a spacious ground-level deck, an elevated platform, or a multi-level design, our team delivers quality construction using premium materials built to last.",
    features: [
      "Timber & composite decking",
      "Ground-level & elevated decks",
      "Multi-level deck designs",
      "Steps & balustrades",
      "Deck restoration & repairs",
      "Built-in seating & planters",
    ],
    faqs: [
      {
        question: "What's the difference between timber and composite decking?",
        answer:
          "Timber decking (such as Merbau or Spotted Gum) offers a natural look and feel but requires regular oiling and maintenance. Composite decking is a manufactured product that's low-maintenance and comes in a range of colours, but has a higher upfront cost. We can help you choose the best option.",
      },
      {
        question: "Do I need a permit for a deck?",
        answer:
          "Most decks in Victoria require a building permit. We handle all permit applications and ensure your deck complies with local building regulations and Australian standards.",
      },
      {
        question: "How long will a timber deck last?",
        answer:
          "A well-built and maintained hardwood deck can last 25-40 years. Composite decking typically comes with warranties of 20-25 years. We build all our decks to the highest standards to ensure maximum lifespan.",
      },
      {
        question: "Can you build on sloping blocks?",
        answer:
          "Yes, we regularly build decking on sloping and uneven sites. We design appropriate substructures and framing to create level, safe outdoor spaces regardless of the terrain.",
      },
    ],
    contactFormValue: "decking",
    metaTitle: "Decking Melbourne | MEK Homes",
    metaDescription:
      "Quality timber and composite decking in Melbourne. Custom deck design and construction by MEK Homes. Get a free quote today.",
  },
  {
    slug: "lockup",
    title: "Lockup",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&q=80",
    ],
    description:
      "Get your build to lockup stage with MEK Homes. We handle all structural carpentry, framing, roofing, and external cladding to get your project weathertight and secure, ready for internal fit-out.",
    longDescription:
      "MEK Homes provides expert lockup services for new builds, extensions, and major renovations across Melbourne. Lockup stage means your building is structurally complete, weathertight, and secure — with framing, roofing, external cladding, windows, and external doors all installed. Our experienced team delivers precise framing and structural carpentry to exacting standards, ensuring your build has a solid foundation for the fit-out stages to follow. Whether you're an owner-builder managing your own project or a developer needing reliable lockup services, we deliver on time and to spec.",
    features: [
      "Wall & roof framing",
      "Roof installation",
      "External cladding",
      "Window & door installation",
      "Weatherproofing & sealing",
      "Structural beam installation",
    ],
    faqs: [
      {
        question: "What does lockup stage include?",
        answer:
          "Lockup stage means the building is weathertight and secure. This includes completed framing, roof covering, external cladding or brickwork, and installation of external windows and doors. The building can be locked and is protected from weather.",
      },
      {
        question: "Can you do lockup only, without internal fit-out?",
        answer:
          "Yes, we offer lockup as a standalone service. This is ideal for owner-builders who want professional structural work and plan to manage the internal fit-out themselves or with other trades.",
      },
      {
        question: "Do you provide engineering and structural specifications?",
        answer:
          "Yes, for all structural work we engage qualified structural engineers to provide specifications and certifications. All work meets Australian building standards and is inspected by a registered building surveyor.",
      },
      {
        question: "How long does it take to reach lockup stage?",
        answer:
          "Depending on the size and complexity of the build, reaching lockup stage typically takes 6 to 12 weeks from slab or foundations. We provide a clear timeline during the quoting process.",
      },
    ],
    contactFormValue: "lockup",
    metaTitle: "Lockup Stage Building Melbourne | MEK Homes",
    metaDescription:
      "Professional lockup stage building in Melbourne. Framing, roofing, cladding, and weatherproofing by MEK Homes. Get your build to lockup on time.",
  },
  {
    slug: "fix",
    title: "Fix",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    ],
    description:
      "MEK Homes handles all internal fix carpentry — skirting boards, architraves, door hanging, shelving, cabinetry installation, and all the finishing carpentry that brings your home together.",
    longDescription:
      "The fix stage is where your home truly comes together. MEK Homes provides expert fix carpentry services covering all the internal finishing work that transforms a shell into a home. This includes hanging internal doors, installing skirting boards and architraves, fitting shelving and cabinetry, building stairs, and completing all interior timber detailing. Our carpenters take pride in precision and clean finishes, ensuring every joint is tight, every line is straight, and every detail is perfect. Whether it's part of a larger build or a standalone fit-out, our fix carpentry sets the standard.",
    features: [
      "Door hanging & installation",
      "Skirting boards & architraves",
      "Built-in shelving & cabinetry",
      "Staircase installation",
      "Wardrobe fit-outs",
      "Timber detailing & finishing",
    ],
    faqs: [
      {
        question: "What is fix carpentry?",
        answer:
          "Fix carpentry (also called second fix or finishing carpentry) covers all the internal timber work that happens after the building is at lockup stage. This includes door hanging, skirting, architraves, shelving, cabinetry installation, and all interior finishing work.",
      },
      {
        question: "Can you match existing skirting and architrave profiles?",
        answer:
          "Yes, we can match existing timber profiles to ensure new work blends seamlessly with your home's existing features. We source matching profiles or have custom profiles milled when needed.",
      },
      {
        question: "Do you install kitchens and wardrobes?",
        answer:
          "Yes, we install flat-pack and custom-built kitchens, wardrobes, and cabinetry. We ensure precise fitting, level installation, and quality finishing on all cabinetry work.",
      },
      {
        question: "How long does fix carpentry take?",
        answer:
          "The duration depends on the size of the home and scope of work. A standard 3-bedroom home typically takes 1-3 weeks for complete fix carpentry. We provide a detailed timeline with every quote.",
      },
    ],
    contactFormValue: "fix",
    metaTitle: "Fix Carpentry Melbourne | MEK Homes",
    metaDescription:
      "Expert fix carpentry in Melbourne. Door hanging, skirting, architraves, cabinetry installation, and all finishing carpentry by MEK Homes.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
