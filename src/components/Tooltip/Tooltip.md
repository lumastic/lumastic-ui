### Tooltip does this

#### Basic Usage

```jsx
import { Button } from "../Button";

<Tooltip label={"Label"}>
  <Button>Tooltip</Button>
</Tooltip>;
```

#### `position` changes the tooltips orientation around the element

```jsx
import { Button } from "../Button";

<>
  <Tooltip label={"Tooltip on bottom"}>
    <Button>Bottom</Button>
  </Tooltip>
  <Tooltip label={"Tooltip on top"} position={"top"}>
    <Button>Top</Button>
  </Tooltip>
  <Tooltip label={"Tooltip on left"} position={"left"}>
    <Button>Left</Button>
  </Tooltip>
  <Tooltip label={"Tooltip on right"} position={"right"}>
    <Button>Right</Button>
  </Tooltip>
</>;
```

#### `noDelay` can be used for showing Tooltips immediately

```jsx
import { Button } from "../Button";

<Tooltip label={"Without Delay"} noDelay>
  <Button>No Delay</Button>
</Tooltip>;
```

Source:

```js { "file": "./Tooltip.js" }
```
