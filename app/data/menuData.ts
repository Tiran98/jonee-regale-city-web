export interface MenuItem {
  name: string;
  price?: string;
  smallPrice?: string;
  largePrice?: string;
  description?: string;
  isSpecial?: boolean;
  category?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MenuCategory {
  title: string;
  subtitle?: string;
  sections: MenuSection[];
  icon?: string;
}

export interface PopularItem extends MenuItem {
  category: string;
}

// Popular items for home page menu section
export const popularMenuItems: PopularItem[] = [
    { name: "Mixed Fried Rice", smallPrice: "1180.00", largePrice: "1800.00", category: "Fried Rice & Noodles" },
    { name: "Sea Food Fried Rice", smallPrice: "1250.00", largePrice: "1880.00", category: "Fried Rice & Noodles" },
    { name: "Chicken Fried Rice", smallPrice: "930.00", largePrice: "1400.00", category: "Fried Rice & Noodles" },
    { name: "Chicken Koththu", smallPrice: "930.00", largePrice: "1400.00", category: "Koththu" },
    { name: "Nasiguran", smallPrice: "1350.00", largePrice: "2050.00", isSpecial: true, category: "Fried Rice & Noodles" },
    { name: "Chicken Biryani", price: "1350.00", isSpecial: true, category: "Fried Rice & Noodles" },
];

// Full menu data
export const fullMenuData: { [key: string]: MenuCategory } = {
  "fried-rice": {
    title: "Fried Rice & Noodles",
    icon: "🍚",
    sections: [
      {
        title: "Fried Rice (Basmati)",
        items: [
          { name: "Mixed", smallPrice: "1180.00", largePrice: "1800.00" },
          { name: "Sea Food", smallPrice: "1250.00", largePrice: "1880.00" },
          { name: "Prawns", smallPrice: "1350.00", largePrice: "2000.00" },
          { name: "Chicken", smallPrice: "930.00", largePrice: "1400.00" },
          { name: "Fish", smallPrice: "930.00", largePrice: "1400.00" },
          { name: "Sausage", smallPrice: "850.00", largePrice: "1300.00" },
          { name: "Egg", smallPrice: "750.00", largePrice: "1130.00" },
          { name: "Special Vegetable", smallPrice: "900.00", largePrice: "1350.00" },
          { name: "Vegetable", smallPrice: "700.00", largePrice: "1050.00" },
          { name: "Nasiguran", smallPrice: "1350.00", largePrice: "2050.00", isSpecial: true },
          { name: "Chicken Biryani", price: "1350.00", isSpecial: true },
          { name: "Set Menu", price: "750.00", isSpecial: true },
        ]
      },
      {
        title: "Fried Noodles",
        items: [
          { name: "Mixed", smallPrice: "1180.00", largePrice: "1800.00" },
          { name: "Sea Food", smallPrice: "1250.00", largePrice: "1880.00" },
          { name: "Prawns", smallPrice: "1350.00", largePrice: "2000.00" },
          { name: "Chicken", smallPrice: "930.00", largePrice: "1400.00" },
          { name: "Fish", smallPrice: "930.00", largePrice: "1400.00" },
          { name: "Sausage", smallPrice: "850.00", largePrice: "1300.00" },
          { name: "Egg", smallPrice: "750.00", largePrice: "1130.00" },
          { name: "Vegetable", smallPrice: "700.00", largePrice: "1050.00" }
        ]
      }
    ]
  },
  "koththu": {
    title: "Koththu",
    icon: "🥘",
    sections: [
      {
        title: "Traditional Koththu",
        items: [
          { name: "Cheese Koththu", smallPrice: "1000.00", largePrice: "1500.00" },
          { name: "Cheese & Chicken Koththu", smallPrice: "1330.00", largePrice: "2000.00" },
          { name: "Mix Koththu", smallPrice: "1180.00", largePrice: "1800.00" },
          { name: "Seafood Koththu", smallPrice: "1250.00", largePrice: "1880.00" },
          { name: "Prawns Koththu", smallPrice: "1350.00", largePrice: "2000.00" },
          { name: "Chicken Koththu", smallPrice: "930.00", largePrice: "1400.00" },
          { name: "Fish Koththu", smallPrice: "930.00", largePrice: "1400.00" },
          { name: "Sausages Koththu", smallPrice: "850.00", largePrice: "1300.00" },
          { name: "Egg Koththu", smallPrice: "750.00", largePrice: "1130.00" },
          { name: "Vegetable Koththu", smallPrice: "700.00", largePrice: "1050.00" }
        ]
      }
    ]
  },
 
  "salads-soups": {
    title: "Salads & Soups",
    icon: "🥗",
    sections: [
      {
        title: "Fresh Salads",
        items: [
          { name: "Vegetable Salad", price: "750.00" },
          { name: "Coleslaw Salad", price: "850.00" },
          { name: "Cucumber & Tomato Salad", price: "750.00" },
          { name: "Tomato & Onion Salad", price: "750.00" },
          { name: "Mix Salad", price: "1000.00" },
          { name: "Singapore Chicken Salad", price: "1250.00" },
          { name: "Jonee Special Chicken Salad", price: "1800.00", isSpecial: true }
        ]
      },
      {
        title: "Hearty Soups",
        items: [
          { name: "Clear Vegetable Soup", price: "700.00" },
          { name: "Sweet Corn Vegetable Soup", price: "750.00" },
          { name: "Cream of Tomato Soup", price: "700.00" },
          { name: "Cream of Chicken Soup", price: "800.00" },
          { name: "Cream of Mushroom Soup", price: "950.00" },
          { name: "Mix Noodles Soup", price: "950.00" },
          { name: "Tom Young Soup", price: "950.00" },
          { name: "Chicken & Sweet Corn Soup", price: "850.00" },
          { name: "Sea Food Clear Soup", price: "950.00" },
          { name: "Chicken Soup", price: "800.00" }
        ]
      }
    ]
  },
  "devilled": {
    title: "Devilled/Curry/Stew/Fried",
    icon: "🍛",
    sections: [
      {
        title: "Devilled/Curry/Stew/Fried",
        items: [
          { name: "Mutton", price: "2200.00" },
          { name: "Prawns", price: "2200.00" },
          { name: "Seer Fish", price: "1700.00" },
          { name: "Mullet", price: "1900.00" },
          { name: "Talapath", price: "1900.00" },
          { name: "Tuna", price: "1400.00" },
          { name: "Cuttle Fish", price: "1700.00" },
          { name: "Chicken", price: "1400.00" },
          { name: "Sausages", price: "1200.00" },
          { name: "Mushroom", price: "2200.00" },
          { name: "Mixed Grilled", price: "4200.00" },         
        ]
      }
    ]
  },
  "sri-lankan": {
    title: "Sri Lankan Corner",
    icon: "🍛",
    sections: [
      {
        title: "Traditional Rice & Curry",
        items: [
          { name: "Rice & Curry Vegetable", price: "500.00" },
          { name: "Rice & Curry Fish", price: "580.00" },
          { name: "Rice & Curry Egg", price: "550.00" },
          { name: "Rice & Curry Chicken or Omelet", price: "600.00" },
          { name: "Extra Curry", price: "180.00" },
          { name: "Chicken Curry", price: "280.00" },
          { name: "Fish Curry", price: "220.00" },
          { name: "Chicken Curry", price: "280.00" },
          { name: "Egg", price: "100.00" },
          { name: "Steamed Rice (Samba)", price: "300.00" },
          { name: "Steamed Rice (Basmati)", price: "500.00" }
        ]
      }
    ]
  }
};

export const menuCategories = [
  { id: "fried-rice", name: "Rice & Noodles", icon: "🍚" },
  { id: "koththu", name: "Koththu", icon: "🥘" },
  { id: "devilled", name: "Devilled/Curry/Stew/Fried", icon: "🍛" },
  { id: "sri-lankan", name: "Sri Lankan", icon: "🍛" }
];