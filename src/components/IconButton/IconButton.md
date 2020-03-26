#### Basic Usage

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

<IconButton color={"grey"}>
  <FontAwesomeIcon icon={faTrash} />
</IconButton>;
```

#### `IconButtons` can be controlled with `Button` props

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
<IconButton color={"primary"} variant={"contained"} size={"big"}>
  <FontAwesomeIcon icon={faStar} />
</IconButton>;
```

#### `setSize` prop can be used to override default sizes

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
<IconButton color={"primary"} variant={"contained"} setSize={"1.75rem"}>
  <FontAwesomeIcon icon={faStar} />
</IconButton>;
```

Source:

```js { "file": "./IconButton.js" }
```
