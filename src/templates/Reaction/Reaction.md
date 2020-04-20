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

#### `onClick` & `onRemove`

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
  onClick={() => alert("You clicked the reaction")}
  onRemove={() => alert("You clicked to remove")}
  canRemove
/>;
```

**NOTE**: `canRemove` must be set to `true` to use `onRemove`

Source:

```js { "file": "./Reaction.js" }
```
