import React from "react";
import ImageGallery from "react-image-gallery";
import { withRouter } from "react-router-dom";

import API from "../../api/baseURL";
import { linkGallery } from "../../util/linkImage";

import "./gallery.stylles.scss";

class Gallery extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      option: {
        showIndex: false,
        showBullets: true,
        infinite: true,
        showThumbnails: true,
        showFullscreenButton: true,
        showGalleryFullscreenButton: true,
        showPlayButton: true,
        showGalleryPlayButton: true,
        showNav: false,
        isRTL: false,
        slideDuration: 450,
        slideInterval: 2000,
        slideOnThumbnailOver: false,
        thumbnailPosition: "bottom",
        showVideo: {},
      },
      gallery: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const { match } = this.props;
    API.get(`gallery/${parseInt(match.params.id)}`).then((gallery) => {
      if (this._isMounted) {
        this.setState({
          gallery: gallery.data,
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setImage = () => {
    const { gallery } = this.state;
    if (gallery) {
      const imageUrl = gallery.map((item) => {
        return {
          original: `${linkGallery}/${item.img_url}`,
          thumbnail: `${linkGallery}/${item.img_url}`,
        };
      });
      return imageUrl;
    }
  };

  render() {
    return (
      <div id="Img_carousel">
        <ImageGallery {...this.state.option} items={this.setImage()} />
      </div>
    );
  }
}

export default withRouter(Gallery);
