#### Basic Usage

```jsx
<PressInput
  callbacks={{
    uploadFile: files => [
      {
        url: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
        meta: { alt: "alt test" }
      }
    ]
  }}
/>
```

Source:

```js { "file": "./PressInput.js" }
```
