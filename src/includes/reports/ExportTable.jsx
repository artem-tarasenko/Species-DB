import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import {renderSingleImage, renderObject, renderArray} from "../components/ReportRenders.jsx";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const defaultStyles = {
    header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
    },
    subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
    },
    tableExample: {
        margin: [0, 5, 0, 0]
    },
    tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
    }
};

function ExportTable(cols, datas, title) {

    let table = [];

    const tableHeadings = cols.map( item => {
        if(item.type === "text") {
            return { text: item.title, style: 'tableHeader'}

        } else if(item.type === "boolean") {
            return { text: item.title, style: 'tableHeader'}

        } else if(item.type === "array") {
            return { text: item.title, style: 'tableHeader'}

        } else if(item.type === "image") {
            return { text: item.title, style: 'tableHeader'}

        } else if(item.type === "object") {
            return { text: item.title, style: 'tableHeader'}

        } else {
            return { text: "ERROR", style: 'tableHeader'};
        }
     });


    function reformatData(item) {
        if(typeof item === "string" || typeof item === "number" ) {
            return item;

        } else if(typeof item === "boolean") {
            return item ? "Yes" : "No";

        } else if(typeof item === "object" && !Array.isArray(item)) {
            return renderObject(item);
        
        } else if(typeof item === "object" && Array.isArray(item)) {

            if(item.length > 0){
                if(item[0].mime) {
                    return renderArray(item, "gallery");
                } else if(item[0].Code) {
                    //render directly without calling additional scripts
                    return item.map( item => item.Code).join(", ");
                }
            }
            return renderArray(item, "custom");

        } else {
            console.log("ReformatData(): Unknown data format");
            return "---";
        }
    }
     
    table.push(tableHeadings);
    datas.forEach( subarray => {
        let tmp = subarray.map( item => reformatData(item));
        table.push(tmp);
    });

    //Add different column width for different tables
    const getColWidths = headers => {
        let result = [];
        
        function selectValue(item) {
            //if(item.text === "Имя" || item.text === "Имя (Ru)" || item.text === "Имя (En)" || item.text === "Вид") {
            if( ["Имя", "Имя (Ru)", "Имя (En)", "Вид", "Виды"].some( el => el === item.text) ) {
                return 150;
            } else if( ["Год", "Фото", "Галерея"].some( el => el === item.text) ) {
                return 30; 
            } else if( ["[ ]", "Фото", "Галерея"].some( el => el === item.text)) {           
            } else {
                return "*";
            }
        }
       
        if(headers.length > 5) {
            headers.forEach( () => result.push("auto") );
        } else {
            headers.forEach( (item) => result.push(selectValue(item)) );
        }

        return result;
    }


//#############################################################################
//#####     Export options  ###################################################
//#############################################################################

    let docDefinition = {
        content: [
            {text: title, style: 'subheader'},
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    // dontBreakRows: true,
                    // keepWithHeaderRows: 1,
                    widths: getColWidths(tableHeadings),
                    //widths: ["auto", "auto", "*", "*", "auto", "", "", "", "", "", ""],
                    body: table
                },
                layout: 'lightHorizontalLines'
            },
            
        ],
        pageOrientation: tableHeadings.length > 5 ? 'landscape' : 'portrait',
        styles: defaultStyles,
        defaultStyle: {
            fontSize: 10,
        }
    }

    pdfMake.createPdf(docDefinition).open();

}

export default ExportTable;