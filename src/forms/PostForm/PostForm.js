import PropTypes from "prop-types";
import React from "react";
import * as yup from "yup";
import {
  Form,
  TextInput,
  Button,
  Select,
  Option,
  Link,
  Type,
  Point
} from "../../components";
import { useUser } from "../../hooks";
import { SparkSelect, Signature, SparkCrumbs } from "../../templates";
import { PaperAirplane } from "../../icons";
import { createSparkRoute } from "../../routes";
import style from "./PostForm.scss";

const postSchema = yup.object().shape({
  content: yup.string().required("This field is required"),
  spark: yup.string(),
  type: yup.string().required("This field is required")
});

const PostForm = ({ onSubmit, sparks = [], defaultValues = {} }) => {
  const user = useUser();
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
  const defaults = { ...defaultValues };
  if (sparks.length === 1) {
    defaults.spark = sparks[0].id;
  }
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={defaults}
      className={style.form}
      validationSchema={postSchema}
    >
      {sparks.length > 1 && (
        <SparkSelect
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

      <TextInput name="content" placeholder="What's the latests..." />
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
  defaultValues: PropTypes.object
};

export { PostForm };
