window.addEventListener('load',function()
{
    var localstorage_content=localStorage.getItem('restaurent')
    var restaurent_array=JSON.parse(localstorage_content)
    var res=document.getElementById('res')
    for(i=0;i<restaurent_array.length;i++)
    {
        console.log(restaurent_array[i].img_url)
        var a=document.createElement('a')
        a.href="items.html"

        var card=document.createElement('div')
        card.setAttribute('class','card')
        card.style.width="18rem"

        var img_tag=document.createElement('img')
        img_tag.setAttribute('src',restaurent_array[i].img_url)
        img_tag.setAttribute('class','card-img-top img-fluid')
        img_tag.style.height="280px"
        img_tag.style.width="280px"

        var card_body=document.createElement('div')
        card_body.setAttribute('class','d-flex justify-flex-between')
        
        var div_h=document.createElement('div')
        var h3=document.createElement('h3')
        h3.textContent=restaurent_array[i].restaurent
        h3.style.color="black"
        div_h.append(h3)

        var quality=document.createElement('div')
        var label=document.createElement('label')
        label.setAttribute('for',restaurent_array[i].restaurent)
        var input_tag=document.createElement('input')
        input_tag.setAttribute('type','number')
        input_tag.setAttribute('id',restaurent_array[i].restaurent)
        input_tag.setAttribute('placeholder','Quality')
        input_tag.style.width="80px"
        
        label.append(input_tag)
        quality.append(label)

        card_body.append(div_h,quality)
        card.append(img_tag,card_body)
        a.append(card)
        res.append(a)

    }
}

)

