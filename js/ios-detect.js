/**
 * Created by Alisa on 03.06.17.
 */

var userAgent = window.navigator.userAgent;

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
    document.documentElement.classList.add('ios-safari');
}
