import React,{useState} from 'react'

const Tab = ({tabs}) => {

    const[tabClicked,setTabClicked] = useState("");

    function handleClick(content){
          setTabClicked(content)
    }

  return (
    <div>
        <ul>
       {
         tabs.map((tab)=>(
             <li onClick={()=>handleClick(tab.contents)}>{tab.titles}</li>
         ))
       }
       </ul>

       {tabClicked && <p>{tabClicked}</p>}
    </div>
  )
}

export default Tab
