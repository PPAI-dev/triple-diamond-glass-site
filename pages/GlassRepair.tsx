import { Wrench, Clock, Shield, Phone } from "lucide-react";

export default function GlassRepair() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-[#0a1628] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Residential & Commercial — Venice, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Glass Repair in Venice, FL
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Triple Diamond Glass West Coast handles residential and commercial
            glass repair across Venice, Sarasota, North Port, and Englewood.
            Broken windows, sliding door glass, storefront glass, and mirrors
            — we fix it right.
          </p>
          
            href="tel:9419151061"
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0a1628] font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-300 transition"
          >
            <Phone size={20} />
            Call (941) 915-1061 — Free Quote
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Glass Repair Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From a single broken pane to full storefront replacement — we
            handle all glass repair needs in Southwest Florida.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Wrench className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Residential Glass Repair</h3>
              <p className="text-gray-600 text-sm">
                Broken window panes, fogged insulated glass units, cracked
                sliding door glass, and damaged mirrors. We measure, cut, and
                install replacement glass on-site.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Clock className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">
                Storefront & Commercial Glass
              </h3>
              <p className="text-gray-600 text-sm">
                Broken storefront doors, commercial window replacement, and
                plate glass repair for Venice and Sarasota businesses. We work
                around your schedule to minimize downtime.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
              <Shield className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">
                Sliding Door Glass Replacement
              </h3>
              <p className="text-gray-600 text-sm">
                Cracked or shattered sliding glass door panels replaced with
                tempered safety glass. We stock common sizes and can custom cut
                for non-standard openings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Local Glass Repair You Can Count On
          </h2>
          <p className="text-gray-700 mb-4">
            Triple Diamond Glass West Coast is a Venice-based glass shop
            serving the Sarasota-Bradenton corridor. When you call us for glass
            repair, you're talking to a local team — not a call center. We
            show up on time, give you a straight quote, and get the job done.
          </p>
          <p className="text-gray-700 mb-4">
            We carry tempered safety glass, laminated glass, insulated glass
            units, and specialty glass in our inventory. Most standard
            residential repairs can be completed in a single visit.
          </p>
          <p className="text-gray-700 mb-8">
            For commercial clients, we offer priority scheduling and can board
            up broken storefront glass same-day while your replacement glass
            is being fabricated.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                title: "Broken Window Panes",
                desc: "Single and double pane residential window glass replacement. We match your existing glass type and thickness.",
              },
              {
                title: "Fogged Insulated Units",
                desc: "Moisture between panes means your seal has failed. We replace the insulated glass unit without replacing the entire window frame.",
              },
              {
                title: "Mirror Replacement",
                desc: "Bathroom mirrors, decorative mirrors, and custom mirror installations for Venice and Sarasota homes.",
              },
              {
                title: "Storm Damage Repair",
                desc: "Fast glass repair after hurricane or tropical storm damage. We work with insurance adjusters and can provide documentation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
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
              Call for a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Glass Repair Service Area
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We provide residential and commercial glass repair throughout
            Southwest Florida's Gulf Coast corridor.
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
            Need Glass Repair in Venice or Sarasota?
          </h2>
          <p className="text-gray-300 mb-8">
            Call Triple Diamond Glass West Coast for a free quote. Local team,
            fast turnaround, straight pricing.
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
