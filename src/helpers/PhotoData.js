import slideOne from '../assets/images/photo_1.jpg';
import slideTwo from '../assets/images/photo_2.jpg';
import slideThree from '../assets/images/photo_3.jpg';

export const slideDataArray = [
  {
    key: 'slideOne',
    heading: `The Roberts Family's Story`,
    slide: slideOne,
    slideText:
      'The circumstances that might lead to homelessness can include loss of income or transportation, a falling out with loved ones, or an abrupt economic downturn. For Brandon and Jennifer, it was all of these things.',
    buttonText: 'More client stories',
    alt: 'Photo for Stories of Hope',
  },
  {
    key: 'slideTwo',
    slide: slideTwo,
    heading: 'Community Outreach',
    slideText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi
      tempora iste nesciunt illo. Ex recusandae officia impedit. Repellat
      sapiente quidem animi in laborum nisi iure saepe, dolore perferendis
      nemo praesentium sunt, ipsum error eum dolores, magni optio sint
      mollitia.`,
    buttonText: 'Place holder button',
    alt: 'Photo of family',
  },
  {
    key: 'slideThree',
    slide: slideThree,
    heading: 'Weather or Not',
    slideText:
      'A supercell storm over the Wichita Mountains wildlife refuge. Free use photo taken from Unsplash',
    buttonText: 'Cool Storm Photos',
    alt: 'Photo of supercell over Kansas',
  },
];
