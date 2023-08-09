import React from 'react'

import { styled } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './styleFooter.css'
import { Link, NavLink } from 'react-router-dom';
const CustomBottomNavigation = styled(BottomNavigation)(`
  background: linear-gradient(to bottom, #edcbf6, #cf7be7);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`);

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-columns">
        <div className="footer-column">
            <h3>Contáctanos</h3>
            <BottomNavigationAction label="WhatsApp" value="whatsapp" icon={<WhatsAppIcon />} />
            <p>Teléfono: +51 987 654 321</p>
            <p>Email: inspirateuni@uni.edu.pe </p>
        </div>

        <div className="footer-column">
            <p>Políticas de privacidad</p>
            <p>Código de ética</p>
            <p>Miembros de directorio</p>
        </div>

      </div>
      <div className='footer-row'>
        <div className="footer-icons">
          <h3>SÍGUENOS EN NUESTRAS REDES SOCIALES</h3>
            <div className='footer-icons'>
                <CustomBottomNavigation>
                <a href="https://www.instagram.com/inspirateuni/" target="_blank" rel="noopener noreferrer">
                  <BottomNavigationAction  label="Instagram" icon={<InstagramIcon />} />
                </a>

                <a href="https://www.facebook.com/groups/1183296551739414" target="_blank" rel="noopener noreferrer">
                  <BottomNavigationAction  label="Faceboock" icon={<FacebookIcon />} />
                </a>

                <a href="no hay link ._." target="_blank" rel="noopener noreferrer">
                  <BottomNavigationAction  label="LinkedIn" icon={<LinkedInIcon />} />
                </a>
                </CustomBottomNavigation>
            
            </div>
        </div>
      </div>
    </div>
  )
}
