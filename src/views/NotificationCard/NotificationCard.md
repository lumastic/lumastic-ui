#### Basic Usage

```jsx
import { keith } from "../../data/user.db.js";
import { postNoComments } from "../../data/post.db.js";
import { spark1 } from "../../data/spark.db.js";
<NotificationCard
  notification={{
    sender: keith,
    post: postNoComments,
    spark: spark1,
    content:
      "This is a comment on a post that is part of one of your sparks.  If you click the “your post” text, it will take you to that post where you can reply to it and keep the conversation going."
  }}
/>;
```

```jsx
import { drew } from "../../data/user.db.js";
import { postWithComments } from "../../data/post.db.js";
import { spark1 } from "../../data/spark.db.js";
<NotificationCard
  notification={{
    sender: drew,
    post: postWithComments,
    spark: spark1,
    content:
      "Hey @Danya, this is a comment I’m leaving on a post to notify someone else who commented that I also replied…just in case we were having a conversation that they’d want to see."
  }}
/>;
```

Source:

```js { "file": "./NotificationCard.js" }
```
