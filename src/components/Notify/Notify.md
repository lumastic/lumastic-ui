#### Other imports

import { NotifyCenter, useNotify } from "lumastic-ui/Notify";

#### Basic Usage

```jsx padded
import { NotifyCenter } from ".";
import { NotifyButton } from "./helpers/NotifyButton";
<NotifyCenter>
  <NotifyButton>Notify Info</NotifyButton>
  <br />
  <br />
  <NotifyButton severity={"success"} color={"green"}>
    Notify Success
  </NotifyButton>
  <br />
  <br />
  <NotifyButton severity={"warning"} color={"yellow"}>
    Notify Warning
  </NotifyButton>
  <br />
  <br />
  <NotifyButton severity={"error"} color={"red"}>
    Notify Error
  </NotifyButton>
  <br />
  <br />
</NotifyCenter>;
```

#### `fixed` dispatches a notification that stays onscreen until dismissed programatically or by the user

```jsx padded
import { NotifyCenter } from ".";
import { NotifyButton } from "./helpers/NotifyButton";
<NotifyCenter>
  <NotifyButton fixed>Fixed Notify</NotifyButton>
</NotifyCenter>;
```

#### How to dispatch notifications

```js { "file": "./helpers/NotifyButton.js" }
```

Source:

```js { "file": "./Notify.js" }
```
