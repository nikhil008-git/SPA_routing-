import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route with layout */}
        <Route path="/" element={<Layout />}>
          {/* index = default child route */}
          <Route index element={<Landing />} />
          <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
          {/* 404 fallback */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Landing</Link> |{" "}
        <Link to="/neet/online-coaching-class-11">Class 11</Link> |{" "}
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
      </nav>
      <hr />
      <Outlet /> {/* This is where child routes render */}
    </div>
  );
}

function Landing() {
  return <div>Welcome to allen</div>;
}

function Class11Program() {
  return <div>NEET programs for Class 11th</div>;
}

function Class12Program() {
  return <div>NEET programs for Class 12th</div>;
}

export default App;
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route with layout */}
        <Route path="/" element={<Layout />}>
          {/* index = default child route */}
          <Route index element={<Landing />} />
          <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
          {/* 404 fallback */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Landing</Link> |{" "}
        <Link to="/neet/online-coaching-class-11">Class 11</Link> |{" "}
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
      </nav>
      <hr />
      <Outlet /> {/* This is where child routes render */}  {/*  here like the whole elements renders like after nav bar and downsirde the footer gthen in betwee n these renders */}
    </div>
  );
}

function Landing() {
  return <div>Welcome to allen</div>;
}

function Class11Program() {
  return <div>NEET programs for Class 11th</div>;
}

function Class12Program() {
  return <div>NEET programs for Class 12th</div>;
}

export default App;
