import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import HootList from './components/HootList/HootList';
import HootDetails from './components/HootDetails/HootDetails';
import HootForm from './components/HootForm/HootForm';
import CommentForm from './components/CommentForm/CommentForm';

import * as authService from '../src/services/authService'; // import the authservice
import * as hootService from './services/hootService';

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice
  const [hoots, setHoots] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index();
      console.log(hootsData);
      setHoots(hootsData);
    };
    if (user) fetchAllHoots();
  }, [user]);

  const handleLogout = () => {
    authService.signout();
    setUser(null);
  };

  const handleAddHoot = async (hootFormData) => {
    const newHoot = await hootService.create(hootFormData);
    setHoots([newHoot, ...hoots]);
    navigate('/hoots');
  };

  const handleDeleteHoot = async (hootId) => {
    const deletedHoot = await hootService.deleteHoot(hootId);
    setHoots(hoots.filter((hoot) => hoot._id !== deletedHoot._id));
    navigate('/hoots');
  };

  const handleUpdateHoot = async (hootId, hootFormData) => {
    const updatedHoot = await hootService.update(hootId, hootFormData);
    setHoots(hoots.map((hoot) => (hootId === hoot._id ? updatedHoot : hoot)));
    navigate(`/hoots/${hootId}`);
  };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleLogout={handleLogout} />
        <Routes>
          {user ?
          // Protected Routes:
            <>
              <Route path="/" element={<Landing />} />
              <Route path="/hoots" element={<HootList hoots={hoots} />} />
              <Route
                path="/hoots/:hootId"
                element={<HootDetails handleDeleteHoot={handleDeleteHoot} />}
              />
              <Route
                path="/hoots/new"
                element={<HootForm handleAddHoot={handleAddHoot} />}
              />
              <Route
                path="/hoots/:hootId/edit"
                element={<HootForm handleUpdateHoot={handleUpdateHoot} />}
              />
              <Route
                path="/hoots/:hootId/comments/:commentId/edit"
                element={<CommentForm />}
              />
            </>
            :
            <Route path="/" element={<Landing />} />
          }
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;