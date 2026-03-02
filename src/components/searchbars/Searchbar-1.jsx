import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

const Searchbar = ({
  onSearch,
  placeholder = "Search...",
  debounceDelay = 500,
  autoFocus = false,

  // Custom Styling Props
  containerClassName = "",
  inputClassName = "",
  iconClassName = "",
  clearIconClassName = "",
  shortcutHint = true,
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Auto focus
  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch?.(query.trim());
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [query, debounceDelay, onSearch]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }

      if (e.key === "Escape") {
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className={`relative w-full max-w-md ${containerClassName}`}>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`w-full py-2 pl-4 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${inputClassName}`}
        aria-label="Search"
      />

      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        {query ? (
          <button
            type="button"
            onClick={handleClear}
            className={`text-gray-500 hover:text-red-500 transition-all duration-200 ${clearIconClassName}`}
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        ) : (
          <Search size={18} className={`text-gray-400 ${iconClassName}`} />
        )}
      </div>

      {shortcutHint && !query && (
        <span className="absolute right-10 top-1/2 -translate-y-1/2 text-xs text-gray-400 hidden sm:block">
          Ctrl + K
        </span>
      )}
    </div>
  );
};

export default Searchbar;
