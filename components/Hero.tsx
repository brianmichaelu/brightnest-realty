import SearchBox from "@/components/SearchBox";

export default function Hero() {
  return (
    <section className="bg-white px-4 py-6">
      <div className="hero-bg mx-auto min-h-[650px] max-w-7xl overflow-hidden rounded-[2rem] px-5 py-20 shadow-lg md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-4 rounded-full bg-white/15 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-white backdrop-blur">
            Real Estate Made Simple
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Believe in finding the perfect home, land or investment space
          </h1>

          <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/90">
            Explore bright, modern and trusted property listings for sale and
            rent across Dar es Salaam and growing locations in Tanzania.
          </p>

          <div className="mt-12 w-full">
            <SearchBox />
          </div>
        </div>
      </div>
    </section>
  );
}