// mode : "login" | "register" | null (fermé)
export default function AuthModal({ mode, setMode }) {
  const close = () => setMode(null);

  const closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) close();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO : fetch("/api/login.php", ...)
    alert("Connexion enregistrée. Le PHP pourra maintenant traiter les données.");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO : fetch("/api/register.php", ...)
    alert("Inscription enregistrée. Le PHP pourra maintenant envoyer les données vers MySQL.");
  };

  return (
    <>
      {/* CONNEXION */}
      <div
        className={`modal ${mode === "login" ? "active" : ""}`}
        onClick={closeOnOverlay}
      >
        <div className="modal-content">
          <button className="close-modal" onClick={close}>&times;</button>
            <div className="logo">
              <span>Bara</span>-chap
            </div>
         
          <h2>Connexion</h2>
          <p>Connectez-vous à votre compte.</p>

          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Adresse e-mail" required />
            <input type="password" placeholder="Mot de passe" required />
            <button type="submit" className="modal-btn">Se connecter</button>
          </form>

          <p className="switch-modal">
            Vous n'avez pas de compte ?{" "}
            <button onClick={() => setMode("register")}>S'inscrire</button>
          </p>
        </div>
      </div>

      {/* INSCRIPTION */}
      <div
        className={`modal ${mode === "register" ? "active" : ""}`}
        onClick={closeOnOverlay}
      >
        <div className="modal-content">
          <button className="close-modal" onClick={close}>&times;</button>

          <div className="logo">
            <span>Bara</span>-chap
          </div>

          <h2>Créer un compte</h2>
          <p>Créez votre profil professionnel.</p>

          <form onSubmit={handleRegister}>
            <div className="form-row">
              <input type="text" placeholder="Nom" required />
              <input type="text" placeholder="Prénom" required />
            </div>
            <input type="email" placeholder="Adresse e-mail" required />
            <input type="text" placeholder="Métier / compétence" required />
            <input type="tel" placeholder="Téléphone" required />
            <input type="password" placeholder="Mot de passe" required />
            <button type="submit" className="modal-btn">Créer mon compte</button>
          </form>

          <p className="switch-modal">
            Vous avez déjà un compte ?{" "}
            <button onClick={() => setMode("login")}>Se connecter</button>
          </p>
        </div>
      </div>
    </>
  );
}
