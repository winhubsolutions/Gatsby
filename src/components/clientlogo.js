
import React from "react"
import cache from "../img/clientlogos/techsophy-trans.png"
import credai from "../img/clientlogos/credai-trans.png"
import elmnts from "../img/clientlogos/5lemnts-trans.png"
import cacheper from "../img/clientlogos/cache-tran.png"
import MSN from "../img/clientlogos/msn-trans.png"
import KIPL from "../img/clientlogos/KIPL.png"
import smart2buy from "../img/clientlogos/smart2buy-trans.png"
import wucb from "../img/clientlogos/sciforce-480x196.png"
import chitrambhalare from "../img/clientlogos/Chitram-Bhalare-Telugu-Movie-News-logo-1.png"
import {Link} from "gatsby"



const Clientlogo = () => (
<div className="partner_logo_area_four">
  <div className="row partner_info">
    <div className="logo_item">
      <a href="#">
        <img src={cache} alt=""/>
      </a>
    </div>
    <div className="logo_item">
      <a href="#">
        <img src={credai} alt />
      </a>
    </div>
    <div className="logo_item">
      <a href="#">
        <img src={elmnts} alt />
      </a>
    </div>
    <div className="logo_item">
      <a href="#">
        <img src={cacheper} alt />
      </a>
    </div>
    <div className="logo_item">
      <a href="#">
        <img src={MSN}alt />
      </a>
    </div>
    <div className="logo_item">
      <a href="#">
        <img src={KIPL}alt="KIPL" />
      </a>
    </div>
    <div className="logo_item">
      <a href="#">
        <img src={smart2buy}alt="smart2buy" />
      </a>
    </div>
    <div className="logo_item">
      <a href="#">
        <img src={wucb} alt="WARANGAL URBAN CO-OPERATIVE BANK LIMITED" />
      </a>
    </div>
    <div className="logo_item">
      <a href="#">
        <img src={chitrambhalare}alt="chitrambhalare" />
      </a>
    </div>
  </div>
</div>


)

export default Clientlogo