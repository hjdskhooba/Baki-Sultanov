import gif1 from "../../assets/main/projects/7ig55j.gif"
import gif2 from "../../assets/main/projects/7ig65l.gif"
import gif3 from "../../assets/main/projects/7ig5vf.gif"
import gif4 from "../../assets/main/projects/7ig4cl.gif"

const defaultState = [
  {
    id: 1,
    isOpen: false,
    image: "https://millor-shop.ru/wp-content/themes/millornew/img/icons/logo.png",
    link: "https://miller-shop.netlify.app/",
    example: gif1,
    title: "Online coffee shop",
    description: "A website where people can order coffee drinks to go from a coffee shop. Users can order coffee as a guest or use their created account. Authenticated users can also view their previous orders."
  },
  {
    id: 2,
    isOpen: false,
    image: "https://oceania.ru/upload/iblock/c2c/800x370_adidas_stansmith.jpg",
    link: "https://pet-project-sneakers.vercel.app/",
    example: gif2,
    title: "Online sneakers shop",
    description: "Sneakers-shop - Javascript app with registration and admin panel.\n No frameworks, only JS. To start this project - first you have to start our json-database. Run \" npm start \" in terminal Then run index.html file to open project in browser"
  },
  {
    id: 3,
    isOpen: false,
    image: "https://images.ui8.net/uploads/preview_01_1616943936661.png",
    link: "https://crypter-three.vercel.app/",
    example: gif3,
    title: "NFT Marketplace",
    description: "Crypter is a cross-platform crypto app that makes encryption and decryption convenient while still upholding strong security. It tackles one of the weakest links in most security systems today - weak passwords."
  },
  {
    id: 4,
    isOpen: false,
    image: "https://i.ytimg.com/vi/4cTwLn-7RPk/maxresdefault.jpg",
    link: "https://stuff-shop-six.vercel.app/",
    example: gif4,
    title: "Online stuff shop",
    description: "stuff-shop - Is an online-shop with lot's of cool stuff. In this project, as a package manager I use 'pnpm' So run \"pnpm i\" to install all dependencies."
  },
  {
    id: 4,
    isOpen: false,
    image: "https://i.ytimg.com/vi/4cTwLn-7RPk/maxresdefault.jpg",
    link: "https://stuff-shop-six.vercel.app/",
    example: gif4,
    title: "Online stuff shop",
    description: "stuff-shop - Is an online-shop with lot's of cool stuff. In this project, as a package manager I use 'pnpm' So run \"pnpm i\" to install all dependencies."
  },
];

export const projects = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return state;
    default:
      return state;
  }
};
