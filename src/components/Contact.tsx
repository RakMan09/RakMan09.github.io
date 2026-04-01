import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/rakshit-mangal/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - rakshit-mangal
              </a>
            </p>
            <p>
              <a
                href="mailto:rakshitmangal@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email - rakshitmangal@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>MS in Computer Science, Stony Brook University (SUNY) - Aug 2025 - May 2027</p>
            <p>B.Tech Information Technology, NSUT - Aug 2019 - May 2023</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/RakMan09"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rakshit-mangal/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:rakshitmangal@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+19342239041"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rakshit Mangal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
