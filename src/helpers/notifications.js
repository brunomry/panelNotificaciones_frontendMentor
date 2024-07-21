import webber from "../assets/images/avatar-mark-webber.webp"
import gray from "../assets/images/avatar-angela-gray.webp"
import kim from "../assets/images/avatar-anna-kim.webp"
import smith from "../assets/images/avatar-kimberly-smith.webp"
import peterson from "../assets/images/avatar-nathan-peterson.webp"
import hasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp"
import thompson from "../assets/images/avatar-jacob-thompson.webp"
import chess from "../assets/images/image-chess.webp"

const notifications = [
    {
      id: 1,
      user: "Mark Webber",
      userImage: webber,
      action: "reacted to your recent post",
      content: "My first tournament today!",
      time: "1m ago",
      type: "reaction",
      message: "",
      image: null,
      status: "no leida"
    },
    {
      id: 2,
      user: "Angela Gray",
      userImage: gray,
      action: "followed you",
      content: "",
      time: "5m ago",
      type: "follow",
      message: "",
      image: null,
status: "no leida"
    },
    {
      id: 3,
      user: "Jacob Thompson",
      userImage: thompson,
      action: "has joined your group",
      content: "Chess Club",
      time: "1 day ago",
      type: "group-join",
      message: "",
      image: null,
      status: "no leida"
    },
    {
      id: 4,
      user: "Rizky Hasanuddin",
      userImage: hasanuddin,
      action: "sent you a private message",
      content: "",
      time: "5 days ago",
      type: "private-message",
      message: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      image: null,
      status: "leida"
    },
    {
      id: 5,
      user: "Kimberly Smith",
      userImage: smith,
      action: "commented on your picture",
      content: "",
      time: "1 week ago",
      type: "comment",
      message: "",
      image: chess,
      status: "leida"
    },
    {
      id: 6,
      user: "Nathan Peterson",
      userImage: peterson,
      action: "reacted to your recent post",
      content: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      type: "reaction",
      message: "",
      image: null,
      status: "leida"
    },
    {
      id: 7,
      user: "Anna Kim",
      userImage: kim,
      action: "left the group",
      content: "Chess Club",
      time: "2 weeks ago",
      type: "group-leave",
      message: "",
      image: null,
      status: "leida"
    }
  ];
  
  export default notifications;
  