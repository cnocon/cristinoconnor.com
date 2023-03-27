import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { MdMobileFriendly } from "react-icons/md"
import { BsFillPersonCheckFill, BsGit } from "react-icons/bs"
import { SiTypescript } from "react-icons/si"
import { DiRuby } from "react-icons/di"
import { BiTestTube } from "react-icons/bi"

const data = {
  resume: {
    technicalSkills: [
      {
        label: "JavaScript",
        percentage: 90,
        icon: IoLogoJavascript
      },
      {
        label: "SCSS, LESS, CSS",
        percentage: 90,
        icon: IoLogoCss3
      },
      {
        label: "Responsive Web Development",
        percentage: 80,
        icon: MdMobileFriendly
      },
      {
        label: "Git",
        percentage: 80,
        icon: BsGit
      },
      {
        label: "React",
        percentage: 75,
        icon: FaReact
      },
      {
        label: "a11y",
        percentage: 70,
        icon: BsFillPersonCheckFill
      },
      {
        label: "TypeScript",
        percentage: 65,
        icon: SiTypescript
      },
      {
        label: "Ruby",
        percentage: 50,
        icon: DiRuby
      },
      {
        label: "RTL & Jest",
        percentage: 40,
        icon: BiTestTube
      }
    ],
    softSkills: ["Empathy to be an effective teammate", "Organizational abilities for managing projects independently", "Research skills to find the best solutions", "Enthusiasm and passion for front end work", "Positive attitude and willingness to handle a wide variety of responsibilities", "Effective communicator with people from varying technical backgrounds", "Dedicated to ongoing professional development", "5+ years of Agile experience", "12+ years of experience working on web applications in various capacities"],
    workHistory: [ {
      year: "2022-23",
      title: "Software Engineer",
      location: "Chicago, IL (remote)",
      company: "CityBase, Inc.",
      start: "08/01/2022",
      end: "Present",
      companyUrl: "https://citybase.com",
      description: [ `Nurture and scale the front ends of several client facing applications related to making payments`, `Care for and grow a proprietary React component library, and integrate those components successfully into myriad contexts`, `Incrementally set up and convert JavaScript codebases to use TypeScript (front end and full stack)`, `Participate in design critiques (along with other engineers) to help facilitate cross-discipline knowledge transfer and early detection of potential gotchas in development` ],
      technologies: [ "AdvancedJS", "React", "TypeScript", "Functional Programming", "a11y" ],
      honors: []
    },
    {
      year: "2022",
      title: "Sr. Front End Engineer",
      location: "San Francisco, CA (remote)",
      company: "Nabis",
      start: "01/01/2022",
      end: "06/01/2022",
      companyUrl: "https://nabis.com",
      description: [ `Worked with product managers and graphic designers to overhaul the existing UI/UX with the goal of creating a single pristine user experience throughout the application ecosystem`, `Oversaw the introduction of a new design system to the codebase using Chakra UI's component library, extending Chakra UI where needed for custom components using React, GraphQL, CSS, and SCSS`, `Supervised two consultants in developing reusable components for Nabis' new design system` ],
      technologies: [ "ES6", "React", "TypeScript", "ChakraUI", "SASS" ],
      honors: []
    },
    {
      title: "Software Engineer",
      company: "Vivint Smart Home, Inc",
      location: "Lehi, UT",
      start: "Feb 2021",
      end: "Dec 2021",
      companyUrl: "https://www.vivint.com/",
      description: [ "Coded the front end for multiple JavaScript-based sales applications, leveraging technologies including Vue.js, Typescript, LESS, and Ember.js", "Spearheaded the creation of new documentation and code quality standards for front end development in sales", "Provided full stack on-call support for emergencies, leveraging logs and data from Splunk, Dynatrace, and AppDynamics to quickly identify and fix critical bugs under pressure (in a 24/7 rotation for a week each month)", "Created a new onboarding process for front end and full stack engineers in sales (for current employees and new hires) that aimed to reduce sales’ isolation from the company’s broader front end initiatives and practices" ],
      technologies: [ "Ember", "Vue", "LESS", "TypeScript" ],
      honors: [ { name: "Innovation Week Presenter", date: "Nov 2021" } ]
    },
    {
      title: "Front End Developer II",
      company: "Clearlink",
      location: "Salt Lake City, UT",
      start: "Feb 2020",
      end: "Feb 2021",
      companyUrl: "https://www.clearlink.com/",
      description: [ "Used mockups to code responsive websites using Handlebars, SCSS, JavaScript, and a proprietary component library", "Assisted in maintaining and extending applications using JavaScript", "Mentored and supported junior developers", "Extended functionality of component library core package", "Supported a broad range of browsers and devices with a focus on accessibility" ],
      technologies: [ "JavaScript", "PHP", "React", "Gatsby" ],
      honors: [ { name: "F.E.D. Project Showcase Winner", date: "July 2020" }, { name: "F.E.D. Project Showcase Winner", date: "Oct 2020" } ]
    },
    {
      title: "Software Engineer",
      company: "The Scion Group",
      location: "Chicago, IL",
      start: "Apr 2018",
      end: "Jun 2019",
      companyUrl: "https://www.thesciongroup.com/",
      description: ["Increased average page load speed by a factor of four", "Updated in-house business intelligence software to use StimulusJS, DataTables, Highcharts, Rails 5, and data from multiple third party APIs including ADP, Entrata, Centro, and Chatmeter", "Redesigned UI/UX for a more modern, clean look and feel", "Aggregated over a dozen third party data sources into a data warehouse via an ETL application"],
      technologies: [ "Ruby", "Rails", "JavaScript", "SQL" ],
      honors: []
    }
    ]
  }
}

export default data