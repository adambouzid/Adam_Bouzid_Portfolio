import {mySocials} from "../constans"
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent
        mb-4 h-[1px] w-full" />
        <div className="flex gap-2">
            <p>{t('footer.terms')}</p>
            <p>|</p>
            <p>{t('footer.privacy')}</p>
        </div>
        <div className="flex gap-3">
            {mySocials.map((social, index) => (
                <a key={index} href={social.href}>
                    <img src={social.icon} alt={social.name} className="w-5 h-5 cursor-pointer" />
                </a>
            ))}
        </div>
        <p>{t('footer.rights')}</p>
            
    </section>
  )
}

export default Footer