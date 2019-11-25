import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";

function App() {
    return (
     <Router> 
         <Navbar />
         <Route path="/" exact component={ExerciseList} />
     </Router>
    );
}
 
export default App; 