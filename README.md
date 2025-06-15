<div id="top"></div>

## 🔧 Technologies & Tools
<!-- シールド一覧 -->
![](https://img.shields.io/badge/UI-Figma-informational?style=flat&logo=figma&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/UI-Nuxt-informational?logo=nuxt&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Vue-informational?style=flat&logo=vuedotjs&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-TypeScript-informational?style=flat&logo=typescript&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/CMS-WordPress-informational?style=flat&logo=wordpress&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tool-Photoshop-informational?style=flat&logo=affinityphoto&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Editor-VScode-informational?style=flat&logo=intellijidea&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Node.js-informational?logo=nodedotjs&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tool-illustrator-informational?logo=affinitydesigner&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Plugins-lanis-informational?logo=swiper&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Plugins-Swiper-informational?logo=swiper&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Plugins-Gsap-informational?logo=greensock&logoColor=white&color=2bbc8a)

  <!-- フレームワーク -->
  <!-- Nuxt -->

<!-- vue -->

<!-- node -->

<!-- ソフトウェア-->
<!-- photoshop -->

<!-- illustrator -->

<!-- figma -->

<!-- CMS -->
<!-- WP -->
<!-- 管理ツール -->
<!-- github -->

<!-- npm -->


<!-- ライブラリ -->
<!-- GSAP -->

<!-- lenis -->
<!-- swiper -->


## 目次

1. [プロジェクト](#プロジェクト)
2. [作成意図](#作成意図)
3. [プロジェクト概要](#プロジェクト概要)
4. [環境](#環境)
5. [ディレクトリ構成](#ディレクトリ構成)
6. [開発環境構築](#開発環境構築)
7. [トラブルシューティング](#トラブルシューティング)

## プロジェクト名

komugi-site
- [小麦好日へのリンク](https://kancha.org/komugi-site/)

## 💡プロジェクトについて

ベーグル店を想定した HP サイトになってます。<br/>
Nuxt3 を基本としつつ、WordPress をヘッドレス CMS として使用。<br/>
ライブラリには、GSAP、Lenis、Swiper を使用してます。

## ⚡作成意図
1. Figmaに慣れる
初めてFigmaを使用しました。
Adobe XDとの差異や、Figma独自の機能の理解をしたく触ってみました。

2. Nuxt3 の学習
前作で使用した、Vueの経験を活かしNuxt3に触れてみたく
Nuxt3で制作いたしました。
ルーティングやdefault、サーバーサイドでの知識が増えたように思います。

3. WordPress　RESTAPIの使用
ブログとしては、WordPressの使用をしたことはあったのですが、
ヘッドレスCMSとして使用したことはなかったので今回採用しました。
APIを通じて、記事データの取得を勉強できました。
またjson形式の勉強にもなりました。



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
