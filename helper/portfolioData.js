const portfolioData = [
  {
    id: 1,
    title: "Crown Clothing",
    companyBuiltWith: "Personal Project",
    projectColor: "#5555DB",
    desc: "Project aims to develop a modern e-commerce website using cutting-edge technologies such as React, Redux, and Firebase. This platform will provide users with an intuitive and seamless shopping experience while offering sellers an efficient way to manage their products and orders.",
    // whatIdid:
    //   "I was responisblie for front-end. I created landing pages, dashboards, sign-up/login with linkedin, scheduling, jotform integeration, api integeration and real-time chat. I used reactjs on front-end and redux for state-management and socket.io for real-time chat.",

    // link: "https://www.hellocardo.org/",
    // moreInfoLink: "https://www.carthagos.com/projects/Cardo",
    projectLogo: require("../assets/images/portfolio/crown-clothing/crown.svg")
      .default,
    image: require("../assets/images/portfolio/crown-clothing/one.PNG"),
    status: "underdevelopment",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/crown-clothing/one.PNG"),
        desc: "Main",
        title: "Crown Clothing",
      },
      {
        id: 2,
        img: require("../assets/images/portfolio/crown-clothing/two.PNG"),
        desc: "Shop",
        title: "Crown Clothing",
      },
      {
        id: 3,
        img: require("../assets/images/portfolio/crown-clothing/three.PNG"),
        desc: "Checkout",
        title: "Crown Clothing",
      },
    ],
    skills: ["HTML/CSS", "Javascript", "ReactJS", "Redux", "Firebase"],
  },
  {
    id: 2,
    title: "Excersys",
    desc: "An engaging and professional portfolio website for company, showcasing their services, projects, and expertise. By utilizing modern technologies such as Next and Redux, provided a visually appealing and interactive platform that highlights their capabilities and past accomplishments.",
    companyBuiltWith: "Excersys",

    link: "https://www.excersys.com/",
    whatIdid: "I created the landing page of the website.",

    image: require("../assets/images/portfolio/excersys/one.PNG"),
    status: "live",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/excersys/one.PNG"),
        desc: "Main",
        title: "excersys",
      },
      {
        id: 2,
        img: require("../assets/images/portfolio/excersys/two.png"),
        desc: "service",
        title: "excersys",
      },
      {
        id: 3,
        img: require("../assets/images/portfolio/excersys/three.png"),
        desc: "why",
        title: "excersys",
      },
    ],
    skills: ["HTML/CSS", "Javascript", "Next", "Redux", "Bootstrap"],
  },
  {
    id: 3,
    title: "Oh! Entertainment",
    desc: "A comprehensive event management application that empowers users to seamlessly book and manage a wide range of events, from weddings and birthdays to corporate gatherings. Built with modern technologies and user-centric design, this app will provide a one-stop solution for planning and organizing memorable occasions.",
    whatIdid:
      "Created layout from scratch. Designed a custom editable table component to enhance user interaction and data management. YouTube and Spotify API Integration: Integrated YouTube and Spotify APIs to enable users to search for tracks, play them, and seamlessly add them to their event's playlist. State Management: Managed component state using Redux to ensure a smooth and consistent user experience.",
    companyBuiltWith: "Excersys",

    image: require("../assets/images/portfolio/oh-ent/one.PNG"),
    status: "live",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/oh-ent/one.PNG"),
        desc: "Home Page",
        title: "Oh! Entertainment",
      },
      {
        id: 2,
        img: require("../assets/images/portfolio/oh-ent/two.PNG"),
        desc: "Booking Form",
        title: "Oh! Entertainment",
      },
      {
        id: 3,
        img: require("../assets/images/portfolio/oh-ent/three.PNG"),
        desc: "Search Tracks",
        title: "Oh! Entertainment",
      },
    ],
    skills: ["HTML/CSS", "Javascript", "React", "Redux", "Firebase"],
  },

  {
    id: 4,
    title: "EBC",
    desc: "this project focuses on the development of an exciting and engaging Battle Championship app. This app provides users with the opportunity to participate in competitive leagues and tournaments, showcasing their skills and strategies in thrilling battles. Powered by React and modern web technologies, this app offers an immersive platform for users to join leagues, view upcoming tournaments, and engage in head-to-head battles.",
    companyBuiltWith: "Freelancing",

    image: require("../assets/images/portfolio/ebc/one.PNG"),
    status: "live",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/ebc/one.PNG"),
        desc: "Home Page",
        title: "Oh! Entertainment",
      },
      {
        id: 2,
        img: require("../assets/images/portfolio/ebc/two.PNG"),
        desc: "Booking Form",
        title: "Oh! Entertainment",
      },
      {
        id: 3,
        img: require("../assets/images/portfolio/ebc/three.PNG"),
        desc: "Search Tracks",
        title: "Oh! Entertainment",
      },
    ],
    skills: ["HTML/CSS", "Javascript", "React", "Redux", "Node", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: "BTFX",
    desc: "Creation of a user-friendly mobile app designed for online learning. Utilizing Expo CLI and modern mobile development practices, the app provides a platform for users to access a wide variety of courses across different topics. Much like the BuddyBoss platform, this app aims to deliver an immersive learning experience to users through intuitive navigation, engaging course content, and interactive features.",
    companyBuiltWith: "Freelancing",
    image: require("../assets/images/portfolio/btfx/screen-one.png"),
    status: "live",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/btfx/screen-one.png"),
        desc: "Main",
        title: "BTFX",
      },
      {
        id: 2,
        img: require("../assets/images/portfolio/btfx/screen-two.png"),
        desc: "Main",
        title: "BTFX",
      },
    ],
    skills: [
      "HTML/CSS",
      "Javascript",
      "React-Native",
      "Expo-cli",
      "Redux",
      "Firebase",
    ],
  },
  {
    id: 6,
    title: "FoodApp",
    desc: "I orchestrated the entire front-end development of a mobile app using React Native Expo. This app not only showcases a variety of snack shops and their food offerings but also integrates Google and Facebook authentication via Firebase. By incorporating user-friendly navigation, detailed food item displays, and interactive customer ratings and reviews, I ensured a comprehensive and engaging platform for users seeking delicious treats.",
    companyBuiltWith: "Personal Project",
    image: require("../assets/images/portfolio/food-app/main-screens.png"),
    status: "underdevelopment",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/food-app/main-screens.png"),
        desc: "Main",
        title: "Food App",
      },
    ],
    skills: [
      "HTML/CSS",
      "Javascript",
      "React-Native",
      "Expo-cli",
      "Redux",
      "Firebase",
    ],
  },
  {
    id: 7,
    title: "Wayt",
    desc: "Complete frontend development and worked on authentication with email and password of a mobile application using react expo-cli",
    companyBuiltWith: "Freelancing",

    image: require("../assets/images/portfolio/wayt/main-screens.png"),
    status: "live",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/wayt/main-screens.png"),
        desc: "Main",
        title: "Wayt",
      },
    ],
    skills: [
      "HTML/CSS",
      "Javascript",
      "React-Native",
      "Expo-cli",
      "Redux",
      "Firebase",
    ],
  },
  {
    id: 8,
    title: "Food Meter",
    desc: "I developed a dynamic Food Calorie Count application using Android Studio, leveraging Java/XML. The app utilizes image recognition to accurately calculate food calories. I integrated a custom model through AutoMLKit, established secure authentication with a dedicated database, and implemented real-time updates using Firebase. Furthermore, I designed insightful monthly calorie consumption graphs for users.",

    companyBuiltWith: "University FYP",

    image: require("../assets/images/portfolio/fyp/Frame 10.png"),
    status: "underdevelopment",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/fyp/Frame 10.png"),
        desc: "Main",
        title: "Food Meter",
      },
    ],
    skills: ["XML", "Java", "Android Studio", "Firebase"],
  },
  {
    id: 9,
    title: "Hassan Store",
    desc: "E-Commerce Shopping Web App, where user can buy new or refurbished mobile phones in Pakistan",
    companyBuiltWith: "HSNA",

    link: "https://www.hassanstore.com/",
    // whatIdid: "I created the landing page of the website.",

    image: require("../assets/images/portfolio/hassan-store/HassanStore.JPG"),
    status: "live",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/hassan-store/HassanStore.JPG"),
        desc: "Home Page",
        title: "hassanstore",
      },
      {
        id: 2,
        img: require("../assets/images/portfolio/hassan-store/PhoneCategory.JPG"),
        desc: "Phone Category",
        title: "hassanstore",
      },
      {
        id: 3,
        img: require("../assets/images/portfolio/hassan-store/PhonePage.JPG"),
        desc: "Phone Page",
        title: "hassanstore",
      },
      {
        id: 4,
        img: require("../assets/images/portfolio/hassan-store/Cart.JPG"),
        desc: "Cart",
        title: "hassanstore",
      },
    ],
    skills: ["HTML/CSS", "Javascript", "Wordpress", "WooCommerce", "Ecommerce"],
  },
  {
    id: 10,
    title: "HSNA Limited",
    companyBuiltWith: "HSNA",

    desc: "Company Website of HSNATech",
    whatIdid:
      "I created all the webiste dynamically, with admin dashboard. Where admin was able to update the content and portfolio of the website.",

    link: "https://www.hsnatech.com/",
    image: require("../assets/images/portfolio/hsna-tech/HSNA.JPG"),
    status: "live",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/hsna-tech/HSNA.JPG"),
        desc: "Home Page",
        title: "HSNA",
      },
      {
        id: 2,
        img: require("../assets/images/portfolio/hsna-tech/HSNA1.JPG"),
        desc: "Services",
        title: "HSNA",
      },
      {
        id: 3,
        img: require("../assets/images/portfolio/hsna-tech/HSNA2.JPG"),
        desc: "Portfolio",
        title: "HSNA",
      },
    ],
    skills: [
      "HTML/CSS",
      "Javascript",
      "Bootstrap",
      "JQuery",
      "Ajax",
      "PHP",
      "MySQL",
    ],
  },
  {
    id: 11,
    title: "Tripifyy",
    desc: "It is a platform for tourist and trip organiser. where organiser can select services like hotel, transport, restaurant etc and create a trip and touris can join trip. They can also interact via post and comments if tourist have any queries. tourist will be able to rate after the trip is complete.",
    companyBuiltWith: "Personal Project",
    image: require("../assets/images/portfolio/tripifyy/Home.JPG"),
    status: "underdevelopment",
    carousel: [
      {
        id: 1,
        img: require("../assets/images/portfolio/tripifyy/Home.JPG"),
        desc: "Home Page",
        title: "Tripifyy",
      },
      {
        id: 2,
        img: require("../assets/images/portfolio/tripifyy/4.JPG"),
        desc: "User Home",
        title: "Tripifyy",
      },
      {
        id: 3,
        img: require("../assets/images/portfolio/tripifyy/Capture.JPG"),
        desc: "Organizer Home",
        title: "Tripifyy",
      },
    ],
    skills: [
      "HTML/CSS",
      "Javascript",
      "Bootstrap",
      "ReactJS",
      "Redux",
      "Web Sockets",
      "Express",
      "Node.js",
      "MongoDB",
    ],
  },
];

export default portfolioData;
