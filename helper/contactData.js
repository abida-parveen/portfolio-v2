import pinLight from '../assets/icons/pin-light.svg'
import pinDark from "../assets/icons/pin-dark.svg";
import phoneLight from "../assets/icons/phone-call-purple.svg";
import phoneDark from "../assets/icons/phone-call-dark.svg";
import mailLight from "../assets/icons/mail-light.svg";
import mailDark from "../assets/icons/mail-dark.svg";

const contactData = [
  {
    id: 1,
    text: ["Sindh, Pakistan"],
    iconLight: pinLight,
    iconDark: pinDark,
    link: "https://www.google.com/maps/@24.879071125137827,67.02133135396176,20.86z",
  },
  {
    id: 2,
    text: ["+92 301 2543105"],
    iconLight: phoneLight,
    iconDark: phoneDark,
    link: "tel:+923012543105",
  },
  {
    id: 3,
    text: ["abida.parveen840@gmail.com"],
    iconLight: mailLight,
    iconDark: mailDark,
    link: "mailto:abida.parveen840@gmail.com",
  },
];
export default contactData