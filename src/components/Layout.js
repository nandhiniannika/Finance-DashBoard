import React, { useState, useRef, useEffect } from "react";
import { useApp } from "../context/AppContext";
import "./Layout.css";

export default function Layout({ children }) {
  const { darkMode, setDarkMode, role, setRole } = useApp();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // 🔥 close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={darkMode ? "dark app" : "app"}>

      {/* 🔥 HERO */}
      <div className="hero">
        <div className="navbar">
          <h2>Finance</h2>

          <div className="nav-center">
  <a href="/" className="active">Overview</a>
  <a href="/transactions">Transactions</a>
  <a href="/accounts">Accounts</a>
  <a href="/categories">Categories</a>
</div>

          {/* 🔥 RIGHT SIDE */}
          <div className="nav-right">

            {/* 👤 ROLE ICON DROPDOWN */}
            <div className="role-icon" ref={dropdownRef}>
              <div
                className="user-icon"
                onClick={() => setOpen(!open)}
              >
                👤
              </div>

              {open && (
                <div className="role-menu">
                  <div
                    className={`role-item ${role === "viewer" ? "active" : ""}`}
                    onClick={() => {
                      setRole("viewer");
                      setOpen(false);
                    }}
                  >
                     Viewer
                  </div>

                  <div
                    className={`role-item ${role === "admin" ? "active" : ""}`}
                    onClick={() => {
                      setRole("admin");
                      setOpen(false);
                    }}
                  >
                     Admin
                  </div>
                </div>
              )}
            </div>

            {/* 🌙 THEME BUTTON */}
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

          </div>
        </div>

        <div className="hero-text">
          <h1>Welcome back</h1>
          <p>Financial overview</p>
        </div>
      </div>

      <div className="content">{children}</div>
    </div>
  );
}