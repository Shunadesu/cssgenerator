import { BoxShadow, TextShadow, Border, Transfrom, Gradient, Home } from "./pages";
import pages from "./data/pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const CSSGenerator = () => {
  return (
    <Router>
      <Routes>
        <Route path={pages.HOME} element={<Home />}/>
        <Route path={pages.BOXSHADOW} element={<BoxShadow />} />
        <Route path={pages.TEXTSHADOW} element={<TextShadow />} />
        <Route path={pages.BORDER} element={<Border />}/>
        <Route path={pages.TRANSFORM} element={<Transfrom />}/>
        <Route path={pages.GRADIENT} element={<Gradient />}/>
      </Routes>
    </Router>
  );
};

export default CSSGenerator;