import { useState, useEffect } from "react";

export default function MainPage() {
  return (
    <div className="main-page page">
      <form>
        <label>Introduce the tag you want to search by</label>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
