import SearchBar from '../SearchBar';
import Loading from '../Loading';
import Results from '../Results';
import Title from '../Title';
import Waves from '../Waves';
import Theme from '../Theme';
import './App.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const listResults = useSelector((state) => state.listSearch);
  const selectedTheme = useSelector((state) => state.dark);
  const isItLoading = useSelector((state) => state.loading);
  useEffect(() => {
    if(!selectedTheme) {
      document.body.style.backgroundImage = 'url(http://www.camilleperrin.fr/wp-content/uploads/2019/01/tumblr_pkpkt0qnhB1x7np1ao1_1280.jpg)';
      document.body.style.backgroundSize = "auto";
      document.body.style.backgroundAttachment = "fixed";
    } else {
      document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/e3/41/22/e34122e017c4f91836f1b6d9a83f4429.jpg)';
      document.body.style.backgroundSize = "auto";
      document.body.style.backgroundAttachment = "fixed";
    }
  });

  return (
    <div className='App' >
      <Title />
      <Theme />      
      <SearchBar />
      {listResults.map((list) => (
        <Results key={list.cacheId} getName={list.title} getUrl={list.link} getDescription={list.snippet} />
      ))}      
      {isItLoading && <Loading /> }
      <Waves />          
    </div>
  );
}

export default App;
