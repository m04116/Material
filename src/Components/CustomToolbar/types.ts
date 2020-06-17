import { SvgIconComponent } from '@material-ui/icons';

type HandleRenderNestedList = (index: number) => () => void;
type ToggleRenderMain = () => void;
type HandleNestedIcon = (index: number) => () => void;

export type UseToolbar = {
  shouldRenderMain: boolean;
  handleRenderNestedList: HandleRenderNestedList;
  toggleRenderMain: ToggleRenderMain;
  handleNestedIcon: HandleNestedIcon;
  nestedItemsToRender: Array<SvgIconComponent>;
}

export type ToolbarIconProps = {
  Icon: SvgIconComponent
}

export type RenderListProps = {
  itemsToRender: Array<SvgIconComponent>;
  toolbarHandler: HandleRenderNestedList | HandleNestedIcon;
}