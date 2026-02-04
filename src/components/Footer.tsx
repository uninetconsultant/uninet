import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Uninet Consultant Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold">Uninet Consultant</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Connecting communities with trusted internet solutions and expert consulting services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Plans", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Internet Connectivity</li>
              <li>Business Solutions</li>
              <li>Network Consulting</li>
              <li>Technical Support</li>
              <li>Infrastructure Setup</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@uninetconsultant.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:(833)611-6434" className="hover:text-primary-foreground transition-colors">(833) 611-6434</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Network Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                to="/privacy" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/refund-policy" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
              >
                Refund Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Uninet Consultant. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/80">
              Trusted Internet Solutions & Expert Consulting
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
