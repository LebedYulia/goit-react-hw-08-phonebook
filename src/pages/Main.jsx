import { Helmet } from 'react-helmet';
import { Main } from 'components/Main/Main';

export const MainPage = () => {
  return (
    <div>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <Main />
    </div>
  );
};
