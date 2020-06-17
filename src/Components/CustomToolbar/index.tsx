import React from 'react';
import {
  Grid,
  Fade,
  IconButton,
  Paper,
  Slide
} from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';

import RenderList from "./RenderList";

import {useStyles, useToolbar} from './hooks';
import { toolbarItems } from './mock';

const CustomToolbar: React.FC = () => {
  const classes = useStyles();
  const {
    shouldRenderMain,
    handleRenderNestedList,
    toggleRenderMain,handleNestedIcon,
    nestedItemsToRender
  } = useToolbar();

  return (
    <Grid
      className={classes.boxContainer}
      container
      item xs={6}
      component={Paper}
      direction="row"
      justify="center"
      alignItems="center"
      wrap="nowrap"
    >
      <Fade
        in={shouldRenderMain}
        mountOnEnter
        unmountOnExit
        style={{ transitionDelay: shouldRenderMain ? '300ms' : '0ms' }}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
        >
          <RenderList itemsToRender={toolbarItems} toolbarHandler={handleRenderNestedList} />
        </Grid>
      </Fade>

      <Slide
        direction="right"
        in={!shouldRenderMain}
        mountOnEnter
        unmountOnExit
        timeout={{ appear: 300, enter: 300, exit: 300 }}
      >
        <Grid
          className={classes.boxContent}
          container direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
        >
          <IconButton color="primary" component="button" onClick={toggleRenderMain}>
            <ArrowBackIos/>
          </IconButton>
          <RenderList itemsToRender={nestedItemsToRender} toolbarHandler={handleNestedIcon} />
        </Grid>
      </Slide>
    </Grid>
  )
};

export default CustomToolbar;