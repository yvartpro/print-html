# Lifetime Print/PDF Tool

A robust, developer-friendly utility for generating A4-compliant PDFs from HTML content. 
Built to last with pure HTML, CSS, and modern Javascript.

## Features
- **A4 Compliance**: Exact dimensions (210mm x 297mm) with print-safe margins.
- **Smart Page Breaks**: 
    - Automatically handles table overflows.
    - Prevents rows from being sliced in half (`avoid: 'tr'`).
    - Respects logical content blocks.
- **No Blank Pages**: Smart script logic prevents "ghost" pages caused by margin overflows.
- **Cross-Browser**: Works with native print (Ctrl+P) and programmatic download.

## How to Use

### 1. Structure
Copy the `pdf-container` structure into your page:

```html
<!-- Wrapper matches A4 dimensions -->
<div id="pdf-root" class="pdf-container">

  <!-- Repeats on every page (browser print only) -->
  <header class="report-header">
    <h1>Your Title</h1>
  </header>

  <!-- Dynamic Content Area -->
  <main class="report-content">
    <!-- PUT YOUR GENERATED TABLES/GRIDS HERE -->
  </main>

  <!-- Footer -->
  <footer class="report-footer">
    <p>Page Footer</p>
  </footer>

</div>
```

### 2. Dependencies
Include the `html2pdf.js` library and our `script.js`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script src="script.js"></script>
```

### 3. Generate
Call the function from any button:

```html
<button id="btn-download" onclick="generatePDF()">Download PDF</button>
```

## Customization

### Preventing Cuts
To prevent a specific element (like a paragraph or card) from being split across two pages, add the class `.info-text` (or update the configuration in `script.js`):

```javascript
pagebreak: {
  mode: ['css', 'legacy'],
  avoid: ['tr', '.info-text', '.your-custom-class']
}
```

### Margins
Adjust margins in `script.js` if you need more space:
```javascript
margin: [10, 15], // [Vertical, Horizontal] in mm
```

## "Lifetime" Guarantee
This tool uses:
*   **Manual Blob Generation**: Bypasses library bugs to force correct filenames.
*   **CSS Reset**: Resets explicit heights during generation to ensure 1-page content remains 1 page.
*   **Forced Backgrounds**: Ensures white backgrounds to prevent "black text" issues on transparency.
