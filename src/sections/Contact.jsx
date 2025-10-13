import { section } from 'motion/react-client'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import Particles from '../components/Particles';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        message: ""
    });
    const [isloading, setIsLoading] = useState(false)
    
    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('WDE2nCc4_ye8mLm9x');
    }, []);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };
    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try { 
            console.log("form submitted", formData);
            await emailjs.send('service_eeo1lpu', 'template_zdvuh2a', {
                from_name: formData.name,
                to_name: "Adam Bouzid",
                from_email: formData.email,
                reply_to: formData.email,
                message: formData.message,
            });
            setIsLoading(false);
            setFormData({
                name: "", 
                email: "", 
                message: ""
            });
            showAlertMessage("success", t('contact.success'));
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            showAlertMessage("danger", t('contact.error'));
        }
    };

    return (
    <section className="relative flex items-center c-space section-spacing">
        <Particles className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh/>
        {showAlert && <Alert type={alertType} text={alertMessage}/>}
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10 ">
            <h2 className="text-heading">{t('contact.title')}</h2>
            <p className="font-normal text-neutral-400">
            {t('contact.description')}
            </p>
        </div>
        <form className=" w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="name" className='field-label'>{t('contact.fullName')}</label>
                <input type="text" 
                id="name" 
                name='name' 
                className='field-input field-input-focus' 
                placeholder={t('contact.placeholder.name')} 
                autoComplete='name'
                value={formData.name}
                onChange={handleChange}
                required />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className='field-label'>{t('contact.email')}</label>
                <input type="email" id="email" name='email' className='field-input field-input-focus' placeholder={t('contact.placeholder.email')} autoComplete='email' value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="mb-5">
                <label htmlFor="message" className='field-label'>{t('contact.message')}</label>
                <textarea type="text" id="message" name='message' rows='4' className='field-input field-input-focus' placeholder={t('contact.placeholder.message')} autoComplete='message' value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
                {!isloading ? t('contact.send') : t('contact.sending')}
            </button>
        </form>     
        </div>
         
    </section>
  )
}

export default Contact;
