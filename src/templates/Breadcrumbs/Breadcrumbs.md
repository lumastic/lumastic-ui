#### Breadcrumbs seperates each one of it's children with a `Slash`

#### Basic Usage

```jsx
import { Signature } from "../Signature";
import { Sparks } from "../../icons/Sparks";
import { Type } from "../../components/Type";
<Breadcrumbs>
  <Type>Bread</Type>
  <Type>Crumbs</Type>
  <Signature>
    <Sparks />
    <Type>Spark</Type>
  </Signature>
</Breadcrumbs>;
```

#### Basic Usage

```jsx
import { Signature } from "../Signature";
import { Sparks } from "../../icons/Sparks";
import { Type } from "../../components/Type";
import { Avatar } from "../../components/Avatar";
<Breadcrumbs>
  <Avatar />
  <Signature>
    <Sparks />
    <Type>Spark</Type>
  </Signature>
</Breadcrumbs>;
```

Source:

```js { "file": "./Breadcrumbs.js" }
```
