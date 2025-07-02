import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface NFTCardProps {
  title: string;
  creator: string;
  price: string;
  image: string;
  timeLeft?: string;
  isAuction?: boolean;
}

const NFTCard = ({ title, creator, price, image, timeLeft, isAuction }: NFTCardProps) => {
  return (
    <div className="group nft-card bg-card rounded-xl border border-border overflow-hidden">
      {/* NFT Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Auction Timer */}
        {isAuction && timeLeft && (
          <div className="absolute top-4 right-4 glass px-3 py-2 rounded-lg">
            <div className="text-sm font-medium text-accent">{timeLeft}</div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="hero" size="lg">
            {isAuction ? 'Place Bid' : 'Buy Now'}
          </Button>
        </div>
      </div>

      {/* NFT Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-muted-foreground text-sm">by {creator}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">
              {isAuction ? 'Current Bid' : 'Price'}
            </div>
            <div className="text-lg font-bold gradient-text-accent">
              {price} ETH
            </div>
          </div>
          
          <Button 
            variant={isAuction ? "outline" : "default"} 
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {isAuction ? 'Bid' : 'Buy'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;