export interface Pin {
  title: string;
  quote: string;
  tags: string[];
  id: number;
}

const pins: Pin[] = [
  {
    title: 'Une mine riche',
    quote: 'Trip to Vegas',
    tags: ['riche'],
    id: 0
  },
  {
    title: 'La véracité',
    quote: 'Trip to Vegas',
    tags: ['véracité'],
    id: 1
  },
  {
    title: 'Sans préjugés',
    quote: 'Trip to Vegas',
    tags: ['education', 'prejuges'],
    id: 2
  }
  
];

export const getPins = () => pins;
export const addPin = (pin : Pin) => pins.push(pin);
export const getPin = (id: number) => pins.find(m => m.id === id);
