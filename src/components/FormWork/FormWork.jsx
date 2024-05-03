import Emailjs from "../../services/Emailjs";

const FormWork = () => {
  const serviceId = "service_cfkki86";
  const templateId = "template_du07dqd";


  const { setFile, refForm, result, handleSubmit, handleSubmit2 } = Emailjs(
    serviceId,
    templateId,

  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cv">Upload CV</label>
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button>Upload</button>
      </form>
      <form ref={refForm} onSubmit={handleSubmit2}>
        <label htmlFor="user_name">Name:</label>
        <input type="text" id="user_name" name="user_name" required />

        <label htmlFor="user_email">Email:</label>
        <input type="email" id="user_email" name="user_email" required />

        <textarea style={{ display: "none" }} name="cv" defaultValue={result} />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default FormWork;
