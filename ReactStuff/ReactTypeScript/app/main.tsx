/// <reference path="../typings/tsd.d.ts" />

import 'github:twbs/bootstrap@3.3.6/css/bootstrap.css!';
import '/css/template.css!';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Content} from './content';

ReactDom.render(<Content/>, document.querySelector('.template'));
