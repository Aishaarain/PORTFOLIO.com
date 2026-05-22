const ExpContent = ({ expContent }) => {
  return (
    <div className="neon-card p-10 rounded-xl">
      <h1 className="neon-title text-3xl font-semibold mb-2">
        {expContent.title}
      </h1>
      <p className="neon-date mb-4">{expContent.date}</p>

      <p className="neon-subtitle mb-2">Responsibilities</p>
      <ul className="neon-list list-disc ms-5">
        {expContent.responsibilities.map((responsibility, index) => (
          <li key={index} className="mb-1">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpContent;
