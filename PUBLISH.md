# Wash Go! 公開手順（初心者向け）

このファイルは、サイトをインターネットに公開するための手順書です。  
上から順番に進めてください。1つのステップが終わったら、次へ進みます。

想定ドメイン: `washgo.jp`  
公開サービス: **Netlify**（初心者向けでわかりやすいため）

全体の流れは次の4つです。

1. GitHub アカウント作成・リポジトリ作成
2. このフォルダのコードを GitHub にアップロード
3. Netlify でサイトを公開
4. `washgo.jp` を取得して Netlify に接続

---

## 用語の超かんたん説明

- **GitHub**: コードの保管庫。更新履歴も残せます
- **Netlify**: サイトをインターネットに出す場所
- **ドメイン**: `washgo.jp` のような住所
- **DNS**: 「この住所は、このサイトへ行け」と案内する仕組み

---

## ステップ0: 事前準備（5分）

次を用意してください。

- [ ] メールアドレス（GitHub / Netlify / ドメイン取得で使います）
- [ ] クレジットカードまたはデビットカード（ドメイン取得用。年額料金）
- [ ] このパソコンの「Wash Life」フォルダ（中身は Wash Go! のサイトです）

---

## ステップ1: GitHub アカウントを作る

### 1-1. アカウント作成

1. ブラウザで https://github.com を開く
2. **Sign up** をクリック
3. メールアドレス・パスワード・ユーザー名を入力
4. 案内に従って認証を完了

すでにアカウントがある場合はログインしてください。

### 1-2. リポジトリ（保管庫）を作る

1. 右上の **+** → **New repository**
2. 次のように入力します

- Repository name: `wash-go`
- Description: `Wash Go! landing page`（任意）
- **Public** を選択（無料で公開しやすい）
- **Add a README file にはチェックを入れない**
- **Add .gitignore にもチェックを入れない**
- **Choose a license も None のまま**

3. **Create repository** をクリック

作成後に表示されるページは、いったん開いたままにしておきます。

---

## ステップ2: このフォルダを GitHub に上げる

ここは少しだけ専門的です。わからない場合は、このチャットで「ステップ2で止まっています」と送ってください。こちらで一緒に進めます。

### 方法A（おすすめ）: Cursor / ターミナルで上げる

1. Cursor で `/Users/apple/Wash Life` を開いた状態にする
2. このチャットで「GitHubに上げて」と依頼する  
   （こちらで `git init` → 初回コミット → GitHubへ push まで支援できます）

### 方法B: GitHub の画面から手動アップロード

1. GitHubの空リポジトリページで **uploading an existing file** をクリック
2. 次のファイルをドラッグ＆ドロップ

- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `PUBLISH.md`
- `netlify.toml`
- `.gitignore`

3. 下の欄に `Initial commit` と入力
4. **Commit changes** をクリック

アップロード後、GitHub 上で `index.html` が見えればOKです。

---

## ステップ3: Netlify でサイトを公開する

### 3-1. Netlify アカウント作成

1. https://www.netlify.com を開く
2. **Sign up** をクリック
3. **Sign up with GitHub** を選ぶ（いちばん簡単）
4. GitHubの許可画面が出たら承認

### 3-2. サイトを取り込む

1. Netlify の管理画面で **Add new site** → **Import an existing project**
2. **Deploy with GitHub** を選択
3. 必要なら GitHub へのアクセス許可
4. リポジトリ一覧から `wash-go` を選ぶ
5. 設定はほぼそのままでOK

- Branch to deploy: `main`（または `master`）
- Build command: **空欄のまま**
- Publish directory: `.`（または空欄。`netlify.toml` があるので基本OK）

6. **Deploy wash-go**（Deploy site）をクリック

### 3-3. 仮URLを確認

1〜2分待つと、次のような仮アドレスが発行されます。

例: `https://何かランダム.netlify.app`

このURLをブラウザで開き、Wash Go! のページが表示されれば成功です。

スマホでも同じURLを開いて確認してください。

---

## ステップ4: ドメイン `washgo.jp` を取得する

ドメイン取得は **Netlifyとは別** です。  
ここでは「お名前.com」を例にします（ムームードメインでも同様です）。

### 4-1. 空き確認と購入

1. https://www.onamae.com を開く
2. 検索欄に `washgo.jp` と入力して検索
3. **取得可能**と出たらカートへ入れる
4. アカウント作成（またはログイン）
5. 支払いを完了

注意:

- `.jp` は個人情報（氏名・住所など）の登録が必要です
- 年額料金が発生します（時期により変動）
- Whois情報公開代行（プライバシー保護）があれば、できる範囲で利用を検討

### 4-2. 取得完了の目安

マイページで `washgo.jp` が一覧に出ていればOKです。

---

## ステップ5: washgo.jp を Netlify に接続する

### 5-1. Netlify側でドメインを追加

1. Netlify → 対象サイトを開く
2. **Domain management**（Domain settings）を開く
3. **Add a domain** / **Add custom domain**
4. `washgo.jp` を入力して追加
5. 必要なら `www.washgo.jp` も追加（推奨）

Netlifyが「このDNS設定をしてください」と表示します。  
表示された内容をメモ（または画面を開いたまま）にします。

よくある指示の例:

- ネームサーバーを Netlify のものに変更する  
  または
- Aレコード / CNAME を指定の値にする

### 5-2. お名前.com側でDNSを設定

お名前.comの管理画面で、Netlifyの指示どおりに設定します。

#### パターンA: ネームサーバー変更（わかりやすいことが多い）

1. お名前.com → ドメイン設定 → ネームサーバー設定
2. Netlifyが表示したネームサーバーに変更
3. 保存

#### パターンB: DNSレコード追加

Netlifyの案内に従って、例えば次のような設定をします（値は画面の指示を優先）。

- `washgo.jp` → Aレコード（Netlify指定のIP）
- `www` → CNAME（Netlify指定のホスト名）

### 5-3. 反映待ち

DNSの反映には **数分〜最大48時間** かかることがあります。  
多くは数十分以内です。

Netlify上でドメインの横に **HTTPS / SSL 有効** と出れば完了です。

確認URL:

- https://washgo.jp
- https://www.washgo.jp （設定した場合）

---

## ステップ6: 今後の更新の仕方

サイトの文章やデザインを直したいとき:

1. Cursor で `index.html` などを修正
2. GitHub に反映（commit & push）
3. Netlify が自動で本番へ公開

つまり、**ファイルを直して GitHub に上げるだけ**で本番更新できます。

---

## うまくいかないときのチェック

- GitHubに `index.html` が見えない → アップロード失敗の可能性
- Netlifyで404 → Publish directory が違う可能性（`.` にする）
- ドメインがつながらない → DNS反映待ち。数時間待って再確認
- HTTPSにならない → ドメイン接続後、SSL発行に数分かかることがある

---

## 次にこちらへ連絡してほしいこと

作業しながら、次のタイミングでチャットしてください。

1. GitHubアカウント作成が終わったとき
2. リポジトリ `wash-go` を作ったとき
3. Netlifyの仮URLが出たとき
4. `washgo.jp` を購入したとき
5. どこかで画面がわからなくなったとき（スクショがあると助かります）
