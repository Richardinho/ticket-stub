+function () {
    let bg = Array.from(document.querySelectorAll(".ticket-stub-background"));
    bg.forEach(bg => {
        let t = "";
        for(var i=0; i < 400; i++) {
            t += "Rail Settlement Plan";
        }
        bg.innerHTML = t;
    })
}();