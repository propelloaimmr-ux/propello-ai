import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <div  id="stats" style={{
      width: '100%',
      minHeight: '100vh',
      padding: '60px 20px',
      backgroundColor: 'white',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '60px',
          background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.2',
          padding: '0 20px'
        }}
      >
        Numbers That Speak For Themselves
      </motion.h2>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Stat Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(230, 61, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            marginBottom: '16px',
            lineHeight: '1.5',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Improving onboarding & activating a customer by 5-10%
          </p>
          <h3 style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            fontWeight: '800',
            margin: '8px 0',
            lineHeight: '1',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>10%</h3>
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginTop: '8px',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Improved Onboarding</h4>
        </motion.div>

        {/* Stat Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(230, 61, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            marginBottom: '16px',
            lineHeight: '1.5',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Increasing the customer top of the funnel by 3X
          </p>
          <h3 style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            fontWeight: '800',
            margin: '8px 0',
            lineHeight: '1',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>3x</h3>
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginTop: '8px',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Top Of The Funnel</h4>
        </motion.div>

        {/* Stat Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(230, 61, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            marginBottom: '16px',
            lineHeight: '1.5',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Reactivating churned customers by 350%
          </p>
          <h3 style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            fontWeight: '800',
            margin: '8px 0',
            lineHeight: '1',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>350%</h3>
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginTop: '8px',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Customer Reactivation</h4>
        </motion.div>

        {/* Stat Card 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(230, 61, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            marginBottom: '16px',
            lineHeight: '1.5',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Inbound customer calls, resolving 95% automatically
          </p>
          <h3 style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            fontWeight: '800',
            margin: '8px 0',
            lineHeight: '1',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>95%</h3>
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginTop: '8px',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Query Resolution</h4>
        </motion.div>

        {/* Stat Card 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(230, 61, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            marginBottom: '16px',
            lineHeight: '1.5',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Upsell & cross-sell reminders leading to higher conversion by 150%
          </p>
          <h3 style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            fontWeight: '800',
            margin: '8px 0',
            lineHeight: '1',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>150%</h3>
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginTop: '8px',
            background: 'linear-gradient(90deg, #e63d00 0%, #e66700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Higher Upgrades</h4>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;