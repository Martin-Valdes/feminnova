import "./ServicesContainer.scss";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'

const ServicesContainer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="sectionHands3">
        <div>
          <h3 className="contacto3">
            {t("services1")}
            <span className="spanTransform3">{t("services2")}</span>
            {t("services3")}
            <span className="spanTransform3">{t("services4")}</span>
          </h3>
        </div>
      </section>
      <section className="servCards">
        <h4 className="title">{t("services5")}</h4>
        <div className="container">
          <div className="card2">
            <img src="./img/services1.svg" alt="equipo" />
            <h6>{t("services6")}</h6>
            <p>{t("services7")}</p>
          </div>
          <div className="card">
            <img src="./img/services2.svg" alt="programas" />
            <h6>{t("services8")}</h6>
            <p>{t("services9")}</p>
          </div>
          <div className="card2">
            <img src="./img/services3.svg" alt="Diversidad e Inclusión" />
            <h6>{t("services10")}</h6>
            <p>{t("services11")}</p>
          </div>
          <div className="card">
            <img src="./img/services4.svg" alt="Reclutamiento" />
            <h6>{t("services12")}</h6>
            <p>{t("services13")}</p>
          </div>
          <div className="card2">
            <img src="./img/services5.svg" alt="Optimización laboral" />
            <h6>{t("services14")}</h6>
            <p>{t("services15")}</p>
          </div>
          <div className="card">
            <img src="./img/services6.svg" alt="Potenciando Empresas" />
            <h6>{t("services16")}</h6>
            <p>{t("services17")}</p>
          </div>
          <div className="card2" id="card3" >
            <img src="./img/services7.svg" alt="Capacitaciones" />
            <h6>{t("services18")}</h6>
            <p>{t("services19")}</p>
          </div>
          <div className="card">
            <img src="./img/services8.svg" alt="Adaptación empresarial" />
            <h6>{t("services20")}</h6>
            <p>{t("services21")}</p>
          </div>
        </div>
      </section>
      <section className="sectionRrhh3">
        <p className="parrapfRrhh3">
          <span className="spanRrhh3">{t("services22")}</span> {t("services23")}  <br /> {t("services30")}
          <span className="spanRrhh3"> {t("services24")}</span>
          <p className="spanRrhh4">
            {t("services25")}
          </p> <Link className='wordsLinks' to='/contact'>
          <div className="submitButton2" href="/contact">
          {t("contactBotton")}
          </div></Link> 
        </p>
      </section>
    </div>
  );
};

export default ServicesContainer;
