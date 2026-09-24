import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at center, #121620 0%, #080a10 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center",
      fontFamily: "var(--font-body, system-ui, sans-serif)"
    }}>
      <div style={{
        maxWidth: "600px",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(202, 163, 80, 0.2)",
        borderRadius: "16px",
        padding: "3rem 2rem",
        backdropFilter: "blur(20px)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
      }}>
        <div style={{
          fontSize: "4rem",
          fontWeight: 800,
          background: "linear-gradient(135deg, #caa350 0%, #ecd08c 50%, #9a7629 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "0.5rem"
        }}>
          404
        </div>
        
        <h1 style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "1rem",
          letterSpacing: "1px"
        }}>
          Page Not Found
        </h1>

        <p style={{
          color: "#aaa",
          fontSize: "0.95rem",
          lineHeight: 1.6,
          marginBottom: "2rem"
        }}>
          The page you are looking for might have been moved, updated, or is temporarily unavailable. Explore our official residential residences below.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "10px",
          marginBottom: "1.5rem"
        }}>
          <Link
            href="/"
            style={{
              background: "linear-gradient(135deg, #caa350, #b08d3b)",
              color: "#000",
              fontWeight: 600,
              padding: "10px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.82rem",
              transition: "transform 0.2s"
            }}
          >
            🏠 Home
          </Link>
          <Link
            href="/pricing"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(202, 163, 80, 0.3)",
              color: "#fff",
              fontWeight: 500,
              padding: "10px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.82rem"
            }}
          >
            💰 Pricing
          </Link>
          <Link
            href="/floor-plans"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(202, 163, 80, 0.3)",
              color: "#fff",
              fontWeight: 500,
              padding: "10px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.82rem"
            }}
          >
            📐 Floor Plans
          </Link>
          <Link
            href="/location"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(202, 163, 80, 0.3)",
              color: "#fff",
              fontWeight: 500,
              padding: "10px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.82rem"
            }}
          >
            📍 Location
          </Link>
          <Link
            href="/amenities"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(202, 163, 80, 0.3)",
              color: "#fff",
              fontWeight: 500,
              padding: "10px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.82rem"
            }}
          >
            🏊 40+ Amenities
          </Link>
          <Link
            href="/maharera"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(202, 163, 80, 0.3)",
              color: "#fff",
              fontWeight: 500,
              padding: "10px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.82rem"
            }}
          >
            📜 MahaRERA
          </Link>
        </div>

        {/* Topical Silo Hubs */}
        <div style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "1rem",
          marginBottom: "1.5rem"
        }}>
          <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "#caa350", marginBottom: "8px" }}>
            Explore Topical Knowledge Hubs
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
            {[
              { name: "Connectivity", path: "/near" },
              { name: "Price Intel", path: "/price" },
              { name: "Buyer Guides", path: "/guide" },
              { name: "Market Trends", path: "/market" },
              { name: "Comparison Matrix", path: "/compare" },
              { name: "Specifications", path: "/feature" },
              { name: "Editorial", path: "/blog" },
              { name: "NRI Investment", path: "/invest" }
            ].map((hub) => (
              <Link
                key={hub.path}
                href={hub.path}
                style={{
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: "rgba(202, 163, 80, 0.08)",
                  border: "1px solid rgba(202, 163, 80, 0.2)",
                  color: "#d4af37",
                  fontSize: "0.75rem",
                  textDecoration: "none"
                }}
              >
                {hub.name} →
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "1.5rem" }}>
          <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "0.8rem" }}>
            Need immediate assistance from the sales team?
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20I%20visited%20krisalaventis.in%20and%20need%20assistance%20regarding%20Krisala%20Aventis%20Tathawade."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#25d366",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem"
            }}
          >
            💬 Chat with Sales Concierge on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
