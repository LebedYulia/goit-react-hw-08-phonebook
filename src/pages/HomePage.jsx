import { Helmet } from 'react-helmet';
import { Home } from 'components/Home/Home';

 const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <Home />
    </div>
  );
};

export default HomePage;
