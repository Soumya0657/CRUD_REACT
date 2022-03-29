// import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
// import StudentRoutes from '../Routes/StudentRoutes';

// const AppStudent = () => {
//   return (
//     <BrowserRouter>
//     <StudentRoutes/>
//     </BrowserRouter>
//   )
// }

// export default AppStudent;import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Navbar"

import StudentRoutes from "../Routes/StudentRoutes";

const AppStudent = () => {
  return (
    <section id = "crudApp">
      <BrowserRouter>
      <header>
        

          <Navbar/>
          
          <main>
          <StudentRoutes/>
          </main>

     
        
        </header>
        </BrowserRouter>
    </section>
  );
};

export default AppStudent
