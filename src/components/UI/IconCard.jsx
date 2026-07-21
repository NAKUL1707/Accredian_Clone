export default function IconCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-charcoal/10 rounded-xl p-6 text-center hover:shadow-md hover:scale-[1.02] transition-all duration-200">
      <div className="mb-3 flex justify-center items-center text-charcoal">
        <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      </div>
      <p className="font-semibold text-charcoal text-sm">{title}</p>
      {desc && <p className="text-xs text-muted mt-2">{desc}</p>}
    </div>
  );
}