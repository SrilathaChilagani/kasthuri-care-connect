import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Ambient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/6 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-sm font-body font-medium mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted Healthcare Since 1995
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
          >
            Modern Care for a{" "}
            <span className="text-gradient-primary">Healthier Tomorrow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            At Kasthuri Hospitals, we combine advanced medical technology with
            compassionate care to deliver exceptional healthcare for you and your family.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="gap-2 font-body h-13 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              onClick={() => navigate("/book-appointment")}
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 font-body h-13 px-8 text-base rounded-full backdrop-blur-sm"
            >
              <Play className="w-4 h-4" /> Watch Tour
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { icon: Heart, value: "25+", label: "Years of Excellence" },
              { icon: Shield, value: "50+", label: "Expert Doctors" },
              { icon: Clock, value: "24/7", label: "Emergency Care" },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="group relative bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-5 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                <stat.icon className="w-5 h-5 text-primary mb-3 mx-auto" />
                <p className="font-display font-bold text-2xl md:text-3xl text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground font-body mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
