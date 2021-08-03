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
    
      
      
    
      var element = document.getElementById("4ea28d02-396a-4c50-ab4d-4085a5ca5bbf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4ea28d02-396a-4c50-ab4d-4085a5ca5bbf' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7ef92e53-6eb9-4b94-9b24-e3f750ea00e8":{"defs":[],"roots":{"references":[{"attributes":{"text":"mu"},"id":"19027","type":"Title"},{"attributes":{},"id":"19040","type":"Selection"},{"attributes":{"callback":null},"id":"19004","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"19038"},"selection_policy":{"id":"19039"}},"id":"19016","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"18993"},"dimension":1,"ticker":null},"id":"18996","type":"Grid"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"19025","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19005","type":"BoxAnnotation"},{"attributes":{},"id":"19030","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19017","type":"Circle"},{"attributes":{},"id":"19038","type":"Selection"},{"attributes":{},"id":"19039","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19016"},"glyph":{"id":"19017"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19018"},"view":{"id":"19020"}},"id":"19019","type":"GlyphRenderer"},{"attributes":{},"id":"19002","type":"UndoTool"},{"attributes":{},"id":"19031","type":"AllLabels"},{"attributes":{},"id":"18990","type":"BasicTicker"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"19030"},"major_label_policy":{"id":"19031"},"ticker":{"id":"18990"}},"id":"18989","type":"LinearAxis"},{"attributes":{"children":[[{"id":"18980"},0,0]]},"id":"19043","type":"GridBox"},{"attributes":{"source":{"id":"19016"}},"id":"19020","type":"CDSView"},{"attributes":{"axis":{"id":"18989"},"ticker":null},"id":"18992","type":"Grid"},{"attributes":{},"id":"18987","type":"LinearScale"},{"attributes":{},"id":"18981","type":"DataRange1d"},{"attributes":{"overlay":{"id":"19006"}},"id":"19001","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"19044"},"toolbar_location":"above"},"id":"19045","type":"ToolbarBox"},{"attributes":{"active_multi":null,"tools":[{"id":"18997"},{"id":"18998"},{"id":"18999"},{"id":"19000"},{"id":"19001"},{"id":"19002"},{"id":"19003"},{"id":"19004"}]},"id":"19007","type":"Toolbar"},{"attributes":{},"id":"19041","type":"UnionRenderers"},{"attributes":{"source":{"id":"19022"}},"id":"19024","type":"CDSView"},{"attributes":{"below":[{"id":"18989"}],"center":[{"id":"18992"},{"id":"18996"}],"height":500,"left":[{"id":"18993"}],"output_backend":"webgl","renderers":[{"id":"19019"},{"id":"19023"},{"id":"19025"},{"id":"19026"}],"title":{"id":"19027"},"toolbar":{"id":"19007"},"toolbar_location":null,"width":500,"x_range":{"id":"18981"},"x_scale":{"id":"18985"},"y_range":{"id":"18983"},"y_scale":{"id":"18987"}},"id":"18980","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19018","type":"Circle"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"19033"},"major_label_policy":{"id":"19034"},"ticker":{"id":"18994"}},"id":"18993","type":"LinearAxis"},{"attributes":{"data_source":{"id":"19022"},"glyph":{"id":"19021"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"19024"}},"id":"19023","type":"GlyphRenderer"},{"attributes":{},"id":"18985","type":"LinearScale"},{"attributes":{"overlay":{"id":"19005"}},"id":"18999","type":"BoxZoomTool"},{"attributes":{},"id":"19033","type":"BasicTickFormatter"},{"attributes":{},"id":"19034","type":"AllLabels"},{"attributes":{},"id":"18994","type":"BasicTicker"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"19026","type":"Span"},{"attributes":{"children":[{"id":"19045"},{"id":"19043"}]},"id":"19046","type":"Column"},{"attributes":{},"id":"18983","type":"DataRange1d"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"19040"},"selection_policy":{"id":"19041"}},"id":"19022","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"19007"}],"tools":[{"id":"18997"},{"id":"18998"},{"id":"18999"},{"id":"19000"},{"id":"19001"},{"id":"19002"},{"id":"19003"},{"id":"19004"}]},"id":"19044","type":"ProxyToolbar"},{"attributes":{},"id":"19000","type":"WheelZoomTool"},{"attributes":{},"id":"18997","type":"ResetTool"},{"attributes":{},"id":"18998","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19006","type":"PolyAnnotation"},{"attributes":{},"id":"19003","type":"SaveTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"19021","type":"Scatter"}],"root_ids":["19046"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"7ef92e53-6eb9-4b94-9b24-e3f750ea00e8","root_ids":["19046"],"roots":{"19046":"4ea28d02-396a-4c50-ab4d-4085a5ca5bbf"}}];
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