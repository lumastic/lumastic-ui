### Usage

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

#### Archived card

```jsx
<BoardCard
  block
  card={{
    id: "ck354foyadlhe08901ue22g07",
    content: "",
    type: "Card",
    archived: true,
    x: 480,
    y: 516,
    z: 4,
    width: 300,
    height: 960,
    __typename: "Card"
  }}
/>
```

#### Broken Card

```jsx
<BoardCard
  card={{
    content: JSON.stringify([
      {
        id: 861852389263,
        name: "type",
        value: [{ name: "default", children: [{}] }]
      }
    ])
  }}
/>
```

#### Fixed - Broken Card

````jsx
<BoardCard
  card={{
    content: JSON.stringify([
      {
        id: 861852389263,
        name: "type",
        value: [{ name: "default", children: [{ text: "" }] }]
      }
    ])
  }}
/>
``

#### Youtube content

```jsx
<BoardCard
  block
  card={{
    content:
      '[{"id":675776893448,"name":"type","value":[{"name":"default","children":[{"text":"Lumberjocks Video"}]}]},{"id":2719519280,"name":"yt","value":{"link":"https://www.youtube.com/embed/2JJCXXQqAIk"}},{"id":861852389263,"name":"type","value":[{"name":"default","children":[{}]}]},{"id":242572017073,"name":"link","value":{"url":"https://www.lumberjocks.com/projects/181330","base":"www.lumberjocks.com","image":"http://lumberjocks.com/assets/pictures/projects/903266-97x65.jpg","title":"Mobile Base For A Dutch Tool Chest - by CarterR @ LumberJocks.com ~ woodworking community"}}]'
  }}
/>
````

```jsx
<BoardCard
  block
  card={{
    content:
      '[{"id":1213425038528,"name":"type","value":[{"name":"default","children":[{"text":"Chris Schwarz Ideas and Writeup","larger":true}]},{"name":"default","children":[{"text":"Chis Schwarz brought attention to this style of Tool Chest. He has a few writeups on it and blog posts so hes definately a good place to start."}]},{"name":"default","children":[{"text":"Chris Schwarz plans and sketchup"}]}]},{"id":722590329122,"name":"link","value":{"url":"https://www.popularwoodworking.com/woodworking-blogs/dutch-tool-chest-lower-storage-unit/","base":"www.popularwoodworking.com","image":"https://s26462.pcdn.co/wp-content/uploads/Dutch-Chest-With-Lower-Case-e1402947709808.jpg","title":"Dutch Tool Chest with a Lower Storage Unit | Popular Woodworking Magazine"}},{"id":189761849362,"name":"link","value":{"url":"https://blog.lostartpress.com/2012/12/23/lets-go-dutch-tool-chest/\\n","base":"blog.lostartpress.com\\n","image":"https://lostartpress.files.wordpress.com/2012/12/dutch_bench_planes_img_5256.jpg","title":"Let’s Go Dutch (Tool Chest) | Lost Art Press"}},{"id":474640913276,"name":"link","value":{"url":"https://lostartpress.files.wordpress.com/2013/01/dutch_open_img_4536.jpg\\n","base":"lostartpress.files.wordpress.com\\n","title":""}},{"id":1256103301600,"name":"link","value":{"url":"https://blog.lostartpress.com/2013/01/11/a-quick-tour-of-the-dutch-tool-chest/","base":"blog.lostartpress.com","image":"https://lostartpress.files.wordpress.com/2013/01/dutch_covered_img_4538.jpg?w=229","title":"A Quick Tour of the Dutch Tool Chest | Lost Art Press"}}]'
  }}
/>
```

Source:

```js { "file": "./BoardCard.js" }
```
