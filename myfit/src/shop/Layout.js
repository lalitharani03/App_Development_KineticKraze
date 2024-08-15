import React from 'react';
import Navbar from './Navbar';

export default function Layout({cartCount,cartTotal,children}){
    return(
        <>
        <Navbar cartCount={cartCount} cartTotal={cartTotal}/>
        <div>
            {children}
         </div>
         </>
    );
}