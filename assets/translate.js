

document.querySelectorAll('.lang-select').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = el.getAttribute('data-lang');
        if (lang) {
            setGoogTransCookie(lang);
            location.reload();
        }
    });
});

(function () {
    function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    if (!getCookie('googtrans')) {
        setGoogTransCookie('de');
        location.reload();
    }
})();

function setGoogTransCookie(lang) {

    const domains = [
        location.hostname,
        location.hostname.replace(/^www\./, ''),     
        '.' + location.hostname.replace(/^www\./, '') 
    ];

    domains.forEach(domain => {
        document.cookie = "googtrans=; path=/; domain=" + domain + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    });
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    const cookieValue = "/en/" + lang;
    document.cookie = "googtrans=" + cookieValue + "; path=/; max-age=" + (24 * 60 * 60);
}