import { PortfolioItem } from "./types"

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Next.js Boilerplate",
    itemCategory: "Development",
    description:
      "This is some kinda boilerplate you can start from instead of creating a template every single time you want to start a Next js application",
    technologies: ["Next.js", "Shadcn", "Zod"],
    features: ["No need to go from scratch", "Production-ready"],
    category: "SAAS",
    url: "https://youtube.com",
    featured: true,
    timeTook: "3 days",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 2,
    title: "E-commerce Store",
    itemCategory: "Development",
    description:
      "Full-featured e-commerce platform with product catalog, shopping cart, and payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Product management",
      "User authentication",
      "Order tracking",
      "Admin dashboard",
    ],
    category: "Ecommerce",
    url: "https://example-store.com",
    featured: true,
    timeTook: "6 weeks",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 3,
    title: "Wedding Photography Portfolio",
    itemCategory: "Photography",
    description:
      "Beautiful wedding photography collection capturing special moments from various ceremonies",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    ],
    category: "Photoshoot",
    featured: true,
    timeTook: "2 weeks",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 4,
    title: "Brand Identity for Tech Startup",
    itemCategory: "Design",
    description:
      "Complete brand identity system including logo, color palette, typography, and brand guidelines for a innovative tech startup",
    brandOverview:
      "A innovative AI-powered startup focused on revolutionizing customer service through chatbots",
    brandGoals: [
      "Create modern, trustworthy brand identity",
      "Establish brand recognition in tech industry",
      "Create versatile brand system for various applications",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    category: "Branding",
    featured: true,
    timeTook: "3 weeks",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 5,
    title: "Product Commercial VFX",
    itemCategory: "Vfx",
    description:
      "Visual effects for a product commercial showcasing a new smartphone with magical particle effects and transitions",
    overview:
      "Created stunning VFX for a smartphone commercial, including product transformations, particle simulations, and seamless transitions between scenes",
    result:
      "The commercial received over 2M views on YouTube and increased product pre-orders by 35%",
    category: "Motion Effects",
    featured: true,
    timeTook: "4 weeks",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 6,
    title: "Social Media Marketing Campaign",
    itemCategory: "Marketing",
    description:
      "Comprehensive social media marketing campaign for a fashion brand targeting Gen Z audience across multiple platforms",
    platforms: ["Instagram", "TikTok", "Facebook", "Twitter"],
    results: [
      "Increased engagement by 150%",
      "Gained 50K new followers",
      "Boosted online sales by 40%",
      "Achieved 2M+ total impressions",
    ],
    featured: true,
    timeTook: "8 weeks",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 7,
    title: "Fitness Tracking Mobile App",
    itemCategory: "Development",
    description:
      "Cross-platform mobile application for tracking fitness activities, nutrition, and workout progress with social features",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    features: [
      "Activity tracking",
      "Meal planning",
      "Workout videos",
      "Social sharing",
      "Progress analytics",
    ],
    category: "SAAS",
    url: "https://fitnessapp.example.com",
    featured: true,
    timeTook: "10 weeks",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 8,
    title: "Portrait Photography Series",
    itemCategory: "Photography",
    description:
      "Professional portrait photography series capturing individuals in various lighting conditions and settings",
    gallery: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    ],
    category: "Photoshoot",
    featured: true,
    timeTook: "3 weeks",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 9,
    title: "Corporate Website Redesign",
    itemCategory: "Design",
    description:
      "Complete redesign of a corporate website focusing on modern aesthetics, improved user experience, and mobile responsiveness",
    brandOverview:
      "Established financial services company seeking to modernize their online presence",
    brandGoals: [
      "Improve user engagement and time on site",
      "Enhance mobile responsiveness",
      "Modernize visual design while maintaining brand integrity",
    ],
    technologies: ["Figma", "Webflow", "HTML5", "CSS3", "JavaScript"],
    category: "UI/UX Design",
    featured: true,
    timeTook: "5 weeks",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
  {
    id: 10,
    title: "Nature Documentary Video Editing",
    itemCategory: "Vfx",
    description:
      "Professional video editing for a nature documentary featuring wildlife footage from various national parks",
    overview:
      "Edited raw footage into a compelling narrative, including color grading, sound design, and motion graphics",
    result:
      "Documentary selected for screening at 3 international film festivals",
    category: "Video Edits",
    featured: true,
    timeTook: "6 weeks",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
  },
]
