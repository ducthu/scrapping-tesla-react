import React, { Component } from "react";
const ApiUrl = "http://localhost:4000/api";

class AnnonceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { annonce: [] };
  }

  callAPI() {
    fetch(ApiUrl + "/annonce/" + this.props.match.params.id)
      .then(res => res.json())
      .then(data => {
        this.setState({ annonce: data });
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { annonce } = this.state;
    return (
      <div className="AnnonceDetail">
        <h1>{annonce.titre}</h1>
        <div>
          <h3>
            <a href={annonce.lien} target="_blank">
              Lien Leboncoin
            </a>
          </h3>
        </div>
        <div>
          <ul>
            <h3>prix:</h3>
            <div>{annonce.prix}</div>
          </ul>
          <ul>
            <h3>boite de vitesse:</h3>
            <div>{annonce.boite_vitesse}</div>
          </ul>
        </div>
        <div>
          <h2>Description:</h2>
          <div>{annonce.description}</div>
        </div>
      </div>
    );
  }
}

export default AnnonceDetail;
