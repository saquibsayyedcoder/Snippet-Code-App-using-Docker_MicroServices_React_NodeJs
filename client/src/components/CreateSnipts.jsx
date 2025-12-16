import { useState } from "react";
import axios from "axios";

const CreateSnipts = () => {
  // ✅ Hooks at top level
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const handleCreateSnipts = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/snippets/create",
        { title, code }
      );

      console.log(res);

      // Optional: clear form
      setTitle("");
      setCode("");
    } catch (error) {
      console.error("Error occurred", error);
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleCreateSnipts} className="flex flex-col space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border rounded px-2 py-1 w-fit"
        />

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border rounded px-6 py-1"
          placeholder="Write a code snippet..."
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-fit cursor-pointer"
        >
          Create Snippet
        </button>
      </form>
    </div>
  );
};

export default CreateSnipts;
