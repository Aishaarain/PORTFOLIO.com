
const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} neon-cta-wrapper`}
    >
      <div className="neon-cta group">
        <div className="neon-ring" />
        <p className="neon-text">{text}</p>

       <div className="neon-arrow drop-shadow-[0_0_8px_white] hover:drop-shadow-[0_0_12px_white] transition-shadow duration-300">
  <img src="/images/arrow-down.svg" alt="arrow" />
</div>

      </div>
    </a>
  );
};

export default Button;
