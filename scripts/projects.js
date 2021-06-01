function showDiv(div) {
    possible_divs = ["comp_sci", "game_design", "other"];
    possible_divs.forEach(d => {
        console.log(d + "_div")
        if (div + "_div" === d + "_div") {
            document.getElementById(d + "_div").style.display = 'block';
            document.getElementById(d + "_card").style.fontWeight = 'bold';
        } else {
            document.getElementById(d + "_div").style.display = 'none';
            document.getElementById(d + "_card").style.fontWeight = 'normal';
        }
    });
}