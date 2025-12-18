import { useEffect, useState } from "react";
import axios from "axios";

const CreateComment = ({ snippetId }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  // 🛑 Safety guard
  if (!snippetId) {
    return <p className="text-red-500">Invalid snippet</p>;
  }

  // 🔹 Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/v1/snippet/${snippetId}/comment`
      );

      setComments(res.data || []);
    };

    fetchComments();
  }, [snippetId]);

  // 🔹 Create comment
  const handleComment = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const res = await axios.post(
      `http://localhost:3001/api/v1/snippet/${snippetId}/comment`,
      { text }
    );

    // ✅ IMPORTANT FIX — append comment to UI
    setComments((prev) => [...prev, res.data.comments]);

    setText("");
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleComment}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="border p-2 w-full rounded"
        />

        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Add Comment
        </button>
      </form>

      {/* 🔹 Comment List */}
      <div className="mt-4 space-y-2">
        {comments.length === 0 && (
          <p className="text-gray-500">No comments yet</p>
        )}

        {comments.map((c) => (
          <div
            key={c.commentId}
            className="border rounded p-2 bg-gray-50"
          >
            {c.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateComment;
