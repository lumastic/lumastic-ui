### PopupMenu does this

#### Basic Usage

```jsx
import { Popup, PopupTrigger, PopupContent } from "../Popup";
import { MenuItem } from "../Menu";
<Popup>
  <PopupTrigger>Test</PopupTrigger>
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
