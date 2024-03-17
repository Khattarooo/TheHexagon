export type Item = string;

export interface Category {
  id: number;
  name: string;
  items: Item[];
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Honeycomb Patterns',
    items: [
      'Honeybee Architecture',
      'Natural Comb Designs',
      'Hive Arrangements',
    ],
  },
  {id: 2, name: 'Hexagonal Crystals', items: ['Snowflakes', 'Basalt Columns']},
  {id: 3, name: 'Board Games', items: ['Settlers of Catan', 'Hive Game']},
  {
    id: 4,
    name: 'Chemical Structures',
    items: ['Benzene Ring', 'Graphene Layers'],
  },
  {
    id: 5,
    name: 'Architectural Designs',
    items: ['Hexagon Tiles', 'Hex Dome Structures'],
  },
  {
    id: 6,
    name: 'Nature’s Hexagons',
    items: ['Turtle Shells', 'Dragonfly Eyes', 'Snake Skin Patterns'],
  },
  {
    id: 7,
    name: 'Art and Design',
    items: [
      'Islamic Geometric Patterns',
      'Hexagon Mosaics',
      'Tessellation Art',
    ],
  },
  {
    id: 8,
    name: 'Space and Astronomy',
    items: ['Saturn’s North Pole', 'Hexagonal Storm Patterns'],
  },
];
