count = 0;        
$("#add-btn").click(function () {
    text = $('#add-input').val();
    if(text.length > 0) {
        input = $('input').val();
        $("#list").prepend(`
            <li>
                <input type="checkbox" onchange="taskChecked(this)">
                <span>${input}</span>
            </li>
        `);
        $('ul li input').first().attr("id",`checkbox${count}`).attr('id');
        $('ul li span').first().attr("id",`label${count}`).attr('id');
        $('ul li input').addClass('todo-checkbox');
        $('#add-input').val('');
    }
    count += 1;
});


function taskChecked(obj) {
    id = $(obj).attr("id");
    listItem = $(obj).parent();
    label = $(listItem).children()[1];
    labelId = $(label).attr('id');
    if(document.getElementById(id).checked) {
        $('#' + labelId).css('text-decoration', 'line-through');
        $('#' + labelId).css('color', '#aaa');
    }
    else {
        $('#' + labelId).css('text-decoration', 'none');
        $('#' + labelId).css('color', '#f0ffff');
    }
}