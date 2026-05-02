export interface Talk {
  title: string;
  event: string;
  year: string;
  url: string;
  type: 'conference' | 'keynote' | 'panel' | 'workshop';
}

export const talks: Talk[] = [
  {
    title: 'How I Met Your Software: an Image\'s Sitcom of Consuming and Securing Software in Cloud Native',
    event: 'KubeCon+CloudNativeCon EU 2024',
    year: '2024',
    url: 'https://kccnceu2024.sched.com/event/1YeRc',
    type: 'conference',
  },
  {
    title: 'Say Hi to the new couple in town, DockerSlim and Kyverno: Making Kubernetes Workloads more secure',
    event: 'Cloud Native SecurityCon NA 2022',
    year: '2022',
    url: 'https://sched.co/1AOih',
    type: 'conference',
  },
  {
    title: 'Unravelling the Magical Act of DockerSlim Minifying Container Images',
    event: 'Open Source Summit NA 2022',
    year: '2022',
    url: 'https://sched.co/11Nto',
    type: 'conference',
  },
  {
    title: 'PolicyReport CRD: Manage Admission Control, Runtime, and Scan Reports',
    event: 'KubeCon+CloudNativeCon EU 2022',
    year: '2022',
    url: 'https://youtu.be/tG-YLGF9_Aw',
    type: 'conference',
  },
  {
    title: 'Paving the Way of WebAssembly at the Intersection of ML and Cloud Native',
    event: 'Cloud Native Wasm Day NA 2021',
    year: '2021',
    url: 'https://sched.co/mG1E',
    type: 'conference',
  },
  {
    title: 'Deciphering Your Way to the World of Golang',
    event: 'KubeCon+CloudNativeCon NA 2021',
    year: '2021',
    url: 'https://sched.co/lV4E',
    type: 'conference',
  },
  {
    title: 'OSS101 Panel: Introduction to Open Source for Students',
    event: 'KubeCon+CloudNativeCon NA 2021',
    year: '2021',
    url: 'https://sched.co/lV34',
    type: 'panel',
  },
  {
    title: 'Guest Keynote (with Priyanka Sharma, GM of CNCF)',
    event: 'KubeCon+CloudNativeCon EU 2021',
    year: '2021',
    url: 'https://youtu.be/2cW8_h98sn8?list=PLj6h78yzYM2MqBm19mRz9SYLsw4kfQBrC&t=852',
    type: 'keynote',
  },
];
