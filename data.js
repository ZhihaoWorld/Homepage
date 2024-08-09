export const bio = [
    "Hello there, this is Zhihao Yao. Welcome to my planet!",
    `I am a postdoctoral in bioinformatics, currently working in the group of Junbai Wang at Akershus University Hospital.`,
    `My personal interest`,
    "Thanks for taking the time to learn a little about me! Look forward to meeting you somewhere in the world!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "JavaScript, TypeScript",
        color: "1",
        percentage: "80",
    },
    {
        title: "Frameworks/Libraries",
        skillName: "Angular, RxJS, NGXS",
        color: "6",
        percentage: "70",
    },
    {
        title: "Design",
        skillName: "HTML, Bootstrap, Tailwind",
        color: "4",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub, JIRA, Bitbucket",
        color: "7",
        percentage: "70",
    },
    {
        title: "Tools",
        skillName: "Postman, Chrome DevTools",
        color: "3",
        percentage: "80",
    },
    {
        title: "Analytics",
        skillName: "CleverTap, Countly",
        color: "5",
        percentage: "50",
    },
    {
        title: "IDE",
        skillName: "VS Code",
        color: "6",
        percentage: "70",
    },
];

export const projects = {
    webProjects: [
        {
            projectName: "Programming Diaries",
            image: "images/programmingdiaries.png",
            summary:
                "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
            preview: "https://programmingdiaries.herokuapp.com/",
            techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
        },
        {
            projectName: "Find Your Bank",
            image: "images/findyourbank.png",
            summary:
                "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
            preview: "https://clever-fermi-0d5d76.netlify.app",
            techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
        },
        {
            projectName: "Web Portfolio",
            image: "images/portfolio.png",
            summary:
                "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
            preview: "https://github.com/vinaysomawat/Travographer-Portal",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
        {
            projectName: "Resume Builder",
            image: "images/resume-builder.png",
            summary:
                "Browser based editor to build and download Resumes in a customizable templates.",
            preview: "https://vinaysomawat.github.io/Resume-Builder",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Pizza Ordering ChatBot",
            image: "images/pizzaorderchatbot.png",
            summary:
                "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["Dailogflow", "Firebase"],
        },
        {
            projectName: "WhatsApp-Bot",
            image: "images/whatsappbot.jpg",
            summary:
                "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
            preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
            techStack: ["Selenium", "Chrome Webdriver", "Python"],
        },
        {
            projectName: "Bill Generator",
            image: "images/billgenerator.png",
            summary:
                "GUI to transfer data to excel sheets and generate bills on the local shops.",
            preview: "https://github.com/vinaysomawat/Bill-Generator",
            techStack: ["Tkinter", "Openxlpy", "Python"],
        },
    ],
    androidProjects: [
        {
            projectName: "NITW-CSE",
            image: "images/nitwcse.jpg",
            summary:
                "The Application display details of Department courses, reference books, research, publication and faculty profile.",
            preview: "https://github.com/vinaysomawat/NITW-CSE",
            techStack: ["JAVA", "XML", "Android"],
        },
        {
            projectName: "CareerHigh-App",
            image: "images/carrerhigh.png",
            summary:
                "The Application display the webpages of website careerhigh.in in android devices.",
            preview: "https://github.com/vinaysomawat/CareerHigh-Android",
            techStack: ["JAVA", "XML", "Android"],
        },
    ],
    freelanceProjects: [
        {
            projectName: "SnylloAir.com",
            image: "images/snylloair.png",
            summary:
                "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
            preview: "https://www.snylloair.com/",
            techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        },
        {
            projectName: "Delivery+",
            image: "images/AM-Logo-.png",
            summary: "Android Application to display website in android devices.",
            preview:
                "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
            techStack: ["Android", "JAVA", "Play Store"],
        },
    ],
};

export const experience = [
    {
        title: "Postdoc. in Computational Biology & Bioinformatics",
        duration: "2023.02 - ",
        subtitle: ""Oslo University Hospital and Akershus University Hospital, Lørenskog, Norway",
        details: [],
        tags: ["3D Chromatin Analysis", "Cancer Genomics", "R-loops", "Data Mining"],
        icon: "graduation-cap",
    },
];

export const education = [
        {
        title: "Ph.D. in Computational Mathematics",
        duration: "2019.09 - 2022.06",
        subtitle: "Wuhan University, Wuhan, China",
        details: [],
        tags: ["Mathematical Oncology", "Cancer Evolution", "Multiscale Modeling", "scRNA-Seq"],
        icon: "graduation-cap",
    },
    {
        title: "M.S. in Applied Statistics",
        duration: "2017.09 - 2019.06",
        subtitle: "Wuhan University, Wuhan, China",
        details: [],
        tags: ["Machine Learning", "Statistical Modeling", "Non-linear Correlation", "Multi-omics Data"],
        icon: "book",
    },
    {
        title: "B.S. in Applied Statistics",
        duration: "2013.09 - 2017.06",
        subtitle: "Nanjing University of Posts and Telecommunications, Nanjing, China",
        details: [],
        tags: ["Mathematical Analysis", "Advanced Algebra", "Probability Theory", "Mathematical Statistics"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Google Scholar",
                link: "https://scholar.google.com/citations?user=ag-tWywAAAAJ&hl=en",
            },
            {
                text: "GitHub",
                link: "https://github.com/zhh-yao",
            },
            {
                text: "ResearchGate",
                link: "https://www.researchgate.net/profile/Yao-Zhihao",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Clone this page",
                link: "https://github.com/ZhihaoWorld/Homepage",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Instagram",
                link: "https://www.instagram.com/yyyyzhihao/",
            },
            {
                text: "Facebook",
                link: "https://www.facebook.com/yyyyzhihao",
            },
            {
                text: "WeChat",
                link: "https://www.buymeacoffee.com/r194dME8y",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Vinay Somawat.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
