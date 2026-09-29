export interface SiteConfig {
  fullName: string;
  initials: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  statusText: string;
  resumeUrl: string;
  siteUrl: string;
  github: string;
  linkedin: string;
  showEmail: boolean;
  showPhone: boolean;
}

export const siteConfig: SiteConfig = {
  fullName: "Shaik Nayab Rasool",
  initials: "SNR",
  role: "AI/ML Developer & Python Developer",
  
  // Real contact details
  email: "rasoolnayabshaik0743@gmail.com",
  phone: "+91 9390313862",
  showEmail: true,
  showPhone: false, // Phone kept hidden from public web scrapers by default

  location: "Ongole, Andhra Pradesh, India",
  statusText: "Available for AI/ML & Software Engineering Roles",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  siteUrl: "https://shaiknayabrasool0743.github.io/portfolio",

  // Verified Social Links from Resume PDF
  github: "https://github.com/ShaikNayabRasool0743",
  linkedin: "https://www.linkedin.com/in/shaik-nayab-rasool-006563322/",
};
