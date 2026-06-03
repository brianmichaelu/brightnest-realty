export default function WhatsAppButton() {
  const message =
    "Hello BrightNest Realty, I am interested in your real estate services.";

  return (
    <a
      href={`https://wa.me/255689824682?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#13d8c3] px-6 py-4 font-black text-[#08112f] shadow-2xl transition hover:scale-105"
    >
      WhatsApp
    </a>
  );
}