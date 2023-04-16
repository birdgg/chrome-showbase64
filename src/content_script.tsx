function decodeAndReplaceBase64(selectedText: string) {
  try {
    const decodedText = atob(selectedText);
    const range = window.getSelection()?.getRangeAt(0);
    if (range) {
      range.deleteContents();
      range.insertNode(document.createTextNode(decodedText));
    }
  } catch (error) {
    console.error("Error decoding Base64:", error);
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "decode_base64") {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      decodeAndReplaceBase64(selectedText);
    }
  }
});
