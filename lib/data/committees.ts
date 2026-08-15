export type CommitteeMember = {
  name: string;
  affiliation?: string;
  href?: string;
  image?: string;
  tba?: boolean;
};

export type CommitteeGroup = {
  title: string;
  members: CommitteeMember[];
};

export const committeeGroups: CommitteeGroup[] = [
  {
    title: "Patrons",
    members: [
      {
        name: "Prof. M. V. Kartikeyan",
        affiliation: "Director, IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/kartik@iiitdm.ac.in",
        image: "/images/committees/mv-kartikeyan.jpg",
      },
      {
        name: "Prof. Mukul Sharad Sutaone",
        affiliation: "Director, IIIT Allahabad",
        href: "https://www.iiita.ac.in/institute/message_from_director/",
        image: "/images/committees/mukul-sutaone.jpg",
      },
      {
        name: "Prof. Sri Niwas Singh",
        affiliation: "Director, ABV-IIITM Gwalior",
        href: "https://www.iiitm.ac.in/index.php/director",
        image: "/images/committees/sri-niwas-singh.jpg",
      },
    ],
  },
  {
    title: "General Chairs",
    members: [
      {
        name: "Prof. R. Balasubramanian",
        affiliation: "IIT Roorkee",
        href: "https://www.iitr.ac.in/~CSE/Balasubramanian_R_",
        image: "/images/committees/r-balasubramanian.jpg",
      },
      {
        name: "Prof. Satish Kumar Singh",
        affiliation: "IIIT Allahabad",
        href: "https://cvbl.iiita.ac.in/sks/",
        image: "/images/committees/satish-kumar-singh.png",
      },
    ],
  },
  {
    title: "Conference Chairs",
    members: [
      {
        name: "Dr. Jagadeesh Kakarla",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/jagadeeshk@iiitdm.ac.in",
        image: "/images/committees/jagadeesh-kakarla.jpg",
      },
      {
        name: "Dr. Shiv Ram Dubey",
        affiliation: "IIIT Allahabad",
        href: "https://it.iiita.ac.in/?pg=facultypage&uid=srdubey",
        image: "/images/committees/shiv-ram-dubey.jpg",
      },
      {
        name: "Dr. Subrahmanyam Murala",
        affiliation: "Trinity College Dublin, Ireland",
        href: "https://www.tcd.ie/scss/people/academic-staff/muralas/",
        image: "/images/committees/subrahmanyam-murala.webp",
      },
    ],
  },
  {
    title: "Conference Co-Chairs",
    members: [
      {
        name: "Prof. Gaurav Bhatnagar",
        affiliation: "IIT Jodhpur",
        href: "https://iitj.ac.in/People/Profile/76c9e7c9-555e-4bb9-82b9-2f5a0ed9d11e",
        image: "/images/committees/gaurav-bhatnagar.jpg",
      },
      {
        name: "Prof. Aparajita Ojha",
        affiliation: "IIITDM Jabalpur",
        href: "http://faculty.iiitdmj.ac.in/faculty/aojha",
        image: "/images/committees/aparajita-ojha.jpg",
      },
      {
        name: "Dr. Santosh Kumar Vipparthi",
        affiliation: "IIT Ropar",
        href: "https://www.iitrpr.ac.in/ee/profile.faculty.php?mail=skvipparthi%40iitrpr.ac.in",
        image: "/images/committees/santosh-vipparthi.jpg",
      },
    ],
  },
  {
    title: "Convenors",
    members: [
      {
        name: "Dr. Noor Mahammad Sk",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/noor@iiitdm.ac.in",
        image: "/images/committees/noor-mahammad.jpg",
      },
      {
        name: "Prof. Masilamani V",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/masila@iiitdm.ac.in",
        image: "/images/committees/masilamani-v.webp",
      },
      {
        name: "Dr. Puneet Goyal",
        affiliation: "IIT Ropar",
        href: "https://sites.google.com/view/goyalpuneet",
        image: "/images/committees/puneeth-goyal.jpeg",
      },
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      {
        name: "Dr. Mukku Nisanth Kartheek",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/drnisanthkartheek@iiitdm.ac.in",
        image: "/images/committees/mukku-nisanth-kartheek.png",
      },
      {
        name: "Dr. Prashant W Patil",
        affiliation: "IIT Guwahati",
        href: "https://iitg.ac.in/iitg_faculty_details?fac=emE0eXp4VEpTLy9CSmVJeVo0TmRxUT09",
        image: "/images/committees/prashant-patil.jpg",
      },
      {
        name: "Prof. P. Prakash",
        affiliation: "MIT Campus, Anna University",
        href: "https://annauniv.irins.org/profile/117838",
        image: "/images/committees/p-prakash.jpg",
      },
    ],
  },
  {
    title: "Website Chairs",
    members: [
      {
        name: "Dr. Bhukya Krishna Priya",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/krishnapriya@iiitdm.ac.in",
        image: "/images/committees/bhukya-krishna-priya.jpg",
      },
      {
        name: "Dr. Santhanam Raghavan",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/raghavans@iiitdm.ac.in",
        image: "/images/committees/santhanam-raghavan.jpg",
      },
    ],
  },
  {
    title: "Publication Chair",
    members: [
      {
        name: "Dr. Sambit Bakshi",
        affiliation: "NIT Rourkela",
        href: "https://www.nitrkl.ac.in/CS/~bakshisambit/",
        image: "/images/committees/sambit-bakshi.jpg",
      },
    ],
  },
  {
    title: "Sponsorship Chairs",
    members: [
      {
        name: "Dr. Preeth R",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/preeth@iiitdm.ac.in",
        image: "/images/committees/preeth-r.jpg",
      },
      {
        name: "Dr. Ratnaraju Mekala",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/ratnaraju.m@iiitdm.ac.in",
        image: "/images/committees/ratnaraju-mekala.jpg",
      },
    ],
  },
  {
    title: "Local Organizing Team",
    members: [
      {
        name: "Dr. Rajesh Kolluri",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/rajeshkolluri@iiitdm.ac.in",
        image: "/images/committees/rajesh-kolluri.jpg",
      },
      {
        name: "Dr. Kannadasan K",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/kannadasankk@iiitdm.ac.in",
        image: "/images/committees/kannadasan-k.jpg",
      },
      {
        name: "Dr. Venkatesh Pandiri",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/venkateshpandiri@iiitdm.ac.in",
        image: "/images/committees/venkatesh-pandiri.jpg",
      },
      {
        name: "Dr. Maithilee Laxmanrao Patawar",
        affiliation: "IIITDM Kancheepuram",
        href: "https://www.iiitdm.ac.in/people/faculty/maithilee@iiitdm.ac.in",
        image: "/images/committees/maithilee-patawar.jpg",
      },
    ],
  },
];

