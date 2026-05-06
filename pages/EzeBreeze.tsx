import { Wind, Sun, Shield, Phone } from "lucide-react";

export default function EzeBreeze() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            PGT Platinum Dealer — Venice, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Eze-Breeze Enclosures in Venice, FL
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Triple Diamond Glass West Coast installs PGT Eze-Breeze vinyl
            glazing systems that transform your lanai or porch into a
            year-round living space. Open in summer, enclosed in winter —
            without the cost of a full glass enclosure.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-300 transition"
          >
            <Phone size={20} />
            Call (941) 915-1061 — Free Quote
          </a>
        </div>
      </section>

      {/* What is Eze-Breeze */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            What Is an Eze-Breeze Enclosure?
          </h2>
          <p className="text-gray-700 mb-4">
            Eze-Breeze is a PGT Innovations product — a four-track vinyl
            glazing system designed specifically for Florida lanais, porches,
            and screened enclosures. The panels slide open and closed,
            giving you full control over ventilation and weather protection.
          </p>
          <p className="text-gray-700 mb-4">
            Unlike traditional screen enclosures, Eze-Breeze panels block
            wind-driven rain, reduce noise, and provide a thermal barrier —
            extending the usability of your outdoor space through Florida's
            rainy season and cooler winter months.
          </p>
          <p className="text-gray-700 mb-8">
            As a certified PGT Platinum Dealer, Triple Diamond Glass West
            Coast installs Eze-Breeze systems with factory-trained expertise
            and full manufacturer backing.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Benefits of Eze-Breeze for Venice Homeowners
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Southwest Florida's climate is perfect for Eze-Breeze — enjoy
            your lanai 365 days a year.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm bg-white">
              <Wind className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">
                Open or Closed — Your Choice
              </h3>
              <p className="text-gray-600 text-sm">
                Panels slide up to 75% open for full ventilation on beautiful
                Venice days, or close completely to block wind-driven rain
                during storms.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm bg-white">
              <Sun className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">
                Year-Round Outdoor Living
              </h3>
              <p className="text-gray-600 text-sm">
                Extend your living space without the cost of a full addition.
                Eze-Breeze turns a seasonal screened porch into a comfortable
                room you use all year.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm bg-white">
              <Shield className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">
                Weather & UV Protection
              </h3>
              <p className="text-gray-600 text-sm">
                Blocks wind-driven rain, reduces UV exposure, and protects
                your outdoor furniture from Florida's harsh sun and sudden
                afternoon storms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why TDG */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Triple Diamond Glass West Coast?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "PGT Platinum Dealer",
                desc: "The highest dealer designation PGT awards. Our installers are certified directly by PGT Innovations — the manufacturer of Eze-Breeze.",
              },
              {
                title: "Local Venice Expertise",
                desc: "Based at 126 Corporation Way in Venice. We know Sarasota County building codes, HOA requirements, and Florida climate conditions.",
              },
              {
                title: "Custom Fabrication",
                desc: "Every Eze-Breeze system is measured and fabricated to fit your specific lanai or porch opening. No standard sizes, no gaps.",
              },
              {
                title: "Full Service Area",
                desc: "We serve Venice, Sarasota, North Port, Englewood, and the surrounding Southwest Florida corridor.",
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
          <div className="mt-10">
            
              href="tel:9419151061"
              className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#1a2f4a] transition"
            >
              <Phone size={18} />
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Eze-Breeze Installation Service Area
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We install PGT Eze-Breeze enclosures throughout Southwest
            Florida's Gulf Coast corridor.
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
            Ready to Transform Your Lanai?
          </h2>
          <p className="text-gray-300 mb-8">
            Get a free, no-pressure quote from Triple Diamond Glass West
            Coast — Venice's PGT Platinum Dealer.
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
