// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { FormProvider } from "./FormContext";  
// import MyForm from "./Components/MyForm";      
// import DisplayData from "./Components/DisplayData";  

// const App = () => {
//   return (
//     <FormProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<MyForm />} />
//           <Route path="/display" element={<DisplayData />} />
//         </Routes>
//       </Router>
//     </FormProvider>
//   );
// };

// export default App;


import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "./FormContext";  

// Lazy-loaded components
const MyForm = lazy(() => import("./Components/MyForm"));
const DisplayData = lazy(() => import("./Components/DisplayData"));

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MyForm />} />
            <Route path="/display" element={<DisplayData />} />
          </Routes>
        </Suspense>
      </Router>
    </FormProvider>
  );
};

export default App;
