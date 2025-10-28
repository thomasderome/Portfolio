function print_result(result) {
    const history = document.getElementById("history");
    history.appendChild(result);
}
window.print_result = print_result;

function select_menu(e, option) {
    const pre = e.querySelector('.card').children;
    for (let i = 0; i < pre.length; i++) {
        if (pre[i].style.display !== "none" && pre[i].tagName === 'PRE') {
            if (option && i < pre.length - 1) {
                pre[i].classList.add('movehide_card');
                setTimeout(() => {
                    pre[i].style.display = "none";
                    pre[i].classList.add("hide_card");
                    pre[i+1].classList.remove('hide_card');
                }, 500);
                break
            } else if (i !== 0 && !option) {
                pre[i].classList.add('hide_card');
                console.log("precedent", option);
                setTimeout(() => {
                    pre[i-1].style.display = "";
                    setTimeout(
                        () => {
                            pre[i - 1].classList.remove('movehide_card');
                            pre[i - 1].classList.remove("hide_card");
                        }, 10)

                }, 500)
                break
            }
        }
    }
}
window.select_menu = select_menu;