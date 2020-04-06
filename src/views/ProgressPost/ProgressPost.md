#### Basic Usage

```jsx
import { postNoComments } from "../../helpers/postdb";
<ProgressPost spark={{ title: "Spark Title" }} post={postNoComments} />;
```

#### With Comments

```jsx
import { postWithComments } from "../../helpers/postdb";
<ProgressPost
  canComment
  spark={{ title: "Spark Title" }}
  post={postWithComments}
/>;
```

Source:

```js { "file": "./ProgressPost.js" }
```
