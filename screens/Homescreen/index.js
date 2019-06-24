import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Animated
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import MenuIcon from '../../components/MenuIcon';
import MenuScreen from '../MenuScreen';
import { Consumer } from '../../context';
import Card from '../../components/Card';

import {
  AnimatedContainer,
  PlayButton,
  PlayIcon,
  PlayTitle,
  TitleBar,
  Title,
  MovieContainer,
  MovieImage,
  GenericTitle
} from './styles';

class HomeScreen extends React.Component {
  static navigationOptions = { header: null };

  state = {
    opacity: new Animated.Value(1)
  };

  render() {
    return (
      <Consumer>
        {context => (
          <>
            <MenuScreen />
            <AnimatedContainer style={{ opacity: context.opacity }}>
              <SafeAreaView>
                <ScrollView>
                  <TitleBar>
                    <TouchableOpacity
                      onPress={() => context.actions.openMenu()}
                    >
                      <MenuIcon
                        width={25}
                        height={25}
                        style={{ fill: '#737373' }}
                      />
                    </TouchableOpacity>
                  </TitleBar>
                  <MovieContainer>
                    <MovieImage
                      source={require('../../assets/captain_marvel.jpg')}
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
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          this.props.navigation.push('Details', {
                            details: card
                          });
                        }}
                      >
                        <Card
                          image={card.image}
                          title={card.title}
                          releaseDate={card.releaseDate}
                          content={card.content}
                          runningTime={card.runningTime}
                          rating={card.rating}
                        />
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
                        <Card
                          image={card.image}
                          title={card.title}
                          releaseDate={card.releaseDate}
                          content={card.content}
                          runningTime={card.runningTime}
                          rating={card.rating}
                        />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </ScrollView>
              </SafeAreaView>
            </AnimatedContainer>
          </>
        )}
      </Consumer>
    );
  }
}

const cards = [
  {
    image: require('../../assets/john-wick-chapter-3.jpg'),
    title: 'John Wick: Chapter 3',
    releaseDate: 'May 17, 2019'
  },
  {
    image: require('../../assets/aladdin.jpg'),
    title: 'Aladdin',
    releaseDate: 'May 24, 2019'
  },
  {
    image: require('../../assets/godzilla_king_of_the_monsters.jpg'),
    title: 'Godzilla: King of Monsters',
    releaseDate: 'May 31, 2019'
  },
  {
    image: require('../../assets/robin-hood.jpg'),
    title: 'Robin Hood',
    releaseDate: 'Nov 28, 2018'
  }
];

const tvShows = [
  {
    image: require('../../assets/game-of-thrones.jpg'),
    title: 'Game of thrones',
    releaseDate: 'Apr 11, 2011'
  },
  {
    image: require('../../assets/the-100.jpg'),
    title: 'The 100',
    releaseDate: 'Mar 19, 2014'
  },
  {
    image: require('../../assets/stranger-things.jpg'),
    title: 'Stranger Things',
    releaseDate: 'Jul 15, 2019'
  },
  {
    image: require('../../assets/vikings.jpg'),
    title: 'Vikings',
    releaseDate: 'Mar 03, 2013'
  }
];

// const videoDetails = [
//   {
//     image: require("../../assets/john-wick-chapter-3.jpg"),
//     title: "John Wick: Chapter 3",
//     rating: "8.1/10",
//     runtime: "2h 11min",
//     synopsis:
//       "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn."
//   },
//   {
//     image: require("../../assets/godzilla_king_of_the_monsters.jpg"),
//     title: "Godzilla: King of the Monsters",
//     rating: "7.2/10",
//     runtime: "2h 11min",
//     synopsis:
//       "Ever since hulking lawman Hobbs (Johnson), a loyal agent of America's Diplomatic Security Service, and lawless outcast Shaw (Statham), a former British military elite operative, first faced off in 2015’s Furious 7, the duo have swapped smack talk and body blows"
//   }
// ];

export default HomeScreen;
