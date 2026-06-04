export default function ContactPage() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-black uppercase tracking-[0.25em] text-[#0074B7]">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight text-[#1E293B] md:text-[52px]">
            Talk to BrightNest Realty
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Send your inquiry about buying, renting, listing or viewing a
            property. You can contact us directly through WhatsApp, email or the
            inquiry form.
          </p>

          <div className="mt-8 grid gap-4">
            <a
              href="https://wa.me/255689824682?text=Hello BrightNest Realty, I would like to ask about your real estate services."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#003B5C] p-6 text-xl font-black text-white transition hover:bg-[#008DD2]"
            >
              WhatsApp: +255 689 824 682
            </a>

            <a
              href="mailto:lubrun.enterprises@gmail.com"
              className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-6 text-xl font-black text-[#003B5C] transition hover:border-[#008DD2] hover:text-[#008DD2]"
            >
              Email: lubrun.enterprises@gmail.com
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-[#1E293B]">
              Office Hours
            </h2>

            <div className="mt-4 grid gap-3 text-slate-600">
              <p>
                <span className="font-black text-[#003B5C]">Monday - Friday:</span>{" "}
                8:30 AM - 6:00 PM
              </p>
              <p>
                <span className="font-black text-[#003B5C]">Saturday:</span>{" "}
                9:00 AM - 3:00 PM
              </p>
              <p>
                <span className="font-black text-[#003B5C]">Sunday:</span>{" "}
                By appointment
              </p>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-6 shadow-sm md:p-8">
          <div className="mb-7">
            <p className="font-black uppercase tracking-[0.22em] text-[#0074B7]">
              Send Inquiry
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#1E293B]">
              Tell us what you need
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Fill in your details and BrightNest Realty will get back to you.
            </p>
          </div>

          <div className="grid gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <input
              type="email"
              placeholder="Your email"
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <input
              type="text"
              placeholder="Phone number"
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <select className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none focus:border-[#008DD2]">
              <option>I want to buy</option>
              <option>I want to rent</option>
              <option>I want to list my property</option>
              <option>I need more information</option>
            </select>

            <textarea
              rows={6}
              placeholder="Write your message"
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <button
              type="submit"
              className="rounded-md bg-[#008DD2] px-5 py-4 font-black text-white transition hover:bg-[#0074B7]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
