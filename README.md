## Why does this exist?

I was in a situation where I could only edit elements of the page, rather than having access to the whole DOM tree. This meant all my CSS and JavaScript includes had to be done inline part way through the body.

However, the framework was including jQuery at the end of the page and we had includes dependent on it. As such, we had to include our own version of jQuery first, in the DOM, before our JavaScript files.

Suddenly we had two versions of jQuery and horrible HTML structure.

## What does this do?

With LazyJS, replace all your JavaScript "type" attributes with "text/javascript+lazy". The browser won't include the JavaScript, which allows LazyJS to step in at the end of the page and include them.

## Hasn't this been done before?

Maybe, I wanted something lightweight and thought I'd share it. There may be better solutions out there for you.

## Will this automatically work on my site?

I don't guarantee it in the slightest. I'd like it to though. If there's an issue that you think I can address, do raise an issue or fork and submit a pull request.