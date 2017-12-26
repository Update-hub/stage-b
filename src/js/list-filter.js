//ボタン追加時はこの下のcategoriesOfRedlistに追記する。複数選択時は中に配列を作る。
//ボタンのidにはjs-filter-btn-○○という形で入れる。
//複数選択の際はjs-filter-btn-○○-○○、配列に入れる際はid名に入れた順に入れる。
//フィルタリングされる側のクラスにはjs-cardとjs-card--○○を付ける。
const categoriesOfRedlist = [
  'none',
  'cr',
  'en',
  ['cr', 'en'],
  'ex',
  'ew',
  'vu',
  'nt',
  'dd',
  'lp'
];
const categoriesDescription = {
  all:'すべてを表示',
  cr:'国内ではすでに絶滅したと考えられる種',
  en:'IA種ほどではないが、近い将来における野生での絶滅の危険性が極めて高いもの',
  cren:'絶滅の危機に瀕している種',
  ex:'国内ではすでに絶滅したと考えられる種',
  ew:'飼育・栽培下でのみ存続している種',
  vu:'絶滅の危険が増大している種',
  nt:'絶滅危険度は小さいが、生息条件の変化によっては絶滅危惧に移行する可能性がある種',
  dd:'評価するだけの情報が不足している種',
  lp:'地域的に孤立している個体群で、絶滅の恐れが高いもの'
}


/* ---------------------------------------------------------------------------------------------------------------
   実行処理
--------------------------------------------------------------------------------------------------------------- */
$(function () {
  let filter = new FilterOfCategory();
  categoriesOfRedlist.forEach(category => {
    let id = getIdName(category);
    document.getElementById(id)
      .addEventListener('click', () => {
        setCurrentFilter(id);
        $('.filter-description').text(getIdDescription(id));
        filter.clickButton(category);
      });
  });
});


/* ---------------------------------------------------------------------------------------------------------------
   クラス・関数
--------------------------------------------------------------------------------------------------------------- */
/**
 * @param  {string} category
 */
function getIdName(category) {
  let idName;
  if (Array.isArray(category)) {
    idName = 'js-filter-btn';
    category.forEach(theCategory => {
      idName += `-${theCategory}`;
    });
  } else {
    idName = `js-filter-btn-${category}`;
  }
  return idName;
}

function setCurrentFilter(id){
  $('.js-filter-current').removeClass('js-filter-current');
  $('#'+id).addClass('js-filter-current');
}

function getIdDescription(id){
  let trimId = id.substr(14).replace('-','');
  let idDescription;
  if(id!=null){
    idDescription = categoriesDescription[trimId];
  }
  return idDescription;
}

class FilterOfCategory {
  constructor() {
    this.selectedCategory = 'none';
  }
  /**
   * @param  {string} category
   */
  clickButton(category) {
    switch (category) {
      case this.selectedCategory:
        break;
      case 'none':
        this.dontSelectedCategory();
        this.selectedCategory = 'none';
        break;
      default:
        this.changeFilter(category);
        this.selectedCategory = category;
        break;
    }
  }
  /**
   * @param  {string} category
   */
  changeFilter(category) {
    if (Array.isArray(category)) {
      $('.js-card').hide();
      category.forEach(theCategory => {
        $(`.js-card--${theCategory}`).show();
      });
    } else {
      $('.js-card').hide();
      $(`.js-card--${category}`).show();
    }
  }

  dontSelectedCategory() {
    $('.js-card').show();
  }
}