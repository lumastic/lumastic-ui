#### Basic Usage

```jsx
import { spark1, spark2 } from "../../helpers/spark.db.js";
const sparks = [spark1, spark2];
<SparkSelect sparks={sparks} organization={spark1.createdBy}>
  SparkSelect
</SparkSelect>;
```

Source:

```js { "file": "./SparkSelect.js" }
```
