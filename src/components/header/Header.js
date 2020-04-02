import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: white;
  height: 50px;
  border-radius: 40px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.45),
    30px 30px 40px rgba(118, 146, 180, 0.18);
  overflow: hidden;
  padding: 20px;
`;
const Text = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
      <Header>
        <Text>Best 2 out of 3 || Rock Paper Scissors</Text>
      </Header>
  );
};
