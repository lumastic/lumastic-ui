import { MenuItem } from "lumastic-ui/Menu"

#### Basic Usage

```jsx
import { MenuItem } from "./MenuItem";
import { Type } from "../Type";
<Menu>
  <MenuItem>
    <Type>Menu Item 1</Type>
  </MenuItem>
  <MenuItem>
    <Type>Menu Item 2</Type>
  </MenuItem>
</Menu>;
```

#### `label`

```jsx
import { MenuItem } from "./MenuItem";
import { Type } from "../Type";
<Menu label={"Labeled Menu"}>
  <MenuItem>
    <Type>Menu Item 1</Type>
  </MenuItem>
  <MenuItem>
    <Type>Menu Item 2</Type>
  </MenuItem>
</Menu>;
```

Source:

```js { "file": "./Menu.js" }
```

```js { "file": "./MenuItem/MenuItem.js" }
```
