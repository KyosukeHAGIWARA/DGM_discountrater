
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
        console.log("mouaru");
    }
}

let parents = $('.itemState');
for(let i=0; i<parents.length; i++){
    console.log("kita");
    let fp = parents[i].getElementsByClassName("fixedPrice");
    let h_price = parseInt(fp[0].children[0].textContent.replace(/[^0-9^]/g,""));
    console.log(h_price);

    let lp = parents[i].getElementsByClassName("price");
    let l_price = parseInt(lp[0].textContent.replace(/[^0-9^]/g,""));
    console.log(l_price);

    let p_down = parseInt(100 * (1 - l_price / h_price));
    if(String(fp[0].innerHTML).indexOf("割引率") === -1){
        fp[0].innerHTML = "割引率 " + String(p_down) + "%<br>" + fp[0].innerHTML;
    }else{
        console.log("mouaru");
    }
}
console.log(parent.length);
