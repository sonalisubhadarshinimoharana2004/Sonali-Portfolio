import { FaJava, FaHtml5, FaCss3Alt, FaChartLine, FaFileWord, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import {
  SiPython, SiJavascript, SiC, SiCplusplus, SiTailwindcss, SiReact,
  SiNodedotjs, SiExpress, SiDjango, SiFastapi, SiPhp, SiLangchain,
  SiMysql, SiSupabase, SiPandas, SiNumpy, SiScikitlearn, SiGithub,
  SiVercel, SiNetlify, SiCloudflare, SiJupyter, SiGooglecolab, SiKaggle,
  SiNotion,
} from "react-icons/si";

const s = (name, icon, color) => ({ name, icon, color });

export const skillGroups = [
  { title: "Programming Languages", icon: "Code2", skills: [
    s("Python", SiPython, "#3776AB"), s("JavaScript", SiJavascript, "#F7DF1E"),
    s("Java", FaJava, "#ED8B00"), s("C", SiC, "#A8B9CC"), s("C++", SiCplusplus, "#00599C") ] },
  { title: "Frontend Development", icon: "PanelsTopLeft", skills: [
    s("HTML5", FaHtml5, "#E34F26"), s("CSS3", FaCss3Alt, "#1572B6"),
    s("Tailwind CSS", SiTailwindcss, "#06B6D4"), s("React.js", SiReact, "#61DAFB") ] },
  { title: "Backend Development", icon: "Server", skills: [
    s("Node.js", SiNodedotjs, "#5FA04E"), s("Express.js", SiExpress, "#FFFFFF"),
    s("Python", SiPython, "#3776AB"), s("Django", SiDjango, "#44B78B"),
    s("FastAPI", SiFastapi, "#009688"), s("PHP", SiPhp, "#777BB4"),
    s("LangChain RAG", SiLangchain, "#2DD4BF"), s("REST API", TbApi, "#38BDF8") ] },
  { title: "Databases", icon: "Database", skills: [
    s("MySQL", SiMysql, "#4479A1"), s("Supabase", SiSupabase, "#3ECF8E") ] },
  { title: "Data Science & ML", icon: "BrainCircuit", skills: [
    s("Pandas", SiPandas, "#A78BFA"), s("NumPy", SiNumpy, "#4DABCF"),
    s("Matplotlib", FaChartLine, "#11557C"), s("Scikit-learn", SiScikitlearn, "#F7931E") ] },
  { title: "Tools & Platforms", icon: "Wrench", skills: [
    s("GitHub", SiGithub, "#FFFFFF"), s("VS Code", VscVscode, "#007ACC"),
    s("Vercel", SiVercel, "#FFFFFF"), s("Netlify", SiNetlify, "#00C7B7"),
    s("Cloudflare", SiCloudflare, "#F38020"), s("Jupyter Notebook", SiJupyter, "#F37626"),
    s("Google Colab", SiGooglecolab, "#F9AB00"), s("Kaggle", SiKaggle, "#20BEFF") ] },
  { title: "Productivity Tools", icon: "BriefcaseBusiness", skills: [
    s("Microsoft Word", FaFileWord, "#2B7CD3"), s("Microsoft Excel", FaFileExcel, "#21A366"),
    s("Microsoft PowerPoint", FaFilePowerpoint, "#D24726"), s("Notion", SiNotion, "#FFFFFF") ] },
];

export const softSkills = ["Communication", "Teamwork", "Problem Solving", "Leadership", "Adaptability", "Time Management", "Critical Thinking"];
export const languages = ["English", "Hindi", "Odia"];
export const interests = ["Reading books", "Badminton", "Drawing", "Learning new skills", "Traveling"];