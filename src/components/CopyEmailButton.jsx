import { useState } from "react";
import { motion , AnimatePresence } from "motion/react";
const CopyEmailButton = () => {
    const [copied, setcopied] = useState(false);
    const email = "bouzidadam003@gmail.com";
    const copytoClipboard = () => {
        navigator.clipboard.writeText(email);
        setcopied(true);
        setTimeout(() => {
            setcopied(false);
        }, 2000);
    };
  return <motion.button 
  onClick={copytoClipboard}
  whileHover={{ y: -5 }}
  whileTap={{ scale: 0.5 }}
  className="relative px-1 py-4 text-sm text-center rounded-full   font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
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
        <img src="assets/copy.svg" className="w-5" alt="copyicons"/>
        Copy Email Address
    </motion.p>)}
    </AnimatePresence>
  </motion.button>
  
};

export default CopyEmailButton;