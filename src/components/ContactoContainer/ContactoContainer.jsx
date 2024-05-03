import "./ContactoContainer.scss";
import Emailjs from "../../services/Emailjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactoContainer = () => {
  const serviceId = "service_cfkki86";
  const templateId = "template_ahfnsga";
  const { t } = useTranslation();

  const { refForm, handleSubmit2 } = Emailjs(serviceId, templateId);

  const [isCheckedTalento, setIsCheckedTalento] = useState(true);
  const [isCheckedEmpresa, setIsCheckedEmpresa] = useState(false);

  const handleCheckTalento = () => {
    if (!isCheckedTalento) {
      setIsCheckedTalento(true);
      setIsCheckedEmpresa(false);
    }
  };

  const handleCheckEmpresa = () => {
    if (!isCheckedEmpresa) {
      setIsCheckedEmpresa(true);
      setIsCheckedTalento(false);
    }
  };
  return (
    <div>
      <section className="sectionHands">
        <div>
          <h3 className="contacto">{t("contact1")}</h3>
          <p>
            <span className="spanTransform spanTransform-2">
              {t("contact2")}
            </span>
            {t("contact3")}
            <span className="spanTransform">{t("contact4")}</span>
            <span className="spanTransform-3">
            {t("contact5")}
            </span>
          </p>
        </div>
      </section>
      <section className="sectionContacto">
        <div className="formCont">
          <form ref={refForm} onSubmit={handleSubmit2}>
            <p>{t("workshops19")}</p>
            <input type="text" id="user_name" name="user_name" required />

            <p>{t("contact6")}</p>
            <p className="p-2">
              <input
                type="checkbox"
                name="user_description"
                value="Talento"
                className="check"
                id="empresaCheckbox"
                checked={isCheckedTalento}
                onChange={handleCheckTalento}
              />
              {t("contact7")}
              <input
                type="checkbox"
                name="user_description"
                value="Empresa"
                className="check"
                id="empresaCheckbox"
                checked={isCheckedEmpresa}
                onChange={handleCheckEmpresa}
              />
              {t("contact8")}
              
            </p>

            <p>{t("contact9")}</p>
            <textarea
              id="message"
              name="message"
              required
              minLength="20"
            ></textarea>
            <p>
              <input className="btn" type="submit" value={t("contact10")} />
            </p>
          </form>
        </div>
        <div className="contactoInfo">
          <div>
            <img src="./img/email.svg" alt="carta" />
            <a
              href="mailto:Talent@feminnova.com.ar
"
            >
              Talent@feminnova.com.ar
            </a>
          </div>
          <div>
            <img src="./img/reloj.svg" alt="reloj" />
            <p>{t("contact11")}</p>
          </div>
          <div>
            <img src="./img/personas.svg" alt="personas" />
            <p>{t("contact12")}</p>
          </div>
          <div className="div2">
            <a
              href="https://www.linkedin.com/company/feminnova/"
              target="_blank"
            >
              <img src="./img/linkedin.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/feminnovatalent" target="_blank">
              <img src="./img/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoContainer;
