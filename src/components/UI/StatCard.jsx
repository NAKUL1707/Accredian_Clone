export default function StatCard({ number, label }) {
  return (
    <div className="text-center px-6">
      <p className="text-4xl md:text-5xl font-bold text-amber mb-2">{number}</p>
      <p className="text-sm text-muted uppercase tracking-wide">{label}</p>
    </div>
  );
}