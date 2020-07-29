import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './styles.css';
//import ButtonLink from './ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="GFLIX Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="cadastro/Video">
            Novo Video
            </Button>
        </nav>
    )
}

export default Menu;