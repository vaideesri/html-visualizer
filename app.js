// Function to handle toggling content display and button text
function toggleContent(buttonId, displayId, content, buttonText) {
    const displayElement = document.getElementById(displayId);
    const buttonElement = document.getElementById(buttonId);
  
    // Check if the display element contains the content
    // const contentExists = displayElement.innerHTML.includes(content);
  
    // if (contentExists) {
    //   // Content exists, remove it
    //   displayElement.innerHTML = '';
    //   buttonElement.textContent = 'Change ' + buttonText;
    // } else {
      // Content does not exist, add it
      displayElement.innerHTML = content;
      buttonElement.textContent =  buttonText;
    }
//   }


// Function to clear all displayed content

  function clearAll() {
    document.getElementById('display-h1').innerHTML = '';
    document.getElementById('display-h2').innerHTML = '';
    document.getElementById('display-h3').innerHTML = '';
    document.getElementById('display-h4').innerHTML = '';
    document.getElementById('display-h5').innerHTML = '';
    document.getElementById('display-h6').innerHTML = '';
    document.getElementById('display-p').innerHTML = '';
    document.getElementById('display-b').innerHTML = '';
    document.getElementById('display-ul').innerHTML = '';
    document.getElementById('display-em').innerHTML = '';
    document.getElementById('display-br').innerHTML = '';
    document.getElementById('display-a').innerHTML = '';
    document.getElementById('display-u').innerHTML = '';
    document.getElementById('display-i').innerHTML = '';
    document.getElementById('display-li').innerHTML = '';
    document.getElementById('display-ol').innerHTML = '';
    document.getElementById('display-dl').innerHTML = '';
    document.getElementById('display-dt/dd').innerHTML = '';
    document.getElementById('display-hr').innerHTML = '';
    document.getElementById('display-img').innerHTML = '';
    document.getElementById('display-address').innerHTML = '';
    document.getElementById('display-embed').innerHTML = '';
    document.getElementById('display-link').innerHTML = '';
    document.getElementById('display-rel').innerHTML = '';
    document.getElementById('display-href').innerHTML = '';
    document.getElementById('display-type').innerHTML = '';
    document.getElementById('display-a').innerHTML = '';
    document.getElementById('display-ahref').innerHTML = '';
    document.getElementById('display-hreflang').innerHTML = '';
    document.getElementById('display-arel').innerHTML = '';
    document.getElementById('display-adownload').innerHTML = '';
    document.getElementById('display-atype').innerHTML = '';
    document.getElementById('display-table').innerHTML = '';
    document.getElementById('display-tr').innerHTML = '';
    document.getElementById('display-td').innerHTML = '';
    document.getElementById('display-th').innerHTML = '';
    document.getElementById('display-thead').innerHTML = '';
    document.getElementById('display-tfoot').innerHTML = '';
    document.getElementById('display-tbody').innerHTML = '';
    document.getElementById('display-caption').innerHTML = '';
    document.getElementById('display-colgroup').innerHTML = '';
    document.getElementById('display-col').innerHTML = '';
  }

  // Event listener for the "Clear All" button
  document.getElementById('clear-all1').addEventListener('click', function() {
    clearAll();
  });

  
  // Event listeners for each button with toggling functionality
  document.getElementById('change-h1').addEventListener('click', function() {
    toggleContent('change-h1', 'display-h1', '<h1>This is a new &lt;h1&gt; tag</h1>', 'h1');
  });
  
  document.getElementById('change-h2').addEventListener('click', function() {
    toggleContent('change-h2', 'display-h2', '<h2>This is a new &lt;h2&gt; tag</h2>', 'h2');
  });
  
  document.getElementById('change-h3').addEventListener('click', function() {
    toggleContent('change-h3', 'display-h3', '<h3>This is a new &lt;h3&gt; tag</h3>', 'h3');
  });
  
  document.getElementById('change-h4').addEventListener('click', function() {
    toggleContent('change-h4', 'display-h4', '<h4>This is a new &lt;h4&gt; tag</h4>', 'h4');
  });
  
  document.getElementById('change-h5').addEventListener('click', function() {
    toggleContent('change-h5', 'display-h5', '<h5>This is a new &lt;h5&gt; tag</h5>', 'h5');
  });
  
  document.getElementById('change-h6').addEventListener('click', function() {
    toggleContent('change-h6', 'display-h6', '<h6>This is a new &lt;h6&gt; tag</h6>', 'h6');
  });



  document.getElementById('change-p').addEventListener('click', function() {
    toggleContent('change-p', 'display-p', '<p>This is a new &lt;p&gt; tag</p>', 'paragraph');
  });
  
  document.getElementById('change-b').addEventListener('click', function() {
    toggleContent('change-b', 'display-b', '<b>This is a new &lt;b&gt; tag</b>', 'bold text');
  });

  document.getElementById('change-u').addEventListener('click', function() {
    toggleContent('change-u', 'display-u', '<u>This is underlined text</u>', 'underline');
  });

  document.getElementById('change-i').addEventListener('click', function() {
    toggleContent('change-i', 'display-i', '<i>This is Italic text</i>', 'italics');
  });

  document.getElementById('change-em').addEventListener('click', function() {
    toggleContent('change-em', 'display-em', '<em>This is a new &lt;em&gt; tag</em>', 'emphasis');
  });
  
  document.getElementById('change-br').addEventListener('click', function() {
    toggleContent('change-br', 'display-br', 'This is a &lt;br&gt; <br/> tag', 'Break');
  });

  document.getElementById('clear-all2').addEventListener('click', function() {
    clearAll();
  });

  document.getElementById('change-li').addEventListener('click', function() {
    toggleContent('change-li', 'display-li', '&lt;li&gt; Tag is having 2 types &lt;ol&gt; Ordered List and &lt;ul&gt; unordered List', 'list');
  });

  document.getElementById('change-ul').addEventListener('click', function() {
    toggleContent('change-ul', 'display-ul', '<ul><li>New List Item 1</li><li>New List Item 2</li><li>New List Item 3</li></ul>', 'Unordered list');
  });

  document.getElementById('change-ol').addEventListener('click', function() {
    toggleContent('change-ol', 'display-ol', '<ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>', 'Ordered List');
  });

  document.getElementById('change-dl').addEventListener('click', function() {
    toggleContent('change-dl', 'display-dl', 'The &lt;dl&gt; tag defines a description list.<br/> The &lt;dl&gt; tag is used in conjunction with <br/> <b> &lt;dt&gt; <b/> (defines terms/names) and <br/> &lt;dd&gt; (describes each term/name).', 'Description list');
  });

  document.getElementById('change-dt/dd').addEventListener('click', function() {
    toggleContent('change-dt/dd', 'display-dt/dd', '<dl><dt>Coffee</dt><dd>Black hot drink</dd><dt>Milk</dt><dd>White cold drink</dd></dl>', 'Term/Description');
  });

  document.getElementById('clear-all3').addEventListener('click', function() {
    clearAll();
  });

  document.getElementById('change-link').addEventListener('click', function() {
    toggleContent('change-link', 'display-link', 'Link Tag will link the external stylesheet, favicons and scripts <br/> &lt;link &gt;', 'Link');
  });

  document.getElementById('change-rel').addEventListener('click', function() {
    toggleContent('change-rel', 'display-rel', 'rel Tag will tells the relationship with external file  <br/> &lt;link rel ="stylesheet" &gt; <br/> &lt;link rel ="script" &gt;', 'relationship');
  });

  document.getElementById('change-href').addEventListener('click', function() {
    toggleContent('change-href', 'display-href', 'This haves the actual path of the file <br/> &lt;link rel="stylesheet" href="styles.css"&gt; <br/> &lt;link rel="script" href="script.js" /&gt; ', 'hyperreference');
  });

  document.getElementById('change-type').addEventListener('click', function() {
    toggleContent('change-type', 'display-type', '<br/> &lt;link rel ="stylesheet "href="styles.css"&gt; <br/> &lt;link rel ="script "href="script.js"&gt;', 'Type');
  });

  document.getElementById('clear-all4').addEventListener('click', function() {
    clearAll();
  });
  

  
  document.getElementById('change-a').addEventListener('click', function() {
    toggleContent('change-a', 'display-a', '<a href="#">This is a Anchor tag </a> <br/> &lt;a&gt;&lt;a/&gt;', '<a>');
  });

  document.getElementById('change-arel').addEventListener('click', function() {
    toggleContent('change-arel', 'display-arel', '<a> &lt;a rel="referencesite" &gt; &lt;a/&gt; </a>', 'relation');
  });

  document.getElementById('change-ahref').addEventListener('click', function() {
    toggleContent('change-ahref', 'display-ahref', '<a> &lt;a rel="referencesite" href="www.google.com" &gt; &lt;a/&gt;</a>', 'hyperreference');
  });

  document.getElementById('change-hreflang').addEventListener('click', function() {
    toggleContent('change-hreflang', 'display-hreflang','<a> &lt;a rel="referencesite" href="www.google.com" hreflang="en" &gt; &lt;a/&gt;</a>', 'referencelanguage');
  });

  document.getElementById('change-adownload').addEventListener('click', function() {
    toggleContent('change-adownload', 'display-adownload', '<a href="#">This will download onclicking the text <br/> &lt;a rel="referencesite" href="www.google.com" hreflang="en" download="file.txt &gt; &lt;a/&gt; </a>', 'download');
  });

  document.getElementById('change-atype').addEventListener('click', function() {
    toggleContent('change-atype', 'display-atype', '<a> &lt;a rel="stylesheet" type="text/css" &gt; &lt;/a &gt;</a>', 'Type');
  });

  document.getElementById('clear-all5').addEventListener('click', function() {
    clearAll();
  });
 
  document.getElementById('change-hr').addEventListener('click', function() {
    toggleContent('change-hr', 'display-hr', '<hr>', '<hr>');
  });
  
  document.getElementById('change-img').addEventListener('click', function() {
    toggleContent('change-img', 'display-img', '<img src="https://via.placeholder.com/150" alt="Placeholder Image">', '<img>');
  });
  
  document.getElementById('change-address').addEventListener('click', function() {
    toggleContent('change-address', 'display-address', '<address>123 Street, City, Country</address>', '<address>');
  });
  
  document.getElementById('change-embed').addEventListener('click', function() {
    toggleContent('change-embed', 'display-embed', '<embed src="path_to_embedded_content" type="content_type">', '<embed>');
  });
  
  document.getElementById('clear-all6').addEventListener('click', function() {
    clearAll();
  });

  document.getElementById('change-table').addEventListener('click', function() {
    toggleContent('change-table', 'display-table', '<table><tr><th></th><th></th></tr><tr><td></td><td></td></tr></table>', 'table');
  });
  
  document.getElementById('change-tr').addEventListener('click', function() {
    toggleContent('change-tr', 'display-tr', '<table><tr><th>Row1</th><th>Row1</th></tr><tr><th>Row 2</th><th>Row 2</th></tr></table>', 'table row');  });
    
    document.getElementById('change-th').addEventListener('click', function() {
        toggleContent('change-th', 'display-th', '<table><tr><th>Heading1</th><th>Heading2</th></tr><tr><td>  </td><td>  </td></tr></table>', 'table head');
      });
  document.getElementById('change-td').addEventListener('click', function() {
    toggleContent('change-td', 'display-td',  '<table><tr><th>Heading1</th><th>Heading2</th></tr><tr><td> Data1 </td><td> Data2 </td></tr></table>', 'table data');
  });
  
  
  
  document.getElementById('change-thead').addEventListener('click', function() {
    toggleContent('change-thead', 'display-thead', '<table><tr><th>Heading1</th><th>Heading2</th></tr><tr><td> Data1 </td><td> Data2 </td></tr></table>', 'thead');
  });
  
  document.getElementById('change-tfoot').addEventListener('click', function() {
    toggleContent('change-tfoot', 'display-tfoot', '<tfoot><tr><td>Footer 1</td><td>Footer 2</td></tr></tfoot>', 'tfoot');
  });
  
  document.getElementById('change-tbody').addEventListener('click', function() {
    toggleContent('change-tbody', 'display-tbody', '<tbody><tr><td>Data 1</td><td>Data 2</td></tr></tbody>', 'tbody');
  });
  
  document.getElementById('change-caption').addEventListener('click', function() {
    toggleContent('change-caption', 'display-caption', '<caption>This is a table caption</caption>', 'caption');
  });
  
  document.getElementById('change-colgroup').addEventListener('click', function() {
    toggleContent('change-colgroup', 'display-colgroup', '<colgroup><col span="2" style="background-color:#f2f2f2;"></colgroup>', 'colgroup');
  });
  
  document.getElementById('change-col').addEventListener('click', function() {
    toggleContent('change-col', 'display-col', '<col style="background-color:#f2f2f2;">', 'col');
  });
  
  


  