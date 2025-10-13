"use client";;
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

export const Timeline = ({
  data
}) => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Function to get translated experience data
  const getTranslatedExperience = (item) => {
    if (item.translationKey && i18n.language !== 'en') {
      const translatedContents = t(`experiences.${item.translationKey}.contents`, { returnObjects: true });
      return {
        title: t(`experiences.${item.translationKey}.title`, item.title),
        job: t(`experiences.${item.translationKey}.job`, item.job),
        date: t(`experiences.${item.translationKey}.date`, item.date),
        contents: Array.isArray(translatedContents) ? translatedContents : item.contents
      };
    }
    return item;
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="c-space pb-32 mt-24"
      ref={containerRef}>
        <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-10 mt-10">
        {data.map((item, index) => {
          const translatedItem = getTranslatedExperience(item);
          return (
          <div key={index} className="flex justify-start pt-6 md:pt-12 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="absolute flex items-center justify-center w-10 h-10 rounded-full left-3 bg-midnight">
                <div
                  className="h-4 w-4 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="hidden flex-col gap-1 text-xl font-bold md:flex md:pl-16 text-neutral-300">
                <h3 className="text-2xl text-white">
                    {translatedItem.date}
                </h3>
                <h3 className="text-lg text-neutral-300">
                    {translatedItem.title}
                </h3>
                <h3 className="text-base text-neutral-400">
                    {translatedItem.job}
                </h3>
              </div>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
             <div className="block mb-4 text-left text-neutral-300 md:hidden">
                <h3 className="text-xl font-bold text-white">{translatedItem.date}</h3>
                <h4 className="text-lg text-neutral-300">{translatedItem.title}</h4>
                <p className="text-base text-neutral-400">{translatedItem.job}</p>
             </div>
             <div className="space-y-2">
               {translatedItem.contents && Array.isArray(translatedItem.contents) ? 
                 translatedItem.contents.map((content, index) => (
                    <p className="text-sm text-neutral-400 leading-relaxed" key={index}>
                        {content}
                    </p>
                 )) : 
                 <p className="text-sm text-neutral-400 leading-relaxed">
                   No content available
                 </p>
               }
             </div>
            </div>
          </div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-7 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
