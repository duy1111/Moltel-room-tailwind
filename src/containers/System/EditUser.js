import React from 'react';
import { EditProfile } from '.';
const UpdateUser = ({ setIsEdit,dataUser }) => {
    
    console.log('check data ',dataUser)

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                setIsEdit(false);
            }}
            className="absolute top-0 left-0 right-0 bottom-0 bg-overplay30 flex justify-center items-center"
        >
            <div onClick={(e) => e.stopPropagation()} className="bg-white max-w-1100 w-full h-[700px] overflow-y-auto">
                <EditProfile  isEdit setIsEdit={setIsEdit} dataUser={dataUser} />
            </div>
        </div>
    );
};

export default UpdateUser;