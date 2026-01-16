import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Something New, Ex-Palantir',
}

export default function Resume() {
  return (
    <div
      className="font-light text-white block"
      style={{
        zoom: '150%',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <div className="w-1/3 inline-block align-top py-8 md:w-full md:pt-8 md:pb-0">
        <div className="px-8 py-3">
          <h1 className="p-0 m-0 font-bold text-2xl leading-6 tracking-[-0.04em] text-white text-left mb-4">
            Kevin<br />Schaich
          </h1>
        </div>
        <div className="px-8 py-3">
          <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white mb-2">
            <a href="mailto:schaich.kevin@gmail.com" className="text-white no-underline">
              schaich.kevin@gmail.com
            </a>
          </p>
          <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white mb-2">
            <a href="tel:+14122973904" className="text-white no-underline">
              +1 (412) 297-3904
            </a>
          </p>
        </div>
        <div className="px-8 py-3">
          <img className="rounded-full w-[100px] mb-4" src="/img/avatar.jpg" alt="" />
        </div>
        <div className="px-8 py-3">
          <div className="pb-1.5 mb-1.5 border-b-[0.5px] border-white/30 text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            Industry Knowledge
          </div>
          <div>
            <br />
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white mb-1">
              Oil & Gas (
              <a target="_blank" href="https://bp.com" rel="noopener noreferrer" className="text-white no-underline">
                BP
              </a>
              )
            </p>
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white mb-1">
              Auto Manufacturing (
              <a
                target="_blank"
                href="https://stellantis.com"
                rel="noopener noreferrer"
                className="text-white no-underline"
              >
                Stellantis/FCA
              </a>
              )
            </p>
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white mb-1">
              Financial Services (
              <a target="_blank" href="https://fiserv.com" rel="noopener noreferrer" className="text-white no-underline">
                Fiserv/First Data
              </a>
              )
            </p>
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white mb-1">
              National Defense (
              <a
                target="_blank"
                href="https://www.defense.gov"
                rel="noopener noreferrer"
                className="text-white no-underline"
              >
                U.S. DOD
              </a>
              )
            </p>
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white mb-1">
              Telecommunications
            </p>
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white mb-1">Aviation</p>
          </div>
        </div>

        <div className="px-8 py-3">
          <div className="pb-1.5 mb-1.5 border-b-[0.5px] border-white/30 text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            TECHNICAL SKILLS
          </div>
          <div>
            <br />
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white">
              Python, PySpark, SQL, JavaScript, TypeScript, node.js, React, Redux, sklearn, Spark
              ML, AWS, Google Cloud Platform, Microsoft Azure, Firebase, HTML, CSS, jQuery, D3.js
            </p>
          </div>
        </div>

        <div className="px-8 py-3">
          <div className="pb-1.5 mb-1.5 border-b-[0.5px] border-white/30 text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            Tools & Technologies
          </div>
          <div>
            <br />
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white">
              GitHub, Slack, Docker, Git, Notion, Markdown, Photoshop, Illustrator, Quip, Figma,
              Sketch, Open Source, Google Docs, Google Sheets, Word, Excel, VS Code, Palantir
              Foundry
            </p>
          </div>
        </div>

        <div className="px-8 py-3">
          <div className="pb-1.5 mb-1.5 border-b-[0.5px] border-white/30 text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            SOCIAL
          </div>
          <div>
            <br />
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white">
              <a
                target="_blank"
                href="http://linkedin.com/in/kevinschaich"
                rel="noopener noreferrer"
                className="text-white no-underline"
              >
                linkedin.com/in/kevinschaich
              </a>
            </p>
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white">
              <a
                target="_blank"
                href="http://github.com/kevinschaich"
                rel="noopener noreferrer"
                className="text-white no-underline"
              >
                github.com/kevinschaich
              </a>
            </p>
            <p className="border-0 p-0 m-0 text-[10px] leading-[14px] tracking-[-0.2px] text-white">
              <a target="_blank" href="http://kevinschaich.io" rel="noopener noreferrer" className="text-white no-underline">
                kevinschaich.io
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 inline-block align-top py-8 md:w-full md:pt-8 md:pb-0">
        <div className="px-8 py-3">
          <div className="pb-2 mb-2 border-b-[0.5px] border-white/30 text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            Experience
          </div>
          <div className="text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            Aug 2017 - Oct 2022 | NEW YORK, NY
          </div>
          <div className="font-semibold text-[11px] leading-[14px] text-justify tracking-[-0.03em] text-white">
            Commercial Enterprise Lead
          </div>
          <div className="font-normal text-[11px] leading-[14px] text-justify tracking-[-0.03em] text-white">
            <a target="_blank" href="https://palantir.com" rel="noopener noreferrer" className="text-white no-underline">
              Palantir Technologies Inc.
            </a>
          </div>
          <ul className="font-light text-white block" style={{ display: 'block' }}>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px] block">
              Developed open-source PySpark libraries for efficient & distributed geospatial
              computing @ massive scale (200MM+ rows), saving global telecommunications provider
              $40MM+ annually on underground asset management & risk prevention
            </li>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px]">
              Deployed Spark ML customer behavior model for upsell & cross-sell opportunities for
              post-booking flight ancillaries, capturing $10MM+ in annual untapped revenue for
              international aviation company within 8-week pilot
            </li>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px]">
              Generated a dynamic B2B pricing model using Python & sklearn for 5MM+ merchants to
              determine optimal fee structure, yielding maximum revenue & minimum customer attrition
              for global financial services institution
            </li>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px]">
              Integrated dynamic visualizations of oil well geometry with real-time streaming
              timeseries sensor data, using TypeScript, React, & Redux for global oil supermajor
            </li>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px]">
              Managed & coordinated team of 4 Palantir Forward-Deployed Engineers & 30+ clients in
              bi-weekly agile sprints to determine clear project requirements & update key business
              stakeholders
            </li>
          </ul>

          <div className="text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            Summer 2016 | Redwood City, CA
          </div>
          <div className="font-semibold text-[11px] leading-[14px] text-justify tracking-[-0.03em] text-white">
            Software Engineering Intern
          </div>
          <div className="font-normal text-[11px] leading-[14px] text-justify tracking-[-0.03em] text-white">
            <a target="_blank" href="https://shopkick.com" rel="noopener noreferrer" className="text-white no-underline">
              Shopkick Inc.
            </a>
          </div>
          <ul className="font-light text-white block" style={{ display: 'block' }}>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px] block">
              Developed architecture for scraping, processing, aggregation, & ingestion of over
              20,000 weekly grocery deals for 900+ Safeway retail locations
            </li>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px]">
              Integrated keyword extraction & retail taxonomy/ontology to display categorical,
              location-based circular deals in-app on both iOS & Android
            </li>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px]">
              Expanded existing codebase & leveraged tools such as AWS, Cloudfiles, Gflags, Scrapy,
              Twisted, Pylons, Thrift, SQLAlchemy, & Memcached
            </li>
          </ul>

          <div className="text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            Summer 2015 | Pleasanton, CA
          </div>
          <div className="font-semibold text-[11px] leading-[14px] text-justify tracking-[-0.03em] text-white">
            Software Engineering Intern
          </div>
          <div className="font-normal text-[11px] leading-[14px] text-justify tracking-[-0.03em] text-white">
            <a target="_blank" href="https://workday.com" rel="noopener noreferrer" className="text-white no-underline">
              Workday Inc.
            </a>
          </div>
          <ul className="font-light text-white block" style={{ display: 'block' }}>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px] block">
              Designed & implemented division-wide REST API to be utilized by 900+ company-wide
              developers using Python 2.7 & Flask microframework
            </li>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px]">
              Automated deployment & provisioning of Red Hat CentOS production servers
            </li>
            <li className="border-0 p-0 m-1 text-[10px] leading-[14px] tracking-[-0.2px]">
              Lead team of 4 developers in architecture of 4000+ line codebase using third-party
              tools such as LDAP, VMWare, Apache, Jenkins, & OpenStack education
            </li>
          </ul>
        </div>

        <div className="px-8 py-3">
          <div className="pb-1.5 mb-1.5 border-b-[0.5px] border-white/30 text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            Education
          </div>
          <div className="text-[9px] leading-[14px] text-justify tracking-[0.2em] uppercase text-white">
            CLASS OF 2017 | Ithaca, New York
          </div>
          <div className="font-semibold text-[11px] leading-[14px] text-justify tracking-[-0.03em] text-white">
            B.S. Computer Science
          </div>
          <div className="font-normal text-[11px] leading-[14px] text-justify tracking-[-0.03em] text-white">
            <a target="_blank" href="https://cornell.edu" rel="noopener noreferrer" className="text-white no-underline">
              Cornell University, College of Engineering
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
