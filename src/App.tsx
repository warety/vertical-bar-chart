import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import VerticalChartBar from "./components/VerticalChartBar/VerticalChartBar";

const Main = styled("div")`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Container = styled("div")`
  display: flex;
`;

const App: FunctionComponent = () => (
  <Main>
    <Global
      styles={css`
        html,
        body,
        #root {
          width: 100%;
          height: 100%;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
    <Container>
      <VerticalChartBar
        data={[
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
        ]}
      />
      <VerticalChartBar
        data={[
          { title: "1", value: 1 },
          { title: "2", value: -5 },
          { title: "3", value: 6 },
          { value: 3 },
        ]}
      />
      <VerticalChartBar
        data={[
          { title: "1", value: 10 },
          { title: "2", value: 20 },
          { title: "3", value: 30 },
        ]}
      />
    </Container>
  </Main>
);

export default App;
