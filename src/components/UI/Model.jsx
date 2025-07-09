import React from 'react';
import { createPortal } from 'react-dom';

function Model({ children,closeModel}) {
    return createPortal(<>
        <div onClick={closeModel} className='modelbackground border-2 border-solid  bg-[rgb(50,50,50,0.9)] fixed w-[100vw] h-[100vh] p-0 m-0   z-1 '></div>
        <div className='content z-2 bg-[#fff] border-2 border-solid  fixed max-w-[1280px] w-[90%] left-2/4 transform -translate-x-2/4 top-[10%] max-h-[700px] h-9/12 overflow-y-scroll p-4 rounded-[0.5rem]'>{children}</div>
    </>, document.getElementById("model"));
}

export default Model;
