let activeTab = "";
let startTime = Date.now();

const blockedSites = ["youtube.com", "facebook.com", "instagram.com"];

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  trackTime(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    trackTime(tab.url);
  }
});

function trackTime(url) {
  const domain = new URL(url).hostname;

  const timeSpent = Date.now() - startTime;

  chrome.storage.local.get([activeTab], (data) => {
    let prev = data[activeTab] || 0;
    chrome.storage.local.set({
      [activeTab]: prev + timeSpent
    });
  });

  // Block sites
  if (blockedSites.some(site => domain.includes(site))) {
    chrome.tabs.update({ url: "about:blank" });
  }

  activeTab = domain;
  startTime = Date.now();
}
