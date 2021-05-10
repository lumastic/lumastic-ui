import React from "react";
import { List } from "../List";
import { Card } from "../../Card";
import { Link } from "../../Link";

const LabeledList = () => (
  <List label="My Cards" action={<Link>New Card</Link>}>
    <Card>Card 1</Card>
    <Card>Card 2</Card>
    <Card>
      Card 3 is a super long text card that has a lot of letters and numbers in
      it and contains phrases such as 'top of the morning to you' and 'by golly
      I think you've done it' and 'true beans' and has the number
      83726194584746263829845374925632847198734
    </Card>
    <Card>Card 4</Card>
    <Card>Card 5</Card>
    <Card>Card 6</Card>
    <Card>Card 7</Card>
    <Card>Card 8</Card>
  </List>
);

export { LabeledList };
