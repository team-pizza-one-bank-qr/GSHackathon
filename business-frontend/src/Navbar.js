import React from 'react';

const Navbar = () =>{
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="navbar-brand m-2">
          ONEBANKQR
        </div>
        <div id="navbarSupportedContent">
             <ul class="navbar-nav mr-auto">
               <li class="nav-item active">
                 <a class="btn btn-dark m-2" href="/QR" role="button">Get Started</a>
               </li>
             </ul>
           </div>
         </nav>
       </div>
     );
 }

 export default Navbar;