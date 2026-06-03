import SearchBox from "@/components/SearchBox";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="hero-bg flex min-h-[calc(100vh-86px)] items-center px-5 py-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#8ED8FF]">
              Real Estate Made Simple
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Find your perfect home, land or investment property
            </h1>

            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/90">
              Browse trusted property listings for sale and rent across Dar es
              Salaam and fast-growing locations in Tanzania.
            </p>

            <div className="mt-6">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
