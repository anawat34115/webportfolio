import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Work from './components/Work';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Work/>
    </div>
  );
};

export default App;
