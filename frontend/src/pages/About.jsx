import { motion } from 'framer-motion';
import { 
  Code2, Database, Server, Brain, BarChart3, 
  GraduationCap, Briefcase, Award, Users, 
  Linkedin, Mail, Phone, MapPin 
} from 'lucide-react';

const About = () => {
  const skills = [
    { 
      icon: Code2, 
      name: 'Desarrollo Web', 
      techs: ['React', 'Next.js', 'Node.js', 'C# .NET', 'JavaScript', 'Tailwind CSS'] 
    },
    { 
      icon: BarChart3, 
      name: 'Ciencia de Datos', 
      techs: ['Python', 'Pandas', 'Power BI', 'EDA', 'Limpieza de Datos', 'Estadística'] 
    },
    { 
      icon: Brain, 
      name: 'Inteligencia Artificial', 
      techs: ['API OpenAI', 'Chatbots', 'Automatización', 'Recomendación IA'] 
    },
    { 
      icon: Database, 
      name: 'Bases de Datos', 
      techs: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'SQL Server'] 
    },
    { 
      icon: Server, 
      name: 'DevOps & Cloud', 
      techs: ['Docker', 'Linux', 'Vercel', 'Git', 'CI/CD'] 
    },
  ];

  const experience = [
    {
      company: 'B Solutions Group',
      role: 'Desarrollador Web',
      period: '2025',
      description: 'Desarrollo de aplicaciones web críticas, optimización de bases de datos SQL Server, integración de APIs RESTful, mejora del 80% en experiencia de usuario, pruebas QA y seguridad.',
    },
    {
      company: 'Universidad de Costa Rica',
      role: 'Proyectos Académicos',
      period: '2022 – 2025',
      description: 'Diseño de bases de datos, desarrollo de más de 15 módulos web con C#, JavaScript, PHP, integración de IA para automatización, optimización de rendimiento.',
    },
  ];

  const education = [
    {
      title: 'Bachillerato en Informática Empresarial',
      institution: 'Universidad de Costa Rica',
      period: '2022 – 2025',
    },
    {
      title: 'Power BI & Análisis de Datos',
      institution: 'INCOEX ',
      period: 'En curso',
    },
  ];

  const certifications = [
    'Fundamentos de Scrum – Scrum Study',
    'Chatbots e Integración con API OpenAI – Udemy',
    'Desarrollo Web con IA – BIG School',
    'Python para Análisis de Datos – En curso',
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Desarrollador Full-Stack · Científico de Datos · Especialista en IA
          </p>
        </motion.div>

        {/* Perfil profesional */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Perfil Profesional
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Profesional con formación en <strong>Informática Empresarial</strong> en la Universidad de Costa Rica,
              con experiencia en <strong>Desarrollo Web</strong>, <strong>Inteligencia Artificial</strong> y 
              <strong> Análisis de Datos</strong>. Combino habilidades técnicas en programación con capacidad para
              transformar datos en decisiones estratégicas.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Especializado en la integración de <strong>soluciones IA</strong> para automatización de procesos,
              <strong> simulaciones logísticas</strong> y <strong>dashboards ejecutivos</strong> para la toma de
              decisiones. Apasionado por la mejora continua, el trabajo en equipo y la resolución de problemas
              con tecnología de vanguardia.
            </p>

            {/* Experiencia laboral */}
            <h3 className="text-xl font-bold mt-6 mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Experiencia Profesional
            </h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{exp.company}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{exp.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contacto rápido */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm">freddysz894@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm">+506 7020-1736</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm">San Ramón, Alajuela, Costa Rica</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <a 
                    href="https://www.linkedin.com/in/freddy-s%C3%A1nchez-39b2931aa/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    linkedin.com/in/freddy-sánchez
                  </a>
                </div>
              </div>
            </div>

            {/* Educación */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Educación
              </h3>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold text-sm">{edu.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificaciones */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Certificaciones
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-blue-500">▸</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Habilidades técnicas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-all"
              >
                <skill.icon className="h-10 w-10 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold mb-3 text-sm">{skill.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;