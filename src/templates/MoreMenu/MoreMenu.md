#### `MoreMenu` is a template built of an `IconButton` & `Popup` who's content is a `Menu`

#### Basic Usage

```jsx
import { MenuItem } from "../../components/Menu";
<MoreMenu>
  <MenuItem>Menu Item 1</MenuItem>
  <MenuItem>Menu Item 2</MenuItem>
  <MenuItem>Menu Item 3</MenuItem>
</MoreMenu>;
```

#### `position` can be "left" or "right"

```jsx
import { MenuItem } from "../../components/Menu";
<MoreMenu position={"right"}>
  <MenuItem>Menu Item 1</MenuItem>
  <MenuItem>Menu Item 2</MenuItem>
  <MenuItem>Menu Item 3</MenuItem>
</MoreMenu>;
```

Source:

```js { "file": "./MoreMenu.js" }
```
