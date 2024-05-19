# DisableEnterKey Chrome Extension

## 概要
**DisableEnterKey** は、ChatGPTでEnterキーでの送信を無効化し、Ctrl+Enterで送信するようにするChrome拡張機能です。この拡張機能を使用することで、Enterキーの誤入力を防ぎ、メッセージの編集や確認をしやすくします。

## 機能
- ChatGPTの入力フォームでEnterキーによる送信を無効化。
- Ctrl+Enterキーでメッセージを送信可能にします。

## インストール方法
1. このリポジトリをクローンするか、ZIPファイルとしてダウンロードします。
    ```bash
    git clone https://github.com/yourusername/disable-enter-key.git
    ```
2. Chromeを開き、拡張機能の管理ページ（`chrome://extensions/`）に移動します。
3. 右上の「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、クローンしたリポジトリのフォルダを選択します。

## 使い方
1. ChatGPTのWebページにアクセスします。
2. 拡張機能が自動的に入力フォームのEnterキーによる送信を無効化し、Ctrl+Enterキーでの送信を有効にします。

## ファイル構成
- `manifest.json`: Chrome拡張機能の設定ファイル。
- `background.js`: 拡張機能のバックグラウンドスクリプト（必要に応じて）。
- `content.js`: ChatGPTの入力フォームのキーイベントを制御するスクリプト。

## 開発
1. このリポジトリをフォークし、ローカル環境にクローンします。
2. 必要な変更を加えた後、プルリクエストを作成してください。

## ライセンス
このプロジェクトは、MITライセンスの下で提供されています。詳細については、[LICENSE](LICENSE)ファイルを参照してください。

## 貢献
バグ報告や機能リクエストは、[Issues](https://github.com/Sunmax0731/DisableEnterKey/issues)ページで受け付けています。プルリクエストも歓迎します！

---

この拡張機能を使用することで、Enterキーの誤送信を防ぎ、より効率的にChatGPTを利用できるようになります。ご利用いただきありがとうございます！
