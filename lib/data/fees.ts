export type FeeRow = {
  category: string;
  early: string;
  late: string;
};

export const indianFees: FeeRow[] = [
  { category: "IEEE/IAPR Student Author", early: "₹10,620", late: "₹11,800" },
  { category: "IEEE/IAPR Student Attendee", early: "₹3,540", late: "₹5,900" },
  {
    category: "Non-IEEE/IAPR Student Author",
    early: "₹11,800",
    late: "₹12,980",
  },
  {
    category: "Non-IEEE/IAPR Student Attendee",
    early: "₹4,720",
    late: "₹7,080",
  },
  { category: "IEEE/IAPR Faculty Author", early: "₹12,980", late: "₹14,160" },
  { category: "IEEE/IAPR Faculty Attendee", early: "₹5,900", late: "₹8,260" },
  {
    category: "Non-IEEE/IAPR Faculty Author",
    early: "₹14,160",
    late: "₹15,340",
  },
  {
    category: "Non-IEEE/IAPR Faculty Attendee",
    early: "₹7,080",
    late: "₹9,440",
  },
  { category: "IEEE/IAPR Industry Author", early: "₹14,160", late: "₹16,520" },
  { category: "IEEE/IAPR Industry Attendee", early: "₹8,260", late: "₹10,620" },
  {
    category: "Non-IEEE/IAPR Industry Author",
    early: "₹15,340",
    late: "₹17,700",
  },
  {
    category: "Non-IEEE/IAPR Industry Attendee",
    early: "₹9,440",
    late: "₹11,800",
  },
];

export const foreignFees: FeeRow[] = [
  { category: "IEEE/IAPR Student Author", early: "$236", late: "$354" },
  { category: "IEEE/IAPR Student Attendee", early: "$118", late: "$236" },
  { category: "Non-IEEE/IAPR Student Author", early: "$295", late: "$413" },
  { category: "Non-IEEE/IAPR Student Attendee", early: "$177", late: "$295" },
  { category: "IEEE/IAPR Faculty Author", early: "$354", late: "$472" },
  { category: "IEEE/IAPR Faculty Attendee", early: "$236", late: "$354" },
  { category: "Non-IEEE/IAPR Faculty Author", early: "$413", late: "$531" },
  { category: "Non-IEEE/IAPR Faculty Attendee", early: "$295", late: "$413" },
  { category: "IEEE/IAPR Industry Author", early: "$472", late: "$590" },
  { category: "IEEE/IAPR Industry Attendee", early: "$354", late: "$472" },
  { category: "Non-IEEE/IAPR Industry Author", early: "$531", late: "$649" },
  { category: "Non-IEEE/IAPR Industry Attendee", early: "$413", late: "$531" },
];

export const registrationGuidelines: { title: string; body: string }[] = [
  {
    title: "Paper presentation requirement",
    body: "All papers must be presented in person at CVMI 2027. For a paper to be included in the CVMI 2027 proceedings (submitted to IEEE Xplore), it must be presented at the conference in person - no-show papers will not be included, and no requests for online presentation will be considered, since this is an in-person event designed to promote networking among participants.",
  },
  {
    title: "Payment policy",
    body: "Registration fees are non-refundable. All fees listed above include 18% GST.",
  },
  {
    title: "Certificates & documentation",
    body: "A hard-copy paper presentation certificate is provided to every author who presents. A hard-copy registration fee money receipt is also provided.",
  },
  {
    title: "Verification requirements",
    body: "Students and IEEE/IAPR members must carry valid proof at registration - a current Institute/College/University ID for students, and a current-year membership card for IEEE/IAPR members.",
  },
  {
    title: "Non-author registration",
    body: "Attendees who wish to register without a paper may do so at the applicable non-author (attendee) rate.",
  },
  {
    title: "Multiple paper discount",
    body: "If an author has two accepted papers, the total registration fee is 1.5× the cost of a single registration. This discount applies to a maximum of one additional paper by the same author.",
  },
  {
    title: "Extra page charges",
    body: "If the final manuscript in IEEE format exceeds 6 pages, an extra-page charge of ₹1,770 (Indian author) or $40 (foreign author) applies per additional page, up to 2 extra pages. Papers longer than 8 pages will not be considered for publication.",
  },
  {
    title: "Registration inclusions",
    body: "Registration includes the conference kit, access to keynote and technical sessions, networking tea & snacks, working lunch on all three days, and the conference banquet dinner.",
  },
];
