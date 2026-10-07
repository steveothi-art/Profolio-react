import { useMemo, useState } from "react";
import { jobs, CONTRACTS, CATEGORIES } from "../data/jobs";
import { normalize } from "../utils";
import JobCard from "./JobCard";

export default function Jobs({
  search,
  place,
  contract,
  category,
  setContract,
  setCategory,
  onReset,
}) {
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    const s = normalize(search);
    const p = normalize(place);

    return jobs.filter((job) => {
      const matchSearch =
        s === "" ||
        normalize(job.title).includes(s) ||
        normalize(job.category).includes(s);
      const matchPlace = p === "" || normalize(job.city).includes(p);
      const matchContract = contract === "" || job.contract === contract;
      const matchCategory = category === "" || job.category === category;
      return matchSearch && matchPlace && matchContract && matchCategory;
    });
  }, [search, place, contract, category]);

  return (
    <section className="jobs-section" id="emplois">
      <div className="section-title">
        <div>
          <span className="section-label">OPPORTUNITÉS</span>
          <h2>
            Les offres qui pourraient <span>vous intéresser</span>
          </h2>
        </div>

        <button
          className="filter-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filtres
        </button>
      </div>

      <div className={`filters ${showFilters ? "active" : ""}`}>
        <select value={contract} onChange={(e) => setContract(e.target.value)}>
          <option value="">Tous les contrats</option>
          {CONTRACTS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Toutes les catégories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button onClick={onReset}>Réinitialiser</button>
      </div>

      {results.length > 0 ? (
        <div className="jobs-grid">
          {results.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="no-result" style={{ display: "block" }}>
          <i className="fas fa-search"></i>
          <h3>Aucune offre trouvée</h3>
          <p>Essayez une autre recherche.</p>
        </div>
      )}
    </section>
  );
}
