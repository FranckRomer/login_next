import React from 'react'
import axios from 'axios'

const LoginPage = () => {
    const [Credencials, setCredencials] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredencials({
            ...Credencials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(Credencials)
        const response = await axios.post('/api/auth/login', Credencials)
        console.log(response)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='email'
                    type="email"
                    placeholder='email'
                    onChange={handleChange}
                />
                <input
                    name='password'
                    type="password"
                    placeholder='password'
                    onChange={handleChange}
                />
                
                <button type="Login">Login</button>
            </form>
        </div>
    )
}

export default LoginPage