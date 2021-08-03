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
    
      
      
    
      var element = document.getElementById("fe74c3b3-ddea-47da-aae2-b3941501c6eb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fe74c3b3-ddea-47da-aae2-b3941501c6eb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"eb8f6d88-3932-4ecf-b310-bc5a151d9a4f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20059","type":"Title"},{"attributes":{},"id":"20071","type":"Selection"},{"attributes":{},"id":"20020","type":"LinearScale"},{"attributes":{"overlay":{"id":"20038"}},"id":"20032","type":"BoxZoomTool"},{"attributes":{},"id":"20027","type":"BasicTicker"},{"attributes":{"axis":{"id":"20022"},"ticker":null},"id":"20025","type":"Grid"},{"attributes":{},"id":"20016","type":"DataRange1d"},{"attributes":{},"id":"20061","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"20050","type":"Patch"},{"attributes":{"below":[{"id":"20022"}],"center":[{"id":"20025"},{"id":"20029"}],"height":500,"left":[{"id":"20026"}],"output_backend":"webgl","renderers":[{"id":"20052"},{"id":"20057"}],"title":{"id":"20059"},"toolbar":{"id":"20040"},"toolbar_location":"above","width":500,"x_range":{"id":"20014"},"x_scale":{"id":"20018"},"y_range":{"id":"20016"},"y_scale":{"id":"20020"}},"id":"20013","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20023","type":"BasicTicker"},{"attributes":{},"id":"20064","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"20054"},"glyph":{"id":"20055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20056"},"view":{"id":"20058"}},"id":"20057","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"20051","type":"Patch"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"20056","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20039","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"20037","type":"HoverTool"},{"attributes":{},"id":"20014","type":"DataRange1d"},{"attributes":{"formatter":{"id":"20064"},"major_label_policy":{"id":"20065"},"ticker":{"id":"20027"}},"id":"20026","type":"LinearAxis"},{"attributes":{"source":{"id":"20049"}},"id":"20053","type":"CDSView"},{"attributes":{"data_source":{"id":"20049"},"glyph":{"id":"20050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20051"},"view":{"id":"20053"}},"id":"20052","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"fDyquWaCAMCgygrNKmwAwOfmy/OyPwDALgONGjsTAMDqPpyChs3/v3l3HtCWdP+/B7CgHacb/7+V6CJrt8L+vyMhpbjHaf6/sVknBtgQ/r8/kqlT6Lf9v83KK6H4Xv2/XAOu7ggG/b/qOzA8Ga38v3h0sokpVPy/Bq001zn7+7+U5bYkSqL7vyIeOXJaSfu/sFa7v2rw+r8+jz0Ne5f6v8zHv1qLPvq/WgBCqJvl+b/pOMT1q4z5v3dxRkO8M/m/BarIkMza+L+T4kre3IH4vyEbzSvtKPi/sFNPef3P978+jNHGDXf3v8zEUxQeHve/Wv3VYS7F9r/oNVivPmz2v3Zu2vxOE/a/BKdcSl+69b+S396Xb2H1vyAYYeV/CPW/rlDjMpCv9L88iWWAoFb0v8vB582w/fO/WfppG8Gk87/nMuxo0Uvzv3Vrbrbh8vK/A6TwA/KZ8r+S3HJRAkHyvyAV9Z4S6PG/rk137CKP8b88hvk5Mzbxv8q+e4dD3fC/WPf91FOE8L/mL4AiZCvwv+jQBODopO+/BEIJewnz7r8gsw0WKkHuvz4kErFKj+2/WpUWTGvd7L92Bhvniyvsv5J3H4Kseeu/rugjHc3H6r/KWSi47RXqv+bKLFMOZOm/BDwx7i6y6L8grTWJTwDovzweOiRwTue/WI8+v5Cc5r90AENaserlv5BxR/XROOW/rOJLkPKG5L/IU1ArE9Xjv+TEVMYzI+O/AjZZYVRx4r8ep138dL/hvzoYYpeVDeG/VolmMrZb4L/k9NWarVPfvxzX3tDu792/VLnnBjCM3L+Qm/A8cSjbv8h9+XKyxNm/AGACqfNg2L84QgvfNP3Wv3AkFBV2mdW/qAYdS7c11L/g6CWB+NHSvxjLLrc5btG/UK037XoK0L8YH4FGeE3Nv4jjkrL6hcq/+KekHn2+x79obLaK//bEv9gwyPaBL8K/kOqzxQjQvr9wc9edDUG5v2D8+nUSsrO/gAo9nC5GrL9AHIRMOCihvwC4LPMHKYi/AAG3S9FOhD+ArqaiqjGgP8CcX/KgT6s/gEUMocs2sz+gvOjIxsW4P8AzxfDBVL4/cNVQjN7xwT8AET8gXLnEP5BMLbTZgMc/EIgbSFdIyj+gwwnc1A/NPzD/929S188/YB3zAWhP0T8oO+rLJrPSP/BY4ZXlFtQ/uHbYX6R61T+AlM8pY97WP0iyxvMhQtg/ENC9veCl2T/Y7bSHnwnbP6ALrFFebdw/aCmjGx3R3T8wR5rl2zTfP3yyyFdNTOA/XEHEvCz+4D9A0L8hDLDhPyRfu4brYeI/CO6268oT4z/sfLJQqsXjP9ALrrWJd+Q/tJqpGmkp5T+YKaV/SNvlP3y4oOQnjeY/YEecSQc/5z9E1peu5vDnPyhlkxPGoug/DPSOeKVU6T/wgordhAbqP9QRhkJkuOo/uKCBp0Nq6z+cL30MIxzsP3y+eHECzuw/YE101uF/7T9E3G87wTHuPyhra6Cg4+4/DPpmBYCV7z94RDG1ryPwP+oLr2effPA/XNMsGo/V8D/OmqrMfi7xP0BiKH9uh/E/simmMV7g8T8k8SPkTTnyP5a4oZY9kvI/CIAfSS3r8j96R537HETzP+oOG64MnfM/XNaYYPz18z/OnRYT7E70P0BllMXbp/Q/siwSeMsA9T8k9I8qu1n1P5a7Dd2qsvU/CIOLj5oL9j96SglCimT2P+wRh/R5vfY/XtkEp2kW9z/QoIJZWW/3P0JoAAxJyPc/tC9+vjgh+D8m9/twKHr4P5i+eSMY0/g/Cob31Qcs+T96TXWI94T5P+wU8zrn3fk/Xtxw7dY2+j/Qo+6fxo/6P0JrbFK26Po/tDLqBKZB+z8m+me3lZr7P5jB5WmF8/s/ColjHHVM/D98UOHOZKX8P+4XX4FU/vw/YN/cM0RX/T/SplrmM7D9P0Ru2JgjCf4/tjVWSxNi/j8m/dP9Arv+P5rEUbDyE/8/CozPYuJs/z9+U00V0sX/P3eN5eNgDwBAMXEkvdg7AEDpVGOWUGgAQKM4om/IlABAWxzhSEDBAEATACAiuO0AQM3jXvsvGgFAhced1KdGAUA/q9ytH3MBQPeOG4eXnwFAsXJaYA/MAUBpVpk5h/gBQGlWmTmH+AFAsXJaYA/MAUD3jhuHl58BQD+r3K0fcwFAhced1KdGAUDN4177LxoBQBMAICK47QBAWxzhSEDBAECjOKJvyJQAQOlUY5ZQaABAMXEkvdg7AEB3jeXjYA8AQH5TTRXSxf8/CozPYuJs/z+axFGw8hP/Pyb90/0Cu/4/tjVWSxNi/j9EbtiYIwn+P9KmWuYzsP0/YN/cM0RX/T/uF1+BVP78P3xQ4c5kpfw/ColjHHVM/D+YweVphfP7Pyb6Z7eVmvs/tDLqBKZB+z9Ca2xStuj6P9Cj7p/Gj/o/Xtxw7dY2+j/sFPM65935P3pNdYj3hPk/Cob31Qcs+T+YvnkjGNP4Pyb3+3Aoevg/tC9+vjgh+D9CaAAMScj3P9CggllZb/c/XtkEp2kW9z/sEYf0eb32P3pKCUKKZPY/CIOLj5oL9j+Wuw3dqrL1PyT0jyq7WfU/siwSeMsA9T9AZZTF26f0P86dFhPsTvQ/XNaYYPz18z/qDhuuDJ3zP3pHnfscRPM/CIAfSS3r8j+WuKGWPZLyPyTxI+RNOfI/simmMV7g8T9AYih/bofxP86aqsx+LvE/XNMsGo/V8D/qC69nn3zwP3hEMbWvI/A/DPpmBYCV7z8oa2ugoOPuP0TcbzvBMe4/YE101uF/7T98vnhxAs7sP5wvfQwjHOw/uKCBp0Nq6z/UEYZCZLjqP/CCit2EBuo/DPSOeKVU6T8oZZMTxqLoP0TWl67m8Oc/YEecSQc/5z98uKDkJ43mP5gppX9I2+U/tJqpGmkp5T/QC661iXfkP+x8slCqxeM/CO6268oT4z8kX7uG62HiP0DQvyEMsOE/XEHEvCz+4D98sshXTUzgPzBHmuXbNN8/aCmjGx3R3T+gC6xRXm3cP9jttIefCds/ENC9veCl2T9IssbzIULYP4CUzylj3tY/uHbYX6R61T/wWOGV5RbUPyg76ssms9I/YB3zAWhP0T8w//dvUtfPP6DDCdzUD80/EIgbSFdIyj+QTC202YDHPwARPyBcucQ/cNVQjN7xwT/AM8XwwVS+P6C86MjGxbg/gEUMocs2sz/AnF/yoE+rP4CupqKqMaA/AAG3S9FOhD8AuCzzBymIv0AchEw4KKG/gAo9nC5GrL9g/Pp1ErKzv3Bz150NQbm/kOqzxQjQvr/YMMj2gS/Cv2hstor/9sS/+KekHn2+x7+I45Ky+oXKvxgfgUZ4Tc2/UK037XoK0L8Yyy63OW7Rv+DoJYH40dK/qAYdS7c11L9wJBQVdpnVvzhCC980/da/AGACqfNg2L/IfflyssTZv5Cb8DxxKNu/VLnnBjCM3L8c197Q7u/dv+T01ZqtU9+/VolmMrZb4L86GGKXlQ3hvx6nXfx0v+G/AjZZYVRx4r/kxFTGMyPjv8hTUCsT1eO/rOJLkPKG5L+QcUf10Tjlv3QAQ1qx6uW/WI8+v5Cc5r88HjokcE7nvyCtNYlPAOi/BDwx7i6y6L/myixTDmTpv8pZKLjtFeq/rugjHc3H6r+Sdx+CrHnrv3YGG+eLK+y/WpUWTGvd7L8+JBKxSo/tvyCzDRYqQe6/BEIJewnz7r/o0ATg6KTvv+YvgCJkK/C/WPf91FOE8L/KvnuHQ93wvzyG+TkzNvG/rk137CKP8b8gFfWeEujxv5LcclECQfK/A6TwA/KZ8r91a2624fLyv+cy7GjRS/O/WfppG8Gk87/LwefNsP3zvzyJZYCgVvS/rlDjMpCv9L8gGGHlfwj1v5Lf3pdvYfW/BKdcSl+69b92btr8ThP2v+g1WK8+bPa/Wv3VYS7F9r/MxFMUHh73vz6M0cYNd/e/sFNPef3P978hG80r7Sj4v5PiSt7cgfi/BarIkMza+L93cUZDvDP5v+k4xPWrjPm/WgBCqJvl+b/Mx79aiz76vz6PPQ17l/q/sFa7v2rw+r8iHjlyWkn7v5TltiRKovu/Bq001zn7+794dLKJKVT8v+o7MDwZrfy/XAOu7ggG/b/Nyiuh+F79vz+SqVPot/2/sVknBtgQ/r8jIaW4x2n+v5XoImu3wv6/B7CgHacb/795dx7QlnT/v+o+nIKGzf+/LgONGjsTAMDn5svzsj8AwKDKCs0qbADAfDyquWaCAMA=","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"20069"},"selection_policy":{"id":"20070"}},"id":"20049","type":"ColumnDataSource"},{"attributes":{},"id":"20030","type":"ResetTool"},{"attributes":{},"id":"20036","type":"SaveTool"},{"attributes":{"axis":{"id":"20026"},"dimension":1,"ticker":null},"id":"20029","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"20030"},{"id":"20031"},{"id":"20032"},{"id":"20033"},{"id":"20034"},{"id":"20035"},{"id":"20036"},{"id":"20037"}]},"id":"20040","type":"Toolbar"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"20055","type":"Line"},{"attributes":{},"id":"20033","type":"WheelZoomTool"},{"attributes":{},"id":"20035","type":"UndoTool"},{"attributes":{},"id":"20062","type":"AllLabels"},{"attributes":{},"id":"20070","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"20039"}},"id":"20034","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"Wa5JpqKYAMCBbXFuYQr/v14UsSnpgv6/YelbcDkX/L/tl7XJjfL7v3T0eNI+0Pq/etNhjIoT+r9FgjNI1t75vyLjw6yOjvi/UoGbgtNJ978yFG2ONeT2v5/Hf/c3sPa/BJyPheVR9r9SKWRQs9D0v7sx95WJovS/v4RfoZyD9L811S+2W1v0v+Ojr/fPI/O/o/DwhZpv8r+H2UOnHYrxv01eDylRGfG/4ITPXZvP8L9Xu4QbSeftv6ZJCeIpNuu/KfNIs6kK67+AWT6kxrPpvxh4RcSQHOm/132XfPOM6L88QBKNqDvov7EeqExlE+e/DUtU/GM55L+8bHFSxA7kv3SJT3FfouO/yDuwZluE47/wHe1wEJriv0cFwT9pO+K/X3XXgGQ84b8XfXg/1prdv2avbTVr7ty/2zqoF6h62L+z0LP4G17Wv0UfwXDv7tW/ZpdWfNzK1b9Cv+C1knnTv5dtogbh2tC/tzlbJrFcz7+F2erNP+bOv7MxrExgRc6/Ww5p9vN1zL9NGQscFmbJvxGGhD7b9Ma/dpEV0i4qxL+Jbp7rBVXAv+m08CfrdK6/P6ZuCWMppL+zeYsxTk6hv03M0yxtxXA/gonqs/YooT9H58djSD60P346Uztptro/Rpiyimgtxj/+PdCPw4nQPzzOAITSkNE/h5/I7gzc0T90dkKtc8XSP3rYPTmdE9k/p3VXXhOk2T+fjVHsuz3bP5cgisvAB9w/T5VZIV6l3D+GAQJEzc/cP9rwrtFTL98/fJ3KeVbI4T8mB3PzdBfiP0EQIow8FuM/xCk5Sps14z/Y3K7C0zDlPzjJrW1wXuk/u5XF5jCL6j9jcssUCLPqP6ptb6Q3zuo/6unM4BjW6j8y9s/iaHvrP9b6UQB8uuw/pooG6kfS7j+mlQLN9RHwP2iky/pITvE/ud14j1CD8T/3kCFRNZjyP8ZUmiI61/c/ILc5cmwn+D83B/En65b4P4LvnVSvJfk/ZvrfTds9+j/d/tCq0fj6P3GxDuX/Hvs/Mvvy2XNF/D+/2q0XoVn+P6cCqM6wNwFAaVaZOYf4AUA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"TqNss7rO7j9AScdIz3rwP9F1J2uLvvA/UAvSR2P08T8KNCUbuQbyP8aFw5bgl/I/QxbPuTr28j/ePubblBDzP28Onqm4uPM/Vz+yPhZb9D/ndck45Y30PzAcQATkp/Q//jE4PQ3X9D9X681Xppf1PyJnBDW7rvU/oD1QrzG+9T9mFegkUtL1Pw4uKAQYbvY/rocHvTLI9j88E14s8Tr3P9pQeGtXc/c/kD0YUTKY9z8q0R65LYb4P5atfYd1Mvk/NsMtk1U9+T+gafBWDpP5P/qh7s7buPk/iiDaIMPc+T/xb7vcFfH5P1T41awmO/o/Pe3qAKfx+j/RpGPrTvz6P6MdrCNoF/s/DvFTJuke+z+EuMTje1n7P66+D7Alcfs/qCLK3+aw+z9d8BA4pUz8PxNKUpkyYvw/pfgK/arw/D/qhemAPDT9Pxfc5xEiQv0/Ey11cKRG/T8Y6EOpzZD9P02yK9+j5P0/ZUya7TQK/j9oUiEDnBH+P+U8NfupG/4/Gm+ZwKA4/j9rTj+enmn+P5+3F0yykP4/6abeEl29/j8XGUahr/r+Pyw9YFMshv8/Z0Xac1qv/z8Z0jnHxrr/P/M0S1sxBABAE9Vn7VEiAECdH48h+VAAQOpM7aTZagBAwpRVRGuxAEDgA/04nAgBQOQMQCgNGQFA+InszsAdAUBnJ9Q6VywBQIjdk9M5kQFAWnflNUGaAUDaGMW+27MBQAmiuAx8wAFAVZkV4lXKAUAYIEDU/MwBQA7vGj318gFAsFM5zwo5AkDlYG6e7kICQAhChJHHYgJAOCVHabNmAkCb21V4GqYCQCe5tQ3OKwNAt7LYHGZRA0BMbpkCYVYDQLXtjfTGWQNAPZ0ZHMNaA0DG/lkcbW8DQFs/CoBPlwNAVdFA/UjaA0BqpUBzfQQEQBrpsj6SUwRAbjfeI9RgBEA+ZEhUDaYEQDKVpojO9QVAyG2OHNsJBkDOQfzJuiUGQOB7J9VrSQZAmv5303aPBkC3P7RqNL4GQFysQ/m/xwZAzL589lwRB0CwdutFaJYHQFQBVGfYmwhANKvMnEP8CEA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"20071"},"selection_policy":{"id":"20072"}},"id":"20054","type":"ColumnDataSource"},{"attributes":{},"id":"20018","type":"LinearScale"},{"attributes":{},"id":"20031","type":"PanTool"},{"attributes":{},"id":"20069","type":"Selection"},{"attributes":{"formatter":{"id":"20061"},"major_label_policy":{"id":"20062"},"ticker":{"id":"20023"}},"id":"20022","type":"LinearAxis"},{"attributes":{},"id":"20065","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20038","type":"BoxAnnotation"},{"attributes":{"source":{"id":"20054"}},"id":"20058","type":"CDSView"},{"attributes":{},"id":"20072","type":"UnionRenderers"}],"root_ids":["20013"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"eb8f6d88-3932-4ecf-b310-bc5a151d9a4f","root_ids":["20013"],"roots":{"20013":"fe74c3b3-ddea-47da-aae2-b3941501c6eb"}}];
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