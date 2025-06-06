import HtmlContent from "@/components/HtmlContent";
import MetaInfo from "@/components/ContentInfo";
import { pageTitle } from "@/lib/constant";

const PAGE_NAME = "このブログについて";

export async function generateMetadata() {
  return {
    title: pageTitle(PAGE_NAME),
    description: "ブログの運営者情報やブログの目的を紹介します。",
  };
}

const aboutHtml = /*html*/ `
<h1>この</h1>
<h2>ブログの由来</h2>
<p>住む場所に迷ってる人にぜひ町田をおすすめしたい、町田に住んでる人の生活をより便利にしたいという思いからです。</p>
<h2 id=>運営者情報</h2>
<table>
    <tbody>
        <tr>
            <th colspan="1" rowspan="1"><p>氏名</p></th>
            <td colspan="1" rowspan="1"><p>右田裕明 (migita hiroaki)</p></td>
        </tr>
        <tr>
            <th colspan="1" rowspan="1"><p>居住歴</p></th>
            <td colspan="1" rowspan="1"><p>2023年9月5日 転入</p></td>
        </tr>
        <tr>
            <th colspan="1" rowspan="1"><p>職業</p></th>
            <td colspan="1" rowspan="1"><p>se(会社員)</p></td>
        </tr>
        <tr>
            <th colspan="1" rowspan="1"><p>趣味</p></th>
            <td colspan="1" rowspan="1"><p>diy、 川遊び、 bbq、 fps</p></td>
        </tr>
    </tbody>
</table>
<h2>私が町田に住んだきっかけ</h2>
<p>転職し、フルリモートになったので、周辺環境に自然が多いというのを必須条件に、首都圏へのアクセスと地価のバランスを考えて住む場所を検討しました。<br>
    金町、高尾、府中、野川、日野、立川も候補にあり、毎週末足を運んで、最も気に入ったのが町田でした。
</p>
<h2>このブログの目的</h2>
<ul>
    <li>人脈を広げる</li>
    <li>ページ内広告で収益を得る</li>
    <li>町田市での事業を始めた場合の宣伝</li>
    <li>技術・備忘録情報の発信</li>
</ul>
<h3>事業候補</h3>
<p>やりたいこと</p>
<h4 id="haff2b4f0d4">プログラム・システム開発事業</h4>
<p>各個に合わせた iot デバイス、クラウド基盤 などの開発を行います。<br>
まずは<strong>無償</strong>(私の実績としてブログで紹介する条件付きで)<strong>ボランティア</strong>から始めたいです。</p>
<h4>スーパー買い物代行事業</h4>
<p>元手がいらないので、要望があればすぐにでも始められます。<br>
ウォーキングアプリのデイリーミッションをこなせてお得かも？</p>
<h4>レンタカー事業</h4>
<p>私の持ってる車は軽 ev1 台のみため、200km 以上の遠出や荷物運搬時にはレンタカー借ります。<br>
ところが町田の低価格帯のカーシェアやレンタカーはコンパクトカーしかありません。<br>
車 0~1 台のご家庭は地区内には多く、自分+同じように思ってる方は多いはず。<br>
まずは中古車 1 台から始めようと思います。</p>
<ol>
    <li>土地購入</li>
    <li>古物商取得・開業届</li>
    <li>アウトランダー、軽トラあたりを 100 万円以内で購入</li>
    <li>集客サイト・システム構築<br>という流れなので、実現まで時間はかかると思います。</li>
</ol>
<h4>賃貸事業</h4>
<p>1〜2人暮らし向けにガーデニング、diy、カーライフが楽しめるような、戸建orテラスハウスを探しています。</p>
<h4>スポーツジム事業</h4>
<p>フリーウエイト、ロープクライム、ボルダリングに特化した無人ジムを作りたいです。</p>
<h4>駐車場事業</h4>
<p>現在購入の交渉中。</p>
<p>契約者が範囲 <strong>3m x 5m 以上</strong>で自由に決めて、月極で貸出します。<br>
たとえば、縦に 2 台分借りる、カー用品用の物置も併せて借りるなどの場合割引します。<br>
<strong>空車が出たら、趣味の道具置きやレンタカー事業に利用</strong>します。</p>
<h4>柴犬カフェ事業</h4>
<p>単体での事業ではなく、他の店舗を兼ね、看板犬と触れ合えるようにします。<br>
また、予約制で出張犬カフェなんかやりたいです。</p>
`;

export default function AboutPage() {
  return (
    <div>
      <MetaInfo title="このブログについて" />
      <HtmlContent>{aboutHtml}</HtmlContent>
    </div>
  );
}
