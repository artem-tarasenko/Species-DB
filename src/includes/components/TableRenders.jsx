import React from "react";
import Modal from "./Modal.jsx";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const serverURL = 'http://10.1.5.149:1337';


const LightTooltip = withStyles((theme) => ({
	tooltip: {
	  backgroundColor: theme.palette.common.white,
	  color: 'rgba(0, 0, 0, 0.87)',
	  boxShadow: theme.shadows[1],
	  fontSize: 14,
	},
  }))(Tooltip);

//###################################################################
//###################################################################
const renderSingleImage = (object) => {
	const styles = { width: 40, height: 40, borderRadius: '50%' };
	const url = serverURL + object.ImageMain.formats.thumbnail.url;
	const fullImgURL = serverURL + object.ImageMain.url

	return 	<LightTooltip title="Add" placement="top-start">
				<Modal img={url} styles={styles} fullImg={fullImgURL} />
			</LightTooltip>	
}



  
  

//###################################################################
//###################################################################
const renderObject = rowData => {
	if(rowData.Zone || rowData.type) { //for Zone as a child of parent object
		return rowData.Zone.Code;
    } else if(rowData.Code) { //For zone as an object directly, without parent
        return rowData.Code;
	} else if(rowData.url) { //For images
		return (rowData.url.length > 0) ? "Есть" : "----";
	} else {
        console.log("RenderObject(): Missing data");
        console.log(rowData);
		return "Some object"
	}
}


//###################################################################
//###################################################################
const renderArray = (obj, col) => {
	console.log(obj);
	const Kinds = () => {
		let arr;

		if(obj.hasOwnProperty("Kinds")) {
			arr = obj.Kinds.map( kind => kind.NameRus); //array
		} else if(obj.hasOwnProperty("SpeciesList")) {
			arr = obj.SpeciesList.map( kind => kind.NameRus); //array
		} else {
            console.log("RenderArray(): Missing data");
            console.log(obj);
			return "Missing array";
		}

		return arr.join(", ");
	};
 

    //###################################################################
    if(col) {
        switch(col) {
            case "kinds":
                return <Kinds />;

			case "tanks":
				return obj.Tanks.map( tank => 
					<React.Fragment>
						<LightTooltip placement="top" title={
							<React.Fragment>
								<p><b>{tank.Name}</b></p>
								<hr />
								<p>Видов: {tank.Kinds.length}</p>
							</React.Fragment>
						}>
						<p>{tank.Code}</p>
						</LightTooltip>
					</React.Fragment>
				);

            case "contents": 
				return obj.Contents.map( content => content.Code).join(", ");

            case "custom": 
				return obj.map( item => item.NameRus ).join(", ");

			case "gallery": 
				return obj.length > 0 ? obj.length : "---";

            default:
                return "Unknown array: " + col ;
        }
    } else {
        console.log("RenderArray(): Switching is not possible, no argument");       
    }

	
}


export {renderSingleImage, renderObject, renderArray};