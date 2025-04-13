import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-6 hidden md:block">
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link href="/resume/new" className="text-gray-700 hover:text-blue-600">New Resume</Link>
        <Link href="/cover-letter/new" className="text-gray-700 hover:text-blue-600">New Cover Letter</Link>
        <Link href="/settings" className="text-gray-700 hover:text-blue-600">Settings</Link>
      </nav>
    </aside>
  );
}
