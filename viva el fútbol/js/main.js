// $('.carousel').carousel({
//     interval: 5000
//   });


// FORM!
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// codigo eze:
// function gtag_report_conversion(url) {
//   var callback = function () {
//    if (typeof(url) != ‘undefined’) {
//     window.location = url;
//    }
//   };
//   gtag(‘event’, ‘conversion’, {
//     ‘send_to’: ‘AW-670709830/I7FbCJP27b8BEMbw6L8C’,
//     ‘event_callback’: callback
//   });
//   return false;
//  }

// $(document).ready(function(e)
// {
//   $('#btn-formulario').on('click', function(e) {
//     e.preventDefault();
//     permiteContinuar = true;
// 			$('.needs-validation input').each(function(i, e)
// 			{
// 				if($(e).attr('required')) {
// 					if($(e).val() == undefined || $(e).val() == "") {
// 						//$(e).parent().find('.invalid-feedback').removeClass('hidden');
//             $(e).parent().find('.form-control').addClass('has-error');
//             permiteContinuar = false;
// 					} else {
// 						//$(e).parent().find('.invalid-feedback').addClass('hidden');
// 						$(e).parent().find('.form-control').removeClass('has-error');
// 					}
// 				}
// 			});
//       if (permiteContinuar == true){
//         // funcion que muestre el modal function mostrarmodal()
//         $('.needs-validation').submit();
//       }
// 		});
// 	});




// ALERT FORM
//  $(".boton-form").click(function(){
//    alert(" Gracias ! En breve nos comunicamos, que VIVA EL FUTBOL");
//  });

// Alert form
// $(".boton-form").click(function () {
//   if('needs-validation' == true) {
//   alert(" Gracias ! En breve nos comunicamos, que VIVA EL FUTBOL");
//   }
// });


// TABS (cambio de imgs al click)
function cambioImgs(evt, imgs) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("img-celu-torneos");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(imgs).style.display = "block";
  evt.currentTarget.className += " active";
}