export default function Footer() {
  return (
    <footer id="apropos">
      <div className="footer-content">
        <div>
          <a href="#accueil" className="logo">
            <span>Bara</span>-Chap
          </a>
          <p>Une nouvelle façon de connecter les talents aux bonnes opportunités.</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <a href="#accueil">Accueil</a>
          <a href="#emplois">Emplois</a>
          <a href="#fonctionnement">Comment ça marche</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Abidjan, Côte d'Ivoire</p>
          <p>bara-chap.ci</p>
        </div>
      </div>

      <div className="copyright">
        © 2026 Bara-Chap — Tous droits réservés.
      </div>
    </footer>
  );
}
