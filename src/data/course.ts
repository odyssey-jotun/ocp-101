export const WORKSPACE =
  'https://docs.google.com/document/d/1PLG4TlDc7C62L97sk2MX5vi6sKLjcaSTkyPTFh6SeRw/edit';
export const LINKEDIN_TAB = `${WORKSPACE}?tab=t.wtq0sen8dlt`;

export const info = [
  { label: 'Instructor', value: 'Marc Gray, Odyssey College Prep' },
  { label: 'Meetings', value: 'Mondays and Wednesdays, 12:00 to 1:00 PM Central, on Zoom' },
  { label: 'Term', value: 'Fall 2026, October 5 through December 2' },
  { label: 'Office hours', value: 'By email or text. Replies within one business day.' },
];

export const outcomes = [
  {
    title: 'Build and deliver a presentation using a complete macro structure.',
    image: 'present',
    alt: 'A young man presenting to a room, pointing as he speaks',
    points: [
      'Open with all five parts of an introduction: icebreaker, listener relevance link, speaker credibility, thesis statement, and preview of main points.',
      'Support each main point with examples and cited research, connected by clear transitions.',
      'Deliver with control of voice and body: steady pace, few filler words, eye contact with the camera, purposeful gestures, no fidgeting, and deliberate use of space.',
    ],
  },
  {
    title: 'Network and interview with something concrete to talk about.',
    image: 'network',
    alt: 'A young man talking with a group of people at a networking event',
    points: [
      'Join at least one SMU organization tied to your major, ideally one with a team or competition component.',
      'Answer common interview questions using your research, your internship, and your data project as evidence.',
    ],
  },
  {
    title: 'Present a professional identity online.',
    image: 'identity',
    alt: 'A young man working on a laptop at a long table',
    points: [
      'Rebuild your LinkedIn profile around one area of expertise.',
      'Publish a short video portfolio that shows what you know and how you explain it.',
    ],
  },
];

export const assignments = [
  { n: 1, title: 'Benchmark video: get-to-know-you speech', length: '2 to 3 min', due: 'Wed, Oct 7' },
  { n: 2, title: 'SMU club list: data science, business, and tech groups, with links and contacts', length: 'Workspace tab', due: 'Wed, Oct 7' },
  { n: 3, title: 'LinkedIn benchmark: send your current profile link, unchanged, and fill out the LinkedIn worksheet', length: 'Link + worksheet', due: 'Mon, Oct 12' },
  { n: 4, title: 'Speech analysis: Rory Sutherland, "Life Lessons from an Ad Man." Timestamp each of the five introduction parts or mark it missing, then note three nonverbal habits he uses', length: '1 page', due: 'Wed, Oct 14' },
  { n: 5, title: 'Club outreach email to one organization, cc Marc', length: '1 email', due: 'Mon, Oct 19' },
  { n: 6, title: 'Informative speech, first recording', length: '6 to 8 min', due: 'Mon, Oct 26' },
  { n: 7, title: 'Informative speech, second recording after review', length: '6 to 8 min', due: 'Mon, Nov 2' },
  { n: 8, title: 'LinkedIn rebuild: headline, About section, experience, Featured', length: 'Profile', due: 'Mon, Nov 9' },
  { n: 9, title: 'Portfolio video: one main point from your research as a short', length: '60 to 90 sec', due: 'Mon, Nov 16' },
  { n: 10, title: 'Persuasive speech, delivered live and recorded', length: '5 to 7 min', due: 'Wed, Nov 18' },
  { n: 11, title: 'Mock interview, recorded', length: '20 min', due: 'Mon, Nov 30' },
  { n: 12, title: 'Final portfolio and LinkedIn published', length: 'Profile + videos', due: 'Wed, Dec 2' },
];

export const ongoing = [
  { title: 'Session email', when: 'Between every session', text: 'One email to Marc by 9:00 PM the night before each session. It delivers that session’s work and follows the five-part email rubric.' },
  { title: 'Weekly grades', when: 'Every Monday', text: 'A screenshot of your current grades in every class, pasted into the Grades Log tab of your workspace.' },
];

