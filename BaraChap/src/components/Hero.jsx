import { POPULAR } from "../data/jobs";

export default function Hero({ search, place, setSearch, setPlace }) {
  const goToJobs = () =>
    document.getElementById("emplois")?.scrollIntoView({ behavior: "smooth" });

  const onKeyDown = (e) => {
    if (e.key === "Enter") goToJobs();
  };

  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <div className="badge">
          <i className="fas fa-bolt"></i>
          Trouvez votre avenir professionnel
        </div>

        <h1>
          Le travail qui correspond <span>vraiment</span> à vos compétences.
        </h1>

        <p>
          Décrivez vos compétences, votre expérience et vos préférences.
          bara-chap vous aide à découvrir les offres qui correspondent le mieux
          à votre profil.
        </p>

        <div className="search-box">
          <div className="search-field">
            <input
              type="text"
              placeholder="Métier, compétence..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={onKeyDown}
            />
          </div>

          <div className="search-field">
            <input
              type="text"
              placeholder="Votre Ville ou région"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              onKeyDown={onKeyDown}
            />
          </div>

          <button className="search-btn" onClick={goToJobs}>
            Rechercher
          </button>
        </div>

        <div className="popular">
          <span>Populaires :</span>
          {POPULAR.map((term) => (
            <button
              key={term}
              onClick={() => {
                setSearch(term);
                goToJobs();
              }}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-card">
        <div className="floating-card card-one">
          <div className="company-icon">
            <img src="developpeur.png" alt="dev" />
          </div>
          <div>
            <strong>Développeur Web</strong>
            <p>Entreprise Tech</p>
          </div>
          <span className="match">95%</span>
        </div>

        <div className="floating-card card-two">
          <div className="company-icon network">
            <img src="reseau-mondial.png" alt="tr" />
          </div>
          <div>
            <strong>Technicien Réseau</strong>
            <p>Abidjan • CDI</p>
          </div>
          <span className="match">91%</span>
        </div>

        <div className="hero-circle">
          <i className="fas fa-briefcase"></i>
        </div>
      </div>
    </section>
  );
}
