import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import {
  Button,
  Form,
  Label,
  TextInput,
  Badge,
  Avatar,
  IconButton,
  useNotify,
  List
} from "../../components";
import { useInputContext } from "../../helpers/useInputContext";
import { Pencil } from "../../icons";
import style from "./OrgForm.scss";

// eslint-disable-next-line react/prop-types
const AvatarEdit = ({ initialURL, imageUploadHandler = () => {} }) => {
  const fileRef = useRef();
  const [avatarSrc, setSrc] = useState(initialURL);
  const { notifyDispatch = () => console.log("Notify") } = useNotify();
  const { register, setValue } = useInputContext();
  useEffect(() => {
    if (register) {
      register({ name: "avatarURL" });
      setValue("avatarURL", initialURL);
    }
  }, [register]);
  const onAvatarChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onerror = () => {
      reader.abort();
      alert("There was an error reading that file...please try again");
    };
    reader.onload = async reading => {
      notifyDispatch({
        type: "add",
        props: {
          children: "Uploading image..."
        }
      });
      setSrc(reading.target.result);
      const image = await imageUploadHandler(file);
      if (image && !image?.error) {
        notifyDispatch({
          type: "add",
          props: {
            children: "Image uploaded successfully!",
            severity: "success"
          }
        });
        setValue("avatarURL", image.src, true);
      } else {
        notifyDispatch({
          type: "add",
          props: {
            children:
              image?.error ||
              "Sorry! There was an error uploading that image...",
            severity: "error"
          }
        });
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <Badge
        render={
          <IconButton color="grey" onClick={() => fileRef?.current?.click()}>
            <Pencil />
          </IconButton>
        }
      >
        <Avatar src={avatarSrc} setSize="4rem" />
      </Badge>
      <input type="file" ref={fileRef} hidden onChange={onAvatarChange} />
    </>
  );
};

// eslint-disable-next-line react/prop-types
const HeaderEdit = ({ initialURL, imageUploadHandler = () => {} }) => {
  const fileRef = useRef();
  const [headerSrc, setSrc] = useState(initialURL);
  const { notifyDispatch = () => console.log("Notify") } = useNotify();
  const { register, setValue } = useInputContext();
  useEffect(() => {
    if (register) {
      register({ name: "headerURL" });
      setValue("headerURL", initialURL);
    }
  }, [register]);
  const onHeaderChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onerror = () => {
      reader.abort();
      alert("There was an error reading that file...please try again");
    };
    reader.onload = async reading => {
      notifyDispatch({
        type: "add",
        props: {
          children: "Uploading image..."
        }
      });
      setSrc(reading.target.result);
      const image = await imageUploadHandler(file);
      if (image && !image?.error) {
        notifyDispatch({
          type: "add",
          props: {
            children: "Image uploaded successfully!",
            severity: "success"
          }
        });
        setValue("headerURL", image.src, true);
      } else {
        notifyDispatch({
          type: "add",
          props: {
            children:
              image?.error ||
              "Sorry! There was an error uploading that image...",
            severity: "error"
          }
        });
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={style.hero}>
      <img
        src={
          headerSrc || "https://cdn.lumastic.com/media/v1/pages/demo/Header.png"
        }
        alt="Profile header"
        className={style.image}
      />
      <div className={style.headerbtn}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => fileRef?.current?.click()}
        >
          <Pencil />
          EDIT
        </Button>
      </div>
      <input type="file" ref={fileRef} hidden onChange={onHeaderChange} />
    </div>
  );
};

const orgSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_]*$/,
      "Names can only contain letters, numbers, and underscores."
    )
    .required("This field is required"),
  bio: yup.string()
});

const OrgForm = ({
  onSubmit,
  defaultValues = {},
  validate = false,
  customValidation,
  imageUploadHandler,
  headerUploadHandler,
  buttonLabel = "SAVE",
  create,
  edit
}) => (
  <Form
    onSubmit={onSubmit}
    defaultValues={defaultValues}
    validationSchema={validate && (customValidation || orgSchema)}
  >
    {!create && (
      <HeaderEdit
        initialURL={defaultValues.headerURL}
        imageUploadHandler={headerUploadHandler}
      />
    )}

    <div className={style.container}>
      {!create && (
        <div className={style.avatar}>
          <AvatarEdit
            imageUploadHandler={imageUploadHandler}
            initialURL={defaultValues.avatarURL}
          />
        </div>
      )}

      <List className={style.text}>
        {!edit && (
          <div>
            <Label>Name</Label>
            <TextInput name="name" placeholder="Name..." />
          </div>
        )}

        <div>
          <Label>Bio</Label>
          <TextInput name="bio" placeholder="Short description ..." />
        </div>
      </List>
    </div>

    <Button variant="contained" type="submit">
      {buttonLabel}
    </Button>
  </Form>
);

OrgForm.propTypes = {
  onSubmit: PropTypes.func,
  validate: PropTypes.bool,
  defaultValues: PropTypes.object,
  imageUploadHandler: PropTypes.func,
  headerUploadHandler: PropTypes.func,
  customValidation: PropTypes.object,
  buttonLabel: PropTypes.string,
  create: PropTypes.bool,
  edit: PropTypes.bool
};

export { OrgForm };
