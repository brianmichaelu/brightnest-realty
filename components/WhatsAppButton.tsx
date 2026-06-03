export default function WhatsAppButton() {
  const message =
    "Hello BrightNest Realty, I am interested in your real estate services.";

  return (
    <a
      href={`https://wa.me/255689824682?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#008DD2] text-xl font-black text-white shadow-2xl transition hover:scale-105 hover:bg-[#0074B7]"
    >
      W
    </a>
  );
}
