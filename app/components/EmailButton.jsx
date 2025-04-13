export default function EmailButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
      >
        Send Email
      </button>
    );
  }
  