import Drawer from "./Drawer.jsx";
import Modal from "./Modal.jsx";

const serverURL = 'http://10.1.5.149:1337';

const renderSingleImage = (object) => {
	const styles = { width: 40, height: 40, borderRadius: '50%' };
	const url = serverURL + object.ImageMain.formats.thumbnail.url;
	const fullImgURL = serverURL + object.ImageMain.url

	return <Modal img={url} styles={styles} fullImg={fullImgURL} />
}




const renderObject = rowData => {
	console.log(rowData);
	if(rowData.Zone) {
		return rowData.Zone.Code;
	} else {
		return "Missing data"
	}
}




const renderArray = (obj, col) => {
	console.log(obj);

	const Kinds = () => {
		let arr;
		if(obj.hasOwnProperty("Kinds")) {
			arr = obj.Kinds.map( kind => kind.NameRus); //array
		} else if(obj.hasOwnProperty("SpeciesList")) {
			arr = obj.SpeciesList.map( kind => kind.NameRus); //array
		} else {
			return "Missing array";
		}

		return arr.join(", ");
	};

	const Tanks = () => {
		let arr = obj.Tanks.map( tank => tank.Code); //array
		return arr.join(", ");
	};

	const Contents = () => {
		let arr = obj.Contents.map( content => content.Code); //array
		return arr.join(", ");
	}

	switch(col) {
		case "tanks":
			return <Tanks />;
		case "kinds":
			return <Kinds />;
		case "contents":
			return <Contents />;
		default:
			return "Unknown array";
	}
	
}


export {renderSingleImage, renderObject, renderArray};