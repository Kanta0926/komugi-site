<div id="top"></div>

## 使用技術一覧

<!-- シールド一覧 -->
  <!-- フレームワーク -->
  <!-- Nuxt -->
<img src="https://img.shields.io/badge/-Nuxt.js-00C58E.svg?logo=nuxt.js&style=plastic">
<!-- vue -->
<img src="https://img.shields.io/badge/-Vue.js-4FC08D.svg?logo=vue.js&style=plastic">
<!-- node -->
<img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
<!-- ソフトウェア-->
<!-- photoshop -->
<img src="https://img.shields.io/badge/Photoshop-%230884FF?style=flat
  ">
<!-- illustrator -->
<img alt="Static Badge" src="https://img.shields.io/badge/Illustrator-%23FF9D08?style=flat">
<!-- figma -->
<img alt="Static Badge" src="https://img.shields.io/badge/Figma-%23111111?style=flat&logo=figma&logoColor=%23FF763D">
<!-- CMS -->
<!-- WP -->
<img src="https://img.shields.io/badge/-Wordpress-21759B.svg?logo=wordpress&style=plastic">
<!-- 管理ツール -->
<!-- github -->
  <img src="https://img.shields.io/badge/-githubactions-FFFFFF.svg?logo=github-actions&style=for-the-badge">
<!-- npm -->
<img src="https://img.shields.io/badge/-Npm-CB3837.
svg?logo=npm&style=plastic">
<!-- ライブラリ -->
<!-- GSAP -->
<img src="https://img.shields.io/badge/GSAP-brightgreen?style=flat&logo=greensock&logoColor=88CE02&labelColor=FFFF&color=333333
  ">
<!-- lenis -->
<img alt="Static Badge" src="https://img.shields.io/badge/Lenis-%23FF9BAA?style=flat">
<!-- swiper -->
<img src="https://img.shields.io/badge/Swiper-white?style=flat&logo=swiper&logoColor=FFFF&labelColor=087EFF
  ">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)

## プロジェクト名

komugi-site

## プロジェクトについて

ベーグル店を想定した HP サイトになってます。<br/>
Nuxt3 を基本としつつ、WordPress をヘッドレス CMS として使用。<br/>
ライブラリには、GSAP、Lenis、Swiper を使用してます。

<!-- プロジェクトの概要を記載 -->

<details>
<summary>クリックして開く</summary>
・トップ
画面が移り変わる仕様。
ロゴはillustratorにて作成しました。
内容は一度、figmaで作成したものを元に作成いたしました。

・About
GSAP での簡易的なパララックスにしてます。

・Feature
背景をパララックスにし、トグルで内容の詳細を確認できる内容となってます。

・Bagle
Swiper でカルーセルのようにし、
正面を見やすいよう整形。
ベーグルは、フリー画像から個々のベーグルへ phothoshop で加工を行いました。

・Access
GoogleMAP と、GoogleCalendar を埋め込んでます。
背景テキストが切り替わるような仕様になってます。

・News
WordPress の記事を API 経由で表示する内容となってます。

・header, footer
ヘッダーはトップセクション以下で表示にし、
lenis でスムーススクロールするような内容となってます。

</details>
<p align="right">(<a href="#top">トップへ</a>)</p>
