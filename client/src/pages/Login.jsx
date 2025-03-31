import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'
import { baseUrl } from '../config/config'
import { data, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userExists } from '../redux/reducers/authSlice'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true)


    const [register, setRegister] = useState({
        name: "",
        username: "",
        designation: "",
        password: ""
    })

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const loginHandler = async (e) => {

        const toastId = toast('Logging in...')
        e.preventDefault()

        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }

        try {
            const { data } = await axios.post(`${baseUrl}/user/login`, login, config)
            console.log('Login Successful:', data)
            dispatch(userExists({ user: data?.user, isAdmin: data?.user.isAdmin }))
            navigate('/events')
            toast.success(data?.message, { id: toastId })
        } catch (err) {
            toast.error(err?.response?.data?.message, { id: toastId })
            console.error('Login Failed:', err)
        }
    }

    const registerHandler = async (e) => {
        e.preventDefault()

        const toastId = toast('Signing in...')
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        }

        try {
            const { data } = await axios.post(`${baseUrl}/user/register`, register, config)
            console.log('Registration Successful:', data)
            dispatch(userExists({ user: data?.user, isAdmin: data?.user.isAdmin }))
            navigate('/events')
            toast.success(data?.message, { id: toastId })
        } catch (err) {
            toast.error(err?.response?.data?.message, { id: toastId })
            console.error('Registration Failed:', err)
        }
    }

    const handleChange = (e, formType) => {
        const { name, value } = e.target;
        if (formType === "register") {
            setRegister(prev => ({ ...prev, [name]: value }));
        } else {
            setLogin(prev => ({ ...prev, [name]: value }));
        }
    }

    return (
        <>
            <div className='bg-linear-to-br from-blue-300 to-blue-800 w-full h-screen flex items-center justify-center'>
                <div className=''>
                    <div className='flex items-center justify-center m-5'>
                        <motion.img
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            src='https://peoplefirst.ril.com/v2/favicon.ico' />
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }}
                        >
                            <h1 className='text-white text-3xl font-bold'>People First</h1>
                        </motion.div>
                    </div>
                    {
                        isLogin ? (
                            <form className='h-auto w-[500px] m-auto shadow-2xl p-5 rounded-2xl bg-white' onSubmit={loginHandler}>
                                <div className='flex m-5 items-center justify-between'>
                                    <h2 className='text-xl font-bold'>Login</h2>
                                    <p className='text-gray-600 text-xs'>Don't have an account? <span className='font-bold text-sky-900 hover:border-b-1'><button className='cursor-pointer' onClick={() => { setIsLogin(false) }}>Register</button></span></p>
                                </div>
                                <div>
                                    <div className='m-5'>
                                        <input
                                            type="text"
                                            name="username"
                                            value={login.username}
                                            placeholder="Username"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded outline-sky-900"
                                            required
                                            onChange={(e) => handleChange(e, "login")}
                                        />
                                    </div>
                                    <div className='m-5'>
                                        <input
                                            type="password"
                                            name="password"
                                            value={login.password}
                                            placeholder="Password"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded outline-sky-900"
                                            required
                                            onChange={(e) => handleChange(e, "login")}
                                        />
                                    </div>
                                </div>
                                <button className='m-5 bg-sky-900 text-center p-2 rounded font-bold text-white w-[420px]' type='submit'>
                                    Login
                                </button>
                            </form>
                        ) : (
                            <form className='h-auto w-[500px] m-auto shadow-xl p-5 rounded-2xl bg-white' onSubmit={registerHandler}>
                                <div className='flex m-5 items-center justify-between'>
                                    <h2 className='text-xl font-bold'>Register</h2>
                                    <p className='text-gray-600 text-xs'>Already have an account? <span className='font-bold text-sky-900 hover:border-b-1'><button className='cursor-pointer' onClick={() => { setIsLogin(true) }}>Log in</button></span></p>
                                </div>
                                <div>
                                    <div className='m-5'>
                                        <input
                                            type="text"
                                            name="name"
                                            value={register.name}
                                            placeholder="Name"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded outline-sky-900"
                                            required
                                            onChange={(e) => handleChange(e, "register")}
                                        />
                                    </div>
                                    <div className='m-5'>
                                        <input
                                            type="text"
                                            name="username"
                                            value={register.username}
                                            placeholder="Username"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded outline-sky-900"
                                            required
                                            onChange={(e) => handleChange(e, "register")}
                                        />
                                    </div>
                                    <div className='m-5'>
                                        <input
                                            type="text"
                                            name="designation"
                                            value={register.designation}
                                            placeholder="Designation"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded outline-sky-900"
                                            required
                                            onChange={(e) => handleChange(e, "register")}
                                        />
                                    </div>
                                    <div className='m-5'>
                                        <input
                                            type="password"
                                            name="password"
                                            value={register.password}
                                            placeholder="Password"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded outline-sky-900"
                                            required
                                            onChange={(e) => handleChange(e, "register")}
                                        />
                                    </div>
                                </div>
                                <button className='m-5 bg-sky-900 text-center p-2 rounded font-bold text-white w-[420px]' type='submit'>
                                    Register
                                </button>
                            </form>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Login
