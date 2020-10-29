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
  <TabPanel name="posts">
    <div>Posts panel</div>
  </TabPanel>
  <TabPanel name="sparks">
    <div>Sparks panel</div>
  </TabPanel>
  <TabPanel name="disabled">
    <div>Disabled panel</div>
  </TabPanel>
</Tabs>;
```

Source:

```js { "file": "./Tabs.js" }
```
