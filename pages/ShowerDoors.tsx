import { Droplets, Ruler, Star, Phone } from "lucide-react";

export default function ShowerDoors() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Custom Glass Installation — Venice, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Shower Door Installation in Venice, FL
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Triple Diamond Glass West Coast designs and installs custom shower
            glass enclosures for homes across Venice, Sarasota, North Port, and
            Englewood. Frameless, semi-frameless, and framed options available.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-300 transition"
          >
            <Phone size={20} />
            Call (941) 915-1061 — Free Quote
          </a>
        </div>
      </section>

      {/* Options */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Shower Glass Options
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every bathroom is different. We measure, fabricate, and install
            custom shower enclosures built to your exact specifications.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Droplets className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Frameless Enclosures</h3>
              <p className="text-gray-600 text-sm">
                Clean, modern look with heavy tempered glass and minimal
                hardware. The most popular choice for Venice and Sarasota
                homeowners remodeling their bathrooms.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Ruler className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">
                Semi-Frameless Enclosures
              </h3>
              <p className="text-gray-600 text-sm">
                Aluminum framing on select edges for added stability while
                maintaining a sleek appearance. A cost-effective middle ground
                between framed and frameless.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Star className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Framed Enclosures</h3>
              <p className="text-gray-600 text-sm">
                Full aluminum framing for maximum durability and a classic look.
                Available in multiple finishes to match your bathroom fixtures
                and hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Our Shower Door Installation Process
          </h2>
          <p className="text-gray-700 mb-4">
            We handle everything from measurement to final installation. Our
            team visits your home, takes precise measurements, and custom
            fabricates your shower enclosure to fit perfectly — no gaps, no
            leaks, no callbacks.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                step: "1",
                title: "Free In-Home Measurement",
                desc: "We come to your Venice or Sarasota home and measure your shower opening precisely. No guessing, no standard sizes.",
              },
              {
                step: "2",
                title: "Custom Fabrication",
                desc: "Your glass is cut and tempered to your exact specifications. We use only quality tempered safety glass that meets Florida building codes.",
              },
              {
                step: "3",
                title: "Professional Installation",
                desc: "Our experienced installers handle everything — hardware mounting, glass setting, sealing, and cleanup. Done right the first time.",
              },
              {
                step: "4",
                title: "Final Inspection",
                desc: "We test operation, check seals, and make sure you're completely satisfied before we leave your home.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-400 text-[#0a1628] rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            
              href="tel:9419151061"
              className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#1a2f4a] transition"
            >
              <Phone size={18} />
              Schedule Your Free Measurement
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Shower Door Installation Service Area
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We install custom shower glass enclosures throughout Southwest
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
                className="bg-gray-50 rounded-lg py-3 px-4 text-sm font-medium text-gray-700 border border-gray-200"
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
            Ready to Upgrade Your Shower?
          </h2>
          <p className="text-gray-300 mb-8">
            Get a free, no-pressure quote from Triple Diamond Glass West Coast —
            Venice's custom glass specialists.
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
