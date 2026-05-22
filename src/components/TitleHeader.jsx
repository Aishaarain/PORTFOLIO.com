const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Neon Badge */}
      <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#00ffff] via-[#f7f6f9] to-[#00ffff] text-[#02010a] font-semibold drop-shadow-[0_0_6px_#00ffff] animate-pulse">
        <p>{sub}</p>
      </div>

      {/* Neon Title */}
     <h1 className="text-center font-extrabold md:text-5xl text-3xl text-[#f7f6f9] drop-shadow-[0_0_10px_#00ffff] transition-all duration-300 hover:drop-shadow-[0_0_6px_#8a79ff]">
        {title}
      </h1>
    </div>
  );
};

export default TitleHeader;
