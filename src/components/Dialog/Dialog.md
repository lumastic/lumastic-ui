#### Basic Usage

```jsx
import useModal from "../../hooks/useModal";
import { Button } from "../Button";
import { Type } from "../Type";
const [isShowing, toggle] = useModal();
<>
  <Button variant={"contained"} onClick={toggle} size={"small"}>
    Show Dialog
  </Button>
  <Dialog isShowing={isShowing} hide={toggle}>
    <Type>Yay! Click the close button or anywhere outside to close me!</Type>
  </Dialog>
</>;
```

Source:

```js { "file": "./Dialog.js" }
```
