import React from 'react';
import {render} from 'react-dom';
import FestivalList from './FestivalList.jsx';
import FFAFestivalList from './FFAFestivalList.jsx';
import UpcomingFestivalList from './UpcomingFestivalList.jsx';
import FestivalSlider from './FestivalSlider.jsx';
import FestivalTile from './FestivalTile.jsx';
import FooterComponent from './FooterComponent.jsx';
import festivalData from './festivals.json';

class App extends React.Component {
    render(){
        if(festivalData)
        window.festivalData = festivalData;
		return (
			<div>
				<FestivalList />
			</div>
		); 
	}  
} 

render(<App/>, document.getElementById('app')); 
render(<FFAFestivalList/>, document.getElementById('ffafestivals')); 
render(<UpcomingFestivalList/>, document.getElementById('upcomingfestivals')); 
render(<FestivalSlider/>, document.getElementById('festivalSlider')); 


