import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/Components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuCraft" },
    {
      name: "Resume Analyzer",
      content: "ResuCraft – Crafting perfect resumes with AI precision.",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading ">
          <h1> Track Your Application & Resume Ratings</h1>
          <h2>
            Analyze your resume using AI, monitor your application progress, and
            identify areas to boost your hiring potential.
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
