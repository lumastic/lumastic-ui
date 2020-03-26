#### Breadcrumbs seperates each one of it's children with a `Slash`

#### Basic Usage

```jsx
import { Sparks } from "../../icons/Sparks";
import { Type } from "../../components/Type";
<Breadcrumbs>
  <Type>Bread</Type>
  <Type>Crumbs</Type>
  <Type>
    <Sparks /> Spark
  </Type>
</Breadcrumbs>;
```

Source:

```js { "file": "./Breadcrumbs.js" }
```
