/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

//
// Basic node example that prints document metadata and text content.
// Requires single file built version of PDF.js -- please run
// `gulp singlefile` before running the example.
//

// Run `gulp dist-install` to generate 'pdfjs-dist' npm package files.
var pdfjsLib = require("pdfjs-dist");

// Loading file from file system into typed array
var pdfPath = process.argv[2] || "e.pdf";
var courseCode = process.argv[3];
var pattern = courseCode + String.raw`(?:.*\n){2,3}(?:(A\+|A|A\-|B\+|B|B\-|C\+|C|D\+|D|S|U|P|F)\n)`;
var regExPat = new RegExp(pattern);

// Will be using promises to load document, pages and misc data instead of
// callback.
var loadingTask = pdfjsLib.getDocument(pdfPath);
loadingTask.promise
  .then(function(doc) {
    var numPages = doc.numPages;

    var lastPromise = doc.getMetadata();

    var loadPage = function(pageNum) {
      return doc.getPage(pageNum).then(function(page) {
        return page
          .getTextContent()
          .then(function(content) {
            // Content contains lots of information about the text layout and
            // styles, but we need only strings at the moment
            var strings = content.items.map(function(item) {
              return item.str;
            });
            // console.log(strings.join("\n"));
            var joinedStr = strings.join("\n")
            if (regExPat.test(joinedStr)) {
              console.log("Grade: " + regExPat.exec(joinedStr)[1])
            }
          });
      });
    };
    // Loading of the first page will wait on metadata and subsequent loadings
    // will wait on the previous pages.
    for (var i = 1; i <= numPages; i++) {
      lastPromise = lastPromise.then(loadPage.bind(null, i));
    }
    return lastPromise;
  })
  .then(
    function() {
    },
    function(err) {
      console.error("Error: " + err);
    }
  );
