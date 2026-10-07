const STEPS = [
  {
    n: "01",
    img: "",
    title: "Créez votre profil",
    text: "Indiquez vos compétences, votre expérience, votre métier et vos préférences.",
  },
  {
    n: "02",
    img: "",
    title: "Découvrez les offres",
    text: "Notre système analyse votre profil pour trouver les emplois qui vous correspondent.",
  },
  {
    n: "03",
    img: "",
    title: "Postulez",
    text: "Choisissez votre opportunité et envoyez votre candidature directement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="fonctionnement">
      <div className="section-title center">
        <div>
          <span className="section-label">SIMPLE & RAPIDE</span>
          <h2>
            Trouvez votre emploi en <span>3 étapes</span>
          </h2>
        </div>
      </div>

      <div className="steps">
        {STEPS.map((step) => (
          <div className="step" key={step.n}>
            <div className="step-number">{step.n}</div>
            <img src={`/images/${step.img}`} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
