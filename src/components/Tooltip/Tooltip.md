### Tooltip does this

#### Basic Usage

```jsx
import { Button } from "../Button";

<Tooltip label={"Label"}>
  <Button variant={"contained"}>Tooltip</Button>
</Tooltip>;
```

#### `position` changes the tooltips orientation around the element

```jsx padded
import { Button } from "../Button";

<>
  <Tooltip label={"Tooltip on bottom"}>
    <Button variant={"contained"}>Bottom</Button>
  </Tooltip>
  <Tooltip label={"Tooltip on top"} position={"top"}>
    <Button variant={"contained"}>Top</Button>
  </Tooltip>
  <Tooltip label={"Tooltip on left"} position={"left"}>
    <Button variant={"contained"}>Left</Button>
  </Tooltip>
  <Tooltip label={"Tooltip on right"} position={"right"}>
    <Button variant={"contained"}>Right</Button>
  </Tooltip>
</>;
```

#### `noDelay` can be used for showing Tooltips immediately

```jsx
import { Button } from "../Button";

<Tooltip label={"Without Delay"} noDelay>
  <Button variant={"contained"}>No Delay</Button>
</Tooltip>;
```

#### `render` allows for tooltip to be rendered by custom component

```jsx
import { Button } from "../Button";
import { CustomTooltip } from "./helpers/CustomTooltip";

<Tooltip label={"Without Delay"} render={CustomTooltip}>
  <Button variant={"contained"}>Custom Component</Button>
</Tooltip>;
```

Source:

```js { "file": "./Tooltip.js" }
```
