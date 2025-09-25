function getAllDeviceInfo() {
    document.getElementById("deviceList").innerHTML = "";

    navigator.mediaDevices.enumerateDevices().then((devices) => {
        devices.forEach((device) => {
            printDeviceInfo(device); // an InputDeviceInfo object if the device is an input device, otherwise a MediaDeviceInfo object.
        });
    });
}

function printDeviceInfo(device) {
    let infoHtml = "";
    for (const key in device) {
        if (typeof(device[key]) == "string") {
            infoHtml += `<b>${key}</b>: ${device[key]};<br>`;
        }
    }
    if (device.getCapabilities) {
        capsHtml = "";
        let caps = device.getCapabilities();
        for (const key in caps) {
            capValue = JSON.stringify(caps[key]);
            capsHtml += `<b>${key}</b>: ${capValue};<br>`;
        }
        infoHtml += `<br>
            <fieldset>
                <legend>Capabilities</legend>
                ${capsHtml}
            </fieldset>
        `;
    }

    const deviceName = device.label;
    let deviceHtml = `
        <fieldset>
            <legend><b>${deviceName}</b></legend>
            ${infoHtml}
        </fieldset>
    `;
    document.getElementById("deviceList").innerHTML += deviceHtml;
}