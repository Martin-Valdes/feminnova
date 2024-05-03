import Emailjs from "../../services/Emailjs";
import { useState } from "react";

const FormCont = () => {
  const serviceId = "service_cfkki86";
  const templateId = "template_ahfnsga";

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
      <form ref={refForm} onSubmit={handleSubmit2}>
        <label htmlFor="user_name">Name:</label>
        <input type="text" id="user_name" name="user_name" required />

        <label>
          <input
            type="checkbox"
            name="user_description"
            value="Talento"
            checked={isCheckedTalento}
            onChange={handleCheckTalento}
          />
          Talento
        </label>

        <label>
          <input
            type="checkbox"
            name="user_description"
            value="Empresa"
            checked={isCheckedEmpresa}
            onChange={handleCheckEmpresa}
          />
          Empresa
        </label>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          minLength="20"
        ></textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default FormCont;
