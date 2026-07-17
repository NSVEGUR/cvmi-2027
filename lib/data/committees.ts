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
      { name: "To be announced", affiliation: "International Patron", tba: true },
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
      { name: "To be announced", affiliation: "International Chair", tba: true },
      {
        name: "Prof. Satish Kumar Singh",
        affiliation: "IIIT Allahabad",
        href: "https://cvbl.iiita.ac.in/sks/",
        image: "/images/committees/satish-kumar-singh.png",
      },
      { name: "To be announced", affiliation: "International Chair", tba: true },
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
        image: "/images/committees/masilamani-v.jpg",
      },
      {
        name: "Dr. Puneet Goyal",
        affiliation: "IIT Ropar",
        href: "https://sites.google.com/view/goyalpuneet",
        image: "/images/committees/puneet-goyal.png",
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
      name: "Dr. Navjot Singh",
      affiliation: "IIIT Allahabad",
      href: "https://it.iiita.ac.in/?pg=facultypage&uid=navjot",
      image: "/images/committees/navjot-singh.jpg",
    },
    {
      name: "Prof. Krishna Pratap Singh",
      affiliation: "IIIT Allahabad",
      href: "https://it.iiita.ac.in/?pg=facultypage&uid=kpsingh",
      image: "/images/committees/krishna-pratap-singh.jpg",
    },
    {
      name: "Dr. Varun Kumar Kakar",
      affiliation: "B. T. Kumaon Institute of Technology, Dwarahat",
      href: "https://kecua.ac.in/index.php/member/mr-varun-kakar/",
      image: "/images/committees/varun-kakar.jpg",
    },
    {
      name: "Dr. Anjali Gautam",
      affiliation: "IIIT Allahabad",
      href: "https://it.iiita.ac.in/?pg=facultypage&uid=anjaligautam",
      image: "/images/committees/anjali-gautam.jpg",
    },
    {
      name: "Dr. Prashant Bartakke",
      affiliation: "COEP Technological University, Pune",
      href: "https://www.coeptech.ac.in/faculty/dr-prashant-bartakke/",
      image: "/images/committees/prashant-bartakke.jpg",
    },
    {
      name: "Dr. Anish Chand Turlapaty",
      affiliation: "IIIT Sri City",
      href: "https://iiits.ac.in/people/regular-faculty/dr-anish-chand-turlapaty/",
    },
    {
      name: "Dr. Manish Okade",
      affiliation: "NIT Rourkela",
      href: "https://www.nitrkl.ac.in/EC/~okadem/",
      image: "/images/committees/manish-okade.jpg",
    },
    {
      name: "Dr. Y. Raja Vara Prasad",
      affiliation: "IIIT Sri City",
      href: "https://iiits.ac.in/people/regular-faculty/dr-raja-vara-prasad/",
    },
    {
      name: "Dr. Rakesh Kumar Sanodiya",
      affiliation: "IIT Ropar",
      href: "https://iitrpr.irins.org/profile/694036",
      image: "/images/committees/rakesh-sanodiya.jpg",
    },
    {
      name: "Dr. Manisha Verma",
      affiliation: "ISM Dhanbad",
      href: "https://www.iitism.ac.in/faculty-details?faculty=manisha",
      image: "/images/committees/manisha-verma.jpg",
    },
    {
      name: "Dr. Pramit Mazumdar",
      affiliation: "IIIT Vadodara",
      href: "https://iiitvadodara.ac.in/pramit_mazumdar.php",
      image: "/images/committees/pramit-mazumdar.jpg",
    },
    {
      name: "Dr. Sanjay Saxena",
      affiliation: "IIIT Vadodara",
      href: "https://sites.google.com/iiit-bh.ac.in/drsanjaysaxena?usp=sharing",
    },
    {
      name: "Dr. Jaishree Mayank",
      affiliation: "ISM Dhanbad",
      href: "https://www.iitism.ac.in/faculty-details?faculty=jaishreem",
      image: "/images/committees/jaishree-mayank.jpg",
    },
    {
      name: "Dr. Dinesh R",
      affiliation: "IIITDM Kancheepuram",
      href: "https://www.iiitdm.ac.in/people/faculty/dineshrajavelu@iiitdm.ac.in",
      image: "/images/committees/dinesh-r.jpg",
    },
    {
      name: "Dr. Abhinav",
      affiliation: "IIT Ropar",
      href: "https://scholar.google.com/citations?user=5GqfE6cAAAAJ&hl=en",
      image: "/images/committees/abhinav.jpg",
    },
    {
      name: "Dr. Snehasis Mukherjee",
      affiliation: "Shiv Nadar Institute of Eminence, Delhi-NCR",
      href: "https://snu.edu.in/faculty/snehasis_mukherjee/",
      image: "/images/committees/snehasis-mukherjee.webp",
    },
  ],
};
