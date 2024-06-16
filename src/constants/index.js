import {
  blackImg,
  blueImg,
  highlightone,
  highlightthree,
  highlightfour,
  whiteImg,
  yellowImg,
  highlightfive,
} from "../utils";

export const navLists = ["Shop", "AI", "Displays", "SmartThings"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "AI from preview to post",
      "Super HDR with AI assist",
      "Capture your night up close",
    ],
    video: highlightone,
    videoDuration: 35,
  },
  {
    id: 2,
    textLists: [
      "Get 2x, 3x, 5x and even 10x close-ups",
      "Our most impressive zoom yet",
    ],
    video: highlightfive,
    videoDuration: 35,
  },
  {
    id: 3,
    textLists: [
      "Circle to search",
      "Circle it, find it",
      "Search like never before",
    ],
    video: highlightthree,
    videoDuration: 35,
  },
  {
    id: 4,
    textLists: ["Never be lost in translation", "Find the right words fast."],
    video: highlightfour,
    videoDuration: 35,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
