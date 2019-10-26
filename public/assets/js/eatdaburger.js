  
$('.devour-btn').on('click', function() {
    // console.log($(this).attr('data-id'))
    $.ajax('/api/' + $(this).data('id'), {
        type: 'PUT',
    }).then(function(){
        // console.log('done')
        location.reload();
    })
});

$('.delete-btn').on('click', function() {
    // console.log($(this).attr('data-id'))
    $.ajax('/api/' + $(this).data('id'), {
        type: 'DELETE',
    }).then(function(){
        // console.log('done')
        location.reload();
    })
});