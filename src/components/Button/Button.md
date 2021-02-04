#### Basic Usage

```jsx padded
<Button>Basic</Button>
<Button variant={"contained"}>Contained</Button>
<Button variant={"outlined"}>OUtlined</Button>
<Button disabled>Disabled</Button>
```

#### `colors`

```jsx padded
<Button variant={"contained"}>Default</Button>
<Button color={"primary"} variant={"contained"}>Primary</Button>
<Button color={"red"} variant={"contained"}>red</Button>
<Button color={"green"} variant={"contained"}>Green</Button>
<Button color={"yellow"} variant={"contained"}>Yellow</Button>
<Button color={"grey"}>Grey</Button>
```

#### `size`

```jsx padded
<Button variant={"contained"} size={"big"}>
  Big
</Button>
<Button variant={"contained"} size={"small"}>
  Small
</Button>
```

#### With Icons

```jsx padded
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

<Button variant={"contained"}>
  <FontAwesomeIcon icon={faCoffee} />
  Primary
</Button>;
```

Source:

```js { "file": "./Button.js" }
```
