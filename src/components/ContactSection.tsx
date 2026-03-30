import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: MapPin, title: "Address", detail: "123 Health Avenue, Medical District, Chennai - 600001" },
  { icon: Phone, title: "Phone", detail: "+91 123 456 7890" },
  { icon: Mail, title: "Email", detail: "info@kasthurihospitals.com" },
  { icon: Clock, title: "Working Hours", detail: "24/7 Emergency • OPD: 8AM - 8PM" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-body font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Have questions or need to book an appointment? Reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground font-body text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl border border-border p-6 lg:p-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="font-body" />
              <Input placeholder="Phone Number" className="font-body" />
            </div>
            <Input placeholder="Email Address" type="email" className="font-body" />
            <Input placeholder="Department / Service" className="font-body" />
            <Textarea placeholder="Your Message" rows={4} className="font-body resize-none" />
            <Button className="w-full font-body">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
