import React from 'react'
import AdminHomeContainer from '../components/StudioRoomContainer/StudioRoomContainer';

const AdminHomePage = () => {
    document.title = "Admin";
    return (
        <div>
            <AdminHomeContainer />
        </div>
    )
}

export default AdminHomePage
