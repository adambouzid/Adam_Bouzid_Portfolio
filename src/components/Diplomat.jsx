import React from 'react'
import { motion } from 'motion/react'

const Diplomat = () => {
  const education = {
    school: "EMSI",
    degree: "Software Engineering",
    year: "Year 5 (Final Year)",
    period: "2021 - 2026",
    description: "Specialized in full-stack development, software architecture, and modern web technologies"
  }

  const certifications = [

  ]

  return (
    <div className="mt-12 space-y-12">
      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-gradient-to-br from-midnight via-navy to-midnight border border-white/5 p-6 md:p-8 hover:border-white/10 transition-all duration-300"
      >
        <div className="flex items-center gap-6">
          {/* EMSI Logo */}
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-2xl flex-shrink-0 shadow-xl ring-2 ring-orange-500/20 bg-orange-500/5 p-4 md:p-5 flex items-center justify-center">
            <img 
              src="/assets/emsi_logo.avif" 
              alt="EMSI Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{education.degree}</h3>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xl md:text-2xl font-semibold text-white">{education.school}</p>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-medium text-sm">{education.year}</span>
              </div>
            </div>
            <p className="text-base md:text-lg text-neutral-400 font-medium">{education.period}</p>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed pt-2 border-t border-white/5">{education.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Certifications Section */}
      {certifications.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-midnight via-navy to-midnight border border-white/5 p-4 md:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1">{cert.name}</h4>
                    <p className="text-sm text-neutral-400">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Diplomat