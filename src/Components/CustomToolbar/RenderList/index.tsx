import React from "react";
import {Grid, List, ListItem, ListItemIcon} from "@material-ui/core";

import ToolbarIcon from "../ToolbarIcon";
import {useStyles} from "../hooks";
import { RenderListProps } from '../types';

const RenderList = ({itemsToRender, toolbarHandler}: RenderListProps) => {
  const classes = useStyles();
  return (
    <List component={Grid} container direction="row" justify="center" alignItems="center" wrap="nowrap">
      {itemsToRender.map((Icon, index) => (
        <ListItem
          button
          container
          item
          component={Grid}
          key={index}
          justify="center"
          className={classes.listItem}
          onClick={toolbarHandler(index)}
        >
          <ListItemIcon className={classes.listItem}>
            <ToolbarIcon Icon={Icon}/>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  )
};

export default RenderList;