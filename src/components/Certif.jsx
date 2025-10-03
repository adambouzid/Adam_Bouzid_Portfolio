"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleNext = () => {
    setIsAutoPlaying(false); // Stop autoplay when user interacts
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false); // Stop autoplay when user interacts
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  // Touch handlers for swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setIsAutoPlaying(false); // Stop autoplay on swipe
      setActive((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setIsAutoPlaying(false); // Stop autoplay on swipe
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div
      className="mx-auto w-full max-w-full px-4 py-12 font-sans antialiased md:py-16 md:px-8 lg:px-12 xl:max-w-6xl">
      <div className="relative grid grid-cols-1 gap-6 md:gap-10 lg:gap-12 xl:grid-cols-2">
        <div className="w-full">
          <div 
            className="relative h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] w-full"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={800}
                    height={800}
                    draggable={false}
                    onClick={() => setIsFullscreen(true)}
                    className="h-full w-full rounded-2xl md:rounded-3xl object-contain object-center cursor-pointer hover:scale-105 transition-transform duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 md:py-8">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
              {testimonials[active].name}
            </h3>
            <p className="text-sm md:text-base text-purple-400 mb-4 md:mb-6">
              {testimonials[active].designation}
            </p>
            <p className="mt-4 md:mt-8 text-base md:text-lg lg:text-xl text-neutral-300 leading-relaxed">
              {testimonials[active].quote}
            </p>
          </motion.div>
          <div className="flex gap-6 pt-8 md:pt-12 justify-center md:justify-start">
            <button
              onClick={handlePrev}
              className="group/button flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl">
              <IconArrowLeft
                className="h-6 w-6 md:h-7 md:w-7 text-white drop-shadow-lg transition-transform duration-300 group-hover/button:-rotate-12 group-hover/button:scale-110" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl">
              <IconArrowRight
                className="h-6 w-6 md:h-7 md:w-7 text-white drop-shadow-lg transition-transform duration-300 group-hover/button:rotate-12 group-hover/button:scale-110" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
            >
              ✕
            </button>
            <img
              src={testimonials[active].src}
              alt={testimonials[active].name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
