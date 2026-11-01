# 執筆ルール（リーダー決定）

## 読者
- 勤怠システム（Postgres / Java / Spring Boot / Apache / Tomcat）とWeb申請（XML定義＋SQL）を担当するSE、11か月目。
- SQLはAIに作らせて実行するだけ。Spring Bootが何か分かっていない。Maven環境構築が4か月できていない。
- ログ調査・改修検討をAIに丸投げして解決はできているが、理解が身についていないことに強い不安。
- 動画を眺めがちで、人と話さず、伝えるのが苦手と自己評価。プロになりたいと強く思っている。
- 文体：やさしい「です・ます」。見下さない。励ますが、根拠のない褒め言葉や説教は不要。具体例は勤怠・申請の業務（打刻、残業、有給、締め処理、通勤費申請、氏名変更届など）を使う。

## ファイル形式
- 各ページは完全なHTML文書: `<!doctype html><html lang="ja"><head>` に charset, viewport(`width=device-width, initial-scale=1, viewport-fit=cover`), `<title>`, Google Fonts の link, `<link rel="stylesheet" href="common.css">` を書く。
- Google Fonts: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Murecho:wght@600;800&family=Noto+Sans+JP:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap">`
- 色は必ず common.css の変数（var(--accent) など）を使う。直書きの色は禁止（ダークモード対応のため）。ページ固有CSSが必要なら `<style>` に少量だけ。
- 外部JSは原則不要。使うなら小さなインラインJSのみ。alert/confirm/prompt禁止。localStorageは try/catch で。
- 横スクロール禁止（表・コード・図は common.css の .tbl / pre / .figure の中に）。スマホ幅390pxで崩れないこと。
- `_template.html` の骨格（topbar / chapter / goals / ltoc / section / pager / footer）をそのまま使う。

## 使える部品（common.css）
.goals / .ltoc / .callout.tip|warn|ng|info / .analogy / .flow > .node + .arrow / .figure（インラインSVG、class: box, box-soft, box-ok, box-warn, box-ng, line, line-accent, fill-accent, muted）/ pre（.k .s .c .hl でハイライト）/ .code-title / .tbl > table / ol.steps（本当に順番があるときだけ）/ .cards > .card / .compare > .bad + .good / dl.terms / ul.check（input type=checkbox + label、idを付ける）/ details.quiz > summary + .ans / .pager

## 図解
- 各ページに最低3つの図（SVG または .flow / .analogy / .compare）。図は仕組みを本当に表すこと（飾りの図は不要）。
- SVGは viewBox を指定、width属性は付けず style="max-width:XXXpx" 程度。テキストは fill を指定せず common.css に任せる（class="muted" 可）。矢印は `<marker>` を使う場合 fill="currentColor" ではなく class="fill-accent" か class="fill-muted" の path。
- 図の文字は12〜14px相当、重ならないこと。

## 内容
- 各章：導入（なぜ必要か）→ たとえ話 → 仕組みの図解 → 実物（コード・ログ・設定・SQLの例）→ よくあるつまずき → 練習問題（details.quiz）2〜4問 → 用語まとめ → 「明日からやること」チェックリスト。
- 分量はたっぷり（1ファイル 本文で 6,000〜12,000字程度目安）。
- 嘘を書かない。会社固有で分からないこと（社内リポジトリURL、XMLのタグ名など）は「一般的な例」と明記し、「先輩・社内Wikiに確認する項目」として質問リストを出す。
- ファイル間リンク：他章を参照するときは相対リンク（例：`<a href="04-spring-boot.html">04 Spring Boot</a>`）。

## ファイル一覧（ファイル名・タイトル固定）
- 00-index.html 「SE成長ガイド」（リーダー作成）
- 01-mindset.html 「01 このままでいいのか」
- 02-system-map.html 「02 システムの全体像」
- 03-java.html 「03 読めるJava」
- 04-spring-boot.html 「04 Spring Bootの正体」
- 05-build-env.html 「05 開発環境をつくる」
- 06-sql-postgres.html 「06 自分で書くSQL」
- 07-logs-incident.html 「07 ログと障害調査」
- 08-xml-forms.html 「08 XMLのWeb申請」
- 09-change-request.html 「09 要望から改修まで」
- 10-ai-learning.html 「10 AIと一緒に強くなる」
- 11-communication.html 「11 伝える技術」
- 12-roadmap.html 「12 12か月ロードマップ」
pager：前後の章へリンク（01の前は00-index、12の次は00-index）。topbar左は「← 目次」で00-index.htmlへ。
