import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  const message = `Hello BrightNest Realty, I am interested in this property: ${property.title} - ${property.location}`;

  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/properties"
          className="mb-6 inline-flex rounded-full bg-slate-100 px-5 py-3 font-black text-[#08112f]"
        >
          ← Back to properties
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="relative h-[520px] overflow-hidden rounded-[2rem]">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-8">
              <p className="font-black uppercase tracking-[0.25em] text-[#d91c8f]">
                {property.status}
              </p>
              <h1 className="mt-3 text-4xl font-black text-[#08112f] md:text-6xl">
                {property.title}
              </h1>
              <p className="mt-4 text-xl font-bold text-slate-500">
                {property.location}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                <div className="rounded-3xl bg-[#fffbea] p-6">
                  <p className="text-sm font-black uppercase text-slate-400">
                    Price
                  </p>
                  <p className="mt-2 font-black">{property.price}</p>
                </div>

                <div className="rounded-3xl bg-[#fffbea] p-6">
                  <p className="text-sm font-black uppercase text-slate-400">
                    Beds
                  </p>
                  <p className="mt-2 font-black">{property.beds}</p>
                </div>

                <div className="rounded-3xl bg-[#fffbea] p-6">
                  <p className="text-sm font-black uppercase text-slate-400">
                    Baths
                  </p>
                  <p className="mt-2 font-black">{property.baths}</p>
                </div>

                <div className="rounded-3xl bg-[#fffbea] p-6">
                  <p className="text-sm font-black uppercase text-slate-400">
                    Size
                  </p>
                  <p className="mt-2 font-black">{property.size}</p>
                </div>
              </div>

              <div className="mt-8 rounded-[2rem] bg-slate-50 p-8">
                <h2 className="text-3xl font-black text-[#08112f]">
                  Property Description
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {property.description}
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[2rem] bg-[#08112f] p-8 text-white lg:sticky lg:top-28">
            <h2 className="text-3xl font-black">Interested?</h2>
            <p className="mt-4 leading-8 text-white/70">
              Contact BrightNest Realty directly for viewing, price discussion
              or more details about this property.
            </p>

            <a
              href={`https://wa.me/255689824682?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex justify-center rounded-2xl bg-[#13d8c3] px-5 py-4 font-black text-[#08112f]"
            >
              WhatsApp Us
            </a>

            <a
              href={`mailto:lubrun.enterprises@gmail.com?subject=Property Inquiry: ${property.title}`}
              className="mt-4 flex justify-center rounded-2xl border border-white/20 px-5 py-4 font-black text-white"
            >
              Email Inquiry
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}