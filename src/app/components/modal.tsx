    import React from "react";


    const Modal = ({ isVisible } : {isVisible : boolean } ) => {
        if (!isVisible) return null;
    return (
        <div className='fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[500px] flex flex-col'>
            <button className="text-white text-xl place-self-end" >X</button>
            
            <div className="bg-white drop-shadow-lg rounded-lg p-60 ">
                <span>sadakdaksdjaskd asdask da</span>
            </div>
            </div>
        </div>
    );
    };
    export default Modal;
