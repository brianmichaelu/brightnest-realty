export default function AboutPage() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-black uppercase tracking-[0.25em] text-[#d91c8f]">
          About BrightNest
        </p>

        <h1 className="mt-4 text-5xl font-black text-[#08112f] md:text-6xl">
          A modern real estate platform for beautiful property presentation
        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-600">
          BrightNest Realty is designed to help property businesses present
          homes, apartments, villas, land and commercial spaces in a clean,
          bright and professional way. The website makes it easy for visitors to
          browse listings, view details and contact the business directly.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Clean property listings",
            "Mobile-friendly pages",
            "Direct WhatsApp inquiries",
          ].map((item) => (
            <div key={item} className="rounded-3xl bg-[#fffbea] p-8">
              <h2 className="text-2xl font-black text-[#08112f]">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}