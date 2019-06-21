import { Animated } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  background: #181d36;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  overflow: hidden;
`;

const AnimatedContainer = new Animated.createAnimatedComponent(Container);

const Divider = styled.View`
  height: 1px;
  background: #3a4473;
`;

const IconView = styled.View`
  width: 35px;
  height: 35px;
  max-width: 100%;
  position: absolute;
  right: 4px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

const Content = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 50px 30px;
`;

const ProfileInfo = styled.View`
  margin-top: 20px;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-bottom: 10px;
`;

const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

const SubTitle = styled.Text`
  font-size: 15px;
  color: #959dc3;
`;

export {
  AnimatedContainer,
  Divider,
  Content,
  ProfileInfo,
  ProfileImage,
  ProfileName,
  SubTitle,
  IconView
};
