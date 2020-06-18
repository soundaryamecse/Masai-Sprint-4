window.addEventListener('load',function()
{
    var res=document.getElementById('res')
   var ordered_item=localStorage.getItem('ordered_item')
   var item_array=JSON.parse(ordered_item)||[]
   console.log(item_array)
   
    var card=document.createElement('div')
    card.setAttribute('class','card offset-3 cart')
    card.style.width="250px"

   for(i=0;i<item_array.length;i++)
   {
       
       var card_body=document.createElement('div')
      // var h_tag=document.createElement('h5')
      // h_tag.textContent=item_array[i].restaurent
       var p1_tag=document.createElement('p')
       var total_amount=Number(item_array[i].quantity)*Number(item_array[i].price)
       p1_tag.textContent=item_array[i].item+" "+" "+item_array[i].quantity+"X"+item_array[i].price+" "+" "+"="+total_amount
       card_body.append(p1_tag)
       card.append(card_body)
       
       
   }
  
   var button=document.createElement('button')
   button.innerText="Genarate Bill"
   button.setAttribute('id','generate_bill')
   button.setAttribute('class','btn btn-success')
   card.append(button)
   res.append(card)

})

function bill_generate()
{
    
        var res=document.getElementById('res')
        var ordered_item=localStorage.getItem('ordered_item')
       var item_array=JSON.parse(ordered_item)||[]
       //console.log(item_array)
       var bill_amount=0,total_amount=0
       var div=document.createElement('div')
       div.setAttribute('class','card bill offset-3')
       div.style.width="250px"

       for(i=0;i<item_array.length;i++)
       {
            var total=Number(item_array[i].quantity)*Number(item_array[i].price)
            total_amount+=total
            
       }
          var total_value=document.createElement('p')
          total_value.textContent="Total Amount"+" "+"="+" "+total_amount
           //console.log(total_amount)
           
           var gst=total_amount*0.14
            //console.log(gst)
            var gst_value=document.createElement('p')
            gst_value.textContent="GST Value"+" "+"="+gst
            bill_amount=total_amount+gst
            //console.log(bill_amount)
            var bill_details=document.createElement('p')
            bill_details.textContent="Total Bill"+" " +"="+" "+bill_amount
            div.append(total_value,gst_value,bill_details)
            res.appendChild(div)
            localStorage.removeItem('ordered_item')
    
}

window.onload=function()
{
var generate_bill=document.getElementById('generate_bill')
generate_bill.addEventListener('click',bill_generate)
}

