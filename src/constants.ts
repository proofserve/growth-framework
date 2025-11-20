export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'SERVERS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}

export type Track = {
  displayName: string,
  category: string,
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {
  'MOBILE': Track,
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,

  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,

  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,

  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Mobile",
    "category": "A",
    "description": "Develops expertise in native mobile platform engineering, such as iOS or Android",
    "milestones": [{
      "summary": "Works effectively within established iOS or Android architectures, following current best practices",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Added existing button to a different screen",
        "Implemented a follow or subscribe button feature",
        "Fetched and displayed a new list view using existing item styles",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Defines new useful and appropriate data models",
        "Creates simple new screens and flows",
        "Migrates code from old patterns to new patterns",
      ],
      "examples": [
        "Upgraded image loading library to a new major version",
        "Added support for rendering a new type of content item",
        "Prototyped a simple new feature quickly",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": [
        "Implements complex features with a large product surface area",
        "Works effectively with reactive programming frameworks",
        "Adds support for new platform features after major OS version upgrades",
      ],
      "examples": [
        "Designed caching strategy for offline functionality",
        "Built content reader with pagination and state management",
        "Informed the team about recent best practice changes and deprecations",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive animations that bring delight",
      ],
      "examples": [
        "Upgraded dependency manager to a new major version",
        "Designed architecture for fetching and rendering dynamic content",
        "Migrated persistence layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of mobile platforms",
      ],
      "examples": [
        "Defined and drove complete migration plan to modern language (Swift or Kotlin)",
        "Implemented advanced UI patterns before platform support existed",
        "Pioneered application-level abstractions for scalable architecture",
      ],
    }],
  },

  "WEB_CLIENT": {
    "displayName": "Web client",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "Uses CSS appropriately, following style guide",
      ],
      "examples": [
        "Implemented sticky footer on a page",
        "Added action to dismiss an item from a list",
        "Built a new screen using existing component templates",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "Built payment input component with validation",
        "Created shared button component library",
        "Built modal dialog system",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Performs systemic tasks to significantly minimize bundle size",
        "Acts as caretaker for all of web client code",
      ],
      "examples": [
        "Designed font loading strategy for performance",
        "Researched and implemented service workers for offline support",
        "Designed and implemented reusable screen layout system",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Designed content transformation and diffing system",
        "Implemented advanced scrolling effects and animations",
        "Designed and pioneered type-safe data modeling approach",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solves systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
      ],
      "examples": [
        "Pioneered innovative styling solution adopted by the industry",
        "Defined and drove migration strategy to modern architecture",
        "Implemented unidirectional data flow architecture to completion",
      ],
    }],
  },

  "FOUNDATIONS": {
    "displayName": "Foundations",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Writes thorough postmortems for service outages",
        "Makes simple configuration changes to services",
        "Performs data migrations safely and effectively, without causing incidents",
      ],
      "examples": [
        "Made safe and effective infrastructure configuration changes",
        "Implemented new data pipelines based on existing patterns",
        "Resolved disk space and resource errors independently",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes minor version upgrades to technologies",
        "Builds data processing jobs within established frameworks",
        "Triages service issues correctly and independently",
      ],
      "examples": [
        "Upgraded runtime to minor version",
        "Built custom deployment packages",
        "Improved data pipeline efficiency by optimizing data transfers",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Designs moderately complex systems",
        "Makes major version upgrades to core dependencies",
      ],
      "examples": [
        "Designed infrastructure configuration management system",
        "Built realtime analytics pipeline",
        "Designed flexible framework for data processing jobs",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Designs complex projects that encompass multiple systems and technologies",
        "Demonstrates deep knowledge of foundational systems",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Designed and built distributed data processing system",
        "Designed cloud infrastructure configuration management",
        "Introduced streaming platform and pioneered event-driven architecture",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational work and supporting technologies",
        "Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Invented a novel technique that advanced the state of the art",
        "Defined and developed continuous delivery strategy",
        "Developed and implemented high availability strategy",
      ],
    }],
  },

  "SERVERS": {
    "displayName": "Servers",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Adds API endpoints using established architecture patterns",
        "Implements endpoints following team conventions",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Added webhook trigger for new events to service",
        "Added API endpoint for resource deletion",
        "Queried database indexes appropriately",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Determines data needs from product requirements",
      ],
      "examples": [
        "Identified need for new database index",
        "Acted as caretaker for API contracts",
        "Updated third-party API integration and dependencies",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Writes playbooks for new service maintenance",
      ],
      "examples": [
        "Implemented OAuth authentication flow",
        "Implemented payments integration with payment provider",
        "Built new microservice for specific domain",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Designed ranking and recommendation architecture",
        "Designed multi-tenancy architecture",
        "Created service framework for consistent service development",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Researched, vetted, and selected language for core services",
        "Defined microservices architecture and migration plan",
        "Defined and implemented proprietary technology core to the company's success",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
        "Delivers tightly-scoped projects efficiently",
        "Writes effective technical specs outlining approach",
      ],
      "examples": [
        "Wrote the technical spec for featured content display",
        "Delivered list item support for email notifications",
        "Delivered transaction history dashboard",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Performs research and considers alternative approaches",
        "Balances pragmatism and polish appropriately",
        "Defines and hits interim milestones",
      ],
      "examples": [
        "Delivered content editor feature",
        "Delivered media uploading for web client",
        "Executed the data migration and backfill",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Ran project retro to assess improvement opportunities",
        "Completed launch checklist unprompted for well controlled rollout",
        "Facilitated project kickoff meeting to get buy-in",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Oversaw technical delivery of major platform feature",
        "Managed infrastructure migration to new environment",
        "Involved marketing, legal, and appropriate functions at project start",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "Managed technical migration to service-oriented architecture",
        "Led technical delivery of major product launch",
        "Delivered multi-month engineering project on time",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively",
        "Collaborates with others with empathy",
        "Asks for help at the appropriate juncture",
      ],
      "examples": [
        "Notified on-call team before running a data migration",
        "Updated project status changes in project management tool promptly",
        "Gave thoughtful updates in daily standups",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Practices active listening and gives full attention",
        "Ensures stakeholders are aware of current blockers",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Received and integrated critical feedback positively",
        "Created cross-team communication channel for project collaboration",
        "Spoke to domain experts before writing technical spec",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Resolves communication difficulties between others",
        "Anticipates and shares schedule deviations in plenty of time",
        "Manages project stakeholder expectations effectively",
      ],
      "examples": [
        "Directed team response effectively during outages",
        "Gave a substantial all-hands presentation on new technology",
        "Gave advance notice of upcoming related work in team briefing",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Communicates project risk and tradeoffs skillfully and with nuance",
        "Contextualizes and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "Led off-site workshop on key process improvement",
        "Wrote growth framework and rationale documentation",
        "Aligned the entire organization around major product decision",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time",
        "Develops and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "Organized company-wide check-in offsite",
        "Created the communication plan for a large organizational change",
        "Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Craft",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in production once shipped",
        "Writes tests for every new feature and bug fix",
        "Writes clear comments and documentation",
      ],
      "examples": [
        "Caught a bug in staging before it went to production",
        "Landed non-trivial PR with no review comments",
        "Wrote comprehensive tests for the happy and edge cases",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Requested tests for a PR when acting as reviewer",
        "Reduced the number of recurring exceptions",
        "Fixed a TODO for someone else in the codebase",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better testing",
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
      ],
      "examples": [
        "Improved CI pipeline to run tests faster",
        "Simplified test data setup and management",
        "Created fixture system for consistent testing",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error",
        "Focuses the team on quality with regular reminders",
        "Coordinates on-call priorities and quality initiatives",
      ],
      "examples": [
        "Added code coverage reporting to CI pipeline",
        "Iterated repeatedly to develop elegant solution to complex problem",
        "Defined and oversaw plan for addressing critical security vulnerability",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Negotiated resources for technical debt week with exec team",
        "Instituted and ensured success of dedicated improvement time policy",
        "Started ongoing on-call and quality improvement program",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Writes posts about improvement opportunities",
        "Raises meaningful concerns in team meetings",
        "Asks leadership team probing questions in forums",
      ],
      "examples": [
        "Wrote about process improvement opportunities",
        "Raised concerns about policy gaps",
        "Reported a production issue proactively",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Picks bugs off the backlog proactively when blocked elsewhere",
        "Makes design quality improvements unprompted",
        "Takes on important tasks proactively when blocked elsewhere",
      ],
      "examples": [
        "Advocated on own behalf for a change in role",
        "Implemented type safety improvements",
        "Audited application performance and proposed fixes",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Demonstrates concepts proactively with prototypes",
        "Fixes complicated bugs outside of regular domain",
        "Takes ownership of systems that nobody owns or wants",
      ],
      "examples": [
        "Defined style guide to resolve style debates",
        "Proposed and implemented new feature prototype",
        "Implemented major feature independently and unprompted",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Created the interviewing rubric and training materials",
        "Implemented and secured support for critical authentication feature",
        "Migrated codebase to monorepo and modern build system",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Creates a new function to solve systemic issues",
        "Galvanizes the entire company and garners buy-in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Led the organization through major process transformation",
        "Built platform prototype and convinced execs to fund it",
        "Convinced leadership and engineering org to adopt new architecture",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognizes achievements",
        "Explains appropriate available industry paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
        "Mentored an intern or junior team member",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Ensures a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1:1s",
        "Provided coaching on how to have difficult conversations",
        "Taught group members coaching frameworks and models",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression regularly",
        "Suggested appropriate group member for leadership position",
        "Arranged a requested change of role or team for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a significant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identifies leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to team leads",
        "Devised leadership curriculum for managers",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Org design",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
        "Reflects on meetings that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
        "Facilitated effective team meeting with empathy",
        "Explained meeting format to a new hire",
        "Provided feedback on sprint planning process",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organizational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to help",
      ],
      "examples": [
        "Defined combined meeting structure for efficiency",
        "Improved on-call rotation scheduling",
        "Defined standard communication channels for inter-team collaboration",
      ],
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "signals": [
        "Creates programs that meaningfully improve organizational diversity",
        "Solves long-standing organizational problems",
        "Reallocates resources to meet organizational needs",
      ],
      "examples": [
        "Developed baseline team structure templates for consistency",
        "Created rotation program to address ongoing quality issues",
        "Defined working groups manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyzes existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organizational actions or norms",
      ],
      "examples": [
        "Connected recruiting difficulties to organizational priorities",
        "Raised compensation and level discrepancies",
        "Analyzed the hiring process for potential bias",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for reorganizations",
      ],
      "examples": [
        "Led efforts to increase diversity in engineering",
        "Directed resources to meaningfully improve diversity at all levels",
        "Built the growth framework and career ladder",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Wellbeing",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable person principle to others",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themselves in another's shoes to understand their perspective",
        "Checked in with colleague showing signs of burnout",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Connected routine work with overall company goals and impact",
        "Noted a team without a recent win and suggested some achievable quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents premature consensus",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "Completed training on emotional intelligence",
        "Completed training on compromise and negotiation techniques",
        "Reframed a problem as a challenge, instead of a barrier, when appropriate",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension by providing extra context and clarity",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and addresses narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Helped convert group member from passive to proactive mindset",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Accomplishment",
    "category": "C",
    "description": "Inspires day to day excellence, maximizes potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "Completed training on problem-solving techniques",
        "Unblocked a group member by providing guidance",
        "Reinforced and affirmed positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Completed training on effective decision making",
        "Coached a group member to solve a problem independently",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates signals of poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group member to address persistent communication issues",
        "Arranged a team transfer, resulting in improved performance",
        "Managed group member closely to maximize chances of improvement plan success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themselves into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from external pressures so they could focus on goals",
        "Mediated conversation between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organize chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-functioning team of teams",
      ],
      "examples": [
        "Turned around the performance of a struggling team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themselves available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague work through a difficult situation",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared relevant article or resource with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Led from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to the organization's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds learning approaches that work best for different team members",
      ],
      "examples": [
        "Gave a lunch-and-learn presentation on technical topic",
        "Wrote documentation on best practices for common tasks",
        "Created training content or workshop materials",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviors",
        "Creates learning series and lines up speakers",
      ],
      "examples": [
        "Created and led affinity or interest group",
        "Organized an all-hands with an outside speaker",
        "Designed and taught guild or practice area curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognize and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted professional education budget for engineers",
        "Mentored mentors and coached on mentorship skills",
        "Started advisor program and lined up external mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Promotes the company to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents the company well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends company-hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared a product launch announcement on social media",
        "Acted as a guide for a visitor to the office",
        "Supported PR efforts by providing a quote or participating in media",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to the company",
        "Participates in public communities and represents the company well",
        "Organizes positive small or medium-sized events that bring people to the company",
      ],
      "examples": [
        "Volunteered as a helper for community workshop or event",
        "Organized a short office tour for students or community members",
        "Spoke at a community meetup or event hosted at the office",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of the company",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts that receive moderate traffic",
      ],
      "examples": [
        "Represented the company on a panel at an industry conference",
        "Established close ties with external organization or community",
        "Built a durable, long-standing relationship with partner organization",
      ],
    }, {
      "summary": "Establishes the company as a great, innovative workplace to the whole industry",
      "signals": [
        "Establishes themselves as an industry thought leader who attracts talent",
        "Publishes material about organizational or technical innovations",
        "Leverages significant following to promote the company",
      ],
      "examples": [
        "Published a paper on company technology in a peer-reviewed journal",
        "Authored significant technical blog post or article",
        "Published influential article on company engineering blog",
      ],
    }, {
      "summary": "Introduces the company in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about the company positively",
        "Drives recognition and adoption in significant numbers",
      ],
      "examples": [
        "Published or interviewed in a mainstream publication outside tech",
        "Keynoted a conference with international attention",
        "Represented the company in major media outlets",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Recruiting",
    "category": "D",
    "description": "Strengthens the team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates",
      "signals": [
        "Reviews existing network for hiring leads regularly",
        "Shadows interviews to gain familiarity with process",
        "Reviews current job postings regularly",
      ],
      "examples": [
        "Completed interview calibration training",
        "Set up practice sessions to prepare for interviewing",
        "Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": [
        "Uses interview rubric to provide clear, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Provided observable evidence for every rating",
        "Organized events for candidates to meet team members",
        "Tested new sourcing channels for quality and diversity of candidates",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Teaches new interviewers how to interview with empathy",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "Wrote new interview question that meets quality criteria",
        "Brought candidates into pipeline proactively, with a high conversion rate",
        "Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Documents subtle cues in interviews that indicate values alignment",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Evaluates candidates holistically and identifies key traits",
      ],
      "examples": [
        "Planned summit on interview process and training",
        "Organized and led company presence at a recruitment fair",
        "Started internship program with partner organization",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team",
        "Identifies and pursues strategic hiring opportunities",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "Built relationship with senior candidate over many months to fill critical role",
        "Organized efforts to successfully onboard and retain key hires",
        "Set goals, tracked and reported metrics on team demographics over time",
      ],
    }],
  },

  "COMMUNITY": {
    "displayName": "Community",
    "category": "D",
    "description": "Builds community internally, gives of themselves to the team, and champions company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
        "Participates in team activities and offsites",
        "Treats colleagues and clients with respect",
        "Joins groups or committees outside regular duties",
      ],
      "examples": [
        "Joined and actively participated in practice area guild",
        "Brought a small gesture of appreciation for the team",
        "Wrote informative updates about team activities",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other engineers outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "Created engaging onboarding activities",
        "Ensured quiet voices were heard in discussions",
        "Volunteered for team coordination role",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional on-call shifts at short notice",
        "Pitches in to help other teams hit deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "Led on-call rotations while still contributing to projects",
        "Started and drove employee resource group",
        "Maintained positive morale during difficult organizational periods",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond on support duties, serving the team without complaint",
        "Implements concrete programs to significantly improve team inclusivity",
        "Takes on large amounts of important work for the team without being asked",
      ],
      "examples": [
        "Devoted significant time to helping outside direct responsibilities",
        "Refactored large amounts of legacy code for team benefit",
        "Acted as sole maintainer of critical shared tooling for extended period",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to company values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Organized team offsite for the entire engineering organization",
        "Devised, delivered and acted on findings from team culture survey",
        "Challenged and corrected exclusionary behavior or policies",
      ],
    }],
  },
}

