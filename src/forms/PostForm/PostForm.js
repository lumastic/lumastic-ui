import { defaultPressValue } from "pressdk";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useUser } from "../..";
import {
  Button,
  Form,
  Link,
  MenuItem,
  Option,
  PressInput,
  Select,
  TextInput,
  Type
} from "../../components";
import { findMentions, parseContent } from "../../helpers";
import { useReset } from "../../hooks";
import { PaperAirplane, Plus } from "../../icons";
import {
  createProgressBoard,
  createSparkRoute,
  upgradeRoute
} from "../../routes";
import { Signature, SparkCrumbs, SparkSelectCrumbs } from "../../templates";
import style from "./PostForm.scss";

const postSchema = yup.object().shape({
  content: yup.string().required("This field is required"),
  progressBoardId: yup.string().required("This field is required")
});

const PostForm = ({
  onSubmit,
  sparks = [],
  defaultValues = {},
  buttonLabel = "Post",
  buttonProps = {},
  edit
}) => {
  const user = useUser();
  const [reset, toggle] = useReset();
  const [selectedSpark, setSpark] = useState();
  const [progressBoards, setProgressBoards] = useState([]);
  useEffect(() => {
    if (sparks.length === 1) {
      setSpark(sparks[0]);
      setProgressBoards(sparks[0]?.progressBoards);
    }
  }, [sparks]);

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
  const handleSubmit = async (data, e, rest) => {
    const object = JSON.parse(data?.content);
    const mentions = findMentions(object);
    data.mentions = mentions;
    const { reset: formReset } = rest;
    rest.reset = () => {
      formReset();
      toggle();
    };
    if (onSubmit) {
      await onSubmit(data, e, rest);
    } else {
      alert(JSON.stringify(data));
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={{
        content: JSON.stringify(defaultPressValue()),
        ...defaultValues
      }}
      className={style.form}
      validationSchema={postSchema}
    >
      {sparks.length === 1 ? (
        <>
          <SparkCrumbs spark={sparks[0]} user={user} />
          <TextInput name="progressBoardId" hidden />
        </>
      ) : (
        <SparkSelectCrumbs
          name="spark"
          organization={user}
          sparks={sparks}
          onChange={sparkId => {
            setSpark(sparks.find(spark => spark?.id === sparkId));
            setProgressBoards(
              sparks.find(spark => spark?.id === sparkId)?.progressBoards
            );
          }}
        />
      )}

      <PressInput
        defaultValue={parseContent(defaultValues?.content)}
        reset={reset}
        name="content"
        placeholder="What's on your mind..."
        className={style.content}
        big
      />
      <div className={style.right}>
        {selectedSpark && !edit && (
          <Select
            name="progressBoardId"
            small
            placeholder="Share with..."
            right
            defaultValue={progressBoards[0]?.id}
            addOption={
              selectedSpark?.belongsTo?.isLicensed ? (
                <Link
                  button
                  to={createProgressBoard(
                    selectedSpark?.belongsTo?.name,
                    selectedSpark?.id
                  )}
                >
                  <MenuItem>
                    <Signature>
                      <Type body3>
                        <Plus />
                      </Type>
                      <Type body3>New Bubble</Type>
                    </Signature>
                  </MenuItem>
                </Link>
              ) : (
                <Link button to={upgradeRoute}>
                  <MenuItem>
                    <Signature>
                      <Type body3>🚀</Type>
                      <div>
                        <Type body3>Share privately</Type>
                        <Type color="grey" setSize="0.7rem">
                          Upgrade your membership
                        </Type>
                      </div>
                    </Signature>
                  </MenuItem>
                </Link>
              )
            }
          >
            {progressBoards?.map((board, key) => (
              <Option name={board?.id} key={board?.id || key}>
                <Type body3>{board?.name}</Type>
              </Option>
            ))}
          </Select>
        )}
      </div>
      <Button type="submit" variant="contained" {...buttonProps}>
        <PaperAirplane />
        {buttonLabel}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  sparks: PropTypes.array,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
  buttonProps: PropTypes.object,
  buttonLabel: PropTypes.string,
  edit: PropTypes.bool
};

export { PostForm };
