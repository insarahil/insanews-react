import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    const { title, description, urlToImage, newsurl } = this.props;
    return (
      <div>
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
