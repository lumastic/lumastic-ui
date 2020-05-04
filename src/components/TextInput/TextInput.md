### TextInput does this

#### Basic Usage

```jsx
import { Form } from "..";
<Form>
  <TextInput name={"Text Input"} />
</Form>;
```

#### `placeholder` defaults to `name` if not specified

```jsx
import { Form } from "..";
<Form>
  <TextInput name={"Name as placeholder"} />
  <TextInput placeholder={"Placeholder text"} />
</Form>;
```

Source:

```js { "file": "./TextInput.js" }
```
