import { defaultPressValue } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import * as yup from "yup";
import { useUser } from "../..";
import {
  Button,
  Form,
  Link,
  Option,
  Point,
  PressInput,
  Select,
  TextInput,
  Type
} from "../../components";
import useModal from "../../hooks/useModal";
import { PaperAirplane } from "../../icons";
import { createSparkRoute } from "../../routes";
import { Signature, SparkCrumbs, SparkSelectCrumbs } from "../../templates";
import style from "./PostForm.scss";

const postSchema = yup.object().shape({
  content: yup.string().required("This field is required"),
  spark: yup.string().required("This field is required"),
  type: yup.string().required("This field is required")
});

const PostForm = ({ onSubmit, sparks = [], defaultValues = {}, callbacks }) => {
  const user = useUser();
  const [reset, toggle] = useModal();
  if (sparks.length === 0)
    return (
      <>
        <Link to={createSparkRoute}>
          <Type align="center" color="primary">
            Create a spark to join the conversation
          </Type>
        </Link>
      </>
    );
  const defaults = {
    content: JSON.stringify(defaultPressValue()),
    ...defaultValues
  };
  if (sparks.length === 1) {
    defaults.spark = sparks[0].id;
  }
  const handleSubmit = (data, e, rest) => {
    if (onSubmit) {
      onSubmit(data, e, rest);
    } else {
      alert(JSON.stringify(data));
    }
    toggle();
  };
  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={defaults}
      className={style.form}
      validationSchema={postSchema}
    >
      {sparks.length > 1 && (
        <SparkSelectCrumbs
          small
          name="spark"
          organization={{ ...user }}
          sparks={sparks}
        />
      )}
      {sparks.length === 1 && (
        <>
          <SparkCrumbs small spark={sparks[0]} organization={{ ...user }} />
          <TextInput name="spark" hidden />
        </>
      )}

      <PressInput
        reset={reset}
        name="content"
        placeholder="What's the latests..."
      />
      <div className={style.bottom}>
        <div className={style.left}>
          <Select
            name="type"
            small
            placeholder="Select a spark..."
            defaultValue="progress"
          >
            <Option name="progress">
              <Signature>
                <Point />
                <Type body2>Progress</Type>
              </Signature>
            </Option>
            <Option name="issue">
              <Signature>
                <Point color="red" />
                <Type body2>Help</Type>
              </Signature>
            </Option>
            <Option name="resolved">
              <Signature>
                <Point color="green" />
                <Type body2>Solved</Type>
              </Signature>
            </Option>
          </Select>
        </div>
        <div className={style.right}>
          <Button type="submit">
            <PaperAirplane />
            Post
          </Button>
        </div>
      </div>
    </Form>
  );
};

PostForm.propTypes = {
  sparks: PropTypes.array,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
  callbacks: PropTypes.object
};

export { PostForm };
