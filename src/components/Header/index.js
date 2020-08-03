import React from 'react';
import Logo from '../../assets/img/logo.png';
import './style.css';
import './components/ButtonLink';
import ButtonLink from '../ButtonLink';

function Header() {
  return(
    <nav className="Header">
      <a href="/">
        <img className="Logo" src={Logo} alt="Pedal Leve logo"/>
      </a>
      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}
export default Header;