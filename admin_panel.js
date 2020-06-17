class Restaurent {
    constructor(restaurent, img_url) {
        this.restaurent = restaurent;
        this.img_url = img_url;
    }
}
class Menu_list {
    constructor(select_restaurent,item, item_img_url, price) {
        this.restaurent=select_restaurent;
        this.item = item;
        this.item_img_url = item_img_url;
        this.price = price;
    }
}
function adding_restaurent()
{
    var restaurent_details=document.querySelectorAll('.restaurent_content')
    //console.log(restaurent_details.length)
    var new_restaurent=new Restaurent()
    var i=0
   // console.log(new_restaurent)
    for( key in new_restaurent)
    {
        new_restaurent[key]=restaurent_details[i].value
        restaurent_details[i].value=""
        i++
    }
    
    

    var restaurent_fetching=localStorage.getItem('restaurent')
    var restaurent_array=JSON.parse(restaurent_fetching)||[]
    restaurent_array.push(new_restaurent)
    var restaurent_storing=JSON.stringify(restaurent_array)
    localStorage.setItem('restaurent',restaurent_storing)
    
    
    

}
function add_item()
{
   var item_details=document.querySelectorAll('.item_details')
   var new_item=new Menu_list()
   i=0
   for(key in new_item)
   {
       new_item[key]=item_details[i].value
       item_details[i].value=""
       i++
   }
   
   var item_fetching=localStorage.getItem('item')
   var item_array=JSON.parse(item_fetching)||[]
   item_array.push(new_item)
   var item_storing=JSON.stringify(item_array)
   localStorage.setItem('item',item_storing)

}


function option_added_to_select()
{
    var selecting_restaurent=localStorage.getItem('restaurent')
    var restaurent_names=JSON.parse(selecting_restaurent)
    //console.log(restaurent_names[0].restaurent)
    var select_restaurent=document.getElementById('select_restaurent')
    for(i=0;i<restaurent_names.length;i++)
    {
        
    var option=document.createElement('option')    
    option.setAttribute('value',restaurent_names[i].restaurent)
    option.innerText=restaurent_names[i].restaurent
    select_restaurent.append(option)

    }
}



var add_restaurent=document.getElementById('add_restaurent')
add_restaurent.addEventListener('click',adding_restaurent) 

var add_item_to_restaurent=document.getElementById('add_item')
add_item_to_restaurent.addEventListener('click',add_item)

var restaurent_option=document.getElementById('pills-item-tab')
restaurent_option.addEventListener('click',option_added_to_select)
