# scrollParallax

スクロールによってcssを変更し、パララックス効果を実現することができます。

## Description
このプラグインには3つの機能があります。

1. Timing 任意の位置を通過したときに関数を実行する
2. Speed スクロール量に応じてcssを変化させる
3. Fit 移動距離に応じてcssを変化させる

[jQueryプラグイン](docs/JQUERY.ja.md)と、[vueプラグイン](docs/VUE.ja.md)があります。

## Example
### jQuery
* [y scroll](http://github.develo.org/scrollParallax/public/example1/)
* [x scroll](http://github.develo.org/scrollParallax/public/example2/)
* [y scroll](http://github.develo.org/scrollParallax/public/example3/)

### Vue
* [y scroll](http://github.develo.org/scrollParallax/public/example4/)
* [x scroll](http://github.develo.org/scrollParallax/public/example5/)


## Usage

| option name| Description |default
|:-----------|:------------|:------------|
| stage      | スクロールさせたいwindow |`window`
| direction  | スクロールの方向(y or x) |`'y'`
| targetPercentage| 全体の慣性の割合を指定します |`0.2`


### timing
指定したタグを通過したとき、クラスにonを追加します。  
また、上から下、下から上に向かって通過したときに、指定した関数を実行することもできます。

| option name| Descriptions |default
|:-----------|:------------|:------------|
| el | ここで指定したタグを通過したときにtoggleが実行されます。 |`50`
| center | タイミングの位置をどこに設定するか（windowの幅での割合） |`50`
| eventScrollElementPosition | 指定した位置にきたときに`toggle`を実行します [スクロール位置の指定について](#スクロール位置の指定について) | 自分自身の位置
| toggle | 上から下に通過した場合に[1]を実行し、下から上に通過した場合[2]を実行します。 | [() => this.addClass('on'), () => this.removeClass('on')]
| targetPercentage| 慣性の割合を指定します（個別に指定したい場合） |`undefined`


### speed

スクロール量に応じてcssを変化させます。 
スクロール1に対して、どのぐらい移動するかをspeedで指定することができます。


| option name| Descriptions |default
|:-----------|:------------|:------------|
| style or styles | 変化させたいcssの値 |`'top'`
| speed | スクロール量 * speed ので値を変化させる |`2`
| min | 最小値 |`-999999`
| max | 最大値 |`999999`
| contentScrollPositionStyleValue | スクロールが`contentScrollPosition`の位置にきたときに、ここで指定したstyleに落ち着きます。指定がない場合はcssで予め指定していたstyleになります。 | 自身のタグのstyle
| contentScrollPosition | スクロールがここで指定した位置に来た時に、希望の位置（contentScrollPositionStyleValue）にstyleが落ち着きます。[スクロール位置の指定について](#スクロール位置の指定について) |`0`
| targetPercentage| 慣性の割合を指定します（個別に指定したい場合） |`undefined`



### fit

移動距離に応じてcssを変化させます。
スクロールがstartからendまで移動したときにfromStyleからtoStyleにcssが変化していきます。
easingを指定することも可能です。


| option name| Descriptions 
|:-----------|:------------|
| start | 移動を始めるスクロール位置（2つ目からは省略すると最後のendの位置からとなります。） [スクロール位置の指定について](#スクロール位置の指定について) |
| end | 移動が終わるスクロール位置 [スクロール位置の指定について](#スクロール位置の指定について) |
| fromStyle | 始めのcss（cssは文字列で指定してください） |
| toStyle | 終わりのcss（cssは文字列で指定してください） |
| easing | [easing plugin](http://semooh.jp/jquery/cont/doc/easing/)の名前を指定 |
| targetPercentage| 慣性の割合を指定します（個別に指定したい場合） |`undefined`


### スクロール位置の指定について
スクロール位置はいくつかの指定方法があります。

#### 数値で指定
```javascript
{start: 0, end: 1000}
```

#### タグの名前で指定
```javascript
{start: 0, end: '.header'}
```

#### elementで指定
```javascript
{start: 0, end: document.querySelector('.header')}
```

#### 配列で細かく指定
```javascript
{start: 0, end: ['.header', -100]}
```


配列で上記の様に書くことで.headerから-100の位置というような調整ができます。

#### スクロールの最後の位置を指定したい場合
```javascript
{start: 0, end: 'last'}
{start: 0, end: ['last', -100]}
```
