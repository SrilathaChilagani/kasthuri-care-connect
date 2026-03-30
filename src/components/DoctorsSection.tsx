import { motion } from "framer-motion";

const doctors = [
  { name: "Dr. Ramesh Kumar", specialty: "Cardiology", experience: "20+ years", image: "/doctor-1.jpg" },
  { name: "Dr. Priya Sharma", specialty: "Neurology", experience: "15+ years", image: "/doctor-2.jpg" },
  { name: "Dr. Suresh Babu", specialty: "Orthopedics", experience: "18+ years", image: "/doctor-3.jpg" },
  { name: "Dr. Meena Lakshmi", specialty: "Pediatrics", experience: "12+ years", image: "/doctor-4.jpg" },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-body font-semibold uppercase tracking-wider">Our Team</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Meet Our Specialists
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Our team of highly qualified and experienced doctors are dedicated to providing you the best care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="h-56 bg-muted overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                    const initials = document.createElement('span');
                    initials.className = 'text-4xl font-display font-bold text-primary/30';
                    initials.textContent = doctor.name.split(' ').map(n => n[0]).join('');
                    target.parentElement!.appendChild(initials);
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{doctor.name}</h3>
                <p className="text-primary font-body text-sm font-medium">{doctor.specialty}</p>
                <p className="text-muted-foreground font-body text-xs mt-1">{doctor.experience} experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
