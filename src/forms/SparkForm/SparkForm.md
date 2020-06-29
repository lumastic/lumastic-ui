#### Basic Usage

```jsx
import { drew, keith } from "../../data/user.db.js";
<SparkForm
  organizations={[drew, keith]}
  onSubmit={data => alert(JSON.stringify(data))}
/>;
```

Source:

```js { "file": "./SparkForm.js" }
```
