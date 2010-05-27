/*
  HAIRY BIEBER
  Bookmarklet, Firefox extension, and inline code to make the Web a friendly place:
  by injecting more BIEBER.

  by Kelly Sutton <http://michaelkellysutton.com

  Original by Greg Leuch <http://www.gleuch.com>

  MIT License - http://creativecommons.org/licenses/MIT

  ------------------------------------------------------------------------------------
 
*/


Array.prototype.in_array = function(p_val, sensitive) {for(var i = 0, l = this.length; i < l; i++) {if ((sensitive && this[i] == p_val) || (!sensitive && this[i].toLowerCase() == p_val.toLowerCase())) {return true;}} return false;};
function rgb2hex(rgb) {rgb = rgb.replace(/\s/g, "").replace(/^(rgb\()(\d+),(\d+),(\d+)(\))$/, "$2|$3|$4").split("|"); return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);} 
function hex(x) {var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8","9", "A", "B", "C", "D", "E", "F"); return isNaN(x) ? "00" : hexDigits[(x-x%16)/16] + hexDigits[x%16];}

var $_ = false, $shaved_bieber = document.createElement('script'), local = true;
$shaved_bieber.src = 'http://assets.gleuch.com/jquery-latest.js';
$shaved_bieber.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild($shaved_bieber);

function shaved_bieber_wait() {
  if ((local && typeof(jQuery) == 'undefined') || (!local && typeof(unsafeWindow.jQuery) == 'undefined')) {
    window.setTimeout(shaved_bieber_wait,100);
  } else {
    shaved_bieber_start(local ? jQuery : unsafeWindow.jQuery);
  }
}

function shaved_bieber_start($_) {
  $_.fn.reverse = function(){return this.pushStack(this.get().reverse(), arguments);};

  (function($_) {
    var celeb_match = /tom\scruise|rolling\sstones|oprah\swinfrey|u2|tiger\swoods|steven\sspielberg|howard\sstern|50\scent|cast\sof\sthe\ssopranos|dan\sbrown|bruce\sspringsteen|don(ald)?\strump|muhammad\sali|paul\smccartney|george\slucas|elton\sjohn|david\sletterman|phil\smickelson|j.k.\srowling|brad\spitt|peter\sjackson|phil\smcgraw|jay\sleno|celine\sdion|kobe\sbryant|michael\sjordan|johnny\sdepp|jerry\sseinfeld|simon\scowell|michael\sschumacher|tom\shanks|rush\slimbaugh|denzel\swashington|jennifer\saniston|angelina\sjolie|nicole\skidman|rod\sstewart|shaquille\so'neal|jerry\sbruckheimer|david\sbeckham|jessica\ssimpson|andrew\slloyd\swebber|lebron\sjames|neil\sdiamond|alex\srodriguez|will\ssmith|dick\swolf|dave\smatthews|tom\sbrady|ronaldinho|jodie\sfoster|ray\sromano|paris\shilton|adam\ssandler|derek\sjeter|jennifer\slopez|rick\swarren|scarlett\sjohansson|katie\scouric|maria\ssharapova|valentino\srossi|halle\sberry|james\spatterson|leonardo\sdicaprio|kiefer\ssutherland|jim\scarrey|cameron\sdiaz|gisele\sbundchen|renee\szellweger|carson\spalmer|michelle\swie|reese\switherspoon|bill\so'reilly|kate\smoss|diane\ssawyer|sean\scombs|john\sgrisham|rachael\sray|dave\schappelle|tyra\sbanks|george\slopez|regis\sphilbin|serena\swilliams|ryan\sseacrest|wolfgang\spuck|venus\swilliams|annika\ssorenstam|matthew\sbroderick|mel\sbrooks|emeril\slagasse|nicole\srichie|heidi\sklum|mario\sbatali|eric\sidle|adriana\slima|ty\spennington|matt|hew\sperry|the\solsen\stwins|larry\sthe\scable\sguy|nathan\slane|heidi\smontag|perez\shilton|anne\scoulter|michelle\sbachman|rand\spaul|vanessa\shudgens|(meghan|meagan)\sfox|bret\smichaels|lee\sdwyze|conan\so'bri(e|a)n|bernie\smadoff|annie\sleibowitz|uma\sthurman|martin\sscorcese|ken\sstarr|jenny\shumphrey|taylor\smomsen|charles\smanson|christina\saguilera|simon\scowell|ozzy\sosbourne|jesse\sjames|john\stravolta|kelly\spreston|robert\spattinson|mariah\scarey|tyler\sperry|taylor\sswift|demi\slovato|joe\sjonas|kevin\sjonas|nick\sjonas/img;
    
    $_.shaved_bieber = function(data, c) {
      if (!$_.shaved_bieber.settings.finish) $_.shaved_bieber.init();
      $_(data).shaved_bieber(c);
      if (!$_.shaved_bieber.settings.finish) $_.shaved_bieber.finish();
    };
 
    $_.fn.shaved_bieber = function(c) {
      return this.filter(function() {return $_.shaved_bieber.filter(this);}).each(function() {$_.shaved_bieber.shave(this, c);});
    };

    $_.extend($_.shaved_bieber, {
      settings : {hide_bg : false, search: celeb_match, replace: 'JUSTIN BIEBER', starred: '****** ******', init : false, finish : false},

      pluck : function(str) {return str.replace(celeb_match, 'JUSTIN BIEBER');},

      filter : function(self) {
        if (self.nodeType == 1) {
          var tag = self.tagName.toLowerCase();
          return !(self.className.match('shaved_bieber') || tag == 'head' || tag == 'img' || tag == 'textarea' || tag == 'option', tag == 'script');
        } else {
          return true;
        }
      },

      shave : function(self, c) {
        $_(self).css({'text-shadow' : 'none'});

        if (self.nodeType == 3) {
          if (self.nodeValue.replace(/\s/ig, '') != '') {
            if (!c) c = $_(self).parent() ? $_(self).parent().css('color') : '#000000';
            text = self.nodeValue.replace($_.shaved_bieber.settings.search, $_.shaved_bieber.settings.replace.replace(/\%C/mg, c) );
            $_(self).after(text);
            self.nodeValue = '';
          }
        } else if (self.nodeType == 1) {
          c = rgb2hex($_(self).css('color'));
          if ($_(self).children().length > 0) {
            $_.shaved_bieber($_(self).contents(), c);
          } else if ($_(self).children().length == 0) {
            text = $_(self).html().replace($_.shaved_bieber.settings.search, $_.shaved_bieber.settings.replace.replace(/\%C/mg, c) );
            $_(self).html(text);
          }
        }
      },

      init : function() {
        $_.shaved_bieber.settings.init = true;
      },

      finish : function() {
        $_(document).each(function() {this.title = $_.shaved_bieber.pluck(this.title);});

        $_('input[type=text]').each(function() {if ($_(this).val().match($_.shaved_bieber.settings.search) ) $_(this).val( $_.shaved_bieber.pluck($_(this).val()) );});
        $_('textarea, option').each(function() {if ($_(this).html().match($_.shaved_bieber.settings.search) ) $_(this).html( $_.shaved_bieber.pluck($_(this).html()) );});

        var s = document.createElement("style");
        s.innerHTML = ".shaved_bieber {font-size: inherit !important; "+ ($_.shaved_bieber.settings.hide_bg ? "background-image: none !important;" : "") +"} .bg_shaved_bieber {"+ ($_.shaved_bieber.settings.hide_bg ? "background-image: none !important;" : "") +"}";
        $_('head').append(s);

        $_.shaved_bieber.settings.finish = true;
      }
    });
  })($_);
  
  $_.shaved_bieber('html', '#000000');
}


if (typeof($_scruff) == 'undefined' || !$_scruff) {shaved_bieber_wait();}
