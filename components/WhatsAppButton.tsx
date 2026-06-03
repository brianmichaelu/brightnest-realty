export default function WhatsAppButton() {
  const message =
    "Hello BrightNest Realty, I am interested in your real estate services.";

  return (
    <a
      href={`https://wa.me/255689824682?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 rounded-md bg-[#008DD2] px-4 py-3 text-xs font-black text-white shadow-2xl transition hover:scale-105 hover:bg-[#0074B7] md:bottom-6 md:right-6 md:px-5 md:py-3 md:text-sm"
    >
      WhatsApp
    </a>
  );
}
