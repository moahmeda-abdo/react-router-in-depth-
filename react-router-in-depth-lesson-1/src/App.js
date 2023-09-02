import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// /layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareerLayout";
import Career, { careersLoader } from "./pages/Career";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareerError from "./pages/CareerError";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="careers" element={<CareersLayout />} errorElement={<CareerError/>}>
          <Route index element={<Career />} loader={careersLoader} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
