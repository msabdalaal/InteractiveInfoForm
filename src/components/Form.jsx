import { useState } from "react";
import Cards from "../components/Cards";

export default function Form() {
  let [formData, setFormData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  let [validate, setValidate] = useState({
    name: true,
    number: true,
    month: true,
    year: true,
    cvc: true,
  });
  function validateName() {
    if (formData.name.match("[^a-zA-z]")) {
      setValidate((e) => {
        return {
          ...e,
          name: false,
        };
      });
    } else {
      setValidate((e) => {
        return {
          ...e,
          name: true,
        };
      });
    }
  }
  function validateNumber() {
    if (formData.number.match("[^0-9]")) {
      setValidate((e) => {
        return {
          ...e,
          number: false,
        };
      });
    } else {
      setValidate((e) => {
        return {
          ...e,
          number: true,
        };
      });
    }
  }
  function validateMonth() {
    if (formData.month.match("[^0-9]")) {
      setValidate((e) => {
        return {
          ...e,
          month: false,
        };
      });
    } else {
      setValidate((e) => {
        return {
          ...e,
          month: true,
        };
      });
    }
  }
  function validateYear() {
    if (formData.year.match("[^0-9]")) {
      setValidate((e) => {
        return {
          ...e,
          year: false,
        };
      });
    } else {
      setValidate((e) => {
        return {
          ...e,
          year: true,
        };
      });
    }
  }
  function validateCVC() {
    if (formData.cvc.match("[^0-9]")) {
      setValidate((e) => {
        return {
          ...e,
          cvc: false,
        };
      });
    } else {
      setValidate((e) => {
        return {
          ...e,
          cvc: true,
        };
      });
    }
  }
  function formValidation() {
    validateName();
    validateNumber();
    validateMonth();
    validateYear();
    validateCVC();
  }
  function confirmValidation(e) {
    e.preventDefault();
    formValidation();
    let result;
    for (let i = 0; i < 5; i++) {
      if (formData[Object.keys(formData)[i]] !== "") {
        result = true;
      } else {
        result = false;
        break;
      }
    }
    if (result) {
      validate.name &&
      validate.number &&
      validate.month &&
      validate.year &&
      validate.cvc
        ? alert("succsess")
        : alert("failed");
    } else {
      alert("failed");
    }
  }
  function handleChange(e) {
    formValidation();
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <>
      <Cards
        name={formData.name}
        number={formData.number}
        month={formData.month}
        year={formData.year}
        cvc={formData.cvc}
      />
      <form onSubmit={confirmValidation}>
        <label className="col-full" htmlFor="name">
          CARDHOLDER NAME {validate.name ? "" : <span>only charachters</span>}
        </label>
        <input
          onChange={(event) => handleChange(event)}
          className={`col-full ${validate.name ? "" : "wrong"}`}
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Jane Doe"
          value={formData.name}
        />
        <label className={`col-full`} htmlFor="number">
          CARD NUMBER {validate.number ? "" : <span>only numbers</span>}
        </label>
        <input
          onChange={handleChange}
          className={`col-full ${validate.number ? "" : "wrong"}`}
          type="text"
          name="number"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          value={formData.number}
          maxLength="16"
        />
        <label className="col-half-2" htmlFor="number">
          EXP. DATE (MM/YY){" "}
          {validate.month && validate.year ? "" : <span>only numbers</span>}
        </label>
        <label className="col-half" htmlFor="cvc">
          CVC {validate.cvc ? "" : <span>only numbers</span>}
        </label>
        <input
          onChange={handleChange}
          className={`col-quarter ${validate.month ? "" : "wrong"}`}
          type="text"
          name="month"
          id="month"
          placeholder="MM"
          value={formData.month}
          maxLength="2"
        />
        <input
          onChange={handleChange}
          className={`col-quarter-2 ${validate.year ? "" : "wrong"}`}
          type="text"
          name="year"
          id="year"
          placeholder="YY"
          value={formData.year}
          maxLength="2"
        />
        <input
          onChange={handleChange}
          className={`col-half ${validate.cvc ? "" : "wrong"}`}
          type="text"
          name="cvc"
          id="cvc"
          placeholder="e.g. 123"
          value={formData.cvc}
          maxLength="3"
        />
        <button className="col-full">Confirm</button>
      </form>
    </>
  );
}
