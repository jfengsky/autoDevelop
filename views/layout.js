export default props => `
  <html>
    <head>
      <meta name="viewport" content="width=1000, initial-scale=1.0, maximum-scale=1.0">
      <title>${props.title}</title>
      <link href="/static/bootflat/css/bootstrap.min.css" rel="stylesheet">
      <link href="/static/bootflat/css/site.min.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">${props.content || ''}</div>
      <script src="/static/vendor.js"></script>
      <script src="/static/bundle.js"></script>
      <script>
        window.__INITSTATE__ = ${JSON.stringify(props.__INITSTATE__ || {})}
      </script>
    </body>
  </html>
`