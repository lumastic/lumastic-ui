#### Button Popup

```jsx
import { useRef } from "react";
import useModal from "../../hooks/useModal";
import { Button } from "../Button";
import { Type } from "../Type";
const [isShowing, toggle] = useModal();
const buttonRef = useRef();
<>
  <Button
    variant={"contained"}
    onClick={() => toggle()}
    size={"small"}
    ref={buttonRef}
  >
    Click Me!
  </Button>
  <Popup anchorRef={buttonRef} isShowing={isShowing} hide={toggle}>
    <Type align={"center"}>
      Yay! Click the close button or anywhere outside to close me!
    </Type>
  </Popup>
</>;
```

Source:

```js { "file": "./Popup.js" }
```
