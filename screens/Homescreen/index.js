import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Animated
} from "react-native";
import * as Icon from "@expo/vector-icons";
import MenuIcon from "../../components/MenuIcon";
import MenuScreen from "../MenuScreen";
import { Consumer } from "../../context";

import {
  Container,
  AnimatedContainer,
  PlayButton,
  PlayIcon,
  PlayTitle,
  TitleBar,
  Title,
  MovieContainer,
  MovieImage,
  GenericTitle,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
  MovieReleaseDate,
  CardDetails
} from "./styles";

class HomeScreen extends React.Component {
  state = {
    opacity: new Animated.Value(1)
  };

  render() {
    return (
      <Consumer>
        {context => (
          <AnimatedContainer>
            <MenuScreen />
            <SafeAreaView>
              <ScrollView>
                <TitleBar>
                  <TouchableOpacity onPress={() => context.actions.openMenu()}>
                    <MenuIcon
                      width={30}
                      height={30}
                      style={{ fill: "#737373" }}
                    />
                  </TouchableOpacity>
                </TitleBar>
                <MovieContainer>
                  <MovieImage
                    source={require("../../assets/captain_marvel.jpg")}
                  />
                  <Title>
                    <GenericTitle>Captain Marvel</GenericTitle>
                    <TouchableOpacity>
                      <PlayButton>
                        <PlayTitle>Play</PlayTitle>
                        <PlayIcon>
                          <Icon.Ionicons
                            name="ios-play"
                            size={20}
                            color="white"
                          />
                        </PlayIcon>
                      </PlayButton>
                    </TouchableOpacity>
                  </Title>
                </MovieContainer>
                <GenericTitle
                  size={20}
                  style={{
                    marginLeft: 20,
                    marginTop: 33
                  }}
                >
                  Movies
                </GenericTitle>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{
                    paddingLeft: 20,
                    marginTop: 15
                  }}
                >
                  {cards.map((card, index) => (
                    <TouchableOpacity key={index} onPress={() => null}>
                      <MovieCard>
                        <MovieCardImage source={card.image} />
                        <CardDetails>
                          <MovieCardTitle>{card.title}</MovieCardTitle>
                          <MovieReleaseDate>
                            {card.releaseDate}
                          </MovieReleaseDate>
                        </CardDetails>
                      </MovieCard>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <GenericTitle
                  size={20}
                  style={{
                    marginLeft: 20,
                    marginTop: 33
                  }}
                >
                  TV Shows
                </GenericTitle>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{
                    paddingLeft: 20,
                    marginTop: 15
                  }}
                >
                  {tvShows.map((card, index) => (
                    <TouchableOpacity key={index} onPress={() => null}>
                      <MovieCard>
                        <MovieCardImage source={card.image} />
                        <CardDetails>
                          <MovieCardTitle>{card.title}</MovieCardTitle>
                          <MovieReleaseDate>
                            {card.releaseDate}
                          </MovieReleaseDate>
                        </CardDetails>
                      </MovieCard>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </ScrollView>
            </SafeAreaView>
          </AnimatedContainer>
        )}
      </Consumer>
    );
  }
}

const cards = [
  {
    image: require("../../assets/john-wick-chapter-3.jpg"),
    title: "John Wick: Chapter 3",
    releaseDate: "May 17, 2019"
  },
  {
    image: require("../../assets/aladdin.jpg"),
    title: "Aladdin",
    releaseDate: "May 24, 2019"
  },
  {
    image: require("../../assets/godzilla_king_of_the_monsters.jpg"),
    title: "Godzilla: King of Monsters",
    releaseDate: "May 31, 2019"
  },
  {
    image: require("../../assets/robin-hood.jpg"),
    title: "Robin Hood",
    releaseDate: "Nov 28, 2018"
  }
];

const tvShows = [
  {
    image: require("../../assets/game-of-thrones.jpg"),
    title: "Game of thrones",
    releaseDate: "Apr 11, 2011"
  },
  {
    image: require("../../assets/the-100.jpg"),
    title: "The 100",
    releaseDate: "Mar 19, 2014"
  },
  {
    image: require("../../assets/stranger-things.jpg"),
    title: "Stranger Things",
    releaseDate: "Jul 15, 2019"
  },
  {
    image: require("../../assets/vikings.jpg"),
    title: "Vikings",
    releaseDate: "Mar 03, 2013"
  }
];

export default HomeScreen;
