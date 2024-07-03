import { useState, useEffect } from "react";

export default function MainPage() {
  const [tag, setTag] = useState("");
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="main-page page">
      <form>
        <label>Search by tag</label>
        <div>
          <input
            type="text"
            placeholder="Football..."
            onChange={(e) => setTag(e.target.value)}
            value={tag}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
