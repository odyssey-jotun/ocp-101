export const WORKSPACE =
  'https://docs.google.com/document/d/1PLG4TlDc7C62L97sk2MX5vi6sKLjcaSTkyPTFh6SeRw/edit';
export const LINKEDIN_TAB = `${WORKSPACE}?tab=t.wtq0sen8dlt`;

export const info = [
  { label: 'Instructor', value: 'Marc Gray, Odyssey College Prep' },
  { label: 'Meetings', value: 'Mondays and Wednesdays, 12:00 to 1:00 PM Central, on Zoom' },
  { label: 'Term', value: 'Fall 2026, October 5 through December 2' },
  { label: 'Office hours', value: 'By email or text. Replies within one business day.' },
];

export type Tier = { label: string; items: string[] };
export const outcomes: { title: string; way: string; tiers: Tier[] }[] = [
  {
    way: 'In front of an audience',
    title: 'Build presence and connection in front of an audience: plan and deliver a presentation with a complete macro structure.',
    tiers: [
      { label: 'Introduction', items: ['Open with all five parts: icebreaker, listener relevance link, speaker credibility, thesis statement, and preview of main points.'] },
      { label: 'Body', items: [
        'Build the body from two or three main points, each supported with cited research.',
        'Under each main point, give an example that resonates with your listeners and a listener relevance link that ties the point to their own lives.',
        'Connect every part with a clear transition: from the introduction into the first main point, between each main point, and into the conclusion.',
        'When a persuasive speech argues for a policy or an action, organize its main points with Monroe’s Motivated Sequence.',
      ] },
      { label: 'Conclusion', items: ['Close with all three parts: restate the thesis, summarize the main points, and end on a clincher.'] },
      { label: 'Delivery', items: [
        'Develop appropriate slides that support your listeners’ understanding.',
        'Create connection with voice and body: a rate that is easy to follow, a conversational tone, eye contact that checks for understanding, and movement that emphasizes key moments.',
      ] },
    ],
  },
  {
    way: 'One on one',
    title: 'Demonstrate repeatable networking skills.',
    tiers: [
      { label: 'Join', items: ['Join at least one SMU organization tied to your major, ideally one with a team or competition component.'] },
      { label: 'Start conversations', items: [
        'Open with a simple routine: greet, ask a question, listen, and paraphrase the answer before saying anything about yourself.',
        'Deliver a 60-second elevator pitch built on your LinkedIn hook, and adjust it for different listeners, such as a potential boss or a useful connection.',
      ] },
      { label: 'Interview', items: ['Answer interview questions with modified macro structure: a clear thesis, a preview of two examples, each example explained, the thesis restated, and then stop talking.'] },
    ],
  },
  {
    way: 'Online',
    title: 'Build presence and connection online.',
    tiers: [
      { label: 'LinkedIn', items: ['Rebuild your profile around one area of expertise: photo and banner, headline, About section, experience and projects, skills, and Featured.'] },
      { label: 'Video', items: [
        'Film every speech centered in the frame, so the footage can be cropped into vertical video for LinkedIn.',
        'Publish a short video portfolio that shows what you know and how you explain it.',
      ] },
    ],
  },
];

