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
    
      
      
    
      var element = document.getElementById("0adc27fd-840a-44a4-b8ee-ed79d3762a95");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0adc27fd-840a-44a4-b8ee-ed79d3762a95' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ccf516a1-deba-4f63-95df-804dfe2550ac":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18384","type":"DataRange1d"},{"attributes":{"axis":{"id":"18396"},"dimension":1,"ticker":null},"id":"18399","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"/rA3BUBcAsBQh0JdvYr6v1CHQl29ivq/nzGTyRtY87+fMZPJG1jzv58xk8kbWPO/nzGTyRtY879IEESOfOnqv0gQRI586eq/SBBEjnzp6r9IEESOfOnqv0gQRI586eq/4sYStvn23r/ixhK2+fbev+LGErb59t6/4sYStvn23r/ixhK2+fbev+LGErb59t6/4sYStvn23r9g+DUxnHXBv2D4NTGcdcG/YPg1MZx1wb9g+DUxnHXBv2D4NTGcdcG/YPg1MZx1wb9g+DUxnHXBvxiNftQSJss/GI1+1BImyz8YjX7UEibLPxiNftQSJss/GI1+1BImyz8YjX7UEibLPxiNftQSJss/yshw1EpW4j/KyHDUSlbiP8rIcNRKVuI/yshw1EpW4j/KyHDUSlbiP8rIcNRKVuI/GGZhAdpZ7T8YZmEB2lntPxhmYQHaWe0/GGZhAdpZ7T8YZmEB2lntP50WkcWwZ/U/nRaRxbBn9T+dFpHFsGf1P/RPoufEmvs/9E+i58Sa+z+ZQhuWkNsCQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"DjIHasNoxD8OMgdqw2jEPxXLCh8lnd4/DjIHasNoxD8VywofJZ3eP5L+iET0guk/zEvG/Krb8T8OMgdqw2jEPxXLCh8lnd4/kv6IRPSC6T/MS8b8qtvxP1AYSNfb9fY/DjIHasNoxD8VywofJZ3eP5L+iET0guk/zEvG/Krb8T9QGEjX2/X2P9TkybEMEPw/q9glxh6VAEAOMgdqw2jEPxXLCh8lnd4/kv6IRPSC6T/MS8b8qtvxP1AYSNfb9fY/1OTJsQwQ/D+r2CXGHpUAQA4yB2rDaMQ/FcsKHyWd3j+S/ohE9ILpP8xLxvyq2/E/UBhI19v19j/U5MmxDBD8P6vYJcYelQBADjIHasNoxD8VywofJZ3eP5L+iET0guk/zEvG/Krb8T9QGEjX2/X2P9TkybEMEPw/DjIHasNoxD8VywofJZ3eP5L+iET0guk/zEvG/Krb8T9QGEjX2/X2Pw4yB2rDaMQ/FcsKHyWd3j+S/ohE9ILpPw4yB2rDaMQ/FcsKHyWd3j8OMgdqw2jEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"18455"},"selection_policy":{"id":"18456"}},"id":"18434","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"18392"}],"center":[{"id":"18395"},{"id":"18399"}],"height":360,"left":[{"id":"18396"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"18422"},{"id":"18427"},{"id":"18432"},{"id":"18437"}],"title":{"id":"18439"},"toolbar":{"id":"18410"},"toolbar_location":null,"width":720,"x_range":{"id":"18384"},"x_scale":{"id":"18388"},"y_range":{"id":"18386"},"y_scale":{"id":"18390"}},"id":"18383","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"18429"},"glyph":{"id":"18430"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18431"},"view":{"id":"18433"}},"id":"18432","type":"GlyphRenderer"},{"attributes":{},"id":"18452","type":"UnionRenderers"},{"attributes":{"source":{"id":"18419"}},"id":"18423","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"18426","type":"Line"},{"attributes":{"axis":{"id":"18392"},"ticker":null},"id":"18395","type":"Grid"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.15944712330964744},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"18435","type":"Circle"},{"attributes":{},"id":"18449","type":"Selection"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"18425","type":"Line"},{"attributes":{"data_source":{"id":"18424"},"glyph":{"id":"18425"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18426"},"view":{"id":"18428"}},"id":"18427","type":"GlyphRenderer"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"18420","type":"Line"},{"attributes":{},"id":"18444","type":"BasicTickFormatter"},{"attributes":{},"id":"18390","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.15944712330964744},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"18436","type":"Circle"},{"attributes":{},"id":"18456","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18408","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"18434"},"glyph":{"id":"18435"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18436"},"view":{"id":"18438"}},"id":"18437","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.6769067699569056,1.9077674566106693],"y":[0,0]},"selected":{"id":"18449"},"selection_policy":{"id":"18450"}},"id":"18419","type":"ColumnDataSource"},{"attributes":{},"id":"18405","type":"UndoTool"},{"attributes":{},"id":"18401","type":"PanTool"},{"attributes":{"data":{"x":[-0.6318497530671987,0.6457062855570161],"y":[0,0]},"selected":{"id":"18451"},"selection_policy":{"id":"18452"}},"id":"18424","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":0.0050097736356091785},"y":{"value":0}},"id":"18431","type":"Circle"},{"attributes":{},"id":"18406","type":"SaveTool"},{"attributes":{},"id":"18455","type":"Selection"},{"attributes":{"formatter":{"id":"18441"},"major_label_policy":{"id":"18442"},"ticker":{"id":"18393"}},"id":"18392","type":"LinearAxis"},{"attributes":{},"id":"18388","type":"LinearScale"},{"attributes":{"data_source":{"id":"18419"},"glyph":{"id":"18420"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18421"},"view":{"id":"18423"}},"id":"18422","type":"GlyphRenderer"},{"attributes":{},"id":"18453","type":"Selection"},{"attributes":{"source":{"id":"18424"}},"id":"18428","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":0.0050097736356091785},"y":{"value":0}},"id":"18430","type":"Circle"},{"attributes":{},"id":"18450","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"18410"}],"tools":[{"id":"18400"},{"id":"18401"},{"id":"18402"},{"id":"18403"},{"id":"18404"},{"id":"18405"},{"id":"18406"},{"id":"18407"}]},"id":"18459","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"18421","type":"Line"},{"attributes":{},"id":"18393","type":"BasicTicker"},{"attributes":{"source":{"id":"18429"}},"id":"18433","type":"CDSView"},{"attributes":{},"id":"18451","type":"Selection"},{"attributes":{},"id":"18445","type":"AllLabels"},{"attributes":{"children":[[{"id":"18383"},0,0]]},"id":"18458","type":"GridBox"},{"attributes":{"overlay":{"id":"18408"}},"id":"18402","type":"BoxZoomTool"},{"attributes":{},"id":"18441","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"18460"},{"id":"18458"}]},"id":"18461","type":"Column"},{"attributes":{},"id":"18400","type":"ResetTool"},{"attributes":{"source":{"id":"18434"}},"id":"18438","type":"CDSView"},{"attributes":{"callback":null},"id":"18407","type":"HoverTool"},{"attributes":{},"id":"18439","type":"Title"},{"attributes":{},"id":"18397","type":"BasicTicker"},{"attributes":{"formatter":{"id":"18444"},"major_label_policy":{"id":"18445"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"18397"}},"id":"18396","type":"LinearAxis"},{"attributes":{},"id":"18403","type":"WheelZoomTool"},{"attributes":{"data":{},"selected":{"id":"18453"},"selection_policy":{"id":"18454"}},"id":"18429","type":"ColumnDataSource"},{"attributes":{},"id":"18454","type":"UnionRenderers"},{"attributes":{},"id":"18386","type":"DataRange1d"},{"attributes":{"overlay":{"id":"18409"}},"id":"18404","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"18459"},"toolbar_location":"above"},"id":"18460","type":"ToolbarBox"},{"attributes":{"active_multi":null,"tools":[{"id":"18400"},{"id":"18401"},{"id":"18402"},{"id":"18403"},{"id":"18404"},{"id":"18405"},{"id":"18406"},{"id":"18407"}]},"id":"18410","type":"Toolbar"},{"attributes":{},"id":"18442","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18409","type":"PolyAnnotation"}],"root_ids":["18461"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"ccf516a1-deba-4f63-95df-804dfe2550ac","root_ids":["18461"],"roots":{"18461":"0adc27fd-840a-44a4-b8ee-ed79d3762a95"}}];
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