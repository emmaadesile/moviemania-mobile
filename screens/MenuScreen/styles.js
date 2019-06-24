import { Animated } from 'react-native';
import styled from 'styled-components';

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
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 50px 40px;
`;

const Header = styled.View`
  margin-top: 50px;
  justify-content: space-between;
  flex-direction: row;
  width: 310px;
`;

const ProfileInfo = styled.View`
  padding: 10px 0 20px 0;
  justify-content: center;
  align-items: flex-start;
  margin-left: 40px;
`;

const ProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
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
  margin-top: 5px;
`;

export {
  AnimatedContainer,
  Divider,
  Content,
  ProfileInfo,
  ProfileImage,
  ProfileName,
  SubTitle,
  IconView,
  Header
};
