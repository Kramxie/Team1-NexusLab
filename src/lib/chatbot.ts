// Nexxus Lab Company Knowledge Base
// The chatbot will answer questions based on this information

export const companyInfo = {
  name: "Nexxus Lab",
  tagline: "Leave the tech to us.",
  description: "We are a team of developers and advisors from the Philippines, dedicated to building innovative tech solutions that make a difference.",
  
  location: {
    address: "Salcedo St., Legaspi Village, Makati City 1299, Philippines",
    country: "Philippines",
    city: "Makati City",
  },
  
  contact: {
    phone: "+63 927-143-0884",
    email: "team@nexxuslab.com",
    website: "https://nexxuslab.com",
  },
  
  services: [
    {
      name: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      name: "AI Integration",
      description: "Integrate artificial intelligence and machine learning into your business processes.",
    },
    {
      name: "Process Automation",
      description: "Automate repetitive tasks and streamline your workflows to save time and reduce errors.",
    },
    {
      name: "UI/UX Design",
      description: "User-centered design that creates intuitive and beautiful digital experiences.",
    },
    {
      name: "Tech Consulting",
      description: "Strategic technology advice to help your business grow and stay competitive.",
    },
  ],
  
  team: [
    {
      name: "Chris Bautista",
      role: "Founder & Chief Executive Officer",
      description: "Visionary leader driving Nexxus Lab's mission to deliver innovative tech solutions.",
    },
    {
      name: "Loreleen Mae Sablot",
      role: "Co-Founder & Senior Software Engineer",
      description: "Technical mastermind behind Nexxus Lab's software solutions.",
    },
  ],
  
  process: [
    "Discovery & Planning - We understand your goals, audience, and requirements.",
    "Design & Prototyping - We create wireframes and visual designs for your approval.",
    "Development & Testing - We build and rigorously test your solution.",
    "Launch & Support - We deploy your project and provide ongoing support.",
  ],
  
  whyChooseUs: [
    "Based in the Philippines with competitive rates",
    "Experienced team of developers and designers",
    "End-to-end solutions from design to deployment",
    "Focus on quality and customer satisfaction",
    "Ongoing support and maintenance",
  ],
  
  faq: [
    {
      question: "How much does a project cost?",
      answer: "Project costs vary depending on scope and complexity. Contact us for a free consultation and quote tailored to your needs.",
    },
    {
      question: "How long does a project take?",
      answer: "Timeline depends on the project scope. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer maintenance and support?",
      answer: "Yes! We offer ongoing maintenance and support packages to keep your applications running smoothly after launch.",
    },
    {
      question: "What technologies do you use?",
      answer: "We specialize in modern technologies including React, Next.js, Node.js, Python, and various AI/ML frameworks. We choose the best tools for each project's specific needs.",
    },
  ],
};

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