export const assignments = [
  { n: 1, way: 0, title: 'Benchmark video: get-to-know-you speech', length: '2 to 3 min', due: 'Wed, Oct 7' },
  { n: 2, way: 1, title: 'SMU club list: data science, business, and tech groups, with links and contacts', length: 'Workspace tab', due: 'Wed, Oct 7' },
  { n: 3, way: 2, title: 'LinkedIn benchmark: send your current profile link, unchanged, and fill out the LinkedIn worksheet', length: 'Link + worksheet', due: 'Mon, Oct 12' },
  { n: 4, way: 0, title: 'Speech analysis: Rory Sutherland, "Life Lessons from an Ad Man." Timestamp each of the five introduction parts or mark it missing, then note three nonverbal habits he uses', length: '1 page', due: 'Wed, Oct 14' },
  { n: 5, way: 1, title: 'Club outreach email to one organization, cc Marc', length: '1 email', due: 'Mon, Oct 19' },
  { n: 6, way: 0, title: 'Informative speech, first recording', length: '8 to 10 min', due: 'Mon, Oct 26' },
  { n: 7, way: 0, title: 'Informative speech, second recording after review', length: '8 to 10 min', due: 'Mon, Nov 2' },
  { n: 8, way: 2, title: 'LinkedIn rebuild: headline, About section, experience, Featured', length: 'Profile', due: 'Mon, Nov 9' },
  { n: 9, way: 2, title: 'Portfolio video: one main point from your research as a short', length: '60 to 90 sec', due: 'Mon, Nov 16' },
  { n: 10, way: 0, title: 'Persuasive speech, delivered live and recorded', length: '5 to 7 min', due: 'Wed, Nov 18' },
  { n: 11, way: 1, title: 'Mock interview, recorded', length: '20 min', due: 'Mon, Nov 30' },
  { n: 12, way: 2, title: 'Final portfolio and LinkedIn published', length: 'Profile + videos', due: 'Wed, Dec 2' },
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
    { day: 'Mon', date: 'Oct 12', topic: 'Communication vs. performance orientation; choose your research topic', due: 'Assignment 3; Motley reading; both benchmark surveys; grades' },
    { day: 'Wed', date: 'Oct 14', topic: 'Break down Sutherland’s introduction and delivery; credible sources and citing out loud', due: 'Assignment 4' },
  ]},
  { week: 3, sessions: [
    { day: 'Mon', date: 'Oct 19', topic: 'Informative speech outline: thesis, main points, transitions; the networking routine: greet, ask, listen', due: 'Assignment 5; grades' },
    { day: 'Wed', date: 'Oct 21', topic: 'Introductions and conclusions; nonverbal delivery on camera: fidgeting, gestures, use of space', due: 'Full outline' },
  ]},
  { week: 4, sessions: [
    { day: 'Mon', date: 'Oct 26', topic: 'Review informative recording one against the rubric', due: 'Assignment 6; grades' },
    { day: 'Wed', date: 'Oct 28', topic: 'Revision session: fix the two lowest-scoring categories', due: 'Revised outline' },
  ]},
  { week: 5, sessions: [
    { day: 'Mon', date: 'Nov 2', topic: 'Compare recordings one and two; introduce the persuasive speech', due: 'Assignment 7; grades' },
    { day: 'Wed', date: 'Nov 4', topic: 'LinkedIn workshop: headline, About, experience, Featured; draft your 60-second elevator pitch', due: 'Draft About section' },
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
    { day: 'Mon', date: 'Nov 23', topic: 'Interviewing with modified macro structure: thesis, two examples, restate, stop; adjust your pitch for different listeners', due: 'Grades; three questions you dread' },
    { day: 'Wed', date: 'Nov 25', topic: 'No session, Thanksgiving break', due: 'None', off: true },
  ]},
  { week: 9, sessions: [
    { day: 'Mon', date: 'Nov 30', topic: 'Mock interview, recorded', due: 'Assignment 11; grades' },
    { day: 'Wed', date: 'Dec 2', topic: 'Final review: benchmark vs. final video, LinkedIn and survey scores before and after', due: 'Assignment 12; retake both surveys' },
  ]},
];

export type RubricRow = { category: string; levels: [string, string, string, string]; group?: string };
export type Rubric = { key: string; label: string; intro: string; rows: RubricRow[] };

