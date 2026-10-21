const footerLinks = {
  'Club': ['Home', 'About', 'History', 'Members'],
  'Activities': ['Sports', 'Festivals', 'Service'],
  'Connect': ['Contact Us', 'Join Now', 'Gallery'],
}

export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left: CTA text */}
          <div>
            <h2 className="text-5xl sm:text-6xl font-black leading-tight">
              Come and<br />
              <span className="italic font-light">play with us.</span>
            </h2>
          </div>

          {/* Right: Footer links */}
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-3">
                  {heading}
                </p>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-orange-400 px-4 sm:px-8 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto text-xs opacity-70">
        <span>© {new Date().getFullYear()} Ankuran Youth Club. All rights reserved.</span>
        <span>+91 XXXXX XXXXX</span>
      </div>
    </footer>
  )
}
