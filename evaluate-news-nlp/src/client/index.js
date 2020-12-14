//Import the js functions to read by webpack
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
// Import styles to read by webpack
import './styles/resets.scss'
import './styles/form.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/footer.scss'


export{
  checkForName,
  handleSubmit
}