type Session = { day: string; date: string; topic: string; due: string; off?: boolean };
export const schedule: { week: number; sessions: Session[] }[] = [
  { week: 1, sessions: [
    { day: 'Mon', date: 'Oct 5', topic: 'Orientation: goals, ground rules, how this course works', due: 'None' },
    { day: 'Wed', date: 'Oct 7', topic: 'Watch the benchmark together; the sandwich model of macro structure', due: 'Assignments 1 and 2; grades' },
  ]},
  { week: 2, sessions: [
    { day: 'Mon', date: 'Oct 12', topic: 'Communication vs. performance orientation; choose your research topic', due: 'Assignment 3; Motley reading; grades' },
    { day: 'Wed', date: 'Oct 14', topic: 'Break down Sutherland’s introduction and delivery; credible sources and citing out loud', due: 'Assignment 4' },
  ]},
  { week: 3, sessions: [
    { day: 'Mon', date: 'Oct 19', topic: 'Informative speech outline: thesis, main points, transitions', due: 'Assignment 5; grades' },
    { day: 'Wed', date: 'Oct 21', topic: 'Introductions and conclusions; nonverbal delivery on camera: fidgeting, gestures, use of space', due: 'Full outline' },
  ]},
  { week: 4, sessions: [
    { day: 'Mon', date: 'Oct 26', topic: 'Review informative recording one against the rubric', due: 'Assignment 6; grades' },
    { day: 'Wed', date: 'Oct 28', topic: 'Revision session: fix the two lowest-scoring categories', due: 'Revised outline' },
  ]},
  { week: 5, sessions: [
    { day: 'Mon', date: 'Nov 2', topic: 'Compare recordings one and two; introduce the persuasive speech', due: 'Assignment 7; grades' },
    { day: 'Wed', date: 'Nov 4', topic: 'LinkedIn workshop: headline, About, experience, Featured', due: 'Draft About section' },
  ]},
  { week: 6, sessions: [
    { day: 'Mon', date: 'Nov 9', topic: 'Audience analysis and the call to action', due: 'Assignment 8; grades' },
    { day: 'Wed', date: 'Nov 11', topic: 'From research to content: each main point as a video, each subpoint as a short', due: 'Persuasive outline' },
  ]},
  { week: 7, sessions: [
    { day: 'Mon', date: 'Nov 16', topic: 'Persuasive speech rehearsal', due: 'Assignment 9; grades' },
    { day: 'Wed', date: 'Nov 18', topic: 'Persuasive speech, delivered live', due: 'Assignment 10' },
  ]},
  { week: 8, sessions: [
    { day: 'Mon', date: 'Nov 23', topic: 'Interviewing: telling your story with your research and data project', due: 'Grades; three questions you dread' },
    { day: 'Wed', date: 'Nov 25', topic: 'No session, Thanksgiving break', due: 'None', off: true },
  ]},
  { week: 9, sessions: [
    { day: 'Mon', date: 'Nov 30', topic: 'Mock interview, recorded', due: 'Assignment 11; grades' },
    { day: 'Wed', date: 'Dec 2', topic: 'Final review: benchmark vs. final video, LinkedIn before and after', due: 'Assignment 12' },
  ]},
];

export type Rubric = { key: string; label: string; intro: string; rows: { category: string; levels: [string, string, string, string] }[] };

