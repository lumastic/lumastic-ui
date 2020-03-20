#### Basic Usage

```jsx
<Type h1>Heading 1</Type>
<Type h2>Heading 2</Type>
<Type h3>Heading 3</Type>
<Type h4>Heading 4</Type>
<Type>Body</Type>
<Type caption>Caption</Type>
<Type overline>Overline</Type>
```

#### `color`

```jsx
<Type>
  Normal
</Type>
<Type color={"primary"}>
  Primary
</Type>
<Type color={"red"}>
  Red
</Type>
<Type color={"green"}>
  Green
</Type>
<Type color={"grey"}>
  Grey
</Type>
```

#### `align`

```jsx
<Type>
  Left
</Type>
<Type align={"center"}>
  Center
</Type>
<Type align={"right"}>
  Right
</Type>
```

#### `tag` changes what HTML tag the text renders as

```jsx
<Type tag={"h1"}>Normal text rendered in h1</Type>
<Type h4 tag={"span"}>h4 rendered in an inline span - </Type>
<Type tag={"span"}> inspect the elements to see.</Type>
```

#### `size` allows for custom font sizes

```jsx
<Type size={"0.6rem"}>In case you want very small text</Type>
```

Source:

```js { "file": "./Type.js" }
```
