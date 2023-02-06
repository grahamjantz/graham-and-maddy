import React from 'react';
import './App.css';
import NavbarList from './components/NavbarList/NavbarList';
import HomePage from './components/HomePage/HomePage';
import OurStoryPage from './components/OurStoryPage/OurStoryPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import FaqPage from './components/FaqPage/FaqPage'
import DirectionsPage from './components/DirectionsPage/DirectionsPage';
import RegistryPage from './components/RegistryPage/RegistryPage';
import RsvpPage from './components/RsvpPage/RsvpPage'
import { Route, Routes } from 'react-router-dom';

export const invitesSent = true;

const App = () => {  
  return (
    <div className="App">
      
      <NavbarList />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<HomePage />}>HOME</Route>
          <Route path='/our-story' element={<OurStoryPage />}>OUR STORY</Route>
          <Route path='/details' element={<DetailsPage />}>DETAILS</Route>
          <Route path='/faq' element={<FaqPage />}>FAQ</Route>
          <Route path='/directions' element={<DirectionsPage />}>DIRECTIONS</Route>
          <Route path='/registry' element={<RegistryPage invitesSent={invitesSent}/>}>REGISTRY</Route>
          <Route path='/rsvp' element={<RsvpPage invitesSent={invitesSent}/>}>RSVP</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
