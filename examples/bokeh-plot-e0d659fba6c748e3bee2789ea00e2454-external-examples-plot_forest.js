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
    
      
      
    
      var element = document.getElementById("c6d41130-8fe1-4057-85fa-385b19eacddb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c6d41130-8fe1-4057-85fa-385b19eacddb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8c8027f2-a20b-4a67-b528-71dd31a72dd8":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19276","type":"Line"},{"attributes":{},"id":"19413","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"19372"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"19373"},"ticker":{"id":"19363"}},"id":"19216","type":"LinearAxis"},{"attributes":{"data":{},"selected":{"id":"19398"},"selection_policy":{"id":"19399"}},"id":"19294","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19249"}},"id":"19253","type":"CDSView"},{"attributes":{"source":{"id":"19254"}},"id":"19258","type":"CDSView"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"19378"},"selection_policy":{"id":"19379"}},"id":"19244","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"19212"},"ticker":null},"id":"19215","type":"Grid"},{"attributes":{"source":{"id":"19244"}},"id":"19248","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"19266","type":"Circle"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"19390"},"selection_policy":{"id":"19391"}},"id":"19274","type":"ColumnDataSource"},{"attributes":{},"id":"19408","type":"Selection"},{"attributes":{"data_source":{"id":"19264"},"glyph":{"id":"19265"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19266"},"view":{"id":"19268"}},"id":"19267","type":"GlyphRenderer"},{"attributes":{},"id":"19395","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19290","type":"Line"},{"attributes":{"callback":null},"id":"19227","type":"HoverTool"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19255","type":"Line"},{"attributes":{},"id":"19411","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"19229"}},"id":"19224","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"19289"},"glyph":{"id":"19290"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19291"},"view":{"id":"19293"}},"id":"19292","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19291","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19306","type":"Line"},{"attributes":{},"id":"19419","type":"UnionRenderers"},{"attributes":{"source":{"id":"19289"}},"id":"19293","type":"CDSView"},{"attributes":{"source":{"id":"19329"}},"id":"19333","type":"CDSView"},{"attributes":{},"id":"19382","type":"Selection"},{"attributes":{"source":{"id":"19274"}},"id":"19278","type":"CDSView"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"19400"},"selection_policy":{"id":"19401"}},"id":"19299","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"19414"},"selection_policy":{"id":"19415"}},"id":"19334","type":"ColumnDataSource"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"19362","type":"DataRange1d"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"19402"},"selection_policy":{"id":"19403"}},"id":"19304","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19260","type":"Line"},{"attributes":{},"id":"19389","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"19384"},"selection_policy":{"id":"19385"}},"id":"19259","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"19427"},{"id":"19425"}]},"id":"19428","type":"Column"},{"attributes":{"data_source":{"id":"19299"},"glyph":{"id":"19300"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19301"},"view":{"id":"19303"}},"id":"19302","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19330","type":"Line"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"19396"},"selection_policy":{"id":"19397"}},"id":"19289","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19294"}},"id":"19298","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19331","type":"Line"},{"attributes":{"data_source":{"id":"19274"},"glyph":{"id":"19275"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19276"},"view":{"id":"19278"}},"id":"19277","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19314"},"glyph":{"id":"19315"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19316"},"view":{"id":"19318"}},"id":"19317","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19256","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19285","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19305","type":"Line"},{"attributes":{},"id":"19393","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"19366"},{"id":"19367"}],"location":"top_left"},"id":"19365","type":"Legend"},{"attributes":{"source":{"id":"19264"}},"id":"19268","type":"CDSView"},{"attributes":{},"id":"19415","type":"UnionRenderers"},{"attributes":{"source":{"id":"19269"}},"id":"19273","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19301","type":"Line"},{"attributes":{"data_source":{"id":"19269"},"glyph":{"id":"19270"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19271"},"view":{"id":"19273"}},"id":"19272","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19334"}},"id":"19338","type":"CDSView"},{"attributes":{},"id":"19412","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"19220"},{"id":"19221"},{"id":"19222"},{"id":"19223"},{"id":"19224"},{"id":"19225"},{"id":"19226"},{"id":"19227"}]},"id":"19230","type":"Toolbar"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"19406"},"selection_policy":{"id":"19407"}},"id":"19314","type":"ColumnDataSource"},{"attributes":{},"id":"19208","type":"LinearScale"},{"attributes":{},"id":"19414","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"19380"},"selection_policy":{"id":"19381"}},"id":"19249","type":"ColumnDataSource"},{"attributes":{},"id":"19220","type":"ResetTool"},{"attributes":{},"id":"19421","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19324"},"glyph":{"id":"19325"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19326"},"view":{"id":"19328"}},"id":"19327","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19241","type":"Line"},{"attributes":{"source":{"id":"19284"}},"id":"19288","type":"CDSView"},{"attributes":{"children":[[{"id":"19203"},0,0]]},"id":"19425","type":"GridBox"},{"attributes":{},"id":"19226","type":"SaveTool"},{"attributes":{},"id":"19391","type":"UnionRenderers"},{"attributes":{},"id":"19417","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19300","type":"Line"},{"attributes":{},"id":"19385","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19261","type":"Line"},{"attributes":{"text":"94.0% HDI"},"id":"19359","type":"Title"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"19242"},{"id":"19247"},{"id":"19252"},{"id":"19257"},{"id":"19262"},{"id":"19267"},{"id":"19272"},{"id":"19277"},{"id":"19282"},{"id":"19287"},{"id":"19292"},{"id":"19297"}]},"id":"19366","type":"LegendItem"},{"attributes":{},"id":"19394","type":"Selection"},{"attributes":{},"id":"19397","type":"UnionRenderers"},{"attributes":{},"id":"19370","type":"AllLabels"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19245","type":"Line"},{"attributes":{"formatter":{"id":"19369"},"major_label_policy":{"id":"19370"},"ticker":{"id":"19213"}},"id":"19212","type":"LinearAxis"},{"attributes":{},"id":"19369","type":"BasicTickFormatter"},{"attributes":{},"id":"19390","type":"Selection"},{"attributes":{},"id":"19388","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"19392"},"selection_policy":{"id":"19393"}},"id":"19279","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"19340","type":"Circle"},{"attributes":{},"id":"19396","type":"Selection"},{"attributes":{},"id":"19210","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19246","type":"Line"},{"attributes":{},"id":"19225","type":"UndoTool"},{"attributes":{"data_source":{"id":"19304"},"glyph":{"id":"19305"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19306"},"view":{"id":"19308"}},"id":"19307","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"19386"},"selection_policy":{"id":"19387"}},"id":"19264","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"19295","type":"Circle"},{"attributes":{},"id":"19221","type":"PanTool"},{"attributes":{"data":{},"selected":{"id":"19416"},"selection_policy":{"id":"19417"}},"id":"19339","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19294"},"glyph":{"id":"19295"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19296"},"view":{"id":"19298"}},"id":"19297","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19259"}},"id":"19263","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19229","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"19230"}],"tools":[{"id":"19220"},{"id":"19221"},{"id":"19222"},{"id":"19223"},{"id":"19224"},{"id":"19225"},{"id":"19226"},{"id":"19227"}]},"id":"19426","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19228","type":"BoxAnnotation"},{"attributes":{"data":{},"selected":{"id":"19410"},"selection_policy":{"id":"19411"}},"id":"19324","type":"ColumnDataSource"},{"attributes":{},"id":"19420","type":"Selection"},{"attributes":{},"id":"19410","type":"Selection"},{"attributes":{},"id":"19392","type":"Selection"},{"attributes":{"toolbar":{"id":"19426"},"toolbar_location":"above"},"id":"19427","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"19280","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19240","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19275","type":"Line"},{"attributes":{"above":[{"id":"19365"}],"below":[{"id":"19212"}],"center":[{"id":"19215"},{"id":"19219"}],"height":348,"left":[{"id":"19216"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"19242"},{"id":"19247"},{"id":"19252"},{"id":"19257"},{"id":"19262"},{"id":"19267"},{"id":"19272"},{"id":"19277"},{"id":"19282"},{"id":"19287"},{"id":"19292"},{"id":"19297"},{"id":"19302"},{"id":"19307"},{"id":"19312"},{"id":"19317"},{"id":"19322"},{"id":"19327"},{"id":"19332"},{"id":"19337"},{"id":"19342"},{"id":"19347"},{"id":"19352"},{"id":"19357"}],"title":{"id":"19359"},"toolbar":{"id":"19230"},"toolbar_location":null,"width":450,"x_range":{"id":"19361"},"x_scale":{"id":"19208"},"y_range":{"id":"19362"},"y_scale":{"id":"19210"}},"id":"19203","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"19216"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"19219","type":"Grid"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"19250","type":"Circle"},{"attributes":{"source":{"id":"19239"}},"id":"19243","type":"CDSView"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"19412"},"selection_policy":{"id":"19413"}},"id":"19329","type":"ColumnDataSource"},{"attributes":{},"id":"19416","type":"Selection"},{"attributes":{"data_source":{"id":"19259"},"glyph":{"id":"19260"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19261"},"view":{"id":"19263"}},"id":"19262","type":"GlyphRenderer"},{"attributes":{},"id":"19223","type":"WheelZoomTool"},{"attributes":{},"id":"19407","type":"UnionRenderers"},{"attributes":{},"id":"19418","type":"Selection"},{"attributes":{},"id":"19213","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19286","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"19281","type":"Circle"},{"attributes":{},"id":"19386","type":"Selection"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"19376"},"selection_policy":{"id":"19377"}},"id":"19239","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19279"}},"id":"19283","type":"CDSView"},{"attributes":{"data_source":{"id":"19284"},"glyph":{"id":"19285"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19286"},"view":{"id":"19288"}},"id":"19287","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19249"},"glyph":{"id":"19250"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19251"},"view":{"id":"19253"}},"id":"19252","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19279"},"glyph":{"id":"19280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19281"},"view":{"id":"19283"}},"id":"19282","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"19251","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19270","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19336","type":"Line"},{"attributes":{},"id":"19409","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"19265","type":"Circle"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"19394"},"selection_policy":{"id":"19395"}},"id":"19284","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19324"}},"id":"19328","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"19296","type":"Circle"},{"attributes":{},"id":"19384","type":"Selection"},{"attributes":{"overlay":{"id":"19228"}},"id":"19222","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"19334"},"glyph":{"id":"19335"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19336"},"view":{"id":"19338"}},"id":"19337","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"19302"},{"id":"19307"},{"id":"19312"},{"id":"19317"},{"id":"19322"},{"id":"19327"},{"id":"19332"},{"id":"19337"},{"id":"19342"},{"id":"19347"},{"id":"19352"},{"id":"19357"}]},"id":"19367","type":"LegendItem"},{"attributes":{"data_source":{"id":"19344"},"glyph":{"id":"19345"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19346"},"view":{"id":"19348"}},"id":"19347","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19271","type":"Line"},{"attributes":{"data_source":{"id":"19244"},"glyph":{"id":"19245"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19246"},"view":{"id":"19248"}},"id":"19247","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"19326","type":"Circle"},{"attributes":{},"id":"19383","type":"UnionRenderers"},{"attributes":{"source":{"id":"19299"}},"id":"19303","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19335","type":"Line"},{"attributes":{},"id":"19387","type":"UnionRenderers"},{"attributes":{},"id":"19379","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"19341","type":"Circle"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"19418"},"selection_policy":{"id":"19419"}},"id":"19344","type":"ColumnDataSource"},{"attributes":{},"id":"19401","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19321","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"19355","type":"Circle"},{"attributes":{"source":{"id":"19354"}},"id":"19358","type":"CDSView"},{"attributes":{},"id":"19372","type":"BasicTickFormatter"},{"attributes":{"data":{},"selected":{"id":"19422"},"selection_policy":{"id":"19423"}},"id":"19354","type":"ColumnDataSource"},{"attributes":{},"id":"19378","type":"Selection"},{"attributes":{"data_source":{"id":"19329"},"glyph":{"id":"19330"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19331"},"view":{"id":"19333"}},"id":"19332","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19309"}},"id":"19313","type":"CDSView"},{"attributes":{"source":{"id":"19314"}},"id":"19318","type":"CDSView"},{"attributes":{},"id":"19406","type":"Selection"},{"attributes":{"source":{"id":"19304"}},"id":"19308","type":"CDSView"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"19388"},"selection_policy":{"id":"19389"}},"id":"19269","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19315","type":"Line"},{"attributes":{"source":{"id":"19339"}},"id":"19343","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19351","type":"Line"},{"attributes":{},"id":"19404","type":"Selection"},{"attributes":{},"id":"19422","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"19310","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19320","type":"Line"},{"attributes":{"ticks":[1.275]},"id":"19363","type":"FixedTicker"},{"attributes":{"data_source":{"id":"19309"},"glyph":{"id":"19310"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19311"},"view":{"id":"19313"}},"id":"19312","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19345","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"19311","type":"Circle"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"19420"},"selection_policy":{"id":"19421"}},"id":"19349","type":"ColumnDataSource"},{"attributes":{},"id":"19376","type":"Selection"},{"attributes":{},"id":"19402","type":"Selection"},{"attributes":{"bounds":"auto","min_interval":1},"id":"19361","type":"DataRange1d"},{"attributes":{},"id":"19377","type":"UnionRenderers"},{"attributes":{},"id":"19423","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19316","type":"Line"},{"attributes":{"data_source":{"id":"19339"},"glyph":{"id":"19340"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19341"},"view":{"id":"19343"}},"id":"19342","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"19356","type":"Circle"},{"attributes":{"source":{"id":"19349"}},"id":"19353","type":"CDSView"},{"attributes":{},"id":"19399","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19254"},"glyph":{"id":"19255"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19256"},"view":{"id":"19258"}},"id":"19257","type":"GlyphRenderer"},{"attributes":{},"id":"19373","type":"AllLabels"},{"attributes":{},"id":"19381","type":"UnionRenderers"},{"attributes":{},"id":"19403","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19349"},"glyph":{"id":"19350"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19351"},"view":{"id":"19353"}},"id":"19352","type":"GlyphRenderer"},{"attributes":{},"id":"19405","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"19325","type":"Circle"},{"attributes":{},"id":"19380","type":"Selection"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"19408"},"selection_policy":{"id":"19409"}},"id":"19319","type":"ColumnDataSource"},{"attributes":{},"id":"19400","type":"Selection"},{"attributes":{"data_source":{"id":"19319"},"glyph":{"id":"19320"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19321"},"view":{"id":"19323"}},"id":"19322","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19319"}},"id":"19323","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19350","type":"Line"},{"attributes":{"data":{},"selected":{"id":"19404"},"selection_policy":{"id":"19405"}},"id":"19309","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19354"},"glyph":{"id":"19355"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19356"},"view":{"id":"19358"}},"id":"19357","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"19382"},"selection_policy":{"id":"19383"}},"id":"19254","type":"ColumnDataSource"},{"attributes":{},"id":"19398","type":"Selection"},{"attributes":{"data_source":{"id":"19239"},"glyph":{"id":"19240"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19241"},"view":{"id":"19243"}},"id":"19242","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19346","type":"Line"},{"attributes":{"source":{"id":"19344"}},"id":"19348","type":"CDSView"}],"root_ids":["19428"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"8c8027f2-a20b-4a67-b528-71dd31a72dd8","root_ids":["19428"],"roots":{"19428":"c6d41130-8fe1-4057-85fa-385b19eacddb"}}];
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