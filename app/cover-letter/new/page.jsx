"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NewCoverLetterPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/generate-cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });

      const data = await res.json();
      if (data?.id) router.push(`/cover-letter/${data.id}`);
    } catch (error) {
      console.error("Error generating cover letter:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto mt-10 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Create a New Cover Letter</h1>
      <p className="text-gray-600">
        Paste the job description and we'll generate a personalized cover
        letter for you.
      </p>

      <Textarea
        rows={10}
        placeholder="Paste job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 text-sm"
      />

      <Button onClick={handleGenerate} disabled={isGenerating} className="w-full">
        {isGenerating ? "Generating..." : "Generate Cover Letter"}
      </Button>
    </motion.div>
  );
}
