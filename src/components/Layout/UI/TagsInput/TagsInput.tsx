import React from "react";
import classes from "./TagsInput.module.scss";

interface TagsInputProps {
  tagList: string[];
}

const TagsInput = ({ tagList }: TagsInputProps) => {
  const [tags, setTags] = React.useState(tagList);

  const removeTags = (indexToRemove: any) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const removeLastTag = () => {
    const newTags = [...tags];
    newTags.splice(-1);
    setTags(newTags);
  };

  const addTags = (event: any) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter") {
      addTags(e);
    } else if (e.key === "Backspace") {
      removeLastTag();
    }
  };
  return (
    <div className={classes.TagsInput}>
      <ul className={classes.tags}>
        {tags.map((tag, index) => (
          <li key={index} className={classes.tag}>
            <span className={classes["tag-title"]}>{tag}</span>
            <span
              role="button"
              className={classes["tag-close-icon"]}
              onClick={() => removeTags(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <div className={classes.Input}>
        <input
          type="text"
          onKeyUp={handleKeyUp}
          placeholder="Press enter to add a new tag"
        />
      </div>
    </div>
  );
};

export default TagsInput;
