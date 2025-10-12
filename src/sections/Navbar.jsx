import { useState } from "react"
import { motion } from "motion/react"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../components/LanguageSwitcher'

function Navigation({ closeMenu }){
    const { t } = useTranslation();
    
    return(
        <ul className="nav-ul">
            <li className="nav-li">
                <a className="nav-link" href="#home" onClick={closeMenu}>
                    {t('nav.home')}
                </a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#about" onClick={closeMenu}>
                    {t('nav.about')}
                </a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#work" onClick={closeMenu}>
                    {t('nav.work')}
                </a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#EducationANDCertif" onClick={closeMenu}>
                    {t('nav.education')}
                </a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#contact" onClick={closeMenu}>
                    {t('nav.contact')}
                </a>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)
    
    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <div className="flex items-center gap-3 sm:gap-6">
                        <a href="/" className="flex items-center gap-2 group">
                            <img
                              src="/assets/AdamBouzid_Logo.svg"
                              alt="Adam Bouzid logo"
                              className="h-8 w-8 rounded-md object-cover ring-1 ring-white/10 group-hover:ring-white/30 transition"
                            />
                            <span className="text-lg sm:text-xl font-bold transition-colors text-neutral-400 group-hover:text-white">Adam Bouzid</span>
                        </a>
                        <LanguageSwitcher />
                    </div>
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus-outline-none sm:hidden"
                    >
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
                            className="w-6 h-6" 
                            alt="toggle" 
                        />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation closeMenu={closeMenu} />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div 
                    className="bloc overflow-hidden text-center sm:hidden"  
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    style={{maxHeight: "100vh"}}
                    transition={{ duration: 1 }}
                >
                    <nav className="pb-5">
                        <Navigation closeMenu={closeMenu} />
                    </nav>
                </motion.div>
            )}
        </div>
    )
}

export default Navbar 