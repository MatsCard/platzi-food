import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout(props) {

  return (     
      <div className="container mx-auto">
          <Header></Header>
          {props.children}
          <Footer></Footer>
          
      </div>
  );
}

export default Layout;