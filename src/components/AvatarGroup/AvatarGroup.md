#### Basic Usage

```jsx
import { Avatar } from "../Avatar";
<AvatarGroup>
  <Avatar />
  <Avatar />
  <Avatar />
</AvatarGroup>;
```

#### `more` allows a number to be placed at the end. It maxes out at 99.

```jsx
import { Avatar } from "../Avatar";
<>
  <AvatarGroup more={33}>
    <Avatar />
    <Avatar />
    <Avatar />
  </AvatarGroup>
  <br />
  <AvatarGroup more={103}>
    <Avatar />
    <Avatar />
    <Avatar />
  </AvatarGroup>
</>;
```

Source:

```js { "file": "./AvatarGroup.js" }
```
