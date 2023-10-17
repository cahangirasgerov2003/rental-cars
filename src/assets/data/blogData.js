import blog1 from "../images/latest__blogs/blog1.jpg";
import blog2 from "../images/latest__blogs/blog2.jpg";
import blog3 from "../images/latest__blogs/blog3.jpg";
import { v4 as uuidv4 } from "uuid";
const blogData = [
  {
    id: uuidv4(),
    title: "The best way to drive cars",
    imgBlog: blog1,
    desc: "Traveling and exploring new places is an exhilarating part of life. However, to embark on your journeys, you often require a comfortable and secure means of transportation. Opting for rental car services is arguably the most appealing and convenient way to achieve this. Our rental car platform is geared towards making the process seamless and ensuring your journey is trouble-free.",
    quote: "",
    date: "5.8.2023",
    time: "12:36 PM",
    author: "Cahangir Əsgərov",
  },
  {
    id: uuidv4(),
    title: "The best way to give trip",
    imgBlog: blog3,
    desc: "Traveling, exploring new places, and embarking on journeys is one of life's most wonderful aspects. However, you need a comfortable and reliable means of transportation, and that's where rental cars come into play. The rental cars we offer are designed to provide you with the keys to a seamless and safe journey.",
    quote: "",
    date: "16.10.2023",
    time: "04:12 AM",
    author: "Cahangir Əsgərov",
  },
  {
    id: uuidv4(),
    title: "If your car battery is down",
    imgBlog: blog2,
    desc: "A flat car battery can disrupt your day and leave you stranded at the most inconvenient times. But what if there was a way to ensure you never find yourself in that situation without a solution? That's where our rental car service comes in.",
    quote: "",
    date: "2.9.2023",
    time: "18:32 PM",
    author: "Cahangir Əsgərov",
  },
];

export default blogData;
