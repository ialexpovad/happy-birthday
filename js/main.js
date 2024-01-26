$(function () {
    let dom = document.createElement("span");
    conf.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (conf.img && conf.img[item]) {
            let img = document.createElement("img");
            img.src = conf.img[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let i in conf.tools) {
        let dom = $("#" + i);
        if (dom.length > 0 && conf.tools[i]) {
            dom.html(conf.tools[i]);
        }
    }
});
