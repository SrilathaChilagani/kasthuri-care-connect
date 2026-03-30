import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, ArrowLeft, Clock, User, Phone, Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const providers = [
  {
    id: "kasthuri-prasad",
    name: "Dr. Kasthuri Prasad",
    specialty: "General Medicine",
    image: "/doctor-1.jpg",
  },
  {
    id: "suchetha-maithili",
    name: "Dr. Suchetha Maithili",
    specialty: "Pediatrics",
    image: "/doctor-2.jpg",
  },
  {
    id: "kasthuri-laxmi-narayana",
    name: "Dr. Kasthuri Laxmi Narayana",
    specialty: "Cardiology",
    image: "/doctor-3.jpg",
  },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM",
];

const BookAppointment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProvider || !date || !time || !name.trim() || !phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (phone.trim().length < 10) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    const provider = providers.find((p) => p.id === selectedProvider);
    toast({
      title: "Appointment Booked!",
      description: `Your appointment with ${provider?.name} on ${format(date, "PPP")} at ${time} has been confirmed.`,
    });

    setSelectedProvider("");
    setDate(undefined);
    setTime("");
    setName("");
    setPhone("");
    setEmail("");
    setReason("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 font-body"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Book an Appointment
            </h1>
            <p className="text-muted-foreground font-body mt-2">
              Choose your provider, pick a date and time, and we'll take care of the rest.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Provider & Schedule */}
            <div className="lg:col-span-2 space-y-8">
              {/* Provider Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" /> Select Provider
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {providers.map((provider) => (
                    <button
                      key={provider.id}
                      type="button"
                      onClick={() => setSelectedProvider(provider.id)}
                      className={cn(
                        "rounded-xl border-2 p-4 text-left transition-all duration-200",
                        selectedProvider === provider.id
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border bg-card hover:border-primary/40"
                      )}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted mx-auto mb-3">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-sm text-center">
                        {provider.name}
                      </h3>
                      <p className="text-xs text-primary font-body text-center mt-1">
                        {provider.specialty}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Date & Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Pick Date & Time
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-2 block">
                      Appointment Date *
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-body",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(d) => d < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-2 block">
                      Preferred Time *
                    </label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="font-body">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot} className="font-body">
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>

              {/* Patient Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" /> Patient Details
                </h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value.slice(0, 100))}
                          placeholder="Your full name"
                          className="pl-10 font-body"
                          maxLength={100}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/[^0-9+\- ]/g, "").slice(0, 15))}
                          placeholder="+91 XXXXX XXXXX"
                          className="pl-10 font-body"
                          maxLength={15}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-2 block">
                      Email (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value.slice(0, 255))}
                        placeholder="your@email.com"
                        type="email"
                        className="pl-10 font-body"
                        maxLength={255}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-2 block">
                      Reason for Visit (Optional)
                    </label>
                    <Textarea
                      value={reason}
                      onChange={(e) => setReason(e.target.value.slice(0, 500))}
                      placeholder="Briefly describe your symptoms or reason for the appointment"
                      rows={3}
                      className="font-body resize-none"
                      maxLength={500}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Appointment Summary
                </h3>

                <div className="space-y-3 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Provider</span>
                    <span className="text-foreground font-medium text-right">
                      {selectedProvider
                        ? providers.find((p) => p.id === selectedProvider)?.name
                        : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span className="text-foreground font-medium">
                      {date ? format(date, "PPP") : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span className="text-foreground font-medium">
                      {time || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Patient</span>
                    <span className="text-foreground font-medium">
                      {name.trim() || "—"}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <Button type="submit" className="w-full font-body" size="lg">
                    Confirm Appointment
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    You will receive a confirmation call on your phone number.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
