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

Source:

```js { "file": "./Reaction.js" }
```
