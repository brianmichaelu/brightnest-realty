import SearchBox from "@/components/SearchBox";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="hero-bg min-h-[620px] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#8ED8FF]">
              Real Estate Made Simple
            </p>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Believe in finding the perfect home, land or investment space
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/90">
              Explore modern and trusted property listings for sale and rent
              across Dar es Salaam and growing locations in Tanzania.
            </p>

            <div className="mt-10">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}