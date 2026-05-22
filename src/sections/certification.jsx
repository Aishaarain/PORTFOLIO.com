import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {certifications} from "../constants/index";
gsap.registerPlugin(ScrollTrigger);

// ✏️ REPLACE these with your real certifications


// Calendar icon SVG
const CalendarIcon = ({ color }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Building/issuer icon SVG
const IssuerIcon = ({ color }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// Arrow icon
const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const CertCard = ({ cert }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    gsap.to(card, {
      rotateX: ((y - cy) / cy) * -7,
      rotateY: ((x - cx) / cx) * 7,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 900,
    });
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: x - cx,
        y: y - cy,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="cert-card relative rounded-2xl p-px"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${cert.color}70, #7f00ff50, ${cert.color}30)`
          : `linear-gradient(135deg, ${cert.color}20, rgba(127,0,255,0.12))`,
        transformStyle: "preserve-3d",
        transition: "background 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse-following spotlight */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none rounded-full blur-3xl"
        style={{
          width: 200,
          height: 200,
          background: `radial-gradient(circle, ${cert.color}35, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 0,
        }}
      />

      {/* Inner card */}
      <div
        className="relative z-10 rounded-2xl p-10 h-full flex flex-col gap-4"
        style={{
          background: "rgba(2, 1, 10, 0.93)",
          backdropFilter: "blur(14px)",
        }}
      >
        {/* Corner decoration */}
        <div
          className="absolute top-0 right-0 w-20 h-20 rounded-bl-[2rem] rounded-tr-2xl opacity-15 pointer-events-none"
          style={{ background: `linear-gradient(225deg, ${cert.color}, transparent)` }}
        />

        {/* Cert badge line */}
        <div
          className="absolute top-0 left-6 right-6 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${cert.color}80, transparent)`,
          }}
        />

        {/* Title */}
        <h3
          className="font-bold text-2xl leading-snug pr-8"
          style={{ color: "#f0f8ff" }}
        >
          {cert.title}
        </h3>

        {/* Issuer row */}
        <div className="flex items-center gap-2">
          <IssuerIcon color={cert.color} />
          <span className="text-lg font-medium" style={{ color: cert.color + "cc" }}>
            {cert.issuer}
          </span>
        </div>

        {/* Issue date row */}
        <div className="flex items-center gap-2">
          <CalendarIcon color={cert.color + "99"} />
          <span className="text-md text-gray-400">
            Issued {cert.issueDate}
          </span>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{
            background: `linear-gradient(90deg, ${cert.color}40, transparent)`,
          }}
        />

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="text-md px-2.5 py-0.5 rounded-full font-medium"
              style={{
                background: `${cert.color}0f`,
                border: `1px solid ${cert.color}35`,
                color: `${cert.color}cc`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* View Certificate link */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center gap-1.5 text-sm font-semibold w-fit group"
          style={{ color: cert.color }}
          onMouseEnter={(e) => gsap.to(e.currentTarget, { x: 4, duration: 0.2 })}
          onMouseLeave={(e) => gsap.to(e.currentTarget, { x: 0, duration: 0.2 })}
        >
          <span
            className="underline underline-offset-2"
            style={{ textDecorationColor: cert.color + "60" }}
          >
            View Certificate
          </span>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

const Certifications = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const cardsRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge pill
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 16, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.5)",
          scrollTrigger: { trigger: badgeRef.current, start: "top 88%" },
        }
      );

      // Title blur-in
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, filter: "blur(12px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
        }
      );

      // Counter
      gsap.fromTo(
        ".cert-count-num",
        { textContent: 0 },
        {
          textContent: certifications.length,
          duration: 1.8, ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: counterRef.current, start: "top 88%" },
        }
      );

      // Cards stagger
      gsap.fromTo(
        ".cert-card",
        { opacity: 0, y: 50, scale: 0.93 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 82%" },
        }
      );

      // Floating particles
      gsap.to(".cert-particle", {
        y: "random(-18, 18)",
        x: "random(-8, 8)",
        opacity: "random(0.15, 0.7)",
        duration: "random(2, 4)",
        repeat: -1, yoyo: true, ease: "sine.inOut",
        stagger: { each: 0.25, from: "random" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{ background: "#0a001a" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ffff, transparent)" }} />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7f00ff, transparent)" }} />

      {/* Particles */}
      {[...Array(14)].map((_, i) => (
        <div
          key={i}
          className="cert-particle absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 3 + 2,
            height: Math.random() * 3 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? "#00ffff" : "#7f00ff",
            boxShadow: `0 0 8px ${i % 2 === 0 ? "#00ffff" : "#7f00ff"}`,
            opacity: 0.3,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-16">

          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-sm font-medium"
            style={{
              background: "rgba(0,255,255,0.07)",
              border: "1px solid rgba(0,255,255,0.25)",
              color: "#00ffff",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00ffff" }} />
            Verified Credentials
          </div>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #00ffff 50%, #7f00ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Certifications
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto text-md leading-relaxed">
            Professionally verified achievements 
          </p>

          {/* Stat counter */}
          <div ref={counterRef} className="flex items-center justify-center gap-10 mt-8">
            {[
              { label: "Certificates", isCount: true, value: certifications.length, suffix: "+", color: "#00ffff" },
              { label: "Platforms", isCount: false, value: 4, suffix: "", color: "#7f00ff" },
              { label: "Skills Covered", isCount: false, value: "10+", suffix: "", color: "#8a79ff" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black" style={{ color: stat.color }}>
                  {stat.isCount ? (
                    <><span className="cert-count-num">0</span>{stat.suffix}</>
                  ) : (
                    <>{stat.value}{stat.suffix}</>
                  )}
                </div>
                <div className="text-sm text-gray-500 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Certifications;