import SearchBox from "@/components/SearchBox";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="hero-bg flex min-h-[calc(100vh-86px)] items-center px-5 py-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#8ED8FF] md:text-sm">
              Real Estate Made Simple
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Find your perfect home, land or investment property
            </h1>

            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/90 md:text-lg">
              Browse trusted property listings for sale and rent across Dar es
              Salaam and fast-growing locations in Tanzania.
            </p>

            <div className="mt-8">
              <SearchBox />
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-white/85 md:text-sm">
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
