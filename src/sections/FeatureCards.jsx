

import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full px-6 py-12 bg-black">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="
            relative rounded-2xl p-8
            bg-black/70
            border border-cyan-400/40
            shadow-[0_0_25px_rgba(34,211,238,0.25)]
            hover:shadow-[0_0_45px_rgba(34,211,238,0.7)]
            transition-all duration-300
            hover:-translate-y-2
          "
        >
          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-2xl blur-xl bg-cyan-500/10 -z-10"></div>

          {/* Icon */}
          <div
            className="
              w-14 h-14 flex items-center justify-center rounded-full
              border border-cyan-400
              shadow-[0_0_15px_rgba(34,211,238,0.8)]
            "
          >
            <img src={imgPath} alt={title} className="w-7 h-7" />
          </div>

          {/* Title */}
          <h3
            className="
              mt-4 text-2xl font-semibold
              text-cyan-300
              drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
            "
          >
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-lg text-cyan-100/70">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
