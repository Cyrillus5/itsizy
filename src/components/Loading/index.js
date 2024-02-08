import { Dimmer, Loader } from 'semantic-ui-react';

function Loading() {
  return (
    <div className="Loading">      
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
    </div>
  );
}

export default Loading;