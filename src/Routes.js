import React from "react";
import EditAccountMenu from "pages/EditAccountMenu";
import SavedSearchListPageMenu from "pages/SavedSearchListPageMenu";
import MapSearchPageMenuOne from "pages/MapSearchPageMenuOne";
import MapSearchPageMenu from "pages/MapSearchPageMenu";
import Account from "pages/Account";
import BlankSearchPageMenu from "pages/BlankSearchPageMenu";
import HomePageMenu from "pages/HomePageMenu";
import MapSearchPageOne from "pages/MapSearchPageOne";
import SavedSearchPageMenu from "pages/SavedSearchPageMenu";
import SavedSearchPage from "pages/SavedSearchPage";
import BlankSearchPage from "pages/BlankSearchPage";
import EditAccount from "pages/EditAccount";
import Login from "pages/Login";
import SavedSearchListPage from "pages/SavedSearchListPage";
import AccountMenu from "pages/AccountMenu";
import SignUp from "pages/SignUp";
import ResultsPage from "pages/ResultsPage";
import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/resultspage" element={<ResultsPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/accountmenu" element={<AccountMenu />} />
        <Route path="/savedsearchlistpage" element={<SavedSearchListPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editaccount" element={<EditAccount />} />
        <Route path="/blanksearchpage" element={<BlankSearchPage />} />
        <Route path="/savedsearchpage" element={<SavedSearchPage />} />
        <Route path="/savedsearchpagemenu" element={<SavedSearchPageMenu />} />
        <Route path="/mapsearchpageone" element={<MapSearchPageOne />} />
        <Route path="/homepagemenu" element={<HomePageMenu />} />
        <Route path="/blanksearchpagemenu" element={<BlankSearchPageMenu />} />
        <Route path="/account" element={<Account />} />
        <Route path="/mapsearchpagemenu" element={<MapSearchPageMenu />} />
        <Route
          path="/mapsearchpagemenuone"
          element={<MapSearchPageMenuOne />}
        />
        <Route
          path="/savedsearchlistpagemenu"
          element={<SavedSearchListPageMenu />}
        />
        <Route path="/editaccountmenu" element={<EditAccountMenu />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
