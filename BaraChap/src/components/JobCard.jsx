export default function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-top">
        <div className={`company-logo ${job.logoClass}`}>
          <img src={`/application.png/${job.logo}`} alt={job.title} />
        </div>
      </div>

      <span className="job-category">{job.category}</span>

      <h3>{job.title}</h3>

      <p className="company">
        <img src={`/images/${job.companyIcon}`} alt="entreprise" />
        {job.company}
      </p>

      <p className="location">
        <img src="epingle.png" alt="lieu" />
        {job.location}
      </p>

      <div className="job-info">
        <span>{job.contract}</span>
        <span>{job.salary}</span>
      </div>

      <div className="job-bottom">
        <small>{job.posted}</small>
        <button
          className="apply-btn"
          onClick={() =>
            alert("Page détaillée de l'offre à connecter au backend PHP.")
          }
        >
          Voir l'offre
        </button>
      </div>
    </article>
  );
}
