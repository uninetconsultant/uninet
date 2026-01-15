import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScrollFadeIn, ScrollSlideIn, ScrollScaleIn } from "@/components/ScrollAnimations";
import { 
  Wifi, 
  TrendingUp, 
  Users, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Clock,
  Award,
  Star,
  Smartphone,
  Monitor,
  Tv,
  Gamepad2,
  Play,
  Phone
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import supportTeam from "@/assets/support-team.jpg";
import familyStreaming from "@/assets/family-streaming.jpg";
import networkInfra from "@/assets/network-infrastructure.jpg";

const Index = () => {
  const stats = [
    { value: "4.8/5", label: "Client Rating", icon: Star },
    { value: "25,000+", label: "Active Customers", icon: Users },
    { value: "99.9%", label: "Network Uptime", icon: Zap },
    { value: "24/7", label: "Customer Support", icon: Clock },
  ];

  const services = [
    {
      icon: Wifi,
      title: "Home Fiber Internet",
      description: "High-speed fiber connectivity designed for modern homes and streaming needs.",
    },
    {
      icon: TrendingUp,
      title: "Business Fiber Plans",
      description: "Reliable, high-capacity internet with scale and dedicated business support.",
    },
    {
      icon: Shield,
      title: "Smart Wi-Fi Setup",
      description: "Full-service coverage and expert installation with all the setup you need.",
    },
  ];

  const partners = [
    { name: "Google", emoji: "🔍" },
    { name: "Netflix", emoji: "📺" },
    { name: "YouTube", emoji: "▶️" },
    { name: "Spotify", emoji: "🎵" },
    { name: "GitHub", emoji: "💻" },
    { name: "Microsoft", emoji: "🪟" },
  ];

  const streamingCategories = [
    { icon: Tv, name: "Movies" },
    { icon: Play, name: "Live Sports" },
    { icon: Monitor, name: "Top Streaming" },
    { icon: Gamepad2, name: "Live Games" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry Leading Performance",
      description: "Fastest speeds with 99.9% uptime guarantee backed by our SLA",
    },
    {
      icon: Users,
      title: "Local Expert Support",
      description: "Real people, real help - our local team is always ready to assist",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Advanced security features and enterprise-grade infrastructure",
    },
    {
      icon: Zap,
      title: "Lightning Fast Installation",
      description: "Get connected in days, not weeks, with our rapid deployment",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Switching to Uninet was the best decision. The speed is incredible and customer service is top-notch!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "Our business relies on fast internet. Uninet delivers consistently with zero downtime. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Remote Worker",
      content: "Perfect for video calls and streaming. Haven't had a single issue in 2 years. Worth every penny!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(33, 25, 95, 0.95), rgba(75, 40, 150, 0.90)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Experience Lightning-Fast Internet You Can Trust Every Day
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 leading-relaxed">
              Enjoy effortless connectivity with our fast, budget-friendly broadband services for homes and businesses. Stay connected and access what matters most.
            </p>
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Call Now: (833) 611-6434
              </p>
              <p className="text-lg text-primary-foreground/80">
                Available 24/7 for immediate assistance
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg" className="group">
                <a href="tel:(833)611-6434">
                  Call Now (833) 611-6434
                  <Phone className="ml-2 group-hover:animate-bounce" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:(833)611-6434">Call Now (833) 611-6434</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollScaleIn key={index} delay={index * 100}>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <ScrollScaleIn key={index} delay={index * 100}>
                <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-5xl">{partner.emoji}</div>
                  <span className="text-sm font-medium text-muted-foreground">{partner.name}</span>
                </div>
              </ScrollScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Internet Services, Tailored for You</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From ultra-fast fiber to smart home connectivity, we deliver everything you need to stay online and succeed.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollSlideIn key={index} delay={index * 200}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button asChild variant="link" className="p-0 group-hover:translate-x-2 transition-transform">
                    <a href="tel:(833)611-6434">
                      Call Now (833) 611-6434 <Phone className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </Card>
              </ScrollSlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Watch Hits at Home</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stream your favorite content in 4K on all your devices — no freezing, no buffering, no joke. Entertainment from the comfort of your couch.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {streamingCategories.map((category, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="lg"
                  className="group hover:scale-105 hover:border-primary transition-all duration-300"
                >
                  <category.icon className="mr-2 group-hover:text-primary transition-colors" />
                  {category.name}
                </Button>
              ))}
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollSlideIn>
              <div className="space-y-6">
                <img 
                  src={familyStreaming} 
                  alt="Family streaming" 
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollSlideIn>
            <ScrollFadeIn delay={300}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Unlimited Entertainment</h3>
                <p className="text-lg text-muted-foreground">
                  With our high-speed internet, you can stream on multiple devices simultaneously without any lag. Perfect for families who love their shows, movies, and gaming.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>4K and 8K streaming support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Connect unlimited devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Zero buffering, zero interruptions</span>
                  </li>
                </ul>
                <Button asChild size="lg" className="group">
                  <a href="tel:(833)611-6434">
                    Call Now (833) 611-6434
                    <Phone className="ml-2 group-hover:animate-bounce" />
                  </a>
                </Button>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Uninet Consultant?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just another internet provider. We're your partners in staying connected.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollScaleIn key={index} delay={index * 150}>
                <Card className="p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              </ScrollScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* About/Infrastructure Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollSlideIn>
              <img 
                src={networkInfra} 
                alt="Network infrastructure" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollSlideIn>
            <ScrollFadeIn delay={200}>
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Built on Cutting-Edge Infrastructure
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our state-of-the-art fiber network is designed for the future. With redundant systems and continuous monitoring, we ensure your connection is always fast and reliable.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">100% fiber-optic network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Redundant backbone connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">24/7 network monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Regular infrastructure upgrades</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <a href="tel:(833)611-6434">Call Now (833) 611-6434</a>
                </Button>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what real customers think about our service.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollScaleIn key={index} delay={index * 150}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.content}&quot;</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              </ScrollScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Community Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Connecting Communities with Trusted Internet Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Uninet Consultant, we are dedicated to delivering exceptional internet services that prioritize speed and reliability. Our commitment to excellence means that whether you&apos;re a homeowner looking for uninterrupted streaming or a business requiring high-capacity connectivity, we have tailored solutions for you.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  With a local team of experts who are always ready to assist you, we ensure that your experience is not just about connectivity, but about building lasting relationships with our community.
                </p>
                <Button asChild size="lg">
                  <a href="tel:(833)611-6434">Call Now (833) 611-6434</a>
                </Button>
              </div>
            </ScrollFadeIn>
            <ScrollSlideIn delay={200}>
              <img 
                src={teamImage} 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollSlideIn>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <div>
                <h2 className="text-4xl font-bold mb-6">24/7 Expert Support</h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Our dedicated support team is always here to help. Whether you have a question or need technical assistance, we&apos;re just a call or click away.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Live chat support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Phone support 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>On-site technical visits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Online knowledge base</span>
                  </li>
                </ul>
                <Button asChild variant="hero" size="lg">
                  <a href="tel:(833)611-6434">Call Now (833) 611-6434</a>
                </Button>
              </div>
            </ScrollFadeIn>
            <ScrollScaleIn delay={200}>
              <img 
                src={supportTeam} 
                alt="Support team" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollScaleIn>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollFadeIn>
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Better Internet?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Uninet Consultant for their connectivity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:(833)611-6434">Call Now (833) 611-6434</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:(833)611-6434">Call Now (833) 611-6434</a>
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
