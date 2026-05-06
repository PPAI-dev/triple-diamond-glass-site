import { Shield, Wind, Star, Phone } from "lucide-react";

export default function ImpactWindows() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            PGT Platinum Dealer — Venice, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Impact Windows in Venice, FL
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Triple Diamond Glass West Coast installs PGT WinGuard impact windows
            built to withstand Category 5 hurricanes. Serving Venice, Sarasota,
            North Port, and Englewood since day one.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-300 transition"
          >
            <Phone size={20} />
            Call (941) 915-1061 — Free Quote
          </a>
        </div>
      </section>

      {/* Why Impact Windows */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Impact Windows in Venice, FL?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Venice sits directly in Florida's hurricane corridor. Standard
            windows fail during tropical storms — impact windows don't.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Shield className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Hurricane Protection</h3>
              <p className="text-gray-600 text-sm">
                PGT WinGuard laminated glass resists wind-borne debris and
                maintains structural integrity through Category 5 storms.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Wind className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Energy Efficiency</h3>
              <p className="text-gray-600 text-sm">
                Insulated impact glass reduces heat transfer, lowering your AC
                load and energy bills year-round in Southwest Florida's climate.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Star className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Insurance Discounts</h3>
              <p className="text-gray-600 text-sm">
                Florida homeowners with certified impact windows typically
                qualify for significant homeowner's insurance premium reductions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PGT Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            PGT WinGuard Impact Windows — Installed by a Platinum Dealer
          </h2>
          <p className="text-gray-700 mb-4">
            Triple Diamond Glass West Coast is a certified PGT Platinum Dealer —
            the highest dealer designation PGT awards. That means our installers
            are trained and certified directly by PGT Innovations, Florida's
            leading impact window manufacturer.
          </p>
          <p className="text-gray-700 mb-4">
            PGT WinGuard windows are engineered and tested to meet Florida's
            strictest building codes, including the High Velocity Hurricane Zone
            (HVHZ) requirements. Every unit features laminated glass bonded with
            a durable interlayer — so even when glass is stressed, it stays in
            the frame.
          </p>
          <p className="text-gray-700 mb-8">
            Available in single-hung, double-hung, casement, sliding, and
            picture configurations to fit any Venice or Sarasota home.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#1a2f4a] transition"
          >
            <Phone size={18} />
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Impact Window Installation Service Area
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We install PGT impact windows throughout Southwest Florida's Gulf
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
            Ready to Protect Your Venice Home?
          </h2>
          <p className="text-gray-300 mb-8">
            Get a free, no-pressure quote from Triple Diamond Glass West Coast —
            Venice's PGT Platinum Dealer.
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
