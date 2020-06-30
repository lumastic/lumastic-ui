#### Basic Usage

```jsx
<BoardCard
  block
  card={{
    content: JSON.stringify([
      {
        name: "type",
        id: 1,
        value: [
          {
            name: "default",
            children: [{ text: "This is a test" }]
          }
        ]
      }
    ])
  }}
/>
```

Source:

```js { "file": "./BoardCard.js" }
```
