export type CommitteeMember = {
  name: string;
  affiliation?: string;
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
      { name: "Prof. M. V. Kartikeyan", affiliation: "Director, IIITDM Kancheepuram" },
      { name: "Prof. Mukul Sharad Sutaone", affiliation: "Director, IIIT Allahabad" },
      { name: "Prof. Sri Niwas Singh", affiliation: "Director, ABV-IIITM Gwalior" },
      { name: "To be announced", affiliation: "International Patron", tba: true },
    ],
  },
  {
    title: "General Chairs",
    members: [
      { name: "Prof. R. Balasubramanian", affiliation: "IIT Roorkee" },
      { name: "To be announced", affiliation: "International Chair", tba: true },
      { name: "Prof. Satish Kumar Singh", affiliation: "IIIT Allahabad" },
      { name: "To be announced", affiliation: "International Chair", tba: true },
    ],
  },
  {
    title: "Conference Chairs",
    members: [
      { name: "Dr. Jagadeesh Kakarla", affiliation: "IIITDM Kancheepuram" },
      { name: "Dr. Shiv Ram Dubey", affiliation: "IIIT Allahabad" },
      { name: "Dr. Subrahmanyam Murala", affiliation: "Trinity College Dublin, Ireland" },
    ],
  },
  {
    title: "Conference Co-Chairs",
    members: [
      { name: "Prof. Gaurav Bhatnagar", affiliation: "IIT Jodhpur" },
      { name: "Prof. Aparajita Ojha", affiliation: "IIITDM Jabalpur" },
      { name: "Dr. Santosh Kumar Vipparthi", affiliation: "IIT Ropar" },
    ],
  },
  {
    title: "Convenors",
    members: [
      { name: "Dr. Noor Mahammad Sk", affiliation: "IIITDM Kancheepuram" },
      { name: "Prof. Masilamani V", affiliation: "IIITDM Kancheepuram" },
      { name: "Dr. Puneet Goyal", affiliation: "IIT Ropar" },
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      { name: "Dr. Mukku Nisanth Kartheek", affiliation: "IIITDM Kancheepuram" },
      { name: "Dr. Prashant W Patil", affiliation: "IIT Guwahati" },
      { name: "Prof. P. Prakash", affiliation: "MIT Campus, Anna University" },
    ],
  },
  {
    title: "Website Chairs",
    members: [
      { name: "Dr. Bhukya Krishna Priya", affiliation: "IIITDM Kancheepuram" },
      { name: "Dr. Santhanam Raghavan", affiliation: "IIITDM Kancheepuram" },
    ],
  },
  {
    title: "Publication Chair",
    members: [{ name: "Dr. Sambit Bakshi", affiliation: "NIT Rourkela" }],
  },
  {
    title: "Sponsorship Chairs",
    members: [
      { name: "Dr. Preeth R", affiliation: "IIITDM Kancheepuram" },
      { name: "Dr. Ratnaraju Mekala", affiliation: "IIITDM Kancheepuram" },
    ],
  },
  {
    title: "Local Organizing Team",
    members: [
      { name: "Dr. Rajesh Kolluri", affiliation: "IIITDM Kancheepuram" },
      { name: "Dr. Kannadasan K", affiliation: "IIITDM Kancheepuram" },
      { name: "Dr. Venkatesh Pandiri", affiliation: "IIITDM Kancheepuram" },
      { name: "Dr. Maithilee Laxmanrao Patawar", affiliation: "IIITDM Kancheepuram" },
    ],
  },
];

export const areaChairsGroup: CommitteeGroup = {
  title: "Area Chairs",
  members: [
    { name: "Dr. Navjot Singh", affiliation: "IIIT Allahabad" },
    { name: "Prof. Krishna Pratap Singh", affiliation: "IIIT Allahabad" },
    { name: "Dr. Varun Kumar Kakar", affiliation: "B. T. Kumaon Institute of Technology, Dwarahat" },
    { name: "Dr. Anjali Gautam", affiliation: "IIIT Allahabad" },
    { name: "Dr. Prashant Bartakke", affiliation: "COEP Technological University, Pune" },
    { name: "Dr. Anish Chand Turlapaty", affiliation: "IIIT Sri City" },
    { name: "Dr. Manish Okade", affiliation: "NIT Rourkela" },
    { name: "Dr. Y. Raja Vara Prasad", affiliation: "IIIT Sri City" },
    { name: "Dr. Rakesh Kumar Sanodiya", affiliation: "IIT Ropar" },
    { name: "Dr. Manisha Verma", affiliation: "ISM Dhanbad" },
    { name: "Dr. Pramit Mazumdar", affiliation: "IIIT Vadodara" },
    { name: "Dr. Sanjay Saxena", affiliation: "IIIT Vadodara" },
    { name: "Dr. Jaishree Mayank", affiliation: "ISM Dhanbad" },
    { name: "Dr. Dinesh R", affiliation: "IIITDM Kancheepuram" },
    { name: "Dr. Abhinav", affiliation: "IIT Ropar" },
    { name: "Dr. Snehasis Mukherjee", affiliation: "Shiv Nadar Institution of Eminence, Delhi-NCR" },
  ],
};
