#### Basic Usage

```jsx
<EmojiSelector onSelect={emoji => alert(JSON.stringify(emoji))} />
```

#### `recommended`

```jsx
import recommendedReactions from "./helpers/recommendReactions.json";
<EmojiSelector
  onSelect={emoji => alert(JSON.stringify(emoji))}
  recommended={recommendedReactions}
/>;
```

Source:

```js { "file": "./EmojiSelector.js" }
```
