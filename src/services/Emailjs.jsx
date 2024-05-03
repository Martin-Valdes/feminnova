import { uploadFile } from "./firebase";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import Swal from "sweetalert2";

const Emailjs = (serviceId, templateId) => {
  const [file, setFile] = useState(null);
  const refForm = useRef();
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const uploadButton = document.querySelector(".uploadButton");
    uploadButton.style.display = "inline-block";
    const uploadInput = document.querySelector("#cvBtn");
    uploadInput.style.display = "none";
  };

  const handleFileUpload = async (file) => {
    try {
      const result = await uploadFile(file);
      console.log(result);
      setResult(result);
      var nuevoParrafo = document.createElement("p");
      var texto = document.createTextNode("CV OK");
      nuevoParrafo.appendChild(texto);
      var formCV = document.getElementById("formCV");
      formCV.appendChild(nuevoParrafo);
      const uploadButton = document.querySelector(".uploadButton");
      uploadButton.style.display = "none";
    } catch (error) {
      console.log("No se pudo subir el CV:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleFileUpload(file);
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        serviceId,
        templateId,
        refForm.current,
        import.meta.env.VITE_API_KEY_EMAILJS_CONFIG
      )
      .then(() => {
        Swal.fire({
          title: "¡Mensaje Enviado!",
          text: "Nos pondremos en contacto en los próximos días :)",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((n) => {
          n.isConfirmed && window.location.reload();
        });
      })
      .catch(() =>
        Swal.fire({
          title: "Error!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Ok",
        })
      );
  };

  return {
    setFile,
    refForm,
    result,
    handleSubmit,
    handleSubmit2,
    handleFileChange,
  };
};

export default Emailjs;
