import React, { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link'

import { CreateElement, NavBarStyle } from './NavBar'
import { api } from '../../services/api';
import { useRouter } from 'next/router';

function NavBar() {

  const inputEl = useRef(null)

  const [navBarToggle, setNavBarToggle] = useState('')

  function navBarToggleOn() {

    if (navBarToggle === '') {

      setNavBarToggle('on');
      document.querySelector('body')?.setAttribute('style', 'overflow:hidden')

    } else {
      setNavBarToggle('');
      document.querySelector('body')?.removeAttribute('style')
    }
  }

  function navBarToggleOff() {
    setNavBarToggle('');
    document.querySelector('body')?.removeAttribute('style')
  }

  function searchOnFocus() {

    document.querySelector('nav ul.nav-ul').classList.add('search-on')

    document.querySelector('.menu-section .menu-toggle').classList.add('search-on')

    document.querySelector('aside').classList.add('search-on')

    document.querySelector('aside button span.cancel').classList.add('search-on')

    document.querySelector('div.search-form').classList.add('search-on')

    document.querySelector('aside button').classList.add('search-on')

    document.querySelector('div.search-content').classList.add('search-on')

    document.querySelector('nav.global-nav').classList.add('search-on')

    inputEl.current.focus();

    setCreateelem(true)
    document.querySelector('body')?.setAttribute('style', 'overflow:hidden')    
  }
  function searchOnFocusRemove() {

    document.querySelector('nav ul.nav-ul').classList.remove('search-on')

    document.querySelector('.menu-section .menu-toggle').classList.remove('search-on')

    document.querySelector('aside').classList.remove('search-on')

    document.querySelector('aside button span.cancel').classList.remove('search-on')

    document.querySelector('div.search-form').classList.remove('search-on')

    document.querySelector('aside button').classList.remove('search-on')

    document.querySelector('div.search-content').classList.remove('search-on')

    document.querySelector('nav.global-nav').classList.remove('search-on')

    setCreateelem(false)
    document.querySelector('body')?.removeAttribute('style')

  }

  const [createelem, setCreateelem] = useState(false)

  return (
    <>
    <NavBarStyle className={createelem && 'search-on'}>

      <div className="nav-bar">

        <span>
          <Link href="/">
            <a className="logo">ComparaTudo</a>
          </Link>
        </span>


        <div className={"menu-section " + navBarToggle}>

          <div className="menu-toggle" onClick={navBarToggleOn}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <div className="nav-content">

            <nav className="global-nav">
              <ul className="nav-ul">
                <li>
                  <Link href="/">
                    <a onClick={navBarToggleOff}>
                      <span className="logo">ComparaTudo</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/compare/smartphones">
                    <a onClick={navBarToggleOff}>
                      <span>Smartphones</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a onClick={navBarToggleOff}>
                      <span>Computadores</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a onClick={navBarToggleOff}>
                      <span>TV</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a onClick={navBarToggleOff}>
                      <span>Acessórios</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a onClick={navBarToggleOff}>
                      <span>Contato</span>
                    </a>
                  </Link>
                </li>
                <li>
                    <a onClick={searchOnFocus}>
                      <span className="nav-img-search">Search</span>
                    </a>
                </li>
              </ul>
              <aside>
                <div>
                  <div>
                    <div className="search-content">
                      <form action="/search">
                        <div className="search-form">
                        <input 
                          type="text" 
                          name="search" 
                          id="search" 
                          placeholder="Buscar em comparatudo.com" 
                          onFocus={searchOnFocus} 
                          ref={inputEl} 
                          className="search-input"
                          autoComplete="off"
                        />
                        <button type="submit"><span className="nav-img-search">Search</span></button>

                        </div>

                      </form>
                      <button>
                        <span className="cancel" onClick={searchOnFocusRemove}>
                          Cancelar
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </nav>

          </div>
        </div>

      </div>
      


    </NavBarStyle>

   { createelem === true ? <CreateElement/> : null}
    </>

  )
}

export default NavBar;