 //Begin bedroom tab function
        $('#bedroom-tab div.bedroom-item').eq(0).addClass('active')
        $('#dedroom-tab-content-wrap div.dedroom-tab-content').hide()
        $('#dedroom-tab-content-wrap div.dedroom-tab-content').eq(0).show()
        
        $('#bedroom-tab div.bedroom-item').each(function(i){
            $(this).click(function(){
                
                if( $(this).hasClass('active') ) return false
                
                else{
                    $('#bedroom-tab div.bedroom-item').removeClass('active')
                    $(this).addClass('active')
                    $('#dedroom-tab-content-wrap div.dedroom-tab-content').hide()
                    $('#dedroom-tab-content-wrap div.dedroom-tab-content').eq(i).show()
                    
                }
            })
        })
