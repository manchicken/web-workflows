# Web Workflows

This is a simple JavaScript library for managing web workflows.

# Demos!

We have demos. To run the demos, take any vanilla `python3` install, and simply run `python3 -m http.server` in the same directory as this `README.md` file.

# Sample Install

```html
<html>
  <head>
    <script src="src/web-workflows.js" type="text/javascript"></script>
    <script type="text/javascript">
      document.onload = () => initWorkflow({
        firstUrl: 'http://www.foo.com',
      })
    </script>
  </head>
  <body>
    <h1>Workflow Target</h1>
    <div id="workflow-target"></div>
  </body>
</html>
```