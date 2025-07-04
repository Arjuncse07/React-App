import React from 'react';
import LifecycleDemo from './LifecycleDemo';
import ApiDemo from './ApiDemo';
import ApiDemoFunctionalBased from './ApiDemoFunctionalBased';
import UpdatingMethods from './UpdatingMethods';
import LoginFormFunctional from './LoginFormFunctional';

class App extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>React Demo</h1>
       {/*  <LifecycleDemo /> */}
       {/*  <ApiDemo />  */}
        { /*   <ApiDemoFunctionalBased/> */}
        <UpdatingMethods/>
        <LoginFormFunctional/>
      </div>
    );
  }
}

export default App;