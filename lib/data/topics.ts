export type TopicGroup = {
  title: string;
  topics: string[];
};

export const topicGroups: TopicGroup[] = [
  {
    title: "AI & Intelligence",
    topics: [
      "AI in biometrics, forensics, content protection",
      "Trustworthy, explainable and ethical AI",
      "Machine learning",
      "Deep learning",
      "Image/video security, blockchain for image and video security",
      "Audio and video deepfakes",
      "Computational intelligence",
      "AI & intelligence in other applications",
    ],
  },
  {
    title: "Recognition & Processing",
    topics: [
      "Face, iris, emotion, sign language and gesture recognition",
      "Image/video processing for autonomous vehicles",
      "3D image/video processing",
      "Image enhancement/super resolution/restoration",
      "Action and event detection/recognition, motion and tracking",
      "Medical image and video analysis",
      "Image/video retrieval",
      "Vision based human gait analysis",
      "Document and synthetic visual processing",
      "Other recognition and processing techniques",
    ],
  },
  {
    title: "Advanced Vision",
    topics: [
      "Remote sensing, multispectral/hyperspectral image processing",
      "Datasets and evaluation",
      "Segmentation and shape representation",
      "Image/video scene understanding",
      "Human computer interaction",
      "Visual sensor hardware",
      "Document image analysis",
      "Compressed image/video analytics",
      "Other computer vision applications",
    ],
  },
  {
    title: "Intelligent Systems",
    topics: [
      "Brain computer interaction",
      "Hand-sensor based intelligence",
      "Robotic intelligence",
      "Light-weight intelligent systems",
      "Other intelligent systems",
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
