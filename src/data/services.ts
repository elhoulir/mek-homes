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
    slug: "home-renovations",
    title: "Home Renovations",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
    description:
      "Transform your home with a full renovation. We manage every aspect of the project — from initial design consultation through to the final finishing touches. Whether you're updating a single room or undertaking a whole-house renovation, MEK Homes has the experience and expertise to deliver outstanding results.",
    longDescription:
      "At MEK Homes, we specialise in complete home renovations across Melbourne. Whether you're looking to modernise an outdated property, add more living space, or completely reimagine your home's layout, our experienced team manages every detail from start to finish. We work closely with you to understand your vision, provide expert guidance on design and materials, and deliver a finished result that exceeds expectations. Our renovation projects range from single-room updates to full-scale transformations including extensions, open-plan conversions, and heritage restorations.",
    features: [
      "Full home renovations",
      "Single room makeovers",
      "Extensions and additions",
      "Heritage home restorations",
      "Open plan conversions",
      "Project management included",
    ],
    faqs: [
      {
        question: "How long does a typical home renovation take?",
        answer:
          "A typical home renovation takes between 4 to 12 weeks depending on the scope of the project. A single room update might take 2-4 weeks, while a full home renovation can take 8-16 weeks. We provide a detailed timeline during the quoting process so you know exactly what to expect.",
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
      {
        question: "What areas of Melbourne do you service?",
        answer:
          "We service all suburbs across greater Melbourne and the surrounding metropolitan area, from the CBD to outer suburbs including the Mornington Peninsula, Yarra Ranges, and Geelong region.",
      },
    ],
    contactFormValue: "renovation",
    metaTitle: "Home Renovations Melbourne | MEK Homes",
    metaDescription:
      "Expert home renovations across Melbourne. Full project management, quality craftsmanship, and transparent pricing. Get a free quote from MEK Homes today.",
  },
  {
    slug: "custom-carpentry",
    title: "Custom Carpentry",
    image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    ],
    description:
      "Our skilled carpenters create bespoke timber work tailored to your home. From custom cabinetry and built-in wardrobes to floating shelves and entertainment units, we craft each piece with precision and care using quality materials.",
    longDescription:
      "MEK Homes offers bespoke carpentry services for homeowners who want something truly unique. Our skilled carpenters handcraft custom pieces tailored to your exact specifications and space. Whether it's a built-in wardrobe that maximises storage, a stunning entertainment unit, or custom shelving that transforms a room, we use quality timbers and materials to create pieces that are both beautiful and functional. Every project starts with a consultation to understand your needs, followed by precise measurements and expert craftsmanship.",
    features: [
      "Built-in wardrobes & storage",
      "Custom cabinetry",
      "Bookshelves & display units",
      "Entertainment units",
      "Timber feature walls",
      "Custom furniture pieces",
    ],
    faqs: [
      {
        question: "What types of timber do you work with?",
        answer:
          "We work with a wide range of timbers including Victorian Ash, Tasmanian Oak, Spotted Gum, Blackbutt, and various imported hardwoods. We also work with engineered timbers and MDF for painted finishes. We'll recommend the best material for your project based on aesthetics, durability, and budget.",
      },
      {
        question: "Can you match existing joinery in my home?",
        answer:
          "Yes, we can match existing timber profiles, stains, and finishes to ensure new work blends seamlessly with your home's existing features. We take samples and carefully colour-match to achieve the best result.",
      },
      {
        question: "How long does a custom carpentry project take?",
        answer:
          "Timelines vary based on the complexity of the project. A simple built-in bookshelf might take 2-3 days, while a full set of custom wardrobes could take 1-2 weeks. We provide a clear timeline with every quote.",
      },
      {
        question: "Do you provide design assistance?",
        answer:
          "Absolutely. We work with you to design pieces that suit your space, style, and storage needs. We can suggest design options, materials, and finishes based on our experience and your preferences.",
      },
    ],
    contactFormValue: "carpentry",
    metaTitle: "Custom Carpentry Melbourne | MEK Homes",
    metaDescription:
      "Bespoke custom carpentry in Melbourne. Built-in wardrobes, cabinetry, shelving, and timber feature work crafted to your specifications by MEK Homes.",
  },
  {
    slug: "decking-pergolas",
    title: "Decking & Pergolas",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    description:
      "Enhance your outdoor living with beautifully crafted decking and pergolas. We work with premium hardwoods and composite materials to build outdoor spaces that are both stunning and durable, designed for Melbourne's climate.",
    longDescription:
      "Create the perfect outdoor living space with MEK Homes. We design and build timber decking, pergolas, and outdoor entertaining areas that are made to withstand Melbourne's weather while looking beautiful year-round. Whether you want a spacious deck for summer entertaining, a shaded pergola for all-season comfort, or a complete outdoor room, our team delivers quality construction using premium hardwoods and composite materials. Every deck and pergola we build is designed to complement your home and enhance your lifestyle.",
    features: [
      "Timber & composite decking",
      "Pergolas & gazebos",
      "Outdoor entertaining areas",
      "Screening & privacy walls",
      "Deck restoration & repairs",
      "Carports & covered areas",
    ],
    faqs: [
      {
        question: "What's the difference between timber and composite decking?",
        answer:
          "Timber decking (such as Merbau or Spotted Gum) offers a natural look and feel but requires regular oiling and maintenance. Composite decking is a manufactured product that's low-maintenance and comes in a range of colours, but has a higher upfront cost. We can help you choose the best option for your needs and budget.",
      },
      {
        question: "Do I need a permit for a deck or pergola?",
        answer:
          "In many cases, yes. Most decks and pergolas in Victoria require a building permit. We handle all permit applications and ensure your structure complies with local building regulations and Australian standards.",
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
    metaTitle: "Decking & Pergolas Melbourne | MEK Homes",
    metaDescription:
      "Quality timber decking and pergola construction in Melbourne. Premium hardwoods, composite options, and expert craftsmanship by MEK Homes.",
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&q=80",
    ],
    description:
      "The kitchen is the heart of the home, and we ensure yours is both functional and beautiful. MEK Homes handles complete kitchen renovations including cabinetry, benchtops, splashbacks, and all associated carpentry work.",
    longDescription:
      "A well-designed kitchen can transform your daily life. MEK Homes delivers complete kitchen renovations that combine smart functionality with beautiful design. We handle everything from custom cabinetry and benchtop installation to layout redesign and full kitchen fitouts. Our team coordinates all trades involved in your kitchen renovation, managing the project from demolition through to the final finish. Whether you're after a modern minimalist kitchen or a warm traditional space, we bring your vision to life.",
    features: [
      "Complete kitchen fitouts",
      "Custom kitchen cabinetry",
      "Island bench installations",
      "Pantry & storage solutions",
      "Benchtop installation",
      "Kitchen layout redesign",
    ],
    faqs: [
      {
        question: "How long does a kitchen renovation take?",
        answer:
          "A typical kitchen renovation takes 4-8 weeks from demolition to completion. The timeline depends on the scope of work, material lead times, and any structural changes. We provide a detailed schedule so you can plan accordingly.",
      },
      {
        question: "Can you work with my existing layout or do I need a redesign?",
        answer:
          "We can do both. If your current layout works well, we can refresh the kitchen with new cabinetry, benchtops, and finishes. If you want to change the layout, we can redesign the space to improve functionality and flow.",
      },
      {
        question: "What benchtop materials do you work with?",
        answer:
          "We install a range of benchtop materials including stone (Caesarstone, granite, marble), timber, laminate, and solid surface options. We'll help you choose the best material based on your style preferences, usage, and budget.",
      },
      {
        question: "Do you handle plumbing and electrical work?",
        answer:
          "Yes, we coordinate all trades including licensed plumbers and electricians. As your project manager, we ensure all work is carried out to Australian standards and properly certified.",
      },
    ],
    contactFormValue: "kitchen",
    metaTitle: "Kitchen Renovations Melbourne | MEK Homes",
    metaDescription:
      "Complete kitchen renovations in Melbourne. Custom cabinetry, benchtops, layout redesign, and full project management by MEK Homes.",
  },
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    ],
    description:
      "From a simple refresh to a complete bathroom remodel, our team delivers beautiful bathroom renovations. We coordinate all trades and handle the carpentry, framing, and finishing work to create your ideal bathroom.",
    longDescription:
      "MEK Homes delivers stunning bathroom renovations that combine style with practicality. Whether you're updating a tired ensuite or completely rebuilding your main bathroom, we manage every aspect of the project. Our team handles all carpentry, framing, vanity installation, and finishing work, while coordinating licensed plumbers, tilers, and electricians. We ensure proper waterproofing, ventilation, and compliance with all building regulations, delivering a bathroom you'll love for years to come.",
    features: [
      "Full bathroom renovations",
      "Vanity installation",
      "Shower screen framing",
      "Bathroom cabinetry",
      "Laundry renovations",
      "Waterproofing coordination",
    ],
    faqs: [
      {
        question: "How long does a bathroom renovation take?",
        answer:
          "A standard bathroom renovation takes 2-4 weeks. More complex projects involving structural changes or custom tiling may take 4-6 weeks. We provide a clear timeline during the quoting process.",
      },
      {
        question: "Do you handle waterproofing?",
        answer:
          "Yes, we coordinate all waterproofing work with licensed waterproofers. Proper waterproofing is essential in any bathroom renovation and we ensure it's done correctly and certified before tiling begins.",
      },
      {
        question: "Can you renovate my bathroom on a budget?",
        answer:
          "Absolutely. We work with a range of budgets and can suggest cost-effective options that still deliver a great result. Simple updates like new vanity, tapware, and paint can make a big difference without a full remodel.",
      },
      {
        question: "Will I have access to another bathroom during the renovation?",
        answer:
          "We recommend having access to an alternative bathroom during the renovation. We plan the work to minimise disruption and complete the project as efficiently as possible.",
      },
    ],
    contactFormValue: "bathroom",
    metaTitle: "Bathroom Renovations Melbourne | MEK Homes",
    metaDescription:
      "Professional bathroom renovations in Melbourne. From simple refreshes to complete remodels, MEK Homes delivers quality results on time and on budget.",
  },
  {
    slug: "structural-carpentry",
    title: "Structural Carpentry",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&q=80",
    ],
    description:
      "Our team handles all structural carpentry work including wall framing, roof construction, load-bearing wall modifications, and structural repairs. All work is carried out to Australian building standards with proper engineering oversight.",
    longDescription:
      "MEK Homes provides expert structural carpentry services for residential properties across Melbourne. Our experienced carpenters handle complex structural work including wall framing, roof construction and repairs, load-bearing wall removal, beam installation, and subfloor repairs. All structural work is carried out in accordance with Australian building standards and supported by proper engineering specifications where required. Whether it's part of a larger renovation or a standalone structural project, you can trust MEK Homes to get it right.",
    features: [
      "Wall framing & construction",
      "Roof framing & repairs",
      "Load-bearing wall removal",
      "Structural beam installation",
      "Subfloor repairs",
      "Staircase construction",
    ],
    faqs: [
      {
        question: "Do you provide engineering specifications?",
        answer:
          "Yes, for all structural work we engage qualified structural engineers to provide specifications and certifications. This ensures all work meets Australian building standards and is safe and compliant.",
      },
      {
        question: "Can you remove a load-bearing wall?",
        answer:
          "Yes, we regularly remove load-bearing walls to create open-plan living spaces. This requires engineering specifications for replacement beams and supports. We manage the entire process including engineering, permits, and construction.",
      },
      {
        question: "Do you do roof repairs?",
        answer:
          "Yes, we handle all timber roof framing repairs and replacements. This includes rafter repairs, ridge beam replacement, fascia and barge board work, and re-framing damaged sections.",
      },
      {
        question: "Is a building permit required for structural work?",
        answer:
          "Yes, structural work typically requires a building permit. We manage the permit application process and ensure all work is inspected and signed off by a registered building surveyor.",
      },
    ],
    contactFormValue: "structural",
    metaTitle: "Structural Carpentry Melbourne | MEK Homes",
    metaDescription:
      "Expert structural carpentry in Melbourne. Wall framing, roof construction, load-bearing wall removal, and structural repairs by MEK Homes.",
  },
  {
    slug: "doors-windows",
    title: "Doors & Windows",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    ],
    description:
      "Professional installation of interior and exterior doors, windows, and frames. We ensure proper fitting, insulation, and finishing for both new installations and replacements, improving your home's energy efficiency and appearance.",
    longDescription:
      "MEK Homes provides professional door and window installation, replacement, and repair services across Melbourne. Whether you're upgrading to energy-efficient windows, installing new bifold doors to connect indoor and outdoor spaces, or replacing worn-out frames, our carpenters ensure precise fitting and quality finishing. We work with all door and window types including timber, aluminium, and uPVC, and ensure proper insulation, weatherproofing, and security for every installation.",
    features: [
      "Door installation & replacement",
      "Window frame repairs",
      "Bifold & sliding doors",
      "French doors & double doors",
      "Architrave & skirting",
      "Weatherproofing & sealing",
    ],
    faqs: [
      {
        question: "Can you install bifold doors?",
        answer:
          "Yes, we install all types of bifold doors including timber and aluminium. Bifold doors are a great way to open up your living space to the outdoors and we ensure they're properly framed, sealed, and operating smoothly.",
      },
      {
        question: "Do you replace window frames?",
        answer:
          "Yes, we repair and replace timber window frames. We can match existing profiles and finishes to maintain your home's character while improving the function and weatherproofing of your windows.",
      },
      {
        question: "Will new doors and windows improve energy efficiency?",
        answer:
          "Absolutely. Properly fitted doors and windows with good seals and weatherstripping significantly reduce drafts and heat loss, improving your home's energy efficiency and comfort.",
      },
      {
        question: "Can you install a door where there isn't one currently?",
        answer:
          "Yes, we can create new door openings in both internal and external walls. If the wall is load-bearing, we'll arrange engineering specifications and install appropriate structural support.",
      },
    ],
    contactFormValue: "doors-windows",
    metaTitle: "Door & Window Installation Melbourne | MEK Homes",
    metaDescription:
      "Professional door and window installation and replacement in Melbourne. Bifold doors, French doors, window frames, and weatherproofing by MEK Homes.",
  },
  {
    slug: "fencing-gates",
    title: "Fencing & Gates",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
    description:
      "Secure your property with quality timber fencing and gates. We build a range of fence styles from traditional paling fences to modern horizontal slat designs, all built strong and finished to a high standard.",
    longDescription:
      "MEK Homes builds quality timber fences and gates that provide security, privacy, and street appeal for your Melbourne property. We construct a full range of fence styles from classic paling fences to contemporary horizontal slat designs using premium hardwoods like Merbau and treated pine. Every fence we build is constructed to last, with proper footings, quality hardware, and a clean finish. We also build custom garden gates, side gates, and driveway gates to complete your property's boundary.",
    features: [
      "Timber paling fences",
      "Horizontal slat fencing",
      "Merbau & hardwood fences",
      "Garden gates & side gates",
      "Driveway gates",
      "Fence repairs & replacement",
    ],
    faqs: [
      {
        question: "What timber is best for fencing in Melbourne?",
        answer:
          "Treated pine is the most cost-effective option and performs well in Melbourne's climate. For a premium look and greater durability, Merbau hardwood is an excellent choice. We'll recommend the best option based on your budget and style preference.",
      },
      {
        question: "How long does a fence last?",
        answer:
          "A well-built treated pine fence typically lasts 15-20 years, while a Merbau hardwood fence can last 25+ years. Longevity depends on quality of construction, timber treatment, and ongoing maintenance.",
      },
      {
        question: "Do I need a permit to build a fence?",
        answer:
          "Standard residential fences under 2 metres in height generally don't require a permit in Victoria. However, fences over 2 metres or in heritage overlay areas may need approval. We'll advise you on any requirements.",
      },
      {
        question: "Can you replace just part of my existing fence?",
        answer:
          "Yes, we can repair or replace sections of existing fencing. We'll match the style and height of your existing fence as closely as possible for a seamless result.",
      },
    ],
    contactFormValue: "fencing",
    metaTitle: "Timber Fencing & Gates Melbourne | MEK Homes",
    metaDescription:
      "Quality timber fencing and gate construction in Melbourne. Paling fences, horizontal slat designs, Merbau hardwood, and custom gates by MEK Homes.",
  },
  {
    slug: "lockup-and-fix",
    title: "Lockup & Fix",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&q=80",
    ],
    description:
      "Complete lockup and fix carpentry services covering everything from structural framing and roofing through to internal finishing work including skirting, architraves, door hanging, and cabinetry installation.",
    longDescription:
      "MEK Homes provides comprehensive lockup and fix carpentry for new builds, extensions, and renovation projects across Melbourne. Our lockup services cover all structural carpentry required to make your build weatherproof — wall framing, roof framing, external cladding, fascia, and window and door installation. Once the structure is locked up, our fix carpentry team takes over for all internal finishing work — skirting boards, architraves, door hanging, shelving, cabinetry installation, and all final timber detailing. Having one team handle both stages ensures consistency, quality control, and a smoother build timeline.",
    features: [
      "Wall & roof framing",
      "External cladding installation",
      "Fascia & barge boards",
      "Window & door installation",
      "Skirting boards & architraves",
      "Door hanging & hardware",
      "Built-in shelving & cabinetry",
      "Final timber detailing",
    ],
    faqs: [
      {
        question: "What is the difference between lockup and fix carpentry?",
        answer:
          "Lockup carpentry covers all the structural work needed to make a building weatherproof — wall framing, roof framing, external cladding, fascia, and installing windows and doors. Fix carpentry is the internal finishing stage — hanging internal doors, installing skirting boards, architraves, built-in shelving, and cabinetry. Together, they cover the full scope of carpentry in a residential build.",
      },
      {
        question: "Do you handle both stages or just one?",
        answer:
          "We handle both lockup and fix stages, which is a significant advantage. Having the same team across both phases means better quality control, consistent workmanship, and fewer coordination issues. Of course, we can also quote on either stage individually if needed.",
      },
      {
        question: "Can you work with my builder or project manager?",
        answer:
          "Absolutely. We regularly work as carpentry subcontractors alongside builders, project managers, and other trades. We understand the sequencing of a build and coordinate seamlessly with other teams to keep your project on track.",
      },
      {
        question: "What areas do you cover for new builds?",
        answer:
          "We provide lockup and fix carpentry services across all of metropolitan Melbourne and surrounding regions. Whether it's a new home build in the outer suburbs or a renovation in the inner city, we have the team and logistics to service your project.",
      },
    ],
    contactFormValue: "lockup-fix",
    metaTitle: "Lockup & Fix Carpentry Melbourne | MEK Homes",
    metaDescription:
      "Professional lockup and fix carpentry in Melbourne. From structural framing to internal finishing — skirting, architraves, door hanging, and cabinetry by MEK Homes.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
