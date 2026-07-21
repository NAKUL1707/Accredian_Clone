import {
  Lightbulb,
  Bot,
  Users,
  BarChart3,
  Settings2,
  Globe2,
  Landmark,
  MonitorPlay,
  Puzzle,
  GraduationCap,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

export const stats = [
  { number: "10K+", label: "Professionals Trained For Exceptional Career Success" },
  { number: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
  { number: "5K+", label: "Active Learners Engaged In Dynamic Courses" },
];

export const partners = [
  "Reliance",
  "HCL",
  "IBM",
  "CRIF",
  "ADP",
  "Bayer",
];
export const edgeSteps = [
  { title: "Tailored Solutions", desc: "Programs customized to your organization's goals and challenges.", position: "top" },
  { title: "Expert Guidance", desc: "Learn from industry leaders with real-world success.", position: "bottom" },
  { title: "Innovative Framework", desc: "Proprietary methods for impactful, application-driven results.", position: "top" },
  { title: "Advanced Technology", desc: "State-of-the-art LMS for seamless learning experiences.", position: "bottom" },
  { title: "Diverse Offerings", desc: "Courses across industries, skill levels, and emerging fields.", position: "top" },
  { title: "Proven Impact", desc: "Trusted by leading organizations for measurable ROI.", position: "bottom" },
  { title: "Flexible Delivery", desc: "Online and offline options tailored to your needs.", position: "top" },
];

export const domains = [
  { title: "Product & Innovation Hub", icon: <Lightbulb className="w-8 h-8" /> },
  { title: "Gen-AI Mastery", icon: <Bot className="w-8 h-8" /> },
  { title: "Leadership Elevation", icon: <Users className="w-8 h-8" /> },
  { title: "Tech & Data Insights", icon: <BarChart3 className="w-8 h-8" /> },
  { title: "Operations Excellence", icon: <Settings2 className="w-8 h-8" /> },
  { title: "Digital Enterprise", icon: <Globe2 className="w-8 h-8" /> },
  { title: "Fintech Innovation Lab", icon: <Landmark className="w-8 h-8" /> },
];
export const courses = [
  { title: "Program Specific", desc: "Certificate, Executive, Post Graduate Certificate", image: "/images/business_photo.avif" },
  { title: "Industry Specific", desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing", image: "/images/software_photo.webp" },
  { title: "Topic Specific", desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud", image: "/images/vr_photo.webp" },
  { title: "Level Specific", desc: "Senior Leadership, Mid-Career Professionals, Freshers", image: "/images/three_photo.webp" },
];
export const audiences = [
  { title: "Tech Professionals", desc: "Enhance expertise, embrace tech, drive innovation.", icon: <MonitorPlay className="w-7 h-7" /> },
  { title: "Non-Tech Professionals", desc: "Adapt digitally, collaborate in tech environments.", icon: <Puzzle className="w-7 h-7" /> },
  { title: "Emerging Professionals", desc: "Develop powerful skills for rapid career growth.", icon: <GraduationCap className="w-7 h-7" /> },
  { title: "Senior Professionals", desc: "Strengthen leadership, enhance strategic decisions.", icon: <BriefcaseBusiness className="w-7 h-7" /> },
];
export const catSteps = [
  { title: "Concept", desc: "Foundational knowledge for deep subject understanding." },
  { title: "Application", desc: "Practical implementation through real-world scenarios." },
  { title: "Tools", desc: "Resources and techniques for effective skill mastery." },
];
export const deliverySteps = [
  { number: 1, title: "Skill Gap Analysis", desc: "Assess team skill gaps and developmental needs." },
  { number: 2, title: "Customized Training Plan", desc: "Create a tailored roadmap addressing organizational goals." },
  { number: 3, title: "Flexible Program Delivery", desc: "Deliver adaptable programs aligned with industry and organizational needs." },
];
export const faqCategories = ["About the Course", "About the Delivery", "Miscellaneous"];

export const faqs = [
  {
    category: "About the Course",
    question: "What types of corporate training programs does Accredian offer?",
    answer: "Accredian offers a range of enterprise training programs including leadership development, technical upskilling, and domain-specific certifications tailored to organizational needs.",
  },
  {
    category: "About the Course",
    question: "What domain specializations are available?",
    answer: "Domains include Product & Innovation, Gen-AI, Leadership, Data & Analytics, Operations, Digital Enterprise, and Fintech.",
  },
];
export const testimonials = [
  {
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    partner: "ADP",
  },
  {
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high quality service every step of the way.",
    partner: "Bayer",
  },
];