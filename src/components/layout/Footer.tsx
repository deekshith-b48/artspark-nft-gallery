import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold gradient-text-primary mb-4">
              ArtSpark
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The premier decentralized marketplace for discovering, creating, and trading extraordinary NFTs.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Marketplace Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Marketplace</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Explore NFTs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Top Collections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trending</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">New Drops</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Auctions</a></li>
            </ul>
          </div>

          {/* Create & Sell */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Create & Sell</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Create NFT</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Creator Hub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Royalties</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Guidelines</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Community</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-muted/20 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest news about new NFT drops, trending collections, and exclusive artist features.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
            />
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 ArtSpark. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;