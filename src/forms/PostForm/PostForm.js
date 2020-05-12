import PropTypes from "prop-types";
import React from "react";
import {
  Form,
  TextInput,
  Button,
  Select,
  Option,
  Type,
  Point
} from "../../components";
import { useUser } from "../../hooks";
import { SparkSelect, Signature } from "../../templates";
import { PaperAirplane } from "../../icons";
import style from "./PostForm.scss";

const PostForm = ({ onSubmit, sparks = [], defaultValues = {} }) => {
  const user = useUser();
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      className={style.form}
    >
      <SparkSelect
        small
        name="spark"
        organization={{ ...user }}
        sparks={sparks}
      />

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
