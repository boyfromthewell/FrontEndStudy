# CSS (Cascading Style Sheets)

## 1. Selector (어떤 태그를 고를것인가)
<br>

* universal
```css
*{
    모든 태그
    color: red;
}
```
* type
 ```css
div{
    div태그 골라내자
}
```
* ID
 ```css
#id{
    id태그 골라내자
}
```
* Class
 ```css
.class{
    class태그 골라내자
}
```
* State
 ```css
div:hover{
    ex) hover :div태그에 마우스 올렸을때 반응  
}
```
* Attribute
 ```css
a[href=="naver.com"]{
    naver.com 속성값 가진 태그에만 적용
}
```
***

## 2. layout
<br>

* inline : 컨텐츠 자체만 꾸며줌

* inline-block : 지정한 사이즈에 맞춰 한줄 여려개 표기

* block : 한줄에 하나
***
* position 원래 static -> relative 속성 주면 원래 았어야 할 자리에서 옮겨줌

* absolute : 내 아이템과 가장 가까운 곳에서 위치 변경

* fixed : 페이지창 기준으로 움직임

* *sticky : 스크롤 내려도 고정

***

## 3. Flexbox
float 멈춰!

<br>

1. container 단위
* display : flex; (이제 난 flex box다)
```css
container{
    display: flex;
    flex-direction: row; /*왼쪽에서 오른쪽*/
    flex-direction: row-reverse; /*오른쪽에서 왼쪽*/
    flex-direction: column; /*위에서 아래로*/
    flex-direction: column-reverse; /*아래에서 위로*/
}
```
```css
container{
    display: flex;
    flex-direction: row;

    flex-wrap: nowrap; /*한줄에 억지로 우겨넣음*/
    flex-wrap: wrap; /*한줄 차면 다음줄으로*/
    flex-wrap: wrap-reverse; /*밑에서 부터 반대로*/

    justify-content: center; /*아이템 센터로*/
    justify-content: space-around; /*박스 둘러싸는 공간 넣어줌*/
    justify-content: space-evenly; /*박스 둘러싸는 공간 동일하게 넣어줌*/
    justify-content: space-between; /*양 측면 아이템은 붙은채로 공간 넣어줌*/
}
```
* flex-flow: column nowrap; (한번에도 가능)

```css
container{
    display: flex;
    flex-direction: row;

    /*align은 y축 기준*/

    align-items: center; /*y축 가운데로 이동*/
    align-content: center;/*y축 중심으로 정렬*/
}
```
참고 https://css-tricks.com/

***

2. item 단위

```css
.item1 {
    flex-grow: 2; 
}
.item2 {
    flex-grow: 1; 
}
.item3 {
    flex-grow: 1;
    /*컨테이너 늘리면 아이템1은 두배로 늘어남*/
}
```
```css
.item1 {
    flex-shrink: 2; 
}
.item2 {
    flex-shrink: 1; 
}
.item3 {
    flex-shrink: 1;
    /*컨테이너 늘리면 아이템1은 두배로 줄어듬*/
}
```
```css
.item1 {
    flex-basis: 60%; 
}
.item2 {
    flex-basis: 30%; 
    align-self:center;
    /*아이템2 하나만 y축 중앙으로*/
}
.item3 {
    flex-basis: 10%;
    /*비율 설정 가능 (디폴트는 auto)*/
}
```
***

## 3. relative length units

* em : 폰트크기 (1em==16px),
    부모의 폰트 사이즈를 곱한 값으로 계산

* rem : 루트요소에서 계산 (html 기본 폰트사이즈 16px)

* vw, vh : 각각 너비, 높이에 따라 계산 (100vw : 너비를 100% 쓰겠다)


