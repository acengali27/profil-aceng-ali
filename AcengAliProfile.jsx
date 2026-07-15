import React from "react";

/**
 * AcengAliProfile
 * Komponen React single-file (self-contained) untuk halaman "link in bio".
 * Semua styling ditulis lewat tag <style> di dalam komponen supaya:
 *  - tidak butuh Tailwind / library CSS eksternal
 *  - tinggal copy-paste file ini ke project React kamu
 *
 * Cara pakai:
 *  1. Simpan sebagai AcengAliProfile.jsx
 *  2. import AcengAliProfile from "./AcengAliProfile";
 *  3. <AcengAliProfile />
 *
 * Ganti data di bagian DATA di bawah ini (foto, nomor WA, link sosmed, dll)
 */

// ================= DATA (edit di sini) =================
const PROFILE = {
  name: "Aceng Ali",
  title: "Digital Marketing • Digital Fundraising Website Developer",
  location: "Bandung, Indonesia",
  bio: "Membantu bisnis, yayasan, masjid, pesantren, dan UMKM membangun website, meningkatkan fundraising, dan mengembangkan digital marketing.",
  photoUrl: "https://placehold.co/200x200/e8d9c5/6b4a2f?text=Foto",
  whatsappNumber: "6281234567890", // ganti dengan nomor WA asli (format 62xxx)
};

const SERVICES = [
  { icon: "🌐", label: "Jasa Pembuatan Website" },
  { icon: "📈", label: "Meta Ads & Google Ads" },
  { icon: "🤖", label: "AI Automation WhatsApp" },
  { icon: "🖥️", label: "Landing Page Donasi" },
  { icon: "🗄️", label: "Dashboard Donatur" },
];

const PORTFOLIO = [
  { icon: "🤲", label: "Website Yayasan" },
  { icon: "🕌", label: "Website Masjid" },
  { icon: "🎓", label: "Website Pesantren" },
  { icon: "💳", label: "Landing Page Donasi" },
  { icon: "📊", label: "Dashboard Donatur" },
];

const RESULTS = [
  { value: "Rp12 Miliar+", label: "Digital Fundraising Terkelola" },
  { value: "300+", label: "Campaign Digital" },
  { value: "20.000+", label: "Transaksi Donasi" },
  { value: "5+ Tahun", label: "Pengalaman di Bidang Digital" },
];

const FREE_RESOURCES = [
  { icon: "📄", label: "Template Landing Page" },
  { icon: "📖", label: "Ebook Digital Marketing" },
  { icon: "✅", label: "Checklist Meta Ads" },
];

const TOOLS = [
  { name: "Hostinger", sub: "Affiliate", color: "#673de6" },
  { name: "Canva Pro", sub: "", color: "#00c4cc" },
  { name: "ChatGPT", sub: "", color: "#10a37f" },
  { name: "CapCut", sub: "", color: "#000000" },
];

const SOCIALS = [
  { icon: "📷", label: "Instagram", url: "#" },
  { icon: "in", label: "LinkedIn", url: "#" },
  { icon: "🎵", label: "TikTok", url: "#" },
  { icon: "▶️", label: "YouTube", url: "#" },
  { icon: "f", label: "Facebook", url: "#" },
  { icon: "@", label: "Threads", url: "#" },
];

const PARTNERS = ["BMM", "PESANTREN ROBITOH", "MASJID ALHUDA", "& Banyak Lainnya"];

