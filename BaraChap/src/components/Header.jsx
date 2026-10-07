import { useState } from "react";

export default function Header({ onOpenLogin, onOpenRegister }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <a href="#accueil" className="logo">
        <span>Bara</span>-chap
      </a>

      <nav className={`navbar ${open ? "active" : ""}`} id="navbar">
        <a href="#accueil" onClick={close}>Accueil</a>
        <a href="#emplois" onClick={close}>Emplois</a>
        <a href="#fonctionnement" onClick={close}>Comment ça marche</a>
        <a href="#apropos" onClick={close}>À propos</a>
      </nav>

      <div className="header-actions">
        <button className="btn-login" onClick={onOpenLogin}>
          Connexion
        </button>
        <button className="btn-register" onClick={onOpenRegister}>
          S'inscrire
        </button>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
    </header>
  );
}
