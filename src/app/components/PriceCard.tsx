interface PriceCardProps {
  title: string;
  description: string;
  pricePerKg: number;
  minOrder: number;
  image: string;
  category: "salad" | "vegetable" | "side";
}

export function PriceCard({ title, description, pricePerKg, minOrder, image, category }: PriceCardProps) {
  const categoryColors = {
    salad: "bg-lime-100 text-lime-700 border-lime-200",
    vegetable: "bg-green-100 text-green-700 border-green-200",
    side: "bg-orange-100 text-orange-700 border-orange-200"
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg mb-2">{title}</h3>
        <p className="text-sm text-neutral-500 mb-4">{description}</p>
        
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl text-lime-600 mb-1">{pricePerKg.toFixed(2)} €/kg</p>
            <p className="text-xs text-neutral-400">Min. Bestellung: {minOrder} kg</p>
          </div>
          <span className={`text-xs px-3 py-1 rounded-full border ${categoryColors[category]}`}>
            {category === "salad" ? "Salat" : category === "vegetable" ? "Gemüse" : "Beilage"}
          </span>
        </div>
      </div>
    </div>
  );
}
