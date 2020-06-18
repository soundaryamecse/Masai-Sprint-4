

window.addEventListener('load',function()
{
    var query=new URLSearchParams(location.search)
    var restaurent=query.get('restaurent')
    var item_names=localStorage.getItem('item')
    var item_array=JSON.parse(item_names)
    var res=document.getElementById('res')
    //console.log(item_array)
    for(i=0;i<item_array.length;i++)
    {
        if(item_array[i].restaurent===restaurent)
        {
            var card=document.createElement('div')
            card.setAttribute('class','card m-3')
            card.style.width="18rem"
            card.style.height="400px"

            var img_tag=document.createElement('img')
            img_tag.setAttribute('src',item_array[i].item_img_url)
            img_tag.setAttribute('class','card-img-top img-fluid')
            img_tag.style.height="280px"
            img_tag.style.width="280px"

            var br=document.createElement('br')

            var card_body=document.createElement('div')
            card_body.setAttribute('class','d-flex justify-content-between')
            
            var div_h=document.createElement('div')
            div_h.setAttribute('class','d-flex flex-column')
            var h3=document.createElement('h3')
            h3.textContent=item_array[i].item
            h3.style.color="black"
           // h3.setAttribute('class','text-center')
           var p_tag=document.createElement('p')
           var span=document.createElement('span')
           p_tag.textContent=item_array[i].price  
           span.innerHTML='&#x20b9;' +" "+p_tag.textContent
              
          
          
            div_h.append(h3,span)
            var price=item_array[i].price


            var quality=document.createElement('div')
            quality.setAttribute('class','d-flex flex-column')
            var label=document.createElement('label')
            label.setAttribute('for',item_array[i].item)
            var input_tag=document.createElement('input')
            input_tag.setAttribute('type','number')
            input_tag.setAttribute('id',item_array[i].item)
            input_tag.setAttribute('placeholder','Quantity')
            //input_tag.setAttribute('class','quantity')
            input_tag.style.width="80px"
            
            label.append(input_tag)
           
            
            var add_to_cart=document.createElement('button')
            add_to_cart.setAttribute('class','add_to_cart btn btn-success')
            add_to_cart.setAttribute('id',i)
            add_to_cart.innerText="ADD"
            add_to_cart.style.width="80px"
            add_to_cart.addEventListener('click',function()
            {
                
                var price=p_tag.textContent
                var quantity=input_tag.value
                var item=h3.textContent
                var item_details={
                    restaurent:restaurent,
                    price:price,
                    quantity:quantity,
                    item:item
                }
                var temporary=localStorage.getItem('ordered_item')
                var temporary_array=JSON.parse(temporary)||[]
                temporary_array.push(item_details)
                console.log(temporary_array)
                var item_render=JSON.stringify(temporary_array)
                localStorage.setItem('ordered_item',item_render)             


            }
            )

            quality.append(label,add_to_cart)

            card_body.append(div_h,quality)
            card.append(img_tag,br, card_body)
            //a.append(card)
            res.append(card)

        }
        else
        {
            continue
        }
    }

   
}
)





