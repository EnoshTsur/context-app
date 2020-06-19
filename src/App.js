import React from 'react';
import Context from './context/Context'
import Home from './components/Home/Home'
import About from './components/About/About'
import Navigation from './components/Navigation/Navigation'
import NavigationView from './components/Navigation/NavigationView'
import Container from './components/Container/Container'

function App() {

  const [ user, setUser] = React.useState({ name: "enosh", car: 'ferrari'})
  const [ index, setIndex, ] = React.useState(0)

  const { Provider, } = Context

  
  return (
    <div>
        <Provider value={({ user, setUser, index, setIndex, })}>
            <Navigation render={setIndex => (
                    <NavigationView setIndex={setIndex} />
                )}
            />
            <Container 
                home={bgcolor => (
                    <Home bgcolor={bgcolor}/>
                )}
                about={bgcolor => (
                    <About bgcolor={bgcolor}/>
                )}
            />
        </Provider>
    </div>
  );
}

export default App;
