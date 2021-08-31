import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="https://cdn.eldoce.tv/sites/default/files/styles/site_nota_slider_preview/public/1%20El%20Durazno%20-%20C%C3%B3rdoba.jpg?itok=9fF3du-G" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="https://cdn.eldoce.tv/sites/default/files/styles/site_nota_slider_preview/public/3%20Villa%20general%20belgrano%20-%20c%C3%B3rdoba.jpg?itok=MuHZftYZ" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="https://cdn.eldoce.tv/sites/default/files/styles/site_nota_slider_preview/public/4%20La%20Toma%20Capilla%20del%20monte%20C%C3%B3rdoba_0.jpg?itok=TAzF4uFc" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="https://cdn.eldoce.tv/sites/default/files/styles/site_nota_slider_preview/public/5%20San%20Clemente%20-%20C%C3%B3rdoba.jpg?itok=MWBPpIcV" />
      <p className="legend">Legend 4</p>
    
    </div>
  </Carousel>
);