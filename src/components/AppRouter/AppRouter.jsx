import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/Main/Main";
import { Posts } from "../../pages/Posts/Posts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/posts' element={<Posts />}/>
    </Routes>
  );
};