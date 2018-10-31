jQuery(document).ready(function () {
    jQuery('body').on('click', '.lang-select', function () {
        var lang = jQuery(this).attr('data-lang');
        var d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "googtrans=" + lang + ";" + expires + ";path=/";
        var url = window.location.href;
        url = url.replace("#","");
        window.location.href = window.location.href;
    });
});