document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = "Don't leave us :(";
    } else {
        document.title = "D'light Orange";
    }
});