export const areaChairsGroup: CommitteeGroup = {
  title: "Area Chairs",
  members: [
    {
      name: "Dr. Varun Kumar Kakar",
      affiliation: "B. T. Kumaon Institute of Technology, Dwarahat",
      href: "https://kecua.ac.in/index.php/member/mr-varun-kakar/",
      image: "/images/committees/varun-kakar.jpg",
    },
    {
      name: "Dr. Snehasis Mukherjee",
      affiliation: "Shiv Nadar Institute of Eminence, Delhi-NCR",
      href: "https://snu.edu.in/faculty/snehasis_mukherjee/",
      image: "/images/committees/snehasis-mukherjee.webp",
    },
    {
      name: "Dr. Sanjay Saxena",
      affiliation: "IIIT Vadodara",
      href: "https://sites.google.com/iiit-bh.ac.in/drsanjaysaxena?usp=sharing",
      image: "/images/committees/sanjay-saxena.png",
    },
    {
      name: "Dr. Anjali Gautam",
      affiliation: "IIIT Allahabad",
      href: "https://it.iiita.ac.in/?pg=facultypage&uid=anjaligautam",
      image: "/images/committees/anjali-gautam.jpg",
    },
    {
      name: "Dr. Pramit Mazumdar",
      affiliation: "IIIT Vadodara",
      href: "https://iiitvadodara.ac.in/pramit_mazumdar.php",
      image: "/images/committees/pramit-mazumdar.jpg",
    },
    {
      name: "Prof. Krishna Pratap Singh",
      affiliation: "IIIT Allahabad",
      href: "https://it.iiita.ac.in/?pg=facultypage&uid=kpsingh",
      image: "/images/committees/krishna-pratap-singh.jpg",
    },
    {
      name: "Dr. Manisha Verma",
      affiliation: "IIT (ISM) Dhanbad",
      href: "https://www.iitism.ac.in/faculty-details?faculty=manisha",
      image: "/images/committees/manisha-verma.jpg",
    },
    {
      name: "Dr. Shitala Prasad",
      affiliation: "IIT Goa",
      image: "/images/committees/shitala-prasad.jpg",
    },
    {
      name: "Dr. Adduru U G Sankararao",
      affiliation: "IIIT Sri City",
      image: "/images/committees/adduru-u-g-sankararao.png",
    },
    {
      name: "Dr. Choudhary Shyam Prakash",
      affiliation: "NIT Andhra Pradesh",
      image: "/images/committees/choudhary-shyam-prakash.jpg",
    },
    {
      name: "Dr. Sivaiah Bellamkonda",
      affiliation: "IIIT Kottayam",
      image: "/images/committees/sivaiah-bellamkonda.jpeg",
    },
    {
      name: "Dr. Ramalingaswamy Cheruku",
      affiliation: "NIT Warangal",
      image: "/images/committees/ramalingaswamy-cheruku.jpeg",
    },
    {
      name: "Dr. Medipelly Rampavan",
      affiliation: "MANIT Bhopal",
      image: "/images/committees/medipelly-rampavan.jpg",
    },
    {
      name: "Dr. M Mahesh Kumar",
      affiliation: "SRM University-AP",
      image: "/images/committees/m-mahesh-kumar.png",
    },
    {
      name: "Dr. Isunuri Bala Venkateswarlu",
      affiliation: "SRM University-AP",
      image: "/images/committees/isunuri-bala-venkateswarlu.png",
    },
    {
      name: "Dr. Chandra Mohan",
      affiliation: "IIITDM Kurnool",
      image: "/images/committees/chandra-mohan.jpg",
    },
    {
      name: "Dr. Neha Agarwal",
      affiliation: "IIIT Raichur",
      image: "/images/committees/neha-agarwal.jpg",
    },
    {
      name: "Dr. Dubacharla Gyaneshwar",
      affiliation: "IIIT Raichur",
      image: "/images/committees/dubacharla-gyaneshwar.jpg",
    },
    {
      name: "Dr. Sumanta Chandra Mishra Sharma",
      affiliation: "IIIT Sri City",
      image: "/images/committees/sumanta-chandra-mishra-sharma.png",
    },
  ],
};
