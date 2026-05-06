import { Shield, Lock, Star, Phone } from "lucide-react";

export default function ImpactDoors() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            PGT Platinum Dealer — Venice, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Impact Doors in Venice, FL
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Triple Diamond Glass West Coast installs PGT WinGuard impact doors
            — entry doors, sliding glass doors, and French doors — built to
            Florida's strictest hurricane codes. Serving Venice, Sarasota,
            North Port, and Englewood.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-300 transition"
          >
            <Phone size={20} />
            Call (941) 915-1061 — Free Quote
          </a>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Impact Door Options
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every door we install is impact-rated, hurricane-tested, and
            certified to meet Florida building codes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Shield className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Impact Entry Doors</h3>
              <p className="text-gray-600 text-sm">
                PGT vinyl and aluminum impact entry doors in a wide range of
                styles and finishes. Hurricane-rated and energy-efficient for
                Venice and Sarasota homes.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Lock className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">
                Impact Sliding Glass Doors
              </h3>
              <p className="text-gray-600 text-sm">
                PGT WinGuard sliding glass doors combine storm protection with
                smooth operation and energy efficiency. Available in 2, 3, and
                4-panel configurations.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Star className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Impact French Doors</h3>
              <p className="text-gray-600 text-sm">
                PGT impact-rated French doors for a classic aesthetic with full
                hurricane protection. Hinged and sliding configurations
                available for patios and pool areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PGT Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            PGT WinGuard Impact Doors — Installed by a Platinum Dealer
          </h2>
          <p className="text-gray-700 mb-4">
            Triple Diamond Glass West Coast is a certified PGT Platinum Dealer
            — the highest dealer designation PGT Innovations awards. Our
            installers are trained and certified directly by PGT, Florida's
            leading impact door and window manufacturer.
          </p>
          <p className="text-gray-700 mb-4">
            PGT WinGuard doors are engineered to meet Florida's High Velocity
            Hurricane Zone (HVHZ) requirements — the most stringent hurricane
            protection standard in the country. Laminated glass with a durable
            interlayer keeps the door intact even under extreme impact.
          </p>
          <p className="text-gray-700 mb-8">
            Every door we install is measured to your exact opening, properly
            flashed and sealed, and inspected to ensure it meets Sarasota
            County permit requirements.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#1a2f4a] transition"
          >
            <Phone size={18} />
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Triple Diamond Glass West Coast?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "PGT Platinum Dealer Status",
                desc: "The highest certification PGT awards. Means factory-trained installers, access to the full PGT product line, and manufacturer-backed warranty support.",
              },
              {
                title: "Local Venice Operation",
                desc: "We're based at 126 Corporation Way in Venice. We know Sarasota County building codes, permit requirements, and HOA restrictions inside and out.",
              },
              {
                title: "Hurricane Code Compliance",
                desc: "Every door we install is permitted and inspected to meet Florida building codes. We handle the paperwork so you don't have to.",
              },
              {
                title: "Insurance Premium Reduction",
                desc: "Impact-rated doors certified to Florida codes typically qualify your home for significant homeowner's insurance discounts.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <h3 className="font-bold text-lg mb-2 text-[#0a1628]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Impact Door Installation Service Area
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We install PGT impact doors throughout Southwest Florida's Gulf
            Coast corridor.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Venice, FL",
              "Sarasota, FL",
              "North Port, FL",
              "Englewood, FL",
              "Nokomis, FL",
              "Osprey, FL",
              "Port Charlotte, FL",
              "Rotonda West, FL",
            ].map((city) => (
              <div
                key={city}
                className="bg-white rounded-lg py-3 px-4 text-sm font-medium text-gray-700 border border-gray-200"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0a1628] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Protect Your Home's Entry Points?
          </h2>
          <p className="text-gray-300 mb-8">
            Get a free, no-pressure quote from Triple Diamond Glass West Coast
            — Venice's PGT Platinum Dealer.
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
