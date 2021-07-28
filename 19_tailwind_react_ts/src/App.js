import { useState, StrictMode, lazy, Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div
          className="p-0 m-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
        >
          <h2>this h2 wont go away</h2>
          <Suspense fallback={<h2>loading...</h2>}>
            <header className="w-full mb-10 mt-px text-center p-7 bg-gradient-to-b via-pink-500 from-purple-400 to-red-500">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                Adopt Me!
              </Link>
            </header>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
