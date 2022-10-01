import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import { formRef, listRef } from './refs';
import { saveMessage } from './service';

formRef.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        message: { value },
    } = formRef.elements;

    const inputValue = value.trim();

    if (!inputValue) {
        return;
    }

    saveMessage(inputValue);
});
