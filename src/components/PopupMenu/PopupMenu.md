#### Basic Usage

```jsx
import { Popup, PopupTrigger, PopupContent } from "../Popup";
import { MenuItem } from "../Menu";
import { Button } from "../Button";
<Popup>
  <PopupTrigger>
    <Button>Open Menu</Button>
  </PopupTrigger>
  <PopupContent render={PopupMenu}>
    <MenuItem>Menu Item 1</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
    <MenuItem>Menu Item 3</MenuItem>
  </PopupContent>
</Popup>;
```

#### `active` `MenuItem`

```jsx
import { Popup, PopupTrigger, PopupContent } from "../Popup";
import { MenuItem } from "../Menu";
import { Button } from "../Button";
<Popup>
  <PopupTrigger>
    <Button>Open Menu</Button>
  </PopupTrigger>
  <PopupContent render={PopupMenu}>
    <MenuItem>Menu Item 1</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
    <MenuItem active>Menu Item 3</MenuItem>
  </PopupContent>
</Popup>;
```

Source:

```js { "file": "./PopupMenu.js" }
```
