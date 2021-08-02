import {setup as setupS} from './sidebar.js';
import {setup as setupT} from './trends.js';

setupT();
setupS(() => setupT());

