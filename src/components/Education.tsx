import "./styles/Career.css";

const Education = () => {
  return (
    <div className="career-section education-section section-container" id="education">
      <div className="career-container education-container">
        <h2>Education</h2>
        <div className="career-info">
          <div className="career-timeline education-timeline">
            <div className="career-dot education-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in education-info-in">
              <div className="career-role">
                <h4>MS in Computer Science</h4>
                <h5>Stony Brook University (SUNY), New York</h5>
              </div>
              <h3>Aug 2025 - May 2027</h3>
            </div>
            <p>
              Database Systems, Data Science Fundamentals, Human Computer
              Interaction.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in education-info-in">
              <div className="career-role">
                <h4>BS in Information Technology</h4>
                <h5>Netaji Subhas University of Technology, India</h5>
              </div>
              <h3>Aug 2019 - May 2023</h3>
            </div>
            <p>
              Probability and Statistics, Machine Learning, Distributed
              Systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
