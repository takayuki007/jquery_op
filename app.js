//todoを追加
$('.js-add-todo').on('click', function (e) {
    e.preventDefault();

    var text = $('.js-get-val').val();
    $('.js-get-val').val('');

    if (!text){
        $('.js-toggle-error').show();
        return;
    }

    $('.js-toggle-error').hide();

    var listItem = '<li class="list-item" data-text="' + text +'">' +
        '<i class="far fa-square icon-check"></i>' +
        '<span class="list-item-text">' + text + '</span>' +
        '<input type="text" class="list-item-edit" value="' + text +'">' +
        '<i class="far fa-trash-alt icon-trash"></i>' +
        '</li>'

    $('.js-todo-list').prepend(listItem);
});

//todoをdoneにする
$(document).on('click', '.js-click-done', function () {
    $(this).removeClass('fa-square').addClass('fa-check-square')
        .removeClass('js-click-done').addClass('js-click-todo')
        .closest('.js-todo-list-item').addClass('list-item-done');
});

//doneをtodoにする
$(document).on('click', '.js-click-todo', function() {
    $(this).addClass('fa-square').removeClass('fa-check-square')
        .addClass('js-click-done').removeClass('js-click-todo')
        .closest('.js-todo-list-item').removeClass('list-item-done');
});

//todoをremoveする
$(document).on('click', '.js-click-trash', function () {
    $(this).closest('.js-todo-list-item').fadeOut('slow', function(){
        this.remove();
    });
});

//todoをeditする
$(document).on('click', '.js-click-item-text', function(){
    $(this).hide().siblings('.js-list-item-edit').show();
})

//editをtodoにする
$(document).on('keyup', '.js-list-item-edit', function (e) {
    if(e.keyCode === 13 && e.shiftKey === true){
        var $this = $(this);
        $this.hide().siblings('.js-click-item-text').text($this.val()).show()
            .closest('.js-todo-list-item').attr('data-text', $this.val());
    }
})

//todoをsearchする
$('.js-search').on('keyup', function () {
    var searchText = $(this).val();

    $('.js-todo-list-item').show().each(function(i,elm){
        var text = $(elm).data('text');
        var regexp = new RegExp('^' + searchText);

        if(text && text.match(regexp)){

        }
    })
})