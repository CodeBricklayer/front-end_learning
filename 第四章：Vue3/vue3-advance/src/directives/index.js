import lazy from './lazy.js'
import focus from './focus.js'
export default{
    install(app){
        app.directive('lazy', lazy)
        app.directive('focus', focus)
    }
}