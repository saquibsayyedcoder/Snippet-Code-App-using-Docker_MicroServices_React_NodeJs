import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:3000/api/v1/snippets";

const CreateSnipts = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch all snippets
  const fetchSnippets = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/getall`);
      setSnippets(res.data.data || []);
    } catch (error) {
      console.error("Error fetching snippets", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Create snippet
  const handleCreateSnipts = async (e) => {
    e.preventDefault();

    if (!title.trim() || !code.trim()) {
      alert("Title and code are required");
      return;
    }

    try {
      const res = await axios.post(`${API_BASE}/create`, {
        title,
        code,
      });

      // ✅ Update UI instantly
      setSnippets((prev) => [...prev, res.data.data]);

      setTitle("");
      setCode("");
    } catch (error) {
      console.error("Error creating snippet", error);
    }
  };

  useEffect(() => {
    fetchSnippets();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Code Snippets</h1>

      {/* 🔹 Create Snippet Form */}
      <form
        onSubmit={handleCreateSnipts}
        className="flex flex-col gap-4 mb-8"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Snippet title"
          className="border rounded px-3 py-2"
        />

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code snippet..."
          className="border rounded px-3 py-2 min-h-[120px]"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-fit hover:bg-blue-700"
        >
          Create Snippet
        </button>
      </form>

      {/* 🔹 Snippet List */}
      {loading && <p className="text-gray-500">Loading snippets...</p>}

      {!loading && snippets.length === 0 && (
        <p className="text-gray-500">No snippets available</p>
      )}

      <div className="space-y-4">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="border rounded p-4 bg-gray-50"
          >
            <h2 className="font-semibold text-lg mb-2">
              {snippet.title}
            </h2>
            <pre className="bg-black text-green-400 p-3 rounded overflow-x-auto text-sm">
              {snippet.code}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateSnipts;
