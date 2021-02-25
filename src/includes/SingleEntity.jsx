import React from "react";

function SingleZone(props) {


    return <>
        
        <div className="container content pt-5">
            <div className="content-header p-5">
                <h3>Singe Zone Component</h3>

            </div>
            <div className="content">
                <div className="content-subheader">
                    <ul className="d-flex flex-row">
                        <li>Пункт 1</li>
                        <li>Пункт 2</li>
                        <li>Пункт 3</li>
                        <li>Пункт 4</li>
                    </ul>
                </div>
                <div className="content-body">
                    <p>INFO</p>
                </div>
            </div>
        </div>
    </>
}

function SingleTank(props) {


    return <>
        
        <div className="container content pt-5">
            <div className="content-header p-5">
                <h3>Singe Tank Component</h3>

            </div>
            <div className="content">
                <div className="content-subheader">
                    <ul className="d-flex flex-row">
                        <li>Пункт 1</li>
                        <li>Пункт 2</li>
                        <li>Пункт 3</li>
                        <li>Пункт 4</li>
                    </ul>
                </div>
                <div className="content-body">
                    <p>INFO</p>
                </div>
            </div>
        </div>
    </>
}

function SingleContent(props) {


    return <>
        
        <div className="container content pt-5">
            <div className="content-header p-5">
                <h3>Singe Content Component</h3>

            </div>
            <div className="content">
                <div className="content-subheader">
                    <ul className="d-flex flex-row">
                        <li>Пункт 1</li>
                        <li>Пункт 2</li>
                        <li>Пункт 3</li>
                        <li>Пункт 4</li>
                    </ul>
                </div>
                <div className="content-body">
                    <p>INFO</p>
                </div>
            </div>
        </div>
    </>
}

function SingleSpecies(props) {
    //props# data - object with full item to render
    console.log('SingleSpecies Data:', props.data);

    return <>
        
        <div className="container content pt-5">
            <div className="content-header p-5">
                <h3>{props.data.NameRus} - {props.data.NameEn}</h3>
                <h5>{props.data.Phylum} {props.data.Class} - {props.data.BinomialName}</h5>
            </div>
            <div className="content">
                <div className="content-subheader">
                    <ul className="d-flex flex-row">
                        <li>Пункт 1</li>
                        <li>Пункт 2</li>
                        <li>Пункт 3</li>
                        <li>Пункт 4</li>
                    </ul>
                </div>
                <div className="content-body">
                    <p>INFO</p>
                </div>
            </div>
        </div>
    </>
}

const SingleEntity = (props) => {
    //console.log("Entity init props: ", props);

    if(props.location) {
        const type = props.location.entity.type;
        const data = props.location.entity.data;

        console.log("---- TYPE ----> ", type);

        switch(type) {
            case "species":
                return <SingleSpecies data={data} />
    
            case "tank":
                return <SingleTank data={data} />
    
            case "zone":
                return <SingleZone data={data} />
    
            case "content":
                return <SingleContent data={data} />
    
            default: 
                return <p>Unkown entity type...</p>
        }
    }

    // console.log("ENTITY COMPONENT");
   
    // return <p>Empty entity</p>


    
}

export default SingleEntity;