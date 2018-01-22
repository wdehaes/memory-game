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
    text: 'Chief',
    image: 'https://cdn.shopify.com/s/files/1/1535/0541/products/SHIRT_DESIGN_-_For_Internet_Bigger_1024x1024.jpg?v=1500178047',
    status: States.HIDDEN
  },
  {
    id: 2,
    text: 'Milkshake',
    image: 'https://www.browneyedbaker.com/wp-content/uploads/2012/01/white-russian-milkshake-1-550.jpg',
    status: States.HIDDEN
  },
  {
    id: 3,
    text: 'Stars',
    image: 'https://l4stars.files.wordpress.com/2015/02/star-wallpapers-22.jpg',
    status: States.HIDDEN
  },
  {
    id: 4,
    text: 'Fort Knox',
    image: 'http://www.thehindubusinessline.com/multimedia/dynamic/02909/PO27_Gold_bars_jpg_2909887f.jpg',
    status: States.HIDDEN
  },
  {
    id: 5,
    text: 'Happy Days',
    image: 'https://bluecurtainsbris.files.wordpress.com/2015/07/umbrella.jpg',
    status: States.HIDDEN
  },
  {
    id: 6,
    text: 'AzN PoP!',
    // tslint:disable-next-line:max-line-length
    image: 'http://www.comedycake.com/wp-content/themes/patterns/timthumb.php?src=http%3A%2F%2Fwww.comedycake.com%2Fwp-content%2Fuploads%2F2017%2F02%2FAzNPoP_Postcard_FRONT.jpg&q=90&w=650&zc=1',
    status: States.HIDDEN
  },
  {
    id: 7,
    text: 'Harvey Specter',
    image: 'http://www.usanetwork.com/sites/usanetwork/files/styles/300x250/public/suits_cast_harvey.jpg?itok=EDVsnXUZ',
    status: States.HIDDEN
  },
  {
    id: 8,
    text: 'Alexa',
    image: 'http://wheadlines.com/wp-content/uploads/2017/11/alexa-wHeadlines.png',
    status: States.HIDDEN
  },
  {
    id: 9,
    text: 'Harry Potter',
    image: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/9d/Harry-Potter-Wizarding-World-Weekly.jpg/revision/latest/scale-to-width-down/670?cb=20160914202759',
    status: States.HIDDEN
  },
  {
    id: 10,
    text: 'French Fries',
    image: 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18144453/051044-french-fries-thumb16x9.jpg',
    status: States.HIDDEN
  },
  {
    id: 11,
    text: 'Stromae',
    image: 'http://lyricstranslate-f2sqfo9.stackpathdns.com/files/styles/large/public/Stromae2-tz9h3w.jpg?itok=tiojJHvO',
    status: States.HIDDEN
  },
  {
    id: 12,
    text: 'Truffle',
    image: 'https://cdn.shopify.com/s/files/1/0905/9542/products/Product-Photo-Truffle-4H4A2079_86f4be4e-cc3e-4de4-aefd-27993a422ff0_1024x1024.jpg?v=1484717307',
    status: States.HIDDEN
  },
  {
    id: 13,
    text: 'Sass',
    image: 'http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
    status: States.HIDDEN
  },
  {
    id: 14,
    text: 'Squirt Gun',
    image: 'https://www.retroplanet.com/mm5/graphics/00000006/39706_main.jpg',
    status: States.HIDDEN
  },
  {
    id: 15,
    text: 'Pizza',
    image: 'https://cdn.vox-cdn.com/thumbor/Wfwc7eWLGFTE8p2E1I6-bsYHDIg=/0x218:750x781/1200x900/filters:focal(0x218:750x781)/cdn.vox-cdn.com/uploads/chorus_image/image/56089213/o.0.0.jpg',
    status: States.HIDDEN
  },
  {
    id: 16,
    text: 'Haarlem',
    image: 'https://www.iamsterdam.com/media/ama/haarlem/haarlem-hans-guldemond.jpg?h=397&w=700&la=en',
    status: States.HIDDEN
  },
  {
    id: 17,
    text: 'Lemon Chicken',
    image: 'https://www.gimmesomeoven.com/wp-content/uploads/2016/05/Baked-Lemon-Chicken-1-3.jpg',
    status: States.HIDDEN
  },
  {
    id: 18,
    text: 'The Lost City of Z',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/61/The_Lost_City_of_Z_%28film%29.png',
    status: States.HIDDEN
  },
  {
    id: 19,
    text: 'Céline',
    image: 'https://cdn.shopify.com/s/files/1/0384/0161/products/20183-03_Celine_Belt_Bag_Grainy_Leather_Small_2D_0003_1024x1024.jpg?v=1497362893',
    status: States.HIDDEN
  },
  {
    id: 20,
    text: 'Marlboro',
    image: 'http://www.circusmalta.com/wp-content/uploads/Marlboro-Rolling-Tobacco-1-of-6.jpg',
    status: States.HIDDEN
  },
  {
    id: 21,
    text: 'SVU',
    image: 'https://media.gq.com/photos/57bdd0d5ccbaf5561874f3f7/16:9/pass/law_and_order_svu.jpg',
    status: States.HIDDEN
  },
  {
    id: 22,
    text: 'Spaans Dak',
    image: 'http://1.bp.blogspot.com/-OM5d0J3S-cI/UVqBdDa-tyI/AAAAAAAABZo/nYb3vnnwpOA/s1600/800px-Oud-Heverlee_Spaans_Dak_en_paddenstoel.jpg',
    status: States.HIDDEN
  },
  {
    id: 23,
    text: 'Gentrification',
    image: 'https://i.guim.co.uk/img/media/ed24b6db9d85ccb7a4e00b3fc091af867e2c4d19/48_4_4941_2964/master/4941.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=9f3abfa7e021115db179bb3b2f3a81c6',
    status: States.HIDDEN
  },
  {
    id: 24,
    text: 'Eiffel Tower',
    image: 'https://amp.thisisinsider.com/images/58d919eaf2d0331b008b4bbd-750-562.png',
    status: States.HIDDEN
  },
  {
    id: 25,
    text: 'Poopie',
    image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059',
    status: States.HIDDEN
  }
];
