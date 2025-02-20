import { Code, Database, Wrench, Globe } from 'lucide-react';

const skills = [
    {
        category: 'Back-end',
        items: [
            'Java (Spring Boot)',
            'Javascript (Node.js/Express)',
            'Python (Flask)',
        ],
        icon: <Code size={20} />,
    },
    {
        category: 'Front-end',
        items: [
            'HTML, CSS/SASS/TailwindCSS',
            'Javascript, Typescript(Next.js, React.js)',
            'UX/UI Design (Figma)',
            'React Native'
        ],
        icon: <Globe size={20} />,
    },
    {
        category: 'Database',
        items: ['MySQL', 'PostgreSQL', 'MongoDB'],
        icon: <Database size={20} />,
    },
    {
        category: 'Tools & Technologies',
        items: [
            'Git',
            'Postman',
            'WebSocket',
            'RabbitMQ',
            'Google OAuth2',
        ],
        icon: <Wrench size={20} />,
    },
];

export default skills;