// ================= COMPONENT =================
export default function AcengAliProfile() {
  const waLink = `https://wa.me/${PROFILE.whatsappNumber}`;

  return (
    <div className="aap-page">
      <style>{css}</style>

      {/* Floating contact button */}
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="aap-float-btn">
        <span className="aap-wa-icon">☎</span> Hubungi Saya
      </a>

      <div className="aap-container">
        {/* Header / Profile */}
        <header className="aap-header">
          <div className="aap-avatar-wrap">
            <img src={PROFILE.photoUrl} alt={PROFILE.name} className="aap-avatar" />
            <span className="aap-status-dot" />
          </div>
          <h1 className="aap-name">{PROFILE.name}</h1>
          <p className="aap-title">{PROFILE.title}</p>
          <p className="aap-location">📍 {PROFILE.location}</p>
          <p className="aap-bio">{PROFILE.bio}</p>

          <a href={waLink} target="_blank" rel="noopener noreferrer" className="aap-cta">
            ☎ Konsultasi Gratis via WhatsApp <span className="aap-chevron">›</span>
          </a>
        </header>

        {/* Jasa Saya */}
        <Section icon="💼" title="Jasa Saya">
          <div className="aap-list">
            {SERVICES.map((s) => (
              <a href="#" className="aap-list-item" key={s.label}>
                <span className="aap-list-icon">{s.icon}</span>
                <span className="aap-list-label">{s.label}</span>
                <span className="aap-chevron">›</span>
              </a>
            ))}
          </div>
        </Section>

        {/* Portofolio */}
        <Section icon="📁" title="Portofolio">
          <div className="aap-grid5">
            {PORTFOLIO.map((p) => (
              <a href="#" className="aap-grid-card" key={p.label}>
                <span className="aap-grid-icon">{p.icon}</span>
                <span className="aap-grid-label">{p.label}</span>
              </a>
            ))}
          </div>
          <a href="#" className="aap-see-all">
            Lihat Semua Portofolio <span className="aap-chevron">›</span>
          </a>
        </Section>

        {/* Hasil yang Pernah Dicapai */}
        <Section icon="🏆" title="Hasil yang Pernah Dicapai">
          <div className="aap-results-card">
            {RESULTS.map((r) => (
              <div className="aap-result" key={r.label}>
                <div className="aap-result-value">{r.value}</div>
                <div className="aap-result-label">{r.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Free Resources */}
        <Section icon="🎁" title="Free Resources">
          <div className="aap-grid3">
            {FREE_RESOURCES.map((f) => (
              <a href="#" className="aap-resource-card" key={f.label}>
                <span className="aap-resource-icon">{f.icon}</span>
                <span className="aap-resource-label">{f.label}</span>
                <span className="aap-chevron">›</span>
              </a>
            ))}
          </div>
        </Section>

        {/* Tools Favorit */}
        <Section icon="⭐" title="Tools Favorit">
          <div className="aap-grid4">
            {TOOLS.map((t) => (
              <div className="aap-tool-card" key={t.name}>
                <div className="aap-tool-badge" style={{ background: t.color }}>
                  {t.name.charAt(0)}
                </div>
                <div className="aap-tool-name">{t.name}</div>
                {t.sub && <div className="aap-tool-sub">{t.sub}</div>}
              </div>
            ))}
          </div>
        </Section>

        {/* Social Media */}
        <Section icon="🔗" title="Social Media">
          <div className="aap-grid6">
            {SOCIALS.map((s) => (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="aap-social-card" key={s.label}>
                <span className="aap-social-icon">{s.icon}</span>
                <span className="aap-social-label">{s.label}</span>
              </a>
            ))}
          </div>
        </Section>

        {/* Partners */}
        <div className="aap-partners">
          <span className="aap-partners-label">🤝 Bekerja Sama Dengan</span>
          <div className="aap-partners-list">
            {PARTNERS.map((p) => (
              <span className="aap-partner-item" key={p}>{p}</span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="aap-footer">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p>dibuat dengan ❤ dan niat baik</p>
        </footer>
      </div>
    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <section className="aap-section">
      <h2 className="aap-section-title">
        <span className="aap-section-icon">{icon}</span> {title}
      </h2>
      {children}
    </section>
  );
}

// ================= CSS =================
const css = `
  .aap-page {
    --green-dark: #2d4a32;
    --green: #3f6b3b;
    --green-light: #eaf2e6;
    --terracotta: #b5651d;
    --cream: #f3efe6;
    --card: #ffffff;
    --text: #2c2c2c;
    --muted: #6b6b6b;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: var(--cream);
    color: var(--text);
    min-height: 100vh;
    padding: 24px 0 60px;
    position: relative;
    box-sizing: border-box;
  }
  .aap-page *, .aap-page *::before, .aap-page *::after { box-sizing: border-box; }

  .aap-container {
    max-width: 480px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .aap-float-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ffffff;
    color: var(--green-dark);
    border-radius: 999px;
    padding: 10px 18px;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    z-index: 50;
  }
  .aap-wa-icon { color: #25D366; }

  .aap-header { text-align: center; padding-top: 40px; }

  .aap-avatar-wrap { position: relative; width: 140px; height: 140px; margin: 0 auto 20px; }
  .aap-avatar {
    width: 140px; height: 140px; border-radius: 50%; object-fit: cover;
    border: 5px solid #ffffff; box-shadow: 0 6px 20px rgba(0,0,0,0.08); display: block;
  }
  .aap-status-dot {
    position: absolute; bottom: 8px; right: 8px; width: 18px; height: 18px;
    background: #3fb950; border-radius: 50%; border: 3px solid #fff;
  }

  .aap-name { font-size: 30px; font-weight: 800; color: var(--green-dark); margin: 0 0 8px; }
  .aap-title { color: var(--terracotta); font-weight: 700; font-size: 15px; margin: 0 0 10px; line-height: 1.4; }
  .aap-location { color: var(--muted); font-size: 14px; margin: 0 0 14px; }
  .aap-bio { color: var(--text); font-size: 14.5px; line-height: 1.6; margin: 0 0 24px; }

  .aap-cta {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    background: linear-gradient(180deg, #4b7d46, #33552f);
    color: #fff; text-decoration: none; font-weight: 700; font-size: 15px;
    padding: 15px 26px; border-radius: 999px; box-shadow: 0 8px 18px rgba(51,85,47,0.3);
    width: 100%;
  }

  .aap-section { margin-top: 34px; }
  .aap-section-title {
    text-align: center; font-size: 18px; font-weight: 800; color: #1f1f1f;
    display: flex; align-items: center; justify-content: center; gap: 8px; margin: 0 0 16px;
  }
  .aap-section-icon { font-size: 18px; }

  .aap-chevron { margin-left: auto; color: #9a9a9a; font-size: 18px; }

  .aap-list { display: flex; flex-direction: column; gap: 12px; }
  .aap-list-item {
    display: flex; align-items: center; gap: 14px; background: var(--card);
    text-decoration: none; color: var(--text); padding: 16px 18px; border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04); font-weight: 600; font-size: 14.5px;
  }
  .aap-list-icon { font-size: 20px; }

  .aap-grid5 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .aap-grid-card {
    background: var(--card); border-radius: 16px; text-decoration: none; color: var(--text);
    padding: 20px 8px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    display: flex; flex-direction: column; align-items: center; gap: 10px;
  }
  .aap-grid-icon { font-size: 26px; }
  .aap-grid-label { font-size: 12.5px; font-weight: 700; line-height: 1.3; }

  .aap-see-all {
    display: block; text-align: center; margin-top: 14px; color: var(--green);
    font-weight: 700; font-size: 14px; text-decoration: none;
  }

  .aap-results-card {
    background: var(--card); border-radius: 18px; padding: 22px 10px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 22px 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .aap-result { text-align: center; }
  .aap-result-value { font-size: 19px; font-weight: 800; color: var(--green-dark); margin-bottom: 4px; }
  .aap-result-label { font-size: 12.5px; color: var(--muted); }

  .aap-grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .aap-resource-card {
    background: var(--card); border-radius: 16px; text-decoration: none; color: var(--text);
    padding: 16px 10px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 700;
  }
  .aap-resource-icon { font-size: 22px; }
  .aap-resource-card .aap-chevron { display: none; }

  .aap-grid4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .aap-tool-card {
    background: var(--card); border-radius: 16px; padding: 18px 10px; text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04); display: flex; flex-direction: column; align-items: center; gap: 8px;
  }
  .aap-tool-badge {
    width: 34px; height: 34px; border-radius: 8px; color: #fff; font-weight: 800;
    display: flex; align-items: center; justify-content: center; font-size: 16px;
  }
  .aap-tool-name { font-weight: 700; font-size: 13.5px; }
  .aap-tool-sub { font-size: 11px; color: var(--green); font-weight: 700; }

  .aap-grid6 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .aap-social-card {
    background: var(--card); border-radius: 16px; text-decoration: none; color: var(--text);
    padding: 16px 6px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    display: flex; flex-direction: column; align-items: center; gap: 8px;
  }
  .aap-social-icon {
    width: 34px; height: 34px; border-radius: 50%; background: var(--green-light);
    display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800;
  }
  .aap-social-label { font-size: 12px; font-weight: 700; }

  .aap-partners {
    margin-top: 34px; background: #ece2d6; border-radius: 16px; padding: 16px 18px;
    display: flex; flex-wrap: wrap; align-items: center; gap: 10px 18px;
  }
  .aap-partners-label { font-weight: 800; color: var(--terracotta); font-size: 13px; white-space: nowrap; }
  .aap-partners-list { display: flex; flex-wrap: wrap; gap: 14px; }
  .aap-partner-item { font-size: 12px; font-weight: 700; color: var(--green-dark); }

  .aap-footer { text-align: center; margin-top: 30px; color: var(--muted); font-size: 12px; line-height: 1.8; }

  @media (max-width: 380px) {
    .aap-grid5, .aap-grid6 { grid-template-columns: repeat(3, 1fr); }
    .aap-name { font-size: 26px; }
  }
`;
