#### Basic Usage

```jsx
import { Avatar } from "../Avatar";
import { Type } from "../Type";
import { Sparks } from "../../icons/Sparks";
<>
  <Chip label={"Label"} symbol={<Avatar size={"small"} />} />
  <br />
  <br />
  <Chip label={"Label"} symbol={<Sparks />} />
</>;
```

#### `color`

```jsx
import { Avatar } from "../Avatar";
import { Type } from "../Type";
import { Sparks } from "../../icons/Sparks";
<>
  <Chip label={"Label"} symbol={<Avatar size={"small"} />} color={"grey"} />
  <br />
  <br />
  <Chip label={"Label"} symbol={<Sparks />} color={"grey"} />
</>;
```

#### `onRemove`

```jsx
import { Avatar } from "../Avatar";
import { Type } from "../Type";
import { Sparks } from "../../icons/Sparks";
<>
  <Chip
    label={"Label"}
    symbol={<Avatar size={"small"} />}
    onRemove={() => alert("You clicked the remove button!")}
  />
  <br />
  <br />
  <Chip
    label={"Label"}
    symbol={<Sparks />}
    color={"grey"}
    onRemove={() => alert("You clicked the remove button!")}
  />
</>;
```

Source:

```js { "file": "./Chip.js" }
```
