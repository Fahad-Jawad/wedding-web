// Define subcategories for each main category
export const subcategories = {
  Chair: [
    { name: "Wooden", img: "/images/subcategories/chair/wooden.png" },
    { name: "Lounge", img: "/images/subcategories/chair/lounge.png" },
    { name: "Desk", img: "/images/subcategories/chair/desk.png" },
    { name: "Dining", img: "/images/subcategories/chair/dining.png" },
    { name: "Ergonomic", img: "/images/subcategories/chair/ergonomic.png" }
  ],
  Cake: [
    { name: "Red Velvet", img: "/images/subcategories/cake/red_velvet.png" },
    { name: "Chocolate", img: "/images/subcategories/cake/chocolate.png" },
    { name: "Vanilla", img: "/images/subcategories/cake/vanilla.png" },
    { name: "Fruit Topped", img: "/images/subcategories/cake/fruit_topped.png" },
    { name: "Cheesecake", img: "/images/subcategories/cake/cheesecake.png" }
  ],
  Flower: [
    { name: "Tulip", img: "/images/subcategories/flower/tulip.png" },
    { name: "Daisy", img: "/images/subcategories/flower/daisy.png" },
    { name: "Rose", img: "/images/subcategories/flower/rose.png" },
    { name: "Sunflower", img: "/images/subcategories/flower/sunflower.png" },
    { name: "Orchid", img: "/images/subcategories/flower/orchid.png" }
  ],
  Lamp: [
    { name: "Table Lamp", img: "/images/subcategories/lamp/table_lamp.png" },
    { name: "Desk Lamp", img: "/images/subcategories/lamp/desk_lamp.png" },
    { name: "Bedside Lamp", img: "/images/subcategories/lamp/bedside_lamp.png" },
    { name: "Floor Lamp", img: "/images/subcategories/lamp/floor_lamp.png" },
    { name: "Hanging Lamp", img: "/images/subcategories/lamp/hanging_lamp.png" }
  ],
  Table: [
    { name: "Side Table", img: "/images/subcategories/table/side_table.png" },
    { name: "Work Table", img: "/images/subcategories/table/work_table.png" },
    { name: "Wooden Table", img: "/images/subcategories/table/wooden_table.png" },
    { name: "Coffee Table", img: "/images/subcategories/table/coffee_table.png" },
    { name: "Dining Table", img: "/images/subcategories/table/dining_table.png" }
  ]
};

// Update the product data to include subcategories instead of main categories
export const productData = [
  { name: 'Compact Side Table', subcategory: 'Side Table', category: 'Table' },
  { name: 'Modern Wooden Chair', subcategory: 'Wooden', category: 'Chair' },
  { name: 'Vintage Table Lamp', subcategory: 'Table Lamp', category: 'Lamp' },
  { name: 'Red Velvet Dream Cake', subcategory: 'Red Velvet', category: 'Cake' },
  { name: 'Tulip Spring Blooms', subcategory: 'Tulip', category: 'Flower' },
  { name: 'Industrial Work Table', subcategory: 'Work Table', category: 'Table' },
  { name: 'Modern Desk Lamp', subcategory: 'Desk Lamp', category: 'Lamp' },
  { name: 'Luxury Lounge Chair', subcategory: 'Lounge', category: 'Chair' },
  { name: 'Chocolate Delight Cake', subcategory: 'Chocolate', category: 'Cake' },
  { name: 'Daisy Delight Bunch', subcategory: 'Daisy', category: 'Flower' },
  { name: 'Classic Bedside Lamp', subcategory: 'Bedside Lamp', category: 'Lamp' },
  { name: 'Classic Office Chair', subcategory: 'Desk', category: 'Chair' },
  { name: 'Rustic Wooden Table', subcategory: 'Wooden Table', category: 'Table' },
  { name: 'Vanilla Celebration Cake', subcategory: 'Vanilla', category: 'Cake' },
  { name: 'Elegant Rose Bouquet', subcategory: 'Rose', category: 'Flower' },
  { name: 'Ergonomic Desk Chair', subcategory: 'Ergonomic', category: 'Chair' },
  { name: 'Industrial Floor Lamp', subcategory: 'Floor Lamp', category: 'Lamp' },
  { name: 'Fruit Topped Delight Cake', subcategory: 'Fruit Topped', category: 'Cake' },
  { name: 'Minimalist Dining Chair', subcategory: 'Dining', category: 'Chair' },
  { name: 'Glass Coffee Table', subcategory: 'Coffee Table', category: 'Table' },
  { name: 'Classic Cheesecake', subcategory: 'Cheesecake', category: 'Cake' },
  { name: 'Sunflower Sunshine', subcategory: 'Sunflower', category: 'Flower' },
  { name: 'Modern Dining Table', subcategory: 'Dining Table', category: 'Table' },
  { name: 'Orchid Beauty Arrangement', subcategory: 'Orchid', category: 'Flower' },
  { name: 'Contemporary Hanging Lamp', subcategory: 'Hanging Lamp', category: 'Lamp' },
];

// Update the categories object to use subcategories and their corresponding product indexes
export const categories = {
  Wooden: [1],
  Lounge: [7],
  Desk: [11],
  Dining: [19],
  Ergonomic: [15],
  'Red Velvet': [3],
  Chocolate: [9],
  Vanilla: [13],
  'Fruit Topped': [17],
  Cheesecake: [21],
  Tulip: [4],
  Daisy: [9],
  Rose: [14],
  Sunflower: [22],
  Orchid: [23],
  'Table Lamp': [2],
  'Desk Lamp': [6],
  'Bedside Lamp': [10],
  'Floor Lamp': [16],
  'Hanging Lamp': [24],
  'Side Table': [0],
  'Work Table': [5],
  'Wooden Table': [12],
  'Coffee Table': [20],
  'Dining Table': [23],
};
