import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
//styles
import classes from "./register.module.css";
//images
import logoExplain from "./../../../assets/pictures/home/logo-explain.png";
import registerImage from "./../../../assets/pictures/home/hero-img.png";
import useRegister from "../../../Hooks/useRegister";
import Popup from "./../../../Components/popup/popup";
import Loading from "../../../Components/Loading/loading";
import { RegisterApi } from "../../../types/types";
import { useGetCountries } from "../../../Hooks/useGetCountries";
import plusBox from "./../../../icons/plus-box.svg";
import FileInput from "../../../Components/register/FileInput";

const Register = () => {
  const email_regular =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [firstNameStatus, setFirstNameStatus] = useState(false);
  const [lastNameStatus, setLastNameStatus] = useState(false);
  const [phoneNumberStatus, setPhoneNumberStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [addressStatus, setAddressStatus] = useState(false);
  const [zipCodeStatus, setZipCodeStatus] = useState(false);
  const [countryStatus, setCountryStatus] = useState(false);
  const [cityStatus, setCityStatus] = useState(false);
  const [teamNameStatus, setTeamNameStatus] = useState(false);

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
    getCounries,
    result: countriesResult,
    error: countriesError,
  } = useGetCountries();

  useEffect(() => {
    getCounries();
  }, [countriesError]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<RegisterApi>();

  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setValue("file", e.target.files[0]);
  };

  const handleRegister = (data: RegisterApi) => {
    // let data_req = {
    //   f_name: data.firstName,
    //   l_name: data.lastName,
    //   mobile: data.phoneNumber,
    //   email: data.email,
    //   address: data.address,
    //   zip_code: data.zipCode,
    //   Country: data.Country,
    //   team_name: data.teamName,
    // };
    handle_register(data);
  };

  return (
    <>
      <Helmet>
        <title>WinterCup | Register</title>
      </Helmet>
      <Popup
        showPopup={popupStatus.showPopup}
        result_req={popupStatus.result_req}
        message={message}
        changeShowPopupStatus={changeShowPopupStatus}
      />
      <div className={classes.register_layout}>
        <div className={classes.register_wrapper}>
          <div className={classes.orange_bg1}></div>
          <div className={classes.register}>
            <div className={classes.container}>
              <div className={classes.items_left}>
                <div className={classes.title}>
                  {/* <div className={classes.logo}>
                    <img src={Logo} alt="logo" title="logo" />
                  </div> */}
                  <div className={classes.text}>
                    <h1>Winter Cup</h1>
                  </div>
                </div>
                <div className={classes.explain}>
                  <p>Geleitet wird das Event von Schiedsrichtern des ÖKFB.</p>
                </div>
                {/* <div className={classes.bottom_explain}>
                  <p>In Kooperation mit:</p>
                </div> */}
                <div className={classes.image}>
                  <img src={logoExplain} alt="explain-image" />
                </div>
                <div className={classes.register_wrapper}>
                  <div className={classes.title}>
                    <p>Register</p>
                  </div>

                  <form onSubmit={handleSubmit(handleRegister)}>
                    <div className={classes.input_layout}>
                      <div className={classes.input_wrapper}>
                        <label>
                          <span>Vorname</span>
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
                                required: "Bitte akzeptieren Sie dieses Feld.",
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
                          <span>Nachname</span>
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
                                required: "Bitte akzeptieren Sie dieses Feld.",
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
                    </div>
                    <div className={classes.input_layout}>
                      <div className={classes.input_wrapper}>
                        <label>
                          <span>Telefonnummer</span>
                          <div
                            className={`${classes.input} ${
                              errors.mobile ? classes.error : ""
                            }
                        ${phoneNumberStatus ? classes.active : ""}
                        `}
                          >
                            <input
                              type="number"
                              {...register("mobile", {
                                required: "Bitte akzeptieren Sie dieses Feld.",
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
                          <span>Email-Adresse</span>
                          <div
                            className={`
                        ${classes.input} 
                        ${errors.email ? classes.error : ""}
                        ${emailStatus ? classes.active : ""}
                        `}
                          >
                            <input
                              type="email"
                              {...register("email", {
                                pattern: {
                                  message: "Ihr E-Mail-Format ist nicht korrekt.",
                                  value: email_regular,
                                },
                                required: "Bitte akzeptieren Sie dieses Feld.",
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
                    </div>
                    <div className={classes.input_layout}>
                      <div className={classes.input_wrapper}>
                        <label>
                          <span>Adresse</span>
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
                                required: "Bitte akzeptieren Sie dieses Feld.",
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
                          <span>Postleitzahl</span>
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
                                required: "Bitte akzeptieren Sie dieses Feld.",
                                maxLength: {
                                  message: "Ihre Postleitzahl ist zu lang.",
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
                    </div>
                    <div className={classes.input_layout}>
                      <div className={classes.input_wrapper}>
                        <label>
                          <span>Nation</span>
                          <div
                            className={`
                            ${classes.input} 
                            ${errors.country ? classes.error : ""}
                            ${countryStatus ? classes.active : ""}
                            `}
                          >
                            <select
                              {...register("country", {
                                validate: (value) =>
                                  value === "default"
                                    ? "Bitte wählen Sie Ihr Land."
                                    : undefined,
                              })}
                              onFocus={() => {
                                setCountryStatus(true);
                              }}
                              onBlur={() => {
                                setCountryStatus(false);
                              }}
                            >
                              <option value="default">
                                select your country
                              </option>
                              {countriesResult.map((country) => (
                                <option value={country.id}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          {errors.country && (
                            <span className={classes.error}>
                              {errors.country.message}
                            </span>
                          )}
                        </label>
                      </div>
                      <div className={classes.input_wrapper}>
                        <label>
                          <span>Stadt</span>
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
                                required: "Bitte akzeptieren Sie dieses Feld.",
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
                            <span className={classes.error}>
                              {errors.city.message}
                            </span>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className={classes.input_layout}>
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
                                required: "Bitte akzeptieren Sie dieses Feld.",
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
                    </div>
                    <div className={classes.importFileContainer}>
                      {/* <img className={classes.uploadBox} src={plusBox} /> */}
                      {/* <span className={classes.importFileBoxWrapper}>
                        <span className={classes.importFileBox}>
                          <Plus />
                        </span>
                      </span> */}
                      {/* <span>Upload your ID card</span> */}
                      <FileInput
                        id="uploadFile"
                        image={plusBox}
                        maxSize={2000000}
                        {...register("file", { required: "Bitte laden Sie eine gültige Datei hoch." })}
                        onChange={fileInputHandler}
                      />
                      {errors.file && (
                        <span className={classes.error}>
                          {errors.file.message}
                        </span>
                      )}
                    </div>
                    <div className={classes.checkbox_layout}>
                      <div className={classes.checkbox_wrapper}>
                        <input
                          type="checkbox"
                          {...register("acceptAGB", {
                            validate: (value) =>
                              value === false
                                ? "Bitte akzeptieren Sie dieses Feld."
                                : undefined,
                          })}
                        />
                        <div className={classes.checkbox}></div>
                        <div className={classes.text}>
                          <p>
                            Ich habe die AGBs gelesen und bin damit
                            einverstanden
                            <NavLink
                              to="https://www.goldensports.at/events-agb"
                              target="_blank"
                            >
                              Events AGB
                            </NavLink>
                            .
                          </p>
                        </div>
                      </div>
                      {errors.acceptAGB && (
                        <span className={classes.error}>
                          {errors.acceptAGB.message}
                        </span>
                      )}
                    </div>

                    <div className={classes.button_show_register}>
                      <NavLink to="/" className={classes.button_back}>
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
              <div className={classes.items_right}>
                <div className={classes.image}>
                  <img src={registerImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
