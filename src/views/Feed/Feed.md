#### Basic Usage

```jsx
import { ProgressPost } from "../ProgressPost";
import { postNoComments, postWithComments } from "../../data/post.db.js";
<Feed>
  <ProgressPost spark={{ title: "Spark Title" }} post={postNoComments} />
  <ProgressPost spark={{ title: "Spark Title" }} post={postWithComments} />
  <ProgressPost spark={{ title: "Spark Title" }} post={postNoComments} />
</Feed>;
```

Source:

```js { "file": "./Feed.js" }
```
