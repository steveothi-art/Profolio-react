import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Jobs from "./components/Jobs";
import HowItWorks from "./components/HowItWorks";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer";

export default function App() {
  // Recherche et filtres : un seul état, partagé entre Hero et Jobs
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState("");
  const [contract, setContract] = useState("");
  const [category, setCategory] = useState("");

  // "login" | "register" | null
  const [authMode, setAuthMode] = useState(null);

  const resetAll = () => {
    setSearch("");
    setPlace("");
    setContract("");
    setCategory("");
  };

  return (
    <>
      <Header
        onOpenLogin={() => setAuthMode("login")}
        onOpenRegister={() => setAuthMode("register")}
      />

      <main>
        <Hero
          search={search}
          place={place}
          setSearch={setSearch}
          setPlace={setPlace}
        />
        <Stats />
        <Jobs
          search={search}
          place={place}
          contract={contract}
          category={category}
          setContract={setContract}
          setCategory={setCategory}
          onReset={resetAll}
        />
        <HowItWorks />
      </main>

      <AuthModal mode={authMode} setMode={setAuthMode} />
      <Footer />
    </>
  );
}
