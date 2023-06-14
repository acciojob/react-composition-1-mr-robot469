
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";

const tabs = [{titles:"A",contents :"Hello A"},{titles:"B",contents:"Hello B"}]

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tab tabs={tabs}/>
    </div>
  )
}

export default App
