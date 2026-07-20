export type DateTableRow =
  | { type: "single"; label: string; date: string; emphasis?: boolean }
  | { type: "round"; round: string; rows: { label: string; date: string }[] };

export const dateTableRows: DateTableRow[] = [
  { type: "single", label: "Call for Papers Opens", date: "August 15, 2026" },
  {
    type: "round",
    round: "First Round",
    rows: [
      { label: "Paper Submission Deadline", date: "November 15, 2026" },
      { label: "Notification of Paper Acceptance", date: "January 15, 2027" },
    ],
  },
  {
    type: "round",
    round: "Second Round",
    rows: [
      { label: "Paper Submission Deadline", date: "February 25, 2027" },
      { label: "Notification of Paper Acceptance", date: "April 15, 2027" },
    ],
  },
  { type: "single", label: "Camera-Ready Submission Deadline", date: "June 1, 2027" },
  { type: "single", label: "Early Bird Registration Deadline", date: "May 10, 2027" },
  { type: "single", label: "Late Registration Deadline", date: "May 25, 2027" },
  { type: "single", label: "Conference Dates", date: "June 17–19, 2027", emphasis: true },
];

export const reviewProcessNote =
  "As in previous years, CVMI 2027 will employ a two-round review process. New papers can be submitted in either the first or the second round. The primary benefit of submitting in the first round is that submissions not accepted early can be revised and resubmitted along with a rebuttal, allowing authors to address reviewer concerns. Second round submissions will not be considered for revisions.";

export const conferenceDates = "June 17–19, 2027";
export const conferenceVenue = "IIITDM Kancheepuram, Chennai, India";
