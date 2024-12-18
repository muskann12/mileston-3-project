import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'Almond Milk Body Butter', price: 6190, image: '/images/id1.png', description: 'Almond Milk Body Butter aox 01' },
    { id: 2, name: 'Ginger Hair & Scalp Scrub ', price: 8340, image: '/images/id2.png', description: 'Ginger Hair & Scalp Scrub' },
    { id: 3, name: 'Nail Polishing Block', price: 1590, image: '/images/id9.png', description: 'Nail Polishing Block' },
    { id: 4, name: 'Peppermint Shower Gel', price: 3490, image: '/images/id4.png', description: 'Peppermint Invigorating Shower Gel' },
    { id: 5, name: 'Peppermint Foot Cream ', price: 4290, image: '/images/id5.png', description: 'Peppermint Invigorating Foot Cream' },
    { id: 6, name: 'Shea Shower Cream 250ml', price: 1390, image: '/images/id6.png', description: 'Shea Shower Cream' },
    { id: 7, name: 'Olive Body Butter 200ml', price: 6190, image: '/images/id7.png', description: 'Olive Body Butter' },
    { id: 8, name: 'British Rose  ', price: 2340, image: '/images/id8.png', description: 'British Rose Cleansing Face & Body Bar' },
    { id: 9, name: 'Avocado Body Scrub 250ml', price: 7240, image: '/images/id9.png', description: 'Avocado Body Scrub' },
    { id: 10, name: 'Satsuma Body Butter 200ml', price: 6190, image: '/images/id10.png', description: 'Satsuma Body Butter' },
    { id: 11, name: 'Strawberry Body Butter ', price: 6190, image: '/images/id11.png', description: 'Strawberry Body Butter' },
    { id: 12, name: ' Rosebud Body Cream', price: 5140, image: '/images/id12.png', description: 'Rebel Rosebud Body Cream' },
    { id: 13, name: 'British Rose Body Yogurt 200ml', price: 5640, image: '/images/id13.png', description: 'British Rose Body Yogurt' },
    { id: 14, name: 'Breathe Whisked Polish', price: 8850, image: '/images/id14.png', description: 'Breathe Whisked Body Polish' },
    { id: 1, name: 'Almond Milk Body Butter', price: 6190, image: '/images/id1.png', description: 'Almond Milk Body Butter aox 01' },
    { id: 5, name: 'Peppermint  Foot Cream', price: 4290, image: '/images/id5.png', description: 'Peppermint Invigorating Foot Cream' },
  ];

  return NextResponse.json(products);
}
