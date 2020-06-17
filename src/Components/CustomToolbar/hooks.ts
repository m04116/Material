import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";

import { nestedLists } from './mock';
import { UseToolbar } from './types';

export const useStyles = makeStyles(() => ({
  boxContainer: {
    position: 'relative',
    zIndex: 0,
    overflow: 'hidden',
    height: '70px',
    margin: '0 auto'
  },
  boxContent: {
    position: 'absolute',
    top: '6px',
    zIndex: 10
  },
  listItem: {
    justifyContent: 'center'
  }

}));

export const useToolbar = (): UseToolbar => {
  const [shouldRenderMain, setShouldRenderMain] = useState<boolean>(true);
  const [nestedList, setNestedList] = useState<number>(0);
  const toggleRenderMain = () => setShouldRenderMain(!shouldRenderMain);
  const handleRenderNestedList = (index: number) => (): void => {
    toggleRenderMain();
    setNestedList(index);
  };
  const handleNestedIcon = (index: number) => (): void => console.log('--click on icon with id--', index);

  const nestedItemsToRender = nestedLists[`nestedListItems${nestedList}`];

  return {
    shouldRenderMain,
    handleRenderNestedList,
    toggleRenderMain,
    handleNestedIcon,
    nestedItemsToRender
  }
}