import React, { useEffect, useState } from "react";
import "../styles/ButtonsPanel.scss";
import villagerIcon from "../aoeIcons/MaleVillDE.webp";
import femaleVillagerIcon from "../aoeIcons/FemaleVillDE.webp";
import towncenterIcon from "../aoeIcons/TowncenterDE.webp";
import halberdierIcon from "../aoeIcons/HalberdierDE.webp";
import arbalesterIcon from "../aoeIcons/ArbalesterDE.webp";
import paladinIcon from "../aoeIcons/PaladinDE.webp";
import uniqueUnitsIcon from "../aoeIcons/UniqueunitsDE.webp";
import trebIcon from "../aoeIcons/TrebuchetDE.webp";
import skirmIcon from "../aoeIcons/SkirmisherDE.webp";
import scountCavalryIcon from "../aoeIcons/ScoutcavalryDE.webp";
import bombardCannonIcon from "../aoeIcons/BombardCannonDE.webp";
import cavalryArcherIcon from "../aoeIcons/CavalryarcherDE.webp";
import fletchingIcon from "../aoeIcons/FletchingDE.webp";
import chemistryIcon from "../aoeIcons/ChemistryDE.webp";
import wheelBarrowIcon from "../aoeIcons/WheelbarrowDE.webp";
import imperialIcon from "../aoeIcons/ImperialAgeIconDE.webp";
import ballisticsIcon from "../aoeIcons/BallisticsDE.webp";

export default function ButtonsPanel() {
  const [autoVil, setAutoVil] = useState(false);

  const handleAction = async (action) => {
    await fetch(`/execute/${action}`);
  };

  const handleAutoVil = () => {
    console.log({ autoVil });
    setAutoVil(!autoVil);
  };

  useEffect(() => {
    const autoVilTimer = setInterval(() => {
      if (autoVil) {
        handleAction("create-villager");
      }
    }, 15000);

    return () => {
      clearInterval(autoVilTimer);
    };
  }, [autoVil]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-villager");
            }}
          >
            <img src={villagerIcon} />
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-villager-5");
            }}
          >
            <img src={villagerIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("research-wheelbarrow");
            }}
          >
            <img src={wheelBarrowIcon} />
          </button>
        </div>

        <div className="col-3">
          <button
            onClick={() => {
              handleAction("idle-villagers");
            }}
          >
            <img src={femaleVillagerIcon} />
            <span className="item-text">All Idle Vils</span>
          </button>
        </div>

        <div className="col-3">
          <button
            onClick={() => {
              handleAction("town-center-gather");
            }}
          >
            <img src={towncenterIcon} />
            <span className="item-text">TC gather</span>
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => {
              handleAction("gather-villagers-5");
            }}
          >
            <img src={towncenterIcon} />
            <span className="item-count">x5</span>
            <span className="item-text">Gather new vils</span>
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={() => {
              handleAction("gather-idle-villagers");
            }}
          >
            <img src={villagerIcon} />
            <span className="item-text">Gather idle vils</span>
          </button>
        </div>

        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-halberdier-5");
            }}
          >
            <img src={halberdierIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-arbalester-5");
            }}
          >
            <img src={arbalesterIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-paladin-5");
            }}
          >
            <img src={paladinIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-castle-unit-5");
            }}
          >
            <img src={uniqueUnitsIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-treb");
            }}
          >
            <img src={trebIcon} />
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-skirm-5");
            }}
          >
            <img src={skirmIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-scout-5");
            }}
          >
            <img src={scountCavalryIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-bombard-5");
            }}
          >
            <img src={bombardCannonIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("create-cav-archer-5");
            }}
          >
            <img src={cavalryArcherIcon} />
            <span className="item-count">x5</span>
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("research-age");
            }}
          >
            <img src={imperialIcon} />
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("research-fletching");
            }}
          >
            <img src={fletchingIcon} />
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("research-chemistry");
            }}
          >
            <img src={chemistryIcon} />
          </button>
        </div>
        <div className="col-2">
          <button
            className="icon-only"
            onClick={() => {
              handleAction("research-ballistics");
            }}
          >
            <img src={ballisticsIcon} />
          </button>
        </div>
        <div className="col-4">
          <button className="icon-only" onClick={handleAutoVil}>
            <input type="checkbox" id="autoVil" checked={autoVil} />
            <label className="item-text">Auto create vils</label>
          </button>
        </div>
      </div>
    </div>
  );
}
