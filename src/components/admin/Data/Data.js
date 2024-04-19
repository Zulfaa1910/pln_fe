// Sidebar imports
import {
  UilEstate,
  UilUser,
  UilExchangeAlt,
  UilCommentDots,
  UilAnalytics,
  UilSignout,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilReceiptAlt, UilChatInfo } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../../../imgs/img1.png";
import img2 from "../../../imgs/img2.png";
import img3 from "../../../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilUser,
    heading: "User",
  },
  {
    icon: UilExchangeAlt,
    heading: "Transaksi",
  },
  {
    icon: UilCommentDots,
    heading: "Chat",
  },
  {
    icon: UilAnalytics,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "PLN",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "PLN",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "MITRA",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilReceiptAlt,
    series: [
      {
        name: "MITRA",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "TAK",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilChatInfo,
    series: [
      {
        name: "TAK",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has completed a transaction for Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has completed a transaction and received a Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has completed a transaction for Apple smart watch and Samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
