import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logo} alt="YoBee xp" className="h-18 w-auto mb-4" />
            <p className="text-secondary-foreground/80 max-w-md">
              Your trusted partner in HR excellence. Empowering businesses with innovative 
              solutions for a better workplace.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Background Verification</li>
              <li>Recruitment</li>
              <li>HR Compliance</li>
              <li>Payroll Management</li>
              <li>Employee Engagement</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} YoBee xp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
