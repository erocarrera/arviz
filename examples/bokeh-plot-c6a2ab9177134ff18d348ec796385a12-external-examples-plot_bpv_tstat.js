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
    
      
      
    
      var element = document.getElementById("c2a743a7-6a3f-4d27-835c-fae4ba01c3af");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c2a743a7-6a3f-4d27-835c-fae4ba01c3af' but no matching script tag was found.")
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
                    
                  var docs_json = '{"847222a4-faa6-46b3-96a1-4a1b41db44c4":{"defs":[],"roots":{"references":[{"attributes":{},"id":"15944","type":"ResetTool"},{"attributes":{},"id":"16009","type":"Selection"},{"attributes":{"overlay":{"id":"15953"}},"id":"15948","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"15927"},0,0]]},"id":"16012","type":"GridBox"},{"attributes":{},"id":"15937","type":"BasicTicker"},{"attributes":{"source":{"id":"15989"}},"id":"15993","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"15985"},"selection_policy":{"id":"15986"}},"id":"15968","type":"ColumnDataSource"},{"attributes":{},"id":"15941","type":"BasicTicker"},{"attributes":{},"id":"15950","type":"SaveTool"},{"attributes":{},"id":"15986","type":"UnionRenderers"},{"attributes":{"line_alpha":0,"line_color":"#1f77b4","x":{"value":0},"y":{"value":0}},"id":"15969","type":"Line"},{"attributes":{},"id":"15932","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#2a2eec"},"size":{"value":6.0},"x":{"value":-1.135840820153207},"y":{"value":0}},"id":"15990","type":"Circle"},{"attributes":{"axis":{"id":"15940"},"dimension":1,"ticker":null},"id":"15943","type":"Grid"},{"attributes":{"below":[{"id":"15936"}],"center":[{"id":"15939"},{"id":"15943"},{"id":"15987"}],"height":500,"left":[{"id":"15940"}],"output_backend":"webgl","renderers":[{"id":"15966"},{"id":"15971"},{"id":"15992"}],"title":{"id":"15994"},"toolbar":{"id":"15954"},"toolbar_location":null,"width":500,"x_range":{"id":"15928"},"x_scale":{"id":"15932"},"y_range":{"id":"15930"},"y_scale":{"id":"15934"}},"id":"15927","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"15951","type":"HoverTool"},{"attributes":{"formatter":{"id":"15975"},"major_label_policy":{"id":"15976"},"ticker":{"id":"15937"}},"id":"15936","type":"LinearAxis"},{"attributes":{"source":{"id":"15968"}},"id":"15972","type":"CDSView"},{"attributes":{},"id":"15928","type":"DataRange1d"},{"attributes":{"overlay":{"id":"15952"}},"id":"15946","type":"BoxZoomTool"},{"attributes":{"active_multi":null,"tools":[{"id":"15944"},{"id":"15945"},{"id":"15946"},{"id":"15947"},{"id":"15948"},{"id":"15949"},{"id":"15950"},{"id":"15951"}]},"id":"15954","type":"Toolbar"},{"attributes":{"data_source":{"id":"15963"},"glyph":{"id":"15964"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15965"},"view":{"id":"15967"}},"id":"15966","type":"GlyphRenderer"},{"attributes":{},"id":"15934","type":"LinearScale"},{"attributes":{"data_source":{"id":"15989"},"glyph":{"id":"15990"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15991"},"view":{"id":"15993"}},"id":"15992","type":"GlyphRenderer"},{"attributes":{},"id":"15979","type":"AllLabels"},{"attributes":{},"id":"15930","type":"DataRange1d"},{"attributes":{},"id":"15976","type":"AllLabels"},{"attributes":{"source":{"id":"15963"}},"id":"15967","type":"CDSView"},{"attributes":{},"id":"16010","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"15954"}],"tools":[{"id":"15944"},{"id":"15945"},{"id":"15946"},{"id":"15947"},{"id":"15948"},{"id":"15949"},{"id":"15950"},{"id":"15951"}]},"id":"16013","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"16013"},"toolbar_location":"above"},"id":"16014","type":"ToolbarBox"},{"attributes":{},"id":"15975","type":"BasicTickFormatter"},{"attributes":{},"id":"15947","type":"WheelZoomTool"},{"attributes":{"line_color":"#2a2eec","x":{"field":"x"},"y":{"field":"y"}},"id":"15964","type":"Line"},{"attributes":{"label":{"value":"bpv=0.53"},"renderers":[{"id":"15971"}]},"id":"15988","type":"LegendItem"},{"attributes":{"items":[{"id":"15988"}]},"id":"15987","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15952","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"15968"},"glyph":{"id":"15969"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15970"},"view":{"id":"15972"}},"id":"15971","type":"GlyphRenderer"},{"attributes":{},"id":"15945","type":"PanTool"},{"attributes":{"data":{},"selected":{"id":"16009"},"selection_policy":{"id":"16010"}},"id":"15989","type":"ColumnDataSource"},{"attributes":{"text":"y / y","text_font_size":"15pt"},"id":"15994","type":"Title"},{"attributes":{},"id":"15978","type":"BasicTickFormatter"},{"attributes":{},"id":"15985","type":"Selection"},{"attributes":{},"id":"15984","type":"UnionRenderers"},{"attributes":{"axis":{"id":"15936"},"ticker":null},"id":"15939","type":"Grid"},{"attributes":{"children":[{"id":"16014"},{"id":"16012"}]},"id":"16015","type":"Column"},{"attributes":{},"id":"15949","type":"UndoTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"value":0},"y":{"value":0}},"id":"15970","type":"Line"},{"attributes":{"formatter":{"id":"15978"},"major_label_policy":{"id":"15979"},"ticker":{"id":"15941"}},"id":"15940","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15953","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"size":{"value":6.0},"x":{"value":-1.135840820153207},"y":{"value":0}},"id":"15991","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","x":{"field":"x"},"y":{"field":"y"}},"id":"15965","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"15983"},"selection_policy":{"id":"15984"}},"id":"15963","type":"ColumnDataSource"},{"attributes":{},"id":"15983","type":"Selection"}],"root_ids":["16015"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"847222a4-faa6-46b3-96a1-4a1b41db44c4","root_ids":["16015"],"roots":{"16015":"c2a743a7-6a3f-4d27-835c-fae4ba01c3af"}}];
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