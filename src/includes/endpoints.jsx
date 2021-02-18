import {renderSingleImage, renderObject, renderArray} from "./components/TableRenders.jsx";
import Drawer from "./components/Drawer.jsx";

//###################################################################################
//####        DATA           ########################################################
//###################################################################################

const endpoints = [
	{
		id: 1,
		name: "Kinds",
		localizedName: "Виды",
		link: "http://10.1.5.149:1337/kinds",
		headers: 
		[		
			{field: "NameRus", title: "Имя (Ru)", type: "text"},
			{field: "NameEng", title: "Имя (En)", type: "text"},
			{field: "Phylum", title: "Тип", type: "text"},
			{field: "Class", title: "Класс", type: "text"},
			{field: "BinomialName", title: "Вид", type: "text"},
			{field: "Brackets", title: "[ ]", type: "boolean"},
			{field: "DescrAuthor", title: "Автор", type: "text"},
			{field: "DescrYear", title: "Год", type: "text"},
			{field: "ImageMain", title: "Фото", type: "image", filtering: false, 
				render: rowData => renderSingleImage(rowData) },
			{field: "Gallery", title: "Галерея", type: "array", filtering: false, 
				render: rowData => <Drawer content={rowData} /> },
			{field: "Tanks", title: "Танки", type: "array", filtering: false, 
				render: (rowData) => renderArray(rowData, "tanks" ) },
		]
	},
	{
		id: 2,
		name: "Tanks",
		localizedName: "Танки",
		link: "http://10.1.5.149:1337/tanks",
		headers: [
			{field: "Zone", title: "Зона", type: "array", 
				render: rowData => renderObject(rowData) },
			{field: "Code", title: "Код", type: "text"},
			{field: "Name", title: "Имя", type: "text"},
			{field: "Kinds", title: "Виды", type: "array", 
				render: rowData => renderArray(rowData, "kinds") }
		]
	},
	{
		id: 3,
		name: "Zones",
		localizedName: "Зоны",
		link: "http://10.1.5.149:1337/zones",
		headers: [
			{field: "Code", title: "Код", type: "text"},
			{field: "Name", title: "Имя", type: "text"},
			{field: "Tanks", title: "Танки", type: "array", 
				render: rowData => renderArray(rowData, "tanks") },
			{field: "Contents", title: "Контент", type: "array", 
				render: rowData => renderArray(rowData, "contents") }
		]
	},
	{
		id: 4,
		name: "Contents",
		localizedName: "Контент",
		link: "http://10.1.5.149:1337/contents",
		headers: [
			{field: "Zone", title: "Зона", type: "object", 
				render: rowData => renderObject(rowData)},
			{field: "Code", title: "Код", type: "text"},
			{field: "Type", title: "Тип", type: "text"},
			{field: "SpeciesList", title: "Виды", type: "array", 
				render: rowData => renderArray(rowData, "kinds") }
		]
	}
];


export default endpoints;
