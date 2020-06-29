#### Basic Usage

```jsx
<BoardCard
  block
  card={{
    content: [
      {
        name: "type",
        value: [
          {
            name: "default",
            children: [{ text: "This is a test" }]
          }
        ]
      }
    ]
  }}
/>
```

#### Basic Usage

```jsx
<BoardCard>
  <BoardCard block />
</BoardCard>
```

Source:

```js { "file": "./BoardCard.js" }
```
