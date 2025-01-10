import greekSalad from './images/greeksalad.jpg';
import bruchetta from './images/bruchetta.svg';
import desert from './images/desert.jpg';
import babaghanoush from './images/babaghanoush.jfif';
import falafel from './images/falafel.jfif';
import fattoush from './images/fattoush.jfif';
import mezze from './images/mezze.jfif';
import moussaka from './images/mousakka.jfif';
import shakshuka from './images/shakshuka.jfif';
import sardines from './images/sardines.jfif';
import souvlaki from './images/souvlaki.jfif';
import spanakopita from './images/spanakopita.jfif';


const recipes = [
  {
    id: 1,
    title: "Greek Salad",
    price: 12.99,
    image: greekSalad,
    description:
      "Famous salad of crispy lettuce, peppers, olives, feta cheese, garlic and rosemary croutons.",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: bruchetta,
    description:
      "Our Bruschetta is made from grilled bread smeared and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: desert,
    description:
      "This comes straight from grandma's recipe book, every last ingredient is sourced and authentic.",
  },
  {
    id: 4,
    title: "Baba Ghanoush",
    price: 6.99,
    image: babaghanoush,
    description:
      "A smoky and creamy eggplant dip made with tahini, garlic, and lemon juice.",
  },
  {
    id: 5,
    title: "Falafel",
    price: 7.99,
    image: falafel,
    description:
      "Crispy golden chickpea fritters served with fresh tahini sauce and salad.",
  },
  {
    id: 6,
    title: "Fattoush",
    price: 8.50,
    image: fattoush,
    description:
      "A Levantine salad made with fresh vegetables and toasted pita bread, seasoned with sumac.",
  },
  {
    id: 7,
    title: "Mezze Platter",
    price: 15.99,
    image: mezze,
    description:
      "A delicious assortment of hummus, tabbouleh, grape leaves, and more.",
  },
  {
    id: 8,
    title: "Moussaka",
    price: 13.50,
    image: moussaka,
    description:
      "A classic Greek casserole made with layers of eggplant, ground beef, and béchamel sauce.",
  },
  {
    id: 9,
    title: "Shakshuka",
    price: 10.50,
    image: shakshuka,
    description:
      "A Middle Eastern dish of poached eggs in a spicy tomato and bell pepper sauce.",
  },
  {
    id: 10,
    title: "Grilled Sardines",
    price: 12.75,
    image: sardines,
    description:
      "Freshly grilled sardines served with a tangy lemon and herb dressing.",
  },
  {
    id: 11,
    title: "Souvlaki",
    price: 11.99,
    image: souvlaki,
    description:
      "Marinated meat skewers grilled to perfection, served with tzatziki sauce and pita.",
  },
  {
    id: 12,
    title: "Spanakopita",
    price: 6.50,
    image: spanakopita,
    description:
      "A savory Greek pie made with spinach, feta cheese, and crispy phyllo pastry.",
  },
];

export default recipes;
