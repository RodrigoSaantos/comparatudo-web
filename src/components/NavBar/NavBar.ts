import styled from 'styled-components'

import search from '../../assets/images/icons/search.svg'

import logo from '../../assets/images/icons/logo.png'

export const NavBarStyle = styled.div`
&.search-on {
    position: relative;
    z-index: 101;
}

.hide {
    display: none;
}

nav {
    display: none;
}

.one,
.two,
.three{
    background-color: #fff;
    border-radius: 10px;
    height: 1px;
    width: 100%;
    margin: 6px auto;
    transition: .4s ease-in-out;
}

.menu-section{
    transition: background-color, height .4s ease-in-out;
    height: 44px;
}


.menu-toggle{
    width: 15px;
    height: 30px;
    z-index: 1;
    margin: 16px 30px 0 0;
    cursor: pointer;
    transition: .4s ease-in-out;
}

.menu-section.on{
    position: absolute;
    top: 0;
    right: 0;

    width: 100vw;
    height: 100vh;

    background-color: black;

    z-index: 21;

    /* display: flex;
    justify-content: left;
    align-items: center; */
    
    opacity: 8;
    
}

.menu-section.on nav{
    display: block;
    margin: auto;
    width: 90vw;
}

.menu-section.on .menu-toggle{
    position: absolute;
    right: 1px;
    top: -6px;
    transform: rotate(45deg);
    transition: 0.4s ease-in-out;
}
.menu-section.on .menu-toggle.search-on{
    top: -40px;
    transition: 0.5s ease-in-out;

}
.menu-section.on .menu-toggle .one{
    transform: rotate(90deg) translate(7px, 0px);
}
.menu-section.on .menu-toggle .three{
    transform: rotate(90deg) translate(-10px, 0px);
    opacity: 0;
}

.menu-section.on nav ul{
    text-align: left;
    display: block;
    padding: 0px;
    width: 75vw;
    margin: auto;
    transition: 0.4s ease-in-out;
    transform: translateY(0px);

}
.menu-section.on nav ul.search-on{
    transform: translateY(-40px);
}
.menu-section.on nav ul a{
    transition-duration: 0.5s;
    font-size: 1.6rem;
    line-height: 5rem;
    display: block;
    text-decoration: none;
    color: white;
    border-bottom: 1px solid #fff;
}

.menu-section.on nav ul li:nth-child(1) {
    text-align: center;
    margin: 8px 0 55px;
}

.menu-section.on nav ul li:first-child a {
    border-bottom: 0;
    background: black;
    display: contents;
    
}
.menu-section.on nav ul li:first-child a:hover {
    opacity: 1;
}


.menu-section.on nav ul li:last-child a {
    margin-top: -297px;
    border: 1px solid #333;
    height: 40px;
    border-radius: 0.8rem;
    display: none;
    align-items: center;
    padding-left: 15px;
    background: var(--color-primary-darker);
}

.menu-section.on nav ul a:hover{
    opacity: 0.5;
}

.menu-section.on nav ul li a span.nav-img-search {
    background-image: url(${search});

    width: 20px;
    height: 20px;

    font-size: 0.01px;

    display: flex;

}

div.nav-content {
    position: absolute;
    /* top: 0; */
    /* right: 0; */
    /* left: 0; */
    z-index: 0;
    display: block;
    /* margin: 0; */
    width: 100%;
    /* min-width: 1024px; */
    /* height: 48px; */
    max-height: 44px;
    background: rgba(0,0,0,0.92);
    /* font-size: 17px; */
    /* -webkit-user-select: none; */
    -moz-user-select: none;
    -ms-user-select: none;
    /* user-select: none; */
}

div.global-nav {
    position: relative;
    max-width: 980px;
    margin: auto;
}

div.nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* max-width: 980px; */
    margin: auto;
    background-color: #333;
    
}

div.nav-bar > span {
    /* margin-left: 45px;
    color: white;
    text-decoration: none;
    text-align: center;
    flex: 1; */

    margin: auto;
    padding-left: 45px;
}

div.nav-bar > span a {
    /* color: white;
    text-decoration: none; */

    background: url(${logo});
    width: 31px;
    height: 28px;
    font-size: 0.01px;
    display: flex;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
}

ul li a span.logo {
    background: url(${logo});
    width: 31px;
    height: 28px;
    font-size: 0.01px;
    display: flex;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    margin: auto;
    transition: opacity 0.2s ease-out;

    &:hover {
        opacity: 0.7;
    }
}

aside {
    /* display: none; */
    position: absolute;
    /* margin: auto; */
    top: 46px;
    width: 90vw;
    /* height: calc(100vh - 16px); */
    transition: 0.4s ease-in-out;

}

aside.search-on {
    top: 16px;
}

div.search-content {
    display: flex;
    justify-content: space-between;
}

aside form {
    width: 100%;
}

div.search-form {
    height: 44px;
    min-width: 22.5rem;
    width: 100%;
    transition: 0.5s ease-in-out;
}

div.search-form.search-on {
    width: 95%;
}

aside input.search-input {
    border: 1px solid #333;
    height: 44px;
    width: 100%;
    font-size: 1.5rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    padding-left: 40px;
    background: var(--color-primary-darker);
    color: var(--color-box-base);
    &:focus {
        outline: none;
    }
}

aside button {
    background: transparent;

    &:focus {
        outline: none;
    }
}

aside button span.nav-img-search {
    background-image: url(${search});
    width: 20px;
    height: 20px;
    font-size: 0.01px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-position: left 0px;
    background-repeat: no-repeat;
    left: 10px;
    top: 10px;
    position: absolute;
    filter: brightness(0.5);
}


aside button span.cancel {
    display: table-column-group;
    transition: 0.5s ease-in-out;

}

aside button span.cancel.search-on {
    display: initial;
    font-size: 17px;
    line-height: 1.23536;
    font-weight: 400;
    letter-spacing: -.022em;
    font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    color: var(--color-secondary);
    cursor: pointer;
    filter: brightness(140%);

}

@media(min-width: 700px) {

    div.menu-toggle {
        display: none;
    }

    div.nav-bar {
        display: initial;
    }

    div.nav-bar > span {
        display: none;
    }

    .menu-section.on .menu-toggle{
        display: none;
    }
    

    nav.global-nav {
        font-size: 1.3rem;
        /* text-align: center; */
        /* justify-content: center; */
        /* top: 0; */
        /* right: 0; */
        /* left: 0; */
        z-index: 9999;
        display: flex;
        /* margin: 0; */
        /* width: 100%; */
        /* min-width: 1024px; */
        height: 44px;
        max-height: 48px;
        background: var(--color-primary);
    }

    nav.global-nav.search-on {
        background: var(--color-primary-darker);
    }
    nav ul.nav-ul {
        margin: auto;
        max-width: 980px;
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        align-items: center;
        flex: 1;
        padding: 0 20px;

        opacity: 1;

        transition: 0.5s ease-in-out;
        transform: translateX(0px) scaleX(1);

    }

    nav ul.nav-ul.search-on {
        opacity: 0;
        transform: translateX(-1000px) scaleX(0);
    }

    nav ul li.search-on {
        transform: scale(1);
        transition: all 0.5s ease-in-out;
    }
        
    nav ul li.search-on {
        transform: scale(0.5);
    }
        
    nav ul li a {
        color: white;
        text-decoration: none;
        transition: opacity 0.2s ease-in;

        &:hover {
            opacity: 0.7;
        }
    
    }
    nav ul li a span.nav-img-search {
        background-image: url(${search});
    
        width: 20px;
        height: 20px;
    
        font-size: 0.01px;
    
        display: flex;

        cursor: pointer;

        transition: opacity 0.2s ease-in;

        &:hover {
            opacity: 0.7;
        }
    }

    aside {
        width: 100%;
        top: 0px;
        opacity: 0;
        z-index: -1;
    }

    aside.search-on {
        top: initial;
        opacity: 1;
        z-index: 1
    }


    div.search-content {
        width: 50%;
        margin: auto;
        transition: 0.5s ease;
        transition-delay: 0.1s;
        transform: translateX(250px) rotateX(90deg) scaleX(0);
        opacity: 0;
    }

    div.search-content.search-on {
        width: 50%;
        margin: auto;
        transform: translateX(0px) rotateX(0deg) scaleX(1);
        opacity: 1;
    }

    aside input.search-input {
        border: initial;
    }


    aside button span.nav-img-search {
        left: initial;
        margin-left: 12px;
        margin-left: 10px;
        margin-top: 3px;
    }

}

`

export const CreateElement = styled.div`
    opacity: .5;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,1);
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
`
