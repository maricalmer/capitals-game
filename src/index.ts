import '../assets/index.css';
import { Map } from './Map';
import { attachClickHandler } from '../hooks/useSubmitBtn';

const map = new Map();
attachClickHandler(map);
