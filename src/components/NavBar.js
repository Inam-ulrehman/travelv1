import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { menu } from '../utils/data'

const NavBar = () => {
  return (
    <Wrapper>
      <div className='nav-container'>
        {menu.map((list) => {
          const { id, name, path, icon } = list
          return (
            <NavLink key={id} to={path}>
              {icon} {name}
            </NavLink>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  @media (max-width: 668px) {
    display: none;
  }
  position: fixed;
  top: 0;
  .nav-container {
    a {
      margin-right: 1rem;
      color: var(--grey-5);
      padding: 0.5rem;
      transition: var(--transition);
      border-left: 2px solid var(--primary-5);
      :hover {
        background-color: var(--primary-5);
        color: var(--white);
        transition: var(--transition);
        border-radius: var(--radius);
        transition: scale(1.4);
      }
    }
    .active {
      color: var(--primary-5);
    }
  }
`
export default NavBar
