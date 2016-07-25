import React from 'react'
import festivalData from './festivals.json';

class FFAFestivalList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(festivalData!=undefined){
            var ffaFestivalIds = festivalData.festival_collections.ffa_all;
            var ffafestivals = festivalData.festivals.filter(function(f){
                return ffaFestivalIds.indexOf(f.id)>=0;
            });

            var listItems = ffafestivals.map(function(festival,index){
                return (
                    <li key={index}>
                        <a href={"/festivals/"+ festival.url_name}>{festival.name}</a>
                    </li>
                );
            });
            return(
                <div>
                    <h4 className="border-bottom-grey">All F|FA Festivals</h4>
                    <ul className="no-bullet">
                        {listItems}
                    </ul>
                </div>
            );
        }
        else{ return "";}
    }
}

export default FFAFestivalList;