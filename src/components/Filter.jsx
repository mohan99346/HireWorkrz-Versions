import { useState } from "react";
import './Filter.css';
export default function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-container">
      {/* Toggle Button */}
      <button className="filter-toggle" onClick={toggleSidebar}>
        &#x1F50D; Filters
      </button>

      {/* Sidebar */}
      <div className={`filter-sidebar ${isOpen ? "open" : ""}`}>
        <div className="filter-header">
          <h2>Filters</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
        </div>

        {/* Filter Content */}
        <div className="filter-content">
          <div className="filter-group">
            <label>Category</label>
            <select>
              <option>All</option>
              <option>Web Development</option>
              <option>Design</option>
              <option>Writing</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range</label>
            <input type="range" min="0" max="1000" />
          </div>

          <button className="apply-btn" onClick={toggleSidebar}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
