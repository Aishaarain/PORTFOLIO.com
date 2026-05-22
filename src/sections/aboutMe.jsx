
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSplit = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-split-text");

    gsap.fromTo(
      elements, // animate all together
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5, // faster animation
        ease: "power2.out",
        stagger: 0.1, // small stagger for smoothness
        scrollTrigger: {
          trigger: ".about-split-text", // trigger once when container enters
          start: "top 100%", // adjust when it starts
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="about" className="relative bg-black py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(34,211,238,0.35)] border border-cyan-400/40">
            <img
              src="/images/me3.PNG"
              alt="Your Photo"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="about-split-text text-4xl md:text-5xl font-bold text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]">
            About Me
          </h2>
          <p className="about-split-text text-cyan-100/80 text-lg md:text-xl leading-relaxed">
           I’m an undergraduate Computer Science student at Mehran University of Engineering & Technology with a passion for building modern web applications and scalable digital solutions. I specialize in full-stack development using the MERN stack and enjoy transforming ideas into real-world products with clean UI, efficient architecture, and modern technologies.

As a self-learner, I continuously explore new technologies through online courses, fellowships, and hands-on projects. My dedication to learning and problem-solving has helped me strengthen both my technical and creative skills while working on personal and collaborative projects.

Beyond development, I’m passionate about creating impactful digital experiences, learning emerging technologies, and growing as a developer who builds solutions that combine performance, creativity, and user-focused design.
          </p>

          <ul className="space-y-3 mt-4">
            <li className="about-split-text text-cyan-200 flex items-center gap-3">
              <span>⚡</span> MERN stack development and full-stack projects
            </li>
            <li className="about-split-text text-cyan-200 flex items-center gap-3">
              <span>🚀</span> APIs, Git workflows, and collaborative coding
            </li>
            <li className="about-split-text text-cyan-200 flex items-center gap-3">
              <span>💡</span> Completed multiple online and offline courses to stay updated with the latest technologies
            </li>
             <li className="about-split-text text-cyan-200 flex items-center gap-3">
              <span>🏆</span> Recognized as a high-achieving student, committed to innovation and problem-solving
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSplit;
