function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var i = 0;
    var id = setInterval(frame, 5);
    function frame() {
        
        if (pos == 830) {
            if (i == 870) {
                myMove(pos=0);
            } else {
                i++;
                elem.style.left = i + 'px';
            }
        } else {
            pos++;
            elem.style.right = pos + 'px';

        }
        
    }
}