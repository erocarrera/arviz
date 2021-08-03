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
    
      
      
    
      var element = document.getElementById("4ec671c4-a6d6-432b-822f-f0e795898e00");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4ec671c4-a6d6-432b-822f-f0e795898e00' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d205806f-c8a9-4671-b1d8-1a2396e2bee4":{"defs":[],"roots":{"references":[{"attributes":{"toolbar":{"id":"15346"},"toolbar_location":"above"},"id":"15347","type":"ToolbarBox"},{"attributes":{},"id":"15334","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"15300"}],"center":[{"id":"15303"},{"id":"15307"}],"height":288,"left":[{"id":"15304"}],"output_backend":"webgl","renderers":[{"id":"15329"}],"title":{"id":"15331"},"toolbar":{"id":"15318"},"toolbar_location":null,"width":432,"x_range":{"id":"15292"},"x_scale":{"id":"15296"},"y_range":{"id":"15294"},"y_scale":{"id":"15298"}},"id":"15291","subtype":"Figure","type":"Plot"},{"attributes":{"text":"centered model - non centered model"},"id":"15331","type":"Title"},{"attributes":{"active_multi":null,"tools":[{"id":"15308"},{"id":"15309"},{"id":"15310"},{"id":"15311"},{"id":"15312"},{"id":"15313"},{"id":"15314"},{"id":"15315"}]},"id":"15318","type":"Toolbar"},{"attributes":{"axis":{"id":"15304"},"dimension":1,"ticker":null},"id":"15307","type":"Grid"},{"attributes":{},"id":"15311","type":"WheelZoomTool"},{"attributes":{},"id":"15338","type":"AllLabels"},{"attributes":{},"id":"15294","type":"DataRange1d"},{"attributes":{},"id":"15301","type":"BasicTicker"},{"attributes":{},"id":"15335","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"15318"}],"tools":[{"id":"15308"},{"id":"15309"},{"id":"15310"},{"id":"15311"},{"id":"15312"},{"id":"15313"},{"id":"15314"},{"id":"15315"}]},"id":"15346","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"15291"},0,0]]},"id":"15345","type":"GridBox"},{"attributes":{},"id":"15314","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15317","type":"PolyAnnotation"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"15327","type":"Scatter"},{"attributes":{"formatter":{"id":"15334"},"major_label_policy":{"id":"15335"},"ticker":{"id":"15301"}},"id":"15300","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15315","type":"HoverTool"},{"attributes":{},"id":"15313","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15316","type":"BoxAnnotation"},{"attributes":{},"id":"15337","type":"BasicTickFormatter"},{"attributes":{},"id":"15342","type":"Selection"},{"attributes":{},"id":"15296","type":"LinearScale"},{"attributes":{},"id":"15308","type":"ResetTool"},{"attributes":{"overlay":{"id":"15317"}},"id":"15312","type":"LassoSelectTool"},{"attributes":{"overlay":{"id":"15316"}},"id":"15310","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"15347"},{"id":"15345"}]},"id":"15348","type":"Column"},{"attributes":{"axis":{"id":"15300"},"ticker":null},"id":"15303","type":"Grid"},{"attributes":{},"id":"15309","type":"PanTool"},{"attributes":{},"id":"15292","type":"DataRange1d"},{"attributes":{"data_source":{"id":"15328"},"glyph":{"id":"15327"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"15330"}},"id":"15329","type":"GlyphRenderer"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"15342"},"selection_policy":{"id":"15343"}},"id":"15328","type":"ColumnDataSource"},{"attributes":{},"id":"15305","type":"BasicTicker"},{"attributes":{"source":{"id":"15328"}},"id":"15330","type":"CDSView"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"15337"},"major_label_policy":{"id":"15338"},"ticker":{"id":"15305"}},"id":"15304","type":"LinearAxis"},{"attributes":{},"id":"15343","type":"UnionRenderers"},{"attributes":{},"id":"15298","type":"LinearScale"}],"root_ids":["15348"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"d205806f-c8a9-4671-b1d8-1a2396e2bee4","root_ids":["15348"],"roots":{"15348":"4ec671c4-a6d6-432b-822f-f0e795898e00"}}];
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