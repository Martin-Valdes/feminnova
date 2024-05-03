import Emailjs from "../../services/Emailjs";
import "./WorkshopContainer.scss";
import { useTranslation } from "react-i18next";

const WorkshopContainer = () => {
  const { t } = useTranslation();
  const serviceId = "service_cfkki86";
  const templateId = "template_du07dqd";

  const { refForm, result, handleSubmit, handleSubmit2, handleFileChange } =
    Emailjs(serviceId, templateId);

  return (
    <div>
      <section className="sectionHands-2">
        <div>
          <h3 className="contacto-2">Workshops</h3>
          <p>
            {t("workshops1")}

            <span className="spanTransform">{t("workshops2")}</span>

            {t("workshops3")}
          </p>
        </div>
      </section>
      <section className="WorkCards">
        <h4 className="title">{t("workshops4")}</h4>
        <div className="container">
          <div className="card card1">
            <img src="./img/personas-2.svg" alt="personas" />
            <h6>{t("workshops5")}</h6>
            <p>{t("workshops6")}</p>
          </div>
          <div className="card">
            <img src="./img/mano.svg" alt="personas" />
            <h6>{t("workshops7")}</h6>
            <p>{t("workshops8")}</p>
          </div>
          <div className="card card1">
            <img src="./img/group.svg" alt="personas" />
            <h6>{t("workshops9")}</h6>
            <p>{t("workshops10")}</p>
          </div>
          <div className="card">
            <img src="./img/file.svg" alt="personas" />
            <h6>{t("workshops11")}</h6>
            <p>{t("workshops12")}</p>
          </div>
        </div>
      </section>
      <section className="sectionRrhh2">
        <p className="parrapfRrhh2">
          {t("workshops13")}
          <span className="spanRrhh2">{t("workshops14")}</span>
          {t("workshops15")}
          <p className="spanRrhh3">{t("workshops16")}</p>
        </p>

        <div className="formCont2">
          <form id="formCV" className="uploadForm" onSubmit={handleSubmit}>
            <label id="cvBtn" htmlFor="cv">
              {t("workshops17")}
            </label>
            <input
              className="uploadInput"
              type="file"
              id="cv"
              name="cv"
              accept=".pdf"
              onChange={handleFileChange}
            />
            <button className="uploadButton">{t("workshops18")}</button>
          </form>
          <form className="userDataForm" ref={refForm} onSubmit={handleSubmit2}>
            <p htmlFor="user_name">{t("workshops19")}</p>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="textInput"
              required
            />

            <p htmlFor="user_email">{t("workshops20")}</p>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="textInput"
              required
            />

            <textarea
              className="cvTextarea"
              style={{ display: "none" }}
              name="cv"
              defaultValue={result}
            />
            <p>
              <input type="submit" value={t("contact10")} className="submitButton" />
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default WorkshopContainer;
