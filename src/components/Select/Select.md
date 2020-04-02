#### Basic Usage

```jsx
import { Option } from "../Option";
import { Type } from "../Type";
<Select placeholder={"Select an item"}>
  <Option name={"first"}>
    <Type>First</Type>
  </Option>
  <Option name={"second"}>
    <Type>Second</Type>
  </Option>
</Select>;
```

#### `defaultValue`

```jsx
import { Option } from "../Option";
import { Type } from "../Type";
<Select defaultValue={"first"}>
  <Option name={"first"}>
    <Type>First</Type>
  </Option>
  <Option name={"second"}>
    <Type>Second</Type>
  </Option>
</Select>;
```

#### `onChange`

```jsx
import { useState } from "react";
import { Option } from "../Option";
import { Type } from "../Type";
const [value, setValue] = useState("Test");
<>
  <Select defaultValue={"first"} onChange={val => setValue(val)}>
    <Option name={"first"}>
      <Type>First</Type>
    </Option>
    <Option name={"second"}>
      <Type>Second</Type>
    </Option>
  </Select>
  <Type caption>Value:</Type>
  <Type>{value}</Type>
</>;
```

#### Size changes based on `Option`s

```jsx
import { Option } from "../Option";
import { Type } from "../Type";
<>
  <Select defaultValue={"first"}>
    <Option name={"first"}>
      <Type body2>First</Type>
    </Option>
    <Option name={"second"}>
      <Type>Second</Type>
    </Option>
  </Select>
</>;
```

Source:

```js { "file": "./Select.js" }
```
