// let item_list = document.getElementsByClassName("itemStateIn");
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
// // for(let i=0; i<item_list.length; i++){
// //     // document.body.style.backgroundColor = "red";
// //     item_list[i].appendChild(dp);
// //     // item_list[i].innerHTML = "<p>hhhheeeellllllllooo</p>" ;
// //     console.log(item_list[i]);
// // }
// //
// // let parents = $('.it-Header');
// // console.log(parents.length);
// //
// // for(let i=0; i<parents.length; i++){
// //     console.log("kita");
// //     parents[i].after("<b>Hello</b>");
// // }

// console.log("hogo");
let parent = $('.itemStateIn');
for(let i=0; i<parent.length; i++){
    let fp = parent[i].getElementsByClassName("fixedPrice");
    let h_price = parseInt(fp[0].children[0].textContent.replace(/[^0-9^]/g,""));
    console.log(h_price);

    let lp = parent[i].getElementsByClassName("price");
    let l_price = parseInt(lp[0].textContent.replace(/[^0-9^]/g,""));
    console.log(l_price);

    let p_down = parseInt(100 * (1 - l_price / h_price));
    if(String(fp[0].innerHTML).indexOf("割引率") === -1){
        fp[0].innerHTML = "割引率 " + String(p_down) + "%<br>" + fp[0].innerHTML;
    }else{
        console.log("dadadada");
    }

}

let parents = $('.itemState');
// console.log(parents);
// console.log("aaasss");
for(let i=0; i<parents.length; i++){
    console.log("kita");
    let fp = parents[i].getElementsByClassName("fixedPrice");
    let h_price = parseInt(fp[0].children[0].textContent.replace(/[^0-9^]/g,""));
    console.log(h_price);

    let lp = parents[i].getElementsByClassName("price");
    let l_price = parseInt(lp[0].textContent.replace(/[^0-9^]/g,""));
    console.log(l_price);

    let p_down = parseInt(100 * (1 - l_price / h_price));
    // console.log(fp[0].innerHTML);
    if(String(fp[0].innerHTML).indexOf("割引率") === -1){
        fp[0].innerHTML = "割引率 " + String(p_down) + "%<br>" + fp[0].innerHTML;
    }else{
        console.log("dadadada");
    }

    // fp[0].innerHTML = "割引率 " + String(p_down) + "%<br>" + fp[0].innerHTML;

}
console.log(parent.length);
