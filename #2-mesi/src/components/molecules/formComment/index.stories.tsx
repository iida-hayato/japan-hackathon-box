import * as React from "react";

import { storiesOf } from "@storybook/react";

import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("molecules", module).add("formComment", () => (
  <Component
    onformCommentPost={action("post")}
    onformCommentSuperchat={action("superchat")}
    myAddress="test"
  />
));
