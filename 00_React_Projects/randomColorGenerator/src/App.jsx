import React from 'react';
import AuthForm from './components/AuthForm';
// import RandomColor from './components/RandomColor';

const App = () => {
  return (
    <div>
      {/* <RandomColor /> */}
      <section
  className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50"
  id="auth-section"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:gap-16"
    >
      {/* Left content */}
      <div className="flex flex-col justify-center lg:pr-8 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Join Our Community Today
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
          Whether you're a student looking for guidance or an alumnus wanting to give back,
          AlumConnect provides the platform you need to succeed — completely free.
        </p>
        <div className="space-y-4 max-w-md mx-auto lg:mx-0">
          {[
            'Verified academic profiles with trust badges',
            'AI-powered mentor matching system',
            'Exclusive events and job opportunities',
            'Secure and private communication platform',
            'Global network of industry professionals',
            'Career guidance and skill development',
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex-shrink-0 mr-3 mt-1">
                <CheckCircle className="h-5 w-5 text-indigo-600 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side: Auth form */}
      <div className="flex justify-center lg:justify-end">
        <div className="w-full max-w-md">
          <AuthForm />
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  )
}

export default App;