import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact 
      name="Anita Sutton"
      avatar = "https://www.erenumerique.fr/wp-content/uploads/2018/11/Super-Mario.jpg"
      online
      />
      <Contact 
      name="Jim Goerge"
      avatar = "https://www.erenumerique.fr/wp-content/uploads/2018/11/Super-Mario.jpg"
      Offline
      />
      <Contact 
      name="Mario "
      avatar = "https://www.erenumerique.fr/wp-content/uploads/2018/11/Super-Mario.jpg"
      Offline
      />
      

    </div>
  );
}

export default App;