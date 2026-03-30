import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">K</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg text-foreground leading-none block">Kasthuri</span>
              <span className="text-xs text-muted-foreground font-body">Hospitals</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 123 456 7890
            </a>
            <Button size="sm">Book Appointment</Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="mt-2 w-fit">Book Appointment</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
