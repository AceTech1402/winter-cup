// import { useAppDispatch } from "hooks/useReduxToolkit";
import { Ref, forwardRef, useState, useEffect } from "react";
import classes from "./FileInput.module.css";
import plusBox from "./../../icons/plus-box.svg";

interface IProps {
  id: any;
  onChange?: (event: any) => void;
  image?: any;
  // width?: number;
  // height?: number;
  maxSize?: number;
  fileTypes?: string[];
}

const FileInput = forwardRef(
  (props: IProps, ref: Ref<HTMLInputElement> | null) => {
    const {
      id,
      onChange,
      image,
      // width,
      // height,
      maxSize,
      fileTypes = ["png", "jpeg", "jpg"],
    } = props;

    const [previewImage, setPreviewImage] = useState<any>(image);
    const [isUploaded, setIsUploaded] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const handleClick = () => {
      document.getElementById(id)?.click();
    };

    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //   setPreviewImage(image);
    // }, [image]);

    const handleChange = (e: any) => {
      const isFile = e?.target?.files?.length > 0;
      if (maxSize && isFile) {
        if (e?.target?.files[0]?.size > maxSize) {
          // dispatch(showError(`File must be less than ${maxSize / 1000000}Mb`));
          // e.target.value = "";
          // e.target.files = [];
          setError("Die Größe der ausgewählten Datei ist größer als 2MB");
          return;
        }
      }
      if (fileTypes.length > 0 && isFile) {
        const fileName = e?.target?.files[0]?.name?.split(".");
        const fileType = fileName[fileName?.length - 1];
        if (!fileTypes.includes(fileType)) {
          // dispatch(showError(`Wrong file type`));
          e.target.value = "";
          setError("");
          return;
        }
      }
      if (e.target.files.length > 0)
        setPreviewImage(URL?.createObjectURL(e.target.files[0]));
      setIsUploaded(true);
      setError("");
      onChange?.(e);
    };

    return (
      <>
        <div className={classes.importFileContainer}>
          {!isUploaded ? (
            <>
              <img
                className={classes.uploadBox}
                src={plusBox}
                onClick={handleClick}
              />
              <span>Laden Sie Ihren Personalausweis hoch</span>
              
            </>
          ) : (
            <>
              <div className={classes.imgContainer}>
                <img
                  style={{
                    height: 100,
                    width: 150,
                  }}
                  src={previewImage}
                  alt="Preview"
                />
                <button
                  className={classes.changeBtn}
                  onClick={handleClick}
                  type="button"
                >
                  Change
                </button>
              </div>
              
            </>
          )}
        </div>

        <input
          // ref={ref}
          type="file"
          id={props.id}
          className="hidden"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {error !== "" && <span className={classes.error}>{error}</span>}
      </>
    );
  }
);

export default FileInput;
