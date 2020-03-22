import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/results.scss'

const getData = async (url) => {
    let result = await fetch(url);
    let data = await result.json(); 
    return data;
}

export { handleSubmit }
