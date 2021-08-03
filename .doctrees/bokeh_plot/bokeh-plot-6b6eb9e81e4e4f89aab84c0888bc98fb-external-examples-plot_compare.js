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
    
      
      
    
      var element = document.getElementById("f0d6c2d3-3c3e-433c-bd1c-470d578e6386");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f0d6c2d3-3c3e-433c-bd1c-470d578e6386' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8ac3398e-d29b-40cc-aeee-8cef25bb34a0":{"defs":[],"roots":{"references":[{"attributes":{},"id":"16081","type":"LinearScale"},{"attributes":{"overlay":{"id":"16101"}},"id":"16095","type":"BoxZoomTool"},{"attributes":{},"id":"16153","type":"Selection"},{"attributes":{},"id":"16099","type":"SaveTool"},{"attributes":{},"id":"16157","type":"Selection"},{"attributes":{"overlay":{"id":"16102"}},"id":"16097","type":"LassoSelectTool"},{"attributes":{"active_multi":null,"tools":[{"id":"16093"},{"id":"16094"},{"id":"16095"},{"id":"16096"},{"id":"16097"},{"id":"16098"},{"id":"16099"},{"id":"16100"}]},"id":"16103","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"16157"},"selection_policy":{"id":"16158"}},"id":"16134","type":"ColumnDataSource"},{"attributes":{},"id":"16158","type":"UnionRenderers"},{"attributes":{"axis_label":"Log","formatter":{"id":"16142"},"major_label_policy":{"id":"16143"},"ticker":{"id":"16086"}},"id":"16085","type":"LinearAxis"},{"attributes":{"source":{"id":"16129"}},"id":"16133","type":"CDSView"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"16139","type":"Span"},{"attributes":{},"id":"16154","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"16129"},"glyph":{"id":"16130"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16131"},"view":{"id":"16133"}},"id":"16132","type":"GlyphRenderer"},{"attributes":{},"id":"16096","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16116","type":"Scatter"},{"attributes":{},"id":"16140","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16136","type":"Circle"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16130","type":"MultiLine"},{"attributes":{},"id":"16145","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"16085"}],"center":[{"id":"16088"},{"id":"16092"}],"height":500,"left":[{"id":"16089"}],"output_backend":"webgl","renderers":[{"id":"16117"},{"id":"16122"},{"id":"16127"},{"id":"16132"},{"id":"16137"},{"id":"16139"}],"title":{"id":"16140"},"toolbar":{"id":"16103"},"toolbar_location":null,"width":500,"x_range":{"id":"16077"},"x_scale":{"id":"16081"},"y_range":{"id":"16079"},"y_scale":{"id":"16083"}},"id":"16076","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"16114"},"glyph":{"id":"16115"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16116"},"view":{"id":"16118"}},"id":"16117","type":"GlyphRenderer"},{"attributes":{},"id":"16094","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"16102","type":"PolyAnnotation"},{"attributes":{},"id":"16143","type":"AllLabels"},{"attributes":{"children":[{"id":"16162"},{"id":"16160"}]},"id":"16163","type":"Column"},{"attributes":{"source":{"id":"16119"}},"id":"16123","type":"CDSView"},{"attributes":{"toolbar":{"id":"16161"},"toolbar_location":"above"},"id":"16162","type":"ToolbarBox"},{"attributes":{"source":{"id":"16124"}},"id":"16128","type":"CDSView"},{"attributes":{"source":{"id":"16114"}},"id":"16118","type":"CDSView"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16115","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16131","type":"MultiLine"},{"attributes":{"axis":{"id":"16089"},"dimension":1,"ticker":null},"id":"16092","type":"Grid"},{"attributes":{},"id":"16086","type":"BasicTicker"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"16151"},"selection_policy":{"id":"16152"}},"id":"16119","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16119"},"glyph":{"id":"16120"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16121"},"view":{"id":"16123"}},"id":"16122","type":"GlyphRenderer"},{"attributes":{},"id":"16151","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"16149"},"selection_policy":{"id":"16150"}},"id":"16114","type":"ColumnDataSource"},{"attributes":{},"id":"16152","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"16079","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16135","type":"Circle"},{"attributes":{},"id":"16098","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"16101","type":"BoxAnnotation"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"16155"},"selection_policy":{"id":"16156"}},"id":"16129","type":"ColumnDataSource"},{"attributes":{},"id":"16093","type":"ResetTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16120","type":"MultiLine"},{"attributes":{"children":[[{"id":"16076"},0,0]]},"id":"16160","type":"GridBox"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16125","type":"Circle"},{"attributes":{},"id":"16077","type":"DataRange1d"},{"attributes":{"callback":null},"id":"16100","type":"HoverTool"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"16112","type":"FixedTicker"},{"attributes":{},"id":"16156","type":"UnionRenderers"},{"attributes":{"axis":{"id":"16085"},"ticker":null},"id":"16088","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"16153"},"selection_policy":{"id":"16154"}},"id":"16124","type":"ColumnDataSource"},{"attributes":{},"id":"16083","type":"LinearScale"},{"attributes":{},"id":"16142","type":"BasicTickFormatter"},{"attributes":{},"id":"16146","type":"AllLabels"},{"attributes":{"formatter":{"id":"16145"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"16146"},"ticker":{"id":"16112"}},"id":"16089","type":"LinearAxis"},{"attributes":{},"id":"16149","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16126","type":"Circle"},{"attributes":{"data_source":{"id":"16124"},"glyph":{"id":"16125"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16126"},"view":{"id":"16128"}},"id":"16127","type":"GlyphRenderer"},{"attributes":{},"id":"16150","type":"UnionRenderers"},{"attributes":{},"id":"16155","type":"Selection"},{"attributes":{"source":{"id":"16134"}},"id":"16138","type":"CDSView"},{"attributes":{"data_source":{"id":"16134"},"glyph":{"id":"16135"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16136"},"view":{"id":"16138"}},"id":"16137","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16121","type":"MultiLine"},{"attributes":{"toolbars":[{"id":"16103"}],"tools":[{"id":"16093"},{"id":"16094"},{"id":"16095"},{"id":"16096"},{"id":"16097"},{"id":"16098"},{"id":"16099"},{"id":"16100"}]},"id":"16161","type":"ProxyToolbar"}],"root_ids":["16163"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"8ac3398e-d29b-40cc-aeee-8cef25bb34a0","root_ids":["16163"],"roots":{"16163":"f0d6c2d3-3c3e-433c-bd1c-470d578e6386"}}];
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