import { useState } from 'react'
import './Crud.css'

const Crud = () => {
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState({ name: "", email: "", address: "" })
    const [userData, setUserData] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const openModal = () => {
        setOpen(true)
        setEditIndex(null) 
    }

    const closeModal = () => {
        setOpen(false)
    }

 const addUser =()=>{
    setUserData((prevUserData) => [...prevUserData, user])
        closeModal()
    }

    const updateUser = () => {
        setUserData((prevUserData) =>
            prevUserData.map((u, i) => (i === editIndex ? user : u))
        )
        closeModal()
    }

    const handleEdit = (index) => {
        setUser(userData[index])
        setEditIndex(index)
        setOpen(true)
    }

    const handleDelete = (index) => {
        const updatedUserData = userData.filter((v, i) => i !== index)
        setUserData(updatedUserData)
    }

  return (
    <div>
        <section className='sec'>
            <h1>Crud App</h1>
            <button onClick={openModal}>Add user</button>
        </section>
        <hr></hr>
        <center>
            <table border={1} rules='all'>
                <thead>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Email</b></td>
                        <td><b>Address</b></td>
                        <td><b>Action</b></td>
                    </tr>
                </thead>
                <tbody>
                    {userData.length>0 && userData.map((user,index)=>{
                        return(
                            <tr key={user.name}>
                                
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>

                                <td>
                                    <button onClick={()=>handleEdit(index)}>Edit</button>
                                    <button onClick={()=>handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>@copyright Vrushali</td>
                    </tr>
                </tfoot>
            </table>
        </center>
        {open&&(
            <div className='userinput'>
            <form>
                <input type='text' placeholder='Enter your Name'name='name' onChange={(e)=>setUser({...user,name:e.target.value})}></input>
                <input type='email' placeholder='Enter your Email'name='email' onChange={(e)=>setUser({...user,email:e.target.value})}></input>
                <input type='address' placeholder='Enter your Address'name='address' onChange={(e)=>setUser({...user,address:e.target.value})}></input>
                <button className='submit' type='button' onClick={editIndex !== null ? updateUser : addUser}>
                            {editIndex !== null ? 'Update' : 'Submit'}
                
                </button>

            </form>
            </div>
        )}    


    </div>
  )
}

export default Crud
