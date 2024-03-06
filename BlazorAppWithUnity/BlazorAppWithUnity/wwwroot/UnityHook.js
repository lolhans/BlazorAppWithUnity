function sendStringToUnity(myString) {
    if (window.unityInstance) {
        console.log(myString);
        window.unityInstance.SendMessage('UnityGameObject', 'ReceiveString', myString);
    } else {
        console.error("Unity instance not found.");
    }
}

function sendStlStringToUnity(stlString) {
    if (window.unityInstance) {
        console.log(stlString);
        window.unityInstance.SendMessage('UnityGameObject', 'ReceiveStlAsString', stlString);
    } else {
        console.error("Unity instance not found.");
    }
}

function sendStlBytesToUnity(stlBytes) {
    if (window.unityInstance) {
        console.log("Sending STL Bytes to Unity");
        let base64String = btoa(String.fromCharCode.apply(null, stlBytes));
        window.unityInstance.SendMessage('UnityGameObject', 'ReceiveStlAsBytes', base64String);
    } else {
        console.error("Unity instance not found.");
    }
}