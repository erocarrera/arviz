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
    
      
      
    
      var element = document.getElementById("2c6d2bea-c1cf-4ead-9941-3abbd231f2fd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2c6d2bea-c1cf-4ead-9941-3abbd231f2fd' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c46b90e5-1279-471c-ac53-785217bd898e":{"defs":[],"roots":{"references":[{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"44660","type":"Span"},{"attributes":{},"id":"44675","type":"Selection"},{"attributes":{},"id":"44691","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44598","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44694"},"selection_policy":{"id":"44695"}},"id":"44649","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"44648","type":"Span"},{"attributes":{"data_source":{"id":"44637"},"glyph":{"id":"44638"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44639"},"view":{"id":"44641"}},"id":"44640","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44644","type":"VBar"},{"attributes":{"data_source":{"id":"44643"},"glyph":{"id":"44644"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44645"},"view":{"id":"44647"}},"id":"44646","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44599","type":"PolyAnnotation"},{"attributes":{},"id":"44692","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44692"},"selection_policy":{"id":"44693"}},"id":"44643","type":"ColumnDataSource"},{"attributes":{},"id":"44676","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44650","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44645","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"44642","type":"Span"},{"attributes":{"source":{"id":"44643"}},"id":"44647","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"44669"},"major_label_policy":{"id":"44670"},"ticker":{"id":"44633"}},"id":"44552","type":"LinearAxis"},{"attributes":{},"id":"44559","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44564","type":"BoxAnnotation"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"44654","type":"Span"},{"attributes":{},"id":"44556","type":"ResetTool"},{"attributes":{},"id":"44677","type":"Selection"},{"attributes":{},"id":"44693","type":"UnionRenderers"},{"attributes":{"children":[{"id":"44701"},{"id":"44699"}]},"id":"44702","type":"Column"},{"attributes":{"below":[{"id":"44548"}],"center":[{"id":"44551"},{"id":"44555"},{"id":"44614"},{"id":"44620"},{"id":"44626"},{"id":"44632"}],"height":331,"left":[{"id":"44552"}],"output_backend":"webgl","renderers":[{"id":"44612"},{"id":"44618"},{"id":"44624"},{"id":"44630"}],"title":{"id":"44635"},"toolbar":{"id":"44566"},"toolbar_location":null,"width":496,"x_range":{"id":"44540"},"x_scale":{"id":"44544"},"y_range":{"id":"44542"},"y_scale":{"id":"44546"}},"id":"44539","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44565","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"44563","type":"HoverTool"},{"attributes":{},"id":"44678","type":"UnionRenderers"},{"attributes":{},"id":"44694","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44629","type":"VBar"},{"attributes":{},"id":"44578","type":"LinearScale"},{"attributes":{},"id":"44544","type":"LinearScale"},{"attributes":{"source":{"id":"44637"}},"id":"44641","type":"CDSView"},{"attributes":{},"id":"44679","type":"Selection"},{"attributes":{},"id":"44695","type":"UnionRenderers"},{"attributes":{},"id":"44666","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44673"},"selection_policy":{"id":"44674"}},"id":"44609","type":"ColumnDataSource"},{"attributes":{"source":{"id":"44615"}},"id":"44619","type":"CDSView"},{"attributes":{"below":[{"id":"44582"}],"center":[{"id":"44585"},{"id":"44589"},{"id":"44642"},{"id":"44648"},{"id":"44654"},{"id":"44660"}],"height":331,"left":[{"id":"44586"}],"output_backend":"webgl","renderers":[{"id":"44640"},{"id":"44646"},{"id":"44652"},{"id":"44658"}],"title":{"id":"44663"},"toolbar":{"id":"44600"},"toolbar_location":null,"width":496,"x_range":{"id":"44540"},"x_scale":{"id":"44578"},"y_range":{"id":"44542"},"y_scale":{"id":"44580"}},"id":"44575","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44611","type":"VBar"},{"attributes":{},"id":"44667","type":"AllLabels"},{"attributes":{"source":{"id":"44609"}},"id":"44613","type":"CDSView"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"44614","type":"Span"},{"attributes":{},"id":"44557","type":"PanTool"},{"attributes":{},"id":"44680","type":"UnionRenderers"},{"attributes":{},"id":"44562","type":"SaveTool"},{"attributes":{},"id":"44696","type":"Selection"},{"attributes":{},"id":"44580","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44617","type":"VBar"},{"attributes":{"data_source":{"id":"44609"},"glyph":{"id":"44610"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44611"},"view":{"id":"44613"}},"id":"44612","type":"GlyphRenderer"},{"attributes":{},"id":"44683","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"44666"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"44667"},"ticker":{"id":"44549"}},"id":"44548","type":"LinearAxis"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44616","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44675"},"selection_policy":{"id":"44676"}},"id":"44615","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"44633","type":"FixedTicker"},{"attributes":{"axis":{"id":"44548"},"ticker":null},"id":"44551","type":"Grid"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"44620","type":"Span"},{"attributes":{},"id":"44684","type":"AllLabels"},{"attributes":{"data_source":{"id":"44615"},"glyph":{"id":"44616"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44617"},"view":{"id":"44619"}},"id":"44618","type":"GlyphRenderer"},{"attributes":{},"id":"44549","type":"BasicTicker"},{"attributes":{"children":[[{"id":"44539"},0,0],[{"id":"44575"},0,1]]},"id":"44699","type":"GridBox"},{"attributes":{"data_source":{"id":"44621"},"glyph":{"id":"44622"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44623"},"view":{"id":"44625"}},"id":"44624","type":"GlyphRenderer"},{"attributes":{},"id":"44697","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"44626","type":"Span"},{"attributes":{"axis":{"id":"44582"},"ticker":null},"id":"44585","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44622","type":"VBar"},{"attributes":{"callback":null},"id":"44597","type":"HoverTool"},{"attributes":{},"id":"44669","type":"BasicTickFormatter"},{"attributes":{"text":"tau"},"id":"44635","type":"Title"},{"attributes":{"source":{"id":"44621"}},"id":"44625","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"44686"},"major_label_policy":{"id":"44687"},"ticker":{"id":"44661"}},"id":"44586","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44677"},"selection_policy":{"id":"44678"}},"id":"44621","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"44683"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"44684"},"ticker":{"id":"44583"}},"id":"44582","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44623","type":"VBar"},{"attributes":{},"id":"44583","type":"BasicTicker"},{"attributes":{},"id":"44670","type":"AllLabels"},{"attributes":{"source":{"id":"44655"}},"id":"44659","type":"CDSView"},{"attributes":{"data_source":{"id":"44649"},"glyph":{"id":"44650"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44651"},"view":{"id":"44653"}},"id":"44652","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44628","type":"VBar"},{"attributes":{"axis":{"id":"44586"},"dimension":1,"ticker":null},"id":"44589","type":"Grid"},{"attributes":{"data_source":{"id":"44655"},"glyph":{"id":"44656"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44657"},"view":{"id":"44659"}},"id":"44658","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"44663","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44679"},"selection_policy":{"id":"44680"}},"id":"44627","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44610","type":"VBar"},{"attributes":{},"id":"44686","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"44649"}},"id":"44653","type":"CDSView"},{"attributes":{"overlay":{"id":"44598"}},"id":"44592","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"44565"}},"id":"44560","type":"LassoSelectTool"},{"attributes":{},"id":"44591","type":"PanTool"},{"attributes":{"overlay":{"id":"44564"}},"id":"44558","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44657","type":"VBar"},{"attributes":{},"id":"44590","type":"ResetTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44656","type":"VBar"},{"attributes":{},"id":"44687","type":"AllLabels"},{"attributes":{"ticks":[0,1,2,3]},"id":"44661","type":"FixedTicker"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44651","type":"VBar"},{"attributes":{},"id":"44596","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44696"},"selection_policy":{"id":"44697"}},"id":"44655","type":"ColumnDataSource"},{"attributes":{},"id":"44593","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"44599"}},"id":"44594","type":"LassoSelectTool"},{"attributes":{},"id":"44561","type":"UndoTool"},{"attributes":{},"id":"44595","type":"UndoTool"},{"attributes":{},"id":"44673","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"44590"},{"id":"44591"},{"id":"44592"},{"id":"44593"},{"id":"44594"},{"id":"44595"},{"id":"44596"},{"id":"44597"}]},"id":"44600","type":"Toolbar"},{"attributes":{},"id":"44540","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44639","type":"VBar"},{"attributes":{"source":{"id":"44627"}},"id":"44631","type":"CDSView"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"44632","type":"Span"},{"attributes":{},"id":"44674","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"44566"},{"id":"44600"}],"tools":[{"id":"44556"},{"id":"44557"},{"id":"44558"},{"id":"44559"},{"id":"44560"},{"id":"44561"},{"id":"44562"},{"id":"44563"},{"id":"44590"},{"id":"44591"},{"id":"44592"},{"id":"44593"},{"id":"44594"},{"id":"44595"},{"id":"44596"},{"id":"44597"}]},"id":"44700","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"44627"},"glyph":{"id":"44628"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44629"},"view":{"id":"44631"}},"id":"44630","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"44556"},{"id":"44557"},{"id":"44558"},{"id":"44559"},{"id":"44560"},{"id":"44561"},{"id":"44562"},{"id":"44563"}]},"id":"44566","type":"Toolbar"},{"attributes":{"toolbar":{"id":"44700"},"toolbar_location":"above"},"id":"44701","type":"ToolbarBox"},{"attributes":{},"id":"44546","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44690"},"selection_policy":{"id":"44691"}},"id":"44637","type":"ColumnDataSource"},{"attributes":{},"id":"44690","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44638","type":"VBar"},{"attributes":{},"id":"44542","type":"DataRange1d"},{"attributes":{"axis":{"id":"44552"},"dimension":1,"ticker":null},"id":"44555","type":"Grid"}],"root_ids":["44702"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"c46b90e5-1279-471c-ac53-785217bd898e","root_ids":["44702"],"roots":{"44702":"2c6d2bea-c1cf-4ead-9941-3abbd231f2fd"}}];
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