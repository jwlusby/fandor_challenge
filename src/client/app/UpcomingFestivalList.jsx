import React from 'react'
import festivalData from './festivals.json';

class UpcomingFestivalList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(festivalData!=undefined){
            var upcomingFestivalIds = festivalData.festival_collections.ffa_upcoming;
            var upcomingfestivals = festivalData.festivals.filter(function(f){
                return upcomingFestivalIds.indexOf(f.id)>=0;
            });

            var listItems = upcomingfestivals.map(function(festival,index){
                return (
                    <li key={index}>
                        <a href={"/festivals/"+ festival.url_name}>{festival.name}</a>
                    </li>
                );
            });
            return(
                <div>
                    <h4 className="border-bottom-grey">Upcoming Festivals</h4>
                    <ul className="no-bullet">
                        {listItems}
                    </ul>
                </div>
            );
        }
        else{ return "";}
    }
}

export default UpcomingFestivalList;