// Function to generate bot response based on user input
export function generateBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();
  
  // Greetings
  if (message.match(/^(hi|hello|hey|good morning|good afternoon|good evening|kumusta|musta)/i)) {
    return `Hello! 👋 Welcome to Nexxus Lab! I'm Nexxusbot, here to help you learn about our company and services. What would you like to know?`;
  }
  
  // Thanks
  if (message.match(/(thank|thanks|salamat|tnx|ty)/i)) {
    return `You're welcome! 😊 Is there anything else you'd like to know about Nexxus Lab?`;
  }
  
  // Goodbye
  if (message.match(/^(bye|goodbye|see you|paalam)/i)) {
    return `Goodbye! 👋 Thank you for chatting with us. Feel free to come back anytime or contact us at ${companyInfo.contact.email}!`;
  }
  
  // Who made/created this website
  if (message.match(/(sino.*gumawa|who.*made|who.*created|who.*built|who.*develop|gumawa.*website|created.*website|built.*website|sino.*gawa)/i)) {
    return `🛠️ **This website was created by Nexxus Lab!**\n\nSpecifically, our team led by:\n• **Chris Bautista** - Founder & CEO\n• **Loreleen Mae Sablot** - Co-Founder & Senior Software Engineer\n• Plus our talented **Internship Team** (DLSUD Interns)\n\nWe built this using Next.js, React, and modern web technologies. Want us to build something for you? Contact us at ${companyInfo.contact.email}! 🚀`;
  }
  
  // Who are you / What's your name (for the bot)
  if (message.match(/(sino ka|who are you|what.*your name|ano.*name mo|ano.*pangalan)/i)) {
    return `🤖 I'm **Nexxusbot**, the AI assistant for Nexxus Lab!\n\nI'm here to answer your questions about our company, services, team, and how we can help your business. I only know about Nexxus Lab - that's my specialty! 😊\n\nWhat would you like to know?`;
  }
  
  // Direct questions about the company name
  if (message.match(/(ano.*company|what.*company.*name|ano.*pangalan.*company|name.*company)/i)) {
    return `🏢 Our company is **Nexxus Lab**!\n\n"${companyInfo.tagline}"\n\nWe're a Philippine-based tech company specializing in software development, AI solutions, and digital transformation. 🇵🇭`;
  }
  
  // Owner / Founded by
  if (message.match(/(owner|may-ari|nagmamay-ari|founded by|sino.*may-ari|who.*own)/i)) {
    return `👔 **Nexxus Lab Ownership**\n\n• **Chris Bautista** - Founder & Chief Executive Officer\n• **Loreleen Mae Sablot** - Co-Founder & Senior Software Engineer\n\nThey founded Nexxus Lab with a mission to deliver innovative tech solutions to businesses in the Philippines and beyond!`;
  }
  
  // Services
  if (message.match(/(service|offer|provide|do you do|what do you|ano ginagawa|serbisyo|ano.*services)/i)) {
    const serviceList = companyInfo.services.map(s => `• **${s.name}** - ${s.description.slice(0, 50)}...`).join("\n");
    return `🛠️ **Our Services**\n\n${serviceList}\n\nWhich service interests you? I can tell you more!`;
  }
  
  // Web Development
  if (message.match(/(web|website|webapp|web app|site)/i) && !message.match(/(sino.*gumawa|who.*made|who.*created)/i)) {
    return `🌐 **Web Development**\n\nWe build custom websites and web applications using modern technologies like React, Next.js, and Node.js.\n\n**What we offer:**\n• Landing pages & corporate websites\n• E-commerce platforms\n• Web applications\n• Content management systems\n\nWant to discuss your web project? Contact us at ${companyInfo.contact.email}`;
  }
  
  // Mobile Development
  if (message.match(/(mobile|app|android|ios|iphone)/i)) {
    return `📱 **Mobile App Development**\n\nWe create native and cross-platform mobile apps for iOS and Android. From concept to deployment on app stores, we handle the entire process.\n\nHave a mobile app idea? Let's talk! Email us at ${companyInfo.contact.email}`;
  }
  
  // AI
  if (message.match(/(ai|artificial intelligence|machine learning|ml|automation|automate)/i)) {
    return `🤖 **AI & Automation**\n\nWe help businesses integrate AI and automate processes to:\n• Save time on repetitive tasks\n• Improve decision making with data\n• Enhance customer experiences\n• Streamline workflows\n\nInterested in AI solutions? Contact us at ${companyInfo.contact.email}`;
  }
  
  // Design / UI/UX
  if (message.match(/(design|ui|ux|user interface|user experience)/i)) {
    return `🎨 **UI/UX Design**\n\nWe create user-centered designs that are both beautiful and functional. Our design process includes:\n• User research\n• Wireframing\n• Visual design\n• Prototyping\n• Usability testing\n\nNeed a stunning design? Reach out at ${companyInfo.contact.email}`;
  }
  
  // Contact
  if (message.match(/(contact|reach|email|phone|number|call|message|how to contact|paano kayo macontact)/i)) {
    return `📞 **Contact Us**\n\n📍 ${companyInfo.location.address}\n📱 ${companyInfo.contact.phone}\n✉️ ${companyInfo.contact.email}\n\nWe'd love to hear from you! Feel free to reach out anytime.`;
  }
  
  // Location
  if (message.match(/(where|location|address|office|based|saan|lugar|nasaan)/i)) {
    return `📍 **Our Location**\n\nWe're based in **${companyInfo.location.address}**.\n\nWhile we're located in the Philippines, we work with clients worldwide! 🌏`;
  }
  
  // Price / Cost
  if (message.match(/(price|cost|how much|rate|budget|magkano|presyo|bayad)/i)) {
    return `💰 **Pricing**\n\nProject costs vary depending on scope and complexity. We offer competitive rates and flexible payment options.\n\nFor a **free consultation** and custom quote:\n📧 ${companyInfo.contact.email}\n📱 ${companyInfo.contact.phone}\n\nWe'll be happy to discuss your budget!`;
  }
  
  // Timeline / Duration
  if (message.match(/(how long|timeline|duration|time|when|gaano katagal)/i)) {
    return `⏱️ **Project Timeline**\n\nTimelines depend on the project scope:\n• Simple websites: 2-4 weeks\n• Complex web apps: 1-3 months\n• Mobile apps: 2-6 months\n\nWe'll provide a detailed timeline during our free consultation. Contact us at ${companyInfo.contact.email}`;
  }
  
  // Team
  if (message.match(/(team|founder|ceo|developer|staff|employees|sino.*team|members)/i)) {
    return `👥 **Our Team**\n\n**Leadership:**\n• **Chris Bautista** - Founder & CEO\n• **Loreleen Mae Sablot** - Co-Founder & Senior Software Engineer\n\n**Internship Team:**\nTalented interns from De La Salle University - Dasmariñas (DLSUD) who contribute to our innovative projects!\n\nLearn more on our Team page.`;
  }
  
  // Process / How it works
  if (message.match(/(process|how.*work|steps|procedure|paano|workflow)/i)) {
    return `🔄 **Our Process**\n\n${companyInfo.process.map((p, i) => `${i + 1}. ${p}`).join("\n")}\n\nWant to start a project? Contact us at ${companyInfo.contact.email}`;
  }
  
  // Portfolio / Projects
  if (message.match(/(portfolio|project|work|sample|example|client|gawa|nagawa|projects)/i)) {
    return `🎯 **Our Portfolio**\n\nWe've worked on various projects including:\n• TAP Staffing Solutions\n• Top 100 AI\n• Scale UI\n• MyChapters\n• AI DefendBot\n• Man Cave Supplies PH\n• Fundraising for Jedd\n• And many more!\n\nCheck out our Portfolio section on the homepage!`;
  }
  
  // Why choose / Benefits
  if (message.match(/(why|choose|benefit|advantage|bakit)/i)) {
    return `✨ **Why Choose Nexxus Lab?**\n\n${companyInfo.whyChooseUs.map(w => `• ${w}`).join("\n")}\n\nReady to work with us? Contact us at ${companyInfo.contact.email}`;
  }
  
  // About company
  if (message.match(/(about|who are you|tell me about|company|nexxus|sino kayo|tungkol)/i)) {
    return `🏢 **About Nexxus Lab**\n\n"${companyInfo.tagline}"\n\n${companyInfo.description}\n\nWe're based in Makati City, Philippines 🇵🇭 and we work with clients worldwide to build innovative digital solutions.\n\nWant to know more? Ask about our services, team, or process!`;
  }
  
  // Book / Schedule / Meeting
  if (message.match(/(book|schedule|meeting|consultation|appointment|consult)/i)) {
    return `📅 **Book a Consultation**\n\nWe offer **FREE consultations** to discuss your project needs!\n\n📱 Call us: ${companyInfo.contact.phone}\n✉️ Email us: ${companyInfo.contact.email}\n\nOr visit our Contact page to send us a message. We typically respond within 24 hours!`;
  }
  
  // Support / Maintenance
  if (message.match(/(support|maintenance|help|after|ongoing)/i)) {
    return `🛠️ **Support & Maintenance**\n\nYes! We offer ongoing support and maintenance packages to:\n• Keep your applications secure and updated\n• Fix any bugs or issues\n• Add new features as needed\n• Provide technical assistance\n\nContact us at ${companyInfo.contact.email} to learn about our support plans.`;
  }
  
  // Technology / Stack
  if (message.match(/(technology|tech|stack|framework|language|programming)/i)) {
    return `💻 **Technologies We Use**\n\n• **Frontend:** React, Next.js, TypeScript, Tailwind CSS\n• **Backend:** Node.js, Python, PHP\n• **Mobile:** React Native, Flutter\n• **Database:** PostgreSQL, MongoDB, MySQL\n• **AI/ML:** OpenAI, TensorFlow, Python\n• **Cloud:** AWS, Vercel, DigitalOcean\n\nWe choose the best tools for each project's needs!`;
  }
  
  // Inappropriate / Off-topic filter
  if (message.match(/(sex|porn|nude|drugs|kill|murder|hack|illegal|violence|gambling|casino)/i)) {
    return `⚠️ I'm sorry, but I can only answer questions about **Nexxus Lab** and our services.\n\nI can help you with:\n• Our services & pricing\n• Contact information\n• Our team & process\n• Portfolio & projects\n\nWhat would you like to know about Nexxus Lab?`;
  }
  
  // Random questions not about the company
  if (message.match(/(weather|news|joke|sing|play|game|movie|food|recipe|politics|president)/i)) {
    return `😅 That's a bit outside my expertise! I'm **Nexxusbot**, and I only know about **Nexxus Lab**.\n\nI can help you with:\n• Our services (web, mobile, AI, design)\n• Pricing and timelines\n• Our team and process\n• Contact information\n• How to book a consultation\n\nWhat would you like to know about us?`;
  }
  
  // Default response
  return `🤔 I'm not sure I understand that question.\n\nI'm **Nexxusbot**, and I can only answer questions about **Nexxus Lab**. Try asking about:\n\n• Our **services** (web, mobile, AI, design)\n• **Pricing** and timelines\n• Our **team** and who made this website\n• **Contact** information\n• How to **book a consultation**\n• Our **portfolio** and projects\n\nWhat would you like to know?`;
}
