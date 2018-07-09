// var item_list = document.getElementsByClassName("itemStateIn");
// // ccc = document.getElementsByClassName("p-items_wrapper");
// // ccc.style.backgroundColor = "red";
//
// // alert(item_list.length);
// console.log(item_list.length);
//
//
// // item_list.forEach(function( value ) {
// //     value.insertBefore(dp, value.firstChild);
// // });
// //
// // for(var i=0; i<item_list.length; i++){
// //     // document.body.style.backgroundColor = "red";
// //     item_list[i].appendChild(dp);
// //     // item_list[i].innerHTML = "<p>hhhheeeellllllllooo</p>" ;
// //     console.log(item_list[i]);
// // }
// //
// // var parents = $('.it-Header');
// // console.log(parents.length);
// //
// // for(var i=0; i<parents.length; i++){
// //     console.log("kita");
// //     parents[i].after("<b>Hello</b>");
// // }

// console.log("hogo");
var parents = $('.itemStateIn');
for(var i=0; i<parents.length; i++){
    var fp = parents[i].getElementsByClassName("fixedPrice");
    var h_price = parseInt(fp[0].children[0].textContent.replace(/[^0-9^]/g,""));
    console.log(h_price);

    var lp = parents[i].getElementsByClassName("price");
    var l_price = parseInt(lp[0].textContent.replace(/[^0-9^]/g,""));
    console.log(l_price);

    var p_down = parseInt(100 * (1 - l_price / h_price));
    if(String(fp[0].innerHTML).indexOf("割引率") == -1){
        fp[0].innerHTML = "割引率 " + String(p_down) + "%<br>" + fp[0].innerHTML;
    }else{
        console.log("dadadada");
    }

}

var parents = $('.itemState');
// console.log(parents);
// console.log("aaasss");
for(var i=0; i<parents.length; i++){
    console.log("kita");
    var fp = parents[i].getElementsByClassName("fixedPrice");
    var h_price = parseInt(fp[0].children[0].textContent.replace(/[^0-9^]/g,""));
    console.log(h_price);

    var lp = parents[i].getElementsByClassName("price");
    var l_price = parseInt(lp[0].textContent.replace(/[^0-9^]/g,""));
    console.log(l_price);

    var p_down = parseInt(100 * (1 - l_price / h_price));
    // console.log(fp[0].innerHTML);
    if(String(fp[0].innerHTML).indexOf("割引率") == -1){
        fp[0].innerHTML = "割引率 " + String(p_down) + "%<br>" + fp[0].innerHTML;
    }else{
        console.log("dadadada");
    }

    // fp[0].innerHTML = "割引率 " + String(p_down) + "%<br>" + fp[0].innerHTML;

}
console.log(parent.length);
