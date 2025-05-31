import React, { useState, useEffect } from "react";
import axios from "axios";

const INITIAL_CODE = `
const MyButton = () => {
  return React.createElement(
    "button",
    { style: { background: "blue", color: "white" } },
    "Click me"
  );
};
`;

export default function Home() {
  const [code, setCode] = useState(INITIAL_CODE.trim());
  const [instruction, setInstruction] = useState("");
  const [error, setError] = useState("");
  const [Component, setComponent] = useState(() => () => <></>);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const codeStr = code || "";

      const funcNameMatch = codeStr.match(/function\s+([A-Za-z0-9_]+)/);
      const arrowFuncMatch = codeStr.match(
        /const\s+([A-Za-z0-9_]+)\s*=\s*\(?[^\)]*\)?\s*=>/
      );

      const compName = funcNameMatch
        ? funcNameMatch[1]
        : arrowFuncMatch
        ? arrowFuncMatch[1]
        : "MyButton";

      const exports = {};

      const wrappedCode = `
        ${codeStr}
        exports.Component = typeof ${compName} !== "undefined" ? ${compName} : () => React.createElement('div', null, 'Component not found');
      `;

      const fn = new Function("exports", "React", wrappedCode);
      fn(exports, React);

      if (!exports.Component) {
        throw new Error("Component not found in the provided code.");
      }

      setComponent(() => exports.Component);
      setError("");
    } catch (e) {
      setError(e.message || "Error evaluating component code");
      setComponent(() => () => <></>);
    }
  }, [code]);

  const handleUpdate = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/update",
        {
          code,
          instruction,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status !== 200) {
        throw new Error("Failed to update component");
      }

      setCode(res.data.updated_code);
      setInstruction("");
    } catch (e) {
      setError(e.response?.data?.message || e.message || "Unknown backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "3rem auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "0 1rem",
        color: "#333",
      }}
    >
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontWeight: 700, fontSize: "2.5rem", color: "#1e40af" }}>
          Enligence AI — React Component Editor
        </h1>
        <p style={{ fontSize: "1rem", color: "#555" }}>
          Edit your React components dynamically with AI-powered code updates.
        </p>
      </header>

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: 12,
          padding: "2rem 1.5rem",
          marginBottom: "2.5rem",
          boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "700" }}>
          Empower Your React Development with AI
        </h2>
        <p style={{ fontSize: "1.125rem", maxWidth: 600, margin: "0 auto 2rem" }}>
          Enligence AI helps you write, modify, and preview React components instantly
          — powered by intelligent code understanding and transformation.
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
            flexWrap: "wrap",
            fontWeight: 600,
          }}
        >
          <li>
            <span role="img" aria-label="magic">
              ✨
            </span>{" "}
            AI-powered Code Editing
          </li>
          <li>
            <span role="img" aria-label="preview">
              👁️‍🗨️
            </span>{" "}
            Instant Live Preview
          </li>
          <li>
            <span role="img" aria-label="easy">
              ⚡
            </span>{" "}
            Simple, Intuitive Interface
          </li>
          <li>
            <span role="img" aria-label="flexible">
              🔄
            </span>{" "}
            Real-time Code Updates
          </li>
        </ul>
      </section>

      <section
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: 12,
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem",
        }}
      >
        <label
          htmlFor="code-editor"
          style={{ fontWeight: 600, marginBottom: 8, display: "block" }}
        >
          Component Code
        </label>
        <textarea
          id="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={12}
          spellCheck={false}
          style={{
            width: "100%",
            fontFamily: "'Source Code Pro', monospace",
            fontSize: 15,
            borderRadius: 8,
            border: "1.5px solid #ddd",
            padding: "12px",
            resize: "vertical",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#1e40af")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />
      </section>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder='e.g. "Change button color to red"'
          style={{
            flex: "1 1 70%",
            padding: "0.7rem 1rem",
            borderRadius: 8,
            border: "1.5px solid #ddd",
            fontSize: 15,
            fontWeight: 500,
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#1e40af")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />
        <button
          onClick={handleUpdate}
          disabled={loading || instruction.trim() === ""}
          style={{
            flex: "0 0 120px",
            backgroundColor: loading ? "#a5b4fc" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            padding: "0.7rem 1.2rem",
            fontWeight: 700,
            fontSize: 15,
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow:
              loading
                ? "none"
                : "0 4px 12px rgba(37, 99, 235, 0.4)",
            transition: "background-color 0.3s ease",
          }}
          title={loading ? "Updating..." : "Update component"}
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </section>

      <section
        style={{
          background: "#f9fafb",
          borderRadius: 12,
          padding: "1rem 1.5rem",
          boxShadow:
            "0 2px 6px rgba(0, 0, 0, 0.05)",
          minHeight: 80,
          marginBottom: "1.5rem",
        }}
      >
        <strong style={{ display: "block", marginBottom: "0.5rem", fontSize: 16 }}>
          Live Preview
        </strong>
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: 20,
            borderRadius: 8,
            backgroundColor: "white",
            minHeight: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Component ? <Component /> : <span style={{ color: "#9ca3af" }}>No component to display</span>}
        </div>
      </section>

      {error && (
        <div
          style={{
            backgroundColor: "#fee2e2",
            color: "#b91c1c",
            padding: "0.75rem 1rem",
            borderRadius: 8,
            fontWeight: 600,
            textAlign: "center",
            boxShadow:
              "0 2px 6px rgba(185, 28, 28, 0.2)",
            userSelect: "none",
          }}
        >
          Error: {error}
        </div>
      )}
    </div>
  );
}
