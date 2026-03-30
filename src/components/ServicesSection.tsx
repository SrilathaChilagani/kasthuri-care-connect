import { motion } from "framer-motion";
import { Heart, Brain, Baby, Bone, Eye, Stethoscope } from "lucide-react";

const services = [
  { icon: Heart, title: "Cardiology", description: "Advanced cardiac care with state-of-the-art catheterization lab and cardiac surgery." },
  { icon: Brain, title: "Neurology", description: "Comprehensive neurological diagnostics and treatment for brain and spine conditions." },
  { icon: Baby, title: "Pediatrics", description: "Specialized children's healthcare with a caring and child-friendly environment." },
  { icon: Bone, title: "Orthopedics", description: "Joint replacement, sports medicine, and advanced trauma care for bone health." },
  { icon: Eye, title: "Ophthalmology", description: "Complete eye care services including LASIK, cataract surgery, and retina treatments." },
  { icon: Stethoscope, title: "General Medicine", description: "Comprehensive primary care with experienced physicians for all your health needs." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-body font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Departments & Specialties
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We offer a wide range of medical specialties backed by experienced doctors and modern infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
