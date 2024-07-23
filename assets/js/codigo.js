$(document).ready(function() {
    var habilidadesBlandas = [
        "Trabajo en Equipo",
        "Liderazgo",
        "Visión Estratégica",
        "Visión de Procesos",
        "Comunicación",
        "Negociación"
    ];
    var habilidadesTecnicas = [
        "HTML",
        "JAVASCRIPT",
        "JQUERY",
        "GIT",
        "MONGODB",
        "MYSQL",
        "ANGULAR (MATERIAL)",
        
    ];
    habilidadesBlandas.forEach(function(habilidad) {
        $("#habilidades-blandas").append("<li>" + habilidad + "</li>");
    });
    habilidadesTecnicas.forEach(function(habilidad) {
        $("#habilidades-tecnicas").append("<li>" + habilidad + "</li>");
    });
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<button class='owl-prev'>&#9664;</button>", "<button class='owl-next'>&#9654;</button>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('#contact').hide();
	
    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
        
	});
        
    $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',
    
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
   
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        var name = $('#name').val();
        $('.modal-body').html('<p>' + name + ', la información ha sido enviada.</p>');
        $('#modalmensaje').modal('show');
        $('#contactForm')[0].reset();
        $('#contact').hide();
    });
    $('#callform').click(function(){
        $('#contact').show();
     });
    $('#closeform').click(function(){
        $('#contact').hide();
     }); 
    $('#callnav').click(function(){
        $('#contact').show();
    });      

});