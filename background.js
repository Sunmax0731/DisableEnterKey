chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ sendKey: 'Control+Enter' }, () => {
      console.log('Default sendKey set to Control+Enter');
    });
  });
  