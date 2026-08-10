import categories from "./catData";

const productNames = {
  Makeup: [
    "Matte Lipstick",
    "Velvet Foundation",
    "Glow Highlighter",
    "Beauty Blush",
    "Classic Mascara",
    "Liquid Eyeliner",
    "Nude Eyeshadow",
    "Makeup Brush Set",
    "Compact Powder",
    "Lip Gloss",
    "Beauty Primer",
    "Contour Palette",
    "Face Concealer",
    "Setting Spray",
    "Makeup Gift Box",
  ],

  Accessories: [
    "Classic Handbag",
    "Leather Wallet",
    "Fashion Sunglasses",
    "Elegant Watch",
    "Gold Necklace",
    "Silver Bracelet",
    "Fashion Earrings",
    "Minimal Ring",
    "Hair Accessories Set",
    "Crossbody Bag",
    "Designer Scarf",
    "Travel Wallet",
    "Premium Belt",
    "Fashion Chain",
    "Daily Tote Bag",
  ],

  Dress: [
    "Floral Summer Dress",
    "Elegant Party Dress",
    "Classic Midi Dress",
    "Denim Dress",
    "Cotton Casual Dress",
    "Printed Maxi Dress",
    "Pleated Dress",
    "Evening Gown",
    "Linen Dress",
    "Knee Length Dress",
    "Wrap Dress",
    "Boho Dress",
    "Office Dress",
    "Satin Dress",
    "Designer Dress",
  ],

  Slippers: [
    "Comfort Slippers",
    "Cloud Soft Slides",
    "Casual Home Slippers",
    "Floral Slippers",
    "Platform Slippers",
    "Beach Slides",
    "Soft Walking Slippers",
    "Classic Flip Flops",
    "Premium Slides",
    "Summer Slippers",
    "Indoor Slippers",
    "Fashion Slides",
    "Comfort Sandals",
    "Daily Wear Slides",
    "Luxury Slippers",
  ],

  Footwear: [
    "Classic Sneakers",
    "Running Shoes",
    "Casual Loafers",
    "Formal Shoes",
    "Canvas Sneakers",
    "Sports Shoes",
    "Leather Boots",
    "Walking Shoes",
    "Training Shoes",
    "Slip On Shoes",
    "Classic Sandals",
    "Premium Sneakers",
    "Outdoor Shoes",
    "Travel Shoes",
    "Urban Sneakers",
  ],

  Pants: [
    "Slim Fit Jeans",
    "Classic Blue Jeans",
    "Cargo Pants",
    "Relaxed Fit Pants",
    "Formal Trousers",
    "Cotton Chinos",
    "Jogger Pants",
    "Straight Fit Jeans",
    "Black Trousers",
    "Denim Cargo",
    "Linen Pants",
    "Wide Leg Pants",
    "Travel Pants",
    "Classic Khakis",
    "Premium Denim",
  ],

  Shirts: [
    "Classic Cotton Shirt",
    "Oversize Shirt",
    "Denim Shirt",
    "Linen Shirt",
    "Checked Shirt",
    "Printed Shirt",
    "Formal White Shirt",
    "Casual Black Shirt",
    "Oxford Shirt",
    "Flannel Shirt",
    "Striped Shirt",
    "Half Sleeve Shirt",
    "Premium Shirt",
    "Party Shirt",
    "Everyday Shirt",
  ],

  "Boys Dress": [
    "Boys Casual Set",
    "Kids Denim Outfit",
    "Printed T-Shirt Set",
    "Festive Boys Outfit",
    "Cotton Shirt Set",
    "Summer Outfit",
    "Party Wear Set",
    "Traditional Boys Dress",
    "Sports Outfit",
    "Winter Outfit",
    "Graphic T-Shirt",
    "Checked Shirt Set",
    "Daily Wear Set",
    "Premium Boys Outfit",
    "Birthday Outfit",
  ],

  "Girls Dress": [
    "Floral Girls Dress",
    "Princess Dress",
    "Party Frock",
    "Cotton Girls Dress",
    "Denim Dress",
    "Festive Girls Outfit",
    "Summer Frock",
    "Traditional Dress",
    "Cute Casual Dress",
    "Printed Frock",
    "Birthday Dress",
    "Elegant Party Dress",
    "Rainbow Dress",
    "Premium Girls Dress",
    "Designer Frock",
  ],

  Toys: [
    "Building Blocks",
    "Remote Car",
    "Teddy Bear",
    "Musical Toy",
    "Puzzle Game",
    "Toy Kitchen Set",
    "Robot Toy",
    "Doll House",
    "Action Figure",
    "Educational Kit",
    "Toy Train",
    "Soft Animal Toy",
    "Board Game",
    "Creative Art Kit",
    "Kids Play Set",
  ],

  Laptop: [
    "NovaBook Air",
    "UltraBook Pro",
    "TechBook 14",
    "PowerBook X",
    "SmartBook Lite",
    "WorkMate Laptop",
    "CreatorBook Pro",
    "Gaming Laptop X",
    "StudentBook 15",
    "EliteBook Air",
    "PerformanceBook",
    "BusinessBook Pro",
    "CompactBook",
    "Studio Laptop",
    "NextGen Laptop",
  ],

  Lights: [
    "LED Desk Lamp",
    "Smart Ceiling Light",
    "RGB Strip Light",
    "Modern Floor Lamp",
    "Night Lamp",
    "Smart Bulb",
    "Decorative Light",
    "USB Desk Light",
    "Wall Light",
    "Reading Lamp",
    "Pendant Light",
    "Outdoor Light",
    "LED Tube Light",
    "Ambient Light",
    "Premium Lamp",
  ],

  Phones: [
    "Nova X Smartphone",
    "PixelMax Phone",
    "UltraPhone Pro",
    "SmartOne 5G",
    "PowerPhone X",
    "Lite Smartphone",
    "Vision Pro Phone",
    "Edge 5G",
    "MaxView Phone",
    "Prime Smartphone",
    "Future X Phone",
    "Elite 5G",
    "SmartPlus Phone",
    "ProMax Smartphone",
    "NextGen Phone",
  ],

  Sound: [
    "Wireless Earbuds",
    "Noise Cancel Headphones",
    "Bluetooth Speaker",
    "Portable Speaker",
    "Studio Headphones",
    "Bass Earbuds",
    "Mini Bluetooth Speaker",
    "Party Speaker",
    "Gaming Headset",
    "Neckband Earphones",
    "Premium Earbuds",
    "Smart Speaker",
    "Travel Headphones",
    "Music Headset",
    "Pro Audio Speaker",
  ],

  Decor: [
    "Modern Wall Art",
    "Decorative Vase",
    "Artificial Plant",
    "Table Decoration",
    "Photo Frame",
    "Decorative Mirror",
    "Candle Holder",
    "Wall Clock",
    "Ceramic Decor",
    "Indoor Plant Pot",
    "Luxury Vase",
    "Minimal Decor Set",
    "Wooden Decoration",
    "Desk Decor",
    "Premium Home Decor",
  ],

  Furniture: [
    "Modern Sofa",
    "Comfort Armchair",
    "Wooden Coffee Table",
    "Study Table",
    "Office Chair",
    "Bedside Table",
    "Bookshelf",
    "TV Stand",
    "Dining Chair",
    "Dining Table",
    "Storage Cabinet",
    "Modern Bed",
    "Bean Bag",
    "Computer Desk",
    "Premium Sofa Set",
  ],

  Utensils: [
    "Steel Cookware Set",
    "Non Stick Pan",
    "Kitchen Knife Set",
    "Dinner Plate Set",
    "Cooking Spoon Set",
    "Storage Container Set",
    "Glass Bowl Set",
    "Water Bottle",
    "Coffee Mug Set",
    "Serving Bowl",
    "Kitchen Organizer",
    "Pressure Cooker",
    "Tea Set",
    "Premium Cutlery",
    "Kitchen Starter Set",
  ],

  Wallpaper: [
    "Modern Floral Wallpaper",
    "Minimal White Wallpaper",
    "Geometric Wallpaper",
    "Marble Wallpaper",
    "Brick Wall Wallpaper",
    "Kids Room Wallpaper",
    "Luxury Gold Wallpaper",
    "Nature Wallpaper",
    "Abstract Wallpaper",
    "3D Wall Wallpaper",
    "Wood Texture Wallpaper",
    "Pastel Wallpaper",
    "Dark Pattern Wallpaper",
    "Classic Wallpaper",
    "Premium Designer Wallpaper",
  ],
};

