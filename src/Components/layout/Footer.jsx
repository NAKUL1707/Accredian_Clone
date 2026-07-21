import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-charcoal/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-charcoal/10">
          {/* Logo + socials */}
          <div>
            <p className="text-2xl font-bold text-charcoal mb-3">accredian</p>
            <div className="flex gap-4">
              {["Facebook", "LinkedIn", "Twitter", "Instagram", "YouTube"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  aria-label={social}
                  className="text-charcoal/60 hover:text-amber transition-colors duration-200 text-sm"
                >
                  {social[0]}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="font-semibold text-charcoal mb-3">Accredian</p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li><Link href="#" className="hover:text-amber transition-colors duration-200">About</Link></li>
                <li><Link href="#" className="hover:text-amber transition-colors duration-200">Blog</Link></li>
                <li><Link href="#" className="hover:text-amber transition-colors duration-200">Why Accredian</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-charcoal mb-3">Contact Us</p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>enterprise@accredian.com</li>
                <li>4th Floor, 25Q, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-charcoal/50 pt-6">
          © 2026 Accredian. A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}