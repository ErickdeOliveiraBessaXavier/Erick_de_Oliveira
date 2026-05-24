import React from "react";
import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
  const asset = (fileName) => `${process.env.PUBLIC_URL}/Imagens/${fileName}`;

  return (
    <div className="resume-page" id="resume-content">
      <div className="resume-container">
        {/* Header Section */}
        <header className="resume-header">
          <div className="resume-profile">
            <div className="profile-circle">
              <img src={asset("Foto_Sec_2.webp")} alt="Erick de Oliveira" />
            </div>
            <div className="header-info">
              <h1>Erick de Oliveira</h1>
              <h2>Desenvolvedor Full Stack & UX/UI Designer</h2>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} /> <span>erick.oliveira@email.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} /> <span>(85) 99428-3128</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faLinkedin} /> <span>linkedin.com/in/erick-de-oliveira</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faGithub} /> <span>github.com/ArierEdvolikice</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Fortaleza, CE</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faGlobe} /> <span>erickdeoliveira.dev</span>
            </div>
          </div>
        </header>

        <div className="resume-body">
          {/* Main Column */}
          <div className="resume-main">
            <section className="resume-section">
              <h3>Resumo Profissional</h3>
              <p>
                Desenvolvedor Full Stack com sólida base em Sistemas e Mídias Digitais pela UFC. Especialista em criar soluções digitais robustas, automações de processos e interfaces focadas em UX/UI. Experiência em integração de APIs, infraestrutura AWS e estratégias de performance digital.
              </p>
            </section>

            <section className="resume-section">
              <h3>Experiência Profissional</h3>
              <div className="resume-item">
                <div className="item-header">
                  <h4>Software Developer | Focco Brasil</h4>
                  <span>2024 - Presente</span>
                </div>
                <p>Desenvolvimento de soluções internas, automações e gerenciamento de infraestrutura AWS. Foco em escalabilidade e eficiência operacional.</p>
              </div>
              <div className="resume-item">
                <div className="item-header">
                  <h4>Full Stack Developer | Metashop</h4>
                  <span>2023 - 2024</span>
                </div>
                <p>Criação de interfaces responsivas e integração de APIs. Implementação de IA para otimização de e-commerce.</p>
              </div>
              <div className="resume-item">
                <div className="item-header">
                  <h4>Front-end Developer | AKI Agency</h4>
                  <span>2022 - 2023</span>
                </div>
                <p>Desenvolvimento de interfaces dinâmicas em código nativo e WordPress, com foco em fidelidade visual.</p>
              </div>
            </section>

            <section className="resume-section">
              <h3>Educação Acadêmica</h3>
              <div className="resume-item">
                <div className="item-header">
                  <h4>Pós-graduação em Desenvolvimento Full Stack</h4>
                  <span>Em andamento</span>
                </div>
                <p>Foco em arquitetura de sistemas, cloud e práticas modernas de dev.</p>
              </div>
              <div className="resume-item">
                <div className="item-header">
                  <h4>Sistemas e Mídias Digitais | UFC</h4>
                  <span>2017 - 2025</span>
                </div>
                <p>Bacharelado multidisciplinar em tecnologia e design.</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="resume-sidebar">
            <section className="sidebar-section">
              <h3>Hard Skills</h3>
              <ul className="skills-list">
                <li>React / Vue.js</li>
                <li>JavaScript / PHP</li>
                <li>Python / SQL</li>
                <li>AWS Cloud</li>
                <li>Git / GitHub</li>
                <li>WordPress</li>
                <li>UX/UI / Figma</li>
                <li>Adobe Suite</li>
              </ul>
            </section>

            <section className="sidebar-section">
              <h3>Idiomas</h3>
              <ul className="skills-list">
                <li>Português (Nativo)</li>
                <li>Inglês (Fluente)</li>
              </ul>
            </section>

            <section className="sidebar-section">
              <h3>Competências</h3>
              <ul className="skills-list">
                <li>Liderança</li>
                <li>Agilidade</li>
                <li>Visão de Produto</li>
                <li>Clean Code</li>
              </ul>
            </section>
          </aside>
        </div>
        
        {/* Decorative Footer Illustration */}
        <footer className="resume-footer-decoration">
          <div className="footer-line"></div>
          <p>Documento gerado digitalmente em erickdeoliveira.dev</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
