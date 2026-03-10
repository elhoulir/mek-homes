import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import ContactFormEmbed from "@/components/ContactFormEmbed";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us | MEK Homes - Carpentry & Renovations Melbourne",
  description:
    "Contact MEK Homes for a free quote on carpentry and renovation services in Melbourne. Call, email, or fill out our online form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <h1 className="font-heading text-4xl font-bold md:text-5xl text-white">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-white/50">
            We&apos;d love to hear about your project
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-semibold mb-6 text-white">
                Send Us a Message
              </h2>
              <ContactFormEmbed />
              <div className="flex items-center gap-2 mt-4 text-sm text-white/50">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Average response time: under 2 hours</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-[#141414] rounded-2xl p-8">
                <h3 className="font-heading font-semibold mb-6 text-white">
                  Contact Details
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white/50">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Phone</p>
                      <a
                        href="tel:0400000000"
                        className="font-medium text-white hover:text-white/70 transition-colors"
                      >
                        0400 000 000
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white/50">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Email</p>
                      <a
                        href="mailto:info@mekhomes.com.au"
                        className="font-medium text-white hover:text-white/70 transition-colors"
                      >
                        info@mekhomes.com.au
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white/50">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Location</p>
                      <p className="font-medium text-white">Melbourne, Victoria</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white/50">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Business Hours</p>
                      <div className="mt-1 space-y-0.5 text-sm">
                        <p className="font-medium text-white">Monday – Friday: 7:00 AM – 5:00 PM</p>
                        <p className="font-medium text-white">Saturday: 8:00 AM – 2:00 PM</p>
                        <p className="font-medium text-white/50">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 my-6" />

                {/* MEK Guarantee */}
                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-5 w-5 text-white/50" />
                    <p className="font-medium font-heading text-white">Licensed &amp; Fully Insured</p>
                  </div>
                  <p className="text-sm text-white/50">
                    All quotes are completely free with zero obligation. We evaluate your project meticulously to provide honest, accurate pricing with a quality guarantee on every job.
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
