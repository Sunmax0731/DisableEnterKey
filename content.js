document.addEventListener('keydown', (e) => {
  console.log('Key down event detected'); // 確認ログ
  console.log('Key:', e.key, 'Control:', e.ctrlKey, 'Shift:', e.shiftKey, 'Alt:', e.altKey); // 押されたキーの詳細ログ

  if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
      console.log('Enter key press detected and prevented');
      e.preventDefault();
      e.stopPropagation(); // イベントの伝播を止める
      return;
  }

  if (e.key === 'Enter' && e.ctrlKey && !e.altKey && !e.shiftKey) {
      console.log('Ctrl+Enter key combination detected');
      let sendButton = document.querySelector('button[aria-label="Send"], button[type="submit"]');
      
      if (!sendButton) {
          sendButton = document.querySelector('button[aria-label="Send message"], button[aria-label="送信"]');
      }

      console.log('Send button:', sendButton);

      if (sendButton) {
          sendButton.click();
          e.preventDefault();
          e.stopPropagation(); // イベントの伝播を止める
          console.log('Send button clicked');
      } else {
          console.log('Send button not found');
      }
  } else {
      console.log('Key conditions not met');
  }
}, true); // キャプチャフェーズでイベントを捕捉
