import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectDetails from './ProjectDetails'
const Projects = ({title, description, subDescription, images , tags, href, translationKey, setPreview }) => {
    const { t, i18n } = useTranslation();
    const [isHidden, setIsHidden] = useState(false);

    // Get translated content if available, otherwise use original
    const getTranslatedTitle = () => {
        if (translationKey && i18n.language !== 'en') {
            return t(`projects.${translationKey}.title`, title);
        }
        return title;
    };

    const getTranslatedDescription = () => {
        if (translationKey && i18n.language !== 'en') {
            return t(`projects.${translationKey}.description`, description);
        }
        return description;
    };

    const getTranslatedSubDescription = () => {
        if (translationKey && i18n.language !== 'en') {
            return t(`projects.${translationKey}.subDescription`, { returnObjects: true }) || subDescription;
        }
        return subDescription;
    };

  return (
    <>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-10 gap-4 sm:gap-6" onMouseEnter={() => setPreview(images)} onMouseLeave={() => setPreview(null)}>
        <div className="flex-1">
        <p className="text-xl md:text-2xl font-semibold mb-3">{getTranslatedTitle()}</p>
        <div className="flex flex-wrap gap-2 md:gap-3 text-sand text-sm md:text-base">
            {tags.map((tag) => (
                <span key={tag.id} className="whitespace-nowrap">
                    {tag.name}
                </span>
            ))}
        </div>
        </div>
        <button onClick={() => setIsHidden(true)} className="flex items-center gap-1 cursor-pointer hover-animation text-cyan-400 hover:text-cyan-300 transition-colors self-start sm:self-center whitespace-nowrap">
            {t('projectsSection.readMore')}
            <img src="assets/arrow-right.svg" className="w-4 md:w-5" />
        </button>
    </div>
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
   {isHidden && (<ProjectDetails title={getTranslatedTitle()} description={getTranslatedDescription()} subDescription={getTranslatedSubDescription()}  images={images} tags={tags} href={href} closeModal={() => setIsHidden(false)}/>)}
    </>
  )
}

export default Projects