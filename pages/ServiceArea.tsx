import { MapPin, Phone } from "lucide-react";

const cities = [
  {
    name: "Venice, FL",
    desc: "Our home base. We serve all of Venice including South Venice, Venice Gardens, and the Island of Venice. Impact windows, shower glass, Eze-Breeze enclosures, and glass repair.",
  },
  {
    name: "Sarasota, FL",
    desc: "Full service coverage across Sarasota including Siesta Key, Palmer Ranch, and Sarasota proper. PGT impact windows and doors, custom glass, and commercial storefront.",
  },
  {
    name: "North Port, FL",
    desc: "Serving all North Port neighborhoods including Bobcat Trail, Heron Creek, and West Villages. Impact windows, impact doors, and Eze-Breeze lanai enclosures.",
  },
  {
    name: "Englewood, FL",
    desc: "Coverage across Englewood including Lemon Bay and Englewood Beach. Full PGT product line installation and residential glass repair.",
  },
  {
    name: "Nokomis, FL",
    desc: "Impact window and door installation, shower glass, and glass repair for Nokomis and Casey Key area homeowners.",
  },
  {
    name: "Osprey, FL",
    desc: "PGT Platinum Dealer services for Osprey including Oaks Preserve and Sorrento Shores. Impact windows, doors, and custom glass.",
  },
  {
    name: "Port Charlotte, FL",
    desc: "Impact window and door installation across Port Charlotte. We serve Charlotte County homeowners with the full PGT WinGuard product line.",
  },
  {
    name: "Rotonda West, FL",
    desc: "Hurricane impact window and door installation for Rotonda West golf community homes. Full PGT product line and Eze-Breeze enclosures.",
  },
];

export default function ServiceArea() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Southwest Florida's Gulf Coast Corridor
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Glass & Impact Window Service Area
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Triple Diamond Glass West Coast serves Venice, Sarasota, North
            Port, Englewood, and surrounding Southwest Florida communities.
            PGT Platinum Dealer services for impact windows, impact doors,
            Eze-Breeze enclosures, shower glass, and glass repair.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-300 transition"
          >
            <Phone size={20} />
            Call (941) 915-1061 — Free Quote
          </a>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Cities We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Based in Venice at 126 Corporation Way Suite B, we cover the full
            Sarasota-Bradenton-Venice-Port Charlotte corridor.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city) => (
              <div
                key={city.name}
                className="p-6 border border-gray-100 rounded-xl shadow-sm flex gap-4"
              >
                <MapPin
                  className="flex-shrink-0 text-amber-400 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#0a1628]">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{city.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Area */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Services Available Throughout Our Service Area
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Impact Windows",
                desc: "PGT WinGuard impact windows installed to Florida hurricane codes. Available in single-hung, double-hung, casement, sliding, and picture configurations.",
                href: "/impact-windows-venice-fl",
              },
              {
                title: "Impact Doors",
                desc: "PGT WinGuard impact entry doors, sliding glass doors, and French doors. Hurricane-rated and energy-efficient for Southwest Florida homes.",
                href: "/impact-doors-venice-fl",
              },
              {
                title: "Eze-Breeze Enclosures",
                desc: "PGT Eze-Breeze vinyl glazing systems for lanais and porches. Transform your outdoor space into a year-round living area.",
                href: "/eze-breeze-enclosures-venice-fl",
              },
              {
                title: "Shower Door Installation",
                desc: "Custom frameless, semi-frameless, and framed shower glass enclosures. Measured, fabricated, and installed to your exact specifications.",
                href: "/shower-door-installation-venice-fl",
              },
              {
                title: "Glass Repair",
                desc: "Residential and commercial glass repair across Southwest Florida. Broken windows, sliding door glass, storefront glass, and mirrors.",
                href: "/glass-repair-venice-fl",
              },
              {
                title: "Commercial Glass",
                desc: "Storefront glass, commercial window replacement, and plate glass installation for Venice and Sarasota area businesses.",
                href: "/commercial-glass-venice-fl",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-lg mb-2 text-[#0a1628]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                
                  href={service.href}
                  className="text-amber-600 font-semibold text-sm hover:text-amber-700"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Based in Venice, Serving Southwest Florida
          </h2>
          <p className="text-gray-700 mb-4">
            Triple Diamond Glass West Coast is located at 126 Corporation Way
            Suite B in Venice, FL 34285 — centrally positioned to serve the
            entire Sarasota-Charlotte County corridor efficiently.
          </p>
          <p className="text-gray-700 mb-4">
            As a certified PGT Platinum Dealer, we install the full line of
            PGT WinGuard impact windows and doors, PGT Eze-Breeze enclosures,
            and PGT non-impact products throughout our service area.
          </p>
          <p className="text-gray-700 mb-8">
            All installations are permitted and inspected to meet local
            building codes. We handle Sarasota County, Charlotte County, and
            city permit requirements so you don't have to.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
              Contact & Location
            </h3>
            <p className="text-gray-700 text-sm mb-1">
              <strong>Address:</strong> 126 Corporation Way Suite B, Venice, FL
              34285
            </p>
            <p className="text-gray-700 text-sm mb-1">
              <strong>Phone:</strong>{" "}
              
                href="tel:9419151061"
                className="text-amber-600 hover:text-amber-700"
              >
                (941) 915-1061
              </a>
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Email:</strong>{" "}
              
                href="mailto:info@triplediamondglassproducts.com"
                className="text-amber-600 hover:text-amber-700"
              >
                info@triplediamondglassproducts.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0a1628] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Serving Your Community in Southwest Florida
          </h2>
          <p className="text-gray-300 mb-8">
            Call Triple Diamond Glass West Coast for a free quote on impact
            windows, impact doors, shower glass, Eze-Breeze enclosures, or
            glass repair anywhere in our service area.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-300 transition"
          >
            <Phone size={20} />
            (941) 915-1061
          </a>
          <p className="text-gray-400 text-sm mt-4">
            126 Corporation Way Suite B, Venice, FL 34285
          </p>
        </div>
      </section>
    </main>
  );
}
