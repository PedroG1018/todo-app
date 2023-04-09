import React from 'react';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import style from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle />
      <div className={style.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;