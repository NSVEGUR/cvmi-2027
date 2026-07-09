export type ImportantDate = {
  label: string;
  date: string;
  round?: "Round 1" | "Round 2";
  isConferenceDate?: boolean;
};

export const importantDates: ImportantDate[] = [
  { label: "Call for Papers Opens", date: "August 15, 2026" },
  { label: "Paper Submission Deadline", date: "November 15, 2026", round: "Round 1" },
  { label: "Acceptance Notification", date: "January 15, 2027", round: "Round 1" },
  { label: "Early Registration Deadline", date: "February 15, 2027", round: "Round 1" },
  { label: "Camera-Ready Submission Deadline", date: "February 25, 2027", round: "Round 1" },
  { label: "Paper Submission Deadline", date: "February 25, 2027", round: "Round 2" },
  { label: "Acceptance Notification", date: "April 15, 2027", round: "Round 2" },
  { label: "Early Registration Deadline", date: "May 10, 2027", round: "Round 2" },
  { label: "Late Registration Deadline", date: "May 25, 2027", round: "Round 2" },
  { label: "Camera-Ready Submission Deadline", date: "June 1, 2027", round: "Round 2" },
  { label: "Conference Dates", date: "June 17–19, 2027", isConferenceDate: true },
];

export const conferenceDates = "June 17–19, 2027";
export const conferenceVenue = "IIITDM Kancheepuram, Chennai, India";
