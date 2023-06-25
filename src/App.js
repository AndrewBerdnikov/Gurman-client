import { BrowserRouter } from 'react-router-dom';
import '../src/styles/style.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './components/http/userApi';

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setIsAuth(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <BrowserRouter>
      <Header /> 
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
