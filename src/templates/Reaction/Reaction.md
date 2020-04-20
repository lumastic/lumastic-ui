#### Basic Usage

```jsx
import { drew, keith, atishay } from "../../helpers/user.db.js";
<Reaction
  emoji={{
    annotation: "waving hand",
    group: 1,
    hexcode: "1F44B",
    order: 163,
    shortcodes: ["wave"],
    tags: ["hand", "wave", "waving"],
    unicode: "👋"
  }}
  reactors={[drew, keith, atishay]}
/>;
```

#### `canReact` & `reacted` allow for additional interactions

```jsx
import { drew, keith, atishay } from "../../helpers/user.db.js";
<Reaction
  emoji={{
    annotation: "waving hand",
    group: 1,
    hexcode: "1F44B",
    order: 163,
    shortcodes: ["wave"],
    tags: ["hand", "wave", "waving"],
    unicode: "👋"
  }}
  reactors={[drew, keith, atishay]}
  userReacted
  canReact
/>;
```

#### `onClick` handler allow for interacting with the `Reaction`

**NOTE**: `userReacted` is the **_second_** argument passed to the `onClick` handler

```jsx
import { drew, keith, atishay } from "../../helpers/user.db.js";
<Reaction
  emoji={{
    annotation: "waving hand",
    group: 1,
    hexcode: "1F44B",
    order: 163,
    shortcodes: ["wave"],
    tags: ["hand", "wave", "waving"],
    unicode: "👋"
  }}
  reactors={[drew, keith, atishay]}
  onClick={(e, reacted) =>
    alert(
      `You clicked the reaction - it's current state is ${
        reacted ? "reacted" : "not reacted"
      }`
    )
  }
  canReact
/>;
```

Source:

```js { "file": "./Reaction.js" }
```
