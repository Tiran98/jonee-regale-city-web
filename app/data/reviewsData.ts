export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  avatar?: string;
}

// Overall restaurant rating data (separate from displayed reviews)
export const restaurantStats = {
  overallRating: 3.6,
  totalReviews: 110,
};

// Your actual Google Places ID - replace this with your real place ID when ready
export const GOOGLE_PLACES_ID = "ChIJJZkEKzgV4ToRPSRnZpDxCos";
export const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACES_ID}`;

// Sample customer reviews to display (these are just some of our reviews)
export const displayedReviews: CustomerReview[] = [
  {
    id: "1",
    name: "Igor Grzegorczyk",
    rating: 5,
    review: "Best food in weligama, friendly and hospitable service (family business), big portions for really affordable price, completely hidden gem.",
    date: "4 months ago",
    avatar: "IG"
  },
  {
    id: "2",
    name: "Pathum Kalubowila",
    rating: 5,
    review: "Visited for Lunch. Clean space, nice arrangement. Tasty food. Takeaway Available, We had rice and curry, Fried rice and other items also availabe. Walking distance to railway station.",
    date: "3 years ago",
    avatar: "PK"
  },
  {
    id: "3",
    name: "Jason Kerr",
    rating: 5,
    review: "We are here several times during our stay in Weligama. The lunch buffet was an especially nice treat and offered the chance to try various curries. We always stop in when we visit town.",
    date: "a year ago",
    avatar: "JK"
  },
  {
    id: "4",
    name: "kie griff",
    rating: 5,
    review: "Great local food at great price the al a carte menu is a little more pricey than the buffet but it guarantees your food is hot whatever time you go. We ate here pretty much everyday we were in weligama. The staff are lovely and the bakery downstairs also sells great produce if your looking for good, cheap and local food this is it.",
    date: "3 years ago",
    avatar: "KG"
  },
  {
    id: "5",
    name: "Юлия Дмитриева",
    rating: 5,
    review: "Delicious Sri Lankan dining. Curry rice, fried rice, everything is delicious. Feel free to order small portions; they'll be plenty.",
    date: "3 years ago",
    avatar: "ЮД"
  },
  {
    id: "6",
    name: "Yehor Dmytriiev",
    rating: 5,
    review: "Incredibly delicious seafood noodles. I've never had anything better locally in Sri Lanka. A small portion for 400 rupees is extremely difficult for one person to finish.",
    date: "8 years ago",
    avatar: "YD"
  },
  {
    id: "7",
    name: "Iurii Serebryakov",
    rating: 5,
    review: "The portions are very large. You can order takeout. Everything is delicious. Only locals eat there. The food is prepared quickly. I highly recommend it.",
    date: "3 years ago",
    avatar: "IS"
  },
];