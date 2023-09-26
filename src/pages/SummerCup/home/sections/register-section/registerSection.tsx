import { useForm } from "react-hook-form";
import useRegister from "../../../../../Hooks/useRegister";
import classes from "./registerSection.module.css";
import { useState } from "react";

import Popup from "./../../../../../Components/popup/popup";
import { NavLink } from "react-router-dom";
import Loading from "../../../../../Components/Loading/loading";
import { RegisterApi } from "../../../../../types/types";

const RegisterSection: React.FC = () => {
  const email_regular =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [firstNameStatus, setFirstNameStatus] = useState<boolean>(false);
  const [lastNameStatus, setLastNameStatus] = useState<boolean>(false);
  const [phoneNumberStatus, setPhoneNumberStatus] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<boolean>(false);
  const [addressStatus, setAddressStatus] = useState<boolean>(false);
  const [teamNameStatus, setTeamNameStatus] = useState<boolean>(false);
  const [zipCodeStatus, setZipCodeStatus] = useState<boolean>(false);
  const [cityStatus, setCityStatus] = useState<boolean>(false);

  const {
    handle_register,
    sending,
    // result_req,
    // showPopup,
    popupStatus,
    message,
    changeShowPopupStatus,
  } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterApi>();

  const handleRegister = (data: RegisterApi) => {
    handle_register(data);
  };
  return (
    <>
      <Popup
        showPopup={popupStatus.showPopup}
        result_req={popupStatus.result_req}
        message={message}
        changeShowPopupStatus={changeShowPopupStatus}
      />
      <div className={classes.register_section_wrapper}>
        <div className={classes.register_section}>
          <div className={classes.container}>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className={classes.input_wrapper}>
                <label>
                  <span>First Name</span>
                  <div
                    className={`${classes.input} ${
                      errors.f_name ? classes.error : ""
                    }
                        ${firstNameStatus ? classes.active : ""}
                        `}
                  >
                    <input
                      type="text"
                      {...register("f_name", {
                        required: "Please complete this field.",
                      })}
                      onFocus={() => {
                        setFirstNameStatus(true);
                      }}
                      onBlur={() => {
                        setFirstNameStatus(false);
                      }}
                    />
                  </div>
                  {errors.f_name && (
                    <span className={classes.error}>
                      {errors.f_name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label>
                  <span>Last Name</span>
                  <div
                    className={`${classes.input} ${
                      errors.l_name ? classes.error : ""
                    }
                        ${lastNameStatus ? classes.active : ""}
                        `}
                  >
                    <input
                      type="text"
                      {...register("l_name", {
                        required: "Please complete this field.",
                      })}
                      onFocus={() => {
                        setLastNameStatus(true);
                      }}
                      onBlur={() => {
                        setLastNameStatus(false);
                      }}
                    />
                  </div>
                  {errors.l_name && (
                    <span className={classes.error}>
                      {errors.l_name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label>
                  <span>Phone Number</span>
                  <div
                    className={`${classes.input} ${
                      errors.mobile ? classes.error : ""
                    }
                        ${phoneNumberStatus ? classes.active : ""}
                        `}
                  >
                    <input
                      type="text"
                      {...register("mobile", {
                        required: "Please complete this field.",
                      })}
                      onFocus={() => {
                        setPhoneNumberStatus(true);
                      }}
                      onBlur={() => {
                        setPhoneNumberStatus(false);
                      }}
                    />
                  </div>
                  {errors.mobile && (
                    <span className={classes.error}>
                      {errors.mobile.message}
                    </span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label>
                  <span>Email Address</span>
                  <div
                    className={`
                        ${classes.input} 
                        ${errors.email ? classes.error : ""}
                        ${emailStatus ? classes.active : ""}
                        `}
                  >
                    <input
                      type="text"
                      {...register("email", {
                        pattern: {
                          message: "your format email is not currect",
                          value: email_regular,
                        },
                        required: "Please complete this field.",
                      })}
                      onFocus={() => {
                        setEmailStatus(true);
                      }}
                      onBlur={() => {
                        setEmailStatus(false);
                      }}
                    />
                  </div>
                  {errors.email && (
                    <span className={classes.error}>
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label>
                  <span>Address</span>
                  <div
                    className={`
                        ${classes.input} 
                        ${errors.address ? classes.error : ""}
                        ${addressStatus ? classes.active : ""}
                        `}
                  >
                    <input
                      type="text"
                      {...register("address", {
                        required: "Please complete this field.",
                      })}
                      onFocus={() => {
                        setAddressStatus(true);
                      }}
                      onBlur={() => {
                        setAddressStatus(false);
                      }}
                    />
                  </div>
                  {errors.address && (
                    <span className={classes.error}>
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label>
                  <span>Zip Code</span>
                  <div
                    className={`
                        ${classes.input} 
                        ${errors.zip_code ? classes.error : ""}
                        ${zipCodeStatus ? classes.active : ""}
                        `}
                  >
                    <input
                      type="text"
                      {...register("zip_code", {
                        required: "Please complete this field.",
                        maxLength: {
                          message: "your zip code is too long.",
                          value: 6,
                        },
                      })}
                      onFocus={() => {
                        setZipCodeStatus(true);
                      }}
                      onBlur={() => {
                        setZipCodeStatus(false);
                      }}
                    />
                  </div>
                  {errors.zip_code && (
                    <span className={classes.error}>
                      {errors.zip_code.message}
                    </span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label>
                  <span>City</span>
                  <div
                    className={`
                        ${classes.input} 
                        ${errors.city ? classes.error : ""}
                        ${cityStatus ? classes.active : ""}
                        `}
                  >
                    <input
                      type="text"
                      {...register("city", {
                        required: "Please complete this field.",
                      })}
                      onFocus={() => {
                        setCityStatus(true);
                      }}
                      onBlur={() => {
                        setCityStatus(false);
                      }}
                    />
                  </div>
                  {errors.city && (
                    <span className={classes.error}>{errors.city.message}</span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label>
                  <span>Team Name</span>
                  <div
                    className={`
                        ${classes.input} 
                        ${errors.team_name ? classes.error : ""}
                        ${teamNameStatus ? classes.active : ""}
                        `}
                  >
                    <input
                      type="text"
                      {...register("team_name", {
                        required: "Please complete this field.",
                      })}
                      onFocus={() => {
                        setTeamNameStatus(true);
                      }}
                      onBlur={() => {
                        setTeamNameStatus(false);
                      }}
                    />
                  </div>
                  {errors.team_name && (
                    <span className={classes.error}>
                      {errors.team_name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className={classes.button_show_register}>
                <NavLink to="/SommerCup" className={classes.button_back}>
                  <div className={classes.image}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.57 5.93L3.5 12L9.57 18.07"
                        stroke="#FFEA00"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.4999 12H3.66992"
                        stroke="#FFEA00"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </NavLink>
                <button
                  type="submit"
                  className={classes.button}
                  disabled={sending ? true : false}
                >
                  <p>{sending ? "sending" : "Register Now"}</p>
                  {sending ? <Loading /> : null}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSection;
