var tabH = document.getElementById('tab-header');
var tabHs = tabH.children;
var tabB = document.getElementById('tab-body');
var tabBs = tabB.children;
for (var i = 0; i < tabHs.length; i++) {
    tabHs[i].ind = i;
    tabHs[i].onclick = function () {
        for (var j = 0; j < tabHs.length; j++) {
            tabHs[j].className = '';
            tabBs[j].className = 'hide';
        }
        this.className = 'active';
        tabBs[this.ind].className = '';
    };
}