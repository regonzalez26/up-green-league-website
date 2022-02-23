import React from "react";
import "./ExeComCard.css";
class ExeComImg extends React.Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    pos: this.props.pos,
    img: this.props.img,
  };

  render() {
    return (
      <div className="execomcard_container">
        <div className="execomcard_block">
          <div className="execom_img_container">
            <img className="execom_img" src={this.state.img} />
          </div>
          <div className="pos"> {this.state.pos}</div>
          <div className="name">{this.state.name}</div>
        </div>
      </div>
    );
  }
}

export default ExeComImg;
