export default function SectionHeading({ preTitle, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-12 opacity-0 animate-fade-up">
      {preTitle && (
        <p className="text-sm font-semibold text-amber uppercase tracking-wide mb-2">
          {preTitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
        {title} <span className="text-amber">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-muted mt-3 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}