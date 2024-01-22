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
    distance: 3000,
    price: 9900,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: jaipur_1,
    featured: true,
  },
  {
    id: "02",
    title: "Manali",
    city: "Manali",
    distance: 400,
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
    photo: manali,
    featured: true,
  },
  {
    id: "03",
    title: "Munnar",
    city: "Munnar",
    distance: 5000,
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
    photo: Munnar,
    featured: true,
  },
  {
    id: "04",
    title: "Edakkal Cave",
    city: "Wayanad",
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
    photo: wayanad,
    featured: true,
  },
  {
    id: "05",
    title: "Golconda Fort",
    city: "Hyderabad",
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
    photo: hyderabad,
    featured: false,
  },
  {
    id: "06",
    title: "Kapaleeshwarar Temple",
    city: "Chennai",
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
    photo: chennai,
    featured: false,
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