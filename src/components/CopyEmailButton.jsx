import { useState } from "react";
import { motion , AnimatePresence } from "motion/react";
const CopyEmailButton = () => {
    const [copied, setcopied] = useState(false);
    const email = "bouzidadam003@gmail.com";
    const copytoClipboard = async () => {
        try {
            // Try modern clipboard API first
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(email);
                setcopied(true);
            } else {
                // Fallback for older browsers/mobile
                const textArea = document.createElement('textarea');
                textArea.value = email;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                textArea.remove();
                setcopied(true);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
            // Still show success message
            setcopied(true);
        }
        setTimeout(() => {
            setcopied(false);
        }, 2000);
    };
  return <motion.button 
  onClick={copytoClipboard}
  onTouchEnd={copytoClipboard}
  whileHover={{ y: -5 }}
  whileTap={{ scale: 0.95 }}
  className="relative px-4 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden touch-manipulation"
  >
    <AnimatePresence mode="wait">
    {copied ? (<motion.p className="flex items-center justify-center gap-2" 
    key={"copied"}
    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1 , ease: "easeInOut"}}
    >
        <img src="assets/copy-done.svg" className="w-5" alt="copyicons"/>
        Email has been copied
    </motion.p>
      ) : (
     <motion.p className="flex items-center justify-center gap-2" 
    key={"copy"}
    initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.1 }}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Copy Email Address
    </motion.p>)}
    </AnimatePresence>
  </motion.button>
  
};
export default CopyEmailButton;