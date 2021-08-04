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
    images: { planet: string; internal: string; geology: string };
  };
}

const DisplayPlanets = (props: Planet) => {
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
    <div className="planet">
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
              Wikipedia
            </a>
          </p>
          <div className="button" onClick={activateOverview}>
            01 <span>Overview</span>
          </div>
          <div className="button" onClick={activateInternal}>
            02 <span>Internal Structure</span>
          </div>
          <div className="button" onClick={activateGeology}>
            03 <span>Surface Geology</span>
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
          <h2>{props.data.radius}</h2>
        </div>
      </div>
    </div>
  );
};

export default DisplayPlanets;
