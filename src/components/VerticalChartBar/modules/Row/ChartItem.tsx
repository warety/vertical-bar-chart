import React, {FunctionComponent} from "react";
import styled from '@emotion/styled';

import { IChartData } from "../../../../global";


const Item = styled('div')<{
  heightParam: number,
  maxHeight: number
}>`
  display: flex;
  flex: 1;
  height: ${props => (props.heightParam/props.maxHeight)*100}%;
  background-color: #568dbd;
  margin: 0px 5px;
`;

type ChartItemProps = {
  item: IChartData;
  maxHeight: number;
}

const ChartItem: FunctionComponent<ChartItemProps> = ({ item, maxHeight }) => (
  <Item heightParam={item.value} maxHeight={maxHeight}/>
);

export default ChartItem;
