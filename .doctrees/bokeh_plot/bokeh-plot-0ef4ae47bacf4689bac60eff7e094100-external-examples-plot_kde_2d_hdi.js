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
    
      
      
    
      var element = document.getElementById("0c05401f-f4b4-4848-a97f-a452f578bb71");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0c05401f-f4b4-4848-a97f-a452f578bb71' but no matching script tag was found.")
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
                    
                  var docs_json = '{"969fa2df-49d6-4006-9f7a-0a84d998d18a":{"defs":[],"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21614","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[522]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[522]}},"selected":{"id":"21652"},"selection_policy":{"id":"21653"}},"id":"21625","type":"ColumnDataSource"},{"attributes":{},"id":"21645","type":"AllLabels"},{"attributes":{"source":{"id":"21625"}},"id":"21629","type":"CDSView"},{"attributes":{"below":[{"id":"21598"}],"center":[{"id":"21601"},{"id":"21605"}],"height":500,"left":[{"id":"21602"}],"output_backend":"webgl","renderers":[{"id":"21628"},{"id":"21633"},{"id":"21638"}],"title":{"id":"21642"},"toolbar":{"id":"21616"},"toolbar_location":null,"width":500,"x_range":{"id":"21640"},"x_scale":{"id":"21594"},"y_range":{"id":"21641"},"y_scale":{"id":"21596"}},"id":"21589","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"21630"}},"id":"21634","type":"CDSView"},{"attributes":{},"id":"21656","type":"Selection"},{"attributes":{},"id":"21648","type":"AllLabels"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21637","type":"Patch"},{"attributes":{"callback":null},"id":"21613","type":"HoverTool"},{"attributes":{},"id":"21603","type":"BasicTicker"},{"attributes":{},"id":"21594","type":"LinearScale"},{"attributes":{},"id":"21612","type":"SaveTool"},{"attributes":{"data_source":{"id":"21635"},"glyph":{"id":"21636"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21637"},"view":{"id":"21639"}},"id":"21638","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"21616"}],"tools":[{"id":"21606"},{"id":"21607"},{"id":"21608"},{"id":"21609"},{"id":"21610"},{"id":"21611"},{"id":"21612"},{"id":"21613"}]},"id":"21660","type":"ProxyToolbar"},{"attributes":{},"id":"21653","type":"UnionRenderers"},{"attributes":{},"id":"21647","type":"BasicTickFormatter"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21631","type":"Patch"},{"attributes":{"formatter":{"id":"21644"},"major_label_policy":{"id":"21645"},"ticker":{"id":"21599"}},"id":"21598","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21627","type":"Patch"},{"attributes":{},"id":"21657","type":"UnionRenderers"},{"attributes":{},"id":"21611","type":"UndoTool"},{"attributes":{"overlay":{"id":"21614"}},"id":"21608","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"21589"},0,0]]},"id":"21659","type":"GridBox"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21626","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"Nzfb7Xa08D8HgxEzppTwP0Cx5A68rPA/5kaRdNbY8D9iyTQ4vuTwP5ijAyDqKPE/qWG1YhN68T9SE26jqdfxPzxTKVh0GPI/lbJJOkRQ8j+OquvdG/XyP5BfwTsSWPM/0FUi37u48z+lVvytKYz0P+lrWR+wl/Q/kGfZsRZ09T88ePECTtf1P7QyCJV9efY/kISJ5usW9z+8uqDMvbr3P+iQIcqJVvg/0ANGwtcd+T88nbmtJ5b5P4hOA0l/c/o/lKlRkcXV+j+z24nM++n7P+i16XRjFfw/PMKBWAFV/T9MG32dD8v9P5POGTyflP4/6NqxHz3U/z90o3WUKg4AQKDzpIHtiQBAyvlwc7wpAUD0/zxli8kBQH/VvnhKLwJAIQYJV1ppAkBKDNVIKQkDQHYSoTr4qANAoBhtLMdIBEDKHjkelugEQPYkBRBliAVAGf9I59uuBUAgK9EBNCgGQEwxnfMCyAZAfqgWSI/UBkAskXiRS1MHQHY3aeXRZwdAMp4VTo/BB0CgPTXXoAcIQFIg9ToLEAhALpuSXwM4CECe2nHxplIIQF5eLibhVwhAGsNN6wlBCEA2Cd8vlRoIQKA9NdegBwhAShVHPtT0B0AfF2YL384HQMcA1F15mQdAdjdp5dFnB0BzVw16AEwHQNCXFhwJ6wZATDGd8wLIBkBYCc6fyH8GQCAr0QE0KAZAHN2jhscOBkBQ8hrTTpkFQPYkBRBliAVAr2ozUNAYBUDKHjkelugEQKBw9IKmggRAoBhtLMdIBEAj62ncGsgDQHYSoTr4qANASgzVSCkJA0B+JQtdpeYCQCAGCVdaaQJAEj0bfErzAUD0/zxli8kBQMr5cHO8KQFAVIYFZc32AECg86SB7YkAQOjasR891P8/85b4Mcqq/j+Uzhk8n5T+Pz3CgVgBVf0/6LXpdGMV/D+UqVGRxdX6Pzydua0nlvk/6JAhyolW+D+QhInm6xb3Pzx48QJO1/U/6GtZH7CX9D+QX8E7EljzP0ZoTDqgJfM/FdssQ6Q78j88UylYdBjyP2PpqtiJe/E/gJ0Ds1r+8D/mRpF01tjwPzc32+12tPA/","dtype":"float64","order":"little","shape":[102]},"y":{"__ndarray__":"bEiK/dnq+D/cb6aUPAz6P0yXwiufLfs/tNYMtGwQ/D+8vt7CAU/8Pyzm+llkcP0/nA0X8caR/j8MNTOIKbP/P+rKlK8DKgBAPq6nD0ZqAED2wTVb9/oAQARKsfcPRwFArtXDpqiLAUBn6VHyWRwCQCKiNFIDJAJAHv3fPQutAkDT2APyYucCQNYQbom8PQNAKI849d6HA0COJPzUbc4DQFu9wPmoDgRARjiKIB9fBEAMinLb7JAEQP5LGGzQ7wRAYH298RYXBUC2X6a3gYAFQM6ucw/zjgVAXOoUuzzwBUBuczQDMxEGQBLtl0PQRgZAZvLIlmOTBkAmh8JO5KEGQGj/kdPI0wZAUW65YPoEB0AbG9w6ByUHQN6aUJqVMgdAPhYmeig6B0BM8mcuGk4HQAips2qGXQdAqAZ0CohjB0Al2OJMSF4HQHfCspbVQAdA3ppQmpUyB0BseqeVEAMHQGQR3T4+rAZAJofCTuShBkBuczQDMxEGQIgSjKst9wVAtl+mt4GABUBLgbTffwIFQP9LGGzQ7wRARjiKIB9fBECOJPzUbc4DQNYQbom8PQNAHv3fPQutAkBm6VHyWRwCQHgBrxsC1AFArtXDpqiLAUD2wTVb9/oAQD6upw9GagBA/jdw8EgOAEAMNTOIKbP/P5wNF/HGkf4/WHoVzQg0/j8s5vpZZHD9Pw7Xjifvjvw/vL7ewgFP/D9Ml8Irny37P76NvhZOBfs/3G+mlDwM+j/aEphEnar5P2xIiv3Z6vg/U3K7W8aL+D/7IG5md8n3Pz+m9rTynPc/XoVUgrTQ9j+K+VHPFKj2P+Yj5//KFPY/GtI1OLKG9T8NoEhOY1b1P/x7NnPhmPQ/qqoZoU9l9D/8RnYaQPrzP6QxM3fSkPM/OoP9Ce1D8z9qm19I+D3zP3g6S8AQ6fI/3ECNnxSn8j/iTE59MX7yP9F9yMlBXPI/iOp5zNNL8j/3oL5OVXbyP3muk2Pw1PI/OoP9Ce1D8z8lk4GPry30P6qqGaFPZfQ/GtI1OLKG9T/dtb+F07X1P4r5Uc8UqPY/+iBuZnfJ9z/N6Ct+Y1f4P2xIiv3Z6vg/","dtype":"float64","order":"little","shape":[102]}},"selected":{"id":"21656"},"selection_policy":{"id":"21657"}},"id":"21635","type":"ColumnDataSource"},{"attributes":{},"id":"21654","type":"Selection"},{"attributes":{"axis":{"id":"21598"},"grid_line_color":null,"ticker":null},"id":"21601","type":"Grid"},{"attributes":{"children":[{"id":"21661"},{"id":"21659"}]},"id":"21662","type":"Column"},{"attributes":{"active_multi":null,"tools":[{"id":"21606"},{"id":"21607"},{"id":"21608"},{"id":"21609"},{"id":"21610"},{"id":"21611"},{"id":"21612"},{"id":"21613"}]},"id":"21616","type":"Toolbar"},{"attributes":{"toolbar":{"id":"21660"},"toolbar_location":"above"},"id":"21661","type":"ToolbarBox"},{"attributes":{},"id":"21596","type":"LinearScale"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21632","type":"Patch"},{"attributes":{"end":7.061359320956206,"start":-2.848632809256845},"id":"21640","type":"Range1d"},{"attributes":{},"id":"21655","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21615","type":"PolyAnnotation"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21636","type":"Patch"},{"attributes":{"formatter":{"id":"21647"},"major_label_policy":{"id":"21648"},"ticker":{"id":"21603"}},"id":"21602","type":"LinearAxis"},{"attributes":{},"id":"21644","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"21625"},"glyph":{"id":"21626"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21627"},"view":{"id":"21629"}},"id":"21628","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"z/MirEK6oj/hLd7XuQ+bP97aIhJLrpk/nhOtHy/inj/A0RS7PLqjPxW4dFHh8qM/DNI5lpi6qj8tE9rdRhiyP63CTc9tabY/YcF266SJuj9ALguX/Na9PyjSrUKrwL8/soxIYIAjwz80ACUelX3HP8D5RWht6Mg/Ur8WIntSzD/fMjnR6NvQPzgug0KuctE/baWQLwc+0z8F2IBYs5nVP5Bf49AlcdY/R/H8m94F2D/aSb9LzsHaP+iQQ1+db9s/hG1zxVL83T8g4dF2CjfgPzGzhWau4OA/yPkBPka24j8rpeSs9rjiPxWLh3B+SeQ/dBIyBYI15T90vJVx3s3lP7xKkhBOguc/ICtizL205z8YnaZzsorpP8xDkpP5M+o/Qkk7hxLY6z94XMJaNbPsPxjxfSNKVu4/IXXyIXEy7z9QYoF0gqfwP+ZGkXTW2PA/PFMpWHQY8j8KIZSLEELyP5BfwTsSWPM/tjQug1Wp8z/oa1kfsJf0P4mBqSzSG/U/PHjxAk7X9T+XzVZQH7X2P5CEiebrFvc/6JAhyolW+D/o6pWEcoT4Pzydua0nlvk/FiN1CRZk+j+UqVGRxdX6P+i16XRjFfw/4YXCB+JZ/D88woFYAVX9P5TOGTyflP4/mR+jZz7B/j/o2rEfPdT/P6DzpIHtiQBAXYWh1ILmAEDK+XBzvCkBQPT/PGWLyQFAIAYJV1ppAkC1pRmie60CQEoM1UgpCQNAdhKhOvioA0CgGG0sx0gEQMoeOR6W6ARAOQO8jJF7BUD3JAUQZYgFQCAr0QE0KAZATDGd8wLIBkB2N2nl0WcHQKA9NdegBwhAzEMByW+nCECGu9bEkhkJQPZJzbo+RwlAIFCZrA3nCUBMVmWe3IYKQMTt949j3gpAdlwxkKsmC0CiYv2BesYLQMxoyXNJZgxAMraLEbu5DED2bpVlGAYNQCJ1YVfnpQ1AktfUZxCyDUBMey1JtkUOQCFs9TolgQ5AeIH5OoXlDkDKnmlMiTUPQHxZoWWIhA9AoofFLFSFD0AWloITHLYPQJyUkpMT2g9AYAa+nAsDEEDmxkiPkRIQQHSaGSzsGRBAtNQups0oEEDYbDPTEiwQQIAIEdkZJxBAW1JYQfQgEECdIYo9WR4QQEcyTxAMGBBA5sZIj5ESEECDc5OEZw0QQOABoQbOAhBAYjRlVLjnD0B2F+/InL4PQFImNR7ajw9AoofFLFSFD0Am8rYBNVcPQCBzpQUMEw9AeIH5OoXlDkBwKyMrScgOQPTahfeFfA5ATHstSbZFDkCR7lroHywOQL82lFdR3A1AInVhV+elDUDZc6wLpIoNQFsnFDlTOQ1A9m6VZRgGDUDJ3mnquNQMQMxoyXNJZgxAvKuNADtUDECiYv2BesYLQEY36/djxgtA9qxl2mpMC0B2XDGQqyYLQOkrSuvl1wpATFZlntyGCkD7UqFAelMKQCBQmawN5wlAuKQDobK2CUD2Sc26PkcJQC6rcm6gDwlAzEMByW+nCEBiprrIOmsIQKA9NdegBwhA5t8KG6PGB0B2N2nl0WcHQLj0WFtsHwdATDGd8wLIBkB2Up4C5m4GQCAr0QE0KAZAmKorUd+nBUD2JAUQZYgFQMoeOR6W6ARAVAzllwG8BECgGG0sx0gEQMz1PsYFxwNAdhKhOvioA0BKDNVIKQkDQCjECIx4tQJAIAYJV1ppAkD0/zxli8kBQCO/ZqC0gQFAyvlwc7wpAUCg86SB7YkAQGgUHDqzTgBA6NqxHz3U/z+Uzhk8n5T+PzzCgVgBVf0/OaADZ8A1/T/otel0YxX8P5SpUZHF1fo/PJ25rSeW+T9GgcCWPLf4P+iQIcqJVvg/kISJ5usW9z88ePECTtf1P+hrWR+wl/Q/kF/BOxJY8z88UylYdBjyP+ZGkXTW2PA/IHXyIXEy7z94XMJaNbPsP81DkpP5M+o/KQyuyYm96T8gK2LMvbTnP3QSMgWCNeU//etMAiKI4z/I+QE+RrbiPyDh0XYKN+A/6JBDX51v2z8uEQodFW3bP5Bf49AlcdY/+4dYGSHN1T84LoNCrnLRPwhYP16cGNE/tG6n1I91yz/A+UVobejIPxzCjiMgs8U/CwTEi0aMwT9ALguX/Na9P3XAHn60ALs/My7QIoV+sz8UQ5NRyKiuPwTrWxqdGKk/wNEUuzy6oz/P8yKsQrqiP+ZGkXTW2PA/gJ0Ds1r+8D9i6arYiXvxPzxTKVh0GPI/FtssQ6Q78j9GaEw6oCXzP5BfwTsSWPM/6GtZH7CX9D88ePECTtf1P5CEiebrFvc/6ZAhyolW+D88nbmtJ5b5P5SpUZHF1fo/6LXpdGMV/D88woFYAVX9P5TOGTyflP4/85b4Mcqq/j/p2rEfPdT/P6DzpIHtiQBAVIYFZc32AEDK+XBzvCkBQPT/PGWLyQFAEj0bfErzAUAgBglXWmkCQH4lC12l5gJASgzVSCkJA0B2EqE6+KgDQCPradwayANAoBhtLMdIBECgcPSCpoIEQMoeOR6W6ARAr2ozUNAYBUD2JAUQZYgFQFDyGtNOmQVAHN2jhscOBkAgK9EBNCgGQFgJzp/IfwZATDGd8wLIBkDPlxYcCesGQHNXDXoATAdAdjdp5dFnB0DGANRdeZkHQB8XZgvfzgdAShVHPtT0B0CgPTXXoAcIQDcJ3y+VGghAGsNN6wlBCEBeXi4m4VcIQJ7acfGmUghALpuSXwM4CEBSIPU6CxAIQKA9NdegBwhAMp4VTo/BB0B2N2nl0WcHQCyReJFLUwdAfqgWSI/UBkBMMZ3zAsgGQCAr0QE0KAZAGf9I59uuBUD2JAUQZYgFQMoeOR6W6ARAoBhtLMdIBEB2EqE6+KgDQEoM1UgpCQNAIAYJV1ppAkB/1b54Si8CQPT/PGWLyQFAyvlwc7wpAUCg86SB7YkAQHSjdZQqDgBA6NqxHz3U/z+Uzhk8n5T+P0wbfZ0Py/0/PMKBWAFV/T/otel0YxX8P7Pbicz76fs/lKlRkcXV+j+ITgNJf3P6Pzydua0nlvk/0QNGwtcd+T/okCHKiVb4P7y6oMy9uvc/kISJ5usW9z+0MgiVfXn2Pzx48QJO1/U/kWfZsRZ09T/oa1kfsJf0P6VW/K0pjPQ/0FUi37u48z+QX8E7EljzP46q690b9fI/lLJJOkRQ8j88UylYdBjyP1ITbqOp1/E/qmG1YhN68T+YowMg6ijxP2LJNDi+5PA/5kaRdNbY8D9AseQOvKzwPweDETOmlPA/Nzfb7Xa08D/mRpF01tjwPw==","dtype":"float64","order":"little","shape":[308]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[308]}},"selected":{"id":"21654"},"selection_policy":{"id":"21655"}},"id":"21630","type":"ColumnDataSource"},{"attributes":{"end":6.573533916281606,"start":-2.399100365558758},"id":"21641","type":"Range1d"},{"attributes":{"overlay":{"id":"21615"}},"id":"21610","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"21630"},"glyph":{"id":"21631"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21632"},"view":{"id":"21634"}},"id":"21633","type":"GlyphRenderer"},{"attributes":{},"id":"21642","type":"Title"},{"attributes":{"source":{"id":"21635"}},"id":"21639","type":"CDSView"},{"attributes":{"axis":{"id":"21602"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21605","type":"Grid"},{"attributes":{},"id":"21652","type":"Selection"},{"attributes":{},"id":"21609","type":"WheelZoomTool"},{"attributes":{},"id":"21599","type":"BasicTicker"},{"attributes":{},"id":"21606","type":"ResetTool"},{"attributes":{},"id":"21607","type":"PanTool"}],"root_ids":["21662"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"969fa2df-49d6-4006-9f7a-0a84d998d18a","root_ids":["21662"],"roots":{"21662":"0c05401f-f4b4-4848-a97f-a452f578bb71"}}];
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