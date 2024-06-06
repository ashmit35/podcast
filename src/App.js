import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import Sidebar from "./components/Sidebar"
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search"
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import PodcastDetails from "./pages/PodcastDetails.jsx";
import DisplayPodcast from "./pages/DisplayPodcast.jsx";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  width:100%;
  height:100vh;
  color:${({ theme }) => theme.text_primary};
`;

const RightFrame = styled.div`
  display: flex;
  flex-direction:column;
  flex:3;
  background-color: ${({ theme }) => theme.bgLight};
`;
const App = () => {

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    // Used to add theme in our UI  
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>

        <Container>

          {menuOpen && (
            <Sidebar setMenuOpen={setMenuOpen} setDarkMode={setDarkMode} darkMode={darkMode}
              menuOpen={menuOpen}
            />
          )}

          <RightFrame>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/podcast/:id" element={<PodcastDetails />} />
              <Route path="/showpodcasts/:type" element={<DisplayPodcast />} />
            </Routes>

          </RightFrame>

        </Container>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
