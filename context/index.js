import React from 'react';
import { Animated, Dimensions } from 'react-native';

const AppContext = React.createContext();
const Consumer = AppContext.Consumer;

const screenHeight = Dimensions.get('window').height;

class Provider extends React.Component {
  state = {
    isMenuOpen: false,
    opacity: new Animated.Value(1),
    top: new Animated.Value(screenHeight),
    scale: new Animated.Value(1)
  };

  openMenu = () => {
    this.setState(
      prevState => ({
        ...prevState,
        isMenuOpen: true
      }),
      () => {
        if (this.state.isMenuOpen) {
          Animated.spring(this.state.top, { toValue: 60 }).start();
        }
      }
    );
  };

  closeMenu = () => {
    this.setState(
      prevState => ({
        ...prevState,
        isMenuOpen: false
      }),
      () => {
        if (!this.state.isMenuOpen) {
          Animated.spring(this.state.top, { toValue: screenHeight }).start();
        }
      }
    );
  };

  animateScale = () => {};

  animateScale = () => {};

  render() {
    return (
      <AppContext.Provider
        value={{
          isMenuOpen: this.state.isMenuOpen,
          top: this.state.top,
          opacity: this.state.opacity,
          actions: {
            openMenu: this.openMenu,
            closeMenu: this.closeMenu
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { Consumer, Provider };
