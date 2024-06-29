import { useState } from "react";

import "./Form.scss";

const Form = (props) => {
  const { handleApiCall } = props;
  const [apiUrl, setApiUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: "GET",
      url: apiUrl,
    };
    handleApiCall(formData);
  };

  const updateApiUrl = (e) => {
    setApiUrl(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={updateApiUrl} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
};

export default Form;
