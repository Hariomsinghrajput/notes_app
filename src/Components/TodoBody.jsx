import React from 'react'
// import { todoData } from './todoData'
import { useState } from 'react'

const TodoBody = () => {
    const [inputItem, setInputItem]=useState()
    const [createList, setCreateList]=useState([])
    const [updateInput, setUpdateInput]=useState(null)
    const [updateItem, setUpdateItem]=useState(null)
    function inputData(e)
    {
        setInputItem({...inputItem, [e.target.name]:e.target.value})
    }
    function create(e)
    {
        e.preventDefault()
        let toVal=Object.values(inputItem)
        setCreateList([...createList,toVal])
    }
    function updateList(index)
    {
        setUpdateInput(index)
    }
    function updateBox(e)
    {
        let updateItem=e.target.value;
        setUpdateItem(updateItem)
        
    }
    function update(e)
    {
        e.preventDefault()
        createList[updateInput]=updateItem
        setUpdateInput(null)
    }
    
    console.log(updateInput)
  return (
    <div>
        {updateInput===null?<form onSubmit={(e)=>create(e)}>
            <input type="text" name="val" onChange={(e)=>inputData(e)}/>
            <input type='submit' value="Add" style={{color:'red'}}/>
        </form>:<form onSubmit={(e)=>update(e)}>
            <input type="text" placeholder={createList[updateInput]} name="val" onChange={(e)=>updateBox(e)}/>
            <input type='submit' value="Update" style={{color:'red'}}/>
        </form>}
        <div>
            {createList.length===0?'':createList.map((ele, index)=>{
                    return <div>{ele} <button onClick={()=>updateList(index)}>Update</button></div>
                })
            }
        </div>
    </div>
  )
}

export default TodoBody
