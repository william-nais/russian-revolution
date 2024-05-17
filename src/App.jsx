import './App.css'

import Landing from './components/Landing';
import Leaders from './components/Leaders/Leaders';
import Impacts from './components/Impacts';
import Events from './components/Events/Events';
import Causes from './components/Causes/Causes';
import Bibliography from './components/Bibliography';

import Padding from './components/Padding';

const App = () => {

  return (
    <>
      <Landing />

      

      <div className="content">
        <div className="desc">
          <p>The Russian Revolution of 1917, driven by discontent over economic hardship and political repression, sought to establish a <span className="utopia">utopia</span> of equality and social justice under <span className="red">Bolshevik</span> leadership. However, the path to this <span className="utopia">utopia</span> was marred by civil war, economic turmoil, and the rise of the <span className="red">Soviet Union</span>.</p>
        </div>

        <div className="controlled-width">
          {/* Content */}
          <Leaders />

          {/* Spacing */}
          <Padding value="20px"/>

          <Causes />

          {/* Spacing */}
          <Padding value="20px"/>


          <Events />

          {/* Spacing */}
          <Padding value="20px"/>


          <Impacts />

          {/* Spacing */}
          <Padding value="20px"/>

          <Bibliography />
        </div>

        <hr></hr>
        <h1>Developed (made by)</h1>
        <h3>Hui (William) Xu</h3>
      </div>
    </>
  );
}

export default App
