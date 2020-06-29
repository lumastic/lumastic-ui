#### Basic Usage

```jsx
import { TextInput } from "../TextInput";
import { Select } from "../Select";
import { Option } from "../Option";
<Form debug>
  <Select defaultValue={"first"} name={"select"}>
    <Option name={"first"}>First</Option>
    <Option name={"second"}>Second</Option>
    <Option name={"third"}>Third</Option>
  </Select>
  <TextInput name={"text"} />
</Form>;
```

Source:

```js { "file": "./Form.js" }
```
