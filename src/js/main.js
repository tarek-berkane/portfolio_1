const menu_close = "header-menu-hidden";
const menu_id_name = "header-menu";

function toggle_menu() {
    var menu = document.getElementById(menu_id_name);
    menu.classList.toggle(menu_close);
}