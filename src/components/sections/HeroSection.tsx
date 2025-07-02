import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nft-marketplace.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="NFT Marketplace Hero" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float blur-xl"></div>
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-accent rounded-full opacity-30 animate-float blur-lg" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/30 rounded-full animate-pulse-slow blur-md"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-7xl font-bold mb-8 leading-tight">
          Discover, Create & Trade
          <span className="block gradient-text-primary">
            Extraordinary NFTs
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the premier decentralized marketplace where digital artists and collectors 
          unite to create, showcase, and trade unique digital masterpieces.
        </p>

        <div className="flex items-center justify-center space-x-6">
          <Button variant="hero" size="xl">
            Explore Marketplace
          </Button>
          <Button variant="glass" size="xl">
            Create NFT
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center space-x-12 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-accent">240K+</div>
            <div className="text-muted-foreground">Total NFTs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-accent">15K+</div>
            <div className="text-muted-foreground">Artists</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-accent">8.2K+</div>
            <div className="text-muted-foreground">Collections</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;