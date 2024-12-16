import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Teams from './pages/Teams';
import Events from './pages/Events';
import './pages/fontawesome'
import LoginPage from './pages/Login';
import AdminLayout from './Layout/AdminLayout';
import AddMemberLayout from './pages/Addmember';

import DeleteMemberLayout from './components/DeleteMember';
import UpdateMemberLayout from './components/UpdateMember';
import UpdateEventPage from './components/UpdateEvent';
import DeleteEventPage from './components/DeleteEvent';
import AddEventPage from './components/AddEvent';
import AddPhoto from './components/AddPhoto';
import SignupPage from './pages/SignUp';



const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/events" element={<Events />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/admin" element={<AdminLayout />}>

                <Route path='addmember' element={<AddMemberLayout/>}/>
                <Route path='deletemember' element={<DeleteMemberLayout/>}/>
                <Route path='updatemember' element={<UpdateMemberLayout/>}/>
                <Route path='updatemember' element={<UpdateMemberLayout/>}/>
                <Route path='addevent' element={<AddEventPage/>}/>
                <Route path='deleteevent' element={<DeleteEventPage/>}/>
                <Route path='updateevent' element={<UpdateEventPage/>}/>
                <Route path='addphoto' element={<AddPhoto/>}/>
                </Route>

                
           
            </Routes>
            <Footer /> 
        </Router>
    );
};

export default App;
