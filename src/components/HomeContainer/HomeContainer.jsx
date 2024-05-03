import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'

import "./HomeContainer.scss";

const HomeContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="homeContainer">
      <section className="sectionHands">
        <p className="liderando">
          {t("leading")} <span className="spanTransform">{t("transform")}</span>{" "}
          {t("talent2")}
        </p>
      </section>
      <section className="sectionPink">
        <p className="parrapfPink">
          {t("parrapfPink")}{" "}
          <span className="spanPink">
            {t("rrhh")},{t("diversity")}
          </span>
          , {t("inclusion")} <span className="spanPink">{t("talent")}</span>{" "}
          {t("fundamentals")}
        </p>
      </section>
      <section className="sectionMision">
        <div className="sectionText">
          <img src="../img/mision.png" alt="icono mision de la empresa" />
          <p className="titleIcons">{t("mission")}</p>
          <p className="parrapfIcon">{t("mission2")}</p>
        </div>
        <div className="sectionText">
          <img src="../img/vision.png" alt="icono vision de la empresa" />
          <p className="titleIcons">{t("vision")}</p>
          <p className="parrapfIcon">{t("vision2")}</p>
        </div>
        <div className="sectionText">
          <img src="../img/valores.png" alt="icono valores de la empresa" />
          <p className="titleIcons">{t("values")}</p>
          <p className="parrapfIcon">{t("values2")}</p>
        </div>
      </section>
      <section className="imgTalent">
        <div className="imgLeft">
          <img
            src="../img/people-sitting-chairs-each-other.webp"
            alt="imagen con vinculo talentos"
          />
          <Link className='wordsLinks' to='/workshops'><button className="talent">{t("talent1")}</button></Link>
            
        
        </div>
        <div className="imgRigth">
          <img
            src="../img/people-analyzing-checking-finance-graphs-office.webp"
            alt="imagen con vinculo empresas"
          />
          
          <Link className='wordsLinks' to='/workshops'><button className="empresas">{t("companies")}</button></Link>

      
        </div>
      </section>
      <section className="rrhhPink">
        <p className="textLeft">
          {t("femi")} <span className="textSpan">{t("femi4")} </span>
          {t("femi2")}
        </p>
        <p className="textRigth">{t("femi3")}</p>
      </section>
      <section className="sectionEnvioCv">
        <p className="textTalent">
          {t("discover")} <span className="spanTalent">{t("discover2")}</span>
        </p>
        
        <Link className='wordsLinks' to='/workshops'><button className="sendEmail">
            <img
              src="../../img/material-symbols_upload.png"
              alt="icon send CV"
            />
            {t("sendCv")}
          </button></Link>
          
        
      </section>
    </div>
  );
};

export default HomeContainer;
