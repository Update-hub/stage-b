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