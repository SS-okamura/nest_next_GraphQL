## 使用技術一覧

### バックエンド

![Alt text](image.png)
![Alt text](image-2.png)
![Alt text](image-7.png)
![Alt text](image-8.png)
![Alt text](image-10.png)

### フロントエンド

![Alt text](image-3.png)
![Alt text](image-4.png)
![Alt text](image-5.png)
![Alt text](image-6.png)

### ミドルウェア

![Alt text](image-9.png)

### インフラ

![Alt text](image-11.png)

## バージョン

| 言語等   | バージョン |
| -------- | ---------- |
| node     | 20.10.0    |
| postgres | 14 系      |

## 環境変数

| 変数名                | 内容                                                                  |
| --------------------- | --------------------------------------------------------------------- |
| DATABASE_URL (api 側) | postgresql://{DB のユーザー名}:{DB の password}@{IP}:{ポート}/{DB 名} |

## 環境構築

\*\* 今回は yarn を使用してライブラリの管理をしています。

### docker の場合

1. プロジェクトクローン後に/api/time-api 直下に.env を作成して上記の環境変数を追加
2. docker compose up -d でコンテナを起動
3. http://localhost:3000/graphql で確認ができる

- DB を確認する場合
  - docker compose exec api bash で api コンテナに入る
  - yarn prisma studio で http://localhost:5555/ で DB を確認できる

### docker 以外の場合

1. プロジェクトクローン後に/api/time-api 直下に.env を作成して上記の環境変数を追加
2. nvs 等で node のバージョンを 20.10 にあわせてください
3. postgres をローカル環境にインストール
   https://qiita.com/tom-sato/items/037b8f8cb4b326710f71
4. cd api/time-api で api/time-api 直下に移動し、yarn add でライブラリをインストール
5. yarn start:dev で起動
6. http://localhost:3000/graphql で確認ができる

### データうまく取得できない場合

- api 側のアプリの直下で yarn prisma db push を実行してください
