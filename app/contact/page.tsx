"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactPage() {
 const [defaultInquiryType, setDefaultInquiryType] = useState("I want to buy");
const [inquiryType, setInquiryType] = useState("I want to buy");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const requestType = params.get("type");

  if (requestType === "list-property") {
    setDefaultInquiryType("I want to list my property");
    setInquiryType("I want to list my property");
  }
}, []);
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xojzqrng", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setInquiryType(defaultInquiryType);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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
                <span className="font-black text-[#003B5C]">
                  Monday - Friday:
                </span>{" "}
                8:30 AM - 6:00 PM
              </p>
              <p>
                <span className="font-black text-[#003B5C]">Saturday:</span>{" "}
                9:00 AM - 3:00 PM
              </p>
              <p>
                <span className="font-black text-[#003B5C]">Sunday:</span> By
                appointment
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-6 shadow-sm md:p-8"
        >
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

          <input
            type="hidden"
            name="_subject"
            value={
              inquiryType === "I want to list my property"
                ? "New BrightNest Property Listing Request"
                : "New BrightNest Realty Inquiry"
            }
          />

          <div className="grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <select
              name="inquiryType"
              value={inquiryType}
              onChange={(event) => setInquiryType(event.target.value)}
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none focus:border-[#008DD2]"
            >
              <option>I want to buy</option>
              <option>I want to rent</option>
              <option>I want to list my property</option>
              <option>I need more information</option>
            </select>

            {inquiryType === "I want to list my property" && (
              <>
                <input
                  type="text"
                  name="propertyLocation"
                  placeholder="Property location, example: Masaki, Tegeta, Bagamoyo"
                  className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
                />

                <input
                  type="text"
                  name="propertyType"
                  placeholder="Property type, example: House, Apartment, Land"
                  className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
                />

                <input
                  type="text"
                  name="expectedPrice"
                  placeholder="Expected price or rent"
                  className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
                />
              </>
            )}

            <textarea
              name="message"
              rows={6}
              placeholder={
                inquiryType === "I want to list my property"
                  ? "Tell us about the property you want to list"
                  : "Write your message"
              }
              required
              className="rounded-md border border-slate-200 bg-white px-5 py-4 font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-[#008DD2] px-5 py-4 font-black text-white transition hover:bg-[#0074B7] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="rounded-md bg-green-50 px-5 py-4 font-bold text-green-700">
                Message sent successfully. We will get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-md bg-red-50 px-5 py-4 font-bold text-red-700">
                Message could not be sent. Please try again or contact us on
                WhatsApp.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
