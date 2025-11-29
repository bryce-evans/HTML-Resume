## HTML Resume

A repo for building resumes using HTML.

Main features:
* Responsive: page scales to all screen sizes.
* Absolute control: unique styles for desktop, mobile, and printing.
* Encrypted Contact info: Have contact info part of your resume without web scrapers spamming you later.

### Why HTML?

HTML is a powerful tool for resumes with an advanced set of features not seen in any other option.
* Web-first: Viewable - and editable - in any browser without complications of PDF. You can have navigation back buttons too!
* Responsive: Styles are dynamic, so content always fits the screen.
* Source Controlled: Allows quick diffs and tracking over time. 

* Customizable <i>and</i> readable: Quick and easy formatting, with cascading styles. 
* Unparalleled LTS: Web has impossible to beat community backing with longer term support than any community (or even corporate) project can guarantee
* Correct Instancing: HTML references source images correctly, whereas Word, InDesign, and others create unique copies. This matters when updating custom bullet SVGs - no updating 20 separate copies.
* LaTeX is painful: Despite its popularity in academia, LaTeX is arguably a terrible choice here.
  - Package support makes things difficult to port.
  - Disputes between which package to use for images, e.g. `\usepackage{svg}`, `epsfig`, `epstopdf`, `graphicx` further complicate setup.
  - Every resume I've seen fights with the LaTeX defaults, inching text pixel by pixel with `\vspace{0.1em}` everywhere.
  - Challenging rotated text. LaTeX doesn't have a concept of heirarchical absolute vs relative positioning, so rotated vertical text either locks to one page position (therefore needing updates when text shifts), or locks to the text near it but needs lots of updating styles for other text blocks to move around it.

#### Tool Comparison
As a quick summary, HTML offers all of the options needed for modern resumes, whereas other tools lack:
| Tool             | Cost      | Source Control|  Web Support  | Mobile Scaling  | Run Offline w/o Installation | Styling              |
| --------         | -------   | :-------:     |  -------      | :-------:       | :-------:                    |:-------              |
| MS Word          | ❌$70/yr  | ❌           | ❌pdf only    | ❌             | ❌                           |low-control WYSIWYG  | 
| Adobe InDesign   | ❌$23/mo  | ❌           | ❌pdf only    | ❌             | ❌                           |high-control WYSIWYG | 
| LaTeX            | ✅free    | ✅           | ❌pdf only    | ❌             | ❌                           |low-control code     | 
| HTML             | ✅free    | ✅           | ✅native      | ✅             | ✅                           |high-control code    | 


## Styles
Over time, styles have changed from serif to sans fonts, two-col to single column, and darker more formal design to brighter colors. See `old_templates` for a variety of options.
