import React, { Component } from "react";

const ApiUrl = "http://localhost:4000/api";

class Annonces extends Component {
  constructor(props) {
    super(props);
    this.state = { annonces: [] };
    console.log(props);
  }

  callAPI() {
    fetch(ApiUrl + "/annonces")
      .then(res => res.json())
      .then(data => {
        this.setState({ annonces: data });
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { annonces } = this.state;
    return (
      <div className="Annonces">
        <div>
          <h1>Annonces: Teslas</h1>
          <h2>Nombre d'annonces: {annonces.length}</h2>
        </div>
        {annonces.map((annonce, index) => (
          <div className="card">
            <div className="card-body" key={index}>
              <h5 className="card-title">{annonce.titre}</h5>
              <a href={"/annonce/" + annonce.id}>Voir l'annonce</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Annonces;
