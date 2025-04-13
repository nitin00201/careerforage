import Link from "next/link";

export default function ResumeCard({ id, title, createdAt }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500">Created: {new Date(createdAt).toLocaleDateString()}</p>
      <div className="flex justify-end gap-2 mt-4">
        <Link href={`/resume/${id}`} className="text-blue-600 hover:underline">View</Link>
      </div>
    </div>
  );
}