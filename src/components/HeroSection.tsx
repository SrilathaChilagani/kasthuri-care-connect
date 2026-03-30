import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-body font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted Healthcare Since 1995
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Health,{" "}
              <span className="text-gradient-primary">Our Priority</span>
            </h1>

            <p className="text-lg text-muted-foreground font-body max-w-lg mb-8 leading-relaxed">
              At Kasthuri Hospitals, we combine advanced medical technology with 
              compassionate care to deliver exceptional healthcare for you and your family.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="gap-2 font-body" onClick={() => navigate("/book-appointment")}>
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="font-body">
                Our Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Heart, label: "25+ Years", sub: "Of Excellence" },
                { icon: Shield, label: "50+", sub: "Expert Doctors" },
                { icon: Clock, label: "24/7", sub: "Emergency Care" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="text-center lg:text-left"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2 mx-auto lg:mx-0" />
                  <p className="font-display font-bold text-xl text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground font-body">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3" />
              <img
                src="/hero-hospital.jpg"
                alt="Kasthuri Hospitals - Modern healthcare facility"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
