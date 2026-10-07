const STATS = [
  ["10K+", "Offres disponibles"],
  ["5K+", "Entreprises"],
  ["15K+", "Candidats"],
  ["94%", "Profils satisfaits"],
];

export default function Stats() {
  return (
    <section className="stats">
      {STATS.map(([value, label]) => (
        <div className="stat" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
