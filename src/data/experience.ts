export interface Role {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  companyUrl: string;
  location: string;
  roles: Role[];
}

export const experience: Experience[] = [
  {
    company: 'Chainguard',
    companyUrl: 'https://chainguard.dev',
    location: 'Remote',
    roles: [
      {
        title: 'Senior Software Engineer, Fulfillment Automation',
        company: 'Chainguard',
        companyUrl: 'https://chainguard.dev',
        location: 'Remote',
        start: 'Feb 2026',
        end: 'Present',
        bullets: [
          'Co-architected a new agentic AI orchestration system that automates 70% of the package creation workflow, processing 200+ concurrent requests across a 2000+ image catalog',
          'Drove the technical foundation of a newly formed team, translating ambiguous AI-native requirements into a production-grade, event-driven automation pipeline',
        ],
      },
      {
        title: 'Senior Software Engineer, Tech Lead (Delivery India)',
        company: 'Chainguard',
        companyUrl: 'https://chainguard.dev',
        location: 'Remote',
        start: 'Jul 2025',
        end: 'Jan 2026',
        bullets: [
          'Led a 9-person Delivery India team as tech lead, owning the engineering roadmap and cross-functional delivery of secure container images',
          'Built production-grade AI/ML container images including vLLM, slashing CVE count from 700+ to fewer than 10 (98%+ reduction)',
          'Established technical standards and review processes that increased team throughput and image security posture across the catalog',
        ],
      },
      {
        title: 'Software Engineer',
        company: 'Chainguard',
        companyUrl: 'https://chainguard.dev',
        location: 'Remote',
        start: 'Oct 2024',
        end: 'Jun 2025',
        bullets: [
          'Owned and scaled container image delivery while leading Chainguard\'s intern program, mentoring 3 interns and multiple engineers',
          'Continued driving image catalog growth and security hardening across the Wolfi and Enterprise repositories',
        ],
      },
      {
        title: 'Associate Software Engineer',
        company: 'Chainguard',
        companyUrl: 'https://chainguard.dev',
        location: 'Remote',
        start: 'Jul 2023',
        end: 'Sep 2024',
        bullets: [
          'Built the foundational container images of Chainguard\'s product, including Node.js FIPS, Python FIPS, and Keycloak',
          'Scaled the secure image catalog from fewer than 50 to 500+ images within 14 months, directly establishing Chainguard\'s core product offering',
          'Foundational catalog became Chainguard Containers, driving 7x ARR growth to $40M with 150+ enterprise customers and Chainguard\'s $356M Series D at $3.5B valuation',
        ],
      },
    ],
  },
  {
    company: 'Slim.AI',
    companyUrl: 'https://slim.ai',
    location: 'Remote',
    roles: [
      {
        title: 'Member of Technical Staff',
        company: 'Slim.AI',
        companyUrl: 'https://slim.ai',
        location: 'Remote',
        start: 'Aug 2022',
        end: 'Apr 2023',
        bullets: [
          'Built core subsystems of the Slim SaaS CLI, improving depth and accuracy of container vulnerability reports',
          'Designed a cache-warming system for build actions that increased CI efficiency by 20%',
          'Automated instrumented hardening of Docker and Kubernetes workloads, accelerating CI/CD pipelines',
        ],
      },
    ],
  },
  {
    company: 'Nirmata',
    companyUrl: 'https://nirmata.com',
    location: 'Remote',
    roles: [
      {
        title: 'Software Engineering Intern',
        company: 'Nirmata',
        companyUrl: 'https://nirmata.com',
        location: 'Remote',
        start: 'Jan 2022',
        end: 'Jul 2022',
        bullets: [
          'Shipped new features for software supply chain security in CNCF Kyverno, the open-source Kubernetes policy engine',
        ],
      },
    ],
  },
  {
    company: 'HackerRank',
    companyUrl: 'https://hackerrank.com',
    location: 'Remote',
    roles: [
      {
        title: 'Software Engineering Intern',
        company: 'HackerRank',
        companyUrl: 'https://hackerrank.com',
        location: 'Remote',
        start: 'Jun 2021',
        end: 'Dec 2021',
        bullets: [
          'Modernized the Library of Projects team\'s front-end by migrating from Backbone.js to React',
        ],
      },
    ],
  },
];
