import { useState, useEffect } from "react";

export default function MainPage() {
  return (
    <div className="main-page page">
      <form>
        <div>
          <input type="text" placeholder="Football..." />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
