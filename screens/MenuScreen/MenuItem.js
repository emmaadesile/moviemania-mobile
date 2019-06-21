import React from "react";
import styled from "styled-components";
import * as Icon from "@expo/vector-icons";

const MenuItem = ({ icon, title }) => (
  <Container>
    <IconView>
      <Icon.Ionicons name={icon} size={28} color="#959DC3" />
    </IconView>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  height: 60px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin-left: 20px;
`;

const IconView = styled.View`
  width: 30px;
  height: 30px;
`;

export default MenuItem;
