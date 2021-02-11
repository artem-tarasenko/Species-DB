import { useTable } from 'react-table';


 const dataRaw = [
        {Zone: 'Hello1', Code: 'World 1', Type: "ffff", Species: "0000"},
        {Zone: 'Hello2', Code: 'World 2', Type: "ggg", Species: "4444"},
        {Zone: 'Hello2', Code: 'World 3', Type: "ggggggg", Species: "0555000"},
        {Zone: 'Hello3', Code: 'World 4', Type: "hhh", Species: "2222"},
        {Zone: 'Hello4', Code: 'World 5', Type: "fffhhhhf", Species: "1111"},
        {Zone: 'Hello5', Code: 'World 6', Type: "jjj", Species: "7777"},
        {Zone: 'Hello6', Code: 'World 7', Type: "ffkkkkff", Species: "55111155"},
        {Zone: 'Hello7', Code: 'World 8', Type: "llll", Species: "77888877"},
        {Zone: 'Hello8', Code: 'World 9', Type: "uuuu", Species: "088776"},
        {Zone: 'Hello9', Code: 'World 10', Type: "yyyyy", Species: "3466"},
        {Zone: 'Hello10', Code: 'World 11', Type: "tttt", Species: "566634"},
    ];


  const columnsRaw = [
        {Header: "Zone", accessor: "Zone"},
        {Header: "Code", accessor: "Code"},
        {Header: "Type", accessor: "Type"},
        {Header: "Species", accessor: "SpeciesList"}
    ];
  
  export {dataRaw, columnsRaw};