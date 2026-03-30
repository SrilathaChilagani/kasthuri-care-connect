import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, FileText, User, CreditCard, Clock, Download, Eye, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const appointments = [
  { id: 1, doctor: "Dr. Kasthuri Prasad", department: "General Medicine", date: "2026-04-05", time: "10:00 AM", status: "Upcoming" },
  { id: 2, doctor: "Dr. Suchetha Maithili", department: "Pediatrics", date: "2026-04-12", time: "2:30 PM", status: "Upcoming" },
  { id: 3, doctor: "Dr. Kasthuri Prasad", department: "General Medicine", date: "2026-03-15", time: "11:00 AM", status: "Completed" },
  { id: 4, doctor: "Dr. Kasthuri Laxmi Narayana", department: "Cardiology", date: "2026-02-20", time: "9:00 AM", status: "Completed" },
];

const medicalRecords = [
  { id: 1, type: "Blood Test", date: "2026-03-15", doctor: "Dr. Kasthuri Prasad", status: "Available" },
  { id: 2, type: "ECG Report", date: "2026-02-20", doctor: "Dr. Kasthuri Laxmi Narayana", status: "Available" },
  { id: 3, type: "Prescription", date: "2026-03-15", doctor: "Dr. Kasthuri Prasad", status: "Available" },
  { id: 4, type: "X-Ray Report", date: "2026-01-10", doctor: "Dr. Suchetha Maithili", status: "Available" },
];

const bills = [
  { id: "INV-2026-001", description: "Consultation - General Medicine", date: "2026-03-15", amount: 500, status: "Paid" },
  { id: "INV-2026-002", description: "Blood Test Panel", date: "2026-03-15", amount: 1200, status: "Paid" },
  { id: "INV-2026-003", description: "ECG + Consultation", date: "2026-02-20", amount: 1800, status: "Pending" },
  { id: "INV-2026-004", description: "X-Ray + Consultation", date: "2026-01-10", amount: 2500, status: "Paid" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PatientPortal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: "Ravi Kumar",
    email: "ravi.kumar@email.com",
    phone: "+91 98765 43210",
    dob: "1990-05-15",
    bloodGroup: "O+",
    address: "123, MG Road, Hyderabad",
  });

  const handleProfileSave = () => {
    toast({ title: "Profile Updated", description: "Your profile information has been saved." });
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
                <h1 className="font-display font-bold text-lg text-foreground">Patient Portal</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-body font-medium text-foreground hidden sm:block">{profile.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Tabs defaultValue="appointments" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-1 bg-muted p-1 rounded-xl">
              <TabsTrigger value="appointments" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Appointments</span>
                <span className="sm:hidden">Appts</span>
              </TabsTrigger>
              <TabsTrigger value="records" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <FileText className="w-4 h-4" />
                Records
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <CreditCard className="w-4 h-4" />
                Billing
              </TabsTrigger>
            </TabsList>

            {/* Appointments Tab */}
            <TabsContent value="appointments" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Appointments</h2>
                  <p className="text-sm text-muted-foreground font-body mt-1">View and manage your appointments</p>
                </div>
                <Button onClick={() => navigate("/book-appointment")} className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Book New
                </Button>
              </div>

              <div className="grid gap-4">
                {appointments.map((apt) => (
                  <Card key={apt.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center justify-between p-4 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-body font-semibold text-foreground">{apt.doctor}</p>
                          <p className="text-sm text-muted-foreground font-body">{apt.department}</p>
                          <p className="text-sm text-muted-foreground font-body mt-1">
                            {new Date(apt.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} at {apt.time}
                          </p>
                        </div>
                      </div>
                      <Badge variant={apt.status === "Upcoming" ? "default" : "secondary"}>
                        {apt.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Medical Records Tab */}
            <TabsContent value="records" className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Medical Records</h2>
                <p className="text-sm text-muted-foreground font-body mt-1">Access your test results and prescriptions</p>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Type</TableHead>
                      <TableHead className="hidden sm:table-cell">Doctor</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {medicalRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium font-body">{record.type}</TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground font-body">{record.doctor}</TableCell>
                        <TableCell className="text-muted-foreground font-body">
                          {new Date(record.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon" onClick={() => toast({ title: "Preview", description: `Viewing ${record.type}` })}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => toast({ title: "Download", description: `Downloading ${record.type}` })}>
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Profile</h2>
                <p className="text-sm text-muted-foreground font-body mt-1">Manage your personal information</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-lg">Personal Details</CardTitle>
                  <CardDescription className="font-body">Update your contact and medical information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body">Full Name</Label>
                      <Input id="name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body">Email</Label>
                      <Input id="email" type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body">Phone</Label>
                      <Input id="phone" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob" className="font-body">Date of Birth</Label>
                      <Input id="dob" type="date" value={profile.dob} onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="blood" className="font-body">Blood Group</Label>
                      <Input id="blood" value={profile.bloodGroup} onChange={(e) => setProfile({ ...profile, bloodGroup: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="font-body">Address</Label>
                      <Input id="address" value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} />
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button onClick={handleProfileSave}>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Billing</h2>
                <p className="text-sm text-muted-foreground font-body mt-1">View and manage your bills</p>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground font-body">Total Paid</p>
                    <p className="text-2xl font-display font-bold text-foreground mt-1">₹4,200</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground font-body">Pending</p>
                    <p className="text-2xl font-display font-bold text-accent mt-1">₹1,800</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground font-body">Total Bills</p>
                    <p className="text-2xl font-display font-bold text-foreground mt-1">4</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead className="hidden sm:table-cell">Description</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bills.map((bill) => (
                      <TableRow key={bill.id}>
                        <TableCell className="font-medium font-body text-xs sm:text-sm">{bill.id}</TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground font-body">{bill.description}</TableCell>
                        <TableCell className="text-muted-foreground font-body text-xs sm:text-sm">
                          {new Date(bill.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                        </TableCell>
                        <TableCell className="font-body font-medium">₹{bill.amount.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          {bill.status === "Pending" ? (
                            <Button size="sm" variant="default" onClick={() => toast({ title: "Payment", description: `Processing payment for ${bill.id}` })}>
                              Pay Now
                            </Button>
                          ) : (
                            <Badge variant="secondary">Paid</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default PatientPortal;
