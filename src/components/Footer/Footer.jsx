import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import './Footer.scss'

const Footer = () => {

  const { t } = useTranslation(); 

  return (
    <div className='footerContainer'>
      <section className='upSection'>
        <div className='icoLogo'>
          <img className='linked' src="../../../img/feminnova-Logotipo.svg" alt="feminnva icon company" />
        </div>
        <div className='email'>
          <div className='newGroup'>
            <p className='pEmail'>talent@feminnova.com.ar</p>
            <div className='icons'>
                <Link to='https://www.instagram.com/feminnovatalent?igsh=MXQ1NWY1a2hsbDNtcA=='><img className='insta' src="../../../img/instagram.svg" alt="Icon instagram" /></Link>
                <Link to='https://www.linkedin.com/company/feminnova'><img className='linked' src="../../../img/linkedin.svg" alt="Icon linkedin" /></Link>
            </div>
          </div>
        </div>
        <div className='words'>
           <div className='homeWords'>
              <Link className='wordsLinks' to='/'><p>{t('homeFooter')}</p></Link>
              <Link className='wordsLinks' to='/workshops'><p>{t('sendCvFooter')}</p></Link>
            </div>
            <div className='services'>
              <Link className='wordsLinks' to='services'><p>{t('servicesFooter')}</p></Link>
              <Link className='wordsLinks' to='contact'><p>{t("contactFooter")}</p></Link>
            </div>
            <div className='workshops'>
            <Link className='wordsLinks'to="metodwork"><p>{t("workMethodologyFooter")}</p></Link>
              <Link className='wordsLinks' to='/workshops'><p>{t('talent1')}</p></Link>
            </div>
            <div className='work'>
              <Link className='wordsLinks' to='workshops'><p className='wf'>{t("workshopsFooter")}</p></Link>
              <Link className='wordsLinks' to='contact'><p className='wf'>{t("client2")}</p></Link>
            </div>            
        </div>
      </section>
      <section className='downSection'>
       <p>2024 - {t("reserved")}</p>
      </section>
    </div>
  )
}

export default Footer
