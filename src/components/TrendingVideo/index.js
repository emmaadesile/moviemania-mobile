import React, { useState } from "react";
import { PosterImage, Title, PlayButton, Image } from "./styles";

function TrendingVideos() {
  return (
    <PosterImage>
      <Image source={require("../../../assets/bloodshot.jpg")} />
    </PosterImage>
  );
}

export default TrendingVideos;
