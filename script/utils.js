function print_result(result) {
    const history = document.getElementById("history");
    history.appendChild(result);
}
window.print_result = print_result;

function select_menu(e, option) {
    const pre = e.querySelector('.card').children;
    for (let i = 0; i < pre.length; i++) {
        if (pre[i].style.display !== 'none' && pre[i].tagName === 'PRE') {
            if (option && i < pre.length - 3) {
                pre[i].style.display = 'none';
                pre[i+1].style.display = '';
                break
            } else if (i !== 0) {
                pre[i].style.display = 'none';
                pre[i-1].style.display = '';
                break
            }
        }
    }
}
window.select_menu = select_menu;