import {useState} from 'react'
import axios from 'axios'

function Dashboard() {
    const [user, setUser] = useState({
        email: "",
        username:""
    })

    const getProfile = async () => {
        const response = await axios.get('./api/profile')
        setUser(response.data)
    }

    return (
        <>
            <h1>Dashboard</h1>
            <button type="" onClick={getProfile}>
                get profile
            </button>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </>
    )
}

export default Dashboard