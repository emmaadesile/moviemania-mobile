import React from "react";
import { TouchableOpacity } from "react-native";
import { Consumer } from "../../context";
import MenuItem from "./MenuItem";
import * as Icon from "@expo/vector-icons";

import {
  AnimatedContainer,
  Divider,
  Content,
  ProfileInfo,
  ProfileImage,
  ProfileName,
  SubTitle,
  IconView
} from "./styles";

const Menu = () => {
  return (
    <Consumer>
      {context => (
        <AnimatedContainer style={{ top: context.top }}>
          <TouchableOpacity onPress={() => context.actions.closeMenu()}>
            <IconView>
              <Icon.Ionicons name="ios-close" size={40} color="#737373" />
            </IconView>
          </TouchableOpacity>
          <ProfileInfo>
            <ProfileImage source={require("../../assets/avatar.jpg")} />
            <ProfileName>Davincí</ProfileName>
            <SubTitle>Pro Account</SubTitle>
          </ProfileInfo>
          <Divider />
          <Content>
            {menuItems.map((item, index) => (
              <MenuItem key={index} icon={item.icon} title={item.title} />
            ))}
          </Content>
        </AnimatedContainer>
      )}
    </Consumer>
  );
};

export default Menu;

const menuItems = [
  {
    title: "Profile",
    icon: "ios-person"
  },
  {
    title: "Latest Videos",
    icon: "ios-play"
  },
  {
    title: "Bookmarks",
    icon: "ios-bookmark"
  },
  {
    title: "Billing",
    icon: "ios-card"
  },
  {
    title: "Logout",
    icon: "ios-exit"
  }
];
