var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var HubSpotJsControl=new function(){this.blogs={};this.openBlogPostOverlay=function(a){$.get("/ajax/getHubSpotBlogPostOverlay/"+a+"/",function(b){parseResponse(b);if(responseArray.code=="0"){var c=$("#hubspot-blog-post-overlay");if(c.length){c.replaceWith(responseArray.html)}else{$("body").append(responseArray.html)}$("#hubspot-blog-post-overlay").modal()}else{displayFeedback("1"+responseArray.json.error)}})};this.callAuthUI=function(b,a){window.open("/callHubSpotAuth/"+b+"/"+a,"openHSUserLogin","height=450,width=900,directories=no,menubar=yes,scrollbars=yes,status=no,toolbar=no")};this.publishPost=function(g,d,a,c,f,b){var e={};e.uid=d;e.mid=a;e.gid=c;e.title=f;e.caption=b;$.post("/ajax/publishHubSpotBlogPost/",e,function(h){parseResponse(h);if(responseArray.code=="0"){g.reset();var i=responseArray.json.postUrl;jsoBlogPostUIController.showUI3_PostSucceeded(i)}else{g.reset();jsoBlogPostUIController.showUI4_PostFailed()}})};this.savePostAsDraft=function(g,d,a,c,f,b){var e={};e.uid=d;e.mid=a;e.gid=c;e.title=f;e.caption=b;$.post("/ajax/saveHubSpotBlogPostAsDraft/",e,function(h){parseResponse(h);if(responseArray.code=="0"){g.reset();var i=responseArray.json.postUrl;jsoBlogPostUIController.showUI3_PostSucceeded(i)}else{g.reset();jsoBlogPostUIController.showUI4_PostFailed()}})}};window.callHubSpotAuthError=function(a){jsoBlogPostUIController.showUI6_AuthenticationRejected()};window.callHubSpotAuthSuccess=function(b,c){switch(b){case"blog_post":var d=$("#hubspot-blog-post-overlay");if(d.length){var a=c[0];var e=c[1];if(e.length>0){HubSpotJsControl.blogs=e;jsoBlogPostUIController.showUI2_Form(true)}else{jsoBlogPostUIController.showUI5_BlogNotFound()}}break;default:}};

}
/*
     FILE ARCHIVED ON 23:37:53 Sep 07, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:55:33 Feb 26, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 257.896
  exclusion.robots: 138.511
  exclusion.robots.policy: 138.503
  xauthn.identify: 87.556
  xauthn.chkprivs: 50.765
  RedisCDXSource: 4.382
  esindex: 0.005
  LoadShardBlock: 95.24 (3)
  PetaboxLoader3.datanode: 88.606 (5)
  CDXLines.iter: 17.687 (3)
  PetaboxLoader3.resolve: 157.608 (3)
  load_resource: 185.827 (2)
*/
