#### Basic Usage

```jsx
import { postWithComments } from "../../helpers/post.db.js";
<Reaction reaction={postWithComments.reactions[0]} />;
```

#### `canReact` allows the chip to be interactable. `userReacted` highlights its styling

```jsx
import { postWithComments } from "../../helpers/post.db.js";
<Reaction reaction={postWithComments.reactions[0]} userReacted canReact />;
```

#### `onClick` handles interactions

```jsx
import { postWithComments } from "../../helpers/post.db.js";
import { useState } from "react";
const [reactState, setReact] = useState(false);
<Reaction
  reaction={postWithComments.reactions[0]}
  onClick={(id, reacted) => {
    alert(
      `You clicked the reaction - it's ID is ${id}.  It should be set to ${
        reacted ? "reacted" : "not reacted"
      }`
    );
    setReact(reacted);
  }}
  userReacted={reactState}
  canReact
/>;
```

Source:

```js { "file": "./Reaction.js" }
```
