window.onload =function(){
    window.onscroll=function(){
        if(window.scrollY > 0){
            // console.log("aaa");
            $("#nav").addClass("nav-active")
        }else{
            $("#nav").removeClass("nav-active")
        }
    }
    $(".navbar-nav a").click(function(){
            $(".navbar-toggler").click()
        })
}