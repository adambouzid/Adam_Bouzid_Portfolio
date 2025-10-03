import {myProjects} from "../constans"
import ProjectCard from "../components/Projects"
import {motion, useMotionValue, useSpring} from "motion/react"
import { useState } from "react"
import { useTranslation } from 'react-i18next'
const Projects = () => {
    const { t } = useTranslation(); 
    const x= useMotionValue(0);
    const y= useMotionValue(0);
    const springX = useSpring(x, {stiffness: 100, damping: 10});
    const springY = useSpring(y, {stiffness: 100, damping: 10});
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    };
    const [preview, setPreview] = useState(null); 
    return <section onMouseMove={handleMouseMove} className="relative c-space">
    <h2 className="text-heading">{t('projects.title')}</h2>
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />  
    {myProjects.map((project) => (
        <ProjectCard key={project.id} {...project} setPreview={setPreview}/> 
        ))}
        {preview && (
            <motion.img 
                className={`hidden md:block fixed top-0 left-0 z-50 rounded-lg shadow-lg pointer-events-none ${
                    preview[0].includes('mobilben') 
                        ? 'h-80 w-48 object-contain bg-gray-900' 
                        : 'h-56 w-80 object-cover'
                }`}
                src={preview[0]} 
                style={{x: springX, y: springY}}
                alt="Project preview"
            />
        )}
    </section>
    
};

export default Projects;