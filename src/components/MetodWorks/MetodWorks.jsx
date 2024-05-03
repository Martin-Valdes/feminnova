import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

import './MetodWorks.scss'

const MetodWorks = () => {

  const {t} = useTranslation();

  return (
    <div className='worksContainer'>
      <section className='metodWork'>
        <h1>{t('methodology2')}</h1>
        <p className='metodParrapf'>{t('mant')} <span className='standardText'>{t('standard')} </span >{t('every')} <span className='standardText'>{t('align')}</span>{t('client')}</p>
      </section>
      <section className='line'>
        <h2>{t('how')}</h2>
        <section className='imagenesText'>
          <section className='sectionLeft'>
            <div className='parrapfOne'>
              <div className='groupItem sourcing'>
                <div className='new'>
                  <div className='titleSo '>
                    <p className='titleParrapf'>{t("sourcing")}</p>
                  </div>
                  <p className='descriptionParrapf'>{t("recolection")}</p>
                </div>
                <img src="../../img/busqueda.svg" alt="icon search" />
              </div>
              <div className='groupItem group'>
                <div className='new'>
                  <div className='titleSo'>
                    <p className='titleParrapf'>{t("groupEn")}</p>
                  </div>
                  <p className='descriptionParrapf'>{t('preselection')}</p>
                </div>
                <img src="../../img/pepicons-pencil_people.png" alt="icon Pencil" />
              </div>
              <div className='groupItem selection'>
                <div className='new'>
                  <div className='titleSo'>
                    <p className='titleParrapf'>{t("selection")}</p>
                  </div>
                  <p className='descriptionParrapf'>{t("tecnics")}</p>
                </div>
                <img src="../../img/winner.svg" alt="Icon winner" />
              </div>
              <div className='groupItem ofer'>
                <div className='new'>
                  <div className='titleSo'>
                    <p className='titleParrapf'>{t("ofer")}</p>
                  </div>
                  <p className='descriptionParrapf'>{t("help")}</p>
                </div>
                
                <img src="../../img/regular.svg" alt="icon Regular" />
              </div>
            </div>
          </section>
          <section className='sectionImg'>
            <div className='imgDiv'>
              <img className='point' src="../../img/Frame.svg" alt="Imagen points" />
              <img className='line' src="../../img/Line.svg" alt="Imagen Line" />
            </div>
          </section>
          <section className='sectionRigth'>
            <div className='newContainer'>
              <div className='groupItem screen'>
              <img src="../../img/tel.svg" alt="icon phone" />
              <div className='new'>
                <div className='titleSo'>
                  <p className='titleParrapf'>{t("screening")}</p>
                </div>  
                <p className='descriptionParrapf'>{t("call")}</p>
              </div>
              </div>
              <div className='groupItem entrev'>
                <img src="../../img/person.svg" alt="iamge person" />
                <div className='new'>
                  <div className='titleSo'>
                    <p className='titleParrapf'>{t("entrev")}</p>
                  </div>
                  <p className='descriptionParrapf'>{t("help")}</p>
                </div>
                
              </div>
              <div className='groupItem present'>
                <img src="../../img/pizarra.svg" alt="icon Board" />
                <div className='new'>
                  <div className='titleSo'>
                    <p className='titleParrapf'>{t("presentation")}</p>
                  </div>
                  <p className='descriptionParrapf'>{t("presentation2")}</p>
                </div>
                
              </div>
            </div> 
          </section>
        </section>
      </section>
      <section className='sectionRrhh'>
        <p className='parrapfRrhh'>{t("femContact")} <span className='spanRrhh'>{t("workHands")}</span>{t("clientEquip")} <span className='spanRrhh'>{t("positive")}</span> {t("baseEqui")}</p>
       
        <Link className='wordsLinks' to='/contact'>
         <button className='buttonContact'>{t("contactBotton")}</button></Link> 
            
         
        
      </section>
    </div>
  )
}


export default MetodWorks