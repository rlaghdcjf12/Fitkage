import React from 'react';
import './assets/css/App.css';
import ClassMain from './page/oneDayClass/ClassMain';
import DefaultLayout from './layout/default';

function App() {
  return (
    <div className="App">
      <DefaultLayout />

      <body>
        <ClassMain />
      </body>
    </div>
  );
}

export default App;
