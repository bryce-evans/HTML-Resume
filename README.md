## HTML Resume

A repo for building resumes using HTML.

HTML is a powerful tool for resumes that offers lots of features more popular tools lack:
* Web-first: Have you resume be web-native to be viewable on a website without complications of PDF.
* Responsive: Allows styles to be dynamic, so that info can be viewable on desktop and mobile (again, no nasty zooming for PDFs).
* Source Controlled: Allow quick diffs and tracking over time. LaTeX also offers this, but lacks all the other points listed here.
* Detailed, Controlled Styles: Quick and easy formatting, with cascading styles. No more fighting LaTeX defaults, inching text pixel by pixel with `\vspace{0.1em}` everywhere.
* Image support: Word and InDesign duplicate images repeatedly. LaTeX has lots of packages that do this but there is dispute between `\usepackage{svg}`, `epsfig`, `epstopdf`, `graphicx` setup, each with its own tradeoffs. There isn't a standard method and support rises and falls over time. Web tools like html have unparalleled LTS with the largest community backing. 


## Styles

Over time, styles have changed from serif to sans fonts, two-col to single column, and darker more formal design to brighter coloars. See `old_templates` for a variety of options.


## Tool Comparison
As a quick summary, HTML offers all of the options needed for modern resumes, whereas other tools lack:
| Tool             | Cost      | Source Control|  Web Support  | Mobile Scaling  | Run Offline w/o Installation | Styling              |
| --------         | -------   | :-------:     |  -------      | :-------:       | :-------:                    |:-------              |
| MS Word          | ❌$70/yr  | ❌           | ❌pdf only    | ❌             | ❌                           |low-control WYSIWYG  | 
| Adobe InDesign   | ❌$23/mo  | ❌           | ❌pdf only    | ❌             | ❌                           |high-control WYSIWYG | 
| LaTeX            | ✅free    | ✅           | ❌pdf only    | ❌             | ❌                           |low-control code     | 
| HTML             | ✅free    | ✅           | ✅native      | ✅             | ✅                           |high-control code    | 


> [!NOTE]  
> As an example of "control" for styling, consider the case of creating text, background highlighted with small fixed padding amount, rotated 90 degrees, positioned so that it doesn't affect styling for surrounding text. This is difficult to do in Word or LaTeX. Floating shapes with padded text are well supported in other tools.