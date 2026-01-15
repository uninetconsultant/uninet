import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@uninetconsultant.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(833) 611-6434",
      subtext: "Available 24/7 for immediate assistance",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Network Street",
      subtext: "Tech City, TC 12345",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Support",
      subtext: "Always here when you need us",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-primary-foreground/90">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your needs..." 
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button asChild size="lg" className="w-full">
                  <a href="tel:(833)611-6434">Call Now (833) 611-6434</a>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop by our office during business hours. Our team is always happy to meet in person.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
