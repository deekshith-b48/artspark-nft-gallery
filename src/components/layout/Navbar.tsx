import { Button } from "@/components/ui/button";
import { Search, User, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold gradient-text-primary">
              ArtSpark
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-smooth">
                Explore
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth">
                Create
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth">
                Collections
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth">
                Artists
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search NFTs, collections, and artists..."
                className="w-full bg-input border border-border rounded-lg pl-12 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            {/* Connect Wallet */}
            <Button variant="hero" size="lg">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;