export default function ContactPage() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="font-black uppercase tracking-[0.25em] text-[#d91c8f]">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-black text-[#08112f] md:text-6xl">
            Talk to BrightNest Realty
          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            Send your inquiry about buying, renting, listing or viewing a
            property. You can contact us by WhatsApp, email or the form.
          </p>

          <div className="mt-8 grid gap-4">
            <a
              href="https://wa.me/255689824682"
              target="_blank"
              className="rounded-3xl bg-[#e7ff3c] p-6 text-xl font-black text-[#08112f]"
            >
              WhatsApp: +255 689 824 682
            </a>

            <a
              href="mailto:lubrun.enterprises@gmail.com"
              className="rounded-3xl bg-[#08112f] p-6 text-xl font-black text-white"
            >
              Email: lubrun.enterprises@gmail.com
            </a>
          </div>
        </div>

        <form className="rounded-[2rem] bg-[#fffbea] p-8 shadow-sm">
          <div className="grid gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold outline-none"
            />

            <input
              type="email"
              placeholder="Your email"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold outline-none"
            />

            <input
              type="text"
              placeholder="Phone number"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold outline-none"
            />

            <select className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold outline-none">
              <option>I want to buy</option>
              <option>I want to rent</option>
              <option>I want to list my property</option>
              <option>I need more information</option>
            </select>

            <textarea
              rows={6}
              placeholder="Write your message"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold outline-none"
            />

            <button
              type="submit"
              className="rounded-2xl bg-[#d91c8f] px-5 py-4 font-black text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}