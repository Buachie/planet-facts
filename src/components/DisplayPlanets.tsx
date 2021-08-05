import { useState } from "react";

interface Planet {
  data: {
    name: string;
    overview: { content: string; source: string };
    structure: { content: string; source: string };
    geology: { content: string; source: string };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    color: string;
    images: { planet: string; internal: string; geology: string };
  };
}

const DisplayPlanets = (props: Planet) => {
  //Overview will appear by default
  const [overview, toggleOverview] = useState<Boolean>(true);
  const [internal, toggleInternal] = useState<Boolean>(false);
  const [geology, toggleGeology] = useState<Boolean>(false);

  const activateOverview = () => {
    toggleOverview(true);
    toggleInternal(false);
    toggleGeology(false);
  };
  const activateInternal = () => {
    toggleOverview(false);
    toggleInternal(true);
    toggleGeology(false);
  };
  const activateGeology = () => {
    toggleOverview(false);
    toggleInternal(false);
    toggleGeology(true);
  };

  return (
    <div className={`planet ${props.data.name}`} role="main">
      <div className="button-container-mobile">
        <div
          className={`button ${overview ? "active" : null}`}
          style={{
            borderBottom: overview ? "3px solid " + props.data.color : "none",
          }}
          onClick={activateOverview}
        >
          <p>Overview</p>
        </div>

        <div
          className={`button ${internal ? "active" : null}`}
          style={{
            borderBottom: internal
              ? "3px solid " + props.data.color
              : "transparent",
          }}
          onClick={activateInternal}
        >
          <p>Structure</p>
        </div>
        <div
          className={`button ${geology ? "active" : null}`}
          style={{
            borderBottom: geology
              ? "3px solid " + props.data.color
              : "transparent",
          }}
          onClick={activateGeology}
        >
          <p>Surface</p>
        </div>
      </div>
      <div className="planet-data">
        <div className="img-container">
          <img
            className="planet-image"
            src={
              internal === true
                ? process.env.PUBLIC_URL + props.data.images.internal
                : process.env.PUBLIC_URL + props.data.images.planet
            }
            alt="planet"
          />
          {geology === true ? (
            <img
              className="planet-geology"
              src={process.env.PUBLIC_URL + props.data.images.geology}
              alt="geology"
            />
          ) : null}
        </div>

        <div className="planet-info">
          <div className="info-container">
            <h1 className="planet-name">{props.data.name}</h1>
            <p className="planet-overview">
              {overview === true
                ? props.data.overview.content
                : internal === true
                ? props.data.structure.content
                : props.data.geology.content}
            </p>
            <p className="source">
              Source:{" "}
              <a
                href={
                  overview === true
                    ? props.data.overview.source
                    : internal === true
                    ? props.data.structure.source
                    : props.data.geology.source
                }
              >
                Wikipedia <i className="fas fa-external-link-alt"></i>
              </a>
            </p>
          </div>
          <div className="button-container">
            <div
              className={`button ${overview ? "active" : null}`}
              style={{
                backgroundColor: overview ? props.data.color : "transparent",
              }}
              onClick={activateOverview}
            >
              <p>01</p>
              <p>Overview</p>
            </div>
            <div
              className={`button ${internal ? "active" : null}`}
              style={{
                backgroundColor: internal ? props.data.color : "transparent",
              }}
              onClick={activateInternal}
            >
              <p>02</p>
              <p>Internal Structure</p>
            </div>
            <div
              className={`button ${geology ? "active" : null}`}
              style={{
                backgroundColor: geology ? props.data.color : "transparent",
              }}
              onClick={activateGeology}
            >
              <p>03</p>
              <p>Surface Geology</p>
            </div>
          </div>
        </div>
      </div>
      <div className="planet-stats">
        <div className="stat-window">
          <p>ROTATION TIME</p>
          <h2>{props.data.rotation}</h2>
        </div>
        <div className="stat-window">
          <p>REVOLUTION TIME</p>
          <h2>{props.data.revolution}</h2>
        </div>
        <div className="stat-window">
          <p>RADIUS</p>
          <h2>{props.data.radius}</h2>
        </div>
        <div className="stat-window">
          <p>AVERAGE TEMP.</p>
          <h2>{props.data.temperature}</h2>
        </div>
      </div>
    </div>
  );
};

export default DisplayPlanets;
