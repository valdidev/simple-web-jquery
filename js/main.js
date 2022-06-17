$(document).ready(function () {
    //Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }
    //Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de título 1',
                date: 'Publicado: '+moment().format("D MMMM YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque ornare maximus augue quis faucibus. Integer vitae sagittis felis. Aliquam ut consectetur diam. Curabitur eu tellus condimentum, eleifend nisl velaccumsan orci. Integer sem leo, venenatis ac porttitor nec, commodo eget lectus. Aenean eget ligula eget libero consectetur pretium vel nec nulla. Phasellus aliquet mi id quam pretium tincidunt. Quisque scelerisque, elit vel auctor volutpat, erat ligula feugiat orci, sed vulputate libero dolor vitae purus. Ut suscipit mattis consectetur. Quisque iaculis lobortis est, eget ornare arcu tristique at. Maecenas at fermentum sem. Pellentesque faucibus orci at urna pellentesque, sit amet dapibus nunc sagittis."
            },
            {
                title: 'Prueba de título 2',
                date: 'Publicado: '+moment().format("D MMMM YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque ornare maximus augue quis faucibus. Integer vitae sagittis felis. Aliquam ut consectetur diam. Curabitur eu tellus condimentum, eleifend nisl velaccumsan orci. Integer sem leo, venenatis ac porttitor nec, commodo eget lectus. Aenean eget ligula eget libero consectetur pretium vel nec nulla. Phasellus aliquet mi id quam pretium tincidunt. Quisque scelerisque, elit vel auctor volutpat, erat ligula feugiat orci, sed vulputate libero dolor vitae purus. Ut suscipit mattis consectetur. Quisque iaculis lobortis est, eget ornare arcu tristique at. Maecenas at fermentum sem. Pellentesque faucibus orci at urna pellentesque, sit amet dapibus nunc sagittis."
            },
            {
                title: 'Prueba de título 3',
                date: 'Publicado: '+moment().format("D MMMM YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque ornare maximus augue quis faucibus. Integer vitae sagittis felis. Aliquam ut consectetur diam. Curabitur eu tellus condimentum, eleifend nisl velaccumsan orci. Integer sem leo, venenatis ac porttitor nec, commodo eget lectus. Aenean eget ligula eget libero consectetur pretium vel nec nulla. Phasellus aliquet mi id quam pretium tincidunt. Quisque scelerisque, elit vel auctor volutpat, erat ligula feugiat orci, sed vulputate libero dolor vitae purus. Ut suscipit mattis consectetur. Quisque iaculis lobortis est, eget ornare arcu tristique at. Maecenas at fermentum sem. Pellentesque faucibus orci at urna pellentesque, sit amet dapibus nunc sagittis."
            },
            {
                title: 'Prueba de título 4',
                date: 'Publicado: '+moment().format("D MMMM YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque ornare maximus augue quis faucibus. Integer vitae sagittis felis. Aliquam ut consectetur diam. Curabitur eu tellus condimentum, eleifend nisl velaccumsan orci. Integer sem leo, venenatis ac porttitor nec, commodo eget lectus. Aenean eget ligula eget libero consectetur pretium vel nec nulla. Phasellus aliquet mi id quam pretium tincidunt. Quisque scelerisque, elit vel auctor volutpat, erat ligula feugiat orci, sed vulputate libero dolor vitae purus. Ut suscipit mattis consectetur. Quisque iaculis lobortis est, eget ornare arcu tristique at. Maecenas at fermentum sem. Pellentesque faucibus orci at urna pellentesque, sit amet dapibus nunc sagittis."
            },
            {
                title: 'Prueba de título 5',
                date: 'Publicado: '+moment().format("D MMMM YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque ornare maximus augue quis faucibus. Integer vitae sagittis felis. Aliquam ut consectetur diam. Curabitur eu tellus condimentum, eleifend nisl velaccumsan orci. Integer sem leo, venenatis ac porttitor nec, commodo eget lectus. Aenean eget ligula eget libero consectetur pretium vel nec nulla. Phasellus aliquet mi id quam pretium tincidunt. Quisque scelerisque, elit vel auctor volutpat, erat ligula feugiat orci, sed vulputate libero dolor vitae purus. Ut suscipit mattis consectetur. Quisque iaculis lobortis est, eget ornare arcu tristique at. Maecenas at fermentum sem. Pellentesque faucibus orci at urna pellentesque, sit amet dapibus nunc sagittis."
            },
            {
                title: 'Prueba de título 6',
                date: 'Publicado: '+moment().format("D MMMM YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque ornare maximus augue quis faucibus. Integer vitae sagittis felis. Aliquam ut consectetur diam. Curabitur eu tellus condimentum, eleifend nisl velaccumsan orci. Integer sem leo, venenatis ac porttitor nec, commodo eget lectus. Aenean eget ligula eget libero consectetur pretium vel nec nulla. Phasellus aliquet mi id quam pretium tincidunt. Quisque scelerisque, elit vel auctor volutpat, erat ligula feugiat orci, sed vulputate libero dolor vitae purus. Ut suscipit mattis consectetur. Quisque iaculis lobortis est, eget ornare arcu tristique at. Maecenas at fermentum sem. Pellentesque faucibus orci at urna pellentesque, sit amet dapibus nunc sagittis."
            },
            ];

            posts.forEach((item, index) => {
                var post = `
                    <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                        ${item.content}
                        </p>
                        <a href="#" class="read-more">Leer más</a>
                    </article>
                `;

            $('#posts').append(post);
        });
    }
    
    //Selector de temas
    var theme = $('#theme');
    $('#to-green').click(function() {
        theme.attr('href', 'css/green.css');
    });
    $('#to-red').click(function() {
        theme.attr('href', 'css/red.css');
    });
    $('#to-blue').click(function() {
        theme.attr('href', 'css/blue.css');
    });

    //Scroll back to top
    $('.back-to-top').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem("form_name", form_name);
    });
    
    var form_name = localStorage.getItem("form_name");
    
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $('#about p');

        about_parrafo.html("<strong>Bienvenido, </strong>"+form_name+"<a href='#' id='logout'>Cerrar sesión</a>");
        //about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $('#login').hide();

        $('#logout').click(function() {
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon
    if(window.location.href.indexOf('about-me') > -1){
        $('#acordeon').accordion();
    }

    //Reloj
    if(window.location.href.indexOf('watch') > -1){
        setInterval(function () {
            var watch = moment().format('LTS');
            $('#watch').html(watch);
        }, 1000);
        
    }
    
    //Validación del formulario de contacto
    if(window.location.href.indexOf('contact') > -1){
        
        $("form input[name='birth-date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
})