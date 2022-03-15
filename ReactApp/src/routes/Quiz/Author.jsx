import React from "react";

export default function Author(props){

    function compruebaImagen(){
        let porPantalla;
        if(props.attachment_author==null){
            porPantalla = <div className="no_img">?</div>
        }else{
            // eslint-disable-next-line jsx-a11y/alt-text
            porPantalla = <div><img src={props.attachment_author} className="author_img"></img></div>
        }
        return porPantalla;
        
    }
    function compruebaUsername(){
        let porPantalla;
        if(props.author===null){
            porPantalla = <div className="username_style">Anónimo</div>
        }else{
            if(props.author!==null){
                porPantalla = <div className="username_style">{props.author}</div>
            }
            if(props.username!==null){
                porPantalla = <div className="username_style">{props.username}</div>

            }
            if(props.profileName!==null){
                porPantalla = <div className="username_style">{props.profileName}</div>
            }
        }
        return porPantalla;
        

    }

    return(
        
        <div>
            {compruebaImagen()}
            {compruebaUsername()}
        </div>
        
    );
}