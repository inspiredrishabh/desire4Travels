import React, { useState } from "react";

// Simple header with basic navigation
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact us", href: "#" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#1E293B",
        color: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div>
          <a
            href="#"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
            }}
          >
            Desire4Travels
          </a>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", gap: "30px" }}>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {link.title}
            </a>
          ))}

          {/* Jump To Button */}
          <button
            style={{
              backgroundColor: "#3B82F6",
              border: "none",
              borderRadius: "4px",
              padding: "0 16px",
              color: "white",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            JUMP TO
          </button>
        </div>

        {/* Mobile Menu Button - Just for display */}
        <button
          style={{
            display: "none", // Hidden by default in this simplified version
            background: "none",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Header;