// ============================================
// PRICE RANGES
// ============================================

const priceRanges = {
  Makeup: [299, 2499],
  Accessories: [399, 4999],
  Dress: [799, 5999],
  Slippers: [299, 1999],

  Footwear: [799, 4999],
  Pants: [699, 3999],
  Shirts: [599, 2999],

  "Boys Dress": [499, 2499],
  "Girls Dress": [499, 2999],
  Toys: [299, 2999],

  Laptop: [34999, 99999],
  Lights: [399, 3999],
  Phones: [9999, 79999],
  Sound: [799, 9999],

  Decor: [299, 4999],
  Furniture: [2999, 29999],
  Utensils: [199, 3999],
  Wallpaper: [499, 4999],
};

// ============================================
// CREATE PRODUCTS
// ============================================

const products = [];

categories.forEach((category) => {
  category.subcategories.forEach((subcategory) => {
    const names = productNames[subcategory.name] || [];

    const range =
      priceRanges[subcategory.name] || [499, 4999];

    names.forEach((name, index) => {
      const min = range[0];
      const max = range[1];

      const originalPrice = Math.round(
        (min + ((max - min) / 14) * index) / 10
      ) * 10;

      const discounts = [10, 15, 20, 25, 0];

      const discount =
        discounts[index % discounts.length];

      const price =
        discount > 0
          ? Math.round(
              originalPrice * (1 - discount / 100)
            )
          : originalPrice;

      products.push({
        id: `${category.id}-${subcategory.name
          .toLowerCase()
          .replace(/\s+/g, "-")}-${index + 1}`,

        name: name,

        category: category.name,

        categoryId: category.id,

        subcategory: subcategory.name,

        image: subcategory.image,

        price: price,

        originalPrice: originalPrice,

        discount: discount,

        rating: 4 + (index % 2) * 0.5,

        reviews: 20 + index * 17,

        isNew: index === 0 || index === 7,

        inStock: true,
      });
    });
  });
});

export default products;