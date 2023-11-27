import React from 'react'

const PageNotFound = () => {
    return (
        <div>
          <h1>404 - Page Not Found</h1>
          {/* You can add more content or a link to go back to the home page */}
          <button onClick={() => window.history.back()}>Go Back</button>
        </div>
      );
}

export default PageNotFound;
