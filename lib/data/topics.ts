export type TopicGroup = {
  title: string;
  topics: string[];
};

export const topicGroups: TopicGroup[] = [
  {
    title: "AI & Intelligence",
    topics: [
      "AI in biometrics, forensics & content protection",
      "Trustworthy, explainable and ethical AI",
      "Machine learning and deep learning",
      "Image/video security & blockchain applications",
      "Audio and video deepfakes",
      "Computational intelligence",
    ],
  },
  {
    title: "Recognition & Processing",
    topics: [
      "Face, iris, emotion & sign language recognition",
      "Autonomous vehicle image/video processing",
      "3D image/video processing",
      "Image enhancement & super resolution",
      "Action and event detection",
      "Medical image and video analysis",
      "Vision-based human gait analysis",
      "Document and synthetic visual processing",
    ],
  },
  {
    title: "Advanced Vision",
    topics: [
      "Remote sensing & multispectral/hyperspectral imaging",
      "Datasets and evaluation",
      "Segmentation and shape representation",
      "Scene understanding",
      "Human-computer interaction",
      "Visual sensor hardware",
      "Document image analysis",
      "Compressed image/video analytics",
    ],
  },
  {
    title: "Intelligent Systems",
    topics: [
      "Brain-computer interaction",
      "Hand-sensor based intelligence",
      "Robotic intelligence",
      "Light-weight intelligent systems",
    ],
  },
];

export const cvmiHistory = [
  { edition: "1st CVMI", year: "2022", host: "IIIT Allahabad" },
  { edition: "2nd CVMI", year: "2023", host: "ABV-IIITM Gwalior" },
  { edition: "3rd CVMI", year: "2024", host: "IIIT Allahabad" },
  { edition: "4th CVMI", year: "2025", host: "NIT Rourkela" },
  { edition: "5th CVMI", year: "2026", host: "COEP Technological University, Pune" },
  { edition: "6th CVMI", year: "2027", host: "IIITDM Kancheepuram", current: true },
];
