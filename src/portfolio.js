/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import TypeScriptIcon from "./assets/icons/typescript.svg"; // Import your custom SVG icon

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2100 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kalash Rami",
  title: "Hi all, I'm Kalash",
  subTitle: emoji(
    "An experienced Full Stack Developer 🖥️ focused on creating efficient, scalable, and user-friendly web solutions. My expertise spans React ⚛️, Angular 🔺, Java EE ☕️, cloud technologies ☁️, Node.js 🟢, Python 🐍, and various other tools. I excel in tackling complex projects and fostering innovation."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kalash387",
  linkedin: "https://www.linkedin.com/in/kalash-rami/",
  gmail: "kalashrami387@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
      color: "#E34F26" // HTML5 orange-red
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
      color: "#1572B6" // CSS3 blue
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass",
      color: "#CC6699" // Sass pink
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      color: "#F7DF1E" // JavaScript yellow
    },
    {
      skillName: "TypeScript",
      custom: true,
      iconPath: "./assets/icons/typescript.svg",
      color: "#3178C6" // TypeScript blue
    },
    {
      skillName: "C",
      custom: true,
      iconPath: "./assets/icons/c.svg",
      color: "#A8B9CC" // C blue
    },
    {
      skillName: "C++",
      custom: true,
      iconPath: "./assets/icons/c++.svg",
      color: "#A8B9CC" // C++ blue
    },
    {
      skillName: "C#",
      custom: true,
      iconPath: "./assets/icons/c-sharp.svg",
      color: "#239120" // C# green
    },
    {
      skillName: "Java",
      custom: true,
      iconPath: "./assets/icons/java.svg",
      color: "#A8B9CC" // Java blue
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      color: "#3776AB" // Python blue
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
      color: "#339933" // Node.js green
    },
    {
      skillName: "Angular",
      custom: true,
      iconPath: "./assets/icons/angular.svg",
      color: "#A8B9CC" // Angular blue
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
      color: "#61DAFB" // React blue
    },
    {
      skillName: "Express.js",
      custom: true,
      iconPath: "./assets/icons/expressjs.svg",
      color: "#000000" // Express.js black
    },
    {
      skillName: "Spring Boot",
      custom: true,
      iconPath: "./assets/icons/spring-boot.svg",
      color: "#6DB33F" // Spring Boot green
    },
    {
      skillName: ".NET",
      custom: true,
      iconPath: "./assets/icons/dotnet.svg",
      color: "#512BD4" // .NET purple
    },
    {
      skillName: "WPF",
      custom: true,
      iconPath: "./assets/icons/wpf.svg",
      color: "#0094BC" // WPF blue
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
      color: "#563d7c" // Bootstrap purple
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm",
    //   color: "#CB3837" // NPM red
    // },
    // {
    //   skillName: "MySQL",
    //   fontAwesomeClassname: "fas fa-database",
    //   color: "#336791" // SQL database blue
    // },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      color: "#FF9900" // AWS orange
    },
    {
      skillName: "Azure",
      custom: true,
      iconPath: "./assets/icons/azure.svg",
      color: "#0078D4" // Azure blue
    },
    {
      skillName: "Microsoft SQL Server",
      custom: true,
      iconPath: "./assets/icons/microsoft-sql-server.svg",
      color: "#CC2927" // Microsoft SQL Server red
    },
    {
      skillName: "MongoDB",
      custom: true,
      iconPath: "./assets/icons/mongodb.svg",
      color: "#47A248" // MongoDB green
    },
    {
      skillName: "MySQL",
      custom: true,
      iconPath: "./assets/icons/mysql.svg",
      color: "#4479A1" // MySQL blue
    },
    {
      skillName: "Derby",
      custom: true,
      iconPath: "./assets/icons/derby.svg",
      color: "#0094BC" // Derby blue
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      color: "#2496ED" // Docker blue
    },
    {
      skillName: "Kubernetes",
      custom: true,
      iconPath: "./assets/icons/kubernetes.svg",
      color: "#326CE5" // Kubernetes blue
    },
    {
      skillName: "Postman",
      custom: true,
      iconPath: "./assets/icons/postman.svg",
      color: "#FF6C37" // Postman orange
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github",
      color: "#FFFFFF" // GitHub white
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
      color: "#FFFFFF" // Git white
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira",
      color: "#0052CC" // Jira blue
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centennial College",
      logo: require("./assets/images/Centennial_logo.png"),
      subHeader: "Mobile Application Development",
      duration: "September 2024 - April 2025",
      // desc: "GPA",
      descBullets: [
        // "GPA: 3.6/4"
      ]
    },
    {
      schoolName: "Seneca College",
      logo: require("./assets/images/Seneca_Logo.png"),
      subHeader: "Postgraduate degree",
      duration: "September 2023 - April 2024",
      // desc: "GPA",
      descBullets: [
        "GPA: 3.6/4"
      ]
    },
    {
      schoolName: "Gujarat Technological University",
      logo: require("./assets/images/GTU.jpeg"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "June 2018 - May 2022",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["GPA: 8.96/10"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr. Software Developer",
      company: "Confidosoft Solutions",
      companylogo: require("./assets/images/Confidosoft.png"),
      date: "September 2021 – July 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Implemented advanced optimization techniques to significantly reduce page load times by 40% in an Angular web application, thereby enhancing user experience.",
        "Integrated third-party UI libraries (DevEx and NGXS) to enrich frontend interfaces.",
        "Designed feature-rich desktop applications using WPF, expanding system functionality and user capabilities.",
        "Developed robust and scalable RESTful APIs using .NET, ensuring smooth backend integration and achieving a 20% reduction in API downtime, resulting in enhanced system performance and reliability.",
        "Played a key role in fostering team expertise by mentoring and training over 50 interns, thereby strengthening the organization’s Angular development capabilities."
      ]
    },
    {
      role: "Java Developer Intern",
      company: "BrainyBeam Technologies",
      companylogo: require("./assets/images/BrainyBeam.png"),
      date: "May 2021 – June 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Streamlined the user complaint tracking and resolution processes by developing an efficient web-based system using Java J2EE technologies such as JSP, Servlets, and a structured Model layer.",
        "Ensured data security by implementing secure data handling practices within the Apache Derby database and integrating user authentication and session management systems.",
        "Collaborated effectively with cross-functional teams to promptly troubleshoot issues, contributing to optimalsystem performance."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Portfolio.png"),
      projectName: "Portfolio",
      projectDesc: "This portfolio showcases my skills in modern web development, featuring a responsive design and smooth animations built with React, Redux, Context API, and various libraries like React Typed and Lottie React.",
      footerLink: [
        {
          name: "Live Website",
          url: "https://kalashdevfolio.netlify.app",
        },
        {
          name: "Github",
          url: "https://github.com/kalash387/portfolio"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/CovidTracker.png"),
      projectName: "Covid-19 Tracker",
      projectDesc: "Developed a COVID-19 Tracker using React, React-Strap, Spring Boot, and third-party APIs to provide real-time global case updates.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/kalash387/Covid-Tracker"
        }
      ]
    },
    {
      image: require("./assets/images/CMS.png"),
      projectName: "Complaint Management System",
      projectDesc: "Built a robust Complaint Management System for an internet broadband provider leveraging React, Bootstrap, Java EE, and Derby, delivering secure authentication, effective session management, and real-time tracking.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/kalash387/Covid-Tracker"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and Achievements 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle:
        "Earned \"The Bits and Bytes of Computer Networking\" certificate by Google, gaining expertise in networking fundamentals, protocols, cloud computing, troubleshooting, and network services.",
      image: require("./assets/images/Google.webp"),
      imageAlt: "Google",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/K98UD2LSMN6A"
        }
      ]
    },

    {
      title: "Python Data Structures",
      subtitle: "Earned the \"Python Data Structures\" career certificate, mastering fundamental concepts such as data structures and algorithms offered by the University of Michigan",
      image: require("./assets/images/Python.png"),
      imageAlt: "Python",
      footerLink: [
        { name: "View Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/K5VSZ7G75DE4" }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "JavaScript",
      subtitle: "Achieved the \"Interactivity with JavaScript\" certification, mastering advanced techniques in JavaScript programming for interactive web applications through an online course authorized by the University of Michigan ",
      image: require("./assets/images/Javascript.png"),
      imageAlt: "JavaScript",
      footerLink: [
        { name: "View Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/84ACDNBGURQU" }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Salesforce Trailblazer",
      subtitle: "Earned 63 badges on Salesforce Trailblazer, demonstrating expertise in areas such as Mobile Strategy Development, Service Cloud, Apex Basics, Branded Mobile Apps, Identity Basics, CRM Analytics, Data Cloud, and Lightning Experience Features.",
      image: require("./assets/images/Salesforce.png"),
      imageAlt: "Salesforce",
      footerLink: [
        { name: "View profile", url: "https://www.salesforce.com/trailblazer/kalash-rami" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "JPMorgan Chase & Co.",
      subtitle:
        "Completed JPMorgan Chase & Co. Software Engineering Virtual Experience, mastering React, TypeScript, Python, Git, web applications, financial data analysis, technical communication, and contributing to the open-source community.",
      image: require("./assets/images/jp-morgan.png"),
      imageAlt: "JP Morgan Chase & Co.",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1kDGGBbkuOr70YcFuz6ugCT9CRsM5mn5K/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "KPMG",
      subtitle: "Successfully completed the KPMG Data Analytics Consulting Virtual Internship on Forage, mastering data quality assessment, insights generation, and visualization to enhance analytical and problem-solving skills.",
      image: require("./assets/images/KPMG.png"),
      imageAlt: "KPMG",
      footerLink: [
        { name: "View Certificate", url: "https://drive.google.com/file/d/1ii-NFNhb005jBK2_KyrrrMZmih-QCgJB/view?usp=sharing" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking to hire or discuss potential opportunities? Feel free to get in touch.",
  number: "+1 437-261-6110",
  email_address: "kalashrami387@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
