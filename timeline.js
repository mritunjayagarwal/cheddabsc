$(document).ready(function() {
    $timelineExpandableTitle = $('.timeline-action.is-expandable .title');
    
    $($timelineExpandableTitle).attr('tabindex', '0');
    
    // Give timelines ID's
    $('.timeline').each(function(i, $timeline) {
      var $timelineActions = $($timeline).find('.timeline-action.is-expandable');
      
      $($timelineActions).each(function(j, $timelineAction) {
        var $milestoneContent = $($timelineAction).find('.content');
        
        $($milestoneContent).attr('id', 'timeline-' + i + '-milestone-content-' + j).attr('role', 'region');
        $($milestoneContent).attr('aria-expanded', $($timelineAction).hasClass('expanded'));
        
        $($timelineAction).find('.title').attr('aria-controls', 'timeline-' + i + '-milestone-content-' + j);
      });
    });
    
    $($timelineExpandableTitle).click(function() {
      $(this).parent().toggleClass('is-expanded');
      $(this).siblings('.content').attr('aria-expanded', $(this).parent().hasClass('is-expanded'));
    });
    
    // Expand or navigate back and forth between sections
    $($timelineExpandableTitle).keyup(function(e) {
      if (e.which == 13){ //Enter key pressed
        $(this).click();
      } else if (e.which == 37 ||e.which == 38) { // Left or Up
        $(this).closest('.timeline-milestone').prev('.timeline-milestone').find('.timeline-action .title').focus();
      } else if (e.which == 39 ||e.which == 40) { // Right or Down
        $(this).closest('.timeline-milestone').next('.timeline-milestone').find('.timeline-action .title').focus();
      }
    });
  });   
  
  
  // ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });