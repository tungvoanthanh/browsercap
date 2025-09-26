function initPage() {
    forFileAPI();
    forFile_DirectoryEntriesAPI();
}

function forFileAPI() {
    const fileInput = document.querySelector("input[type=file]");
    const output = document.querySelector(".output");

    fileInput.addEventListener("change", async () => {
        const [file] = fileInput.files;

        if (file) {
            output.innerText = await file.text();
        }
    });
}

function forFile_DirectoryEntriesAPI() {
    let dropzone = document.getElementById("dropzone");
    let listing = document.getElementById("listing");

    dropzone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    dropzone.addEventListener("drop", (event) => {
        let items = event.dataTransfer.items;

        event.preventDefault();
        listing.textContent = "";

        for (const item of items) {
            const entry = item.webkitGetAsEntry();

            if (entry) {
                scanFiles(entry, listing);
            }
        }
    });

    function scanFiles(item, container) {
        let elem = document.createElement("li");
        elem.textContent = item.name;
        container.appendChild(elem);

        if (item.isDirectory) {
            let directoryReader = item.createReader();
            let directoryContainer = document.createElement("ul");
            container.appendChild(directoryContainer);
            directoryReader.readEntries((entries) => {
                entries.forEach((entry) => {
                    scanFiles(entry, directoryContainer);
                });
            });
        }
    }
}
