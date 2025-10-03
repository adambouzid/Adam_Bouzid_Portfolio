import React from 'react'
import { useTranslation } from 'react-i18next'
import Diplomat from '../components/Diplomat'
import Certifications from '../components/Certifications'

const EducationANDCertif = () => {
  const { t } = useTranslation();
  return (
    <section className="c-space mt-24">
      <h2 className="text-heading">{t('education.title')}</h2>
      <Diplomat/>
      <Certifications/>
    </section>
  )
}
export default EducationANDCertif