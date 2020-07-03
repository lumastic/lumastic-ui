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
  defaultValue={[
    {
      name: "link",
      id: 1,
      value: {
        url: "https://www.lumastic.com/drew",
        base: "https://www.lumastic.com",
        image: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
        title: "Lumastic.com"
      }
    }
  ]}
/>
```

Source:

```js { "file": "./PressInput.js" }
```
