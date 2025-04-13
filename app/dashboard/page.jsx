"use client";

import { motion } from "framer-motion";
import ResumeCard from "../components/ResumeCard";
import CoverLetterCard from "../components/CoverLetterCard";

const mockResumes = [
  { id: "1", title: "Frontend Developer Resume", createdAt: Date.now() },
  { id: "2", title: "Backend Developer Resume", createdAt: Date.now() },
];

const mockCoverLetters = [
  { id: "1", position: "Frontend Developer", createdAt: Date.now() },
  { id: "2", position: "Fullstack Engineer", createdAt: Date.now() },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Resumes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockResumes.map((resume) => (
            <motion.div
              key={resume.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <ResumeCard {...resume} />
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Cover Letters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockCoverLetters.map((cl) => (
            <motion.div
              key={cl.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <CoverLetterCard {...cl} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
