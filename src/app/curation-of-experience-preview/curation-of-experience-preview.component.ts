import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-curation-of-experience-preview',
  templateUrl: './curation-of-experience-preview.component.html',
  styleUrls: ['./curation-of-experience-preview.component.css']
})
export class CurationOfExperiencePreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( function() {
      $('.ui-datepicker').css('width','100%');
      $( "#datepicker" ).datepicker({
               uiLibrary: 'bootstrap4',
                 multidate: true,
        });
    });
    
    $('.carousel[data-type="multi"] .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    
        for (var i = 0; i < 2; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
    
          next.children(':first-child').clone().appendTo($(this));
        }
      });
    
      $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
      });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3,
                nav:true
            },
    
        }
    });
    
    $('.owl-carousel-2').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4,
                nav:true
            },
    
        }
    })
  }

}
