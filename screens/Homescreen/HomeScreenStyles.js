import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background: #181d36;
`;

const PlayButton = styled.View`
  margin-top: 5px;
  width: 65px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  border-radius: 5px;
  justify-content: center;
  position: relative;
`;

const PlayIcon = styled.View`
  position: absolute;
  top: 2px;
  left: 10px;
`;

const PlayTitle = styled.Text`
  font-weight: 500;
  font-size: 13px;
  color: #fff;
  margin-left: 15px;
`;

const TitleBar = styled.View`
  margin-top: 45px;
  align-items: flex-end;
  width: 100%;
  padding: 0 20px;
`;

const Title = styled.View`
  color: #7e86af;
  padding-left: 20px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

const MovieContainer = styled.View`
  height: 210px;
  background: #ddd;
  margin-top: 15px;
  justify-content: center;
`;

const MovieImage = styled.Image`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 210px;
`;

const GenericTitle = styled.Text`
  font-size: ${props => props.size || 28};
  font-weight: bold;
  color: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.9);
`;

const MovieCard = styled.View`
  width: 100px;
  height: 210px;
  margin-right: 13px;
  position: relative;
`;

const MovieCardImage = styled.Image`
  width: 100%;
  height: 140px;
  position: absolute;
  top: 0;
`;

const MovieCardTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #c4c4c4;
`;

const MovieReleaseDate = styled.Text`
  font-size: 10px;
  color: #737373;
  margin-top: 8px;
`;

const CardDetails = styled.View`
  position: absolute;
  bottom: 10px;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 50px;
  /* align-items: center; */
  /* justify-content: flex-start; */
`;

export {
  Container,
  PlayButton,
  PlayIcon,
  PlayTitle,
  TitleBar,
  Title,
  Avatar,
  MovieContainer,
  MovieImage,
  GenericTitle,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
  MovieReleaseDate,
  CardDetails
};
