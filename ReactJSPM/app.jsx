import $ from 'github:components/jquery@2.2.0';
import bootstrap from 'github:twbs/bootstrap@3.3.6';
import 'github:twbs/bootstrap@3.3.6/css/bootstrap.css!';
import '/css/template.css!';

import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content.jsx!';

ReactDOM.render(
    <Content/>,
    document.querySelector('.template')
);

