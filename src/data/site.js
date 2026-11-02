export const NAV_LINKS = [
  { label: 'About', hash: 'about' },
  { label: 'Services', hash: 'services' },
  { label: 'Portfolio', hash: 'portfolio' },
  { label: 'Why Us', hash: 'why' },
  { label: 'Pricing', hash: 'pricing' },
  { label: 'FAQ', hash: 'faq' },
]

export const TYPED_WORDS = ['websites', 'web apps', 'mobile apps', 'brands', 'UI/UX designs']

export const STATS = [
  { value: 150, label: 'Projects delivered' },
  { value: 80, label: 'Happy clients' },
  { value: 8, label: 'Years of experience' },
]

export const TECH_MARQUEE = ['React', 'Next.js', 'Node.js', 'Flutter', 'React Native', 'Swift', 'Kotlin', 'Laravel', 'Python', 'AWS', 'Figma', 'MongoDB']

export const ABOUT_POINTS = [
  'Dedicated project manager & transparent communication',
  'Agile delivery with regular demos and updates',
  'Scalable, secure, SEO-friendly code',
  'Post-launch support and maintenance',
]

export const ABOUT_CARDS = [
  { title: 'Our Mission', text: 'Deliver technology that creates measurable business value.' },
  { title: 'Our Vision', text: 'Be the most trusted digital partner for ambitious brands.' },
  { title: 'Our Values', text: 'Honesty, quality, ownership and continuous learning.' },
  { title: 'Our Promise', text: 'On-time delivery, fair pricing, no hidden surprises.' },
]

export const SERVICES = [
  { icon: '🌐', title: 'Website Development', text: 'Fast, responsive business websites, e-commerce stores and CMS-driven sites.' },
  { icon: '💻', title: 'Web App Development', text: 'Custom dashboards, SaaS platforms, portals and admin systems built to scale.' },
  { icon: '📱', title: 'Mobile App Development', text: 'Native and cross-platform apps for Android and iOS with smooth UX.' },
  { icon: '🎨', title: 'UI/UX Design', text: 'Research-led wireframes, prototypes and polished interfaces users love.' },
  { icon: '📈', title: 'Digital Marketing', text: 'SEO, social media, Google & Meta ads and content to drive qualified leads.' },
  { icon: '🧠', title: 'AI & Custom Software', text: 'Automation, chatbots, ML features, APIs and integrations tailored to you.' },
  { icon: '🖌️', title: 'Branding & Graphics', text: 'Logos, brand identity, banners, social creatives and motion graphics.' },
  { icon: '🛡️', title: 'QA, Support & Maintenance', text: 'Testing, performance tuning, security updates and 24/7 support options.' },
]

export const WHY_US = [
  { icon: '⚡', title: 'Fast, Agile Delivery', text: 'Two-week sprints with working demos, so you see progress early and can adjust direction anytime.' },
  { icon: '🔒', title: 'Security First', text: 'Secure authentication, encrypted data, OWASP-aligned practices and regular dependency audits.' },
  { icon: '📐', title: 'Scalable Architecture', text: 'Cloud-ready, modular systems that handle ten users today and ten million tomorrow.' },
  { icon: '💬', title: 'Transparent Communication', text: 'Dedicated project manager, shared task board and weekly reports — no black boxes.' },
  { icon: '💰', title: 'Value-Driven Pricing', text: 'Clear milestones and fair quotes with no hidden charges. You pay for outcomes, not hours wasted.' },
  { icon: '🤝', title: 'Long-Term Partnership', text: 'Ongoing support, upgrades and growth marketing long after launch day.' },
]

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Websites' },
  { id: 'app', label: 'Mobile Apps' },
]

