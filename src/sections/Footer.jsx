

import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="relative top-10 bg-black border-t border-cyan-400/30">
      {/* Neon glow line */}
      <div className="absolute top-0 left-0 w-full  "></div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        
        {/* Terms */}
        <div className="text-cyan-300 text-lg font-medium drop-shadow-[0_0_6px_rgba(34,211,238,0.8)] cursor-pointer hover:text-cyan-200 transition">
          Terms & Conditions
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          {socialImgs.map((socialImg, index) => (
            <div
              key={index}
              className="
                w-12 h-12 flex items-center justify-center rounded-full
                border border-cyan-400/60
                bg-black
                shadow-[0_0_12px_rgba(34,211,238,0.5)]
                hover:shadow-[0_0_25px_rgba(34,211,238,1)]
                hover:scale-110
                transition-all duration-300
                cursor-pointer
              "
            >
              <a href={socialImg.Url} target="_blank" rel="noopener noreferrer">
                <img
                  src={socialImg.imgPath}
                  alt="social icon"
                  className="w-5 h-5"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-cyan-300 text-center md:text-right text-sm drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
          © {new Date().getFullYear()} Aisha Arain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
