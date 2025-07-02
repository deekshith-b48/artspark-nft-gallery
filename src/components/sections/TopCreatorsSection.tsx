import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const TopCreatorsSection = () => {
  const topCreators = [
    {
      name: "ArtistMind",
      username: "@artistmind",
      sales: "145.2",
      followers: "12.5K",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
      verified: true,
      rank: 1
    },
    {
      name: "NeoCreator",
      username: "@neocreator",
      sales: "132.8",
      followers: "9.8K",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      verified: true,
      rank: 2
    },
    {
      name: "VisionArt",
      username: "@visionart",
      sales: "98.5",
      followers: "7.2K",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face",
      verified: false,
      rank: 3
    },
    {
      name: "CyberPainter",
      username: "@cyberpainter",
      sales: "87.3",
      followers: "8.9K",
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100&h=100&fit=crop&crop=face",
      verified: true,
      rank: 4
    },
    {
      name: "TechArtist",
      username: "@techartist",
      sales: "76.1",
      followers: "6.4K",
      avatar: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop&crop=face",
      verified: false,
      rank: 5
    },
    {
      name: "DigitalDreamer",
      username: "@digitaldreamer",
      sales: "64.7",
      followers: "5.8K",
      avatar: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=100&h=100&fit=crop&crop=face",
      verified: true,
      rank: 6
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Top <span className="gradient-text-primary">Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the most successful artists who are shaping the future of digital art
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCreators.map((creator, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 nft-card">
                {/* Rank Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    #{creator.rank}
                  </div>
                  {creator.verified && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img 
                      src={creator.avatar} 
                      alt={creator.name}
                      className="w-20 h-20 rounded-full border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Creator Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {creator.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{creator.username}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text-accent">{creator.sales}Ξ</div>
                    <div className="text-xs text-muted-foreground">Total Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text-accent">{creator.followers}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                </div>

                {/* Follow Button */}
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Follow
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="accent" size="xl">
            View All Creators
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopCreatorsSection;