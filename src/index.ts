import '../assets/index.css';
import { Map } from './Map';
import { checkAnswer } from '../hooks/useSubmitBtn';

const map = new Map();
checkAnswer(map);
