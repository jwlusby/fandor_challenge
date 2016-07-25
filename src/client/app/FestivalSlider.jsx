import React from 'react'
import festivalData from './festivals.json';

class FestivalSlider extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(festivalData!=undefined){
            var festivalSlideIds = festivalData.festival_collections.slideshow;
            var slides = festivalData.festivals.filter(function(f){
                return festivalSlideIds.indexOf(f.id)>=0;
            });
            var listItems = slides.map(function(festival,index){
                return (
                    <li key={index}><img className="slide" src={"//d3uc4wuqnt61m1.cloudfront.net"+festival.banner_path} /></li>
                );
            });
            return (
                <div className="twelve columns slider-container myslider">
                    <div>
                        <ul id="slider" className="nomargins">
                            {listItems}
                        </ul>
                    </div>
                    <div id="sliderOverlayLeft" className="sliderOverlayLeft"></div>
                    <div id="sliderOverlayRight" className="sliderOverlayRight"></div>
                </div>
            );
        }
        else{
            return "";
        }
    }
}
               
export default FestivalSlider;