# node:18という名前のNode.js入りのイメージ(OS)を使う宣言
FROM node:18

# 作業ディレクトリはapp
WORKDIR /app

# package.jsonとpackage-lock.jsonを /app にコピーする
# 先にこれをコピーしておくと、npm installのキャッシュが効いて再ビルドが速くなる
COPY package*.json ./

# 依存パッケージをインストールする
RUN npm install

RUN npm install -g nodemon

# 残りのファイル（アプリ本体）を全部コピー
COPY . .

# このコンテナは 8000番ポートを使う宣言
EXPOSE 8000

# コンテナが起動したときに実行するコマンド
CMD ["npm", "start"]
