import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

export const HeroText = () => {
  const { t } = useTranslation();
  const words = t('hero.words', { returnObjects: true });
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }
    return (
      <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
          {/* DesktopView */}
          <div className="flex-col hidden md:flex c-space">
              <motion.h1 className="text-4xl font-medium"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}>
                {t('hero.greeting')}
              </motion.h1> 
              <div className="flex flex-col items-start">
                <motion.p className="text-5xl font-medium text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}>
                  {t('hero.subtitle')} <br />{t('hero.dedicated')}
                </motion.p>
                <motion.div 
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}>
                  <FlipWords words={words} 
                  className=" font-black text-white text-8xl"/>
                </motion.div>
                <motion.p className="text-4xl font-medium text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.8 }}>
                  {t('hero.webSolutions')}
                  </motion.p>
                
              </div>        
          </div>
          {/* MobileView */}
          <div className="flex- flex-col space-y-6 md:hidden">
            <motion.p className="text-2xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}>
              {t('hero.greeting')}
              </motion.p>
            <div>
              <motion.p className="text-3xl font-semibold text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}>
                {t('hero.building')}
                </motion.p>
              <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}>
                <FlipWords words={words} 
                className=" font-bold text-white text-5xl leading-tight"/>
              </motion.div>
              <motion.p className="text-2xl font-semibold text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.8 }}>
                {t('hero.webApplications')}
              </motion.p>
            </div>
            
          </div>
      </div>
    );
  };
  export default HeroText;
  