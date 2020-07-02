#### Basic Usage

```jsx
import { TabHeader, Tab, TabPanel } from ".";
<Tabs initialTab="posts" baseRoute="/test">
  <TabHeader align={"center"}>
    <Tab name={"posts"}>Posts</Tab>
    <Tab name={"sparks"}>Sparks</Tab>
    <Tab name={"disabled"} disabled>
      Disabled
    </Tab>
  </TabHeader>
  <TabPanel name="posts">Posts panel</TabPanel>
  <TabPanel name="sparks">Sparks panel</TabPanel>
  <TabPanel name="disabled">Disabled panel</TabPanel>
</Tabs>;
```

Source:

```js { "file": "./Tabs.js" }
```
