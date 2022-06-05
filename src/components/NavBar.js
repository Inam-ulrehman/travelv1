import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { menu } from '../utils/data'

const NavBar = () => {
  return (
    <Wrapper>
      <div className='nav-container'>
        {menu.map((list) => {
          const { id, name, path } = list
          return (
            <NavLink key={id} to={path}>
              {name}
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
