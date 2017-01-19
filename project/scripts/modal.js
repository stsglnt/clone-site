
function openModal($modal) {
/*
  var scrollBarWidth = window.innerWidth - document.body.offsetWidth;*/
  $('body')
   /* .css('margin-right', scrollBarWidth)*/
    .addClass('showing-modal');
  $modal.fadeIn(500);
};

function closeModal($modal) {
    $('body')
/*      .css('margin-right', '')*/
      .removeClass('showing-modal');
    $modal.hide();
};


var $modal = $('#modalWindow');

$modal
	.click(function () {
		closeModal($modal);
	})
  .find('.modalContent').click(function (event) {
  	event.stopPropagation();
	});


$('#open').click(function (event) {
  event.preventDefault();
  openModal($modal);
});