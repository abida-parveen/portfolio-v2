import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import insta from "../../../assets/icons/instagram.svg";
import git from "../../../assets/icons/github.svg";
import twitter from "../../../assets/icons/twitter.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  const icons = [
    { id: 1, icon: insta, url: "https://www.instagram.com/imabida.hussain/" },
    { id: 2, icon: git, url: "https://github.com/abida-parveen" },
    { id: 3, icon: twitter, url: "https://twitter.com/parida_abro" },
    {
      id: 4,
      icon: linkedin,
      url: "https://www.linkedin.com/in/abida-parveen-13806b155/",
    },
  ];
  return (
    <footer className="container">
      <div className={`${styles.footer_container}`}>
        <div className={`${styles.footer_row}`}>
          {icons.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              className={`${styles.footer_icons_links}`}
              target="_blank"
            >
              <Image src={item.icon} alt="brand-icon" />
            </Link>
          ))}
        </div>
        <p>© {new Date().getFullYear()} - Abida Parveen</p>
      </div>
    </footer>
  );
};

export default Footer;
