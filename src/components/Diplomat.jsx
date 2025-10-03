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
        className="rounded-3xl bg-gradient-to-br from-midnight via-navy to-midnight border border-white/5 p-6 md:p-8"
      >
        <div className="flex items-start gap-4 md:gap-6">
          {/* Icon */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-xl md:text-2xl text-neutral-300 mb-2">{education.degree}</p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
              <p className="text-lg md:text-xl font-semibold text-white">{education.school}</p>
              <span className="text-sm md:text-base text-cyan-400 font-medium">{education.year}</span>
            </div>
            <p className="text-sm md:text-base text-neutral-400 mb-3">{education.period}</p>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">{education.description}</p>
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