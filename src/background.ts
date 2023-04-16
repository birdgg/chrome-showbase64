chrome.contextMenus.create({
  id: "decode_base64",
  title: "Decode Base64",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "decode_base64" && tab && tab.id) {
    chrome.tabs.sendMessage(tab.id, { action: "decode_base64" });
  }
});
