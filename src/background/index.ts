chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete') return;
  if (!tab.url) return;
  
  // some business logic
  
  chrome.scripting.executeScript({
    files: ['script.js'],
    target: { tabId },
  });
});