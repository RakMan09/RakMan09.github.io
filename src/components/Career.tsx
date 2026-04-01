import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section experience-section section-container" id="experience">
      <div className="career-container experience-container">
        <h2>Experience</h2>
        <div className="career-info">
          <div className="career-timeline experience-timeline">
            <div className="career-dot experience-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in experience-info-in">
              <div className="career-role">
                <h4>Software Dev Engineer</h4>
                <h5>Amazon · Bangalore</h5>
              </div>
              <h3>Aug 2024 - Jul 2025</h3>
            </div>
            <ul className="career-bullets">
              <li>
                Engineered a GDPR deletion pipeline in Java, Spring, and Hibernate
                across 15+ stores (RDS, DynamoDB, S3), adding validation and audit
                trails to reach 99.9% success.
              </li>
              <li>
                Automated 15K-32K/day jobs with data checks, metrics, alerts, and
                runbooks, meeting the 30-day SLA and cutting manual triage by 40%.
              </li>
              <li>
                Implemented a FAISS ANN retrieval service for Top-10 ranking across
                two countries, hitting P95 &lt; 200 ms at 500+ req/s with canaries and
                drift/latency monitors.
              </li>
              <li>
                Stabilized order workflows via idempotency, retries, and input
                validation, reducing cancellations by 95% and recurring Sev-2
                incidents through postmortems.
              </li>
              <li>
                Migrated traffic to Tardigrade load balancers using staged CI/CD and
                regression tests, lowering infra cost by about 10% while sustaining
                99.95% uptime.
              </li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in experience-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Paytm · Noida</h5>
              </div>
              <h3>Jun 2023 - Jul 2024</h3>
            </div>
            <ul className="career-bullets">
              <li>
                Improved onboarding completion by 10% with Java, Spring Boot, and
                MySQL, cutting verification from about five minutes to under one
                minute for 10K+ merchants via profiling and API batching.
              </li>
              <li>
                Trained a LightGBM risk model on 1M+ transactions with 30+ features,
                improving precision-recall vs rules and validating via A/B to drive
                7% fraud reduction.
              </li>
              <li>
                Delivered compliant data deletion REST APIs with CI/CD, code reviews,
                and unit/integration tests, enabling verified deletion for 1K+ users
                with improved audit traceability.
              </li>
              <li>
                Monitored 5M+ daily hits in Kibana, Grafana, and Redash, tuning
                dashboards and alerts to reduce downtime by 25% and speed triage by
                35%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
