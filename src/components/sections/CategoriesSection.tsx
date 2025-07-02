const CategoriesSection = () => {
  const categories = [
    {
      name: "Digital Art",
      count: "12.5K",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop&crop=center",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Photography",
      count: "8.2K",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=200&fit=crop&crop=center",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Music",
      count: "4.1K",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop&crop=center",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Gaming",
      count: "6.8K",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop&crop=center",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Collectibles",
      count: "9.3K",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop&crop=center",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Virtual Worlds",
      count: "3.7K",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop&crop=center",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Explore <span className="gradient-text-accent">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse NFTs by category and discover your next favorite digital artwork
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`}></div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.count} NFTs
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;