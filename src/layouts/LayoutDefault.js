import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <React.Fragment>
    <Header navPosition="right" className="reveal-from-top" />
    <main className="site-content illustration-section-05">
      {children}
    </main>
    <Footer className="reveal-from-bottom" data-reveal-offset="0" />
  </React.Fragment>
);

export default LayoutDefault;  