export const PORTFOLIO = [
  {
    category: 'web', type: 'shot', image: 'thedealsmart.jpg', name: 'The Deals Smart',
    kind: 'Website · E-commerce · UAE',
    desc: 'Online electronics store with categories, deals, bilingual (English/Arabic) support and WhatsApp chat.',
    tags: ['E-commerce', 'Arabic RTL', 'Cart & Checkout'],
    links: [{ label: 'Visit thedealsmart.ae', url: 'https://thedealsmart.ae' }],
  },
  {
    category: 'web', type: 'shot', image: 'rareearth.jpg', name: 'Rare Earth',
    kind: 'Website · Industrial · India',
    desc: 'Corporate website with product catalogue, e-catalogue and enquiry flow for a conveyor belt manufacturer.',
    tags: ['Corporate', 'Catalogue', 'Responsive'],
    links: [{ label: 'Visit rareearth.in', url: 'https://rareearth.in' }],
  },
  {
    category: 'web', type: 'shot', image: 'onlinebauji.jpg', name: 'Online Bauji',
    kind: 'Web Platform · EdTech · India',
    desc: 'Skill-based e-learning platform with course catalogue, search, login, cart and blog.',
    tags: ['E-learning', 'Courses', 'Payments'],
    links: [{ label: 'Visit onlinebauji.com', url: 'https://onlinebauji.com/' }],
  },
  {
    category: 'app', type: 'phone', image: 'mypotes1.jpg', name: 'MyPotes',
    kind: 'Mobile App · iOS · Productivity',
    desc: 'AI-based personal organizer to manage contacts, notes, reminders and memories in one place.',
    tags: ['iOS', 'AI', 'Notes & Reminders'],
    background: 'linear-gradient(135deg,#14b8a6,#0ea5e9)',
    links: [{ label: 'View on App Store', url: 'https://apps.apple.com/in/app/mypotes/id6753738767' }],
  },
  {
    category: 'app', type: 'phone', image: 'tg_shot1.jpg', name: 'Trading Gurukul',
    kind: 'Mobile App · Android · EdTech',
    desc: 'Learning app with courses, categories, blog and user accounts for trading and skill education.',
    tags: ['Android', 'React Native', 'Courses'],
    background: 'linear-gradient(135deg,#22c55e,#0f172a)',
    links: [{ label: 'View on Google Play', url: 'https://play.google.com/store/apps/details?id=com.anonymous.tradinggurukul' }],
  },
]

export const PROCESS = [
  { no: '01', title: 'Discover', text: 'We learn your goals, users and market, then define scope and timeline.' },
  { no: '02', title: 'Design', text: 'Wireframes and interactive prototypes you can review before coding.' },
  { no: '03', title: 'Develop', text: 'Agile sprints, regular demos and clean, tested code.' },
  { no: '04', title: 'Launch & Grow', text: 'Deployment, marketing support and ongoing improvements.' },
]

export const INDUSTRIES = ['🏦 Finance', '🛍️ Retail & E-commerce', '🏥 Healthcare', '🎓 Education', '🏠 Real Estate', '✈️ Travel', '🎬 Entertainment', '⚡ Energy', '📡 Telecom', '🏛️ Government']

export const PLANS = [
  { name: 'Starter', tagline: 'For small businesses & startups', cta: 'Get Estimate', ghost: true,
    features: ['5–8 page responsive website', 'Modern UI design', 'Basic SEO setup', 'Contact form & WhatsApp chat', '1 month free support'] },
  { name: 'Growth', tagline: 'For web apps, e-commerce & mobile', cta: 'Get Estimate', featured: true,
    features: ['Custom web or mobile app', 'UI/UX design & prototype', 'Admin panel & payments', 'API integrations', '3 months free support'] },
  { name: 'Dedicated Team', tagline: 'For long-term & enterprise needs', cta: 'Talk to Us', ghost: true,
    features: ['Developers, designers & QA', 'Monthly flexible contract', 'Project manager included', 'Marketing & growth support', 'SLA-backed maintenance'] },
]

export const FAQS = [
  { q: 'How long does a typical project take?', a: 'Business websites usually take 2–4 weeks; web and mobile apps take 2–4 months depending on scope. We share a clear timeline after discovery.' },
  { q: 'How much does it cost?', a: "Pricing depends on features and complexity. Send us your requirements and we'll provide a detailed, fixed or milestone-based quote." },
  { q: 'Do you provide support after launch?', a: 'Yes. We offer maintenance plans covering updates, bug fixes, security and performance monitoring.' },
  { q: 'Will I own the source code?', a: 'Absolutely. Once the project is paid for, all code and assets are yours.' },
  { q: 'Can you work with our existing product?', a: 'Yes — we can audit, redesign, extend or take over maintenance of existing websites and apps.' },
]

export const CONTACT = {
  email: 'admin@thvtechnologies.com',
  phone: '+91 70420 88606',
  phoneHref: 'tel:+917042088606',
  address: 'India',
  hours: 'Mon – Sat, 10:00 – 19:00',
  whatsapp: 'https://wa.me/917042088606',
}

export const SERVICE_OPTIONS = ['Website Development', 'Web App', 'Mobile App', 'UI/UX Design', 'Digital Marketing', 'Other']

export const LEGAL_LINKS = [
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/refund', label: 'Refund & Cancellation' },
  { to: '/cookies', label: 'Cookie Policy' },
  { to: '/disclaimer', label: 'Disclaimer' },
]
