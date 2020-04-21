#### Basic Usage

```jsx
<EmojiSelector onSelect={emoji => alert(JSON.stringify(emoji))} />
```

#### `recommended`

```jsx
import recommendedReactions from "../../templates/Reactions/helpers/recommendReactions.json";
<EmojiSelector
  onSelect={emoji => alert(JSON.stringify(emoji))}
  recommended={recommendedReactions}
/>;
```

Source:

```js { "file": "./EmojiSelector.js" }
```
