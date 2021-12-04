import React from 'react';


import { useDispatch, useSelector } from "react-redux";



import {BrowserRouter,Route} from 'react-router-dom';
import StudentSidebar from "./components/sidebar/Sidebar";
import Dashboard from './components/main-area/route-components/Dashboard';

function App() {



  const dispatch = useDispatch();
  // get employee




  return (

    <BrowserRouter>
      <Route path="/">
        <div className="dashbaord">
          <StudentSidebar />
          <Dashboard/>
        </div>
      </Route>
    </BrowserRouter>

    

  );
}

export default App;
