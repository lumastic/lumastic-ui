#### `Popup` requires two child components: `PopupTrigger` & `PopupContent`

#### Basic Usage

```jsx
import { PopupContent, PopupTrigger } from ".";
import { Button } from "../Button";
import { Type } from "../Type";

<Popup>
  <PopupTrigger>
    <Button variant={"contained"} size={"small"}>
      Click Me!
    </Button>
  </PopupTrigger>
  <PopupContent>
    <Type>Yay! Click the close button or anywhere outside to close me!</Type>
  </PopupContent>
</Popup>;
```

#### `anchor` & `transform` change the Popup's positioning

```jsx
import { PopupContent, PopupTrigger } from ".";
import { Button } from "../Button";
import { Type } from "../Type";
<>
  <Popup anchor={{ v: "top", h: "left" }} transform={{ v: "top", h: "left" }}>
    <PopupTrigger>
      <Button variant={"contained"} size={"small"}>
        Top Left
      </Button>
    </PopupTrigger>
    <PopupContent>
      <Type>
        This popup's top-left corner is anchored to the top left corner of the
        trigger
      </Type>
    </PopupContent>
  </Popup>
  <Popup
    anchor={{ v: "center", h: "right" }}
    transform={{ v: "center", h: "left" }}
  >
    <PopupTrigger>
      <Button variant={"contained"} size={"small"}>
        Middle Right
      </Button>
    </PopupTrigger>
    <PopupContent>
      <Type>
        This popup's top-left corner is anchored to the top left corner of the
        trigger
      </Type>
    </PopupContent>
  </Popup>
</>;
```

#### `render` allows for `PopupContent` to be rendered as a custom component

```jsx
import { PopupContent, PopupTrigger } from ".";
import { Button } from "../Button";
import { CustomPopup } from "./helpers/CustomPopup";
import { Type } from "../Type";

<Popup>
  <PopupTrigger>
    <Button variant={"contained"} size={"small"}>
      Custom Popup
    </Button>
  </PopupTrigger>
  <PopupContent render={CustomPopup}>
    <Type>Yay! Click the close button or anywhere outside to close me!</Type>
  </PopupContent>
</Popup>;
```

Source:

```js { "file": "./Popup.js" }
```
