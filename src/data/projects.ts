export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  approach: string;
  technologies: string[];
  categories: ("All" | "Python" | "Machine Learning" | "Data" | "Web Development")[];
  features: string[];
  keyFunctionality: string[];
  whatILearned: string;
  githubUrl?: string;
  liveUrl?: string;
  workflowType: "dashboard" | "nlp-pipeline" | "url-shortener";
}

export const projectsData: Project[] = [
  {
    id: "sales-data-analysis",
    slug: "sales-data-analysis",
    number: "01",
    title: "Sales Data Analysis Dashboard",
    shortDescription: "Cleaned and analyzed sales datasets using Python, Excel, and SQL. Developed interactive Power BI dashboards to identify sales trends, KPIs, and generate accurate business insights.",
    overview: "This project focuses on the end-to-end data lifecycle—from ingestion, cleaning, and SQL-based aggregation to interactive executive visualization in Power BI. It transforms raw transactional sales data into decision-ready business intelligence.",
    problem: "Raw commercial transactional data is often fragmented, contains missing entries, and lacks clear trend visibility needed for timely managerial decision-making.",
    approach: "Utilized Python (Pandas) and Excel for thorough data cleansing and normalization. Executed structured SQL queries to aggregate sales performance indicators, and built an interactive Power BI dashboard featuring dynamic KPI cards and temporal trend analysis.",
    technologies: ["Python", "Excel", "SQL", "Power BI", "Data Analysis"],
    categories: ["All", "Python", "Data"],
    features: [
      "Rigorous dataset cleaning and handling of missing values with Python",
      "Structured SQL data transformations for performance metric aggregation",
      "Interactive multi-dimensional Power BI visualizations",
      "Real-time identification of sales trends and core business KPIs",
      "Structured reporting for actionable business insights"
    ],
    keyFunctionality: [
      "Data Cleaning & Imputation Pipeline",
      "SQL KPI Aggregation & Trend Queries",
      "Interactive Dashboard Filtering & Slice Controls",
      "Executive Revenue & Performance Breakdown"
    ],
    whatILearned: "Deepened practical capabilities in relational data structuring, SQL metric aggregation, and translating raw data into visually intuitive executive dashboards.",
    // Configurable links (Left blank if not deployed publicly; button hidden automatically)
    githubUrl: "",
    liveUrl: "",
    workflowType: "dashboard"
  },
  {
    id: "fake-news-detection",
    slug: "fake-news-detection",
    number: "02",
    title: "Fake News Detection Using Machine Learning & NLP",
    shortDescription: "Developed a Fake News Detection system using Python, Machine Learning, and NLP to classify news articles as real or fake with TF-IDF vectorization and Streamlit.",
    overview: "An automated natural language processing and machine learning classification system designed to analyze article text, extract statistical linguistic features via TF-IDF, and accurately identify misleading or fabricated news.",
    problem: "The rapid spread of unverified information across digital channels makes manual verification slow and inefficient, requiring automated natural language classification systems.",
    approach: "Implemented a complete NLP workflow: text pre-processing (lowercasing, stop-word removal, tokenization), TF-IDF feature vectorization to convert text into numeric matrices, followed by machine learning classifier training, evaluation, and interactive Streamlit deployment.",
    technologies: ["Python", "Machine Learning", "NLP", "TF-IDF", "Streamlit", "Scikit-learn"],
    categories: ["All", "Python", "Machine Learning"],
    features: [
      "Natural language text pre-processing and token normalization",
      "TF-IDF feature vectorization of textual content",
      "Supervised machine learning classification",
      "Interactive web application interface deployed on Streamlit",
      "Documented test execution results and validation records"
    ],
    keyFunctionality: [
      "Article Text Ingestion & Cleaning",
      "Vocabulary Feature Matrix Generation (TF-IDF)",
      "Classification Model Inference",
      "Interactive Streamlit Prediction Interface"
    ],
    whatILearned: "Gained direct hands-on experience in text pre-processing pipelines, feature vectorization trade-offs, model evaluation methodologies, and deploying ML models for user interaction.",
    githubUrl: "",
    liveUrl: "",
    workflowType: "nlp-pipeline"
  },
  {
    id: "url-shortener",
    slug: "url-shortener",
    number: "03",
    title: "URL-Shortener Application",
    shortDescription: "Developed a simple and user-friendly URL Shortener application using Python, Tkinter, and the PyShorteners library with desktop GUI and input handling.",
    overview: "A lightweight, functional desktop utility engineered with Python and Tkinter that interfaces with link shortening engines via PyShorteners to generate concise, shareable web links with one-click clipboard copying.",
    problem: "Long, parameter-dense URLs are difficult to distribute cleanly and prone to formatting breakages in communications.",
    approach: "Designed an intuitive Tkinter graphical user interface with rigorous user input validation, integrated the PyShorteners library for remote API translation, and implemented immediate user feedback with clipboard copying capabilities.",
    technologies: ["Python", "Tkinter", "PyShorteners", "GUI Development"],
    categories: ["All", "Python", "Web Development"],
    features: [
      "Long URL input validation and handling",
      "Rapid shortened URL generation via PyShorteners",
      "Clean, user-friendly desktop graphical user interface",
      "Robust error handling for invalid or empty inputs",
      "Seamless integration with external Python packages"
    ],
    keyFunctionality: [
      "Input Validation & Error Guarding",
      "PyShorteners Link Conversion Engine",
      "Desktop GUI Event-Loop Architecture",
      "Immediate Link Copying Feedback"
    ],
    whatILearned: "Built foundational expertise in Python desktop event loops, GUI state management with Tkinter, user exception handling, and third-party API library integration.",
    githubUrl: "",
    liveUrl: "",
    workflowType: "url-shortener"
  }
];
