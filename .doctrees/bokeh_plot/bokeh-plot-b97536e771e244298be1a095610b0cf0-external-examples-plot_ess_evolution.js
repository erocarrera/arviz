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
    
      
      
    
      var element = document.getElementById("aac1d78b-c66a-4c2d-8a89-c2105ed7bfcb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aac1d78b-c66a-4c2d-8a89-c2105ed7bfcb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"843e6e6a-32ed-4960-9934-9bf2d2eb30e0":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18899"},"selection_policy":{"id":"18900"}},"id":"18864","type":"ColumnDataSource"},{"attributes":{},"id":"18851","type":"SaveTool"},{"attributes":{"data_source":{"id":"18864"},"glyph":{"id":"18865"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18866"},"view":{"id":"18868"}},"id":"18867","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18869"}},"id":"18873","type":"CDSView"},{"attributes":{},"id":"18892","type":"AllLabels"},{"attributes":{},"id":"18900","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18854"}},"id":"18849","type":"LassoSelectTool"},{"attributes":{"source":{"id":"18879"}},"id":"18883","type":"CDSView"},{"attributes":{"above":[{"id":"18885"}],"below":[{"id":"18837"}],"center":[{"id":"18840"},{"id":"18844"}],"height":500,"left":[{"id":"18841"}],"output_backend":"webgl","renderers":[{"id":"18867"},{"id":"18872"},{"id":"18877"},{"id":"18882"},{"id":"18884"}],"title":{"id":"18888"},"toolbar":{"id":"18855"},"toolbar_location":null,"width":500,"x_range":{"id":"18829"},"x_scale":{"id":"18833"},"y_range":{"id":"18831"},"y_scale":{"id":"18835"}},"id":"18828","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18899","type":"Selection"},{"attributes":{},"id":"18903","type":"Selection"},{"attributes":{},"id":"18831","type":"DataRange1d"},{"attributes":{},"id":"18829","type":"DataRange1d"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18891"},"major_label_policy":{"id":"18892"},"ticker":{"id":"18838"}},"id":"18837","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18905"},"selection_policy":{"id":"18906"}},"id":"18879","type":"ColumnDataSource"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18882"},{"id":"18877"}]},"id":"18887","type":"LegendItem"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18870","type":"Line"},{"attributes":{},"id":"18835","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"18855"}],"tools":[{"id":"18845"},{"id":"18846"},{"id":"18847"},{"id":"18848"},{"id":"18849"},{"id":"18850"},{"id":"18851"},{"id":"18852"}]},"id":"18909","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18876","type":"Line"},{"attributes":{"data_source":{"id":"18869"},"glyph":{"id":"18870"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18871"},"view":{"id":"18873"}},"id":"18872","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"18828"},0,0]]},"id":"18908","type":"GridBox"},{"attributes":{},"id":"18845","type":"ResetTool"},{"attributes":{},"id":"18894","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"18909"},"toolbar_location":"above"},"id":"18910","type":"ToolbarBox"},{"attributes":{"source":{"id":"18864"}},"id":"18868","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"18845"},{"id":"18846"},{"id":"18847"},{"id":"18848"},{"id":"18849"},{"id":"18850"},{"id":"18851"},{"id":"18852"}]},"id":"18855","type":"Toolbar"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18867"},{"id":"18872"}]},"id":"18886","type":"LegendItem"},{"attributes":{},"id":"18848","type":"WheelZoomTool"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18894"},"major_label_policy":{"id":"18895"},"ticker":{"id":"18842"}},"id":"18841","type":"LinearAxis"},{"attributes":{},"id":"18846","type":"PanTool"},{"attributes":{},"id":"18838","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18881","type":"Circle"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18875","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18901"},"selection_policy":{"id":"18902"}},"id":"18869","type":"ColumnDataSource"},{"attributes":{},"id":"18891","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18903"},"selection_policy":{"id":"18904"}},"id":"18874","type":"ColumnDataSource"},{"attributes":{},"id":"18833","type":"LinearScale"},{"attributes":{"source":{"id":"18874"}},"id":"18878","type":"CDSView"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18884","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18866","type":"Circle"},{"attributes":{},"id":"18904","type":"UnionRenderers"},{"attributes":{},"id":"18895","type":"AllLabels"},{"attributes":{"click_policy":"hide","items":[{"id":"18886"},{"id":"18887"}],"location":"center_right","orientation":"horizontal"},"id":"18885","type":"Legend"},{"attributes":{"text":"b"},"id":"18888","type":"Title"},{"attributes":{"data_source":{"id":"18874"},"glyph":{"id":"18875"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18876"},"view":{"id":"18878"}},"id":"18877","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18879"},"glyph":{"id":"18880"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18881"},"view":{"id":"18883"}},"id":"18882","type":"GlyphRenderer"},{"attributes":{},"id":"18901","type":"Selection"},{"attributes":{"children":[{"id":"18910"},{"id":"18908"}]},"id":"18911","type":"Column"},{"attributes":{"axis":{"id":"18837"},"ticker":null},"id":"18840","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18871","type":"Line"},{"attributes":{"axis":{"id":"18841"},"dimension":1,"ticker":null},"id":"18844","type":"Grid"},{"attributes":{},"id":"18902","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18880","type":"Circle"},{"attributes":{"callback":null},"id":"18852","type":"HoverTool"},{"attributes":{},"id":"18842","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18854","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18865","type":"Circle"},{"attributes":{},"id":"18906","type":"UnionRenderers"},{"attributes":{},"id":"18850","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18853","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"18853"}},"id":"18847","type":"BoxZoomTool"},{"attributes":{},"id":"18905","type":"Selection"}],"root_ids":["18911"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"843e6e6a-32ed-4960-9934-9bf2d2eb30e0","root_ids":["18911"],"roots":{"18911":"aac1d78b-c66a-4c2d-8a89-c2105ed7bfcb"}}];
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