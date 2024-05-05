import React from "react";
import { Card, CardOverflow, Typography } from "@mui/joy";

interface ImageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  style: any;
  imgStyle?: any;
  titleStyle?: any;
  onLoad?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageUrl,
  style,
  imgStyle,
  titleStyle,
  onLoad,
}) => {
  const handleLoad = () => {
    console.log("Image loaded:", title);
    if (onLoad) onLoad();
  };

  return (
    <Card sx={style}>
      <CardOverflow>
        <img src={imageUrl} alt={title} style={imgStyle} onLoad={handleLoad} />
      </CardOverflow>
      {title && <Typography sx={titleStyle}>{title}</Typography>}
      {description && <Typography sx={{ mb: 2 }}>{description}</Typography>}
    </Card>
  );
};

export default ImageCard;
