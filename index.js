const questions = [
  {
    id: "Q1",
    question:
      "“Speech is power: speech is to persuade, to convert, to compel” — this quote belongs to:",
    options: [
      "Abraham Lincoln",
      "Ralph Waldo Emerson",
      "Winston Churchill",
      "Aristotle",
    ],
    answer: "Ralph Waldo Emerson",
  },
  {
    id: "Q2",
    question:
      "Aristotle was a famous scholar and author of Rhetoric. He belonged to:",
    options: ["Rome", "Egypt", "Greece", "America"],
    answer: "Greece",
  },
  {
    id: "Q3",
    question: "Public Speaking is:",
    options: [
      "A rare skill used only in formal settings",
      "An activity limited to politicians and leaders",
      "Not an everyday routine for most people",
      "A part of everyday personal and professional life",
    ],
    answer: "A part of everyday personal and professional life",
  },
  {
    id: "Q4",
    question: "Lack of clarity in chosen words is called:",
    options: ["Ambiguity", "Articulation", "Euphemism", "Verbosity"],
    answer: "Ambiguity",
  },
  {
    id: "Q5",
    question: "Deliberative Rhetoric is mainly used to:",
    options: [
      "Judge actions of the past",
      "Praise or blame a person",
      "Discuss and decide future actions",
      "Analyse literary texts",
    ],
    answer: "Discuss and decide future actions",
  },
  {
    id: "Q6",
    question: "Fear of ______ is an interpersonal barrier.",
    options: ["motivation", "criticism", "decision", "deliberation"],
    answer: "criticism",
  },
  {
    id: "Q7",
    question:
      "According to ____________ Dictionary, Public Speaking is “the act or process of making speeches in public” or “the art of effective oral communication with the audience”.",
    options: ["Merriam Webster", "Oxford", "Cambridge", "Blacwell"],
    answer: "Merriam Webster",
  },
  {
    id: "Q8",
    question: "“As I Walked Out One Evening” is a poem by __________.",
    options: ["John Donne", "Staurt Mill", "Wilfred Owen", "W.H. Auden"],
    answer: "W.H. Auden",
  },
  {
    id: "Q9",
    question: "Hearing is a ________ process.",
    options: ["psychological", "physiological", "emotional", "factual"],
    answer: "physiological",
  },
  {
    id: "Q10",
    question: "Ethics is commonly interchanged with ________.",
    options: ["seniority", "obesity", "rhetoric", "morality"],
    answer: "morality",
  },
  {
    id: "Q11",
    question:
      "Which of the following is NOT listed as a factor to analyse about an audience?",
    options: [
      "Size of the audience",
      "Demographics (age, sex, background)",
      "Audience members' favorite foods",
      "Setting and seating arrangement",
    ],
    answer: "Audience members' favorite foods",
  },
  {
    id: "Q12",
    question:
      "The __________audiences are those that seeks entertainment and connection through communication.",
    options: ["Emotive", "Directive", "Reflective", "Supportive"],
    answer: "Emotive",
  },
  {
    id: "Q13",
    question:
      'The closing advice "Know yourself and know your audience" implies:',
    options: [
      "Only focus on audience preferences and ignore your strengths",
      "Self-awareness combined with audience knowledge leads to more effective communication",
      "If you know yourself, audience analysis is unnecessary",
      "Always prioritize entertainers over informative content",
    ],
    answer:
      "Self-awareness combined with audience knowledge leads to more effective communication",
  },
  {
    id: "Q14",
    question: "Monroe’s motivated sequence, begins with _________ step.",
    options: [
      "Call to action",
      "Grab the attention",
      "Provide visual solutions",
      "Define the conclusion",
    ],
    answer: "Grab the attention",
  },
  {
    id: "Q15",
    question:
      "The __________ as a technological tool allows newsreaders to appear spontaneous while actually being aided.",
    options: [
      "Presentation timer",
      "Teleprompter",
      "Interactive whiteboard",
      "Podcast platform",
    ],
    answer: "Teleprompter",
  },
  {
    id: "Q16",
    question: "Relevance theory was first proposed by H. P. Grice.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q17",
    question:
      "According to Sperber and Wilson’s Relevance Theory, communication is successful when a speaker minimizes the audience's __________.",
    options: [
      "Cognitive effect",
      "Feedback loop",
      "Processing effort",
      "Vocal variety",
    ],
    answer: "Processing effort",
  },
  {
    id: "Q18",
    question:
      "Eloquence is a perennially valued skill that can help individuals survive crises and gain social recognition.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q19",
    question:
      "Public speaking cannot contribute to professional advancement or leadership opportunities",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q20",
    question:
      'In public speaking, the "Chronological Pattern" organizes the subtopics and main points based on physical space, geographical direction, or physical layout from left to right.',
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q21",
    question:
      "The fear of speaking before an audience is commonly known as ___________ .",
    options: ["glossophobia", "agoraphobia"],
    answer: "glossophobia",
  },
  {
    id: "Q22",
    question:
      "According to Vygotsky, ____________ plays a significant role in shaping human understanding of reality.",
    options: ["language", "genetics"],
    answer: "language",
  },
  {
    id: "Q23",
    question:
      "Goleman’s Emotional Competence Framework broadly includes personal and _______________ competencies.",
    options: ["psychological", "social"],
    answer: "social",
  },
  {
    id: "Q24",
    question:
      "Cultures that rely heavily on implicit messages and non-verbal cues are called _____________ cultures.",
    options: ["high-context", "low-context"],
    answer: "high-context",
  },
  {
    id: "Q25",
    question:
      "The hormone associated with the body’s stress response during speech anxiety is _____________ .",
    options: ["epinephrine", "adrenaline"],
    answer: "adrenaline",
  },
  {
    id: "Q26",
    question: "Which of the following is NOT a component of anxiety?",
    options: [
      "Cognitive component",
      "Somatic component",
      "Behavioural component",
      "Linguistic component",
    ],
    answer: "Linguistic component",
  },
  {
    id: "Q27",
    question:
      "Deardorff's model of intercultural competence consists of how many elements?",
    options: ["Three", "Four", "Five", "Six"],
    answer: "Five",
  },
  {
    id: "Q28",
    question:
      "According to Mulac and Sherman, which of the following is among the elements of speech fright?",
    options: ["Dysfluency", "Adaptation", "Persuasion", "Observation"],
    answer: "Dysfluency",
  },
  {
    id: "Q29",
    question:
      "Intercultural communication, according to Martin and Nakayama, is best described as:",
    options: [
      "A one-way transfer of information",
      "An interactive experience between different cultures",
      "A method for cultural standardization",
      "A process of eliminating cultural differences",
    ],
    answer: "An interactive experience between different cultures",
  },
  {
    id: "Q30",
    question:
      "Which of the following theorists is associated with the concept of Cultural Intelligence?",
    options: [
      "Lev Vygotsky",
      "Geert Hofstede",
      "Christopher Earley and Soon Ang",
      "Daniel Goleman",
    ],
    answer: "Christopher Earley and Soon Ang",
  },
  {
    id: "Q31",
    question: "________ is the currency of persuasion.",
    options: ["Agitation", "Affection", "Attention", "Falsification"],
    answer: "Attention",
  },
  {
    id: "Q32",
    question: "________ is a way to grab attention and refresh the audience.",
    options: ["Divulsion", "Digression", "Disgrace", "Diabolical"],
    answer: "Digression",
  },
  {
    id: "Q33",
    question: "_____ have always been a site of persuasion.",
    options: ["Stages", "Solitude", "Annoyance", "Aggression"],
    answer: "Stages",
  },
  {
    id: "Q34",
    question:
      "________ criticism is a component of classroom teaching-learning process.",
    options: ["Healthy", "Harsh", "Heroic", "Hermeneutic"],
    answer: "Healthy",
  },
  {
    id: "Q35",
    question: "John Dewey was an _______ educator and philosopher.",
    options: ["Austrian", "Belgian", "British", "American"],
    answer: "American",
  },
  {
    id: "Q36",
    question: "Digression is employed by the speaker for ________.",
    options: [
      "surprise effect",
      "nuisance",
      "continuous repetition",
      "jargon usage",
    ],
    answer: "surprise effect",
  },
  {
    id: "Q37",
    question:
      "Which among the following options is not a type of dramatic speech?",
    options: ["Soliloquy", "Aside", "Silence", "Monologue"],
    answer: "Silence",
  },
  {
    id: "Q38",
    question: "Dramatic Monologue has been used by:",
    options: [
      "Toru Dutt",
      "Lord Byron",
      "William Shakespeare",
      "Robert Browning",
    ],
    answer: "Robert Browning",
  },
  {
    id: "Q39",
    question:
      "The basic principle of the classroom comprises ______ and democracy.",
    options: ["equity", "equality", "quality", "quantity"],
    answer: "equality",
  },
  {
    id: "Q40",
    question: "Teaching has to be ________.",
    options: [
      "provocational",
      "unidirectional",
      "authorotative",
      "participatory",
    ],
    answer: "participatory",
  },
  {
    id: "Q41",
    question:
      "Expressiveness, clarity, interaction, inclusiveness, and empathy are described as fundamental characteristics of effective lecturing.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q42",
    question:
      "Violating someone's space (territory) can most likely trigger __________",
    options: [
      "Increased comprehension",
      "Flight or fight response",
      "Anxiety",
      "Anger",
    ],
    answer: "Flight or fight response",
  },
  {
    id: "Q43",
    question: "The term Kinesics was first introduced in the year __________.",
    options: ["1956", "1952", "1953", "1950"],
    answer: "1952",
  },
  {
    id: "Q44",
    question:
      "Dr. Desmond Morris describes the __________ gesture as an unconscious sign that a speaker might be lying or hiding something.",
    options: [
      "hand-to-face or mouth-guard",
      "leg scratching",
      "sweating",
      "eye-twitching",
    ],
    answer: "hand-to-face or mouth-guard",
  },
  {
    id: "Q45",
    question: "The lecturer cites Sachs to claim that touch is:",
    options: [
      "A modern addition to communication",
      "The foundation for communication with the world",
      "Less important than sight and hearing",
      "Only relevant in intimate relationships",
    ],
    answer: "The foundation for communication with the world",
  },
  {
    id: "Q46",
    question:
      "What term does Wright introduce to describe regimentation of people by time-keeping, and what warning does the lecturer give about it?",
    options: [
      "Chronotopia — that it leads to creative freedom",
      "Chronarchy — that humans should use time, not be ruled by it",
      "Chronometer — that clocks are unreliable",
      "Chronology — that history dictates punctuality",
    ],
    answer: "Chronarchy — that humans should use time, not be ruled by it",
  },
  {
    id: "Q47",
    question:
      "What distance range did the lecture give for the intimate zone (approximate)?",
    options: [
      "12 to 25 feet",
      "4 to 12 feet",
      "1.5 to 0.45 meters (approx.)",
      "6 to 18 inches",
    ],
    answer: "1.5 to 0.45 meters (approx.)",
  },
  {
    id: "Q48",
    question:
      "Freud is quoted as arguing that a person can keep all secrets through control of body language.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q49",
    question:
      "Edward T. Hall coined the term proxemics and discussed it in his book The Hidden Dimension.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q50",
    question:
      "Which of the following is NOT one of the classifications of time discussed in the lecture?",
    options: [
      "Social time",
      "Psychological time",
      "Technological time",
      "Biological time",
    ],
    answer: "Technological time",
  },
  {
    id: "Q51",
    question:
      "Deductive reasoning proceeds from a general principle to a specific conclusion.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q52",
    question:
      "Meta-communication refers exclusively to communication about language used in literary texts.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q53",
    question:
      "Hoarseness occurs due to the passage of excess air through the vocal cords during articulation.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q54",
    question: "Pitch is determined by the frequency of vocal cord vibrations.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q55",
    question:
      "The International Phonetic Alphabet (IPA) is primarily used for grammatical analysis.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q56",
    question:
      "Which of the following is a type of conversation identified by Adler?",
    options: ["Political", "Practical", "Persuasive", "Narrative"],
    answer: "Practical",
  },
  {
    id: "Q57",
    question: "The study of graphemes and writing systems is known as:",
    options: ["Graphology", "Graphonomics", "Graphemics", "Phonemics"],
    answer: "Graphemics",
  },
  {
    id: "Q58",
    question: "The negotiation outcome termed as BATNA refers to:",
    options: [
      "Basic Agreement Through Negotiated Action",
      "Best Alternative to a Negotiated Agreement",
      "Balanced Approach Towards Negotiated Arrangements",
      "Bilateral Agreement Through National Arbitration",
    ],
    answer: "Best Alternative to a Negotiated Agreement",
  },
  {
    id: "Q59",
    question:
      "Who is the author of the book Pragmatics of Human Communication?",
    options: [
      "George Yule",
      "Gregory Bateson",
      "Noam Chomsky",
      "Paul Watzlawick",
    ],
    answer: "Paul Watzlawick",
  },
  {
    id: "Q60",
    question:
      "In English intonation, which pair of tones is commonly observed?",
    options: [
      "Linear and Circular",
      "High and Low",
      "Rising and Falling",
      "Open and Closed",
    ],
    answer: "Rising and Falling",
  },
  {
    id: "Q61",
    question: "Elocution is derived from the Latin word",
    options: ["electra", "elocutio", "election", "escalation"],
    answer: "elocutio",
  },
  {
    id: "Q62",
    question: "The correct pronunciation of words is called",
    options: ["Orthoepy", "Orcoepy", "Onacology", "Osmalogy"],
    answer: "Orthoepy",
  },
  {
    id: "Q63",
    question:
      "According to Lukas, the three general criteria for judging speech are accuracy, _______ and audience’s interest.",
    options: ["correspondence", "control", "chaos", "clarity"],
    answer: "clarity",
  },
  {
    id: "Q64",
    question: "Debate is a ______ communication.",
    options: ["unilateral", "bilateral", "unidirectional", "multidirectional"],
    answer: "bilateral",
  },
  {
    id: "Q65",
    question:
      "A positive tone while remembering the deceased is appreciated in _______ speeches.",
    options: ["chaotic", "fanatic", "commemorative", "superlative"],
    answer: "commemorative",
  },
  {
    id: "Q66",
    question: "Prefixes are generally accented.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q67",
    question: "Falling tone signals the completion of a statement.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q68",
    question: "Group discussion is a competitive platform.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q69",
    question:
      "Compound Rising is used to convey a warning (antithesis to interrogation).",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q70",
    question:
      "Manner is the native unquarried rock, whereas matter is the tool to transform it into ‘a sculptured palace’.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q71",
    question:
      "Rod A. Martin’s four styles of humour mentioned are affiliative, self-enhancing, aggressive, and self-defeating.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q72",
    question:
      "The primary purpose of an exit interview is to gather candid feedback from a departing employee to identify organisational flaws and improve company culture.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q73",
    question:
      "Pre-interview research is highlighted as an absolute necessity to construct relevant, contextual answers and demonstrate genuine interest.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q74",
    question:
      "The main goal of an unstructured interview is to scare the candidate and make them feel defensive.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q75",
    question:
      "Group interviews usually look out for the __________ of the candidate.",
    options: [
      "leadership skills",
      "communication skills",
      "presentation skills",
      "dressing skills",
    ],
    answer: "leadership skills",
  },
  {
    id: "Q76",
    question:
      "The laddering framework is theoretically rooted in psychologist Kevin Olson’s __________ Chain Theory.",
    options: ["End-to-end", "Means-end", "Top-to-bottom", "right-to-left"],
    answer: "Means-end",
  },
  {
    id: "Q77",
    question:
      'The "Row Boat Technique" is a structural strategy candidates use to maintain balance, rhythm, and __________ when responding to a panel.',
    options: ["Control", "Contract", "Expand", "Relax"],
    answer: "Control",
  },
  {
    id: "Q78",
    question:
      'The lecturer warns of a hazard when companies use a "one size fit" approach in structured interviews. What is that hazard?',
    options: [
      "It becomes too costly",
      "It may be redundant or may not work in certain situations",
      "It increases interviewer bias",
      "It prevents follow-up questions",
    ],
    answer: "It may be redundant or may not work in certain situations",
  },
  {
    id: "Q79",
    question:
      "The STAR method recommended for situational or behavioral interviews stands for:",
    options: [
      "Situation, Task, Action, Result",
      "Strategy, Tactics, Analysis, Review",
      "Statement, Testimony, Argument, Response",
      "Survey, Test, Assess, Report",
    ],
    answer: "Situation, Task, Action, Result",
  },
  {
    id: "Q80",
    question:
      "Which nonverbal behaviors does the speaker explicitly recommend maintaining during an interview?",
    options: [
      "Frequent fidgeting and changing positions",
      "Avoiding eye contact to appear humble",
      "Careful dress, confident bearing, handshake when appropriate, and steady eye contact",
      "Using many fillers like \"uh\" and \"um\" to sound natural",
    ],
    answer:
      "Careful dress, confident bearing, handshake when appropriate, and steady eye contact",
  },
  {
    id: "Q81",
    question:
      "The official written record of the proceedings and decisions of a meeting is known as the ____________ of the meeting.",
    options: ["minutes", "agenda"],
    answer: "minutes",
  },
  {
    id: "Q82",
    question:
      "The leadership style characterized by extensive delegation of authority is known as ____________ leadership.",
    options: ["transactional", "laissez-faire"],
    answer: "laissez-faire",
  },
  {
    id: "Q83",
    question:
      "Questions that seek personal opinions, experiences, and subjective responses are called ____________ questions.",
    options: ["open-ended", "closed-ended"],
    answer: "open-ended",
  },
  {
    id: "Q84",
    question:
      "The Situational Leadership Theory was developed by Paul Hersey and ____________.",
    options: ["Ken Blanchard", "Marcus Kotter"],
    answer: "Ken Blanchard",
  },
  {
    id: "Q85",
    question:
      "A conference organized to resolve disputes and end hostilities between nations is called a ____________ conference.",
    options: ["settlement", "peace"],
    answer: "peace",
  },
  {
    id: "Q86",
    question:
      "Which of the following is most closely associated with Impression Management in communicative interactions?",
    options: [
      "Self-promotion and positive relationship building",
      "Technical skill assessment only",
      "Avoidance of self-description",
      "Limiting communication with the interviewer",
    ],
    answer: "Self-promotion and positive relationship building",
  },
  {
    id: "Q87",
    question:
      "Which of the following documents is prepared before a meeting takes place?",
    options: ["Minutes", "Anticipation", "Agenda", "Memorandum"],
    answer: "Agenda",
  },
  {
    id: "Q88",
    question:
      "Which of the following is most closely associated with Transactional Leadership style?",
    options: [
      "Shared vision",
      "Rewards and punishments",
      "Delegation without supervision",
      "Participative decision-making",
    ],
    answer: "Rewards and punishments",
  },
  {
    id: "Q89",
    question: "Virtual conferences are considered advantageous because they:",
    options: [
      "Eliminate the need for technology",
      "Overcome geographical barriers",
      "Guarantee audience participation",
      "Remove communication challenges",
    ],
    answer: "Overcome geographical barriers",
  },
  {
    id: "Q90",
    question:
      "Which of the following is an essential characteristic of an unconference?",
    options: [
      "Strict adherence to a formal structure",
      "Heavy dependence on written proceedings",
      "Flexible and less formal organization",
      "Judicial decision-making authority",
    ],
    answer: "Flexible and less formal organization",
  },
  {
    id: "Q91",
    question: "A leader is a forceful and ______ personality.",
    options: ["dynamic", "dubious", "timid", "tiresome"],
    answer: "dynamic",
  },
  {
    id: "Q92",
    question: "Audio-visual aids are also known as ______ material.",
    options: ["passive", "instructional", "institutional", "suggestive"],
    answer: "instructional",
  },
  {
    id: "Q93",
    question:
      "Who among the following is not an author of The Essentials of Leadership in Government?",
    options: [
      "Darryl Plecas",
      "Colette Squires",
      "Len Garis",
      "Lincoln Myers",
    ],
    answer: "Lincoln Myers",
  },
  {
    id: "Q94",
    question: "Which among these is not a basic type of listening:",
    options: [
      "Active listening",
      "Inactive listening",
      "Divisive listening",
      "Selective listening",
    ],
    answer: "Divisive listening",
  },
  {
    id: "Q95",
    question: "Which quality of voice is understood as the pectoral:",
    options: [
      "Low-pitched and slow",
      "Round and full",
      "The natural human voice",
      "Explosive resonance in the throat",
    ],
    answer: "Low-pitched and slow",
  },
  {
    id: "Q96",
    question:
      "Innovative is one of the behavioural attributes of the BASICS model.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q97",
    question:
      "According to Simon Ortis, “The only person who likes change is a baby with a wet diaper”.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q98",
    question:
      "Blackboard is an example of an audio aid in public speaking.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q99",
    question:
      "Arbitrary is a word or phrase that connects the ideas of a speech and indicates the relationship between them.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q100",
    question:
      "Audience awareness is an essential component of pre-presentation preparation.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q101",
    question:
      "The six C's of language discussed are clarity, colour, concreteness, correctness, conciseness, and cultural sensitivity.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q102",
    question:
      "Jargon, euphemism, and Newspeak are elements that help bring clarity to public speaking.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q103",
    question:
      "Christopher Turk’s seven levers of persuasion are offered as tools to help speakers overcome anxiety and win over critics.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q104",
    question:
      "Critical thinking and creative thinking are identical and interchangeable.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q105",
    question:
      "George Yule, in his book The Study of Language, discusses the significance of linguistic context, also termed in speech.",
    options: ["Co-text", "Syntax"],
    answer: "Co-text",
  },
  {
    id: "Q106",
    question:
      "Deictic Expressions refer to those bits of language which can be understood or interpreted only when the listener knows the of the speaker.",
    options: [
      "immediate context; especially the physical context",
      "presupposition",
    ],
    answer: "immediate context; especially the physical context",
  },
  {
    id: "Q107",
    question:
      "The chief objective of a workshop is to add to the expertise of every participant by _________.",
    options: [
      "practical work and training for new products, policies, or ideas",
      "by providing formal academic certification without practical activities",
    ],
    answer:
      "practical work and training for new products, policies, or ideas",
  },
  {
    id: "Q108",
    question:
      "According to McCrae and Costa’s Five-Factor model’s the personality trait of _________ is most highly correlated with creative thinking.",
    options: ["Agreeableness", "Openness to experience"],
    answer: "Openness to experience",
  },
  {
    id: "Q109",
    question: "Who propounded the linguistic relativity hypothesis?",
    options: [
      "Aristotle and Descartes",
      "Sapir and Benjamin Lee Whorf",
      "Roman Jacobson and S.I. Hayakawa",
      "Michael Osborne and Roy Peter Clark",
    ],
    answer: "Sapir and Benjamin Lee Whorf",
  },
  {
    id: "Q110",
    question:
      "According to the lecture, which two components must creative thinking satisfy for ideas to be valuable?",
    options: [
      "Originality and popularity",
      "Originality and functionality",
      "Functionality and simplicity",
      "Simplicity and popularity",
    ],
    answer: "Originality and functionality",
  },
  {
    id: "Q111",
    question:
      "In a group interview, displaying individuality over team spirit is ideal when describing how colleagues perceive you.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q112",
    question:
      "Advertising on social media should adhere to censorship procedures to maintain decorum in online interactions.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q113",
    question:
      "The primary purpose of time stamping on social media is to identify the user who created the post.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q114",
    question:
      "When discussing weaknesses in an interview, the candidate should present them as significant flaws.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: "Q115",
    question:
      "Privacy concerns in online communication arise due to the potential exposure of personal information on social media.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    id: "Q116",
    question:
      "Which of the following best describes the role of the ‘digital divide’ in modern communication?",
    options: [
      "It separates online and offline advertisements.",
      "It refers to the gap created by unequal access to technology and the Internet.",
      "It defines the boundary between social media and news media.",
      "It describes the time difference between posting and receiving content online.",
    ],
    answer:
      "It refers to the gap created by unequal access to technology and the Internet.",
  },
  {
    id: "Q117",
    question:
      "Among the five determining factors of the digital divide, which of the following is NOT one of them?",
    options: [
      "Availability",
      "Affordability",
      "Appearance",
      "Acceptability",
    ],
    answer: "Appearance",
  },
  {
    id: "Q118",
    question:
      "In the STAR technique for situational interview responses, what does the letter ‘S’ stand for?",
    options: ["Summary", "Situation", "Strength", "Skill"],
    answer: "Situation",
  },
  {
    id: "Q119",
    question:
      "Which interview format involves one interviewee being assessed by multiple interviewers simultaneously?",
    options: [
      "Group Interview",
      "Telephonic Interview",
      "Panel Interview",
      "Sectional Interview",
    ],
    answer: "Panel Interview",
  },
  {
    id: "Q120",
    question:
      "Which famous speech was delivered by Swami Vivekananda in 1893 at the World’s Parliament of Religions, introducing Hinduism, Vedanta, and Yoga to the Western world?",
    options: [
      "The Gettysburg Address",
      "The Tilbury Speech",
      "“I Have a Dream” Speech",
      "The Chicago Address",
    ],
    answer: "The Chicago Address",
  },
];

export default questions;











