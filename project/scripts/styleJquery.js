$(function(){
        
    var barService = $('.barService');
    var sushiRolls = $('.sushiRolls');
    $('#changeToBar').on('click', function(){
        barService.css({
            opacity: 1,
            position: 'relative'
        });
        sushiRolls.css({
            opacity: 0,
            position: 'absolute'
        });
        $('#changeToBar').css({
            
        backgroundColor: "#6c4242",
        color: "#f5f5f5"});
        $('#changeToRolls').css({
            
            backgroundColor: "white",
            color: "#6c4242" 
        });
        
    })
    $('#changeToRolls').on('click', function(){
        barService.css({
            opacity: 0,
            position: 'absolute'
        });
        sushiRolls.css({
            opacity: 1,
            position: 'relative'
        });
        $('#changeToBar').css({
            
            backgroundColor: "white",
            color: "#6c4242" 
        })
        $('#changeToRolls').css({
            
        backgroundColor: "#6c4242",
        color: "#f5f5f5"
        })


    })
})
    
 
