$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });
    
    // Or with jQuery
    
    $(document).ready(function(){
        $('.sidenav').sidenav();
    });
});

// -------------------------------===========-------------------------------

$(function(){
	let Catalog_max__pro__ul_link = document.querySelectorAll('.categories__filter__link');
  
	for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
		Catalog_max__pro__ul_link[i].addEventListener('click',function(){
			for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
				Catalog_max__pro__ul_link[j].classList.remove('active');
			}
			this.classList.add('active');
  
		})
	}
});

// -------------------------------===========-------------------------------

$(document).ready(function(){
	const header = document.querySelector('header');
	window.onscroll=()=>{
		if (window.pageYOffset > 80) {
			header.classList.add('header__active');
			$('.header__active').fadeTo(1000,1);
		} else{
			header.classList.remove('header__active');
			$('.header__active').fadeTo(1000,1);
		}
	}
});

// -------------------------------===========-------------------------------