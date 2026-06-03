export default function WhatsAppButton() {
  const message =
    "Hello BrightNest Realty, I am interested in your real estate services.";

  return (
    <a
      href={`https://wa.me/255689824682?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-md bg-[#008DD2] px-6 py-4 font-black text-white shadow-2xl transition hover:scale-105 hover:bg-[#0074B7]"
    >
      WhatsApp
    </a>
  );
}