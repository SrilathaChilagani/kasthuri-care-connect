import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, LayoutDashboard, Calendar, Users, Clock,
  CheckCircle, XCircle, AlertCircle, FileText, Upload,
  ChevronRight, TrendingUp, Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const todayAppointments = [
  { id: 1, patient: "Ravi Kumar", age: 36, type: "Follow-up", time: "10:00 AM", status: "Checked In" },
  { id: 2, patient: "Priya Sharma", age: 28, type: "New Visit", time: "10:30 AM", status: "Waiting" },
  { id: 3, patient: "Suresh Reddy", age: 52, type: "Consultation", time: "11:00 AM", status: "Scheduled" },
  { id: 4, patient: "Anitha Devi", age: 45, type: "Follow-up", time: "11:30 AM", status: "Scheduled" },
  { id: 5, patient: "Mohan Rao", age: 60, type: "Check-up", time: "2:00 PM", status: "Scheduled" },
];

const patientRecords = [
  { id: 1, name: "Ravi Kumar", age: 36, lastVisit: "2026-03-15", condition: "Hypertension", visits: 5 },
  { id: 2, name: "Priya Sharma", age: 28, lastVisit: "2026-03-20", condition: "Thyroid", visits: 3 },
  { id: 3, name: "Suresh Reddy", age: 52, lastVisit: "2026-02-28", condition: "Diabetes Type 2", visits: 8 },
  { id: 4, name: "Anitha Devi", age: 45, lastVisit: "2026-03-10", condition: "Arthritis", visits: 6 },
  { id: 5, name: "Mohan Rao", age: 60, lastVisit: "2026-01-25", condition: "Cardiac Follow-up", visits: 12 },
];

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const defaultSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"];

const statusColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  "Checked In": "default",
  "Waiting": "outline",
  "Scheduled": "secondary",
  "Completed": "secondary",
  "Cancelled": "destructive",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProviderPortal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [schedule, setSchedule] = useState(
    weekDays.reduce((acc, day) => ({ ...acc, [day]: { enabled: day !== "Saturday", slots: defaultSlots } }), {} as Record<string, { enabled: boolean; slots: string[] }>)
  );

  const handleStatusChange = (id: number, newStatus: string) => {
    toast({ title: "Status Updated", description: `Appointment #${id} marked as ${newStatus}` });
  };

  const toggleDay = (day: string) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled: !prev[day].enabled },
    }));
    toast({ title: "Schedule Updated", description: `${day} has been ${schedule[day].enabled ? "disabled" : "enabled"}` });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">K</span>
                </div>
                <h1 className="font-display font-bold text-lg text-foreground">Provider Portal</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-body font-medium text-foreground hidden sm:block">Dr. Kasthuri Prasad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-1 bg-muted p-1 rounded-xl">
              <TabsTrigger value="dashboard" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="appointments" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Appointments</span>
                <span className="sm:hidden">Appts</span>
              </TabsTrigger>
              <TabsTrigger value="patients" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <Users className="w-4 h-4" />
                Patients
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <Clock className="w-4 h-4" />
                Schedule
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Good Morning, Dr. Prasad</h2>
                <p className="text-sm text-muted-foreground font-body mt-1">Here's your overview for today</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Today's Patients", value: "5", icon: Users, color: "text-primary" },
                  { label: "Checked In", value: "1", icon: CheckCircle, color: "text-primary" },
                  { label: "Waiting", value: "1", icon: AlertCircle, color: "text-accent" },
                  { label: "This Week", value: "23", icon: TrendingUp, color: "text-primary" },
                ].map((stat) => (
                  <Card key={stat.label}>
                    <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Upcoming appointments preview */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="font-display text-lg">Upcoming Appointments</CardTitle>
                  <CardDescription className="font-body">Next patients in queue</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {todayAppointments.slice(0, 3).map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-body font-semibold text-sm">{apt.patient.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-body font-medium text-foreground text-sm">{apt.patient}</p>
                          <p className="text-xs text-muted-foreground font-body">{apt.type} · {apt.time}</p>
                        </div>
                      </div>
                      <Badge variant={statusColors[apt.status]}>{apt.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appointments Tab */}
            <TabsContent value="appointments" className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Today's Appointments</h2>
                <p className="text-sm text-muted-foreground font-body mt-1">Monday, 30 March 2026</p>
              </div>

              <div className="grid gap-3">
                {todayAppointments.map((apt) => (
                  <Card key={apt.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-primary font-body font-bold">{apt.patient.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-body font-semibold text-foreground">{apt.patient}</p>
                            <p className="text-sm text-muted-foreground font-body">Age: {apt.age} · {apt.type}</p>
                            <p className="text-sm text-muted-foreground font-body">{apt.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={statusColors[apt.status]}>{apt.status}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                        <Button size="sm" variant="default" className="gap-1" onClick={() => handleStatusChange(apt.id, "Completed")}>
                          <CheckCircle className="w-3.5 h-3.5" /> Complete
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1" onClick={() => handleStatusChange(apt.id, "Cancelled")}>
                          <XCircle className="w-3.5 h-3.5" /> Cancel
                        </Button>
                        <Button size="sm" variant="ghost" className="gap-1 ml-auto" onClick={() => toast({ title: "Notes", description: `Opening notes for ${apt.patient}` })}>
                          <FileText className="w-3.5 h-3.5" /> Notes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Patients Tab */}
            <TabsContent value="patients" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Patient Records</h2>
                  <p className="text-sm text-muted-foreground font-body mt-1">View patient history and upload reports</p>
                </div>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead className="hidden sm:table-cell">Condition</TableHead>
                      <TableHead className="hidden md:table-cell">Last Visit</TableHead>
                      <TableHead>Visits</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {patientRecords.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>
                          <div>
                            <p className="font-body font-medium text-foreground">{patient.name}</p>
                            <p className="text-xs text-muted-foreground font-body">Age: {patient.age}</p>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground font-body">{patient.condition}</TableCell>
                        <TableCell className="hidden md:table-cell text-muted-foreground font-body">
                          {new Date(patient.lastVisit).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                        </TableCell>
                        <TableCell className="font-body">{patient.visits}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button size="sm" variant="ghost" className="gap-1" onClick={() => toast({ title: "View Records", description: `Viewing records for ${patient.name}` })}>
                              <FileText className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Records</span>
                            </Button>
                            <Button size="sm" variant="ghost" className="gap-1" onClick={() => toast({ title: "Upload", description: `Upload report for ${patient.name}` })}>
                              <Upload className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Upload</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Schedule Management</h2>
                <p className="text-sm text-muted-foreground font-body mt-1">Set your available days and time slots</p>
              </div>

              <div className="grid gap-4">
                {weekDays.map((day) => (
                  <Card key={day}>
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Switch
                            checked={schedule[day].enabled}
                            onCheckedChange={() => toggleDay(day)}
                          />
                          <Label className="font-body font-semibold text-foreground">{day}</Label>
                        </div>
                        <span className="text-sm text-muted-foreground font-body">
                          {schedule[day].enabled ? `${schedule[day].slots.length} slots` : "Off"}
                        </span>
                      </div>
                      {schedule[day].enabled && (
                        <div className="flex flex-wrap gap-2">
                          {schedule[day].slots.map((slot) => (
                            <Badge key={slot} variant="secondary" className="font-body text-xs cursor-default">
                              {slot}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="pt-2">
                <Button onClick={() => toast({ title: "Schedule Saved", description: "Your availability has been updated." })}>
                  Save Schedule
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ProviderPortal;