export const rubrics: Rubric[] = [
  {
    key: 'speech', label: 'Speech',
    intro: 'Every speech is scored on these six categories. The benchmark video is scored on it too, so your first and last recordings can be compared side by side.',
    rows: [
      { category: 'Introduction', levels: ['All five parts, in order: icebreaker, listener relevance link, speaker credibility, thesis, preview', 'Four of the five parts', 'Two or three of the five parts', 'One part or none; opens with “My speech is about”'] },
      { category: 'Organization', levels: ['Two or three main points, each with an example, and a transition between every point', 'Main points are clear; one example or transition is missing', 'Main points blur together; few transitions', 'No main points a listener could name afterward'] },
      { category: 'Research and citations', levels: ['Every source cited out loud by author, outlet, and year', 'Sources cited out loud, but some are missing the outlet or year', 'Research used, but sources are vague (“studies show”)', 'No research, or no sources named'] },
      { category: 'Conclusion', levels: ['Restates the thesis, reviews each main point, ends on a clear closing line', 'Restates the thesis and points, but the ending trails off', 'Restates only the thesis or only the points', 'Speech just stops (“So yeah, that’s it”)'] },
      { category: 'Vocal delivery', levels: ['One or fewer filler words per minute; steady pace; easy to hear', 'Two or three filler words per minute, or rushes in spots', 'Four or five filler words per minute, or hard to hear', 'Six or more filler words per minute'] },
      { category: 'Nonverbal delivery', levels: ['Eyes on the camera almost the whole time; stands tall; gestures match the words; no fidgeting', 'Mostly on camera, with one distracting habit', 'Reads notes often, or two or more distracting habits', 'Reads the whole time; constant fidgeting'] },
    ],
  },
  {
    key: 'email', label: 'Email',
    intro: 'Every session email, and every email to a professor or club contact, is scored on these five parts.',
    rows: [
      { category: 'Greeting', levels: ['Name at the right formality (“Hi Professor Lee,”)', 'Name, wrong formality (“Hey Lee,”)', 'Generic (“Hello,”)', 'No greeting'] },
      { category: 'Rapport', levels: ['One specific line about them (“Thanks for the tip on transitions Monday.”)', 'Friendly but generic (“Hope you’re well.”)', 'Forced or off topic', 'None'] },
      { category: 'Context', levels: ['One or two sentences on why you are writing', 'Clear, but runs three sentences or more', 'The reader has to guess why you are writing', 'No context'] },
      { category: 'Clear deliverable', levels: ['Names exactly what is attached or linked, or exactly what you need and by when', 'Clear ask, but no deadline or a missing link', 'Vague ask (“Let me know what you think.”)', 'No ask, or the attachment is missing'] },
      { category: 'Sign-off', levels: ['Closing line and full name', 'Closing line and first name only', 'Name only', 'Nothing'] },
    ],
  },
  {
    key: 'linkedin', label: 'LinkedIn',
    intro: 'We start with the LinkedIn worksheet in your workspace, due Monday, October 12. Fill it out before we change anything on your profile, and we will go from there.',
    rows: [
      { category: 'Photo and headline', levels: ['Clear headshot on a plain background; headline names your focus (“Business student at SMU, data and fintech”)', 'Good headshot; headline only says “Student at SMU”', 'Casual or cropped photo; default headline', 'No photo'] },
      { category: 'About section', levels: ['Three or four sentences in your own voice: what you study, what you care about, what you are looking for', 'Present but generic; could describe any student', 'One line, or copied from somewhere', 'Empty'] },
      { category: 'Experience', levels: ['Internship and data project each listed with a result (“Built a model that...”)', 'Both listed, with duties only', 'Only one listed', 'Neither listed'] },
      { category: 'Featured', levels: ['At least one portfolio video or research piece', 'Something featured, but unrelated to your focus', 'Placeholder only', 'Empty'] },
    ],
  },
];

export const professionalism = [
  'Session email sent by 9:00 PM the night before',
  'On time, in a quiet space, with earbuds in',
  'Assignment submitted before the session',
  'Brought at least one question',
  'Focused: notes open, no second screen',
];

export const levels = [
  { score: 4, name: 'Strong', text: 'Done fully and well; nothing to fix' },
  { score: 3, name: 'Solid', text: 'All parts present; one or two weak spots' },
  { score: 2, name: 'Developing', text: 'Some parts missing or unclear' },
  { score: 1, name: 'Beginning', text: 'Not yet attempted or mostly missing' },
];

export const materials = [
  { title: 'The course workspace', text: 'A Google Doc with one tab per assignment. Every video link, the club list, research notes, and the grades log live there.', href: WORKSPACE },
  { title: 'Michael T. Motley, Overcoming Your Fear of Public Speaking', text: 'Assigned chapters cover the difference between a communication orientation and a performance orientation.' },
  { title: 'Rory Sutherland, “Life Lessons from an Ad Man”', text: 'TED, 2009. The talk you break down for the speech analysis.', href: 'https://www.ted.com/talks/rory_sutherland_life_lessons_from_an_ad_man' },
  { title: 'A phone tripod with a remote', text: 'Order it yourself from the link in Marc’s October 5 email. It extends to 72 inches, which puts the camera at eye level when you stand.', href: 'https://www.amazon.com/dp/B0CNGHR7PK' },
  { title: 'Earbuds and a quiet place', text: 'For every session. Your car counts.' },
  { title: 'Zoom, Claude or ChatGPT, and LinkedIn', text: 'Zoom uses the standing link from the calendar invite. You already have both AI accounts for research.' },
];
export const recommended = 'Recommended, not required: Dale Carnegie, How to Win Friends and Influence People, for meeting new people and building relationships.';
