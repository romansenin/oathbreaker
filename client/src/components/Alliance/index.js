import React, { Component } from "react";
import "./style.css";

class Alliance extends Component {
  render() {
    return (
      <div className="alliance-container">
        <section className="fog-wrapper">
          <div className="fog-container" />
          <div
            id={"alliance" + this.props.type}
            className={this.props.type ? "fog-alliance" : ""}
          >
            <div className={!this.props.type ? "rain" : ""}>
              {!this.props.type ? (
                <div className="container">
                  <div className="overlay">
                    <div className="text">
                      The Triumvate is the founding family and unifier of the
                      feuding city states on the continent of Vidas. The names
                      of the Triumvate are Vosenin The Wise, ElPhil the Just,
                      and Pemith the Divine. The Triumvate were three siblings
                      from the Voda clan, representing the element of water. The
                      smallest and most remote of the four clans, the three
                      seemed to materialize almost by divine will, and with them
                      they carried a message of unity and an elevated system of
                      ruling. The Trimvate met with the leaders of each of the
                      clans and proposed that their individual strengths would
                      be magnified if they were to use their efforts to work
                      together. The government they proposed was simple yet
                      controversial. The Triumvate would not rule or govern
                      directly even though they were begged by the people to do
                      so. The city-states would remain self governed, and would
                      elect a single member from amongst themselves from any
                      station or class to represent their clan at the Great
                      Assembly of Accords. The military of the clans would also
                      be unified. Warriors would no longer fight for the
                      individual interests of their clans, but instead would
                      fight for the glory and unity of The Triumvate. Clan
                      diversity and the unique culture of each clan would be
                      preserved and celebrated. And displayed in full at the
                      Great Feast during the Festival of The Accords. The
                      chaotic business of lawmaking would also be conducted and
                      compiled in a single night. All legislation would be voted
                      on by majority representation, implemented throughout the
                      year, and not revisited until the Accords the following
                      year.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="container">
                  <div className="overlay">
                    <div className="text">
                      The Vjarr clan represented by the fire element was the
                      strongest and most affluent of the four clans. They sat at
                      the seat of power and authority in the region, and were
                      opposed to any change in government. While not officially
                      declared as Emperor, the Steward of Vjarr Tilloren had
                      governed with an iron fist over the era, ensuring that his
                      clan received resources and property rights over the
                      neighboring clans. Tilloren refused to sign the accords
                      swearing that the Vjarr would never surrender their
                      authority to the lesser clans. Nevertheless the Triumvate
                      commenced and the Accords were established without the
                      inclusion of the Vjarr. What followed was an era of
                      prosperity and unprecedented growth for the United Clans,
                      whereas the Vjarr shrank from their position. The Vjarr
                      had devoted their energy to the art of war, and were
                      uninitiated in the environment of peace. Famine and
                      Desolation followed for the people of the Vjarr. Tilloren
                      sought the advisement of military scientists pouring what
                      little remained of his peoples resources into weapons of
                      terror. It was at the 50th celebration of the Festival of
                      The Accords that Tilloren made his move. Staging an
                      invasion of the Triumvate - His forces assaulted the
                      people of the United Clans and slaughtered all in their
                      path. Tilloren cut a path of blood to the halls of the
                      Great Feast where he murdered all who were in attendance
                      including the Founding Family. Tilloren reasserted clan
                      Vjarr as the ruling power of Vidas, officially declaring
                      himself as Emperor and banning any mention of the Accords
                      upon pain of death. The era that followed was an age of
                      terror and enslavement for the United Clans. Tilloren
                      excised all of his pent hatred and resentment on all who
                      had dared to oppose the Vjarr.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="fog-img alliance-fog-1" />
          <div className="fog-img alliance-fog-2" />
        </section>
      </div>
    );
  }
}

export default Alliance;
