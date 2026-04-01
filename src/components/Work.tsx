import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "PolicyLLM Support Bot",
    category: "Policy-grounded LLM Support Automation",
    tools: "Python, FastAPI, PostgreSQL, Transformers, LoRA, Docker, Streamlit",
    image: "/images/policy_llm.png",
    link: "https://github.com/RakMan09/policyLLM-support-bot",
  },
  {
    title: "Visual Analytics for Agentic AI Systems",
    category: "IBM Research - Trace Replay and Failure Analytics",
    tools: "React TypeScript, Python, DuckDB, Parquet, JSONL, D3",
    image: "/images/ibm_research.png",
    link: "https://github.com/RakMan09",
  },
  {
    title: "Academic Research Copilot",
    category: "ArXiv RAG and Evaluation Dashboard",
    tools: "Python, Streamlit, Sentence-Transformers, FAISS, OpenAI API",
    image: "/images/academic_research.png",
    link: "https://github.com/RakMan09/academic-research-copilot",
  },
  {
    title: "Touchless Gesture Mobile Control",
    category: "Mobile Gesture Inference and Device Actions",
    tools: "TensorFlow, Kotlin, MediaPipe, Android, TFLite",
    image: "/images/touchless_gesture_control.png",
    link: "https://github.com/RakMan09/Touchless-Gesture-Control",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="projects">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
