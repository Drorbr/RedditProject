
var React = require('react');
var ReactDOM = require('react-dom');

import SearchSubreddit from './components/SearchSubreddit';


// App css
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')

// require('style-loader!css-loader!sass-loader!app/styles/app')

ReactDOM.render(
  <SearchSubreddit/>,
  document.getElementById('app')
);
