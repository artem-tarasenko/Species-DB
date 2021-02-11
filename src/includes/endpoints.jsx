import Drawer from "./Drawer.jsx";
import Modal from "./Modal.jsx";
const serverURL = 'http://localhost:1337';

const renderSingleImage = (object) => {
	const styles = { width: 40, height: 40, borderRadius: '50%' };
	const url = serverURL + object.ImageMain.formats.thumbnail.url;
	const fullImgURL = serverURL + object.ImageMain.url
	return <Modal img={url} styles={styles} fullImg={fullImgURL} />
}

const endpoints = [
	{
		id: 1,
		name: "Kinds",
		link: "http://localhost:1337/kinds",
		headers: 
		[		
			
			{field: "NameRus", title: "Name Ru"},
			{field: "NameEng", title: "Name Eng"},
			{field: "Phylum", title: "Phylum"},
			{field: "Class", title: "Class"},
			{field: "BinomialName", title: "Binomial Name"},
			{field: "Brackets", title: "Breckets", type: "boolean"},
			{field: "DescrAuthor", title: "Author"},
			{field: "DescrYear", title: "Year"},
			{field: "ImageMain", title: "Main Image", render: rowData => renderSingleImage(rowData) },
			{field: "Gallery", title: "Gallery", render: rowData => <Drawer />},
			{field: "Tanks", title: "Tanks", render: rowData => <p>Array of objects</p>},
		]
	},
	{
		id: 2,
		name: "Tanks",
		link: "http://localhost:1337/tanks",
		headers: [
			{field: "Zone", title: "Zone", render: rowData => <p>Custom object</p>},
			{field: "Code", title: "Code"},
			{field: "Name", title: "Name"},
			{field: "Kinds", title: "Kinds", render: rowData => <p>Custom array</p>}
		]
	},
	{
		id: 3,
		name: "Zones",
		link: "http://localhost:1337/zones",
		headers: [
			{field: "Code", title: "Code"},
			{field: "Name", title: "Name"},
			{field: "Tanks", title: "Tanks", render: rowData => <p>Custom array</p>},
			{field: "Contents", title: "Contents", render: rowData => <p>Custom array</p>}
		]
	},
	{
		id: 4,
		name: "Contents",
		link: "http://localhost:1337/contents",
		headers: [
			{field: "Zone", title: "Zone", render: rowData => <p>Custom object</p>},
			{field: "Code", title: "Code"},
			{field: "Type", title: "Type", render: rowData => <p>Custom array</p>},
			{field: "SpeciesList", title: "Species", render: rowData => <p>Custom array</p>}
		]
	}
];


export default endpoints;
