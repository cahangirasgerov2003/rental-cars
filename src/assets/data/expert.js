import { v4 as uuidv4 } from "uuid";
import man1 from "../images/experts/man1.webp";
import man2 from "../images/experts/man2.webp";
import woman1 from "../images/experts/woman1.webp";
import woman2 from "../images/experts/woman2.webp";

const expertsData = [
  {
    id: uuidv4(),
    name: "Dan Abramov",
    experience: "15 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: man1,
  },
  {
    id: uuidv4(),
    name: "Sophie Alpert",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: woman2,
  },
  {
    id: uuidv4(),
    name: "Wes Bos",
    experience: "10 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: man2,
  },
  {
    id: uuidv4(),
    name: "Sarah Drasner",
    experience: "7 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: woman1,
  },
];

export default expertsData;
