(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("33a3bc7c-26f3-4f1f-aaf7-e7fc9c38f467");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '33a3bc7c-26f3-4f1f-aaf7-e7fc9c38f467' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"b89f067a-7084-44c3-9337-c67aa3f9dfdd":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"38507","type":"HoverTool"},{"attributes":{},"id":"38506","type":"SaveTool"},{"attributes":{"overlay":{"id":"38509"}},"id":"38504","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"38471","type":"HoverTool"},{"attributes":{},"id":"38505","type":"UndoTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"38526","type":"Span"},{"attributes":{},"id":"38570","type":"Selection"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"38540","type":"Span"},{"attributes":{},"id":"38470","type":"SaveTool"},{"attributes":{},"id":"38469","type":"UndoTool"},{"attributes":{"text":"mu"},"id":"38545","type":"Title"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"38541","type":"Scatter"},{"attributes":{},"id":"38571","type":"UnionRenderers"},{"attributes":{},"id":"38465","type":"PanTool"},{"attributes":{"data_source":{"id":"38542"},"glyph":{"id":"38541"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"38544"}},"id":"38543","type":"GlyphRenderer"},{"attributes":{},"id":"38467","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"38474"},{"id":"38510"}],"tools":[{"id":"38464"},{"id":"38465"},{"id":"38466"},{"id":"38467"},{"id":"38468"},{"id":"38469"},{"id":"38470"},{"id":"38471"},{"id":"38500"},{"id":"38501"},{"id":"38502"},{"id":"38503"},{"id":"38504"},{"id":"38505"},{"id":"38506"},{"id":"38507"}]},"id":"38576","type":"ProxyToolbar"},{"attributes":{},"id":"38548","type":"BasicTickFormatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"38572"},"selection_policy":{"id":"38573"}},"id":"38542","type":"ColumnDataSource"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"38551"},"major_label_policy":{"id":"38552"},"ticker":{"id":"38461"}},"id":"38460","type":"LinearAxis"},{"attributes":{"source":{"id":"38542"}},"id":"38544","type":"CDSView"},{"attributes":{"overlay":{"id":"38473"}},"id":"38468","type":"LassoSelectTool"},{"attributes":{},"id":"38549","type":"AllLabels"},{"attributes":{"data_source":{"id":"38519"},"glyph":{"id":"38520"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38521"},"view":{"id":"38523"}},"id":"38522","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"38531","type":"Title"},{"attributes":{},"id":"38461","type":"BasicTicker"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"38539","type":"Span"},{"attributes":{"data_source":{"id":"38533"},"glyph":{"id":"38534"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38535"},"view":{"id":"38537"}},"id":"38536","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"38472"}},"id":"38466","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38508","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"38525","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38534","type":"Circle"},{"attributes":{},"id":"38572","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38570"},"selection_policy":{"id":"38571"}},"id":"38533","type":"ColumnDataSource"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"38558"},"selection_policy":{"id":"38559"}},"id":"38528","type":"ColumnDataSource"},{"attributes":{"source":{"id":"38528"}},"id":"38530","type":"CDSView"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"38527","type":"Scatter"},{"attributes":{"data_source":{"id":"38528"},"glyph":{"id":"38527"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"38530"}},"id":"38529","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38548"},"major_label_policy":{"id":"38549"},"ticker":{"id":"38457"}},"id":"38456","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38509","type":"PolyAnnotation"},{"attributes":{},"id":"38573","type":"UnionRenderers"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"38524","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38472","type":"BoxAnnotation"},{"attributes":{"end":1,"start":-0.05},"id":"38450","type":"DataRange1d"},{"attributes":{},"id":"38551","type":"BasicTickFormatter"},{"attributes":{},"id":"38464","type":"ResetTool"},{"attributes":{},"id":"38500","type":"ResetTool"},{"attributes":{"axis":{"id":"38460"},"dimension":1,"ticker":null},"id":"38463","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38473","type":"PolyAnnotation"},{"attributes":{},"id":"38552","type":"AllLabels"},{"attributes":{"below":[{"id":"38492"}],"center":[{"id":"38495"},{"id":"38499"}],"height":500,"left":[{"id":"38496"}],"output_backend":"webgl","renderers":[{"id":"38536"},{"id":"38538"},{"id":"38539"},{"id":"38540"},{"id":"38543"}],"title":{"id":"38545"},"toolbar":{"id":"38510"},"toolbar_location":null,"width":500,"x_range":{"id":"38484"},"x_scale":{"id":"38488"},"y_range":{"id":"38486"},"y_scale":{"id":"38490"}},"id":"38483","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"38456"}],"center":[{"id":"38459"},{"id":"38463"}],"height":500,"left":[{"id":"38460"}],"output_backend":"webgl","renderers":[{"id":"38522"},{"id":"38524"},{"id":"38525"},{"id":"38526"},{"id":"38529"}],"title":{"id":"38531"},"toolbar":{"id":"38474"},"toolbar_location":null,"width":500,"x_range":{"id":"38448"},"x_scale":{"id":"38452"},"y_range":{"id":"38450"},"y_scale":{"id":"38454"}},"id":"38447","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"38556","type":"Selection"},{"attributes":{"children":[[{"id":"38447"},0,0],[{"id":"38483"},0,1]]},"id":"38575","type":"GridBox"},{"attributes":{},"id":"38562","type":"BasicTickFormatter"},{"attributes":{},"id":"38484","type":"DataRange1d"},{"attributes":{},"id":"38557","type":"UnionRenderers"},{"attributes":{},"id":"38448","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"38500"},{"id":"38501"},{"id":"38502"},{"id":"38503"},{"id":"38504"},{"id":"38505"},{"id":"38506"},{"id":"38507"}]},"id":"38510","type":"Toolbar"},{"attributes":{},"id":"38563","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38535","type":"Circle"},{"attributes":{"source":{"id":"38519"}},"id":"38523","type":"CDSView"},{"attributes":{"toolbar":{"id":"38576"},"toolbar_location":"above"},"id":"38577","type":"ToolbarBox"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"38538","type":"Span"},{"attributes":{"children":[{"id":"38577"},{"id":"38575"}]},"id":"38578","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38556"},"selection_policy":{"id":"38557"}},"id":"38519","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"38464"},{"id":"38465"},{"id":"38466"},{"id":"38467"},{"id":"38468"},{"id":"38469"},{"id":"38470"},{"id":"38471"}]},"id":"38474","type":"Toolbar"},{"attributes":{"source":{"id":"38533"}},"id":"38537","type":"CDSView"},{"attributes":{},"id":"38558","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38520","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38521","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38562"},"major_label_policy":{"id":"38563"},"ticker":{"id":"38493"}},"id":"38492","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"38486","type":"DataRange1d"},{"attributes":{},"id":"38457","type":"BasicTicker"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"38565"},"major_label_policy":{"id":"38566"},"ticker":{"id":"38497"}},"id":"38496","type":"LinearAxis"},{"attributes":{},"id":"38559","type":"UnionRenderers"},{"attributes":{},"id":"38488","type":"LinearScale"},{"attributes":{},"id":"38565","type":"BasicTickFormatter"},{"attributes":{},"id":"38490","type":"LinearScale"},{"attributes":{},"id":"38503","type":"WheelZoomTool"},{"attributes":{},"id":"38454","type":"LinearScale"},{"attributes":{},"id":"38493","type":"BasicTicker"},{"attributes":{"axis":{"id":"38492"},"ticker":null},"id":"38495","type":"Grid"},{"attributes":{},"id":"38566","type":"AllLabels"},{"attributes":{"axis":{"id":"38456"},"ticker":null},"id":"38459","type":"Grid"},{"attributes":{"axis":{"id":"38496"},"dimension":1,"ticker":null},"id":"38499","type":"Grid"},{"attributes":{},"id":"38497","type":"BasicTicker"},{"attributes":{},"id":"38501","type":"PanTool"},{"attributes":{},"id":"38452","type":"LinearScale"},{"attributes":{"overlay":{"id":"38508"}},"id":"38502","type":"BoxZoomTool"}],"root_ids":["38578"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"b89f067a-7084-44c3-9337-c67aa3f9dfdd","root_ids":["38578"],"roots":{"38578":"33a3bc7c-26f3-4f1f-aaf7-e7fc9c38f467"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();