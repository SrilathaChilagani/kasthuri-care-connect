import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">K</span>
              </div>
              <span className="font-display font-bold text-lg text-background">Kasthuri Hospitals</span>
            </div>
            <p className="text-sm font-body text-background/60 leading-relaxed">
              Committed to providing exceptional healthcare with compassion and advanced medical expertise since 1995.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About Us", "Services", "Doctors", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(" ", "")}`} className="block text-sm font-body text-background/60 hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Emergency</h4>
            <p className="text-sm font-body text-background/60">For emergencies, call us anytime:</p>
            <a href="tel:+911234567890" className="text-primary font-body font-semibold text-lg block mt-2">
              +91 123 456 7890
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-sm font-body text-background/40 flex items-center justify-center gap-1">
            © 2025 Kasthuri Hospitals. Made with <Heart className="w-3 h-3 text-primary" /> for better health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
