import React from "react";
import ExeComCard from "./ExeComCard/ExeComCard.js";
import "./ExeCom.css";
class ExeCom extends React.Component {
  state = {
    info: [
      {
        id: 1,
        name: "Jin Perez",
        pos: "PRESIDENT",
        img: "https://64.media.tumblr.com/1d29abb9c5c80dd8d484b402cc82621c/fb135008d3a6287b-31/s640x960/8b265c3a3430bb8a23b3c77a32a6aa2e3d45e819.jpg",
      },
      {
        id: 2,
        name: "Keith Carasig",
        pos: "EXECUTIVE VICE PRESIDENT",
        img: "https://64.media.tumblr.com/c9ed519d44e88f4683bdca54046fcba7/fb135008d3a6287b-42/s1280x1920/68f8fa2fe264d0cdb72034c7d62dd1b20295a1fb.jpg",
      },
      {
        id: 3,
        name: "RJ Gonzales",
        pos: "VP FOR EDUCATIONAL AFFAIRS",
        img: "https://64.media.tumblr.com/b3ba00f4df94c43a77095e9d6d7b1c31/fb135008d3a6287b-9b/s1280x1920/6b9b93d36f6e99e81685457e70d7fc430de09c25.jpg",
      },
      {
        id: 4,
        name: "Jeremiah Abog",
        pos: "VP FOR EXTERNAL AFFAIRS",
        img: "https://64.media.tumblr.com/031ac6dc8d903babc85fcbf5be37fa80/fb135008d3a6287b-70/s1280x1920/770500c00f7541cf6667fa6bcc710e3bac9c909b.jpg",
      },
      {
        id: 5,
        name: "Anya Tronqued",
        pos: "VP FOR FINANCE",
        img: "https://64.media.tumblr.com/7d1681d8b4b22385d25a3d138e8c49f2/fb135008d3a6287b-42/s1280x1920/a9f7d599ce13a94c2653c86b66fbc76b4ecda5b0.jpg",
      },
      {
        id: 6,
        name: "Gerald Galang",
        pos: "VP FOR INTERNAL AFFAIRS & MEMBERSHIP",
        img: "https://64.media.tumblr.com/113498e05f706fddef5bebee99cc56a3/fb135008d3a6287b-07/s1280x1920/aa950f1cf7860dae1f4f9e5e0ed25ec53f982d6f.jpg",
      },
      {
        id: 7,
        name: "Stephen Ilao",
        pos: "VP FOR LOGISTICS",
        img: "https://64.media.tumblr.com/5605855877996accb0550da796dc0126/fb135008d3a6287b-bf/s1280x1920/8428de1e5ffe21be002f971f9d4cd2fb74aa7778.jpg",
      },
      {
        id: 8,
        name: "Jason Sigales",
        pos: "VP FOR MEDIA AND PUBLICITY",
        img: "https://64.media.tumblr.com/eaa18ee9ae87fc492b4be8fbf93ac50e/fb135008d3a6287b-2c/s500x750/7f26fbc6e17c36a6e6b7589dd50b1008d6d94ac1.jpg",
      },
    ],
  };

  render() {
    return (
      <div className="execom_container">
        <div id="execom_title">Executive Committee</div>
        <div id="year"> A.Y. 2021 - 2022</div>
        <div id="execomcard_container">
          {this.state.info.map((info) => {
            return (
              <div className="execomcard" key={info.id}>
                <ExeComCard
                  key={info.id}
                  name={info.name}
                  pos={info.pos}
                  img={info.img}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ExeCom;
