

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

// Replace with your live URLs
const MOVIE_APP_URL = "https://your-movie-app.vercel.app";
const BRAINWAVE_URL = "https://brainwave.vercel.app";
const PIZZA_CO_URL = "https://pizza-co.vercel.app";

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );

      const imageWrapper = card.querySelector(".image-wrapper");

      gsap.fromTo(
        imageWrapper,
        { boxShadow: "0 0 0 rgba(34,211,238,0)" },
        {
          boxShadow: "0 0 50px rgba(34,211,238,0.9)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  const ProjectCard = ({ title, description, image, link, bgColor }) => (
    <div className="project text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] flex-1">
      <div
        className={`image-wrapper relative rounded-2xl overflow-hidden
          border border-cyan-400/40
          shadow-[0_0_30px_rgba(34,211,238,0.6)]
          hover:shadow-[0_0_80px_rgba(34,211,238,1)]
          transition-all  duration-500 group ${bgColor} h-64 md:h-72`}
      >
        {/* Neon Overlay */}
        <div className="absolute inset-0 bg-cyan-400/15 blur-xl
          group-hover:bg-cyan-400/30 transition-all duration-500 z-10" />

        <img
          src={image}
          alt={title}
          className="w-full h-full my-4 mx-5 object-cover relative z-0
          blur-[1.5px] group-hover:blur-0 transition-all duration-500"
        />

        {/* Demo Overlay */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center
            bg-black/60 opacity-0 group-hover:opacity-100
            text-white font-bold text-xl
            transition-opacity duration-500 cursor-pointer z-20"
        >
          View Demo
        </a>
      </div>
      <h2 className="mt-4">{title}</h2>
      <p className="text-white-50 md:text-xl">{description}</p>
    </div>
  );

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full ">
        <TitleHeader
          // title="projects"
          sub=" responsive web applications I've built"
        />
        <div className="showcaselayout flex flex-col md:flex-row gap-6">

          {/* FIRST PROJECT */}
          <div ref={rydeRef}>
            <ProjectCard
              title="Discover Movies Effortlessly with a Sleek, Feature-Rich Movie Exploration Platform"
              description="Built with React and TailwindCSS, showcasing trending movies, real-time search, and rich movie details."
              image="/images/project1.png"
              link={MOVIE_APP_URL}
              bgColor=""
            />
          </div>

          {/* OTHER PROJECTS */}
          <div ref={libraryRef}>
            <ProjectCard
              title="Brainwave SaaS Landing Page"
              description="A sleek SaaS landing page focused on modern design, smooth interactions, and an engaging user experience."
              image="/images/project2.png"
              link={BRAINWAVE_URL}
              bgColor="bg-[#FFEFDB]"
            />
          </div>

          <div ref={ycDirectoryRef}>
            <ProjectCard
              title="Pizza Co - Pizza Ordering App"
              description="Responsive pizza ordering app showcasing dynamic UI, cart functionality, and a smooth user experience."
              image="/images/project3.png"
              link={PIZZA_CO_URL}
              bgColor="bg-[#FFE7EB]"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
