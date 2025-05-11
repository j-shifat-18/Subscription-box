import React from 'react';
import Navbar from '../Components/Header/Navbar';

const ProfileLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <h2>
                    Profile section
                </h2>
            </main>
        </div>
    );
};

export default ProfileLayout;