import React from "react";

export default function Attachment(props){

    function compruebaImagen(){
        let porPantalla;
        if(props.attachment==null){
            porPantalla = <div className="no_img">?</div>
        }else{
            // eslint-disable-next-line jsx-a11y/alt-text
            porPantalla = <div><img src={props.attachment.url} className="attachment_img"></img></div>
        }
        return porPantalla;
        
    }

    return(
        
        <div>
           {compruebaImagen()}
        </div>
        
    );
}