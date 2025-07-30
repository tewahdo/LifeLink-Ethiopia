"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard/user-profile", label: "User" },
    { href: "/dashboard/healthcare", label: "Health" },
    { href: "/dashboard/banking", label: "Banking" },
    { href: "/dashboard/telecom", label: "Telecom" },
    { href: "/dashboard/immigration", label: "Immigration" },
    { href: "/dashboard/police", label: "Police" },
  ];

  const navStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderBottom: "1px solid #d1d5db",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  };

  const brandStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#2563eb",
  };

  const ulStyle: React.CSSProperties = {
    display: "flex",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const liStyle: React.CSSProperties = {
    marginRight: "24px",
  };

  const linkBaseStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    padding: "8px 12px",
    borderRadius: "6px",
    fontWeight: 500,
    textDecoration: "none",
    transition: "all 0.2s ease",
    display: "inline-block",
  };

  const activeLinkStyle: React.CSSProperties = {
    backgroundColor: "#1e40af", // blue-800
    color: "white",
    boxShadow: "0 0 10px rgba(30, 64, 175, 0.6)",
  };

  const inactiveLinkStyle: React.CSSProperties = {
    color: "#3b82f6", // blue-500
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={brandStyle}>LifeLink 🇪🇹</div>

        <ul style={ulStyle}>
          {navLinks.map(({ href, label }, index) => {
            const isActive = pathname === href;
            return (
              <li
                key={href}
                style={index === navLinks.length - 1 ? undefined : liStyle}
              >
                <Link
                  href={href}
                  style={{
                    ...linkBaseStyle,
                    ...(isActive ? activeLinkStyle : inactiveLinkStyle),
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
