import React from 'react';
import $ from 'jquery';
import FestivalTile from './FestivalTile.jsx';
import festivalData from './festivals.json';

 
class FestivalList extends React.Component{
    constructor(props){
        super(props);
        this.displayName = "FestivalList";
        this.state = {};
		
    }
	 
	
    componentDidMount(){
        /*$.get('./festivals.json', function(result){
            this.setState({ festivalData: result });
        }.bind(this));
        */
    }
	
    render(){
        if(festivalData.festivals!=undefined){
            console.log("Rendering FestivalList");
            
            
            var rows = [];
            var curRow = [];
            var marqueeFestivalIds = festivalData.festival_collections.marquee;
            var marqueeFestivals = festivalData.festivals.filter(function(f){
                return marqueeFestivalIds.indexOf(f.id)>=0;
            });
            
            marqueeFestivals = marqueeFestivals.sort(function(itemA, itemB){
            	if(itemA.name > itemB.name)
            		return 1;
            	else if(itemA.name < itemB.name)
            		return -1;
            	else if(itemA.name == itemB.name){
            		return 0;
            	}
            });
            
            for(var x=0; x < marqueeFestivals.length; x++){
                var festival = marqueeFestivals[x];
                
                var isEnd = x%3==2;
                var style = "";
                if(isEnd){ 
                    style="end";
                }
    
                curRow.push(<FestivalTile style={style} key={festival.id} id={festival.id} name={festival.name} description={festival.description} banner_path={festival.banner_path} thumnail_path={festival.thumnail_path} film_count={festival.film_count} url_name={festival.url_name}/>);

                if(isEnd || x == marqueeFestivals.length-1){        
                    rows.push(curRow);
                    curRow = [];
                }
            }

            var listItems = rows.map(
                function(row,index){
                    return(<ul key={index} className='row festival-row'>{row}</ul>);
                }
            );

            return (
                <div className='twelve columns festival-list'>
                    {listItems} 
	            </div>
            );
	    }
        else{
            return <div>No Festivals</div>;
        }
    }
}



export default FestivalList;
 