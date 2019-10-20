import React from "react";
import Picture_01 from "../media/praxis/picture_01_web.jpg";
import Picture_02 from "../media/praxis/picture_02_web.jpg";
import Picture_03 from "../media/praxis/picture_03_web.jpg";
import Picture_04 from "../media/praxis/picture_04_web.jpg";
import Picture_05 from "../media/praxis/picture_05_web.jpg";
import Picture_06 from "../media/praxis/picture_06_web.jpg";
import Picture_07 from "../media/praxis/picture_07_web.jpg";
import Picture_08 from "../media/praxis/picture_08_web.jpg";
import Picture_09 from "../media/praxis/picture_09_web.jpg";
import Picture_10 from "../media/praxis/picture_10_web.jpg";
import Picture_11 from "../media/praxis/picture_11_web.jpg";
import Picture_12 from "../media/praxis/picture_12_web.jpg";
import Picture_13 from "../media/praxis/picture_13_web.jpg";
import Picture_14 from "../media/praxis/picture_14_web.jpg";
import Picture_15 from "../media/praxis/picture_15_web.jpg";
import Picture_16 from "../media/praxis/picture_16_web.jpg";
import Picture_17 from "../media/praxis/picture_17_web.jpg";

import Picture_thumb_01 from "../media/praxis/thumb/picture_01_thumb.jpg";
import Picture_thumb_02 from "../media/praxis/thumb/picture_02_thumb.jpg";
import Picture_thumb_03 from "../media/praxis/thumb/picture_03_thumb.jpg";
import Picture_thumb_04 from "../media/praxis/thumb/picture_04_thumb.jpg";
import Picture_thumb_05 from "../media/praxis/thumb/picture_05_thumb.jpg";
import Picture_thumb_06 from "../media/praxis/thumb/picture_06_thumb.jpg";
import Picture_thumb_07 from "../media/praxis/thumb/picture_07_thumb.jpg";
import Picture_thumb_08 from "../media/praxis/thumb/picture_08_thumb.jpg";
import Picture_thumb_09 from "../media/praxis/thumb/picture_09_thumb.jpg";
import Picture_thumb_10 from "../media/praxis/thumb/picture_10_thumb.jpg";
import Picture_thumb_11 from "../media/praxis/thumb/picture_11_thumb.jpg";
import Picture_thumb_12 from "../media/praxis/thumb/picture_12_thumb.jpg";
import Picture_thumb_13 from "../media/praxis/thumb/picture_13_thumb.jpg";
import Picture_thumb_14 from "../media/praxis/thumb/picture_14_thumb.jpg";
import Picture_thumb_15 from "../media/praxis/thumb/picture_15_thumb.jpg";
import Picture_thumb_16 from "../media/praxis/thumb/picture_16_thumb.jpg";
import Picture_thumb_17 from "../media/praxis/thumb/picture_17_thumb.jpg";

import { connect } from "react-redux";
import lightbox2 from "lightbox2";

lightbox2.option({
  resizeDuration: 200,
  wrapAround: true,
  enableRotation: false
});

class PraxisComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Praxis</h1>
        <a
          alt=""
          href={Picture_01}
          data-lightbox="roadtrip"
          data-title="Außenwerbung"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_01} />
        </a>

        <a
          alt=""
          href={Picture_02}
          data-lightbox="roadtrip"
          data-title="Zugang zu eigenen Parkplätzen"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_02} />
        </a>

        <a alt="" href={Picture_03} data-lightbox="roadtrip" data-title="">
          <img alt="" className={"example-image"} src={Picture_thumb_03} />
        </a>

        <a
          alt=""
          href={Picture_04}
          data-lightbox="roadtrip"
          data-title="Eingangsbereich"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_04} />
        </a>

        <a
          alt=""
          href={Picture_05}
          data-lightbox="roadtrip"
          data-title="Barrierefreier Eingangsbereich"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_05} />
        </a>

        <a
          alt=""
          href={Picture_06}
          data-lightbox="roadtrip"
          data-title="Anmeldung"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_06} />
        </a>

        <a
          alt=""
          href={Picture_07}
          data-lightbox="roadtrip"
          data-title="Wartebereich"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_07} />
        </a>

        <a
          alt=""
          href={Picture_08}
          data-lightbox="roadtrip"
          data-title="Therapieraum 1"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_08} />
        </a>

        <a
          alt=""
          href={Picture_09}
          data-lightbox="roadtrip"
          data-title="Therapieraum 2"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_09} />
        </a>

        <a
          alt=""
          href={Picture_10}
          data-lightbox="roadtrip"
          data-title="Therapieraum 3"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_10} />
        </a>

        <a alt="" href={Picture_11} data-lightbox="roadtrip" data-title="">
          <img alt="" className={"example-image"} src={Picture_thumb_11} />
        </a>

        <a alt="" href={Picture_12} data-lightbox="roadtrip" data-title="">
          <img alt="" className={"example-image"} src={Picture_thumb_12} />
        </a>

        <a alt="" href={Picture_13} data-lightbox="roadtrip" data-title="">
          <img alt="" className={"example-image"} src={Picture_thumb_13} />
        </a>

        <a alt="" href={Picture_14} data-lightbox="roadtrip" data-title="">
          <img alt="" className={"example-image"} src={Picture_thumb_14} />
        </a>

        <a alt="" href={Picture_15} data-lightbox="roadtrip" data-title="Team">
          <img alt="" className={"example-image"} src={Picture_thumb_15} />
        </a>

        <a
          alt=""
          href={Picture_16}
          data-lightbox="roadtrip"
          data-title="Therapiebegleithunde Sookie und Lino"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_16} />
        </a>

        <a
          alt=""
          href={Picture_17}
          data-lightbox="roadtrip"
          data-title="Spielecke"
        >
          <img alt="" className={"example-image"} src={Picture_thumb_17} />
        </a>
      </>
    );
  }
}

export default connect(
  undefined,
  undefined
)(PraxisComponent);
