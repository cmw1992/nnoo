$(function(){var e="up",a="down";$(window).scroll(function(){$(this).scrollTop()>=170?(a="down")!=e&&($(".header").addClass("fixed"),e=a):(a="up")!=e&&($(".header").removeClass("fixed"),e=a)})}),$(function(){$.get("playtv.m3u",function(e){var a="";$.each(parseM3U(e).tracks,function(e,t){var n=t.file.replace(/\.[^\.]+$/,".m3u8"),s=t.title,i=t.params["tvg-logo"],l=toSlug(t.params["group-title"]);a+='<div class="channels__item '+l+'" data-remodal-target="modal" data-link="'+n+'">',a+='<div class="channels__item-image"><img src="'+i+'" width="200" alt="'+s+'"></div>',a+='<h3 class="channels__item-title">'+s+"</h3>",a+="</div>"}),$(".channels__list").html(a),$(".channels__list").parents(".channels").addClass("loaded");var t=$(".channels__list").isotope({itemSelector:".channels__item",percentPosition:!0});t.imagesLoaded().progress(function(e,a){a.isLoaded?$(a.img).parent().addClass("loaded"):a.isLoaded||$(a.img).parent().addClass("not-loaded"),t.isotope("layout")}),$(".header__menu-list").on("click",".header__menu-item",function(e){e.preventDefault();var a=$(this).attr("data-filter");$(document.body).removeAttr("class"),$(document.body).addClass(a.substring(1)),$(".header__menu-item").removeClass("active"),$(this).addClass("active"),t.isotope({filter:a})}),$(".channels__list").on("click",".channels__item",function(e){var a=$(this).attr("data-link"),t=$(this).find("img").attr("src");new Clappr.Player({source:a,poster:t,width:"100%",height:"auto",autoPlay:!0,parentId:"#modal-content",disableVideoTagContextMenu:!0})}),$(document).on("closed",".modal",function(){$(".modal__content").html("")})})});