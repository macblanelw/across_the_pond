import keys from './api_keys';


function Content() {






    return (
      <div className='main'>
        <div className="container mt-2">
          <div className="row">
            <div className="col-12 col-lg-6" id="nyt">
              <h2>NY Times</h2>
            </div>
            <div className="col-12 col-lg-6" id="guardian">
              <h2>The Guardian</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6" id="nyt-contents">
              
            </div>
            <div className="col-12 col-lg-6" id="guardian-contents">
              
            </div>
          </div>
        </div>
      </div>
      );
  }
  
export default Content;