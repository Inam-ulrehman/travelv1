import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import FormRow from '../components/FormRow'
import {
  getUserNameValue,
  loginUserThunk,
  registerUserThunk,
  toggleMember,
} from '../feature/user/userSlice'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const { name, email, password, isMember, serverUser } = useSelector(
    (state) => {
      return state.user
    }
  )

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password || (!isMember && !name)) {
      return toast.warn('please fill all details')
    }
    if (isMember) {
      return dispatch(loginUserThunk({ email, password }))
    }
    return dispatch(registerUserThunk({ name, email, password }))
  }

  // handleChange

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getUserNameValue({ name, value }))
  }

  if (serverUser.length === 0) {
    return (
      <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
          <h3 className='title'>{isMember ? 'Login' : 'Register'}</h3>
          {/* name input */}
          {!isMember && (
            <FormRow
              type='text'
              name='name'
              id='name'
              value={name}
              handleChange={handleChange}
            />
          )}

          {/* email input */}
          <FormRow
            type='email'
            name='email'
            id='email'
            value={email}
            handleChange={handleChange}
          />
          {/* password input */}
          <FormRow
            type='password'
            name='password'
            id='password'
            value={password}
            handleChange={handleChange}
          />
          <button className='btn btn-block' type='submit'>
            submit
          </button>
          <p>
            {isMember ? 'Are you register ' : 'Are you member'}{' '}
            <button
              className='alert-success'
              type='button'
              onClick={() => dispatch(toggleMember())}
            >
              {isMember ? 'Register...' : 'Login...'}
            </button>
          </p>
        </form>
      </Wrapper>
    )
  }
  return <Navigate to='/profile' />
}

const Wrapper = styled.main`
  .alert-success {
    border: transparent;
    padding: 0.5rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    :hover {
      transform: scale(1.1);
      color: var(--grey-9);
    }
  }
`

export default Login
