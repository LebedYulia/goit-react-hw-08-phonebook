import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Main } from 'components/Main/Main';
import { RegisterForm } from 'components/Register/RegisterForm';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
        <Route index element={<Main />} />
        <Route path="register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </>
  );
};
