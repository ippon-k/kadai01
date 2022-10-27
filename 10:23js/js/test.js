// alert('1111');
let btn = "";
let pc_hands = "";
let judgment = "";
let secret = "";
// console.log('a');
$('#gu_btn').on('click', function () {

  btn = $('#btn-a').val();

  secret = document.getElementById('secret');
  secret.innerHTML = 'アーニャ読める。グーが出てくる。パーを出さなきゃ';
  $('#secret').fadeIn(2000);
  $('#secret').fadeOut(5000);
  // 画像でパーを表示
  pc_hands = document.getElementById('pc_hands');

  pc_hands.innerHTML = 'アーニャは✋';
  // あなたの負けとコメント
  $("#judgment").fadeIn(5000);
  $('#pc_hands').fadeIn(5000);
  judgment = document.getElementById('judgment');

  judgment.innerHTML = 'あなたの負け';
  $('#judgment').fadeOut(3000);
  $('#pc_hands').fadeOut(3000);
  // フェードアウト
  // リピート

});
$('#cho_btn').on('click', function () {

  btn = $('#cho_btn').val();
  secret = document.getElementById('secret');
  secret.innerHTML = 'アーニャ読める。チョキが出てくる。グーを出さなきゃ';
  $('#secret').fadeIn(2000);
  $('#secret').fadeOut(5000);
  // 画像でパーを表示
  pc_hands = document.getElementById('pc_hands');

  pc_hands.innerHTML = 'アーニャは✊';
  // あなたの負けとコメント
  $("#judgment").fadeIn(5000);
  $('#pc_hands').fadeIn(5000);
  judgment = document.getElementById('judgment');

  judgment.innerHTML = 'あなたの負け';
  $('#judgment').fadeOut(3000);
  $('#pc_hands').fadeOut(3000);
  // フェードアウト
  // リピート
});
$('#par_btn').on('click', function () {

  btn = $('#par_btn').val();
  secret = document.getElementById('secret');
  secret.innerHTML = 'アーニャ読める。パーが出てくる。チョキを出さなきゃ';
  $('#secret').fadeIn(2000);
  $('#secret').fadeOut(5000);
  // 画像でパーを表示
  pc_hands = document.getElementById('pc_hands');

  pc_hands.innerHTML = 'アーニャは✌️';
  // あなたの負けとコメント
  $("#judgment").fadeIn(5000);
  $('#pc_hands').fadeIn(5000);
  judgment = document.getElementById('judgment');

  judgment.innerHTML = 'あなたの負け';
  $('#judgment').fadeOut(3000);
  $('#pc_hands').fadeOut(3000);
  // フェードアウト
  // リピート

});
