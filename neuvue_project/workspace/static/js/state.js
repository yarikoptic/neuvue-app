/* Functions for getting the current Neuroglancer state */

function addStateEventListener(url) {
    let ngURL = new URL(url);
    window.addEventListener("message", (resp) => {
        if (resp && resp.data && resp.origin == ngURL.origin){
            window.localStorage['ngState'] = resp.data;
        }
    }, false);
}

function getCurrentNeuroglancerState(url, callback) {
    let ngURL = new URL(url);
    window.localStorage['ngState'] = null;
    document.getElementById('neuroGlancerFrame').contentWindow.postMessage("state", ngURL.origin);
    
    window.setTimeout(function() {
        if (callback) {
            callback(window.localStorage['ngState']);
        }
    }, 500);
}