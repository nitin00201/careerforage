export default function Header() {
    return (
      <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">CareerForge</h1>
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">New</button>
          <img src="/avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full border border-gray-300" />
        </div>
      </header>
    );
  }
  