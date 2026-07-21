import Link from "next/link";

export default function Button({ href = "#", variant = "primary", children }) {
  const base = "inline-block font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.03]";
  const variants = {
    primary: "bg-amber hover:bg-amber-dark text-white shadow-sm hover:shadow-md",
    outline: "border border-charcoal/20 text-charcoal hover:border-amber hover:text-amber",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}