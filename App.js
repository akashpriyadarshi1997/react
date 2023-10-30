import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement('div', {class:'title'}, [
    React.createElement('h1', {}, 'Heading 1'),
    React.createElement('h2', {}, 'Heading 2'),
    React.createElement('h3', {}, 'Heading 3')
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);