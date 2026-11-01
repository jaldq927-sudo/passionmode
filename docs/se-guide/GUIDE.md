# 図解版（v2）制作ルール（リーダー決定）

## 背景
v1（docs/se-guide/v1/）は文字が多すぎて読むのがつらい、という読者の声で作り直す。読者は「文字を読むのが苦手」と自分で言っている。
**v2のゴール：ほぼ読まずに、見て・触って理解できること。** 詳しい説明は v1 に任せ、各ページから v1 の同じ章へリンクする。

## 文字の上限（厳守）
- 見出し（h2）：20字以内。
- 1つの説明文（.say / .cap / tile内）：40字以内。1シーンの地の文は合計120字以内。
- 段落（<p>で3行以上）は禁止。箇条書きは1か所3つまで、1項目25字以内。
- 1章の本文（SVG・コードを除く）はおよそ1,500〜2,500字。v1の章を「要点だけ」に絞る。
- 専門用語は初出でアイコンかたとえとセットにする。

## 構成（各章）
1. hero：章番号・タイトル・「3秒でわかる」3枚（.tldr）
2. シーン（section.scene）を6〜9個。1シーン＝1メッセージ。
   - 各シーンに必ず視覚要素を1つ以上：pipe / stepper / explore / tabs / vs / like / tiles / stack / talk / meter / fig(SVG)。
   - 章全体で：stepper（紙芝居）を最低1つ、explore（押すと説明）またはtabsを最低1つ、手描きSVG図（.fig）を最低2つ。
   - 同じ部品ばかり続けない。
3. クイズ（.flips に details.flip を3〜5枚）
4. 明日やること（ul.check data-key="chNN"、3〜5項目、input id は "chNN-1" 形式）＋ v1 へのリンク（.more）
5. pager

## 技術ルール
- `_template.html` の骨格と部品の書き方をそのまま使う（部品見本が入っている）。CSSは visual.css、JSは visual.js（最後に読み込む）。この2つと GUIDE.md は編集しない。
- アイコン：`<svg class="ic"><use href="#i-名前"/></svg>`。使える名前は visual.js の P の一覧のみ（browser web server app db log bug check warn x user users chat mail key folder terminal clock calendar bulb search spark book target mountain code coffee leaf box wrench link xml table flag arrow shield eye hand question lock layers cloud play pen list route stamp yen train heart fire gear）。
- 色は visual.css の変数・クラスのみ。#hex / rgb() の直書き禁止（pre .hl の既存定義は可）。
- SVG図：viewBox 指定、`style="min-width:XXXpx;max-width:YYYpx"`（min-width は viewBox 幅の 0.75 倍程度。スマホで文字が9px以上になるように）。text は fill を付けず、色はクラス（t-muted, t-accent, t-ok, t-ng）。図形は box / box-soft / box-ok / box-warn / box-ng / box-bg / line / line-accent / line-ng / dash / f-accent など。データが流れる線には class="line-accent flowing" で動く破線にできる。文字は13〜16px、重ならないこと。
- コードやログは短く（10行以内）。pre 内の < > & はエスケープ。重要行は <span class="hl">、注釈番号は <span class="tag">①</span> と .anno。
- 1シーンの explore の panel の id はページ内で一意に。
- スマホ幅390pxで横スクロールしない（.fig と .pipe と pre は内部スクロール可）。

## リンク
- 各章 topbar 右の「文字で詳しく読む」と .more は `v1/同じファイル名`。
- pager は 00→01→…→12→00。目次は 00-index.html。

## ファイル名（v1と同じ）
01-mindset / 02-system-map / 03-java / 04-spring-boot / 05-build-env / 06-sql-postgres / 07-logs-incident / 08-xml-forms / 09-change-request / 10-ai-learning / 11-communication / 12-roadmap（.html）。00-index.html はリーダーが作る。

## 作り方
1. まず v1 の同じ章を読み、要点を「シーン6〜9個」に絞り込む（各シーンの一言メッセージを先に決める）。
2. 各シーンに最適な部品を選んで作る。
3. Playwright（require('playwright')、chromium.launch()）で 390px と 1200px、ライト・ダークのスクリーンショットを撮って確認（保存先は scratchpad：/tmp/claude-0/-home-user-passionmode/b1926a91-a378-51b6-a90d-d81e129b816a/scratchpad/v2shots/）。scrollWidth が幅を超えないこと、pageerror がないこと、紙芝居・タブ・explore が動くことを確認。
4. git commit はしない。
