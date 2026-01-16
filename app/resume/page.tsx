import type { Metadata } from 'next'
import './resume.css'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Something New, Ex-Palantir',
}

export default function Resume() {
  return (
    <div className="main-container">
      <div className="container-1-3">
        <div className="card">
          <h1 className="main">
            Kevin<br />Schaich
          </h1>
        </div>
        <div className="card">
          <p className="muted">
            <a href="mailto:schaich.kevin@gmail.com">schaich.kevin@gmail.com</a>
          </p>
          <p className="muted">
            <a href="tel:+14122973904">+1 (412) 297-3904</a>
          </p>
        </div>
        <div className="card">
          <img id="avatar" src="/img/avatar.jpg" alt="" />
        </div>
        <div className="card">
          <div className="card-header small-caps">Industry Knowledge</div>
          <div className="card-content">
            <br />
            <p className="muted">
              Oil & Gas (<a target="_blank" href="https://bp.com" rel="noopener noreferrer">BP</a>)
            </p>
            <p className="muted">
              Auto Manufacturing (
              <a target="_blank" href="https://stellantis.com" rel="noopener noreferrer">
                Stellantis/FCA
              </a>
              )
            </p>
            <p className="muted">
              Financial Services (
              <a target="_blank" href="https://fiserv.com" rel="noopener noreferrer">
                Fiserv/First Data
              </a>
              )
            </p>
            <p className="muted">
              National Defense (
              <a target="_blank" href="https://www.defense.gov" rel="noopener noreferrer">
                U.S. DOD
              </a>
              )
            </p>
            <p className="muted">Telecommunications</p>
            <p className="muted">Aviation</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header small-caps">TECHNICAL SKILLS</div>
          <div className="card-content">
            <br />
            <p className="muted">
              Python, PySpark, SQL, JavaScript, TypeScript, node.js, React, Redux, sklearn, Spark
              ML, AWS, Google Cloud Platform, Microsoft Azure, Firebase, HTML, CSS, jQuery, D3.js
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header small-caps">Tools & Technologies</div>
          <div className="card-content">
            <br />
            <p className="muted">
              GitHub, Slack, Docker, Git, Notion, Markdown, Photoshop, Illustrator, Quip, Figma,
              Sketch, Open Source, Google Docs, Google Sheets, Word, Excel, VS Code, Palantir
              Foundry
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header small-caps">SOCIAL</div>
          <div className="card-content">
            <br />
            <p className="muted">
              <a target="_blank" href="http://linkedin.com/in/kevinschaich" rel="noopener noreferrer">
                linkedin.com/in/kevinschaich
              </a>
            </p>
            <p className="muted">
              <a target="_blank" href="http://github.com/kevinschaich" rel="noopener noreferrer">
                github.com/kevinschaich
              </a>
            </p>
            <p className="muted">
              <a target="_blank" href="http://kevinschaich.io" rel="noopener noreferrer">
                kevinschaich.io
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-2-3">
        <div className="card">
          <div className="card-header small-caps">Experience</div>
          <div className="small-caps">Aug 2017 - Oct 2022 | NEW YORK, NY</div>
          <div className="job-title">Commercial Enterprise Lead</div>
          <div className="company">
            <a target="_blank" href="https://palantir.com" rel="noopener noreferrer">
              Palantir Technologies Inc.
            </a>
          </div>
          <ul>
            <li>
              Developed open-source PySpark libraries for efficient & distributed geospatial
              computing @ massive scale (200MM+ rows), saving global telecommunications provider
              $40MM+ annually on underground asset management & risk prevention
            </li>
            <li>
              Deployed Spark ML customer behavior model for upsell & cross-sell opportunities for
              post-booking flight ancillaries, capturing $10MM+ in annual untapped revenue for
              international aviation company within 8-week pilot
            </li>
            <li>
              Generated a dynamic B2B pricing model using Python & sklearn for 5MM+ merchants to
              determine optimal fee structure, yielding maximum revenue & minimum customer attrition
              for global financial services institution
            </li>
            <li>
              Integrated dynamic visualizations of oil well geometry with real-time streaming
              timeseries sensor data, using TypeScript, React, & Redux for global oil supermajor
            </li>
            <li>
              Managed & coordinated team of 4 Palantir Forward-Deployed Engineers & 30+ clients in
              bi-weekly agile sprints to determine clear project requirements & update key business
              stakeholders
            </li>
          </ul>

          <div className="small-caps">Summer 2016 | Redwood City, CA</div>
          <div className="job-title">Software Engineering Intern</div>
          <div className="company">
            <a target="_blank" href="https://shopkick.com" rel="noopener noreferrer">
              Shopkick Inc.
            </a>
          </div>
          <ul>
            <li>
              Developed architecture for scraping, processing, aggregation, & ingestion of over
              20,000 weekly grocery deals for 900+ Safeway retail locations
            </li>
            <li>
              Integrated keyword extraction & retail taxonomy/ontology to display categorical,
              location-based circular deals in-app on both iOS & Android
            </li>
            <li>
              Expanded existing codebase & leveraged tools such as AWS, Cloudfiles, Gflags, Scrapy,
              Twisted, Pylons, Thrift, SQLAlchemy, & Memcached
            </li>
          </ul>

          <div className="small-caps">Summer 2015 | Pleasanton, CA</div>
          <div className="job-title">Software Engineering Intern</div>
          <div className="company">
            <a target="_blank" href="https://workday.com" rel="noopener noreferrer">
              Workday Inc.
            </a>
          </div>
          <ul>
            <li>
              Designed & implemented division-wide REST API to be utilized by 900+ company-wide
              developers using Python 2.7 & Flask microframework
            </li>
            <li>Automated deployment & provisioning of Red Hat CentOS production servers</li>
            <li>
              Lead team of 4 developers in architecture of 4000+ line codebase using third-party
              tools such as LDAP, VMWare, Apache, Jenkins, & OpenStack education
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card-header small-caps">Education</div>
          <div className="small-caps">CLASS OF 2017 | Ithaca, New York</div>
          <div className="job-title">B.S. Computer Science</div>
          <div className="company">
            <a target="_blank" href="https://cornell.edu" rel="noopener noreferrer">
              Cornell University, College of Engineering
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
