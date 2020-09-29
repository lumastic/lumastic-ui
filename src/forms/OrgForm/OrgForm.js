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
      if (!image.error) {
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
            children: image.error,
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

const OrgForm = ({
  onSubmit,
  defaultValues = {},
  validate = false,
  customValidation,
  imageUploadHandler
}) => (
  <Form
    onSubmit={onSubmit}
    defaultValues={defaultValues}
    validationSchema={validate && (customValidation || orgSchema)}
  >
    <div className={style.container}>
      <div className={style.avatar}>
        <AvatarEdit
          imageUploadHandler={imageUploadHandler}
          initialURL={defaultValues.avatarURL}
        />
      </div>

      <List className={style.text}>
        <div>
          <Label>Name</Label>
          <TextInput name="name" placeholder="Name..." />
        </div>
        <div>
          <Label>Bio</Label>
          <TextInput name="bio" placeholder="Short description ..." />
        </div>
      </List>
    </div>

    <Button variant="contained" type="submit">
      Save
    </Button>
  </Form>
);

OrgForm.propTypes = {
  onSubmit: PropTypes.func,
  validate: PropTypes.bool,
  defaultValues: PropTypes.object,
  imageUploadHandler: PropTypes.func,
  customValidation: PropTypes.object
};

export { OrgForm };
