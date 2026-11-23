export const WORKSPACE =
  'https://docs.google.com/document/d/1PLG4TlDc7C62L97sk2MX5vi6sKLjcaSTkyPTFh6SeRw/edit';
export const LINKEDIN_TAB = `${WORKSPACE}?tab=t.wtq0sen8dlt`;
// Every video and file Max uploads goes here, not in the workspace doc.
export const DRIVE = 'https://drive.google.com/drive/folders/1fMR14ENpLI0aolNpUMrjqOUsg8LTe0yp';

export const info = [
  { label: 'Instructor', value: 'Marc Gray, Odyssey College Prep' },
  { label: 'Meetings', value: 'Mondays and Wednesdays, 12:00 to 1:00 PM Central, on Zoom' },
  { label: 'Term', value: 'Fall 2026, October 5 through December 2' },
  { label: 'Contact', value: 'Text 501-920-4393 or email mgray@odysseycollegeprep.com' },
];

export type Tier = { label: string; items: string[] };
export const outcomes: { title: string; way: string; tiers: Tier[] }[] = [
  {
    way: 'Presentation',
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
    way: 'One-on-one',
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
    way: 'Digital',
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
  { title: 'Session email', when: 'Between every session', text: 'One email to Marc by 9:00 PM the night before each session. It delivers that session’s work and follows the five-part email structure on the One-on-one page.' },
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
  { title: 'The course workspace', text: 'A Google Doc with one tab per assignment. Your outlines, the club list, research notes, and the grades log live there.', href: WORKSPACE },
  { title: 'Your Drive folder', text: 'Upload every video and file here, then paste its link in that assignment’s tab of your workspace.', href: DRIVE },
  { way: 0, title: 'Michael T. Motley, Overcoming Your Fear of Public Speaking', text: 'Assigned chapters cover the difference between a communication orientation and a performance orientation.' },
  { way: 0, title: 'Rory Sutherland, “Life Lessons from an Ad Man”', text: 'TED, 2009. The talk you break down for the speech analysis.', href: 'https://www.ted.com/talks/rory_sutherland_life_lessons_from_an_ad_man' },
  { way: 0, title: 'A phone tripod with a remote', text: 'Order it yourself from the link in Marc’s October 5 email. It extends to 72 inches, which puts the camera at eye level when you stand.', href: 'https://www.amazon.com/dp/B0CNGHR7PK' },
  { title: 'Earbuds and a quiet place', text: 'For every session. Your car counts.' },
  { title: 'Zoom, Claude or ChatGPT, and LinkedIn', text: 'Zoom uses the standing link from the calendar invite. You already have both AI accounts for research.' },
];

export const PRE_ASSESSMENT = 'https://docs.google.com/forms/d/e/1FAIpQLSf5RNdW8hYaeGHCpfQoXLWXQs-32zYo2DPG3W1-1y-8kp7cwA/viewform';

// Data order (0 audience, 1 one-on-one, 2 online) is what assignments, materials and outcomes
// index by; `n` is the order Max sees, matching the header tabs.
export const ways = [
  { slug: 'audience', n: 2, title: 'Presentation', short: 'Plan and deliver a presentation with a complete macro structure.', rubric: 'speech', alt: 'A young man in a blazer presenting on stage' },
  { slug: 'one-on-one', n: 1, title: 'One-on-one', short: 'Network and interview with a routine you can repeat.', rubric: '', alt: 'A young man being interviewed across a desk' },
  { slug: 'online', n: 3, title: 'Digital', short: 'Rebuild your LinkedIn and publish a short video portfolio.', rubric: 'linkedin', alt: 'A young man working on a laptop' },
];
/** The three ways in the order Max sees them, with each one's data index as `k`. */
export const waysInOrder = ways.map((w, k) => ({ ...w, k })).sort((a, b) => a.n - b.n);

export const emailGuide = [
  { part: 'Greeting', how: 'Say hello and use their name.', example: 'Hello, Marc,' },
  { part: 'Rapport', how: 'One genuine line about them or your last conversation.', example: 'Thanks for the tip on transitions Monday.' },
  { part: 'Context', how: 'One or two sentences on why you are writing.', example: 'I’m sending my benchmark video for Wednesday’s session.' },
  { part: 'Ask', how: 'Ask for exactly what you need, and be specific.', example: 'Could you watch it before Wednesday and tell me the first thing to fix?' },
  { part: 'Sign-off', how: 'A closing line and your name.', example: 'See you Wednesday, [your name]' },
];

// Session summaries, newest first. Each topic is a main point with its
// subpoints; `sub` nests one level deeper. Deliverables close every session.
export type Point = string | { text: string; sub: string[] };
export type Session = {
  n: number; date: string; title: string;
  takeaways: { idea: string; why: string }[];
  topics: { title: string; points: Point[] }[];
  professionalism?: { score: number; items: [string, number, string][] };
  // `group` puts a heading over a run of deliverables; numbering restarts under each one.
  deliverables: { text: string; due: string; href?: string; link?: string; group?: string }[];
  // Emails Marc wrote for Max to adapt and send, shown under the deliverables at #id.
  drafts?: { id: string; title: string; note: string; subject: string; lines: string[] }[];
  // Line-by-line outline fixes, grouped by section. `now` quotes the outline as
  // it stands, `say` is a model line to adapt.
  fixes?: { section: string; items: { line: string; now?: string; fix: string; say?: string }[] }[];
  // Sources Marc found for the sub-points, grouped by main point.
  research?: { title: string; items: { sub: string; finding: string; source: string; href: string }[] }[];
};
export const sessions: Session[] = [
  {
    n: 15, date: 'Monday, November 23', title: 'One idea: your calendar',
    takeaways: [
      { idea: 'One idea, done well.', why: 'Your speech covers one thing: using AI to manage your calendar. One idea keeps the speech clean and clear. Your outfit-color idea is still good, and it may become its own guide later.' },
      { idea: 'It fits how your brain works.', why: 'Your aptitude results point to work like this: figure out how something works, pull out the steps, and turn them into a process other people can repeat. That is what this speech does.' },
      { idea: 'Problem, solution, implementation.', why: 'A persuasive speech says, “I’m going to persuade you to do this.” Then it shows the problem, the solution, and how to put the solution to work.' },
      { idea: 'Stats make the problem urgent.', why: 'Citations build your credibility, and they also make people want to fix the problem now. Arkansas passed its smoking ban after ads said one in two Arkansans had lung damage from secondhand smoke. That number made people act.' },
    ],
    topics: [
      { title: 'Your policy speech', points: [
        'Thesis: “Today I will persuade you to use AI to help manage your calendar.”',
        'Problem: staying organized. With a messy calendar, you lose track of things, show up late, or miss things altogether.',
        'Solution: connect Claude to your Google Calendar. You don’t need a reason to pick Claude over ChatGPT or Gemini. Say you use Claude, and that the steps are similar for the others.',
        'Implementation: you’ll share your screen and connect Claude to a Google Calendar step by step. You can disconnect your own account and reconnect it, or use a second account. We’ll plan this part later.',
        'Call to action: download the free guide.',
      ] },
      { title: 'Your research', points: [
        'Executive functioning is how you organize your mind to get things done. People make it easier on themselves: workout clothes next to the bed, a toothbrush in the shower. Keeping a calendar takes energy, and AI takes some of that work off your plate.',
        { text: 'Learn the problem first. Marc’s printer ad shows how:', sub: [
          'What a printer does: makes a paper copy.',
          'The problem it solves: every time a college student needs to print, they walk to the library, wait in line, and fight software that may not print their assignment.',
          'Framed that way, the problem feels urgent before the ad says a word about the printer.',
        ] },
        'For the solution, look for white papers. A white paper is a study a company runs itself, like Google measuring how much time its tools save. It isn’t peer reviewed, but it’s useful data.',
        'Claude does the searching. Your part is knowing the sources: open them, drop the weak ones, and keep the ones you trust. Plan on 30 to 40 minutes, spread out before Monday, so you’re not pasting answers in right before we meet.',
      ] },
      { title: 'Your grades', points: [
        'Business Communication: 86.5. Your presentation came back at 90.3. The feedback on your format guide outline matches what we practice: a clear benefit statement, a problem and solution summary, strong verbs, and a call to action at the end.',
        'Writing: 89.',
        'Statistics: 80.61. Learning Curve 8.3 and Homework 8.1 are due today, and you’re doing Learning Curve 8.4 early. Fight for every point. This close to the end, a few points can be the difference between an A and a B.',
        'Italian Cinema: 92. The missing items are ones your professor hasn’t graded yet, and none are late.',
      ] },
      { title: 'Your paper', points: [
        'Your position: Greek life should remain at SMU. Keep it under 1,900 words, and include counterarguments.',
        'Marc is making a Google Doc for it, with a few things Claude can research for you.',
        'Your draft is due Saturday at 8 PM, so you aren’t writing it Sunday after a day of travel.',
        'Monday, Nov 30: ten minutes on your speech research, then your grades and your paper. Tuesday, Dec 1: a short meeting to finalize the paper and make sure it’s submitted.',
      ] },
    ],
    deliverables: [
      { group: 'Your Stats class', text: 'Finish Learning Curve 8.3, Homework 8.1, and Learning Curve 8.4.', due: 'Mon, Nov 23' },
      { group: 'Your Stats class', text: 'Reply to Brad’s email with a time that works.', due: 'When Brad writes' },
      { group: 'Your paper', text: 'Send Marc your Greek life paper draft.', due: 'Sat, Nov 28, 8 PM' },
      { group: 'Your policy speech', text: 'Answer the questions in Speech Research with Claude, and know which sources you’d use.', due: 'Mon, Nov 30', href: `${WORKSPACE}?tab=t.b220628fyaik`, link: 'Open Speech Research' },
    ],
  },
  {
    n: 14, date: 'Thursday, November 19', title: 'Your persona, and StoryBrand',
    takeaways: [
      { idea: 'Your persona can be dry.', why: 'Every presenter plays a version of themselves. The Weekend Update anchors on SNL don’t act that way at home. You don’t need to fake energy. Kyle Prue, the comedian Marc showed you, is about as dry as they come.' },
      { idea: 'Start from how you act with your friends.', why: 'Whatever role you play in your group, the planner, the funny one, the guy who knows things, that is the version of you we want on camera.' },
      { idea: 'Pick a topic in the overlap.', why: 'A good topic helps people, uses something you already know how to do, and matters to the people you want as colleagues one day. Marc knows cross-country, but he would never post about it on LinkedIn.' },
      { idea: 'The audience is the hero. You are the guide.', why: 'StoryBrand tells your speech as a story about the person watching. You are the one who shows them the way, the way Alfred guides Batman and Waymo guides its riders.' },
    ],
    topics: [
      { title: 'StoryBrand', points: [
        'A marketing framework businesses use to make their message clear. A hero has a problem and meets a guide, who gives them a plan, calls them to action, and helps them avoid failure. The story ends in success.',
        { text: 'Batman:', sub: [
          'Hero: Bruce Wayne. Problem: a robber killed his parents, and crime has taken over Gotham.',
          'Guide: Alfred. Plan: fight crime without becoming a criminal, so no guns and no killing.',
          'Failure: he becomes a villain. Success: Gotham has less crime.',
        ] },
        { text: 'Waymo:', sub: [
          'Hero: the rider after a long day, who doesn’t want to talk to a driver.',
          'Guide: Waymo. Call to action: the blue button to take a ride.',
          'Failure: stuck in a car with some guy, making small talk, less safe. Success: a safe ride that doesn’t drain your energy.',
        ] },
        'A guide needs empathy and authority. Alfred raised Bruce, and he has seen it all before. Waymo knows you want quiet after work, then lists its safety numbers.',
        'A plan has three steps at most.',
      ] },
      { title: 'Your policy speech', points: [
        'Hero: the person watching your video. Guide: you.',
        'Call to action: download your PDF.',
        'Failure: they show up late or unprepared, waste time, or look bad in a meeting.',
        'Success: AI saves them time.',
        'Two ideas fit so far: Claude running your calendar, and AI matching colors in your outfits. One keeps people on time for meetings. The other helps them look good once they’re there.',
        'For a third, start with something you already do, like asking AI for answers that fit your situation.',
      ] },
      { title: 'Stats with Brad', points: [
        'More sessions with Brad. You can meet Saturday, Sunday, or Monday morning, Nov 23, and Tuesday through Friday are out.',
        'You sent Brad your professor’s study guide during the session.',
      ] },
    ],
    deliverables: [
      { group: 'Your policy speech', text: 'Come up with a third idea, then pick one of the three. Your calendar and outfit-color ideas both work.', due: 'Mon, Nov 23, 1:30 PM', href: `${WORKSPACE}?tab=t.ph57jy6a8qcn`, link: 'Open Persuasive Speech' },
      { group: 'Your policy speech', text: 'Complete the StoryBrand form for the idea you picked.', due: 'Mon, Nov 23, 1:30 PM', href: `${WORKSPACE}?tab=t.zgc32l20ad1a`, link: 'Open the StoryBrand form' },
      { group: 'Your Stats class', text: 'Reply to Marc’s email with Brad and pick a time.', due: 'When Brad writes' },
    ],
  },
  {
    n: 13, date: 'Tuesday, November 17', title: 'Your speech passed, and what comes next',
    takeaways: [
      { idea: 'Growth is what Marc measures.', why: 'Marc played your first video from October next to this one. You know what you want to say now, and it shows. Your informative speech passes.' },
      { idea: 'A policy speech asks people to do something.', why: 'Policy and persuasive mean the same thing here. A policy speech asks the audience to take one specific action, and then you show them how.' },
      { idea: 'The best speeches feel useful.', why: 'The college classes Marc still uses taught him one technique at a time, explained simply: keep the first line of every paragraph to one line, and put a long list in bullets. He understood each one and could use it the next day. Your policy speech should do the same for your audience.' },
      { idea: 'The ideas come from you.', why: 'Marc could hand you a topic. He wants you to find it, so he wrote a short survey to help. Start with what AI already does for you, like keeping your calendar in Claude.' },
    ],
    topics: [
      { title: 'Your informative speech', points: [
        { text: 'It passes. Here’s the growth Marc saw since your first video:', sub: [
          'You know what you want to say, so the speech has focus.',
          'Your voice rises when a point is interesting.',
          'You hit every citation.',
          'Your movement and hand gestures don’t distract anymore.',
        ] },
        'Next time, look at the camera more. You caught that one yourself.',
        'Your slides look great, and so does the email Claude helped you write.',
      ] },
      { title: 'Your policy speech', points: [
        'The goal: one technique, explained simply, that people can use right away. Marc would like it to show people how to use AI to do more.',
        'You’ll give it seated at your laptop and share your screen to show people how.',
        'We’ll do a few test runs, then film it in several takes and edit it.',
        'It goes on a portfolio site Marc will build for you, linked from your resume. Marc showed you two other students’ sites: one with 3D-printed motel parts, one with fitness videos.',
        'On your resume, it makes you memorable: the guy with the AI productivity hacks. That’s why it has to be good.',
      ] },
      { title: 'Your grades', points: [
        'Writing: 88. Your last paper is due December 9, and Marc will review it before you turn it in.',
        'Italian Cinema: 92.5.',
        'Statistics: B-minus. One rough week on Nov 4 pulled it down, and you’ve scored 10 out of 10 on nearly everything since.',
        'Business Communication: 85. The team presentation after Thanksgiving works as the final, so a strong one could raise this to an A.',
        'Worst case, you finish the semester with an A-minus and three Bs. Marc doesn’t think that’s horrible, and with Brad’s help, he thinks it’ll be better.',
      ] },
    ],
    deliverables: [
      { text: 'Answer the 10 questions in the Persuasive Speech tab.', due: 'Thu, Nov 19', href: `${WORKSPACE}?tab=t.ph57jy6a8qcn`, link: 'Open Persuasive Speech' },
      { text: 'Send Marc the rubric for your last writing paper.', due: 'Thu, Nov 19' },
      { text: 'Email Marc when you’re done, using the Claude prompt from last week.', due: 'Thu, Nov 19', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
    ],
  },
  {
    n: 12, date: 'Thursday, November 12', title: 'Clear slides, and filming your speech',
    takeaways: [
      { idea: 'You control your clarity.', why: 'No presenter can make an audience think they’re brilliant. Clarity is the part you have full control over. Every slide carries signal, what the audience needs, and noise, everything else, and noise pulls their attention away from the signal.' },
      { idea: 'Put the number on the screen.', why: 'When the audience can see a statistic while you say it, you look more credible. You don’t need a quote or a number on every slide. Save your slides for the data that’s hard to follow without a picture.' },
      { idea: 'Anything you add needs a source.', why: 'The Japan comparison in Draft 4 came from AI, so it needs a citation. If there’s nothing to cite, say it with a limit, like “If my math is right.”' },
      { idea: 'Watch your transitions.', why: 'Marc grades this speech on structure, and transitions are the part people miss. “Now that I’ve discussed this, let’s talk about that” between every section keeps you from a redo.' },
    ],
    topics: [
      { title: 'Your outline', points: [
        'All 27 suggestions in Draft 4 are accepted, and the length is fine. The outline is ready to film.',
        'The Japan comparison for data center electricity use needs a source, or a limit when you say it.',
        'Mark every slide change in your outline in big, colored letters. In the middle of a speech, it’s easy to forget to switch slides.',
      ] },
      { title: 'Slides', points: [
        'Signal is what the audience needs. Noise is everything else.',
        { text: 'Slides that work:', sub: [
          'One big number on a simple slide.',
          'Lines that appear one at a time with an animation, on a click of the space bar or arrow key.',
          'A question for the audience. It fits the icebreaker, and the relevance link even better, since that’s where you connect the topic to the room.',
        ] },
        'Make up to six slides, counting the title slide, in PowerPoint or Google Slides, for the parts of your data that are hard to follow without a picture.',
      ] },
      { title: 'Filming', points: [
        'Read the speech out loud once before you film, so the words are familiar.',
        'Collared shirt, tripod, horizontal, you in the middle of the frame.',
        'A good take can be cut into a short clip for each main point, for your LinkedIn or resume when you apply for internships. A video of you presenting helps an employer see who you are.',
        'One more speech after this one, the persuasive speech, likely a week to a week and a half.',
      ] },
      { title: 'What Marc is grading', points: [
        'Three sources cited out loud, each with the author and the date. The article title isn’t needed.',
        'Every part of the structure: icebreaker, relevance link, credibility statement, thesis, preview, each main point, a transition between every section, and the conclusion.',
        'If three parts are missing, you redo the video.',
      ] },
      { title: 'Your classes', points: [
        'Your session with Brad cleared up what you missed on the last Stats test. You meet with him again Tuesday.',
        'Stats is the only class below a B.',
        'Finals: Italian Cinema Tue, Dec 1; business Wed, Dec 2; Writing paper due Wed, Dec 9; Stats Sat, Dec 12.',
        'Marc can review your papers against the rubric before you turn them in. You’ll text him if you want help.',
      ] },
    ],
    deliverables: [
      { group: 'Before Monday', text: 'In Draft 4, add a source for the Japan comparison, or say it with a limit (“If my math is right...”).', due: 'Mon, Nov 16', href: `${WORKSPACE}?tab=t.bzdmu0l0pgcf`, link: 'Open Draft 4' },
      { group: 'Before Monday', text: 'Add slide cues to your outline in big, colored letters.', due: 'Mon, Nov 16' },
      { group: 'Before Monday', text: 'Print your outline.', due: 'Sun, Nov 15' },
      { group: 'Before Monday', text: 'Read the speech out loud once, then film it in one take: collared shirt, tripod, horizontal, you in the middle of the frame.', due: 'Mon, Nov 16, 1:30 PM' },
      { group: 'Before Monday', text: 'Text Marc the video.', due: 'Mon, Nov 16, 1:30 PM' },
      { group: 'Before Monday', text: 'Make up to six slides, counting the title slide, in PowerPoint or Google Slides, for the data that’s hard to follow without a picture.', due: 'Mon, Nov 16, 2:00 PM', href: 'https://claude.ai/artifact/8XWs1N1kboZG2L9FhToxXt', link: 'See the example deck' },
      { group: 'Emailing Marc', text: 'After you finish your homework, paste this into your Claude: “Draft an email from me to Marc Gray (mgray@odysseycollegeprep.com) using the five-part format on this page: https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails. Tell him what I finished for Monday, and link anything he needs to open. Show me the draft before you send it.”', due: 'Mon, Nov 16', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
      { group: 'Emailing Marc', text: 'Next session.', due: 'Tue, Nov 17, 11:30 AM' },
    ],
  },
  {
    n: 11, date: 'Monday, November 9', title: 'The read-through, and Draft 4',
    takeaways: [
      { idea: 'When a line trips you up, check the wording.', why: 'Marc named three reasons a line comes out wrong: you misread it, it was hard to see, or it is awkward to say. The third is the one to fix. Simplify any line that is hard to say out loud, and cut anything the speech can do without.' },
      { idea: 'Give every big number a picture.', why: 'Nobody can picture 29 million gallons of water. About 44 Olympic swimming pools makes it clear. 1,200 terawatt-hours needs the same kind of comparison.' },
      { idea: 'Your outline is a tool.', why: 'Speaking extemporaneously means you glance at your notes when you need them and talk to the audience the rest of the time. It makes the speech sound like a conversation.' },
      { idea: 'Slides are for data.', why: 'Every slide pulls the audience’s eyes off you. For an informative speech with three main points, six slides is the max, and data visualizations do more for you than quotes.' },
    ],
    topics: [
      { title: 'Your presentation', points: [
        { text: 'Cuts from the read-through:', sub: [
          'The news outlet list in the introduction. Start with ChatGPT, Claude, and Gemini.',
          '“For some tasks,” in the Caswell line.',
          '“And drive the economy,” after the Copilot study. It stretches the evidence further than it goes.',
        ] },
        'Loudoun County: say what kind of source the number comes from, like a report, an article, or a survey.',
        'Where one citation ran straight into the next, it sounded choppy. Each piece of evidence needs a line on what it means.',
        'Main point three was jumbled in Draft 3. Draft 4 is the version to work in now.',
      ] },
      { title: 'Your delivery', points: [
        'Your inflection and cadence are better than when you started, and you moved around less.',
        'Print your outline before you present, from a printer at your apartment or at the library.',
      ] },
      { title: 'Your slides', points: [
        'Up to six slides.',
        { text: 'Three data visualizations to build:', sub: [
          '29 million gallons of water, about 44 Olympic swimming pools.',
          '1,200 terawatt-hours of electricity, once you have a comparison for it.',
          'The GitHub Copilot study: 1 hour 11 minutes with Copilot, 2 hours 41 minutes without.',
        ] },
        'No quote stood out to you as more important than the rest, so the slides can skip quotes.',
      ] },
      { title: 'Your classes', points: [
        'Stats: 83 after the last test. The final is 20% of your grade.',
        'Homework 6.2 was Canvas-only, and you missed it. You may still be able to do it.',
        'Brad starts with you Tuesday at 5:15. For the session to be worth both your time, he needs your questions.',
        'Italian Cinema: 92, with a quiz Tuesday.',
        'Business Communication: 10.67 out of 16 on last week’s quiz.',
        'Your advisor’s auto-reply said two to three business days. Marc will check in with you on it Wednesday.',
      ] },
    ],
    deliverables: [
      { group: 'Your Stats class', text: 'Reply to Brad in the “Max, meet Brad (Stats)” thread and confirm 5:15.', due: 'Tue, Nov 10, 5:15 PM' },
      { group: 'Your Stats class', text: 'Add the questions you want to work through to “Stats: Questions for Brad.”', due: 'Tue, Nov 10, 5:15 PM', href: 'https://docs.google.com/document/d/1TmiWeRK_DCZJBHowJrvRGjTXHpPshC4SH31_3ciMOXQ/edit', link: 'Open the doc' },
      { group: 'Your presentation', text: 'In Draft 4, go through Marc’s suggestions and accept them. If one doesn’t sound like you, reword it.', due: 'Thu, Nov 12, 4:00 PM', href: `${WORKSPACE}?tab=t.bzdmu0l0pgcf`, link: 'Open Draft 4' },
      { group: 'Your presentation', text: 'Fill in Marc’s comments (the bold italic brackets): a topic sentence for each of the three main points.', due: 'Thu, Nov 12, 4:00 PM' },
      { group: 'Your presentation', text: 'Add a comparison for 1,200 terawatt-hours, the way 29 million gallons became 44 swimming pools.', due: 'Thu, Nov 12, 4:00 PM' },
      { group: 'Your presentation', text: 'Say what kind of source the Loudoun County number comes from, and its year.', due: 'Thu, Nov 12, 4:00 PM' },
      { group: 'Your presentation', text: 'Add a few ways people use AI for fun, under entertainment.', due: 'Thu, Nov 12, 4:00 PM' },
      { group: 'Your presentation', text: 'Practice the speech out loud, and look at your outline only when you need it.', due: 'Thu, Nov 12, 4:00 PM' },
      { group: 'Emailing Marc', text: 'Wednesday evening, paste Marc’s recap email into your Claude and ask it whether you have everything finished.', due: 'Wed, Nov 11' },
      { group: 'Emailing Marc', text: 'Email Marc when it’s all done, in the course email format. If something will run late, email before the deadline with a new time.', due: 'Thu, Nov 12, 4:00 PM', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
      { group: 'Emailing Marc', text: 'Next session.', due: 'Thu, Nov 12, 4:00 PM' },
    ],
  },
  {
    n: 10, date: 'Wednesday, November 4', title: 'Your evidence, and a plan for Stats',
    takeaways: [
      { idea: 'Say it in your own words first.', why: 'Today you explained Loudoun County in one plain sentence: the data centers pay so much in taxes that the yearly bill on a home drops. That was the clearest you have sounded about this topic, and Marc is adding your words to Draft 3. Do the same for every piece of evidence. Explain it the way you would tell a friend.' },
      { idea: 'Then back it up with the source.', why: 'Right after your own words, give the quote or the number, introduced with “according to,” who, and the year. Your words make the point clear. The source makes it credible.' },
      { idea: 'Informative means real evidence.', why: 'AI in medicine is still largely predictions. Productivity has studies with real numbers behind them, so it replaces medicine in main point two.' },
      { idea: 'Email before the session.', why: 'You did it today. Before we met, you told Marc where you stood on Traders and how your tests went. Keep doing it, especially when something will be late.' },
    ],
    topics: [
      { title: 'Your presentation', points: [
        { text: 'Medicine is out. Productivity replaces it, with two examples:', sub: [
          'Software: in a 2023 GitHub study, programmers using its AI assistant, Copilot, built a web server in JavaScript 55% faster than programmers without it.',
          'Professional writing: in a 2023 MIT study of 453 professionals, people using ChatGPT finished writing tasks in 40% less time, and their work was rated 18% better.',
        ] },
        { text: 'The three steps, on one example:', sub: [
          'Weak: “A study found AI makes programmers 55% faster.”',
          'Stronger: “Programmers who use AI can finish the same job in less than half the time. According to a 2023 GitHub study, programmers using its AI assistant, Copilot, built a web server 55% faster than programmers without it.”',
        ] },
        'Your personal story is not in Draft 3. Write it under the new productivity sub-point: how you study with AI now compared with before.',
      ] },
      { title: 'Your Stats class', points: [
        'On today’s test, data distributions made sense. Sampling distributions lost you, and the clock ran out about halfway through.',
        'What you said you need: worked problems, and someone to answer questions as they come up, the way your high school math classes of eight did.',
        'The plan: one session with Brad Hymas, one of Marc’s tutors, who has a master’s in data science. He works through problems with you step by step. If it doesn’t help, we stop there.',
        'Only the final is left, so the study guides are where to start.',
      ] },
    ],
    drafts: [
      { id: 'stats-email', title: 'Your email to your Stats professor', note: 'Change anything you want, then send it from your SMU account.', subject: 'Preparing for the final', lines: [
        'Dear Professor [last name],',
        'I’m in your [time] Statistics section. Thank you again for letting me do the lab from home when I was sick.',
        'I struggled on today’s test. I understood data distributions, but I couldn’t work the sampling distribution problems, and I ran out of time before I finished. I’ve also had trouble turning my notes into steps I can follow on a test.',
        'Could you point me to practice problems with worked solutions, or let me know a time I could come to office hours before the final?',
        'I really want to get an A in this class. It’s my first semester here at SMU, and I want to finish your class strong, as well as the semester.',
        'I’d be grateful for any help you’re willing to give.',
        'Thank you,\nMax Denton',
      ] },
    ],
    deliverables: [
      { group: 'Your presentation', text: 'In Draft 3, replace the medicine sub-point with productivity, using the two studies under “Your presentation” below.', due: 'Mon, Nov 9', href: `${WORKSPACE}?tab=t.ioyi0gqmuebc`, link: 'Open Draft 3' },
      { group: 'Your presentation', text: 'Add a short personal story about how you use AI to study.', due: 'Mon, Nov 9' },
      { group: 'Your presentation', text: 'Run every source through the three steps: your own words, the quote or number, then “according to,” who, and the year.', due: 'Mon, Nov 9' },
      { group: 'Your presentation', text: 'Record yourself reading your final outline once and text it to Marc.', due: 'Mon, Nov 9' },
      { group: 'Your Stats class', text: 'Upload your Stats study guides to the folder Marc shared with you and Brad.', due: 'Mon, Nov 9', href: 'https://drive.google.com/drive/folders/1OI18pXNBV8Jmk7lPg1qbzVUPxVcIvpiV', link: 'Open the folder' },
      { group: 'Your Stats class', text: 'Add notes to “Stats: Questions for Brad” in the same folder: the questions you want to work through, and where you’d like help on each one.', due: 'Mon, Nov 9', href: 'https://docs.google.com/document/d/1TmiWeRK_DCZJBHowJrvRGjTXHpPshC4SH31_3ciMOXQ/edit', link: 'Open the doc' },
      { group: 'Your Stats class', text: 'Send your Stats professor the email Marc wrote for you.', due: 'Mon, Nov 9', href: '#stats-email', link: 'See the email' },
      { group: 'Your other classes', text: 'Email your Italian Cinema professor to apologize for missing class.', due: 'Mon, Nov 9', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
      { group: 'Your other classes', text: 'Email your advisor to drop Econ.', due: 'Mon, Nov 9' },
      { group: 'Emailing Marc', text: 'Email Marc when everything is done, in the course email format. If anything will be late, email before the deadline with a new time.', due: 'Mon, Nov 9', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
      { group: 'Emailing Marc', text: 'Next session.', due: 'Mon, Nov 9' },
    ],
  },
  {
    n: 8, date: 'Friday, October 30', title: 'Reading it out loud',
    takeaways: [
      { idea: 'Verbs carry the sentence.', why: '“My heart hammered in my chest” beats “my heart started beating fast.” In your credibility line, “investigated” does more work than “spent the last week reading and gaining information.”' },
      { idea: 'Slow down and say “according to.”', why: 'When you reach a source, slow down. “According to a 2025 survey by Caswell” makes you sound like an expert. Make “according to” your default and mix it up only now and then.' },
      { idea: 'Dates do work for you.', why: 'AI changes fast. “Keep in mind, this was over a year ago, and already 55% of Americans...” tells the audience the number is even higher now.' },
      { idea: 'A story connects where data can’t.', why: 'A before-and-after from your own life, like a study guide that used to take hours and now takes ten seconds, shows the audience something about you. Sharing your story is how you connect, and connection beats performance.' },
      { idea: 'A transition looks back, then ahead.', why: 'Every transition refers back to the point you just finished, then names the one coming next: “Now that we’ve covered how people use AI, let’s look at the benefits AI data centers bring.” It tells the audience where they have been and where they are going.' },
      { idea: 'Your job is to inform.', why: 'This speech takes no side on AI. Say the negatives plainly, without cushioning them.' },
      { idea: 'Email Marc between sessions.', why: 'Use the course email format every time. If you need more time, say so before the deadline and give a new time; schoolwork comes first, and things happen. When Marc hears nothing, he has to assume the worst. When you communicate, it saves face and credibility, and it puts any delay, and sometimes a failure, in context. The same habit builds connections with your professors and supervisors, the people who will recommend you for jobs and write your recommendation letters.' },
    ],
    topics: [
      { title: 'Introduction', points: [
        { text: 'Fixed live:', sub: [
          'The credibility line now says you investigated and read 10 peer-reviewed articles.',
          'The relevance link says “we” instead of “you” and lists more places people see AI: Instagram, TikTok, Facebook, business news outlets, podcasts.',
          'AI data centers are now “a popular topic.”',
        ] },
        'Add traditional news, like Fox or CNN, to the list.',
        'You said it yourself: the intro repeats “AI data centers” too often. Read it out loud again and cut every one you don’t need. Plain “AI” works in a few spots.',
        'Contractions are fine. Write the way you talk.',
      ] },
      { title: 'Main point one', points: [
        'You found the source for the 55% live: Caswell, 2025. Now write the line the way you will say it: “According to a 2025 survey by Caswell, 55% of U.S. respondents use AI instead of search engines for some tasks. In the UK, it’s 62%.”',
        'Add the date as context: “Keep in mind, this was over a year ago.”',
        'Do the same for Constantz and OfficeChai: “according to,” the author or outlet, the year, then the finding.',
        'You said each sub-point needs more between the evidence and the next point. After each piece of evidence, add a line or two on what it means for the audience.',
        { text: 'Put a story in one sub-point, written out word for word. A before and after works well:', sub: [
          'Studying: making your own Quizlet set for a math test took a couple of hours. Now you put your notes into AI and have a study guide in about ten seconds.',
          'Research: digging through a database for peer-reviewed sources took hours. Now AI finds them in minutes and your job is to vet them.',
        ] },
        'Mark every quote in your outline so you remember to slow down when you reach it.',
      ] },
      { title: 'Main point two', points: [
        'Medicine: make it a complete sentence and name a real AI breakthrough in medicine. This one needs a little more research.',
        'Economic growth: explain where the $700 million comes from.',
        { text: 'Taxes: this explains how data centers add money to a state, so it belongs under economic growth. Lead in with “It does that in a few ways. First, it lowers taxes and pays for better public services.”', sub: [
          'Then explain the numbers in plain words. One way: the rate is per $100 of home value, so on a $500,000 home the yearly bill dropped from about $5,725 to about $4,025, roughly $1,700 less.',
          'Fix “(London County)” to Loudoun County, Virginia, with its APA source.',
        ] },
        'The transition into main point three is still blank. Refer back to what you just covered, then say what’s next: “Now that we’ve covered the benefits AI data centers bring, let’s look at the harm they can cause.”',
      ] },
      { title: 'Main point three', points: [
        { text: 'Add an illustration after each number so the audience can picture it:', sub: [
          '29 million gallons of water is about 44 Olympic swimming pools.',
          '1,200 terawatt-hours is enough electricity to power over 100 million American homes for a year.',
        ] },
        'Disrupts surroundings: find one more source on how AI data centers affect wildlife.',
        'Stop softening the negatives. Cut “to operate efficiently” and “might occupy.” Say “how much space a data center takes up.”',
      ] },
      { title: 'Conclusion', points: [
        'Not there yet. Swap “That’s everything I know” for the three parts from Session 7: restate your thesis, summarize your three main points, then the clincher.',
      ] },
      { title: 'Using Claude', points: [
        'Claude can help with every illustration and explanation on this page. Ask it for lots of options, then pick the best ones yourself.',
        'This list looks long, but every item is small.',
      ] },
    ],
    fixes: [
      { section: 'Introduction', items: [
        { line: 'Relevance link, first sentence', now: 'We see it on Instagram, TikTok, Facebook, business news outlets, podcasts, etc.', fix: 'Add traditional news, like Fox and CNN, to the list.', say: 'We see it on Instagram, TikTok, Facebook, Fox, CNN, business news outlets, and podcasts.' },
        { line: 'Relevance link, add a sentence', fix: 'From Session 7: name the AI tools people use, and the people in the room who live near a data center.', say: 'Many of us use ChatGPT, Claude, or Gemini every week, and some of us live near a data center or have family who do.' },
        { line: 'Relevance link, second sentence', now: 'You’ve heard about it because it’s been everywhere.', fix: 'Switch “you” to “we,” the same as the first sentence. It keeps the whole room included.', say: 'We’ve heard about it because it’s everywhere.' },
        { line: 'Speaker credibility', now: 'I have spent the last week investigating everything related to these new AI data centers. I have read 10 peer-reviewed articles related to the subject.', fix: 'Cut “everything related to these new AI data centers.” Keep “investigating” and the 10 peer-reviewed articles.', say: 'I spent the last week investigating this topic, and I read 10 peer-reviewed articles on it.' },
        { line: 'Whole introduction', fix: 'Read the intro out loud and count how many times you say “AI data centers.” Keep it to two: once in the relevance link, once in the thesis. Everywhere else, say “AI” or “data centers.”' },
      ] },
      { section: 'Main point one', items: [
        { line: 'Relevance link', now: 'I bet you use AI for many things because there are so many AIs now; you can do anything with them.', fix: 'From Session 7: open with the Pew stat from your Research Notes, said out loud with “according to.”', say: 'According to the Pew Research Center in 2026, 49% of American adults now use AI chatbots, up from 33% in 2024. About one in four of us uses one every day.' },
        { line: 'Sub-point one', now: 'The most popular is Information', fix: 'Make it a full sentence, the way you will say it. Lowercase “information.”', say: 'The first use is looking up information.' },
        { line: 'Sub-point one, evidence', now: '(Caswell, A. (2025, September 3) 55% of U.S. respondents use AI instead of search engines for some tasks.', fix: 'Turn the tag in parentheses into a sentence you say: “according to,” who, when, then the number. Add the date as context, the way Marc showed you.', say: 'According to a 2025 survey reported by Caswell in Tom’s Guide, and keep in mind this was over a year ago, 55% of U.S. respondents already use AI instead of search engines for some tasks. In the UK, it’s 62%.' },
        { line: 'Sub-point one, explanation', fix: 'Add one or two sentences after the evidence on what it means. Your source gives you the reason: people want faster, more personalized answers, for things like planning trips, making fitness plans, and finding gifts.' },
        { line: 'One story, word for word', fix: 'Pick one sub-point in main point one and write a short story from your own life under it: what it was like before AI, what it is like now, and what that means for you. Four to six sentences, typed out in full. Use one of these two:', say: 'Studying: making my own Quizlet set for a math test used to take a couple of hours. Now I put my notes into AI and have a study guide in about ten seconds. OR Research: finding peer-reviewed sources used to mean hours in a database. Now AI finds them in minutes, and my job is to vet them.' },
        { line: 'Sub-point two', now: 'Next is productivity', fix: 'Make it a full sentence.', say: 'The second use is productivity at work.' },
        { line: 'Sub-point two, evidence', now: '(Constanz, J) “Workers who had an AI assistant were 14% more productive on average.”', fix: 'Fix the spelling to Constantz. Say who, when, and what, out loud. The study behind the article is from Stanford and MIT, which sounds stronger than the article alone.', say: 'According to a 2023 article by Constantz in Employee Benefit News, researchers at Stanford and MIT found that customer service workers with an AI assistant were 14% more productive on average.' },
        { line: 'Sub-point two, explanation', fix: 'Add one sentence on what it means. Your source gives you this: the newest, least experienced workers saw the biggest boost, so AI closed the gap between beginners and experts.' },
        { line: 'Sub-point three', now: 'The third is entertainment', fix: 'Make it a full sentence.', say: 'The third use is entertainment.' },
        { line: 'Sub-point three, evidence', now: '(OfficeChai Team) People use AI for fun by writing stories with it…', fix: 'From Session 7: add the 25% and say the source out loud. Keep your list of examples after it as the explanation.', say: 'According to a 2026 Pew Research Center survey, reported by OfficeChai, 25% of American adults use chatbots for fun, which makes entertainment the third biggest use after information and work.' },
        { line: 'Transition to main point two', now: 'We’ve discussed AI generally. So what are the benefits of an AI data centers.', fix: 'Fix “an AI data centers.” Close main point one, then open main point two.', say: 'Now that we’ve covered how people use AI, let’s look at the benefits AI data centers bring.' },
      ] },
      { section: 'Main point two', items: [
        { line: 'Main point two', now: 'There are many positives', fix: 'From Session 7: name what you mean. It should match your preview.', say: 'AI data centers bring real benefits.' },
        { line: 'Relevance link', now: 'I bet a lot of you haven’t heard what good these data centers can actually do', fix: 'Politeness theory from Session 7: “haven’t heard” assumes the audience doesn’t know. Bring them along.', say: 'Some of you may already know a few of the ways data centers help the towns and people around them.' },
        { line: 'Medicine sub-point', now: 'Advances in AI medicine', fix: 'Make it a full sentence.', say: 'The first benefit is advances in medicine.' },
        { line: 'Medicine evidence', now: '…they predict medical AI will move past the hype stage into practical, real-world use:', fix: 'The colon leads to nothing. Find one real AI breakthrough in medicine and put it after the colon: the name of the tool or study, what it does, a number, who reported it, and the year. A starting point from Session 6: the FDA lists over 1,000 cleared AI medical devices, many of them reading X-rays and MRIs. Add the source to Research Notes in APA 7.' },
        { line: 'Medicine explanation', fix: 'Add one sentence on what that breakthrough means for a patient.' },
        { line: 'Economic growth sub-point', now: 'Economic Growth', fix: 'Make it a full sentence.', say: 'The second benefit is economic growth.' },
        { line: 'Economic growth evidence', now: 'U.S. Chamber of Commerce. (2026, October 15) “One mid-sized data center adds nearly $700 million to a state’s economy.”', fix: 'Say the source out loud.', say: 'According to the U.S. Chamber of Commerce in October 2026, one mid-sized data center adds nearly $700 million to a state’s economy.' },
        { line: 'Where the money comes from', fix: 'Add two sentences that explain the $700 million. Your source has them: building one takes about two years and supports more than 5,200 jobs a year, and over five years data centers are projected to bring $174 million in tax revenue to Dallas County. That last one is where you live.' },
        { line: 'Taxes: move it under economic growth', now: 'Sub Point: Lowers Taxes and better public services', fix: 'This is one of the ways data centers add money to a state, so it goes under economic growth as part of the explanation. Delete the “Sub Point” label and lead in with this line.', say: 'It does that in a few ways. First, it lowers taxes and pays for better public services.' },
        { line: 'Loudoun County evidence', now: 'Loudoun County, Virginia, has more data centers than almost anywhere in the world…', fix: 'Say the source out loud.', say: 'According to Loudoun County, Virginia, which has more data centers than almost anywhere in the world, they bring the county “an unprecedented amount of revenue.”' },
        { line: 'Explain the tax numbers', now: 'That money helped cut homeowners’ property tax rate from $1.145 per $100 of home value in 2016 to $0.805 in 2026.', fix: 'Neither of us knew what this meant on first read, so the audience won’t either. Keep the numbers, then put them in plain words. Your source also says the money pays for schools, public safety, libraries, parks, and roads.', say: 'On a $500,000 home, that’s a yearly tax bill that dropped from about $5,725 to about $4,025, roughly $1,700 a year back in a family’s pocket.' },
        { line: 'Delete “(London County)”', now: '(London County)', fix: 'Delete it. It’s Loudoun, and the source is already in your Research Notes.' },
        { line: 'Transition to main point three', now: 'ADD (Refer back… Then refer to what’s next)', fix: 'Still blank. Refer back to what you just covered, then say what’s next.', say: 'Now that we’ve covered the benefits AI data centers bring, let’s look at the harm they can cause.' },
      ] },
      { section: 'Main point three', items: [
        { line: 'Main point three', now: 'AI data centers also have some negative impact.', fix: 'Cut “some.” Say the negatives plainly.', say: 'AI data centers also have negative impacts.' },
        { line: 'Relevance link', now: 'How much water and electricity AI needs to operate efficiently, and how much space a data center might occupy.', fix: 'Cut “to operate efficiently” and “might occupy.” Both soften the point.', say: 'How much water and electricity data centers use, and how much space they take up.' },
        { line: 'Disrupts surroundings sub-point', now: 'Disrupts surroundings', fix: 'Make it a full sentence.', say: 'First, data centers disrupt the places around them.' },
        { line: 'Wiseman evidence', now: '(Wiseman, H 2026) Noise, light, and heat from these sites can affect neighbors…', fix: 'Say the source out loud.', say: 'According to a 2026 report by Wiseman at Penn State’s Center for Energy Law and Policy, noise, light, and heat from these sites can affect neighbors, wildlife, and dark night skies in rural areas.' },
        { line: 'Add space', fix: 'Your relevance link promises space, and no sub-point covers it yet. The same Wiseman source has the number: Meta’s Hyperion AI campus in Louisiana will cover about 3,650 acres, about the size of a large city’s airport. Add it after the Wiseman line.' },
        { line: 'Wildlife source', fix: 'Find one more source on how AI data centers affect wildlife. It needs a name, a year, and a specific finding. Add it after the Wiseman line as a citation sentence, and to Research Notes in APA 7.' },
        { line: 'Electricity sub-point', now: 'Electricity', fix: 'Make it a full sentence.', say: 'Second, they use enormous amounts of electricity.' },
        { line: 'Electricity evidence and illustration', now: 'Gartner. (2026, June 10) “Data center electricity use could pass 1,200 terawatt-hours by 2030…”', fix: 'Say the source out loud, then add an illustration so the audience can picture 1,200 terawatt-hours.', say: 'According to Gartner, a tech research firm, in June 2026, data center electricity use could pass 1,200 terawatt-hours a year by 2030, and the power grid won’t keep up. That’s enough electricity to power over 100 million American homes for a year.' },
        { line: 'Water sub-point', now: 'Water', fix: 'Make it a full sentence.', say: 'Third, they use a lot of water.' },
        { line: 'Water evidence and illustration', now: '(Toms Guide) In one case, a data center drew about 29 million gallons of water over 15 months…', fix: 'Fix the spelling to Tom’s Guide. Say the source out loud, then add the illustration.', say: 'According to a 2026 investigation by Tom’s Guide, one data center drew about 29 million gallons of water over 15 months before residents noticed low water pressure. That’s about 44 Olympic swimming pools.' },
      ] },
      { section: 'Conclusion', items: [
        { line: 'Transition to the conclusion', fix: 'Add it. There’s nothing between main point three and the conclusion right now.', say: 'Now that I’ve talked about the harm data centers can cause, let’s wrap up.' },
        { line: 'Restate your thesis', now: 'That’s everything I know about AI data centers', fix: 'Replace it with your thesis, said a new way.', say: 'Today, I informed you about AI data centers.' },
        { line: 'Summarize your main points', now: 'The data centers have many benefits but also some harmful side effects', fix: 'Name all three main points, in order, the way your preview does.', say: 'We looked at what people use AI for, the benefits AI data centers bring, and the harm they cause.' },
        { line: 'Clincher', now: 'As AI advances, we will see how these AI data centers improve and evolve', fix: 'Keep the idea and cut the second “AI.” Or use the Session 7 model.', say: 'Time will tell how this technology will affect society and the environment. One thing is for sure: it is here to stay.' },
      ] },
    ],
    deliverables: [
      { text: 'Make all 43 outline fixes in the list below, in your Informative Speech tab. There are a lot, and every one has to be done. Each one is small: a line to retype, a source to say out loud, a sentence to add.', due: 'Mon, Nov 2, 1:00 PM', href: '#fixes', link: 'See the fixes' },
      { text: 'Add your medicine breakthrough and wildlife sources to your Research Notes tab in APA 7.', due: 'Mon, Nov 2, 1:00 PM', href: `${WORKSPACE}?tab=t.fwcv0shsln3t`, link: 'Open Research Notes' },
      { text: 'Email Marc when it’s done, in the course email format, with the link to your outline.', due: 'Mon, Nov 2, 1:00 PM', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
      { text: 'If you need more time on anything, email Marc before the deadline, in the same format, with what’s going on and when you’ll have it.', due: 'Ongoing', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
      { text: 'Next session.', due: 'Mon, Nov 2, 2:00 PM' },
    ],
  },
  {
    n: 7, date: 'Monday, October 26', title: 'Finishing the outline',
    takeaways: [
      { idea: 'Name exactly what you mean.', why: '“Positives” could mean anything. “The benefits AI data centers provide” tells the audience exactly what is coming, and your preview has to match the body point for point.' },
      { idea: 'Cast a wide net.', why: 'A relevance link works when it names things people have seen or used: ChatGPT, Claude, Gemini, a data center going up near home. The more specific examples you list, the more people in the room it pulls in.' },
      { idea: 'Assume your audience knows something.', why: 'Politeness theory: everyone wants to feel competent. “You don’t realize how AI affects the environment” tells them they are ignorant. “Some of you might already know” brings them along.' },
      { idea: 'Write it the way you will say it.', why: 'Every line of the outline is a full sentence, word for word, so you can read it straight through out loud.' },
      { idea: 'Check the rubric before you submit.', why: 'You work fast. The gap between a B and an A is usually a small rubric item, like a works cited, that a second look would catch.' },
    ],
    topics: [
      { title: 'Introduction', points: [
        'Your preview named four things, but the body has three. It now names AI use cases, the benefits AI data centers provide, and the negatives they cause.',
        'Keep the icebreaker and the relevance link separate.',
        { text: 'Make the relevance link wider and longer.', sub: [
          'Name the tools people use: ChatGPT, Claude, Perplexity, Gemini.',
          'Some of us live near a data center or have family who do.',
          'Instagram and TikTok can stay, as part of a longer list.',
        ] },
      ] },
      { title: 'Main point one', points: [
        'Relevance link: use the stat that about half of adults use AI. “According to the Pew Research Center in 2026, 49% of American adults now use AI chatbots.” Then name what they use it for, like looking things up or entertainment.',
        'Information sub-point: the trips and fitness plans line comes from Caswell (Tom’s Guide, 2025), not Constantz. Credit Caswell and add the 55%.',
        'Entertainment sub-point: add the 25% from your notes.',
      ] },
      { title: 'Main point two', points: [
        'Medicine sub-point: add examples after the colon. One option is from Session 6: the FDA lists over 1,000 cleared AI medical devices.',
        'Add the Chamber of Commerce $700 million source to your Research Notes.',
        'Add an APA source for the Loudoun County numbers.',
        'Claude can format all of these in APA 7 for you.',
      ] },
      { title: 'Main point three', points: [
        'Open it the way you would say it: “AI data centers can also have a negative impact.”',
        'Land: the Wiseman 2026 source is about noise, light, and heat. Use it to show data centers disrupt local communities, and add it to your Research Notes.',
        'Electricity: the 29 million gallons stat is about water, so you swapped in an electricity stat.',
        { text: 'Relevance link: cover all three, land, water, and electricity.', sub: [
          'Example: “Land to live on, fresh water to drink, and electricity for comfort are things all of us have in common. AI data centers take a lot of all three.”',
          'List things people have likely seen on their feeds: how much water data centers use, how much space they take up, how much electricity they pull.',
          'Say “some of you might already know,” not “you don’t realize.”',
        ] },
      ] },
      { title: 'Transitions and conclusion', points: [
        { text: 'A transition closes one point and opens the next.', sub: [
          '“Now that I’ve talked about how people use AI, let’s look at the benefits AI data centers provide.”',
          '“Now that we’ve discussed the benefits AI data centers provide, let’s look at the negative impacts they have.”',
          '“Now that I’ve talked about the negative impacts, let’s conclude.”',
        ] },
        { text: 'The conclusion has three parts. No relevance link.', sub: [
          'Restate your thesis.',
          'Summarize your main points.',
          'Clincher: a last line that leaves them wanting more without adding anything new. For a technology still changing, try “Time will tell how this technology will affect society and the environment. One thing is for sure: it is here to stay.”',
        ] },
      ] },
      { title: 'Classes', points: [
        { text: 'Try NotebookLM for your econ test.', sub: [
          'Upload your lecture notes and screenshots of your textbook.',
          'It makes flashcards and practice quizzes from only what you put in.',
        ] },
        'Before you turn in a paper, paste it into Claude with the rubric and ask what you are missing.',
        'Do great work for your writing professor. A professor who knows you is the one who writes your recommendation letter.',
      ] },
      { title: 'Clubs', points: [
        'Coders for Community has not replied. Send a short follow-up.',
        'Look into the traders club. Claude can help you find where and when it meets.',
      ] },
    ],
    deliverables: [
      { text: 'Finish your outline: every fix on this page, every line word for word, transitions between main points, and a conclusion.', due: 'Thu, Oct 29, 10:00 PM', href: `${WORKSPACE}?tab=t.vpywumt8vxmk`, link: 'Open Informative Speech' },
      { text: 'Add the Chamber of Commerce, Wiseman 2026, and Loudoun County sources to your Research Notes tab in APA 7.', due: 'Thu, Oct 29, 10:00 PM', href: `${WORKSPACE}?tab=t.fwcv0shsln3t`, link: 'Open Research Notes' },
      { text: 'Record yourself reading the full speech out loud, word for word, and send it to Marc.', due: 'Fri, Oct 30, 2:00 PM' },
      { text: 'Send Coders for Community a short follow-up.', due: 'Fri, Oct 30', href: 'https://smu360.smu.edu/student_community?a=1&club_id=35998', link: 'Open Coders for Community' },
      { text: 'Look into the traders club.', due: 'Fri, Oct 30' },
      { text: 'Send Marc a quick email whenever you finish an assignment.', due: 'Ongoing', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
      { text: 'Next session moves from Wednesday to Friday at 2:30.', due: 'Fri, Oct 30, 2:30 PM' },
    ],
  },
  {
    n: 6, date: 'Wednesday, October 21', title: 'Research for every sub-point',
    takeaways: [
      { idea: 'Practical means examples.', why: '“Practical, real-world use” says nothing until you name three things it looks like. Give the audience the examples, one, two, three.' },
      { idea: 'Positives for the average consumer.', why: 'You spotted it yourself: main point two was about AI in general, not data centers. Framing it as what data centers make possible for the average person fixes that.' },
      { idea: 'Everyone benefits from AI, even people who never use it.', why: 'Fraud alerts on your card, your weather app, and your TikTok feed all run on AI. That makes a strong relevance link: it pulls in the people in the room who say they never touch ChatGPT.' },
      { idea: 'Reaching out is not joining.', why: 'Asking a club if you can sit in on one meeting costs you nothing. You decide after you see it.' },
      { idea: 'Words first, movement later.', why: 'Next time you sit and read the whole speech. Once the words are solid, delivery smooths out on its own.' },
    ],
    topics: [
      { title: 'How to lay out each main point', points: [
        'Use this shape for all three main points. The topic is made up, so copy the layout, not the content.',
        { text: 'Main point 2: How caffeine affects your body', sub: [
          'Relevance link: “If you’ve had coffee or an energy drink today, this is happening in your body right now.”',
          'Sub-point 1, alertness: “According to [outlet] in [year], [finding with the number].” ([Source], [year])',
          'Sub-point 2, sleep: “[Outlet] reported in [year] that [finding with the number].” ([Source], [year])',
          'Sub-point 3, limits: “A [year] study by [outlet] found [finding with the number].” ([Source], [year])',
          'Transition: “Now that we’ve covered how caffeine affects your body, let’s look at how much is too much.”',
        ] },
      ] },
      { title: 'Main point two', points: [
        'Your outline says AI will “move past the hype stage to practical, real-world use.” Say what that use looks like with three examples.',
        'The research below gives you three: your health, your money, and your weather.',
        'Relevance link idea: “Believe it or not, everyone in this room benefits from AI in some way.” Then name the examples.',
      ] },
      { title: 'Clubs', points: [
        'Coders for Community builds software for Dallas nonprofits. A nonprofit is a business that runs on donations, so the skills carry over to finance.',
        'You don’t need to know how to code to show up. Ask to sit in on one meeting, then decide.',
      ] },
    ],
    research: [
      { title: 'Main point one: how people use AI', items: [
        { sub: 'Information', finding: '55% of U.S. respondents in Future’s AI Sentiment survey now use AI in place of a search engine for some tasks, such as planning trips, comparing products, and fixing tech problems.', source: 'Tom’s Guide, 2025', href: 'https://tomsguide.com/ai/ai-search-is-exploding-6-tasks-people-are-now-giving-to-ai-instead-of-google' },
        { sub: 'Productivity', finding: 'Researchers from Stanford and MIT followed 5,179 customer support agents. Agents with an AI assistant resolved about 14% more issues per hour, and the newest, least experienced agents improved about 35%.', source: 'Brynjolfsson, Li, and Raymond, National Bureau of Economic Research, 2023', href: 'https://www.nber.org/digest/20236/measuring-productivity-impact-generative-ai' },
        { sub: 'Entertainment', finding: 'In a 2025 Ipsos survey of 9,000 people in eight countries, 97% could not tell fully AI-made songs from songs made by people, and 80% want AI music clearly labeled. This one could also sit under negatives.', source: 'Deezer and Ipsos, 2025', href: 'https://newsroom-deezer.com/2025/11/deezer-ipsos-survey-ai-music/' },
      ] },
      { title: 'Main point two: positives for the average consumer', items: [
        { sub: 'Your health', finding: 'The FDA keeps a public list of AI-enabled medical devices cleared for use in the U.S. It now runs past 1,000 devices, and the large majority are in radiology, reading scans like X-rays and MRIs.', source: 'U.S. Food and Drug Administration, 2026', href: 'https://www.fda.gov/medical-devices/artificial-intelligence-enabled-medical-devices/list-artificial-intelligence-enabled-medical-devices' },
        { sub: 'Your money', finding: '“In 2024 alone, Visa helped block $40 billion in fraudulent activity,” using AI models that check each transaction in milliseconds.', source: 'Visa, 2025', href: 'https://corporate.visa.com/en/sites/visa-perspectives/security-trust/ai-and-trust-at-scale.html' },
        { sub: 'Your weather', finding: 'Google DeepMind’s GraphCast beat the leading traditional forecasting system on more than 90% of 1,380 test measures, and it produces a 10-day forecast in under a minute. The study was published in Science.', source: 'Google DeepMind, 2023', href: 'https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/' },
      ] },
      { title: 'Main point three: negatives', items: [
        { sub: 'Electricity in the U.S.', finding: 'A Department of Energy report by Lawrence Berkeley National Laboratory found data centers used about 4.4% of all U.S. electricity in 2023, and could use 6.7% to 12% by 2028.', source: 'U.S. Department of Energy, 2024', href: 'https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers' },
        { sub: 'Electricity worldwide', finding: 'The International Energy Agency projects that data center electricity use worldwide will roughly double by 2030, to about 945 terawatt-hours, with AI as the main driver.', source: 'International Energy Agency, 2025', href: 'https://www.iea.org/reports/energy-and-ai/executive-summary' },
        { sub: 'Water', finding: 'You already have Tom’s Guide on water in your Research Notes: one data center drew about 29 million gallons over 15 months before residents noticed their water pressure dropping.', source: 'Tom’s Guide, 2026', href: 'https://tomsguide.com/ai/i-kept-hearing-that-ai-data-centers-are-draining-towns-dry-so-i-looked-at-the-evidence' },
      ] },
    ],
    deliverables: [
      { text: 'Film your intro once with the triangle walk and upload it to your Drive folder.', due: 'Wed, Oct 21, 10:00 PM', href: DRIVE, link: 'Open your Drive folder' },
      { text: 'Send Coders for Community the Join C4C form on SMU360 and ask to sit in on a meeting.', due: 'Wed, Oct 21', href: 'https://smu360.smu.edu/student_community?a=1&club_id=35998', link: 'Open Coders for Community' },
      { text: 'Add the three sources you found today to your Research Notes tab in APA 7.', due: 'Wed, Oct 21', href: `${WORKSPACE}?tab=t.fwcv0shsln3t`, link: 'Open Research Notes' },
      { text: 'Fill out the body of your outline: numbered sub-points, a citation sentence for each, and a relevance link for all three main points. Use the research below.', due: 'Fri, Oct 23', href: `${WORKSPACE}?tab=t.vpywumt8vxmk`, link: 'Open Informative Speech' },
      { text: 'We finalize the outline together.', due: 'Mon, Oct 26' },
      { text: 'Deliver the full speech at the start of our session. Sit and read it.', due: 'Wed, Oct 28' },
    ],
  },
  {
    n: 3, date: 'Monday, October 12', title: 'Connection, open questions, and your topic',
    takeaways: [
      { idea: 'Connect, don’t fill space.', why: 'When the goal is filling time and not looking dumb, people settle for boring. When the goal is helping the other person understand, the effort goes into being clear.' },
      { idea: 'Ask an open-ended question.', why: 'A closed question ends in one word. An open-ended one asks the other person to explain or tell a story, and hands you something to respond to.' },
      { idea: 'Tell a short story about yourself.', why: 'When you reveal something about yourself, the other person feels more comfortable revealing something back. That is the law of reciprocity.' },
      { idea: 'One take, start to finish.', why: 'Knowing how to fumble through a mistake and keep going is one of the best tools a presenter has. You only build it by doing it.' },
      { idea: 'Pick a topic you want to nerd out on.', why: 'You will spend two months with it. Something you care about shows on camera.' },
    ],
    topics: [
      { title: 'Your new intro speech', points: [
        'Leaps and bounds above your first one. The organization and transitions were much smoother, and you knew where you were going.',
        'After a shaky start, your movements were intentional and you looked poised.',
        'You said “um” far less. The new word to cut is “really.”',
        { text: 'Never open with your name.', sub: [
          'Your name comes with speaker credibility, after the icebreaker and the relevance link.',
          'Open with a story instead, like the first layup you ever missed.',
          'In an introduction speech, give your credibility a little more room.',
        ] },
        { text: 'From now on, film every presentation in one take.', sub: [
          'A few practice takes first are fine. The one you send is one run, start to finish.',
        ] },
      ] },
      { title: 'Meeting new people', points: [
        'Your survey backs up what you told me: conversations with people you know are fine. New people are where it spikes.',
        'It is not that you don’t know what to say. Sometimes you struggle to connect.',
        { text: 'Open-ended questions', sub: [
          'Closed: “Do you like basketball?” One word, and the conversation stops.',
          'Open-ended: “What made you get into basketball?” Now there is something to follow up on.',
          'After “What’s your major?” ask what made them pick it.',
        ] },
        { text: 'Answer with a story, not a fact.', sub: [
          '“I’m thinking about comp sci” stops the conversation. A short story about measuring weather for restaurants last summer keeps it going.',
          'A double major is a conversation starter. Mention it.',
        ] },
      ] },
      { title: 'Emails and files', points: [
        { text: 'The five parts, with an example', sub: [
          'Greeting: “Hi Marc,”',
          'Rapport: “Thanks again for Monday’s session.”',
          'Context: what I need to know to help you.',
          'Clear deliverable: “Here is the link to my outline.”',
          'Sign-off: a closing line and your full name.',
        ] },
        'Send every file to Marc and he files it in your Drive folder. Texting videos is fine.',
        'Every assignment email from Marc links the doc you need.',
      ] },
      { title: 'Clubs', points: [
        'You plan to rush next semester, and that takes serious time, so keep the list short.',
        'Business classes will fill your schedule anyway. A tech club gives you skills your finance classmates won’t have.',
        { text: 'Three tech clubs at SMU', sub: [
          'AI Club: your pick to visit first.',
          'Computer Science Club: open to all majors, meets Wednesdays from 5 to 7.',
          'Coders for Community: builds tech for local nonprofits, which also counts as volunteer work.',
        ] },
        'Expect to be the least experienced person there. Go in as the humble student.',
      ] },
      { title: 'Your research topic', points: [
        'AI data centers: why they are growing, what good they do, and what they cost.',
        'The informative speech informs. It does not take a side.',
        { text: 'Your three main points', sub: [
          'The growth of AI',
          'The benefits of data centers, including what AI itself can do and how people use it',
          'The harms: water, space, and energy',
        ] },
        'Ideally it connects to your major, so look for ways data centers affect business and the corporate world.',
        'Use credible or peer-reviewed sources. Peer-reviewed research on AI is still thin, so a credible outlet works. Social media does not.',
      ] },
    ],
    professionalism: { score: 3, items: [
      ['Session email sent by 9:00 PM the night before', 0, 'No email yet. Tuesday night’s email fixes this.'],
      ['On time, in a quiet space, with earbuds in', 1, 'Joined from a laptop in a quiet room.'],
      ['Assignment submitted before the session', 1, 'Video and survey in on time.'],
      ['Brought at least one question', 1, 'Asked where files and videos go.'],
      ['Focused: notes open, no second screen', 0, 'Have a pen and paper out and take notes as we go.'],
    ] },
    deliverables: [
      { text: 'Research AI data centers: at least two credible or peer-reviewed sources for each of your three questions, six total. Every source free to read, no paywall, listed in full APA 7 format. Claude or ChatGPT can help with the research and the formatting.', due: 'Tue, Oct 13', href: `${WORKSPACE}?tab=t.fwcv0shsln3t`, link: 'Open Research Notes' },
      { text: 'Write a mock introduction as a speech, word for word, in the Mock introduction section of your Informative Speech tab. Type it yourself. Focus on the icebreaker and the relevance link.', due: 'Tue, Oct 13', href: `${WORKSPACE}?tab=t.vpywumt8vxmk`, link: 'Open Informative Speech' },
      { text: 'Email Marc in the five-part format when both are done.', due: 'Tue, Oct 13', href: 'https://odyssey-jotun.github.io/ocp-101/one-on-one/#emails', link: 'See the email format' },
      { text: 'Log in to SMU360, open the AI Club’s page, and join it. Find the next meeting’s day, time, and place, and bring them to Wednesday’s session. Then go to that meeting.', due: 'Wed, Oct 14', href: 'https://smu360.smu.edu/student_community?a=1&club_id=35464', link: 'Open the AI Club page' },
      { text: 'Film every presentation in one take, start to finish.', due: 'Ongoing' },
    ],
  },
  {
    n: 2, date: 'Wednesday, October 7', title: 'Your benchmark and macro structure',
    takeaways: [
      { idea: 'Macro structure lets you present on anything.', why: 'Introduction, main points, conclusion, with a complete transition at every handoff. Once you know the skeleton, any topic is a matter of filling it in, and your audience always knows where you are.' },
      { idea: 'Clarity over brilliance.', why: 'You cannot make people think you are smart. You can be clear, and clear speakers come across as smart. Trying to sound brilliant usually backfires.' },
      { idea: 'Disclosure builds connection.', why: 'When you share something about yourself, listeners feel they owe you something back. The one thing they can give while you speak is their attention.' },
      { idea: 'Move on purpose.', why: 'Nerves push your body to move, and that is where swaying comes from. Give the energy somewhere to go: keep your hands in motion with your points, and when you step, step for a reason.' },
      { idea: 'Take notes.', why: 'Writing down what someone says tells them it was worth hearing. That is how trust starts with a professor, and trust is what leads to a strong recommendation letter later.' },
    ],
    topics: [
      { title: 'Connection is a relationship', points: [
        'Presenting is nerve-wracking because you are building a relationship with every person in the room at once.',
        'The same things that build a friendship build connection with an audience. These are relationship practices, and they work outside a speech too.',
        { text: 'Disclosure: revealing something about yourself draws people in.', sub: [
          'Think of how someone tells you a secret: their voice drops and they lean in.',
          'The same moves work in front of a room.',
        ] },
        'Connection happens in email too. Claude can draft your emails, as long as you read every one before it goes out.',
      ] },
      { title: 'Your benchmark speech', points: [
        'What you said was solid: basketball, then finance and computer science at SMU, then a career that brings you back to Arkansas.',
        'Filler words were the least distracting part.',
        { text: 'Your hands were fine. Move them more, and on purpose.', sub: [
          'Nerves push the body to fight or run, which shows up as fidgeting.',
          'Gesture with a point when you make it, for example when you describe moving around for basketball.',
        ] },
        'Swaying was the one distracting habit. It usually shows up when you are not sure what comes next.',
        'Keep a note card with bullet points. Looking down at it shows you care about getting it right.',
        'Practice out loud, even once for 30 seconds. Any practice beats none.',
      ] },
      { title: 'Macro structure', points: [
        'The format for academic and corporate presentations, going back to Aristotle. Know it, and you can present on anything.',
        { text: 'Introduction', sub: [
          'Icebreaker: a short declarative sentence or a quote. Never open with your name and your topic. Yours: “I have been many places.”',
          'Listener relevance link: wrap the whole audience in with words like “many of us” or “all of us.” Yours: “We all enjoy traveling.”',
          'Speaker credibility: who you are and why you can speak on this. Yours: “I’m Max, a freshman at SMU.”',
          'Thesis statement: short and clear. “Today I will present about who I am.”',
          'Preview of main points: name each one in order.',
        ] },
        { text: 'Complete transition', sub: [
          'Say what you just covered and what comes next. It keeps a complicated topic easy to follow.',
        ] },
        { text: 'Main points, usually three. Each one has:', sub: [
          'Topic sentence: announce the point.',
          'Listener relevance link: one under every main point.',
          'Subpoints: 1.1, 1.2, 1.3, connected to each other, often in time order.',
          'Examples or evidence: a scene that shows the point, like sitting bored in your room before class.',
          'A complete transition into the next point.',
        ] },
        { text: 'Complete transition into the conclusion', sub: [] },
        { text: 'Conclusion', sub: [
          'Restate the thesis.',
          'Summarize the main points.',
          'Clincher: a last line that leaves them wanting more.',
          'Never add anything new.',
        ] },
      ] },
    ],
    professionalism: { score: 3, items: [
      ['Session email sent by 9:00 PM the night before', 1, 'Not required before the first session.'],
      ['On time, in a quiet space, with earbuds in', 0, 'Two minutes late. Joining from your car is fine; find a spot with better signal.'],
      ['Assignment submitted before the session', 1, 'Benchmark recorded and sent.'],
      ['Brought at least one question', 1, ''],
      ['Focused: notes open, no second screen', 0, 'Nothing to take notes with. Have a pen and paper at every session.'],
    ] },
    deliverables: [
      { text: 'Rewrite your get-to-know-you speech outline in macro structure, in the Intro Speech Outline tab of your workspace. Type it yourself, no AI this one time, and email Marc using the five-part email format when it is done.', due: 'Fri, Oct 9' },
      { text: 'Record the new version and text the video to Marc.', due: 'Mon, Oct 12, by 11:00 AM' },
      { text: 'Take the PRCA-24, click “Copy my results link,” and email that link to Marc.', due: 'Mon, Oct 12', href: 'https://odyssey-jotun.github.io/ocp-101/prca-24/', link: 'Take the survey' },
      { text: 'From now on, upload every video and file for this course to your Drive folder.', due: 'Ongoing', href: DRIVE, link: 'Open your Drive folder' },
    ],
  },
  {
    n: 1, date: 'Monday, October 5', title: 'What this course is for',
    takeaways: [
      { idea: 'A structure beats polish.', why: 'Polish and flair take years. A structure you know cold lets you build a clear presentation on anything, starting this semester.' },
      { idea: 'Nervous is normal.', why: 'Confident speakers are still nervous. The ones who feel nothing usually forget about their audience, and that is worse.' },
      { idea: 'Experience builds confidence.', why: 'A club with a team or a competition gives you real work to pull your weight on, and puts you next to older students who already have the internships you want.' },
      { idea: 'Have something to say.', why: 'When someone asks what you do, you want a topic you know a lot about and care about. That is what makes people feel they know you.' },
      { idea: 'Professors write your recommendation letters.', why: 'The weekly grades check is practice communicating with professors like a professional, so they stay in your corner.' },
    ],
    topics: [
      { title: 'Why presenting matters to you', points: [
        'Getting better means vocal skills and knowing the right things to say.',
        { text: 'Where it pays off', sub: [
          'Class presentations, like the two-minute one you gave that morning',
          'Interviews for the ALT program',
          'Internship interviews',
        ] },
      ] },
      { title: 'Three goals', points: [
        { text: 'Presenting', sub: [
          'Build the middle first: thesis, main points, an example for each, and transitions between them.',
          'Then put the buns on the sandwich: an introduction and a conclusion.',
          'The introduction has five parts: icebreaker, listener relevance link, speaker credibility, thesis statement, preview of main points.',
        ] },
        { text: 'Networking and interviewing', sub: [
          'Join clubs tied to your major, ideally with a team or a competition, like a startup pitch group.',
          'Interview practice means more once you have a real interview to prepare for.',
        ] },
        { text: 'A professional identity', sub: [
          'Research one topic tied to what you study, like fintech or data science.',
          'Turn it into a portfolio on LinkedIn: each main point a video, each subpoint a short.',
          'A recruiter who sees you talk about something you care about feels like they already know you.',
        ] },
      ] },
      { title: 'Three speeches', points: [
        { text: 'Get-to-know-you speech', sub: ['Low stakes. Marc just wants to hear how you talk.'] },
        { text: 'Informative speech', sub: ['Real research, cited out loud like a pro. Filmed, reviewed, and likely filmed again.'] },
        { text: 'Persuasive speech', sub: ['Research your audience, then try to move them to do something. It pulls together everything before it.'] },
        'After that, we work on bringing all of it into interviews.',
      ] },
      { title: 'How we work', points: [
        'Mondays and Wednesdays at noon, on the same Zoom link.',
        'Earbuds in, somewhere quiet. Your car counts.',
        'A weekly look at your grades.',
        'A phone tripod for recording your speeches.',
      ] },
    ],
    deliverables: [
      { text: 'Fill out the public speaking pre-assessment form. Be honest; you take it again at the end.', due: 'Wed, Oct 7', href: PRE_ASSESSMENT, link: 'Open the form' },
      { text: 'Order the phone tripod with a remote.', due: 'Wed, Oct 7' },
      { text: 'Record a two to three minute get-to-know-you speech.', due: 'Wed, Oct 7' },
      { text: 'Ask Claude which SMU clubs fit data science, business, and tech, with website links and contacts.', due: 'Wed, Oct 7' },
    ],
  },
];
