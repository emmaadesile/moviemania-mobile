import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  Cover,
  Image,
  Content,
  Title,
  TitleDetails,
  BodyText,
  CastCard,
  Subtitle,
  IconView
} from './styles';

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    const details = navigation.getParam('details');
    const { image, title, releaseDate, content, runningTime, rating } = details;

    return (
      <Title>{title}</Title>
      // <Container>
      //   <Cover>
      //     <Image source={image} />
      //     <TouchableOpacity>
      //       <IconView></IconView>
      //     </TouchableOpacity>
      //     <Title>{title}</Title>
      //     <TitleDetails></TitleDetails>
      //   </Cover>
      //   <Content>
      //     <Subtitle></Subtitle>
      //     <BodyText>{content}</BodyText>
      //     {/* <CastCard></CastCard> */}
      //   </Content>
      // </Container>
    );
  }
}

export default DetailsScreen;
