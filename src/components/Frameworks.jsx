import { motion } from "motion/react";

export function Frameworks({ onHover }) {
  const frameworks = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Java", icon: "java" },
    { name: "TailwindCSS", icon: "tailwindcss" },
    { name: "Three.js", icon: "threejs" },
    { name: "Spring", icon: "icons8-spring-boot-144", isPng: true },
    { name: "NestJS", icon: "icons8-nestjs-100", isPng: true },
    { name: "Electron", icon: "electron" },
  ];

  const tools = [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql", isPng: true },
    { name: "SQLite", icon: "sqlite" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Vite", icon: "vitejs" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "icons8-kubernetes" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-5 md:space-y-6">
      {/* Frameworks Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2.5 sm:gap-3 md:gap-4 justify-items-center">
          {frameworks.map((tech, index) => (
            <TechIcon key={index} tech={tech} index={index} onHover={onHover} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      {/* Tools Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2.5 sm:gap-3 md:gap-4 justify-items-center">
          {tools.map((tech, index) => (
            <TechIcon key={index} tech={tech} index={index + frameworks.length} onHover={onHover} />
          ))}
        </div>
      </div>
    </div>
  );
}
const TechIcon = ({ tech, index, onHover }) => {
  const getBrandColor = (icon) => {
    const colors = {
      react: '#61DAFB',
      nextdotjs: '#000000',
      javascript: '#F7DF1E',
      typescript: '#3178C6',
      tailwindcss: '#06B6D4',
      threejs: '#000000',
      html5: '#E34F26',
      'icons8-spring-boot-144': '#6DB33F',
      nodedotjs: '#339933',
      'icons8-nestjs-100': '#E0234E',
      Express: '#000000',
      postgresql: '#4169E1',
      mysql: '#4479A1',
      sqlite: '#003B57',
      git: '#F05032',
      github: '#181717',
      visualstudiocode: '#007ACC',
      postman: '#FF6C37',
      vitejs: '#646CFF',
      electron: '#47848F',
      docker: '#2496ED',
      'icons8-kubernetes': '#326CE5',
      java: '#007396',
    };
    return colors[icon] || '#6366F1';
  };

  const needsWhiteIcon = ['nextdotjs', 'github', 'threejs', 'Express', 'react', 'tailwindcss', 'spring', 'vite', 'icons8-nestjs-100', 'docker', 'git', 'mysql', 'icons8-kubernetes', 'java'].includes(tech.icon);
  const brandColor = getBrandColor(tech.icon);
  const fileExtension = tech.isPng ? 'png' : 'svg';
  
  // Make dark backgrounds lighter for better visibility
  const isVeryDark = ['nextdotjs', 'github', 'threejs', 'Express', 'sqlite'].includes(tech.icon);
  const displayColor = isVeryDark ? '#1a1a2e' : brandColor;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, type: "spring", stiffness: 200 }}
      whileHover={{ 
        y: -5, 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 }
      }}
      onMouseEnter={() => onHover && onHover({ name: tech.name, color: brandColor })}
      onMouseLeave={() => onHover && onHover(null)}
      className="group relative flex flex-col items-center cursor-pointer"
    >
      {/* Custom Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-white text-black text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl">
        {tech.name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
      </div>
      <div 
        className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center p-2 md:p-2.5 relative transform-gpu transition-all duration-300"
        style={{
          backgroundColor: displayColor,
          boxShadow: `
            0 6px 16px -4px ${displayColor}40,
            0 4px 8px -3px ${displayColor}60,
            inset 0 -2px 4px rgba(0,0,0,0.3),
            inset 0 2px 4px rgba(255,255,255,0.2)
          `,
        }}
      >
        {/* Top shine effect */}
        <div 
          className="absolute inset-0 rounded-lg md:rounded-xl opacity-40"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
          }}
        />
        <img 
          src={`/assets/logos/${tech.icon}.${fileExtension}`} 
          className={`w-full h-full object-contain relative z-10 ${needsWhiteIcon ? 'filter brightness-0 invert' : ''}`}
          alt={tech.name}
          style={{ filter: needsWhiteIcon ? 'brightness(0) invert(1)' : 'none' }}
        />
      </div>
    </motion.div>
  );
}
   





