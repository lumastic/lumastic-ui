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

#### `reacted`

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
/>;
```

#### `onClick`

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

**NOTE**: `userReacted` is the **_second_** argument passed to the `onClick` handler

Source:

```js { "file": "./Reaction.js" }
```
