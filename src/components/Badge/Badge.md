#### Basic Usage

```jsx
import { Avatar } from "../Avatar";
<Badge>
  <Avatar />
</Badge>;
```

#### `color`

```jsx padded
import { Avatar } from "../Avatar";
<>
  <Badge>
    <Avatar />
  </Badge>
  <Badge color={"secondary"}>
    <Avatar />
  </Badge>
  <Badge color={"yellow"}>
    <Avatar />
  </Badge>
  <Badge color={"red"}>
    <Avatar />
  </Badge>
</>;
```

#### `anchor`

```jsx padded
import { Avatar } from "../Avatar";
<>
  <Badge anchor={{ v: "top", h: "left" }}>
    <Avatar />
  </Badge>
  <Badge anchor={{ v: "top", h: "right" }}>
    <Avatar />
  </Badge>
  <Badge anchor={{ v: "bottom", h: "right" }}>
    <Avatar />
  </Badge>
  <Badge anchor={{ v: "bottom", h: "left" }}>
    <Avatar />
  </Badge>
</>;
```

#### `render`

```jsx padded
import { Avatar } from "../Avatar";
import { IconButton } from "../IconButton";
import { Gear } from "../../icons";
<Badge
  render={
    <IconButton>
      <Gear />
    </IconButton>
  }
>
  <Avatar />
</Badge>;
```

Source:

```js { "file": "./Badge.js" }
```
