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
    
      
      
    
      var element = document.getElementById("c446749c-fc3b-4819-85b0-1cac1b1a93d0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c446749c-fc3b-4819-85b0-1cac1b1a93d0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"897ed705-f103-4ca9-88c6-9e9a3c61584c":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"19108"},"ticker":null},"id":"19111","type":"Grid"},{"attributes":{},"id":"19122","type":"SaveTool"},{"attributes":{"overlay":{"id":"19125"}},"id":"19120","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"19157"},{"id":"19155"}]},"id":"19158","type":"Column"},{"attributes":{"source":{"id":"19135"}},"id":"19139","type":"CDSView"},{"attributes":{},"id":"19148","type":"AllLabels"},{"attributes":{},"id":"19119","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"19108"}],"center":[{"id":"19111"},{"id":"19115"}],"height":500,"left":[{"id":"19112"}],"output_backend":"webgl","renderers":[{"id":"19138"},{"id":"19140"}],"title":{"id":"19141"},"toolbar":{"id":"19126"},"toolbar_location":null,"width":500,"x_range":{"id":"19100"},"x_scale":{"id":"19104"},"y_range":{"id":"19102"},"y_scale":{"id":"19106"}},"id":"19099","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19113","type":"BasicTicker"},{"attributes":{},"id":"19152","type":"Selection"},{"attributes":{},"id":"19104","type":"LinearScale"},{"attributes":{"axis":{"id":"19112"},"dimension":1,"ticker":null},"id":"19115","type":"Grid"},{"attributes":{},"id":"19100","type":"DataRange1d"},{"attributes":{},"id":"19153","type":"UnionRenderers"},{"attributes":{"text":"sigma"},"id":"19141","type":"Title"},{"attributes":{},"id":"19102","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19124","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19136","type":"Circle"},{"attributes":{},"id":"19144","type":"BasicTickFormatter"},{"attributes":{},"id":"19145","type":"AllLabels"},{"attributes":{},"id":"19117","type":"PanTool"},{"attributes":{"overlay":{"id":"19124"}},"id":"19118","type":"BoxZoomTool"},{"attributes":{},"id":"19106","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19137","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"19144"},"major_label_policy":{"id":"19145"},"ticker":{"id":"19109"}},"id":"19108","type":"LinearAxis"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"19147"},"major_label_policy":{"id":"19148"},"ticker":{"id":"19113"}},"id":"19112","type":"LinearAxis"},{"attributes":{},"id":"19116","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"19152"},"selection_policy":{"id":"19153"}},"id":"19135","type":"ColumnDataSource"},{"attributes":{},"id":"19121","type":"UndoTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19125","type":"PolyAnnotation"},{"attributes":{},"id":"19147","type":"BasicTickFormatter"},{"attributes":{},"id":"19109","type":"BasicTicker"},{"attributes":{"callback":null},"id":"19123","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"19126"}],"tools":[{"id":"19116"},{"id":"19117"},{"id":"19118"},{"id":"19119"},{"id":"19120"},{"id":"19121"},{"id":"19122"},{"id":"19123"}]},"id":"19156","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"19135"},"glyph":{"id":"19136"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19137"},"view":{"id":"19139"}},"id":"19138","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"19099"},0,0]]},"id":"19155","type":"GridBox"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"19140","type":"Span"},{"attributes":{"active_multi":null,"tools":[{"id":"19116"},{"id":"19117"},{"id":"19118"},{"id":"19119"},{"id":"19120"},{"id":"19121"},{"id":"19122"},{"id":"19123"}]},"id":"19126","type":"Toolbar"},{"attributes":{"toolbar":{"id":"19156"},"toolbar_location":"above"},"id":"19157","type":"ToolbarBox"}],"root_ids":["19158"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"897ed705-f103-4ca9-88c6-9e9a3c61584c","root_ids":["19158"],"roots":{"19158":"c446749c-fc3b-4819-85b0-1cac1b1a93d0"}}];
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