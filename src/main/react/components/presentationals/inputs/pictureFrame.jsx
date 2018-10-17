import React from 'react';

export default function PicturesFrame({pictureResponse, isVisible}) {

  const getPicture = ({urls, photo_tags, color, description}, index) => <div
    key={`picture-${index}`}
    className="picture"
  >
    <img src={urls.regular}/>
    {getDescription(description, index)}
    {getPictureTags(photo_tags)}
    {getColor(color)}
  </div>;

  const getDescription = (description, index) => <div
    key={`description-${index}`}
    className="description"
  >
    {description}
  </div>;

  const getPictureTags = tags => <div
    className="tags-container"
  >
    {tags.map(getPictureTag)}
  </div>;

  const getPictureTag = (tag, tagIndex) => <div
    className="tag"
    key={`tag-${tagIndex}`}
  >
    {tag.title}
  </div>;

  const getColor = (color, index) => <div
    key={`color-${index}`}
    className="color-container"
    style={{backgroundColor: color}}
  >
    Primary Color
  </div>;

  return <div
    className="pictures-container"
    style={{visibility: isVisible ? "visible" : "hidden"}}
  >
    {pictureResponse.results.map(getPicture)}
  </div>;
};