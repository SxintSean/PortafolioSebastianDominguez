const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}`;

export const techStack = {
  languages: [
    { name: 'PHP',        icon: devicon('php/php-original.svg') },
    { name: 'Python',     icon: devicon('python/python-original.svg') },
    { name: 'JavaScript', icon: devicon('javascript/javascript-original.svg') },
    { name: 'TypeScript', icon: devicon('typescript/typescript-original.svg') },
    { name: 'Kotlin',     icon: devicon('kotlin/kotlin-original.svg') },
    { name: 'C#',         icon: devicon('csharp/csharp-original.svg') },
    { name: 'C++',        icon: devicon('cplusplus/cplusplus-original.svg') },
  ],
  backend: [
    { name: 'Laravel',    icon: devicon('laravel/laravel-original.svg') },
    { name: 'Node.js',    icon: devicon('nodejs/nodejs-original.svg') },
    { name: 'Express.js', icon: devicon('express/express-original.svg') },
  ],
  frontend: [
    { name: 'HTML',          icon: devicon('html5/html5-original.svg') },
    { name: 'React',         icon: devicon('react/react-original.svg') },
    { name: 'Tailwind CSS',  icon: devicon('tailwindcss/tailwindcss-original.svg') },
    { name: 'Bootstrap',     icon: devicon('bootstrap/bootstrap-original.svg') },
  ],
  databases: [
    { name: 'PostgreSQL', icon: devicon('postgresql/postgresql-original.svg') },
    { name: 'MySQL',      icon: devicon('mysql/mysql-original.svg') },
    { name: 'SQLite',     icon: devicon('sqlite/sqlite-original.svg') },
  ],
  devops: [
    { name: 'AWS',    icon: devicon('amazonwebservices/amazonwebservices-plain-wordmark.svg') },
    { name: 'Docker', icon: devicon('docker/docker-original.svg') },
    { name: 'Linux',  icon: devicon('linux/linux-original.svg') },
  ],
  tools: [
    { name: 'Git',        icon: devicon('git/git-original.svg') },
    { name: 'npm',        icon: devicon('npm/npm-original-wordmark.svg') },
    { name: 'Vercel',     icon: devicon('vercel/vercel-original.svg') },
    { name: 'VirtualBox', icon: devicon('virtualbox/virtualbox-original.svg') },
    { name: 'MS Office',  icon: devicon('microsoftoffice/microsoftoffice-plain.svg') },
  ],
};