export const milestones: Milestone[] = [0, 1, 2, 3, 4, 5]

export const trackIds: TrackId[] = [
  'MOBILE',
  'WEB_CLIENT',
  'FOUNDATIONS',
  'SERVERS',
  'PROJECT_MANAGEMENT',
  'COMMUNICATION',
  'CRAFT',
  'INITIATIVE',
  'CAREER_DEVELOPMENT',
  'ORG_DESIGN',
  'WELLBEING',
  'ACCOMPLISHMENT',
  'MENTORSHIP',
  'EVANGELISM',
  'RECRUITING',
  'COMMUNITY'
]

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set<string>())

export const categoryColorScale = (category: string) => {
  const colors: Record<string, string> = {
    'A': '#00abc2',
    'B': '#428af6',
    'C': '#e1439f',
    'D': '#e54552'
  }
  return colors[category] || '#ccc'
}

// Job Titles and their expected skill levels
export const jobTitles = [
  'Junior Engineer',
  'Intermediate Engineer',
  'Senior Engineer',
  'Senior II Engineer',
  'Staff Engineer'
] as const

export type JobTitle = typeof jobTitles[number]

export const jobTitleConfigurations: Record<JobTitle, MilestoneMap> = {
  'Junior Engineer': {
    MOBILE: 1,
    WEB_CLIENT: 1,
    FOUNDATIONS: 1,
    SERVERS: 1,
    PROJECT_MANAGEMENT: 0,
    COMMUNICATION: 1,
    CRAFT: 1,
    INITIATIVE: 0,
    CAREER_DEVELOPMENT: 0,
    ORG_DESIGN: 0,
    WELLBEING: 0,
    ACCOMPLISHMENT: 0,
    MENTORSHIP: 0,
    EVANGELISM: 0,
    RECRUITING: 0,
    COMMUNITY: 1,
  },
  'Intermediate Engineer': {
    MOBILE: 2,
    WEB_CLIENT: 2,
    FOUNDATIONS: 2,
    SERVERS: 2,
    PROJECT_MANAGEMENT: 2,
    COMMUNICATION: 2,
    CRAFT: 2,
    INITIATIVE: 1,
    CAREER_DEVELOPMENT: 1,
    ORG_DESIGN: 1,
    WELLBEING: 1,
    ACCOMPLISHMENT: 1,
    MENTORSHIP: 1,
    EVANGELISM: 1,
    RECRUITING: 1,
    COMMUNITY: 2,
  },
  'Senior Engineer': {
    MOBILE: 3,
    WEB_CLIENT: 3,
    FOUNDATIONS: 3,
    SERVERS: 3,
    PROJECT_MANAGEMENT: 3,
    COMMUNICATION: 3,
    CRAFT: 3,
    INITIATIVE: 2,
    CAREER_DEVELOPMENT: 2,
    ORG_DESIGN: 2,
    WELLBEING: 2,
    ACCOMPLISHMENT: 2,
    MENTORSHIP: 2,
    EVANGELISM: 2,
    RECRUITING: 2,
    COMMUNITY: 3,
  },
  'Senior II Engineer': {
    MOBILE: 4,
    WEB_CLIENT: 4,
    FOUNDATIONS: 4,
    SERVERS: 4,
    PROJECT_MANAGEMENT: 4,
    COMMUNICATION: 4,
    CRAFT: 4,
    INITIATIVE: 3,
    CAREER_DEVELOPMENT: 3,
    ORG_DESIGN: 3,
    WELLBEING: 3,
    ACCOMPLISHMENT: 3,
    MENTORSHIP: 3,
    EVANGELISM: 3,
    RECRUITING: 3,
    COMMUNITY: 4,
  },
  'Staff Engineer': {
    MOBILE: 5,
    WEB_CLIENT: 5,
    FOUNDATIONS: 5,
    SERVERS: 5,
    PROJECT_MANAGEMENT: 5,
    COMMUNICATION: 5,
    CRAFT: 5,
    INITIATIVE: 4,
    CAREER_DEVELOPMENT: 4,
    ORG_DESIGN: 4,
    WELLBEING: 4,
    ACCOMPLISHMENT: 4,
    MENTORSHIP: 4,
    EVANGELISM: 4,
    RECRUITING: 4,
    COMMUNITY: 5,
  },
}
