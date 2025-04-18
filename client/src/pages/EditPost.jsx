import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [caption, setCaption] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:5000/api/scheduled-posts/${id}`);
      const data = await res.json();
      if (data.success) {
        setCaption(data.post.caption);
        const dt = new Date(data.post.scheduledAt);
        setDate(dt.toISOString().slice(0, 10)); // yyyy-mm-dd
        setTime(dt.toTimeString().slice(0, 5)); // hh:mm
      }
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/scheduled-posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caption, date, time }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Post updated!");
        navigate("/scheduled-posts");
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error updating post:", error.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Edit Scheduled Post</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <textarea
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
