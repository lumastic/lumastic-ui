#### Basic Usage

```jsx
<ProfileHeader
  organization={{
    isUserOrganization: true,
    name: "dlytle",
    headerImage: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
    createdBy: {
      name: "Drew Lytle",
      following: [{ name: "keith" }]
    },
    followers: [{ name: "keith" }],
    members: [{ name: "keith" }]
  }}
  isFollowing
/>
```

Source:

```js { "file": "./ProfileHeader.js" }
```
