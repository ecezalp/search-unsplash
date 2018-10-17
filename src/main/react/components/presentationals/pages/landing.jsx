import React from 'react';
import Spinner from "../inputs/spinner";
import Button from "../inputs/button";
import PictureFrame from "../inputs/pictureFrame";

export default function LandingPage({
                                      inputValue,
                                      errorMessage,
                                      isFetchingData,
                                      isPictureVisible,
                                      pictureResponse,
                                      clearState,
                                      handleInputChange,
                                      handleSubmit
                                    }) {

  const intro = <div className="intro">
    Looking for pictures? <br/>
    Search here!
  </div>;

  const search = <input
    className="search"
    value={inputValue}
    disabled={isFetchingData}
    onChange={e => handleInputChange(e.target.value)}
  />;

  const submitButton = <Button
    className="submit-button"
    handleClick={() => handleSubmit(inputValue)}
    buttonText="submit"
    disabled={isFetchingData || isPictureVisible}
  />;

  const clearButton = <Button
    className="clear-button"
    handleClick={clearState}
    buttonText="clear"
    disabled={isFetchingData || !isPictureVisible}
  />;

  const spinner = <Spinner
    isVisible={isFetchingData}
  />;

  const buttonGroup = <div
    className="button-group"
  >
    {submitButton}
    {clearButton}
  </div>;

  const pictureFrame = <PictureFrame
    pictureResponse={pictureResponse}
    isVisible={isPictureVisible}
  />;

  return <div className="landing">
    {intro}
    {search}
    {buttonGroup}
    {errorMessage}
    {spinner}
    {pictureFrame}
  </div>
}