import { States } from './states.enum';

export interface Memory {
  id: number;
  text: string;
  image: string;
  status: States;
}

export const inputMemories: Memory[] = [
  {
    id: 1,
    text: 'chief',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 2,
    text: 'milkshake',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 3,
    text: 'Stars',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 4,
    text: 'Fort Knox',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 5,
    text: 'Happy Days',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 6,
    text: 'AzN PoP!',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 7,
    text: 'Ryan Gosling',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 8,
    text: 'Alexa',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 9,
    text: 'Harry Potter',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 10,
    text: 'French Fries',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 11,
    text: 'Stromae',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 12,
    text: 'Truffle',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 13,
    text: 'Sass',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 14,
    text: 'Squirt gun',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 15,
    text: 'Pizza',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 16,
    text: 'Haarlem',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 17,
    text: 'Lemon Chicken',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 18,
    text: 'The Lost City of Z',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 19,
    text: 'Celine',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 20,
    text: 'Marlboro',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 21,
    text: 'SVU',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 22,
    text: 'Spaans Dak',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 23,
    text: 'Gentrification',
    image: 'TBD',
    status: States.HIDDEN
  },
  {
    id: 24,
    text: 'Eiffel Tower',
    image: 'TBD',
    status: States.HIDDEN
  },
];
