import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px]"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/15 px-4 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Trusted Since 1995
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tight mb-6"
          >
            Healthcare{" "}
            <span className="relative inline-block">
              <span className="text-gradient-primary">Reimagined</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary/40 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground font-body max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Advanced technology meets compassionate care at Kasthuri Hospitals — 
            delivering exceptional outcomes for you and your family.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mb-20"
          >
            <Button
              size="lg"
              className="group gap-2 font-body h-12 px-7 text-sm rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onClick={() => navigate("/book-appointment")}
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="font-body h-12 px-7 text-sm rounded-full text-muted-foreground hover:text-foreground"
            >
              Explore Services ↓
            </Button>
          </motion.div>

          {/* Stats as a horizontal bento strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/50 rounded-3xl overflow-hidden border border-border/50 backdrop-blur-xl shadow-sm">
              {[
                { icon: Heart, value: "25+", label: "Years of Excellence", color: "text-primary" },
                { icon: Shield, value: "50+", label: "Expert Doctors", color: "text-accent" },
                { icon: Clock, value: "24/7", label: "Emergency Care", color: "text-primary" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.value}
                  whileHover={{ backgroundColor: "hsl(var(--primary) / 0.03)" }}
                  className="group bg-card/70 p-8 flex flex-col items-center gap-3 transition-colors duration-300 cursor-default"
                >
                  <div className={`p-2.5 rounded-xl bg-primary/5 ${stat.color} group-hover:bg-primary/10 transition-colors`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-1 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
