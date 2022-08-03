import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../store/features/auth/authSlice'

function RegisterPage() {
  const { loading, msg, error, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate('/')
    }
    if (error) {
      toast.error(msg)
    } else if (msg) {
      toast.success(msg)
    }
  }, [msg, loading, error])

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    first_name: '',
    last_name: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, email, password, password2, first_name, last_name } =
      formData
    if (password !== password2) {
      toast.error('Passwords do not match')
      return
    }

    const _user = {
      username,
      email,
      password,
      first_name,
      last_name,
    }

    dispatch(register(_user))
  }
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-center text-2xl font-bold text-purple-700">
          REGISTER
        </h3>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          className="px-2 py-1 border border-purple-300 rounded w-full my-2"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          className="px-2 py-1 border border-purple-300 rounded w-full my-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          className="px-2 py-1 border border-purple-300 rounded w-full my-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={formData.password2}
          className="px-2 py-1 border border-purple-300 rounded w-full my-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          className="px-2 py-1 border border-purple-300 rounded w-full my-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          className="px-2 py-1 border border-purple-300 rounded w-full my-2"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-white bg-purple-700 w-full mt-2 p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
