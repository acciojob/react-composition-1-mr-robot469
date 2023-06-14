
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";

const tabs = [{title:"A",content :"Hello A"},{title:"B",content :"Hello B"}]

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tab tabs={tabs}/>
    </div>
  )
}

export default App
