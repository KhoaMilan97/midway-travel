import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { addReviewStart } from "../../redux/review/review.action";
import { selectCurrentUser } from "../../redux/user/user.selector";

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      position: "",
      guide: "",
      price: "",
      quality: "",
      comment: "",
      show: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addReviewStart, currentUser, match } = this.props;
    const { position, guide, price, quality, comment } = this.state;
    const point =
      (parseInt(position) +
        parseInt(guide) +
        parseInt(quality) +
        parseInt(price)) /
      4;

    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    addReviewStart({
      id_tour: parseInt(match.params.id),
      username: currentUser.displayName,
      comment,
      point,
      date: dateTime,
    });
  }

  render() {
    const { position, guide, price, quality, comment, show } = this.state;
    return (
      <>
        <Button
          variant="primary"
          className="btn_1 add_bottom_30"
          onClick={this.handleShow}
        >
          Viết bình luận
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Viết bình luận của bạn</h4>
            </Modal.Title>
          </Modal.Header>
          <form
            name="review_tour"
            id="review_tour"
            onSubmit={this.handleSubmit}
          >
            <Modal.Body>
              <input
                name="tour_name"
                id="tour_name"
                type="hidden"
                defaultValue="Paris Arch de Triomphe Tour"
              />

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Vị trí</label>
                    <select
                      className="form-control"
                      id="position_review"
                      name="position"
                      value={position}
                      onChange={this.handleChange}
                    >
                      <option value>Đánh giá của bạn</option>
                      <option value="1">Kém</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khá</option>
                      <option value="4">Tốt</option>
                      <option value="5">Rất tốt</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Hương dẫn tour</label>
                    <select
                      className="form-control"
                      name="guide"
                      id="guide_review"
                      value={guide}
                      onChange={this.handleChange}
                    >
                      <option value>Đánh giá của bạn</option>
                      <option value="1">Kém</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khá</option>
                      <option value="4">Tốt</option>
                      <option value="5">Rất tốt</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Giá cả</label>
                    <select
                      className="form-control"
                      name="price"
                      id="price_review"
                      value={price}
                      onChange={this.handleChange}
                    >
                      <option value>Đánh giá của bạn</option>
                      <option value="1">Kém</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khá</option>
                      <option value="4">Tốt</option>
                      <option value="5">Rất tốt</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Chất lượng</label>
                    <select
                      className="form-control"
                      name="quality"
                      id="quality_review"
                      value={quality}
                      onChange={this.handleChange}
                    >
                      <option value>Đánh giá của bạn</option>
                      <option value="1">Kém</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khá</option>
                      <option value="4">Tốt</option>
                      <option value="5">Rất tốt</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="form-group">
                <textarea
                  name="comment"
                  id="review_text"
                  className="form-control"
                  style={{ height: "100px" }}
                  placeholder="Viết đánh giá của bạn"
                  value={comment}
                  onChange={this.handleChange}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                type="submit"
                className="btn_1"
                onClick={this.handleClose}
              >
                Bình luận
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispach) => ({
  addReviewStart: (review) => dispach(addReviewStart(review)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));
