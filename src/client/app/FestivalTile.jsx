import React from 'react';

class FestivalTile extends React.Component{
    constructor(props){
        super(props);
        this.displayName='FestivalTile';
        this.state = {
            id: 0,
            name: '',
            description: "",
            film_count: 0,
            url_name: '',
            banner_path: '',
            thumbnail_path: '',
            style:''
        }
    }

    render(){

        var style = 'column festival-tile '+this.props.style;
        var imgpath = this.props.thumbnail_path ? this.props.thumbnail_path : this.props.banner_path;
        var shortName = this.props.name;

	if((new RegExp("South by Southwest Film Festival","i")).exec(this.props.name)!=null){
		shortName = "SXSW";
	}        
	else if(((new RegExp("International Documentary Film Festival Amsterdam","i")).exec(this.props.name)!=null)){
		shortName = "IDFA";
	}
        else {
        
        	shortName = this.props.name.replace(new RegExp("(International)|(Film)|(Festival)","ig"),"").trim();
        	
        }
        
        
        var shortDescription = this.props.description;
        if(shortDescription.length>256){
            shortDescription = shortDescription.substring(0,225)+"...";
        }

        return (
            <li key={this.props.id} className={style}>
                <div className="film-panel-ribbon ribbon-tag" >
                    {this.props.film_count} films
                </div>
                <img alt={this.props.name} title={"Watch films from "+ this.props.name} className="thumbnail" src={'//d3uc4wuqnt61m1.cloudfront.net' + imgpath} width="210" height="118"/>
                <div className="festival-tile-content">
                    <h5>{shortName}</h5>
                    <div className="description">{shortDescription}</div>
                </div>
            </li>
        );
    }
}

FestivalTile.propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    film_count: React.PropTypes.number,
    url_name: React.PropTypes.string,
    banner_path: React.PropTypes.string,
    style: React.PropTypes.string
}

export default FestivalTile