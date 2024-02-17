import React from "react";
import { Header } from "../Header/header";
import { Video } from "../screencomponentes/video";
import { Page1 } from "../screencomponentes/page1";
import { Page2 } from "../screencomponentes/page2";
import { Page3 } from "../screencomponentes/page3";
import { Page4 } from "../screencomponentes/page4";
import { Footer } from "../screencomponentes/footer";
import { Pagelast } from "../screencomponentes/pagelast";
import { Page5 } from "../screencomponentes/page5";
import { Page6 } from "../screencomponentes/page6";
import Page7img from "../screencomponentes/page7-img";
import { Page8 } from "../screencomponentes/page8";
import { Page9 } from "../screencomponentes/page9";

function Home(){
    return(
        <>
        <Header/>
        <Video/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Page6/>
        <Page7img/>
        <Page8/>
        <Page9/>
        <Pagelast/>
        <Footer/>
        </>
    )
}
export{Home}