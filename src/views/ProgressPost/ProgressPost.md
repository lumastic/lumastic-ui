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
  spark={{ title: "Spark Title" }}
  post={postWithComments}
/>;
```

Source:

```js { "file": "./ProgressPost.js" }
```
