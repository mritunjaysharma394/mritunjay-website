export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  url?: string;
  featured?: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'Agentic AI Orchestration Platform',
    description:
      'Co-architected an event-driven agentic AI system at Chainguard that automates 70% of secure package creation, processing 200+ concurrent requests across a 2000+ image catalog.',
    tags: ['Agentic AI', 'Go', 'Automation', 'Container Security'],
    featured: true,
    year: '2026',
  },
  {
    title: 'vLLM Secure Container Image',
    description:
      'Built a production-grade secure container image for vLLM at Chainguard, reducing CVE count from 700+ to fewer than 10 — a 98%+ reduction while keeping the full LLM serving stack operational.',
    tags: ['LLM', 'Container Security', 'Wolfi', 'AI/ML'],
    featured: true,
    year: '2025',
  },
  {
    title: 'llmwiki',
    description:
      'A Go CLI implementing Andrej Karpathy\'s LLM Wiki concept — an AI-powered knowledge tool that learns and organizes information using large language models.',
    tags: ['Go', 'LLM', 'CLI', 'AI'],
    github: 'https://github.com/mritunjaysharma394/llmwiki',
    featured: true,
    year: '2026',
  },
  {
    title: 'Chainguard Containers Catalog',
    description:
      'Scaled Chainguard\'s secure container image catalog from fewer than 50 to 500+ images in 14 months, including Node.js FIPS, Python FIPS, and Keycloak. The catalog drove 7x ARR growth to $40M with 150+ enterprise customers.',
    tags: ['Container Security', 'FIPS', 'Wolfi', 'Supply Chain'],
    url: 'https://chainguard.dev',
    year: '2023',
  },
  {
    title: 'Kube-bench Policy Report Adapter',
    description:
      'Built an adapter that periodically checks CIS benchmarks and converts kube-bench outputs into Policy Reports defined by Kubernetes CRDs. Published as a Springer research paper.',
    tags: ['Kubernetes', 'Go', 'Security', 'CNCF'],
    github: 'https://github.com/kubernetes-sigs/wg-policy-prototypes',
    url: 'https://link.springer.com/chapter/10.1007/978-981-19-5292-0_29',
    year: '2021',
  },
  {
    title: 'k8s-release-scheduler',
    description:
      'Contributed release cycle support to schedule-builder in kubernetes/release — helps Kubernetes maintainers plan and track release windows.',
    tags: ['Kubernetes', 'Go', 'Open Source'],
    github: 'https://github.com/kubernetes/release/pull/2215',
    year: '2021',
  },
  {
    title: 'sedpy',
    description:
      'An open-source Python tool for cross-platform stream-line editing — a BSD/GNU-compatible alternative to sed with a simpler interface.',
    tags: ['Python', 'CLI', 'Open Source'],
    github: 'https://github.com/mritunjaysharma394/sedpy',
    url: 'https://pypi.org/project/sedpy/',
    year: '2020',
  },
  {
    title: 'autoyapf',
    description:
      'A GitHub Action wrapping yapf to automatically format Python code per PEP 8 on every push. Used by open-source projects across GitHub.',
    tags: ['GitHub Actions', 'Python', 'DevOps'],
    github: 'https://github.com/mritunjaysharma394/autoyapf',
    url: 'https://github.com/marketplace/actions/autoyapf',
    year: '2020',
  },
  {
    title: 'Low-Code Image Classifier',
    description:
      'A GitHub Action for no-code training of image classification models using Azure Custom Vision. Push a dataset and workflow file — no Python required.',
    tags: ['GitHub Actions', 'Azure', 'ML', 'No-Code'],
    github: 'https://github.com/mritunjaysharma394/autoCustomVision',
    url: 'https://github.com/marketplace/actions/automating-image-classification-with-microsoft-azure-custom-vision-training-and-prediction',
    year: '2020',
  },
];
