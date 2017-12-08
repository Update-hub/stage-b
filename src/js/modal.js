$(function () {
  
      //クリックされたカードのidを取得
      $('.card').on('click', function () {
          var content = $(this).attr('id');
          //オーバーレイ表示
          $('.overlay').fadeIn();
          //モーダルのidは「カードのid + modal」
          $(document.getElementById(content + 'modal')).fadeIn();
      });
  
      //オーバーレイで閉じる
      $('.overlay').click(function () {
          $('.overlay').hide();
          $('.modal').hide();
      });
  
      //「閉じる」ボタンで閉じる
      $('.delete').click(function () {
          $('.overlay').hide();
          $('.modal').hide();
      });
  
  });
  
  /*
  <!DOCTYPE html>
  <html lang="ja">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="css/style.css">
      <title>index</title>
      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  </head>
  
  <body>
      <div>
          <button id="01" class="card">カード1</button>
          <div id="01modal" class="modal">
              <p>モーダル1</p>
              <button class="delete">けす</button>
          </div>
      </div>
      <div>
          <button id="02" class="card">カード2</button>
          <div id="02modal" class="modal">
              <p>モーダル2</p>
              <button class="delete">けす</button>
          </div>
      </div>
      <div class="overlay">
          <p>オーバーレイ</p>
      </div>
      <script src="js/modal.js"></script>
  </body>
  
  </html>
  */
  
  
  /*
  .modal {
    display: none;
    background-color: grey;
  }
  
  .overlay {
    display:none;
    background-color: pink;
  }
  */