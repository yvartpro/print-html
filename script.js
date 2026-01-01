function generatePDF() {
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
    margin: 15,
    filename: filename, // Fallback
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    },
    pagebreak: { mode: ['css', 'legacy'] }
  };

  html2pdf()
    .set(opt)
    .from(element)
    .toPdf()
    .output('blob') // Get blob instead of saving directly
    .then((blob) => {
      console.log("PDF Blob generated, size:", blob.size);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename; // FORCE filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    })
    .then(() => {
      // Reset UI
      if (button) {
        button.disabled = false;
        button.innerText = originalText;
      }
      document.body.style.cursor = "default";
    })
    .catch((err) => {
      console.error("PDF Generation Error:", err);
      alert("Error: " + err.message);
      if (button) {
        button.disabled = false;
        button.innerText = originalText;
      }
      document.body.style.cursor = "default";
    });
}