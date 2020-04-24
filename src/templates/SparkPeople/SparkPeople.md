#### Basic Usage

```jsx
import { spark1 } from "../../helpers/spark.db.js";
import { Button } from "../../components/Button";
<SparkPeople
  spark={spark1}
  collabAction={<Button size="small">Manage</Button>}
  followAction={<Button size="small">See All</Button>}
/>;
```

Source:

```js { "file": "./SparkPeople.js" }
```
