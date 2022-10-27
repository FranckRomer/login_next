import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

function Dashboard() {
    const [user, setUser] = useState({
        email: "",
        username:""
    })

    const router = useRouter()

    
    const getProfile = async () => {
        const response = await axios.get('./api/profile')
        setUser(response.data)
        

    }

    const logout = async() =>{
        try {
            const response = await axios.get('./api/auth/logout')
            setUser(response.data)
        } catch (error) {
            
        }
        
        router.push("login")
    }
    

    return (
        <>
            <h1>Dashboard</h1>
            <button type="" onClick={getProfile}>
                get profile
            </button>
            <button type="" onClick={logout}>
                Logout
            </button>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </>
    )
}

export default Dashboard