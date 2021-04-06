import React, {FunctionComponent} from "react";
import styled from '@emotion/styled';

import ChartItem from "./modules/Row/ChartItem";
import { IChartData } from "../../global";

type VerticalChartBarProps = {
  data: IChartData[],
}

const Main = styled('div')`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 400px;
    height: 400px;
    padding: 10px;
`;

const VerticalChartBar: FunctionComponent<VerticalChartBarProps> = ({data}) => {
  const validatedData = data.map(item => {
    if (item.value < 0) return {...item, value: 0}
    return {...item}
  })
  const maxHeight = Math.max(...data.map(item => item.value));
  return (
    <Main>
      {validatedData.map((item, index) => (<ChartItem key={index} maxHeight={maxHeight} item={item} />))}
    </Main>
  );
};


export default VerticalChartBar;
