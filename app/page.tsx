"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

export default function Home() {

  const [modal, setModal] = useState("");

  /* OPTIMIZED FUNCTIONS */
  const openModal = useCallback((name: string) => {
    setModal(name);
  }, []);

  const closeModal = useCallback(() => {
    setModal("");
  }, []);

  return (
    <main className="container">

      {/* BACKGROUND IMAGE */}
      <div className="background-image"></div>

      {/* PROFILE */}
      <Image
        src="/profile.png"
        alt="Jan Dave Ancheta"
        width={170}
        height={170}
        className="profile-img"
        priority
      />

      {/* TITLE */}
      <h1 className="title">
        Jan Dave N. Ancheta
      </h1>

      {/* SUBTITLE */}
      <p className="subtitle">
        BSIT 2nd Year
      </p>

      {/* DESCRIPTION */}
      <p className="description">
        Bachelor of Science in Information Technology student with moderate skills
        in web development and cybersecurity. Loves motorcycle
        rides, modifying motorcycles, and cooking during free time.
      </p>

      {/* BUTTONS */}
      <div className="button-grid">

        <button
          className="nav-btn"
          onClick={() => openModal("about")}
        >
          About
        </button>

        <button
          className="nav-btn"
          onClick={() => openModal("skills")}
        >
          Skills
        </button>

        <button
          className="nav-btn"
          onClick={() => openModal("projects")}
        >
          Projects
        </button>

        <button
          className="nav-btn"
          onClick={() => openModal("hobbies")}
        >
          Hobbies
        </button>

        <button
          className="nav-btn"
          onClick={() => openModal("education")}
        >
          Education
        </button>

        <button
          className="nav-btn"
          onClick={() => openModal("awards")}
        >
          Awards
        </button>

        <button
          className="nav-btn"
          onClick={() => openModal("resume")}
        >
          Resume
        </button>

        <button
          className="nav-btn"
          onClick={() => openModal("contact")}
        >
          Contact
        </button>

        <button
          className="nav-btn"
          onClick={() => openModal("gallery")}
        >
          Gallery
        </button>

      </div>

      {/* MODAL */}
      {modal && (

        <div className="modal-overlay">

          <div className="modal-content">

            <button
              className="close-btn"
              onClick={closeModal}
            >
              Close
            </button>

            {modal === "about" && <About />}
            {modal === "skills" && <Skills />}
            {modal === "projects" && <Projects />}
            {modal === "hobbies" && <Hobbies />}
            {modal === "education" && <Education />}
            {modal === "awards" && <Awards />}
            {modal === "resume" && <Resume />}
            {modal === "contact" && <Contact />}
            {modal === "gallery" && <Gallery />}

          </div>

        </div>

      )}

    </main>
  );
}