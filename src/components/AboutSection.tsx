import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "NABH Accredited Hospital",
  "100+ Bed Multi-Specialty Facility",
  "Advanced Diagnostic Labs",
  "24/7 Pharmacy & Emergency",
  "Cashless Insurance Processing",
  "Patient-Centered Care Approach",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2" />
              <img
                src="/about-hospital.jpg"
                alt="Kasthuri Hospitals building and facilities"
                className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-body font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              A Legacy of Healing & Care
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Established in 1995, Kasthuri Hospitals has been a pillar of quality healthcare 
              in the community. What started as a small clinic has grown into a full-fledged 
              multi-specialty hospital with cutting-edge technology and a team of dedicated professionals.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              We believe that every patient deserves world-class healthcare delivered with warmth 
              and compassion. Our mission is to make advanced medical care accessible and affordable.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
