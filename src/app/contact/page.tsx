import ContactFormEmbed from "@/components/ContactFormEmbed";

export const metadata = {
  title: "Contact Us | MEK Homes - Carpentry & Renovations Melbourne",
  description:
    "Contact MEK Homes for a free quote on carpentry and renovation services in Melbourne. Call, email, or fill out our online form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Contact Us
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Ready to start your project? Contact MEK Homes for a free,
            no-obligation quote. We&apos;d love to hear about your carpentry or
            renovation needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900">
                Request a Free Quote
              </h2>
              <p className="mt-2 text-slate-500">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <div className="mt-8">
                <ContactFormEmbed />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-slate-50 p-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Prefer to get in touch directly? Reach out via phone or email.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Phone
                      </p>
                      <a
                        href="tel:0400000000"
                        className="text-sm text-gold-600 hover:text-gold-700"
                      >
                        0400 000 000
                      </a>
                      <p className="mt-1 text-xs text-slate-400">
                        Mon-Fri 7am - 5pm | Sat 8am - 1pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Email
                      </p>
                      <a
                        href="mailto:info@mekhomes.com.au"
                        className="text-sm text-gold-600 hover:text-gold-700"
                      >
                        info@mekhomes.com.au
                      </a>
                      <p className="mt-1 text-xs text-slate-400">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Location
                      </p>
                      <p className="text-sm text-slate-600">
                        Melbourne, Victoria
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Servicing all Melbourne suburbs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-8">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Business Hours
                  </h3>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monday - Friday</span>
                      <span className="font-medium text-slate-700">
                        7:00am - 5:00pm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Saturday</span>
                      <span className="font-medium text-slate-700">
                        8:00am - 1:00pm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Sunday</span>
                      <span className="font-medium text-slate-700">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-gold-50 p-4">
                  <p className="text-sm font-medium text-gold-800">
                    Free Quotes
                  </p>
                  <p className="mt-1 text-xs text-gold-700">
                    All quotes are free with no obligation. We&apos;ll visit
                    your property, discuss your needs, and provide a detailed
                    written quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
