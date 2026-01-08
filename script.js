import { header } from './header.js'
import { content } from './content.js'
import { footer } from './footer.js'

// Inject dynamic html on module load
const docHeader = document.getElementById('header')
const docContent = document.getElementById('content')
const docFooter = document.getElementById('footer')

if (docHeader) docHeader.innerHTML = header
if (docContent) docContent.innerHTML = content
if (docFooter) docFooter.innerHTML = footer

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('btn-download');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', generatePDF);
  }
});

function generatePDF() {
  console.log('generatePDF')

  const element = document.getElementById("pdf-root");
  const button = document.getElementById("btn-download");
  const originalText = button ? button.innerText : "Download PDF";

  // UI Feedback
  if (button) {
    button.disabled = true;
    button.innerText = "Generating...";
  }
  document.body.style.cursor = "wait";

  const filename = `activity_report_${new Date().toISOString().slice(0, 10)}.pdf`;

  const opt = {
    margin: [10, 15], // Vertical: 10mm, Horizontal: 15mm
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0,
      backgroundColor: '#ffffff' // FORCE white background to avoid black artifacts
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    },
    pagebreak: {
      mode: ['css', 'legacy'],
      avoid: ['tr', '.info-text']
    }
  };

  // PRE-PROCESS: Maintain height to keep sticky footer, but fit A4 to avoid overflow
  const originalMinHeight = element.style.minHeight;
  element.style.minHeight = "277mm"; // A4 (297mm) - Margins (10mm * 2) = 277mm

  html2pdf()
    .set(opt)
    .from(element)
    .toPdf()
    .output('blob')
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    })
    .then(() => {
      // POST-PROCESS: Restore UI
      element.style.minHeight = originalMinHeight; // Restore aesthetics
      if (button) {
        button.disabled = false;
        button.innerText = originalText;
      }
      document.body.style.cursor = "default";
    })
    .catch((err) => {
      element.style.minHeight = originalMinHeight; // Restore aesthetics
      console.error("PDF Generation Error:", err);
      alert("Error: PDF generation failed");
      if (button) {
        button.disabled = false;
        button.innerText = originalText;
      }
      document.body.style.cursor = "default";
    });
}
