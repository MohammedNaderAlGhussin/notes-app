import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "../pages/NewNote";

const AppRoutes = () => {
  return (
    <div className="container xl:max-w-[1250px] py-5 px-6 mx-auto">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> 
    </div>
  );
};

export default AppRoutes;
