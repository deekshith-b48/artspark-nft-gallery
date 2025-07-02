import NFTCard from "@/components/nft/NFTCard";
import { Button } from "@/components/ui/button";

const TrendingSection = () => {
  // Mock data for trending NFTs
  const trendingNFTs = [
    {
      title: "Cosmic Dreams #142",
      creator: "ArtistMind",
      price: "2.5",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=center",
      timeLeft: "2h 45m",
      isAuction: true
    },
    {
      title: "Digital Essence",
      creator: "NeoCreator",
      price: "1.8",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center",
      isAuction: false
    },
    {
      title: "Abstract Reality #05",
      creator: "VisionArt",
      price: "3.2",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=center",
      timeLeft: "1d 12h",
      isAuction: true
    },
    {
      title: "Neon Landscapes",
      creator: "CyberPainter",
      price: "1.5",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=center",
      isAuction: false
    },
    {
      title: "Quantum Particles",
      creator: "TechArtist",
      price: "4.1",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=center",
      timeLeft: "5h 22m",
      isAuction: true
    },
    {
      title: "Future Visions",
      creator: "DigitalDreamer",
      price: "2.0",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=center",
      isAuction: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Trending <span className="gradient-text-primary">NFTs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most sought-after digital artworks that are capturing the attention 
            of collectors worldwide
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center space-x-2 mb-12">
          <Button variant="hero" size="lg">Trending</Button>
          <Button variant="ghost" size="lg">Top Sales</Button>
          <Button variant="ghost" size="lg">New Drops</Button>
          <Button variant="ghost" size="lg">Ending Soon</Button>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trendingNFTs.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="xl">
            View All NFTs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;