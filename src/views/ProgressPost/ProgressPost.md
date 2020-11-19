#### Basic Usage

```jsx
import { postNoComments } from "../../data/post.db.js";
<ProgressPost spark={{ title: "Spark Title" }} post={postNoComments} />;
```

#### With Comments

```jsx
import { postWithComments } from "../../data/post.db.js";
<ProgressPost
  canComment
  spark={postWithComments.spark}
  post={postWithComments}
  deleteHandler={() => alert("Deleting")}
/>;
```

Source:

```js { "file": "./ProgressPost.js" }
```