const D = '-';
export const rubrics: Rubric[] = [
  {
    key: 'speech', label: 'Speech',
    intro: 'Every speech is scored part by part, so feedback points at exactly what to fix. Any part not attempted scores 0. The benchmark video is scored on this rubric too, so your first and last recordings can be compared side by side.',
    rows: [
      { group: 'Introduction', category: 'Icebreaker', levels: ['Grabs attention in a way tied to the topic: a story, a question, a striking fact', 'Grabs attention, but only loosely tied to the topic', 'Generic opener (“Today I’m going to talk about...”)', 'Opens with the title of the speech'] },
      { group: 'Introduction', category: 'Listener relevance link', levels: ['Tells this audience specifically how the topic affects them', 'Relevance stated, but in general terms', D, 'Relevance only to the speaker'] },
      { group: 'Introduction', category: 'Speaker credibility', levels: ['A specific reason to trust you on this topic: research you did, experience, a credential', 'Credibility mentioned in general terms', D, 'A claim with nothing behind it'] },
      { group: 'Introduction', category: 'Thesis statement', levels: ['One clear sentence stating the central idea', 'Clear, but runs long or bundles two ideas', 'Implied; the listener has to work it out', 'Topic named, no claim'] },
      { group: 'Introduction', category: 'Preview', levels: ['Names each main point in the order they come', 'Names the points, but vaguely or out of order', D, '“I’ll cover a few things”'] },
      { group: 'Body', category: 'Main points', levels: ['Two or three distinct points, each supporting the thesis', 'Points support the thesis but overlap', 'Points are hard to tell apart', 'Points do not support the thesis'] },
      { group: 'Body', category: 'Research and citations', levels: ['Credible sources, each cited out loud by author, outlet, and year', 'Sources cited out loud, some missing the outlet or year', 'Vague sources (“studies show”)', 'Claims with no support'] },
      { group: 'Body', category: 'Examples', levels: ['Every main point has a concrete example this audience recognizes and remembers', 'Examples present but generic', 'Examples for some points only', 'Examples that confuse the point'] },
      { group: 'Body', category: 'Listener relevance links', levels: ['Every main point is tied to the listeners’ own lives', 'Most points are tied', D, 'Relevance only to the speaker'] },
      { group: 'Body', category: 'Transitions', levels: ['Into the first point, between every point, and into the conclusion', 'One transition missing or abrupt', 'Several missing', 'Jumps between points with no signal'] },
      { group: 'Body', category: 'Pattern (persuasive speech)', levels: ['A policy or action speech follows Monroe’s Motivated Sequence; any other claim uses a pattern that fits it', 'Pattern followed, one step weak', D, 'No recognizable pattern'] },
      { group: 'Conclusion', category: 'Restated thesis', levels: ['Restates the central idea in fresh words', 'Repeats the thesis word for word', D, 'Unclear what the thesis was'] },
      { group: 'Conclusion', category: 'Summary of main points', levels: ['Reviews each main point briefly', 'Reviews some of the points', D, 'Introduces new material'] },
      { group: 'Conclusion', category: 'Clincher', levels: ['A memorable last line that ties back to the icebreaker or leaves a clear final thought', 'Clear last line, but flat', D, 'Ends on “So yeah, that’s it” or “Any questions?”'] },
      { group: 'Slides', category: 'Slides', levels: ['Help listeners follow and remember: one idea per slide, few words, clear visuals', 'Mostly helpful; one or two crowded slides', 'Slides repeat the script word for word', 'Slides pull attention away from the speaker'] },
      { group: 'Connection', category: 'Verbal', levels: ['A rate that is easy to follow and a flow that never disrupts; listeners feel talked with, not at', 'Mostly conversational; rushes or stalls in spots', 'Sounds read or memorized', 'Hard to follow'] },
      { group: 'Connection', category: 'Nonverbal', levels: ['Eye contact (the camera, when filmed) checks for understanding; the body emphasizes key moments; gestures only where they come naturally', 'Mostly connected; eyes leave the audience in spots', 'Reads notes often, or the body works against the message', 'Reads the whole time'] },
    ],
  },
  {
    key: 'email', label: 'Email',
    intro: 'Every session email, and every email to a professor or club contact, is scored on these five parts. A part left out scores 0.',
    rows: [
      { category: 'Greeting', levels: ['Name at the right formality (“Hi Professor Lee,”)', 'Name, wrong formality (“Hey Lee,”)', 'Generic (“Hello,”)', D] },
      { category: 'Rapport', levels: ['One specific line about them (“Thanks for the tip on transitions Monday.”)', 'Friendly but generic (“Hope you’re well.”)', 'Forced or off topic', D] },
      { category: 'Context', levels: ['One or two sentences on why you are writing', 'Clear, but runs three sentences or more', 'The reader has to guess why you are writing', D] },
      { category: 'Clear deliverable', levels: ['Names exactly what is attached or linked, or exactly what you need and by when', 'Clear ask, but no deadline or a missing link', 'Vague ask (“Let me know what you think.”)', 'The attachment or link is missing'] },
      { category: 'Sign-off', levels: ['Closing line and full name', 'Closing line and first name only', 'Name only', D] },
    ],
  },
  {
    key: 'linkedin', label: 'LinkedIn',
    intro: 'We start with the LinkedIn worksheet in your workspace, due Monday, October 12. Fill it out before we change anything on your profile, and we will go from there. A part left empty scores 0.',
    rows: [
      { category: 'Photo and headline', levels: ['Clear headshot on a plain background; headline names your focus (“Business student at SMU, data and fintech”)', 'Good headshot; headline only says “Student at SMU”', 'Casual or cropped photo; default headline', 'No photo, or a photo that is not a headshot'] },
      { category: 'About section', levels: ['Three or four sentences in your own voice: what you study, what you care about, what you are looking for', 'Present but generic; could describe any student', 'One line', 'Copied from somewhere'] },
      { category: 'Experience', levels: ['Internship and data project each listed with a result (“Built a model that...”)', 'Both listed, with duties only', 'Only one listed', D] },
      { category: 'Featured', levels: ['At least one portfolio video or research piece', 'Something featured, but unrelated to your focus', 'Placeholder only', D] },
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
  { score: 4, name: 'Strong', text: 'Done fully and well' },
  { score: 3, name: 'Solid', text: 'All parts present; one or two weak spots' },
  { score: 2, name: 'Developing', text: 'Some parts missing or unclear' },
  { score: 1, name: 'Mostly missing', text: 'Attempted, but most of it is missing or wrong' },
  { score: 0, name: 'Not attempted', text: 'Not there at all' },
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

export const PRE_ASSESSMENT = 'https://docs.google.com/forms/d/e/1FAIpQLSf5RNdW8hYaeGHCpfQoXLWXQs-32zYo2DPG3W1-1y-8kp7cwA/viewform';
