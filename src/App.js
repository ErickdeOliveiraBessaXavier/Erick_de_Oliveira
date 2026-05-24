import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules";
import AOS from "aos"; // Importando AOS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faAws,
  faMeta,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faPython,
  faPhp,
  faGitAlt,
  faWordpress,
  faFlutter,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css"; // Importando o CSS do AOS
import "./App.css";
import Resume from "./Resume";

function App() {
  const asset = (fileName) => `${process.env.PUBLIC_URL}/Imagens/${fileName}`;
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação
      once: true, // Anima apenas na primeira vez que o elemento entra na viewport
    });
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Quanto tempo levará para o meu site estar operacional?",
      answer: (
        <>
          Tudo depende das suas necessidades:
          <br />
          Para uma landing page, conte entre{" "}
          <span className="highlight">uma e três semanas de produção.</span>
          <br />
          Um site completo de entre 5 e 10 páginas levará entre{" "}
          <span className="highlight">6 e 8 semanas.</span>
          <br />
          Esses prazos são apenas informativos e consideram a produção, nossos
          diferentes feedbacks e o tempo que você levará para redigir e
          recuperar seu conteúdo.
          <br />
          Se você já tiver tudo pronto antes do início do projeto, o tempo de
          entrega será{" "}
          <span className="highlight">drasticamente reduzido!</span>
        </>
      ),
    },
    {
      question: "Você oferece outros serviços além do design de sites?",
      answer: (
        <>
          Claro! Aqui estão alguns dos serviços que posso oferecer para você:
          <br />
          - Direção de arte
          <br />
          - Branding / Design gráfico
          <br />
          - Estratégia de comunicação
          <br />
        </>
      ),
    },
    {
      question: "Por que devo usar o Webflow para o meu site?",
      answer: (
        <>
          O Webflow é uma ferramenta avançada para negócios que valorizam tanto{" "}
          <span className="highlight">flexibilidade quanto eficiência.</span>
          <br />
          Trabalhei com WordPress por anos e a diferença é impressionante. Os
          benefícios para o seu negócio em termos de gerenciamento, desempenho e
          segurança fazem dele uma ferramenta no-code essencial!
          <br />
          Se você quiser saber mais sobre isso,{" "}
          <span className="highlight">convido você a me contatar</span> para uma
          consulta gratuita e discutir a relevância do Webflow para alcançar
          seus objetivos.
        </>
      ),
    },
    {
      question:
        "Preciso de um site e-commerce, isso está dentro das suas capacidades?",
      answer: (
        <>
          Se você precisa de um{" "}
          <span className="highlight">simples site e-commerce</span> ou de uma
          página de loja com alguns artigos para venda, então sim, posso me
          encarregar e desenvolvê-lo diretamente via Webflow.
          <br />
          No entanto, se você deseja um site e-commerce com centenas de produtos
          e necessidades específicas, então não sou a pessoa certa e o{" "}
          <span className="highlight">
            redirecionarei para outros prestadores de confiança
          </span>
          .
        </>
      ),
    },
  ];

  const skills = [
    { name: "JavaScript", icon: faJs, kind: "icon" },
    { name: "HTML5", icon: faHtml5, kind: "icon" },
    { name: "CSS3", icon: faCss3Alt, kind: "icon" },
    { name: "React", icon: faReact, kind: "icon" },
    { name: "Python", icon: faPython, kind: "icon" },
    { name: "PHP", icon: faPhp, kind: "icon" },
    { name: "AWS", icon: faAws, kind: "icon" },
    { name: "Git", icon: faGitAlt, kind: "icon" },
    { name: "SQL", icon: asset("Sql.png"), kind: "image" },
    { name: "WordPress", icon: faWordpress, kind: "icon" },
    { name: "Bubble.io", icon: asset("Bubble.png"), kind: "image" },
    { name: "Meta Ads Manager", icon: faMeta, kind: "icon" },
    { name: "Flutter", icon: faFlutter, kind: "icon" },
    { name: "Vue.js", icon: faVuejs, kind: "icon" },
    { name: "Photoshop", icon: asset("PS.png"), kind: "image" },
    { name: "Illustrator", icon: asset("Ilustrator.png"), kind: "image" },
    { name: "Premiere", icon: asset("premiere.png"), kind: "image" },
  ];

  return (
    <div className="App">
      {/* Cabeçalho */}
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobremim">Sobre Mim</a>
            </li>
            <li>
              <a href="#timeline">Carreira</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
        </nav>
      </header>

      <section
        id="home"
        className="section-home"
        style={{ backgroundImage: `url(${asset("Fundo_Home.jpg")})` }}
      >
        <div className="home-container">
          <div data-aos="fade-right" className="home-text">
            <h1>
              Desenvolvedor<br></br>
              <span className="designer-text">& Designer</span>
            </h1>
            <p>
              Sou <span className="highlight">Erick de Oliveira</span>, <span className="highlight">Desenvolvedor Full Stack</span> com experiência em <span className="highlight">UX/UI</span>, <span className="highlight">automação de processos</span>, <span className="highlight">aplicativos nativos</span> e ferramentas no-code como <span className="highlight">Bubble.io</span> e <span className="highlight">WordPress</span>. Atualmente atuo na <span className="highlight">Focco Brasil</span>, focado em desenvolvimento interno e integração de APIs. Tenho domínio em <span className="highlight">Python</span>, <span className="highlight">JavaScript</span>, <span className="highlight">PHP</span>, <span className="highlight">SQL</span> e sou fluente em inglês.
            </p>

            <a
              href="https://wa.me/5585994283128?text=Diga-me%20o%20que%20precisa%20e%20retorno%20assim%20que%20poss%C3%ADvel!%20Obrigado."
              data-aos="fade-in"
              data-aos-delay="600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Contate-me</button>
            </a>
          </div>
          <div data-aos="fade-in" className="home-image">
            <img
              src={asset("Foto_Sec_2.webp")}
              alt="Erick de Oliveira"
              className="profile-photo"
            />
          </div>
        </div>
        <div className="gradient-bottom"></div>
      </section>

      <section className="section-about-skills">
        <div id="sobremim" data-aos="fade-up" className="about-me">
          <h1>Sobre Mim</h1>
          <p>
            Sou <span className="highlight">Erick de Oliveira</span>,
            <span className="highlight">Desenvolvedor Full Stack</span>
            com atuação voltada para a criação de soluções digitais robustas,
            eficientes e orientadas a resultados. Sou formado em
            <span className="highlight">Sistemas e Mídias Digitais pela Universidade Federal do Ceará (UFC)</span>
            e atualmente curso a
            <span className="highlight">
              Pós-graduação em Desenvolvimento Full Stack
            </span>
            , aprofundando minha formação em arquitetura de aplicações,
            integração de sistemas e boas práticas de desenvolvimento.
            <br />
            <br />
            Tenho experiência no desenvolvimento de
            <span className="highlight"> aplicativos nativos</span>,
            <span className="highlight"> automações</span>, interfaces e
            soluções web com foco em performance, escalabilidade e boa
            experiência de uso. Também conheço ferramentas da área como
            <span className="highlight"> Bubble.io</span> e
            <span className="highlight"> WordPress</span>, que utilizo como
            parte do meu repertório técnico quando o contexto do projeto pede.
            Além disso, trabalho com <span className="highlight">UX/UI Design</span>,
            priorizando produtos intuitivos, responsivos e alinhados às
            necessidades do negócio.
            <br />
            <br />
            Ao longo da minha trajetória, venho trabalhando com
            <span className="highlight"> JavaScript</span>,
            <span className="highlight"> PHP</span>,
            <span className="highlight"> Python</span> e ferramentas de
            automação, inteligência artificial, CRM e cloud. Também tenho
            conhecimento em <span className="highlight">AWS</span>, com
            experiência em ambientes, servidores, monitoramento e suporte à
            infraestrutura das aplicações. Além disso, domino ferramentas de
            mídia paga como o <span className="highlight">Meta Ads Manager</span>,
            o que amplia minha visão sobre produto, marketing e resultado.
            Atualmente, na <span className="highlight">Focco Brasil</span>,
            atuo na evolução de processos internos, integrações e soluções que
            exigem estabilidade, escalabilidade e ganho de eficiência.
            Fluente em português e inglês, valorizo colaboração, visão
            analítica e entrega consistente de resultados.
          </p>
        </div>

        <h1 data-aos="fade-up" style={{ textAlign: "center" }}>
          Habilidades
        </h1>

        <div data-aos="fade-up" className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">
                {skill.kind === "image" ? (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} Icon`}
                    className="Icons-Habilidades"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="Icons-Habilidades"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://github.com/ErickdeOliveiraBessaXavier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">Ver GitHub</button>
          </a>
        </div>
      </section>

      <section id="timeline" className="Timeline">
        <h1 data-aos="fade-up">Educação e Experiência</h1>
        <div className="experience-grid">
          <div className="outer">
            <div className="card" data-aos="fade-up">
              <div className="info">
                <h3 className="title">Software Developer | Focco Brasil</h3>
                <p>
                  Atuo no desenvolvimento de soluções internas, automações e ferramentas voltadas à otimização de processos operacionais e suporte ao ecossistema de e-commerce da empresa. Trabalho com integração de sistemas, criação de scripts e aplicações sob demanda, além da análise e melhoria contínua de fluxos internos.
                  <br />
                  <br />
                  Também participo da administração e configuração de ambientes em AWS, incluindo gerenciamento de servidores, monitoramento de performance, análise de cache e suporte à infraestrutura das aplicações. Tenho experiência na identificação de gargalos, redução de tarefas manuais e implementação de soluções voltadas à escalabilidade, estabilidade e ganho de eficiência operacional.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="info">
                <h3 className="title">Metashop | 2023 - 2024</h3>
                <p>
                  Atuei como <span className="highlight">Desenvolvedor Full Stack</span>, onde criei interfaces de usuário intuitivas e responsivas, combinando design e funcionalidade para proporcionar uma experiência fluida. Desenvolvi e implementei workflows complexos voltados para a automação de processos, além de criar elementos gráficos e visuais que enriqueceram as páginas web. Também fui <span className="highlight">responsável pela integração de APIs e funcionalidades externas</span>, sempre com foco na otimização da experiência do usuário (UX) e na eficiência das interfaces (UI). Realizei testes rigorosos e depuração constante, garantindo a qualidade e a performance de cada projeto.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="info">
                <h3 className="title">AKI Agency | 2022 - 2023</h3>
                <p>
                  Atuei como <span className="highlight">Desenvolvedor Front-end</span> na AKI Agency entre 2022 e 2023, onde fui responsável pelo desenvolvimento de interfaces responsivas em <span className="highlight">código nativo e WordPress</span>. Criei páginas web dinâmicas e otimizadas, além de projetar e implementar elementos visuais para projetos online. Colaborei ativamente com equipes de design e desenvolvimento, assegurando a qualidade e a coesão em cada etapa dos projetos.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="info">
                <h3 className="title">UFC | Sistemas e Mídias Digitais</h3>
                <p>
                  Bacharelado em Sistemas e Mídias Digitais (2017 - 2025). Formação multidisciplinar focada em design de interfaces, desenvolvimento de sistemas multimídia, UX/UI, jogos digitais e animação, proporcionando uma base sólida para a criação de soluções digitais inovadoras.
                </p>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <div className="info info-diferente">
                <h3 className="title">Pós-graduação em Desenvolvimento Full Stack</h3>
                <p>
                  Pós-graduação em Desenvolvimento Full Stack, com foco em arquitetura de aplicações, desenvolvimento web e mobile, integração de sistemas, práticas modernas de front-end e back-end, além de automação e infraestrutura em nuvem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="Projetos"
        style={{ backgroundImage: `url(${asset("Fundo_Projetos.jpg")})` }}
      >
        <h1 data-aos="zoom-in">Últimos Projetos</h1>
        <Swiper
    data-aos="zoom-in"
    data-aos-delay="300"
    slidesPerView={3} // Padrão: 3 slides visíveis
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true} // Setas de navegação habilitadas
    modules={[Pagination, Navigation]}
    className="Meu-Swiper"
    breakpoints={{
      // Quando a largura da janela é >= 1024px
      1024: {
        slidesPerView: 3, // 3 slides visíveis
        spaceBetween: 30,
      },
      // Quando a largura da janela é >= 768px
      768: {
        slidesPerView: 2, // 2 slides visíveis
        spaceBetween: 20,
      },
      // Quando a largura da janela é < 768px
      0: {
        slidesPerView: 1, // Apenas 1 slide visível
        spaceBetween: 10,
      },
    }}
  >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide-content">
              <img
                src={asset("Ferrovia.jpg")}
                alt="Projeto 1"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Ferrovia | MIS</h4>
                <p>
                  Exposição sobre a história das ferrovias no Ceará, com fotos e
                  depoimentos.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide-content">
              <img
                src={asset("Farkas.jpg")}
                alt="Projeto 2"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Farkas | MIS</h4>
                <p>
                  Homenagem ao fotógrafo Thomaz Farkas, retratando o Brasil em
                  transformação.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slide-content">
              <img
                src={asset("Metashop.jpg")}
                alt="Projeto 3"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Metashop</h4>
                <p>
                  Plataforma de e-commerce personalizada com IA para otimização
                  de vendas.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img
                src={asset("Projeto_Cadastro_UFC.jpg")}
                alt="Projeto 4"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Cadastro Horas | UFC</h4>
                <p>
                  Sistema de gestão de horas acadêmicas e profissionais da UFC.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img
                src={asset("Mavic.jpg")}
                alt="Projeto 5"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Mavic Conceito</h4>
                <p>
                  Loja especializada em cadeiras de design moderno e ergonômico
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img
                src={asset("WaveUs.jpg")}
                alt="Projeto 6"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>WaveUs</h4>
                <p>
                  Plataforma de eventos e ingressos com integração online e
                  presencial.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img
                src={asset("Dr_Saude.jpg")}
                alt="Projeto 7"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Portal Dr. Saúde</h4>
                <p>
                  Plataforma informativa com artigos de saúde, dicas de
                  bem-estar e orientações médicas.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="faq" className="faq__wrapper" data-aos="fade-up">
        <h1>Dúvidas Comuns</h1>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <FontAwesomeIcon 
                icon={activeIndex === index ? faChevronUp : faChevronDown} 
              />
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </section>

      <section
        id="Contrate-me"
        className="contrate-me"
        style={{ backgroundImage: `url(${asset("Fundo_Contate_Me.jpg")})` }}
      >
        <h4 data-aos="fade-in">Vamos Conversar?</h4>
        <p data-aos="fade-in">
          Agende uma consultoria gratuita para discutirmos como posso ajudar no
          seu próximo grande projeto.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/5585994283128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Agendar Agora</button>
          </a>
          <button onClick={() => window.print()} className="github-button">
            Baixar Currículo
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="social-media">
          <a href="https://linkedin.com/in/erick-de-oliveira-733ba174/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com/arier_edvolikice/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/ErickdeOliveiraBessaXavier" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobremim">Sobre</a></li>
          <li><a href="#timeline">Carreira</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
        <p>© 2024 Erick de Oliveira | Todos os direitos reservados</p>
      </footer>

      {/* Resume Component for Printing */}
      <div className="resume-print-only">
        <Resume />
      </div>
    </div>
  );
}

export default App;
