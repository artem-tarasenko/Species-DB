import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
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

    console.log("Passing title");
    console.log(title);
    console.log(cols);
    console.log(datas);

    const tableHeadings = cols.map( item => {
        if(item.type === "text") {
            return { text: item.title, style: 'tableHeader'}
        } else if(item.type === "boolean") {
            //console.log(item.title + " is bool, index " + index);
            return { text: item.title, style: 'tableHeader'}
        } else if(item.type === "array") {
            //console.log(item.title + " is an array, index " + index);
            return { text: item.title, style: 'tableHeader'}
        } else if(item.type === "image") {
            //console.log(item.title + " is an image, index " + index);
            return { text: item.title, style: 'tableHeader'}
        } else {
            //console.log("Error, unknown item, index " + index);
            return { text: "ERROR", style: 'tableHeader'};
        }
     });


    const RenderObjects = obj => {
        if(Array.isArray(obj)) {
            //render from object
            
            
            return "array";


        } else {
            //render from array


            return "object";
        }

    }

    function reformatData(item) {
            if(typeof item === "string" || typeof item === "number" ) {
                return item;
            } else if(typeof item === "boolean") {
                return item ? "Yes" : "No";
            } else if(typeof item === "object") {
                return RenderObjects(item);
            } else {
                return "Missing data";
            }
    }
     
    table.push(tableHeadings);
    datas.forEach( subarray => {
        let tmp = subarray.map( item => {
            return reformatData(item);
            
        })
        table.push(tmp);
    });

    //Add different column width for different tables
    const getColWidths = headers => {
        let result = [];
        
        function selectValue(item) {
            //if(item.text === "Имя" || item.text === "Имя (Ru)" || item.text === "Имя (En)" || item.text === "Вид") {
            if( ["Имя", "Имя (Ru)", "Имя (En)", "Вид"].some( el => el === item.text) ) {
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