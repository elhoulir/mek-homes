export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  processDescription: string;
  whyChoose: string[];
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
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
    description:
      "Build your dream home from the ground up. MEK Homes delivers complete new home builds across Melbourne — from slab to handover, with quality carpentry and project management at every stage.",
    longDescription:
      "MEK Homes builds quality new homes across Melbourne, managing the full carpentry scope from frame to finish. Whether you're building on a new block or knocking down and rebuilding, our experienced team delivers the structural integrity and finishing quality your new home deserves. We work closely with owners, architects, and builders to ensure every detail is executed to plan and to the highest standard. From wall and roof framing through to internal fit-out, we take pride in building homes that stand the test of time.",
    processDescription:
      "We start by reviewing your approved plans and engineering specifications, then provide a detailed fixed-price quote covering the full carpentry scope. Once engaged, we coordinate with your builder or manage the build directly — beginning with slab-stage carpentry, progressing through frame, lockup, and fix stages. Throughout the build, we maintain clear communication, attend site meetings, and ensure every stage passes inspection before moving forward.",
    whyChoose: [
      "Full carpentry scope from frame to finish — one team across all stages",
      "Experienced with Melbourne's building regulations, inspections, and energy ratings",
      "We work to your architect's plans with precision — no shortcuts or substitutions",
      "Clean, organised worksites that keep your build on schedule",
    ],
    features: [
      "Complete new home builds",
      "Knock-down rebuilds",
      "Custom home construction",
      "Owner-builder support",
      "Multi-unit developments",
      "Townhouse construction",
    ],
    faqs: [
      {
        question: "Do you build the entire home or just the carpentry?",
        answer:
          "We can manage the full build or provide the carpentry package within a larger project. Many clients engage us for the complete carpentry scope — frame, lockup, and fix — while we coordinate alongside other trades. We also take on full project management for owner-builders.",
      },
      {
        question: "How long does a new home build take?",
        answer:
          "A typical new home build takes 6-12 months depending on the size and complexity. We provide a detailed timeline during the quoting process and keep you updated at every stage.",
      },
      {
        question: "Can you work with my architect's plans?",
        answer:
          "Absolutely. We work from your approved plans and engineering specifications, ensuring every element is built exactly to spec. We're experienced with a wide range of architectural styles and construction methods.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer:
          "Yes, we manage all required building permits and coordinate mandatory inspections at each stage. We ensure your build is fully compliant with Australian building standards and local council requirements.",
      },
    ],
    contactFormValue: "new-homes",
    metaTitle: "New Home Builds Melbourne | MEK Homes",
    metaDescription:
      "Quality new home construction across Melbourne. From slab to handover, MEK Homes delivers expert carpentry and project management for your new build.",
  },
  {
    slug: "renovations",
    title: "Renovations",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
    description:
      "Transform your existing home with a quality renovation. MEK Homes manages every aspect of the project — from initial consultation through to the final finishing touches, delivering outstanding results on time and on budget.",
    longDescription:
      "MEK Homes specialises in home renovations across Melbourne. Whether you're modernising an outdated kitchen, refreshing a tired bathroom, opening up your living spaces, or undertaking a whole-house renovation, our experienced team manages every detail from start to finish. We work closely with you to understand your vision, provide expert guidance on design and materials, and deliver a finished result that exceeds expectations. Our renovation projects range from single-room updates to full-scale transformations.",
    processDescription:
      "Every renovation begins with an on-site consultation where we walk through your home, discuss your goals, and understand your budget. From there, we prepare a detailed scope of work and fixed-price quote. Once approved, we handle council permits if required, coordinate all trades, and manage the build from demolition through to final clean and handover. Throughout the project, you'll have a dedicated point of contact who keeps you updated at every stage.",
    whyChoose: [
      "We manage the full project — you deal with one team, not ten different trades",
      "Fixed-price quotes with every cost itemised upfront before work starts",
      "Experienced with Melbourne council permits, heritage overlays, and building regulations",
      "Minimal disruption — we plan staged work so you can stay in your home where possible",
    ],
    features: [
      "Full home renovations",
      "Kitchen & bathroom renovations",
      "Single room makeovers",
      "Heritage home restorations",
      "Open plan conversions",
      "Project management included",
    ],
    faqs: [
      {
        question: "How long does a typical renovation take?",
        answer:
          "A typical renovation takes between 4 to 12 weeks depending on the scope. A single room update might take 2-4 weeks, while a full home renovation can take 8-16 weeks. We provide a detailed timeline during the quoting process.",
      },
      {
        question: "Do you handle council permits and approvals?",
        answer:
          "Yes, we manage all required building permits and council approvals as part of our project management service. We'll guide you through the process and ensure all documentation is in order before work begins.",
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
    ],
    contactFormValue: "renovations",
    metaTitle: "Home Renovations Melbourne | MEK Homes",
    metaDescription:
      "Expert home renovations across Melbourne. Full project management, quality craftsmanship, and transparent pricing. Get a free quote from MEK Homes today.",
  },
  {
    slug: "extensions",
    title: "Extensions",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    ],
    description:
      "Add more living space to your home with a professionally built extension. Whether it's a ground-floor addition, second storey, or rear extension, MEK Homes delivers seamless extensions that blend with your existing home.",
    longDescription:
      "Need more space without moving? MEK Homes designs and builds home extensions across Melbourne that integrate seamlessly with your existing structure. From single-room additions and ground-floor extensions to second-storey builds, our team handles all structural carpentry, framing, and finishing work. We ensure your extension matches your home's character while meeting current building standards. Every extension project is backed by proper engineering and managed from start to finish by our experienced team.",
    processDescription:
      "We begin with a site assessment to evaluate your home's structure and discuss your space requirements. After reviewing or preparing plans, we provide a fixed-price quote covering all carpentry and project management. We handle council permits and engineering, then execute the build — from footings and framing through to lockup and internal finishing. Our goal is a seamless transition between old and new that looks and feels like it was always part of the home.",
    whyChoose: [
      "Seamless integration — we match your extension to the existing home's style and finishes",
      "Experienced with single-storey, double-storey, and rear extensions across Melbourne",
      "All structural work backed by qualified engineering specifications",
      "We manage permits, inspections, and all trade coordination",
    ],
    features: [
      "Ground floor extensions",
      "Second storey additions",
      "Rear extensions",
      "Living space additions",
      "Bedroom & bathroom additions",
      "Garage conversions",
    ],
    faqs: [
      {
        question: "How long does an extension take to build?",
        answer:
          "A typical home extension takes 8-16 weeks depending on size and complexity. Second-storey additions may take longer. We provide a detailed schedule during the quoting stage so you can plan accordingly.",
      },
      {
        question: "Will the extension match my existing home?",
        answer:
          "Absolutely. We take great care to match materials, finishes, and architectural details so your extension blends seamlessly with the original structure. The goal is for it to look like it was always part of the home.",
      },
      {
        question: "Do I need a permit for an extension?",
        answer:
          "Yes, most extensions require a building permit and potentially a planning permit depending on your property's overlays. We manage the full permit application process on your behalf.",
      },
      {
        question: "Can I stay in my home during construction?",
        answer:
          "In most cases, yes. We stage the work to minimise disruption and maintain access to essential areas of your home throughout the build.",
      },
    ],
    contactFormValue: "extensions",
    metaTitle: "Home Extensions Melbourne | MEK Homes",
    metaDescription:
      "Quality home extensions across Melbourne. Ground floor, second storey, and rear extensions built to blend seamlessly with your existing home by MEK Homes.",
  },
  {
    slug: "renovations-and-extensions",
    title: "Renovations & Extensions",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7e17a0?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
    description:
      "The complete package — renovate your existing home and extend it at the same time. MEK Homes manages the full scope so everything is coordinated, cost-effective, and delivered as one seamless project.",
    longDescription:
      "When you need both a renovation and an extension, it makes sense to do them together. MEK Homes manages combined renovation and extension projects as a single, coordinated build — saving you time, money, and the hassle of managing separate projects. We handle everything from opening up existing living spaces and modernising kitchens and bathrooms, to building new rooms and second-storey additions. The result is a transformed home that flows naturally from old to new.",
    processDescription:
      "We start with a comprehensive site consultation to understand both your renovation goals and space requirements. We then work with your architect or prepare a scope of work covering the full project. A single fixed-price quote covers everything — demolition, structural modifications, extension build, and internal renovation finishing. One project manager coordinates all trades and stages, ensuring the renovation and extension work progresses efficiently as one unified build.",
    whyChoose: [
      "One team, one quote, one project manager — no gaps between renovation and extension work",
      "Combined projects are more cost-effective than doing renovation and extension separately",
      "We ensure the renovated areas and new extension flow together seamlessly",
      "Experienced managing complex multi-stage builds across Melbourne",
    ],
    features: [
      "Combined renovation & extension",
      "Open plan conversions with additions",
      "Kitchen/bathroom reno with new rooms",
      "Second storey with ground floor refresh",
      "Heritage renovation with modern extension",
      "Full project management",
    ],
    faqs: [
      {
        question: "Is it cheaper to renovate and extend at the same time?",
        answer:
          "Yes, combining both projects is typically more cost-effective than doing them separately. You save on mobilisation costs, trade coordination, and can take advantage of economies of scale with materials. It also means less total disruption to your daily life.",
      },
      {
        question: "How long does a combined renovation and extension take?",
        answer:
          "A combined project typically takes 12-20 weeks depending on scope and complexity. We stage the work efficiently so renovation and extension progress together where possible.",
      },
      {
        question: "Can you work with my existing architect or designer?",
        answer:
          "Absolutely. We work with your architect's plans and can provide input on buildability and cost implications during the design phase. We can also recommend architects we've worked with successfully.",
      },
      {
        question: "Do you handle all trades or just the carpentry?",
        answer:
          "We manage all trades — plumbing, electrical, plastering, tiling, painting, and more. You deal with one point of contact who coordinates everything from start to finish.",
      },
    ],
    contactFormValue: "renovations-extensions",
    metaTitle: "Renovations & Extensions Melbourne | MEK Homes",
    metaDescription:
      "Combined home renovation and extension projects in Melbourne. One team, one quote, seamless results. Get a free quote from MEK Homes today.",
  },
  {
    slug: "pergolas",
    title: "Pergolas",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    description:
      "Create the perfect outdoor entertaining area with a custom-built pergola. MEK Homes designs and constructs quality timber and steel pergolas built to handle Melbourne's climate.",
    longDescription:
      "MEK Homes builds quality pergolas that extend your living space and add value to your home. Whether you want a classic timber pergola for your backyard, a modern flat-roof design attached to your home, or a fully covered outdoor room, our team designs and builds structures that are both beautiful and built to last. We work with premium hardwoods, treated pine, and steel to create pergolas that suit your style and stand up to Melbourne's weather year after year.",
    processDescription:
      "We visit your property to assess the site, discuss your design preferences, and advise on materials and council requirements. After preparing a detailed quote with clear specifications, we handle any required building permits. Construction typically takes 1-2 weeks and includes footings, post installation, beam and rafter construction, roofing if applicable, and all finishing work. We leave your outdoor area clean and ready to enjoy.",
    whyChoose: [
      "Engineered footings and connections — built to withstand Melbourne's wind and weather",
      "We handle all council permits and ensure compliance with building regulations",
      "Premium timber and steel options to suit any architectural style",
      "Designs that maximise shade, shelter, and usable outdoor space",
    ],
    features: [
      "Attached & freestanding pergolas",
      "Flat roof & pitched roof designs",
      "Timber & steel construction",
      "Outdoor entertaining areas",
      "Covered alfresco spaces",
      "Carports & covered parking",
    ],
    faqs: [
      {
        question: "Do I need a permit for a pergola?",
        answer:
          "Most pergolas in Victoria require a building permit. We handle the full permit application process and ensure your structure complies with local building regulations and Australian standards.",
      },
      {
        question: "What materials do you use for pergolas?",
        answer:
          "We build with premium hardwoods (Merbau, Spotted Gum), treated pine, and steel. We'll recommend the best material based on your style preference, budget, and the design of your home.",
      },
      {
        question: "How long does it take to build a pergola?",
        answer:
          "A standard pergola takes 1-2 weeks to build from footings to completion. More complex designs with roofing or integrated features may take a little longer. We provide a clear timeline with every quote.",
      },
      {
        question: "Can you add a roof to my pergola?",
        answer:
          "Yes, we build both open-rafter pergolas and fully roofed structures using Colorbond, polycarbonate, or timber. A roofed pergola provides all-weather protection and can be used year-round.",
      },
    ],
    contactFormValue: "pergolas",
    metaTitle: "Pergola Builders Melbourne | MEK Homes",
    metaDescription:
      "Custom pergola design and construction in Melbourne. Timber, steel, and covered pergolas built to last by MEK Homes. Get a free quote today.",
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
      "Enhance your outdoor living with beautifully crafted timber or composite decking. MEK Homes builds decks that are stunning, durable, and designed for Melbourne's climate.",
    longDescription:
      "MEK Homes designs and builds quality timber and composite decking across Melbourne. Whether you want a spacious entertaining deck, a pool surround, an elevated deck on a sloping block, or a simple backyard platform, our team delivers expert construction using premium materials. Every deck we build features proper substructure engineering, quality fixings, and a finish that looks great and lasts for decades. We work with Merbau, Spotted Gum, Blackbutt, and leading composite brands to give you options that suit your style and maintenance preference.",
    processDescription:
      "We begin with a site visit to assess your outdoor space, discuss your vision, and advise on material options. After preparing a detailed quote, we handle any required building permits through your local council. Construction typically takes 1-2 weeks depending on size and complexity, with our team managing site preparation, footings, subframe, and decking installation. We finish with sanding, oiling (for timber), and a thorough clean.",
    whyChoose: [
      "Built to handle Melbourne's weather — proper drainage, treated timbers, and stainless steel fixings",
      "We handle all council permits and ensure compliance with Australian building standards",
      "Premium hardwood and composite options to suit your style and maintenance preference",
      "Experienced building on flat sites, sloping blocks, and elevated positions",
    ],
    features: [
      "Hardwood timber decking",
      "Composite decking",
      "Elevated & multi-level decks",
      "Pool surrounds",
      "Deck restoration & repairs",
      "Steps & balustrades",
    ],
    faqs: [
      {
        question: "What's the difference between timber and composite decking?",
        answer:
          "Timber decking (such as Merbau or Spotted Gum) offers a natural look and feel but requires regular oiling. Composite decking is low-maintenance and comes in a range of colours, but has a higher upfront cost. We can help you choose the best option for your needs and budget.",
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
    metaTitle: "Decking Builders Melbourne | MEK Homes",
    metaDescription:
      "Quality timber and composite decking construction in Melbourne. Merbau, Spotted Gum, and composite options built to last by MEK Homes.",
  },
  {
    slug: "lockup",
    title: "Lockup",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    ],
    description:
      "Professional lockup carpentry services covering all structural work required to make your build weatherproof — wall framing, roof framing, external cladding, fascia, and window and door installation.",
    longDescription:
      "MEK Homes provides expert lockup carpentry for new builds, extensions, and renovation projects across Melbourne. Our lockup services cover all structural carpentry required to make your build weatherproof — wall framing, roof framing, external cladding, fascia, barge boards, and window and door installation. We work from your approved plans and engineering specifications, ensuring every structural element is built precisely to spec. Our experienced carpenters understand the critical importance of getting the lockup stage right — it sets the foundation for everything that follows.",
    processDescription:
      "We work from your approved plans and engineering specifications, beginning with wall framing — bottom plates, studs, top plates, and bracing. We then progress through roof framing including rafters, ridge beams, and trusses. Once the frame is complete and inspected, we install external cladding, fascia, barge boards, and all external windows and doors to achieve full lockup. Every stage is built to engineering specs and passes mandatory inspections before we move forward.",
    whyChoose: [
      "Precise framing to engineered specifications — no shortcuts on structural integrity",
      "Experienced with timber and steel frame construction across all residential styles",
      "We coordinate with builders and other trades to keep your project on schedule",
      "All work passes mandatory frame and lockup inspections first time",
    ],
    features: [
      "Wall framing & construction",
      "Roof framing & trusses",
      "External cladding installation",
      "Fascia & barge boards",
      "Window & door installation",
      "Structural bracing",
    ],
    faqs: [
      {
        question: "What does lockup stage mean?",
        answer:
          "Lockup is the construction stage where the building is made weatherproof — the frame is up, the roof is on, external cladding is installed, and all external windows and doors are fitted. This allows internal trades (plumbing, electrical, insulation) to begin work in a protected environment.",
      },
      {
        question: "Do you work as a subcontractor or manage the project?",
        answer:
          "We work both ways. We regularly provide lockup carpentry as subcontractors within larger builds, and we also manage projects directly for owner-builders. Either way, you get the same quality and professionalism.",
      },
      {
        question: "How long does lockup take?",
        answer:
          "Lockup typically takes 2-6 weeks depending on the size and complexity of the build. A standard single-storey home might take 2-3 weeks, while a larger or more complex build could take longer.",
      },
      {
        question: "Do you handle frame inspections?",
        answer:
          "Yes, we coordinate all mandatory frame and lockup inspections with your building surveyor. We ensure everything is built to spec and passes inspection before progressing to the next stage.",
      },
    ],
    contactFormValue: "lockup",
    metaTitle: "Lockup Carpentry Melbourne | MEK Homes",
    metaDescription:
      "Professional lockup carpentry in Melbourne. Wall framing, roof framing, cladding, and weatherproofing by MEK Homes. Quality structural carpentry for new builds and extensions.",
  },
  {
    slug: "fix",
    title: "Fix",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    ],
    description:
      "Expert fix carpentry covering all internal finishing work — skirting boards, architraves, door hanging, shelving, cabinetry installation, and all final timber detailing that makes a home complete.",
    longDescription:
      "MEK Homes delivers precision fix carpentry for new builds, extensions, and renovations across Melbourne. Fix carpentry is the internal finishing stage that brings a home together — hanging doors, running skirting boards and architraves, installing built-in cabinetry, fitting shelving, and completing all final timber detailing. It's the work that homeowners see and touch every day, so we take particular pride in delivering clean lines, tight joints, and a flawless finish. Our fix carpenters have an eye for detail that sets the standard for the rest of the interior.",
    processDescription:
      "Fix carpentry begins after other trades have completed their rough-in work (plumbing, electrical, insulation) and plasterwork is finished. We start with door frames and door hanging, then progress to skirting boards, architraves, window reveals, and any built-in cabinetry or shelving. All work is done with precision — tight mitres, flush joints, and consistent reveals throughout. We finish with a thorough quality check before handover.",
    whyChoose: [
      "Precision finishing with tight mitres, flush joints, and consistent reveals throughout",
      "Our fix carpenters have an eye for the detail that makes a home feel complete",
      "We work cleanly and efficiently to stay on schedule and minimise dust and disruption",
      "Experienced with both contemporary and traditional finishing styles",
    ],
    features: [
      "Skirting boards & architraves",
      "Door hanging & hardware",
      "Built-in shelving & cabinetry",
      "Window reveals & sills",
      "Staircase finishing",
      "Final timber detailing",
    ],
    faqs: [
      {
        question: "What is fix carpentry?",
        answer:
          "Fix carpentry is the internal finishing stage of a build — hanging doors, installing skirting boards, architraves, built-in shelving, and cabinetry. It's all the visible timber work that makes a home feel finished and complete.",
      },
      {
        question: "When does fix carpentry happen in a build?",
        answer:
          "Fix carpentry happens after the frame is up, the building is locked up, and internal trades (plumbing, electrical, insulation) have completed their rough-in work. It typically follows plastering and comes before painting.",
      },
      {
        question: "Can you match existing skirting and architrave profiles?",
        answer:
          "Yes, we can match existing profiles for renovation projects to ensure new work blends seamlessly with the original. We source matching profiles or have custom runs made when needed.",
      },
      {
        question: "Do you install built-in wardrobes and cabinetry?",
        answer:
          "Yes, we install all types of built-in cabinetry including wardrobes, linen cupboards, entertainment units, and custom shelving. We work with pre-fabricated units or build custom solutions on-site.",
      },
    ],
    contactFormValue: "fix",
    metaTitle: "Fix Carpentry Melbourne | MEK Homes",
    metaDescription:
      "Expert fix carpentry in Melbourne. Skirting boards, architraves, door hanging, built-in cabinetry, and precision finishing by MEK Homes.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
