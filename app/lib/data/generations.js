/**
 * Single source of truth for all generation data
 * Used for dynamic route generation and consistent metadata
 */

const CURRENT_YEAR = 2025

export const generations = [
  {
    slug: 'gen-alpha',
    displayName: 'Generation Alpha',
    yearRange: { start: 2013, end: 2025 },
    emoji: '🚀',
    color: 'bg-purple-500',
    colorHex: '#a855f7',
    bgGradient: 'from-purple-50 to-pink-50',
    shortDescription: 'Generation Alpha: birth years 2013-present, defining characteristics, technology habits, and what makes Gen Alpha the most digital generation yet.',
    longDescription: 'Generation Alpha includes anyone born from 2013 to approximately 2025. This makes Gen Alpha currently between 0 and 12 years old in 2025. Gen Alpha is the first generation born entirely in the 21st century and the first to grow up with AI, voice assistants, and tablets as normal parts of childhood from birth.',
    keyCharacteristics: [
      {
        title: 'Born with Technology',
        description: 'Gen Alpha never knew a world without touchscreens, voice commands, or streaming content. Many learned to swipe on tablets before they could walk. They interact with AI assistants like Alexa and Siri as naturally as talking to family members.',
      },
      {
        title: 'Shaped by the Pandemic',
        description: 'Many Gen Alpha children experienced remote schooling during COVID-19 at crucial developmental ages. They adapted to virtual classrooms, online socialization, and hybrid learning models.',
      },
      {
        title: 'Most Diverse Generation',
        description: 'Gen Alpha is the most racially and ethnically diverse generation in history. They are growing up in families that reflect a wide range of structures, cultures, and backgrounds.',
      },
      {
        title: 'AI Native Generation',
        description: 'While Gen Z grew up with social media and smartphones, Gen Alpha is growing up with artificial intelligence. They use AI for homework help, entertainment recommendations, and creative projects.',
      },
    ],
    workplaceHabits: [
      'Personalized learning: AI-powered adaptive learning platforms',
      'Gamified education: Learning through interactive games and apps',
      'Hybrid models: Comfortable switching between in-person and online learning',
      'Visual learning: YouTube tutorials and video content as primary learning tools',
      'Early coding: Many learn programming basics in elementary school',
    ],
    culturalMarkers: [
      'COVID-19 Pandemic: Shaped early childhood and education experiences',
      'Rise of AI: ChatGPT and AI tools becoming mainstream during their childhood',
      'Climate Awareness: Growing up with climate change as accepted reality',
      'Social Justice Movements: Witnessing activism and social change as normal',
      'Streaming Everything: Never knew traditional TV or scheduled programming',
      'Creator Economy: Seeing content creation as viable career path',
    ],
    faqs: [
      {
        question: 'Why is it called Gen Alpha?',
        answer: 'After Generation Z reached the end of the alphabet, demographers started over with the Greek alphabet. Alpha symbolizes a new beginning and a generation that will grow up in a fundamentally different world than previous generations.',
      },
      {
        question: 'What generation comes after Gen Alpha?',
        answer: 'The generation after Gen Alpha is expected to be called Generation Beta, continuing with the Greek alphabet. Gen Beta will likely begin around 2025 or 2026.',
      },
      {
        question: 'Is a child born in 2020 Gen Alpha?',
        answer: 'Yes, a child born in 2020 is Generation Alpha. Gen Alpha spans from 2013 to approximately 2025, making 2020-born children solidly within this generation.',
      },
      {
        question: 'How is Gen Alpha different from Gen Z?',
        answer: 'While Gen Z grew up with smartphones and social media, Gen Alpha is growing up with AI, voice assistants, and has never known life without touchscreens. Gen Alpha experienced remote learning during COVID-19 at formative ages, shaping their approach to education differently than Gen Z.',
      },
    ],
    relatedSlugs: ['gen-z'],
    relatedBlogPosts: ['what-is-gen-alpha', 'gen-alpha-parenting-guide'],
    keywords: 'gen alpha, generation alpha, gen alpha birth years, gen alpha characteristics, 2013-present, youngest generation',
  },
  {
    slug: 'gen-z',
    displayName: 'Generation Z (Gen Z)',
    yearRange: { start: 1997, end: 2012 },
    emoji: '📱',
    color: 'bg-blue-500',
    colorHex: '#3b82f6',
    bgGradient: 'from-blue-50 to-purple-50',
    shortDescription: 'Everything about Generation Z: birth years 1997-2012, defining characteristics, cultural traits, work habits, and what makes Gen Z unique. Complete guide.',
    longDescription: 'Generation Z includes anyone born between 1997 and 2012. This makes Gen Z currently between 13 and 28 years old in 2025. Gen Z is the first generation to grow up entirely with smartphones, social media, and instant internet access from childhood. They have never known a world without Google, YouTube, or mobile apps.',
    keyCharacteristics: [
      {
        title: 'Digital Natives',
        description: 'Unlike Millennials who adapted to technology, Gen Z was born into it. They learned to swipe before they could write, grew up with tablets as toys, and consider technology an extension of themselves rather than a tool.',
      },
      {
        title: 'Socially Conscious',
        description: 'Gen Z is known for their strong stance on social justice, climate change, LGBTQ+ rights, and racial equality. They expect brands and employers to take clear positions on social issues and will actively boycott companies that do not align with their values.',
      },
      {
        title: 'Entrepreneurial Spirit',
        description: 'Having witnessed Millennials struggle with student debt and economic uncertainty, Gen Z is highly entrepreneurial. They are more likely to have side hustles, create content online, or pursue freelance work.',
      },
      {
        title: 'Short Attention Spans, High Efficiency',
        description: 'Gen Z has an average attention span of 8 seconds compared to 12 for Millennials, but this is not necessarily negative. They have developed incredible ability to filter information quickly, multitask across platforms, and find answers fast.',
      },
    ],
    workplaceHabits: [
      'Purpose-driven work: Want to know their work matters',
      'Feedback and growth: Expect regular communication and development opportunities',
      'Flexibility: Remote work and flexible hours are priorities',
      'Company culture: Will leave toxic environments regardless of pay',
      'Work-life integration: Blur the lines between work and personal life but on their terms',
    ],
    culturalMarkers: [
      'COVID-19 Pandemic: Experienced crucial high school and college years remotely',
      'TikTok: The defining social platform of their generation',
      'Climate Activism: Greta Thunberg and youth-led environmental movements',
      'Streaming Everything: Never knew cable TV, grew up with Netflix, Spotify, YouTube',
      'Me Too Movement: Witnessed major cultural reckoning during formative years',
      'Political Polarization: Came of age during highly divided political climate',
      'Meme Culture: Communication heavily influenced by internet humor and viral trends',
    ],
    faqs: [
      {
        question: 'Is 2010 Gen Z?',
        answer: 'Yes, 2010 is Generation Z. Anyone born in 2010 is currently 15 years old and firmly within the Gen Z cohort that spans 1997-2012.',
      },
      {
        question: 'What comes after Gen Z?',
        answer: 'Generation Alpha comes after Gen Z. Gen Alpha includes anyone born from 2013 to the present.',
      },
      {
        question: 'Are Gen Z and Millennials the same?',
        answer: 'No, Gen Z and Millennials are different generations. Millennials were born 1981-1996, while Gen Z was born 1997-2012. The key difference is that Millennials remember life before widespread internet, Gen Z does not.',
      },
      {
        question: 'What is Gen Z known for?',
        answer: 'Gen Z is known for being digital natives, socially conscious, entrepreneurial, diverse, and advocating for mental health awareness and climate action. They are also known for short attention spans but high information processing ability.',
      },
    ],
    relatedSlugs: ['millennials', 'gen-alpha'],
    relatedBlogPosts: ['gen-z-vs-millennials', 'gen-z-workplace-guide'],
    keywords: 'gen z, generation z, gen z birth years, gen z characteristics, gen z traits, gen z age range, 1997-2012',
  },
  {
    slug: 'millennials',
    displayName: 'Millennials (Generation Y)',
    yearRange: { start: 1981, end: 1996 },
    emoji: '💻',
    color: 'bg-green-500',
    colorHex: '#22c55e',
    bgGradient: 'from-green-50 to-blue-50',
    shortDescription: 'Complete guide to Millennials (Generation Y): birth years 1981-1996, defining traits, workplace habits, cultural impact, and what makes Millennials unique.',
    longDescription: 'Millennials, also known as Generation Y, include anyone born between 1981 and 1996. This makes Millennials currently between 29 and 44 years old in 2025. Millennials came of age during the rise of the internet, witnessed 9/11 as young adults, and entered the workforce during or after the 2008 financial crisis.',
    keyCharacteristics: [
      {
        title: 'Digital Pioneers',
        description: 'Millennials are the bridge generation between analog and digital. They remember life before cell phones and social media but adapted quickly to new technology. They grew up with dial-up internet, instant messaging like AIM and MSN, and witnessed the birth of Facebook, YouTube, and smartphones.',
      },
      {
        title: 'Value Experiences Over Things',
        description: 'Millennials pioneered the shift from material possessions to experiences. They prioritize travel, dining out, concerts, and activities over buying homes or expensive items. This generation coined the term YOLO and popularized sharing experiences on social media.',
      },
      {
        title: 'Work-Life Balance Advocates',
        description: 'Unlike Baby Boomers who lived to work, Millennials work to live. They value flexible schedules, remote work options, and companies that respect personal time. This generation questions the traditional 9-5 model and expects their work to have purpose and meaning.',
      },
      {
        title: 'Socially Conscious Consumers',
        description: 'Millennials care about brand values, sustainability, and social responsibility. They research companies before buying, support small businesses, and prefer brands that align with their ethics.',
      },
    ],
    workplaceHabits: [
      'Purpose-driven work: Want to know their work matters',
      'Feedback and growth: Expect regular communication and development opportunities',
      'Flexibility: Remote work and flexible hours are priorities',
      'Company culture: Will leave toxic environments regardless of pay',
      'Work-life integration: Blur the lines between work and personal life but on their terms',
    ],
    culturalMarkers: [
      '9/11 Terrorist Attacks: Defining moment that shaped their worldview',
      '2008 Financial Crisis: Entered job market during recession, affected financial trajectory',
      'Rise of Social Media: Facebook, Instagram, Twitter became part of daily life',
      'iPhone Launch in 2007: Smartphones changed everything during their young adult years',
      'Student Debt Crisis: First generation to face massive education costs',
      'Obama Election: First generation to vote for social media-savvy president',
      'Sharing Economy: Uber, Airbnb, and gig work became mainstream',
    ],
    faqs: [
      {
        question: 'Are Millennials and Gen Y the same?',
        answer: 'Yes, Millennials and Generation Y are the same. Both terms refer to people born between 1981 and 1996.',
      },
      {
        question: 'What generation comes after Millennials?',
        answer: 'Generation Z comes after Millennials. Gen Z includes anyone born between 1997 and 2012.',
      },
      {
        question: 'If I was born in 1995, am I a Millennial?',
        answer: 'Yes, if you were born in 1995, you are a Millennial. You are on the younger end of the generation, close to the Gen Z cusp.',
      },
      {
        question: 'Why are they called Millennials?',
        answer: 'They are called Millennials because they came of age around the turn of the millennium in the year 2000. The oldest Millennials graduated high school in 1999, the youngest in 2014.',
      },
    ],
    relatedSlugs: ['gen-z', 'gen-x'],
    relatedBlogPosts: ['gen-z-vs-millennials', 'millennials-vs-gen-x'],
    keywords: 'millennials, generation y, millennial birth years, millennial characteristics, gen y, 1981-1996, millennial traits',
  },
  {
    slug: 'gen-x',
    displayName: 'Generation X',
    yearRange: { start: 1965, end: 1980 },
    emoji: '🎸',
    color: 'bg-yellow-500',
    colorHex: '#eab308',
    bgGradient: 'from-yellow-50 to-orange-50',
    shortDescription: 'Complete guide to Generation X: birth years 1965-1980, defining characteristics, cultural impact, and what makes Gen X the forgotten generation.',
    longDescription: 'Generation X includes anyone born between 1965 and 1980. This makes Gen X currently between 45 and 60 years old in 2025. Often called the forgotten generation or middle child between Baby Boomers and Millennials, Gen X quietly shaped modern culture while flying under the radar.',
    keyCharacteristics: [
      {
        title: 'The Latchkey Kids',
        description: 'Gen X earned the nickname latchkey kids because many came home to empty houses as both parents worked. They learned independence and self-reliance early. This generation is comfortable being alone, solving problems themselves, and does not need constant validation or supervision.',
      },
      {
        title: 'Adaptable and Resourceful',
        description: 'Gen X grew up with rotary phones and learned to code on Commodore 64 computers. They adapted to personal computers, email, mobile phones, and smartphones as adults. This makes them uniquely skilled at both analog and digital worlds.',
      },
      {
        title: 'Work-Life Balance Pioneers',
        description: 'Gen X watched their Boomer parents sacrifice everything for work and said no thanks. They prioritized family time and personal life more than previous generations. Gen X introduced the concept that work does not have to consume your identity.',
      },
      {
        title: 'Skeptical and Cynical',
        description: 'Gen X grew up during Watergate, economic recessions, rising divorce rates, and the AIDS crisis. This bred healthy skepticism toward authority, institutions, and corporate promises. They question everything, do not trust easily, and value authenticity over polish.',
      },
    ],
    workplaceHabits: [
      'Direct communicators: No corporate speak, just tell it like it is',
      'Results-focused: Care about output, not face time in the office',
      'Hands-off managers: Trust employees to do their jobs without micromanaging',
      'Pragmatic problem solvers: Focus on practical solutions over theory',
      'Bridge builders: Can translate between Boomer and Millennial or Gen Z perspectives',
    ],
    culturalMarkers: [
      'MTV: Music television defined their teen years',
      'Grunge and Alternative Rock: Nirvana and Pearl Jam rejected mainstream culture',
      'Fall of Berlin Wall: Witnessed end of Cold War',
      'AIDS Crisis: Came of age during devastating epidemic',
      'Personal Computers: First generation to use PCs in schools and homes',
      'Economic Uncertainty: Graduated into recessions, learned financial caution',
      'Rise of Hip Hop: Witnessed genre go mainstream',
      'Slacker Culture: Defined by Richard Linklater film, rejected yuppie ambition',
    ],
    faqs: [
      {
        question: 'What does the X in Gen X stand for?',
        answer: 'The X represents the unknown, undefined nature of the generation. Author Douglas Coupland popularized the term in his 1991 novel Generation X, describing a generation that rejected labels and definitions.',
      },
      {
        question: 'What generation comes after Gen X?',
        answer: 'Millennials or Generation Y come after Gen X. Millennials were born between 1981 and 1996.',
      },
      {
        question: 'If I was born in 1975, what generation am I?',
        answer: 'If you were born in 1975, you are Generation X, right in the middle of the generation.',
      },
      {
        question: 'Why is Gen X called the latchkey generation?',
        answer: 'Gen X is called the latchkey generation because many children wore house keys around their necks and came home to empty houses while both parents worked. This created an independent, self-reliant generation.',
      },
    ],
    relatedSlugs: ['millennials', 'baby-boomers'],
    relatedBlogPosts: ['millennials-vs-gen-x', 'gen-x-vs-baby-boomers'],
    keywords: 'gen x, generation x, gen x birth years, gen x characteristics, gen x traits, 1965-1980, latchkey generation',
  },
  {
    slug: 'baby-boomers',
    displayName: 'Baby Boomers',
    yearRange: { start: 1946, end: 1964 },
    emoji: '🌻',
    color: 'bg-orange-500',
    colorHex: '#f97316',
    bgGradient: 'from-orange-50 to-yellow-50',
    shortDescription: 'Complete guide to Baby Boomers: birth years 1946-1964, defining characteristics, cultural impact, work ethic, and what makes the Boomer generation unique.',
    longDescription: 'Baby Boomers include anyone born between 1946 and 1964. This makes Baby Boomers currently between 61 and 79 years old in 2025. The name comes from the dramatic increase in birth rates following World War II, when returning soldiers started families during a period of unprecedented economic prosperity.',
    keyCharacteristics: [
      {
        title: 'Strong Work Ethic',
        description: 'Baby Boomers are known for their dedication to work and belief in paying your dues. They value face time at the office, climbing the corporate ladder, and loyalty to employers. Many Boomers worked for the same company for decades, something unheard of in younger generations.',
      },
      {
        title: 'Optimistic and Idealistic',
        description: 'Growing up during post-war prosperity, Boomers developed an optimistic worldview. They believed they could change the world and drove major social movements in the 1960s and 70s including civil rights, feminism, and environmentalism.',
      },
      {
        title: 'Competitive and Success-Driven',
        description: 'As the largest generation in history, Boomers competed for everything: jobs, college spots, housing, and promotions. This created a highly competitive, achievement-oriented mindset. They measure success through career titles, home ownership, and material possessions.',
      },
      {
        title: 'Prefer Traditional Communication',
        description: 'Baby Boomers prefer phone calls and face-to-face meetings over texting or email. They value personal relationships built through direct interaction. While many have adapted to technology, they did not grow up with it and often prefer traditional methods of communication and doing business.',
      },
    ],
    workplaceHabits: [
      'Value loyalty: Expect employees to stay with companies long-term',
      'Hierarchical respect: Respect authority and chain of command',
      'Face time matters: Equate office presence with productivity',
      'Work-life integration: Often put career before personal life',
      'Delayed retirement: Many working past traditional retirement age',
    ],
    culturalMarkers: [
      'Vietnam War: Divisive conflict that defined their young adult years',
      'Civil Rights Movement: Witnessed and participated in major social change',
      'Woodstock and Counterculture: Music festivals and hippie movement',
      'Moon Landing 1969: Watched humanity land on the moon',
      'Assassination of JFK: Defining national tragedy',
      'Rise of Television: First generation to grow up with TV in most homes',
      'Economic Prosperity: Experienced strongest middle-class growth in US history',
      'Rock and Roll: Elvis, Beatles, Rolling Stones defined their soundtrack',
    ],
    faqs: [
      {
        question: 'Why are they called Baby Boomers?',
        answer: 'They are called Baby Boomers because of the dramatic boom or spike in birth rates after World War II. Returning soldiers started families, leading to 76 million births in the United States between 1946 and 1964.',
      },
      {
        question: 'What generation comes after Baby Boomers?',
        answer: 'Generation X comes after Baby Boomers. Gen X includes anyone born between 1965 and 1980.',
      },
      {
        question: 'If I was born in 1960, am I a Baby Boomer?',
        answer: 'Yes, if you were born in 1960, you are a Baby Boomer, toward the latter part of the generation sometimes called Generation Jones.',
      },
      {
        question: 'What is the OK Boomer meme about?',
        answer: 'OK Boomer became a viral phrase used by younger generations to dismiss or mock outdated attitudes attributed to Baby Boomers. It reflects generational tensions around technology, climate change, economics, and social values.',
      },
    ],
    relatedSlugs: ['gen-x', 'silent-generation'],
    relatedBlogPosts: ['gen-x-vs-baby-boomers', 'baby-boomer-retirement'],
    keywords: 'baby boomers, boomer generation, boomer birth years, boomer characteristics, 1946-1964, baby boomer traits',
  },
  {
    slug: 'silent-generation',
    displayName: 'Silent Generation',
    yearRange: { start: 1928, end: 1945 },
    emoji: '📻',
    color: 'bg-gray-500',
    colorHex: '#6b7280',
    bgGradient: 'from-gray-50 to-blue-50',
    shortDescription: 'Complete guide to the Silent Generation: birth years 1928-1945, defining characteristics, historical impact, and what shaped the Greatest Generation.',
    longDescription: 'The Silent Generation includes anyone born between 1928 and 1945. This makes the Silent Generation currently between 80 and 97 years old in 2025. They are called silent because they were raised to respect authority, work hard without complaint, and avoid making waves. This generation grew up during the Great Depression and World War II, shaping their values of sacrifice, duty, and perseverance.',
    keyCharacteristics: [
      {
        title: 'Hardworking and Resilient',
        description: 'Having grown up during the Great Depression, the Silent Generation learned the value of hard work and frugality early. Many experienced genuine poverty and rationing during World War II. This taught them to waste nothing, save everything, and work tirelessly to provide security for their families.',
      },
      {
        title: 'Respect for Authority',
        description: 'The Silent Generation was raised to respect elders, follow rules, and trust institutions. They value hierarchy, proper etiquette, and doing things by the book. This generation rarely questioned authority figures like teachers, doctors, or government officials.',
      },
      {
        title: 'Financially Conservative',
        description: 'Having witnessed economic collapse during the Depression, the Silent Generation is extremely financially cautious. They save aggressively, avoid unnecessary risks, and prefer tangible assets like homes and savings accounts.',
      },
      {
        title: 'Traditional Values',
        description: 'The Silent Generation holds traditional views on family, work, and society. They believe in clear gender roles, formal manners, and community standards. Marriage was expected and typically lifelong.',
      },
    ],
    workplaceHabits: [
      'Company loyalty for life, respect hierarchy',
      'Value job security over high salaries',
      'Worked for one employer their entire career',
      'Earned gold watches at retirement',
      'Stayed loyal to companies that provided stable employment',
    ],
    culturalMarkers: [
      'Great Depression: Childhood marked by economic hardship and scarcity',
      'World War II: Teen years during global conflict, rationing, and sacrifice',
      'Post-war prosperity: Built careers during strongest economic growth period',
      'Korean War: Many served or had family members serve',
      'Rise of suburbs: Moved to new suburban developments in 1950s-60s',
      'Golden age of radio: Primary entertainment before television',
      'Birth of rock and roll: Witnessed Elvis and cultural shift as adults',
    ],
    faqs: [
      {
        question: 'Is the Silent Generation the same as the Greatest Generation?',
        answer: 'No, they are different. The Greatest Generation fought in World War II and were born roughly 1901-1927. The Silent Generation came after, born 1928-1945, and were too young to fight in WWII but served in the Korean War.',
      },
      {
        question: 'What generation comes after the Silent Generation?',
        answer: 'Baby Boomers come after the Silent Generation. Boomers were born between 1946 and 1964.',
      },
      {
        question: 'If I was born in 1940, what generation am I?',
        answer: 'If you were born in 1940, you are part of the Silent Generation, right in the middle of the cohort.',
      },
      {
        question: 'Why is the Silent Generation so frugal?',
        answer: 'The Silent Generation grew up during the Great Depression when many families struggled to afford basic necessities. This childhood experience of scarcity created lifelong habits of saving, avoiding waste, and preparing for hard times.',
      },
    ],
    relatedSlugs: ['baby-boomers'],
    relatedBlogPosts: ['silent-generation-explained'],
    keywords: 'silent generation, silent generation birth years, silent generation characteristics, 1928-1945, greatest generation',
  },
]

// Helper functions
export function getGenerationBySlug(slug) {
  return generations.find((gen) => gen.slug === slug)
}

export function getAllGenerationSlugs() {
  return generations.map((gen) => gen.slug)
}

export function getAgeRange(gen) {
  const currentYear = CURRENT_YEAR
  const startAge = currentYear - gen.yearRange.end
  const endAge = currentYear - gen.yearRange.start
  return { start: startAge, end: endAge }
}

export function getYearRangeDisplay(gen) {
  return `${gen.yearRange.start} - ${gen.yearRange.end === CURRENT_YEAR ? 'Present' : gen.yearRange.end}`
}
