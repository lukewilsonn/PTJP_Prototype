import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>PTJP Navigation Homepage</h1>
      <p className="headline">
        Quickly use below links to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/homepage">HomePage</Link>
        </li>
        <li>
          <Link to="/resultspage">ResultsPage</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/accountmenu">AccountMenu</Link>
        </li>
        <li>
          <Link to="/savedsearchlistpage">SavedSearchListPage</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/editaccount">EditAccount</Link>
        </li>
        <li>
          <Link to="/blanksearchpage">BlankSearchPage</Link>
        </li>
        <li>
          <Link to="/savedsearchpage">SavedSearchPage</Link>
        </li>
        <li>
          <Link to="/savedsearchpagemenu">SavedSearchPageMenu</Link>
        </li>
        <li>
          <Link to="/mapsearchpageone">MapSearchPageOne</Link>
        </li>
        <li>
          <Link to="/homepagemenu">HomePageMenu</Link>
        </li>
        <li>
          <Link to="/blanksearchpagemenu">BlankSearchPageMenu</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/mapsearchpagemenu">MapSearchPageMenu</Link>
        </li>
        <li>
          <Link to="/mapsearchpagemenuone">MapSearchPageMenuOne</Link>
        </li>
        <li>
          <Link to="/savedsearchlistpagemenu">SavedSearchListPageMenu</Link>
        </li>
        <li>
          <Link to="/editaccountmenu">EditAccountMenu</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
