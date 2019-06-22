import React from "react";
import styled from "styled-components";

const Card = ({ image, title, releaseDate, ...props }) => {
  return (
    <MovieCard>
      <MovieCardImage source={image} />
      <CardDetails>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieReleaseDate>{releaseDate}</MovieReleaseDate>
      </CardDetails>
    </MovieCard>
  );
};

export default Card;

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
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  height: 50px;
`;
