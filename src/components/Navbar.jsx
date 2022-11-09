import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./layout/svg";
import BurguerButton from "./BurguerButton";
import MediaQuery from "./MediaQuery";

function Navbar() {
  const isDesktop = MediaQuery("(min-width: 768px)");

  const [clicked, setClicked] = useState(isDesktop);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClose = () => {
    setClicked(false);
  };

  return (
    <>
      <NavContainer>
        <a className="logo" href="/">
          <Logo />
        </a>
        <div className={`links ${clicked && !isDesktop ? "active" : ""}`}>
          <NavLink to="/" onClick={handleClose}>
            Nosotros
          </NavLink>
          <NavLink to="/productos" onClick={handleClose}>
            Productos
          </NavLink>
          <NavLink to="/servicios" onClick={handleClose}>
            Servicios
          </NavLink>
          <NavLink to="/novedades" onClick={handleClose}>
            Novedades
          </NavLink>
          <NavLink to="/contacto" onClick={handleClose}>
            Contacto
          </NavLink>

          <div className="social">
            <a href="https://www.instagram.com/" target="_blank">
              <img src="/img/instagram.png" width="20px" alt="Logo alt" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src="/img/facebook.png" width="20px" alt="Logo alt" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img src="/img/twitter.png" width="20px" alt="Logo alt" />
            </a>
          </div>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv
          className={`initial ${clicked && !isDesktop ? " active" : ""}`}
        ></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  //menu desktop
  background-color: rgb(1, 15, 17);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    margin-right: 1rem;

    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s;
  }
  a:hover,
  a:focus {
    background-size: 100% 2px;
  }

  //links movil
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    transition: all 0.6s ease;
    a {
      display: none;
    }
    //links desk
    @media (min-width: 768px) {
      position: initial;
      margin-top: 4.3rem;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .logo {
    z-index: 2;
    margin-top: 1.6rem;
    background-image: none;
  }

  .social {
    position: relative;
    bottom: 1rem;
    display: none;
  }

  .social a {
    margin: 0.2rem;
    background-image: none;
  }
  .social a img:hover {
    -webkit-border-radius: 50%;
    box-shadow: 0px 0px 5px 5px white;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transition: all 0.5s ease-in-out;
  }

  .social {
    @media (min-width: 920px) {
      display: block;
    }
  }

  // menu lateral
  .links.active {
    top: 20%;
    left: 0;
    right: 0;
    align-items: center;
    text-align: center;
    z-index: 2;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
      display: block;
    }
    .social {
      display: inline;
    }
    .social a {
      position: relative;
      display: inline;
      top: 2rem;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  z-index: 1;
  transition: all 0.9s ease;

  &.active {
    border-radius: 0 0 40% 0;
    top: 0;
    left: 0;
    width: 80%;
    height: 75%;
  }
`;
