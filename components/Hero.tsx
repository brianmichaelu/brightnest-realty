import SearchBox from "@/components/SearchBox";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="hero-bg min-h-[680px] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#8ED8FF]">
              Real Estate Made Simple
            </p>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              Find your perfect home, land or investment property
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/90">
              Browse trusted property listings for sale and rent across Dar es
              Salaam and fast-growing locations in Tanzania.
            </p>

            <div className="mt-10">
              <SearchBox />
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-white/85">
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                Houses
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                Apartments
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                Land
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                Commercial Spaces
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
