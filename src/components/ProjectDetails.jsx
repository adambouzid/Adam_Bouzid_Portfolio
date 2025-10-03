import { motion } from "motion/react";
import { useState, useEffect } from "react";


const ProjectDetails = ({
  title,
  description,
  subDescription,
  images,
  tags,
  href,
  closeModal,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Add event listener when modal opens
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener when modal closes
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [images.length]); // Re-run if images change
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm p-2 md:p-4">
      <motion.div
        className="relative w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto border shadow-sm rounded-xl md:rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-1.5 md:p-2 rounded-sm top-3 right-3 md:top-5 md:right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <div 
          className={`w-full bg-gray-900 rounded-t-xl md:rounded-t-2xl overflow-hidden flex items-center justify-center relative ${
            images[currentImageIndex].includes('mobilben') 
              ? 'h-64 md:h-96' 
              : 'min-h-48 max-h-64 md:min-h-80 md:max-h-96'
          }`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img 
            src={images[currentImageIndex]} 
            alt={title} 
            className={`${
              images[currentImageIndex].includes('mobilben') 
                ? 'h-full object-contain' 
                : 'max-w-full max-h-full object-contain'
            }`}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <div className="absolute top-1/2 left-2 right-2 md:left-4 md:right-4 flex justify-between items-center pointer-events-none -translate-y-1/2">
              <button
                onClick={prevImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full pointer-events-auto cursor-pointer backdrop-blur-sm"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full pointer-events-auto cursor-pointer backdrop-blur-sm"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
          
          {/* Pagination Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full cursor-pointer transition-all ${
                    index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-4 md:p-6">
          <h5 className="mb-2 md:mb-3 text-xl md:text-2xl font-bold text-white">{title}</h5>
          <p className="mb-2 md:mb-3 text-sm md:text-base font-normal text-neutral-400 leading-relaxed">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-2 md:mb-3 text-xs md:text-sm font-normal text-neutral-400 leading-relaxed">{subDesc}</p>
          ))}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 md:mt-6">
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 md:size-10 hover-animation"
                />
              ))}
            </div>
            {href && (
              <a href={href} className="inline-flex items-center gap-1 text-sm md:text-base font-medium cursor-pointer hover-animation text-cyan-400 hover:text-cyan-300">
                View Project{" "}
                <img src="assets/arrow-up.svg" className="size-3 md:size-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails