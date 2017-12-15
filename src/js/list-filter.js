//ボタン追加時はここに追記する。複数選択時は中に配列を作る。
const categoriesOfRedlist = ['none', 'cr', 'en', ['cr', 'en']];

$(function () {
  let filter = new FilterOfCategory();
  categoriesOfRedlist.forEach(category => {
    document.getElementById(getIdName(category))
      .addEventListener('click', () => {
        filter.clickButton(category);
      });
  });
});

/**
 * @param  {string} category
 */
function getIdName(category) {
  if (Array.isArray(category)) {
    idName = 'js-btn';
    category.forEach(aCategory => {
      idName += `-${aCategory}`;
    });
  } else {
    idName = `js-btn-${category}`;
  }
  return idName;
}

class FilterOfCategory {
  constructor() {
    this.selectedCategory = null;
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
      category.forEach(aCategory => {
        $(`.js-card--${aCategory}`).show();
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