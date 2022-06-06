import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { menu } from '../utils/data'

const initialState = {
  showMenu: false,
}
const MobileNaveBar = () => {
  const [values, setValues] = useState(initialState)

  // handle button
  const handleMenu = () => {
    setValues({ ...values, showMenu: !values.showMenu })
  }

  return (
    <Wrapper>
      <div className='box-container'>
        <div className='nav-button'>
          <button onClick={handleMenu} type='button'>
            <FiMenu />
          </button>
        </div>

        <div
          className={
            values.showMenu ? 'nav-container ' : ' nav-container hide-nav '
          }
        >
          {menu.map((link) => {
            const { id, path, name, icon } = link
            return (
              <NavLink
                className={values.showMenu ? '' : 'hide-nav hide-navv'}
                onClick={handleMenu}
                key={id}
                to={path}
              >
                {icon} {name}
              </NavLink>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  top: 10px;
  width: 90vw;
  @media (min-width: 668px) {
    display: none;
  }

  .nav-button {
    button {
      background-color: transparent;
      border: transparent;
      font-size: 2rem;
      float: right;
      color: var(--primary-5);
    }
  }

  .nav-container {
    display: grid;
    text-align: center;
    justify-content: center;
    transition: var(--transition);
    width: 100%;
    background-color: var(--white);
    height: 200px;
    a {
      color: var(--grey-5);
      transition: var(--transition);
      :hover {
        transition: var(--transition);
        transform: scale(1.1);
        background-color: var(--primary-4);
        color: var(--white);
        border-radius: var(--radius);
      }
    }
  }

  .hide-nav {
    transition: var(--transition);
    height: 0px;
    margin-bottom: -400px;
  }
  .hide-navv {
    display: none;
  }
`
export default MobileNaveBar
