import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Badge from '@material-ui/core/Badge';
import BurstModeOutlinedIcon from '@material-ui/icons/BurstModeOutlined';
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined';
import ZoomOutOutlinedIcon from '@material-ui/icons/ZoomOutOutlined';



function ZoomIcon(props) {
    const [iconState, setIconState] = useState(false);

    function changeIcon() {
        if(iconState) {
            setIconState(false);
        } else {
            setIconState(true);
        }
    }

    console.log(iconState);

    return  <>
                {iconState ? <ZoomOutOutlinedIcon fontSize="large" onClick={changeIcon} /> : <ZoomInOutlinedIcon fontSize="large" onClick={changeIcon} />}
            </>
}

export default function TemporaryDrawer(props) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const imageCount = props.content.Gallery.length;
    const serverURL = 'http://10.1.5.149:1337';
    let iconState = false;

    const toggleDrawer = (anchor, open) => event => {
    if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
    ) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

    function resizePreview() {
        const container = document.getElementById("preview-container");
        container.classList.toggle("extend");


        console.log(props.content);
        
    }



    const gallery = anchor => (
        <div role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} >
            <h2 className="preview-header sticky">{props.content.NameRus}</h2>
            <Divider />

            <List>
                {props.content.Gallery.map((obj, index) => (
                    <img className="preview-img preview-small" src={serverURL + obj.formats.medium.url} alt={index} />
                ))}
            </List>
        </div>
    );

  return (
    <div>

        <React.Fragment key={"right"}>

                <Button onClick={toggleDrawer("right", true)}>
                    <Badge color="secondary" badgeContent={imageCount} showZero>
                        <BurstModeOutlinedIcon />
                    </Badge>    
                </Button>

                <Drawer
                    anchor={"right"}
                    open={state["right"]}
                    classes={"test"}
                    onClose={toggleDrawer("right", false)}
                    >
                        <div className="preview-container" id="preview-container">
                            <button className="preview-resize sticky" onClick={resizePreview}>
                                <ZoomIcon />
                            </button>
                            <div className="preview">
                                {gallery("right")}
                            </div>
                        </div>
                </Drawer>
        </React.Fragment>

    </div>
  );
}