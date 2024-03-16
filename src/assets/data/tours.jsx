import jaipur_1 from "../Jaipur/jaipur_1.jpg";
import manali from "../Jaipur/manali.jpg";
import Munnar from "../Jaipur/munnar.jpg";
import wayanad from "../Jaipur/wayanad.png";
import hyderabad from "../Jaipur/hyderabad.jpg";
import chennai from "../Jaipur/chennai.jpg";
import varanasi from "../Jaipur/varanasi.jpg";
import delhi from "../Jaipur/delhi.jpg";

const tours = [
  {
    id: "01",
    title: "Jaipur",
    city: "Jaipur",
    price: 99,
    desc: "this is the description",
    photo:jaipur_1
  },

  {
    id: "02",
    title: "Manali",
    city: "Manali",
    price: 99,
    desc: "this is the description",
    photo:manali
  },

  {
    id: "03",
    title: "Munnar",
    city: "Munnar",
    price: 99,
    desc: "this is the description",
    photo: Munnar,
  },
  {
    id: "04",
    title: "Edakkal Cave",
    city: "Wayanad",
    price: 99,
    desc: "this is the description",
    photo: wayanad,
  },
  {
    id: "05",
    title: "Golconda Fort",
    city: "Hyderabad",
    price: 99,
    desc: "this is the description",
    photo: hyderabad,
    featured: false,
  },
  {
    id: "06",
    title: "Kapaleeshwarar Temple",
    city: "Chennai",
    price: 99,
  
    desc: "this is the description",
    photo: chennai,
  },
  {
    id: "07",
    title: "Shri Kashi Vishwanath Temple",
    city: "Varanasi",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: varanasi,
    featured: false,
  },
  {
    id: "08",
    title: "Red Fort",
    city: "Delhi",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: delhi,
    featured: false,
  },
];

export default tours;