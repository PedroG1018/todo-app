import React from 'react';
import { Toast, Toaster } from 'react-hot-toast';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import styles from './styles/modules/app.module.scss';
import AppContent from './components/AppContent';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle />
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{ style: { fontSize: '1.4rem' } }}
      />
    </>
  );
}

export default App;
