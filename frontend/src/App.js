import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyDesignPacks from "./Screens/MyDesignPacks/MyDesignPacks";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import CreateCollection from "./Screens/SingleCollection/CreateCollection";
import SingleCollection from "./Screens/SingleCollection/SingleCollection";
import CreateItem from "./Screens/SingleItem/CreateItem";
import SingleItem from "./Screens/SingleItem/SingleItem";
import DesignPackView from "./Screens/DesignPackView/DesignPackView";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/mydesignpacks" component={() => <MyDesignPacks />} />
        <Route path="/login" component={() => <LoginScreen />} />
        <Route
          path="/createdesignpack"
          component={() => <CreateCollection />}
        />
        <Route
          path="/collections/collection/:id"
          component={() => <SingleCollection />}
        />
        <Route
          path="/collections/designpackview/:id"
          component={() => <DesignPackView />}
        />
        <Route path="/:id/createitem" component={() => <CreateItem />} />
        <Route path="/items/item/:id" component={() => <SingleItem />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
