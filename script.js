function generatePDF() {
  const element = document.getElementById("pdf-root");

  const opt = {
    margin: 0,
    filename: "report.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    },
    pagebreak: {
      mode: ["css", "legacy"]
    }
  };

  html2pdf()
    .set(opt)
    .from(element)
    .toPdf()
    .get("pdf")
    .then((pdf) => {
      const totalPages = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(9);
        pdf.text(
          `Page ${i} / ${totalPages}`,
          200, // X (bottom right)
          290, // Y
          { align: "right" }
        );
      }
    })
    .save();
}