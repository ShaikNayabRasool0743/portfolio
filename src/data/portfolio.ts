export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  program?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  label: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  provider: string;
  description: string;
  link?: string;
}

export const portfolioData = {
  about: {
    heading: "About Me",
    subheading: "Engineering resilient software systems with modern architecture.",
    bio: [
      "I am a Computer Science graduate with a solid technical foundation in Python, SQL, software engineering design patterns, REST APIs, and analytical problem-solving.",
      "During my engineering internship at Meetmux, I contributed directly to the automated coding evaluation pipeline, architecting Python-based data pipelines and deploying models with FastAPI.",
      "I focus on engineering maintainable, high-performance software solutions—bridging backend service design with responsive, accessible front-end interfaces."
    ],
    quickFacts: {
      name: "Shaik Nayab Rasool",
      location: "Ongole, Andhra Pradesh",
      education: "B.Tech CSE",
      graduation: "2026",
      cgpa: "8.3/10",
      role: "Software Engineer"
    }
  },

  proofStrip: [
    { number: "01", label: "Software Internship", detail: "Meetmux (3 Months)" },
    { number: "02", label: "Python & Backend", detail: "FastAPI, Flask & SQL" },
    { number: "03", label: "Applied Intelligence", detail: "ML Pipelines & NLP" },
    { number: "04", label: "Full-Stack Web", detail: "ReactJS & Modern UI" },
  ],

  experience: [
    {
      id: "meetmux-aiml-intern",
      company: "Meetmux",
      role: "AIML Developer Intern",
      duration: "3 Months",
      program: "AICTE | Google Virtual AIML Internship",
      responsibilities: [
        "Worked on the PlaceMux Coding Evaluation module, contributing to automated code evaluation and analysis.",
        "Improved model development workflows by applying Python-based data handling pipelines, strengthening real-time problem-solving across machine learning processes.",
        "Developed and evaluated ML models on structured datasets, applying software design patterns to ensure clean, maintainable code.",
        "Contributed to the development and testing of the AI-powered coding evaluation pipeline using Python and FastAPI."
      ],
      technologies: ["Python", "FastAPI", "Machine Learning", "Code Evaluation", "Data Pipelines", "Design Patterns"]
    }
  ] as ExperienceItem[],

  skillCategories: [
    {
      category: "programming",
      label: "Programming Languages",
      skills: ["Python", "SQL", "JavaScript", "Java (basics)"]
    },
    {
      category: "backend",
      label: "Back-End & APIs",
      skills: ["FastAPI", "Flask", "REST APIs", "API Development"]
    },
    {
      category: "libraries",
      label: "ML & Data Libraries",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"]
    },
    {
      category: "frameworks",
      label: "AI Frameworks",
      skills: ["TensorFlow", "PyTorch"]
    },
    {
      category: "frontend",
      label: "Front-End",
      skills: ["ReactJS", "HTML5", "CSS3", "Responsive Web Design"]
    },
    {
      category: "tools",
      label: "Tools & Environments",
      skills: ["Git", "GitHub", "VS Code", "Antigravity", "codex"]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "QIS College of Engineering and Technology",
      duration: "2022 - 2026",
      grade: "CGPA: 8.3/10",
      location: "Ongole, Andhra Pradesh, India"
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Python Programming",
      provider: "Codetantra",
      description: "Completed a Python course through Codetantra, covering core concepts and hands-on coding practice with real-world problem-solving."
    },
    {
      title: "Web Development",
      provider: "Hunar Intern",
      description: "Certified in Frontend Development from Hunar Intern, with experience in creating responsive web interfaces using HTML, CSS to enhance design and user experience."
    }
  ] as CertificationItem[],

  languages: ["Telugu", "English", "Hindi"]
};
