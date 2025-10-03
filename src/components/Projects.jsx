import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
const Projects = ({title, description, subDescription, images , tags, href, setPreview }) => {
    const [isHidden, setIsHidden] = useState(false);

  return (
    <>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-10 gap-4 sm:gap-6" onMouseEnter={() => setPreview(images)} onMouseLeave={() => setPreview(null)}>
        <div className="flex-1">
        <p className="text-xl md:text-2xl font-semibold mb-3">{title}</p>
        <div className="flex flex-wrap gap-2 md:gap-3 text-sand text-sm md:text-base">
            {tags.map((tag) => (
                <span key={tag.id} className="whitespace-nowrap">
                    {tag.name}
                </span>
            ))}
        </div>
        </div>
        <button onClick={() => setIsHidden(true)} className="flex items-center gap-1 cursor-pointer hover-animation text-cyan-400 hover:text-cyan-300 transition-colors self-start sm:self-center whitespace-nowrap">
            read more
            <img src="assets/arrow-right.svg" className="w-4 md:w-5" />
        </button>
    </div>
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
   {isHidden && (<ProjectDetails title={title} description={description} subDescription={subDescription}  images={images} tags={tags} href={href} closeModal={() => setIsHidden(false)}/>)}
    </>
  )
}

export default Projects